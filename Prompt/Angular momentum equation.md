## 角动量方程

$$
\sin\theta\frac{\partial}{\partial\theta}
\left(
\sin\theta\frac{\partial Y}{\partial\theta}
\right)
+
\frac{\partial^2Y}{\partial\phi^2}
=
-l(l+1)Y\sin^2\theta
$$

这个方程在经典电动力学中求解拉普拉斯方程时出现过。

令

$$
Y(\theta,\phi)=\Theta(\theta)\Phi(\phi)
$$

则

$$
\Phi\sin\theta\frac{\mathrm{d}}{\mathrm{d}\theta}
\left(
\sin\theta\frac{\mathrm{d}\Theta}{\mathrm{d}\theta}
\right)
+
\Theta\frac{\mathrm{d}^2\Phi}{\mathrm{d}\phi^2}
=
-l(l+1)\Theta\Phi\sin^2\theta
$$

因此

$$
\frac{\sin\theta}{\Theta}
\frac{\mathrm{d}}{\mathrm{d}\theta}
\left(
\sin\theta\frac{\mathrm{d}\Theta}{\mathrm{d}\theta}
\right)
+
\frac{1}{\Phi}
\frac{\mathrm{d}^2\Phi}{\mathrm{d}\phi^2}
=
-l(l+1)\sin^2\theta
$$

整理得

$$
\frac{\sin\theta}{\Theta}
\frac{\mathrm{d}}{\mathrm{d}\theta}
\left(
\sin\theta\frac{\mathrm{d}\Theta}{\mathrm{d}\theta}
\right)
+
l(l+1)\sin^2\theta
=
-\frac{1}{\Phi}
\frac{\mathrm{d}^2\Phi}{\mathrm{d}\phi^2}
$$

左式仅与 $\theta$ 有关，而右式仅与 $\phi$ 有关，因此二者都必须等于同一个常数。令

$$
\frac{\sin\theta}{\Theta}
\frac{\mathrm{d}}{\mathrm{d}\theta}
\left(
\sin\theta\frac{\mathrm{d}\Theta}{\mathrm{d}\theta}
\right)
+
l(l+1)\sin^2\theta
=
m^2
$$

以及

$$
\frac{1}{\Phi}\frac{\mathrm{d}^2\Phi}{\mathrm{d}\phi^2}
=
-m^2
$$

称 $m^2$ 为**分离常数**。

对于 $\phi$ 方程，

$$
\frac{1}{\Phi}\frac{\mathrm{d}^2\Phi}{\mathrm{d}\phi^2}
=
-m^2
$$

可得

$$
\Phi(\phi)=e^{im\phi}
$$

对于 $\theta$ 方程，

$$
\frac{\sin\theta}{\Theta}
\frac{\mathrm{d}}{\mathrm{d}\theta}
\left(
\sin\theta\frac{\mathrm{d}\Theta}{\mathrm{d}\theta}
\right)
+
l(l+1)\sin^2\theta
=
m^2
$$

其解为

$$
\Theta(\theta)=A P_l^m(\cos\theta)
$$

其中：

- $P_l^m$：缔合勒让德函数

  $$
  P_l^m(x)
  \equiv
  (1-x^2)^{|m|/2}
  \left(
  \frac{\mathrm{d}}{\mathrm{d}x}
  \right)^{|m|}
  P_l(x)
  $$

- $P_l$：勒让德多项式，由 Rodrigues 公式定义

  $$
  P_l(x)
  \equiv
  \frac{1}{2^l l!}
  \left(
  \frac{\mathrm{d}}{\mathrm{d}x}
  \right)^l
  (x^2-1)^l
  $$

## 归一化条件

球坐标系中的体积元为

$$
\mathrm{d}^3\boldsymbol{r}
=
r^2\sin\theta\,
\mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}\phi
$$

因此，归一化条件可以写为

$$
\begin{aligned}
\int |\psi|^2r^2\sin\theta\,
\mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}\phi
&=
\int |R|^2|Y|^2r^2\sin\theta\,
\mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}\phi
\\
&=
\int |R|^2r^2\,\mathrm{d}r
\cdot
\int |Y|^2\sin\theta\,
\mathrm{d}\theta\,\mathrm{d}\phi
\\
&=1
\end{aligned}
$$

其依据为

$$
\int |\Psi|^2\,\mathrm{d}^3\boldsymbol{r}=1
$$

因为

$$
\Psi=\psi_n e^{-iE_nt/\hbar}
$$

所以

$$
|\Psi|^2
=
\Psi\Psi^*
=
|\psi|^2
$$

为方便起见，可以分别对径向函数 $R$ 和角向函数 $Y$ 进行归一化：

$$
\int_0^\infty |R|^2r^2\,\mathrm{d}r=1
$$

$$
\int_0^{2\pi}
\int_0^\pi
|Y|^2\sin\theta\,
\mathrm{d}\theta\,\mathrm{d}\phi
=
1
$$

> 分别归一化的取法并不唯一。这里令两个积分都等于 1，只是为了方便。
>
> $\theta$ 的取值范围为 $0\sim\pi$，表示从正 $z$ 轴到负 $z$ 轴扫描一个半圆；$\phi$ 的取值范围为 $0\sim2\pi$，表示绕 $z$ 轴旋转一周。二者共同可以描述球面上的任意一点。

## 球谐函数

**球谐函数**是归一化的角波函数：

$$
Y_l^m(\theta,\phi)
=
\epsilon
\sqrt{
\frac{(2l-1)(l-|m|)!}
{4\pi(l+|m|)!}
}
e^{im\phi}
P_l^m(\cos\theta)
$$

其中

$$
\begin{aligned}
Y&=\Theta\Phi\\
&=A P_l^m(\cos\theta)e^{im\phi}
\end{aligned}
$$

当 $m\geq 0$ 时，

$$
\epsilon=(-1)^m
$$

当 $m\leq 0$ 时，

$$
\epsilon=1
$$

球谐函数彼此正交，因此

$$
\int_0^{2\pi}
\int_0^\pi
\left[Y_l^m(\theta,\phi)\right]^*
\left[Y_{l'}^{m'}(\theta,\phi)\right]
\sin\theta\,
\mathrm{d}\theta\,\mathrm{d}\phi
=
\delta_{ll'}\delta_{mm'}
$$

> 任意两个具有不同量子数的球谐函数彼此正交。

> **问题：** 如何证明球谐函数的正交性？这种正交性有什么物理意义？

其中：

- $l$：角量子数
- $m$：磁量子数