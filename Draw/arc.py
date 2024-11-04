import matplotlib.pyplot as plt
import mpl_toolkits.axisartist as axisartist
import numpy as np

x = np.linspace(-1, 1, 500)
y = np.arcsin(x)



# fig = plt.figure()
# ax = axisartist.Subplot(fig, 111)
# fig.add_axes(ax)


# plt.gca().set_aspect('equal')

# plt.gca().spines['bottom'].set_position(('data',0))
# ax.axis["bottom"].set_axisline_style("-|>", size = 1.5)
# ax.axis["left"].set_axisline_style("->", size = 1.5)
# ax.axis["top"].set_visible(False)
# ax.axis["right"].set_visible(False)
# plt.plot(x, y)
# plt.show()

#绘制在同一个figure中
fig = plt.figure()
plt.plot(x,y)
plt.gca().set_aspect('equal')

plt.xlim((-1,1))
plt.ylim((-2,2))

ax = plt.gca()
ax.spines['right'].set_color('None')
ax.spines['top'].set_color('None')
ax.xaxis.set_ticks_position('bottom')
ax.yaxis.set_ticks_position('left')
ax.spines['bottom'].set_position(('data',0))
ax.spines['left'].set_position(('data',0))
plt.show()