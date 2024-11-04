from random import *
from math import *
import pandas as pd

df = pd.read_csv(r'FishWisdom\HTML\Note\Algorithm\iris.csv')
print(df)

# # 计算距离的平方
# def dis(p1, p2):
#     sum = 0
#     for i in range(len(p1)):
#         sum += (p1[i] - p2[i])**2
#     return sum

# # 选取初始中心簇
# indexs = []
# indexs.append(randint(0,len(X)-1))

# distance = []
# for i in range(len(X)):
#     distance.append(dis(X[i], X[6]))

# print(distance)
# indexs.append(distance.index(max(distance)))
# print(indexs)
# for i in range(len(X)):
#     distance[i] = dis(X[i], X[indexs[-1]]) if dis(X[i], X[indexs[-1]]) < distance[i] else distance[i]

# indexs.append(distance.index(max(distance)))

# print(indexs)
