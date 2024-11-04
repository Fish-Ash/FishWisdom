import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

x = np.array(pd.read_csv(r"HTML\Note\Algorithm\PythonCode\x.txt", header=None))
y = np.array(pd.read_csv(r"HTML\Note\Algorithm\PythonCode\y.txt", header=None))

x = [x[i][0] for i in range(len(x))]
y = [y[i][0] for i in range(len(y))]


# 使用 NumPy 的 gradient 函数计算数值导数
dy = np.gradient(y, x)

# # 绘制原始数据及其数值导数
# plt.figure(figsize=(10, 6))

# # 原始数据
# plt.subplot(2, 1, 1)
# plt.plot(x, y, 'bo-', label='Original Data')
# plt.title('Original Data')
# plt.xlabel('x')
# plt.ylabel('y')
# plt.legend()

# # 数值导数
# plt.subplot(2, 1, 2)
# plt.plot(x, dy, 'ro-', label='Numerical Derivative')
# plt.title('Numerical Derivative of Data')
# plt.xlabel('x')
# plt.ylabel('dy/dx')
# plt.legend()

# plt.tight_layout()
# plt.show()
