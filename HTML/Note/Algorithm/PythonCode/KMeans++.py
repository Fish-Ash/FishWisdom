from random import *
from math import *
from DataPro import *
from SomeFun import *



df = data_read(r'HTML\Note\Algorithm\PythonCode\train.csv')
K = len(data_count(df, 'Survived'))

data, label = data_or_label(df,'Survived')

def KMeanspp(data, K):
    cluster = [[] for _ in range(K)]
    # 选取初始中心簇
    indexs = []
    indexs.append(randint(0,len(data)-1))
    distance = []
    for i in range(len(data)):
        distance.append(dis(data.loc[i,:].tolist(), data.loc[indexs[-1],:].tolist()))
    indexs.append(distance.index(max(distance)))
    if K > 2:
        for _ in range(K-2):
            for i in range(len(data)):
                distance[i] = dis(data.loc[i,:].tolist(), data.loc[indexs[-1],:].tolist()) if dis(data.loc[i,:].tolist(), data.loc[indexs[-1],:].tolist()) < distance[i] else distance[i]
            indexs.append(distance.index(max(distance)))
    
    for i in range(len(data)):
        distance = []
        for k in range(K):
            distance.append(dis(data.loc[i,:].tolist(), data.loc[indexs[k],:].tolist()))
        cluster[distance.index(min(distance))].append(i)



    return cluster
cluster = KMeanspp(data, 2)
print(data.loc(cluster[1]))
