import numpy as np
import matplotlib.pyplot as plt
from SomeFun import *
plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False
# 超参数
def func(x):# 目标函数
    return x[0] + 6*np.sin(4*x[0]) +9*np.cos(5*x[0])

st = [(0,9)] # 约束条件


def PSO(st, func, w_st=[0.4,0.8], c=[1.5,1.5], N=100, epochs=200, draw=1):
    D = len(st)
    # 绘图
    if D == 2 and draw == 1:
        analog = []
        for i in range(D):
            analog.append(np.linspace(st[i][0], st[i][1], (st[i][1] - st[i][0])*200))
        X,Y = np.meshgrid(analog[0],analog[1])
        Z = func([X,Y])

        ax3 = plt.axes(projection = '3d')
        ax3.plot_surface(X,Y,Z,cmap = 'rainbow')
        plt.show()

    # 初始化种群及速度
    X = []
    for i in range(D):
        x = (st[i][0] + np.random.rand(N)*(st[i][1] - st[i][0])).tolist()
        X.append(x)
    X = np.array(T(X))

    V = -1 + np.random.rand(N,D)*2

    # 初始化个体最优位置及最优值
    p = X # 个体最优位置
    p_best = [] # 个体最优值
    for i in range(N):
        p_best.append(func(X[i]))
        
    # 初始化全局最优位置及全局最优值
    g_best = 100
    gb = np.zeros(epochs)
        
        
    for epoch in range(epochs):
        for n in range(N):
            # 更新最优值
            p_best[n] = func(X[n]) if func(X[n])<p_best[n] else p_best[n]
            if p_best[n] < g_best:
                g_best = p_best[n]
                x_best = X[n].copy()
            w = w_st[1] - (w_st[1] - w_st[0])*epoch/epochs
            V[n] = w*V[n] + c[0]*np.random.rand(1)*(p[n] - X[n]) + c[1]*np.random.rand(1)*(x_best - X[n])
            X[n] = X[n] + V[n]
            
            # 边界处理
            V[n] = [-1 if v<-1 else 1 if v>1 else v for v in V[n]]
            for i in range(D):
                X[n][i] = st[i][0] if X[n][i]<st[i][0] else st[i][1] if X[n][i]>st[i][1] else X[n][i]
            gb[epoch] = g_best
        
    if draw == 1:
        plt.plot(range(epochs), gb, color = '#a7dce0', linewidth = 3)
        plt.xlabel('迭代次数')
        plt.ylabel('适应度值')
        plt.title('适应度进化曲线')
        plt.show()
        
    print(gb[epoch], x_best)
    
PSO(st, func)