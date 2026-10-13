1、在经典描述下推导：非谐振子在外加电场
$$E = \frac{1}{2}E_1(e^{i\omega_1 t} + e^{-i\omega_1 t}) + \frac{1}{2}E_2(e^{i\omega_2 t} + e^{-i\omega_2 t})$$
作用下的极化强度和频项$P(\omega_1 + \omega_2)$，非谐振子模型为：
$$\frac{\mathrm{d}^2 x}{\mathrm{d}t^2} + \Gamma\frac{\mathrm{d}x}{\mathrm{d}t} + \omega_0^2x + ax^2 = \frac{qE}{m}$$

**解**
将$x$展开为幂级数形式：
$$x = \sum_{k=1}^{\infty}x_k$$

代入非振子模型中，可以得到：
$$\frac{\mathrm{d}^2x_1}{\mathrm{d}t^2} + \Gamma\frac{\mathrm{d}x_1}{\mathrm{d}t} + \omega_0^2x_1 = \frac{q}{m}E$$
$$\frac{\mathrm{d}^2x_2}{\mathrm{d}t^2} + \Gamma\frac{\mathrm{d}x_2}{\mathrm{d}t} + \omega_0^2x_2 = -ax_1^2$$

由Fourier变换：
$$x_1(t) = \int_{-\infty}^{+\infty}x_1(\omega)e^{-i\omega t}\mathrm{d}\omega$$
$$\frac{\mathrm{d}x_1}{\mathrm{d}t} = \int_{-\infty}^{+\infty}(-i\omega)x_1(\omega)e^{-i\omega t}\mathrm{d}\omega$$
$$\frac{\mathrm{d}^2x_1}{\mathrm{d}t^2} = \int_{-\infty}^{+\infty}(-\omega^2)x_1(\omega)e^{-i\omega t}\mathrm{d}\omega$$
$$E(t) = \int_{-\infty}^{+\infty}E(\omega)e^{-i\omega t}\mathrm{d}\omega$$
$$\therefore -\omega^2x_1(\omega) - i\Gamma\omega x_1(\omega) + \omega_0^2x_1(\omega) = \frac{q}{m}E(\omega)$$

解得$x_1(\omega)$为：
$$\therefore x_1(\omega) = \frac{q}{m}E(\omega)\frac{1}{\omega_0^2 - \omega^2 - i\Gamma\omega}$$
方便起见，令：
$$F(\omega) = \frac{1}{\omega_0^2 - \omega^2 - i\Gamma\omega}$$
$$\therefore x_1(\omega) = \frac{q}{m}E(\omega)F(\omega)$$

由于$x_1(t)$为实函数：
$$x_1(t) = \int_{-\infty}^{+\infty} x_1(\omega)e^{-i\omega t}\mathrm{d}\omega = \int_0^{+\infty}x_1(\omega)e^{-i\omega t}\mathrm + c.c.{d}\omega$$

对于单频光电场，有：
$$x_1(t) = \frac{q}{m}E(\omega)F(\omega)e^{-i\omega_1 t} + c.c.$$

对于题中所给光电场，有：
$$x_1(t) = \frac{q}{m}E(\omega_1)F(\omega_1)e^{-i\omega_1 t} + \frac{q}{m}E(\omega_2)F(\omega_2)e^{-i\omega_2 t} + c.c.$$
$$x_1^2(t) = \sum_{\alpha,\beta}\frac{q^2}{m^2}E(\omega_\alpha)E(\omega_\beta)F(\omega_\alpha)F(\omega_\beta)e^{-i(\omega_\alpha + \omega_\beta)t}$$
其中：
$$\omega_\alpha,\omega_\beta \in \{-\omega_1, -\omega_2, \omega_1, \omega_2\}$$

设：
$$x_2(t) = \sum_{\alpha,\beta}C_{\alpha\beta}e^{-i(\omega_\alpha + \omega_\beta)t}$$
$$\therefore [-(\omega_\alpha + \omega_\beta)^2 + \Gamma\cdot-i(\omega_\alpha + \omega_\beta) + \omega_0^2]C_{\alpha\beta} = -\frac{aq^2}{m^2}E(\omega_\alpha)E(\omega_\beta)F(\omega_\alpha)F(\omega_\beta)$$
$$\therefore C_{\alpha\beta} = -\frac{aq^2}{m^2}E(\omega_\alpha)E(\omega_\beta)F(\omega_\alpha)F(\omega_\beta)F(\omega_\alpha + \omega_\beta)$$
$$\therefore x_2(t) = \sum_{\alpha,\beta}-\frac{aq^2}{m^2}E(\omega_\alpha)E(\omega_\beta)F(\omega_\alpha)F(\omega_\beta)F(\omega_\alpha + \omega_\beta)e^{-i(\omega_\alpha + \omega_\beta)t}$$

