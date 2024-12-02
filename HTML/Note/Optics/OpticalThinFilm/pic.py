n = [1, 1.38, 1.9, 1.65, 1.52]

r = [(n[i] - n[i+1])/(n[i] + n[i+1]) for i in range(len(n)-1)]
print(r)
