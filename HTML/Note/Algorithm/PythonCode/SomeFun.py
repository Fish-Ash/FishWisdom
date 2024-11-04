import numpy as np

# 求列表均值
def E(L):
    return sum(L)/len(L)

# 计算距离的平方
def dis(p1, p2):
    sum = 0
    for i in range(len(p1)):
        sum += (p1[i] - p2[i])**2
    return sum


# 矩阵转置
def T(M):
    try:
        return [[M[j][i] for j in range(len(M))] for i in range(len(M[0]))]
    except:
        return [[M[i]] for i in range(len(M))]

# 矩阵求逆
def matrix_inv(M):
    return np.linalg.inv(M)

# 矩阵乘法
def matrix_dot(M1, M2):
    try:
        c1, r1 = len(M1), len(M1[0])
        c2, r2 = len(M2), len(M2[0])
    except:
        print("矩阵不合法")
        return

    if r2 != c1:
        print("矩阵组不满足相乘条件")
        return

    res = []
    for c in range(c2):
        temp = []
        for r in range(r1):
            temp.append(sum([i*j for i,j in zip(T(M1)[r], M2[c])]))
        res.append(temp)

    return res

# Min_Max归一化，仅适用于DataFrame
def Min_Max(M):
    M = M.astype(float)
    M_max = M.max().max()
    M_min = M.min().min()
    for r in range(M.shape[0]):
        for c in range(M.shape[1]):
            M.iloc[r,c] = (float(M.iloc[r,c]) - M_min)/(M_max - M_min)
    return M