1、在经典描述下推导：非谐振子在外加电场
$$E = \frac{1}{2}E_1(e^{i\omega_1 t} + e^{-i\omega_1 t}) + \frac{1}{2}E_2(e^{i\omega^2 t} + e^{-i\omega_2 t})$$
作用下的极化强度和频项$P(\omega_1 + \omega_2)$，非谐振子模型为：
$$\frac{\mathrm{d}^2 x}{\mathrm{d}t^2} + \Gamma\frac{\mathrm{d}x}{\mathrm{d}t} + \omega_0^2x + ax^2 = \frac{qE}{m}$$

**解**
将$x$展开为幂级数形式：
$$x = \sum_{k=1}^{\infty}x_k$$

$$\frac{\mathrm{d}^2x_1}{\mathrm{d}t^2} + \Gamma\frac{\mathrm{d}x_1}{\mathrm{d}t} + \omega_0^2x_1 = \frac{q}{m}E$$
$$\frac{\mathrm{d}^2x_2}{\mathrm{d}t^2} + \Gamma\frac{\mathrm{d}x_2}{\mathrm{d}t} + \omega_0^2x_2 = -ax_1^2$$
$$\frac{\mathrm{d}^2x_3}{\mathrm{d}t^2} + \Gamma\frac{\mathrm{d}x_3}{\mathrm{d}t} + \omega_0^2x_3 = 0$$

$$x_1(t) = \int_{-\infty}^{+\infty}x_1(\omega)e^{-i\omega t}\mathrm{d}\omega$$
$$\frac{\mathrm{d}x_1}{\mathrm{d}t} = \int_{-\infty}^{+\infty}(-i\omega)x_1(\omega)e^{-i\omega t}\mathrm{d}\omega$$
$$\frac{\mathrm{d}^2x_1}{\mathrm{d}t^2} = \int_{-\infty}^{+\infty}(-\omega^2)x_1(\omega)e^{-i\omega t}\mathrm{d}\omega$$
$$E(t) = \int_{-\infty}^{+\infty}E(\omega)e^{-i\omega t}\mathrm{d}\omega$$
$$\therefore -\omega^2x_1(\omega) - i\Gamma\omega x_1(\omega) + \omega_0^2x_1(\omega) = \frac{q}{m}E(\omega)$$
$$\therefore x_1(\omega) = \frac{q}{m}E(\omega)\frac{1}{\omega_0^2 - \omega^2 - i\Gamma\omega}$$


2、具有对称中心的介质能否具有二阶极化率强度？为什么？

**答**
不能

$$\left(\begin{matrix}-x\\-y\\-z\end{matrix}\right) = T\left(\begin{matrix}x\\y\\z\end{matrix}\right)$$

$$\therefore T = \left(\begin{matrix}-1&0&0\\0&-1&0\\0&0&-1\end{matrix}\right)$$

3、非线性极化率是否与具体的非线性过程有关？

4、非线性极化率是否与波长有关？

5、什么是非线性光学效应？简要说明产生的条件；简要说明线性光学与非线性光学物理图像的不同之处