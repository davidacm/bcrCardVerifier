import base64, hashlib, json, re

salt = b'c8m.qp+xv3*rhfUz'
hashFunction = lambda x: base64.b64encode(hashlib.scrypt(x.encode('mbcs'), salt=salt, n=128, r=8, p=1)).decode("UTF-8")

cardExp = re.compile(r",\d{8,23}=")
cards = set()
total = 0
notFound = []
hashes = set()
fileBufferSize = 5*2**20

def processData(f):
	global cards, total
	f= open(f, "r", fileBufferSize, "UTF-8")
	for k in f:
		r= cardExp.search(k)
		if r:
			cards.add(r.group(0)[1:-1])
			total+=1
		else: notFound.append(k)
	f.close()

def hasher(s):
	global hashes
	for k in s:
		tmp = hashFunction(k)
		if tmp in hashes:
			print ("error, hash collision, total hashes: ", len(hashes))
			break
		hashes.add(tmp)

def saveHashes(f):
	f= open(f, "w", fileBufferSize, "UTF-8")
	json.dump(list(hashes), f, indent=0)
	f.close()


def process(fList, fOut):
	for k in fList:
		print ("process file", k)
		processData(k)
		print ("file processed, length set: ", len(cards))
	print("hashing set")
	hasher(cards)
	print ("saving data")
	saveHashes(fOut)
	print("finished!")

# escape characters to enable compatibility with firebase keys.
replacements = {'.': '1',
'$': '2',
'#': '3',
'/': '4',
'[':'5',
']': '6'}

def escapeCharacters(s):
	s= s.replace("%", "%0")
	for k in replacements: s= s.replace(k, "%" +replacements[k])
	return s

def unescapeCharacters(s):
	for k in replacements: s = s.replace("%" +replacements[k], k)
	return s.replace("%0", "%")