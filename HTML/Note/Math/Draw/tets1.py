import numpy as np
import matplotlib.pyplot as plt

# 定义 x 的范围 (ln(x) 在 x > 0 定义)
x = np.linspace(0.1, 10, 500)  # 避免 log(0)，起点设置为 0.1
y = np.log(x)  # 自然对数

# 绘制曲线
plt.figure(figsize=(8, 6))
plt.plot(x, y, label=r"$y = \ln(x)$", color="blue", linewidth=2)

# 添加标题和标签
plt.title("Graph of y = ln(x)", fontsize=14)
plt.xlabel("x", fontsize=12)
plt.ylabel("y", fontsize=12)

# 添加网格和图例
plt.grid(True, linestyle="--", alpha=0.7)
plt.axhline(0, color="black", linewidth=0.8)  # x轴
plt.axvline(0, color="black", linewidth=0.8)  # y轴
plt.legend(fontsize=12)

# 显示图形
plt.show()
