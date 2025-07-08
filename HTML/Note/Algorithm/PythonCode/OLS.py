import pandas as pd
from matplotlib import pyplot as plt

data = pd.read_excel("data2.xlsx")
x = data['x'].tolist()
y = data['y'].tolist()
n = len(x)

t = sum([xi * yi for xi,yi in zip(x,y)])
bar_x = sum(x)/n
bar_y = sum(y)/n

k = (t - len(x)*bar_x*bar_y)/(sum([xi**2 for xi in x]) - len(x)*bar_x**2)
b = bar_y - k * bar_x
deltax = [abs(k*x[i]+b - y[i]) for i in range(n)]
print(f"k = {k:.4f}")
print(f"b = {b:.4f}")

plt.plot(x,y, 'o')
plt.plot([x[0], x[-1]], [k*x[0] + b, k*x[-1] + b])
plt.show()