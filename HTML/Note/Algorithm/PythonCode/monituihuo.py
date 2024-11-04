import matplotlib.pyplot as plt
import numpy as np
from random import *
from math import *
from tqdm import tqdm


# 函数定义与可视化
def fun(x, y):
    return 4*x**2-2.1*x**4+x**6/3+x*y-4*y**2+4*y**4

# x = np.linspace(-3, 3, 100)
# y = np.linspace(4, 5, 100)
# X, Y = np.meshgrid(x, y)
# Z = f(X, Y)
# ax = plt.axes(projection='3d')
# ax.plot_surface(X, Y, Z, rstride=1, cstride=1, cmap='viridis', edgecolor='none')
# plt.show()


def Metropolis

# 初始化
T0 = 10^30
T = T0
Tf = 0.001
alpha = 0.99
input_num = 2
print(f'共有{input_num}个参数')
limit = [[None, None] for _ in range(input_num)]
# for i in range(input_num):
#     limit[i][0] = float(input(f'第{i+1}个参数的下限为：'))
#     limit[i][1] = float(input(f'第{i+1}个参数的上限为：'))
limit = [[-5, 5], [-5, 5]]
    
input = [None]*input_num
input_ = input
for i in range(input_num):
    input[i] = limit[i][0] + (limit[i][1] - limit[i][0])*random()
    
output = fun(*input)

# print(limit)
# print(input)
# print('output = ', output)


while T > Tf:
    # 产生新解
    for i in range(input_num):
        input_[i] = input[i] + (limit[i][1] - limit[i][0])*(random() - random())*T/T0
        if input_[i] < limit[i][0] or input_[i] > limit[i][1]:
            break
        # print(input_[i])
    # 更新
    output_ = fun(*input_)
    if output_ < output:
        input = input_
        output = output_
        # print('output = ', output_)
    elif random() < exp((output - output_)/T):
        input = input_
        output = output_
        # print('output = ', output_)
        
    T = alpha*T
    print(T)