$$\because P^{(2)}(t) = -nex_2(t)$$
当$m,n$分别取$1,2$、$2,1$、$-1,-2$、$-2,-1$时，得解：
$$P_{\omega_1+\omega_2}^{(2)}(t) = \frac{2neaq^2}{m^2}E(\omega_1)E(\omega_2)F(\omega_1)F(\omega_2)F(\omega_1 + \omega_2)e^{-i(\omega_1 + \omega_2)t} + c.c.$$

其中：
$$E(\omega_1) = \frac{1}{2}E_1$$
$$E(\omega_2) = \frac{1}{2}E_2$$


2、具有对称中心的介质能否具有二阶极化率强度？为什么？

**答**
不能

$$\left(\begin{matrix}-x\\-y\\-z\end{matrix}\right) = T\left(\begin{matrix}x\\y\\z\end{matrix}\right)$$

$$\therefore T = \left(\begin{matrix}-1&0&0\\0&-1&0\\0&0&-1\end{matrix}\right) = -I$$
$$\boldsymbol{P}' = T\boldsymbol{P}$$
$$\boldsymbol{E}' = T\boldsymbol{E}$$
$$P^{(2)}_\mu(t) = \epsilon_0\sum_{m,n\\\alpha,\beta}\chi^{(2)}_{\mu\alpha\beta}(\omega_m, \omega_n)E_\alpha(\omega_m)E_\beta(\omega_n)e^{-i(\omega_m+\omega_n)t}$$
$$-P^{(2)}_\mu(t) = \epsilon_0\sum_{m,n\\\alpha,\beta}{\chi^{(2)}_{\mu\alpha\beta}}'(\omega_m, \omega_n)[-E_\alpha(\omega_m)][-E_\beta(\omega_n)]e^{-i(\omega_m+\omega_n)t}$$
$$\therefore {\chi^{(2)}_{\mu\alpha\beta}}' = -\chi^{(2)}_{\mu\alpha\beta}$$
由于介质具有对称中心，反演前后介质物理性质相同：
$$\therefore {\chi^{(2)}_{\mu\alpha\beta}}' = \chi^{(2)}_{\mu\alpha\beta}$$
$$\therefore \chi^{(2)}_{\mu\alpha\beta} = 0$$
$$\therefore P^{(2)}_{\mu} = 0$$

3、非线性极化率是否与具体的非线性过程有关？

**答**
有关

以二阶非线性极化率为例：
$$\chi^{(2)}(\omega_\alpha, \omega_\beta) = -A\frac{ne^3}{\epsilon_0m^2}F(\omega_\alpha + \omega_\beta)F(\omega_\alpha)F(\omega_\beta)$$
对于两个确定的频率$\omega_1$与$\omega_2$：
和频过程：
$$\omega_\alpha = \omega_1,\quad \omega_\beta = \omega_2$$
差频过程：
$$\omega_\alpha = \omega_1,\quad \omega_\beta = -\omega_2$$
或
$$\omega_\alpha = -\omega_1,\quad \omega_\beta = \omega_2$$
$$\because F(\omega) = \frac{1}{\omega_0^2 - \omega^2 - 2ih\omega}$$
因此对于不同的非线性光学过程，非线性极化率是不同的。



4、非线性极化率是否与波长有关？
**答**
有关
$$\chi^{(2)}(\omega_\alpha, \omega_\beta) = -A\frac{ne^3}{\epsilon_0m^2}F(\omega_\alpha + \omega_\beta)F(\omega_\alpha)F(\omega_\beta)$$
$$\because F(\omega) = \frac{1}{\omega_0^2 - \omega^2 - 2ih\omega}$$
$$\omega = \frac{2\pi}{T} = \frac{2\pi c}{\lambda}$$
显然与波长有关

5、什么是非线性光学效应？简要说明产生的条件；简要说明线性光学与非线性光学物理图像的不同之处
