它是从**时域 Maxwell 方程**对时间做 Fourier 变换得到的。不过你写出的第二个方程多了一个 (\epsilon)，应当修正。

## 1. 从时域 Maxwell 方程出发

SI 制下：

[
\begin{cases}
\nabla\times\mathbf E(\mathbf r,t)
==================================

-\dfrac{\partial \mathbf B(\mathbf r,t)}{\partial t},
[6pt]
\nabla\times\mathbf H(\mathbf r,t)
==================================

\mathbf J(\mathbf r,t)
+
\dfrac{\partial \mathbf D(\mathbf r,t)}{\partial t},
[6pt]
\nabla\cdot\mathbf D(\mathbf r,t)
=================================

\rho(\mathbf r,t),
[6pt]
\nabla\cdot\mathbf B(\mathbf r,t)=0.
\end{cases}
]

这里的 (\rho) 和 (\mathbf J) 通常指**自由电荷密度**和**自由电流密度**。

介质内部的束缚电荷和束缚电流已经包含在极化强度 (\mathbf P) 以及

[
\mathbf D=\epsilon_0\mathbf E+\mathbf P
]

之中了。

因此，对无外加自由电荷、自由电流的理想介质光波导，可以令

[
\rho=0,\qquad \mathbf J=0.
]

于是：

[
\begin{cases}
\nabla\times\mathbf E
=====================

-\dfrac{\partial\mathbf B}{\partial t},
[6pt]
\nabla\times\mathbf H
=====================

\dfrac{\partial\mathbf D}{\partial t},
[6pt]
\nabla\cdot\mathbf D=0,
[6pt]
\nabla\cdot\mathbf B=0.
\end{cases}
]

## 2. 引入单频场或进行 Fourier 变换

采用时间因子约定

[
\mathbf E(\mathbf r,t)
======================

\mathbf E(\mathbf r,\omega)e^{-i\omega t},
]

其他场量也采用相同形式。

因为

[
\frac{\partial}{\partial t}e^{-i\omega t}
=========================================

-i\omega e^{-i\omega t},
]

所以在频域中：

[
\frac{\partial}{\partial t}
\longrightarrow
-i\omega.
]

这一步决定了方程中 (i) 的正负号。

## 3. Faraday 定律

从

[
\nabla\times\mathbf E
=====================

-\frac{\partial\mathbf B}{\partial t}
]

得到

[
\nabla\times\mathbf E
=====================

# -(-i\omega)\mathbf B

i\omega\mathbf B.
]

若光波导材料是非磁性的，

[
\mathbf B=\mu_0\mathbf H,
]

则

[
\boxed{
\nabla\times\mathbf E
=====================

i\omega\mu_0\mathbf H
}.
]

## 4. Ampère–Maxwell 定律

从

[
\nabla\times\mathbf H
=====================

\mathbf J+\frac{\partial\mathbf D}{\partial t}
]

并令 (\mathbf J=0)，得到

[
\nabla\times\mathbf H
=====================

-i\omega\mathbf D.
]

因此正确形式是

[
\boxed{
\nabla\times\mathbf H=-i\omega\mathbf D
}.
]

若再使用本构关系

[
\mathbf D=\epsilon(\mathbf r,\omega)\mathbf E,
]

则可以写成

[
\boxed{
\nabla\times\mathbf H
=====================

-i\omega\epsilon(\mathbf r,\omega)\mathbf E
}.
]

所以你原式中的

[
\nabla\times\mathbf H=-i\omega\epsilon\mathbf D
]

是不正确的，因为这相当于重复乘了一次介电率。

正确的是二选一：

[
\nabla\times\mathbf H=-i\omega\mathbf D,
]

或者

[
\nabla\times\mathbf H=-i\omega\epsilon\mathbf E.
]

## 5. 两个散度方程

由 Gauss 定律：

[
\nabla\cdot\mathbf D=\rho.
]

在无自由电荷区域 (\rho=0)，所以

[
\boxed{\nabla\cdot\mathbf D=0}.
]

磁场 Gauss 定律始终为

[
\boxed{\nabla\cdot\mathbf B=0},
]

它表示不存在磁单极子。

## 最终正确形式

对于无自由电荷、无自由电流、非磁性的线性光波导，并采用 (e^{-i\omega t}) 时间约定：

[
\boxed{
\begin{cases}
\nabla\times\mathbf E
=====================

i\omega\mu_0\mathbf H,
[4pt]
\nabla\times\mathbf H
=====================

# -i\omega\mathbf D

-i\omega\epsilon(\mathbf r,\omega)\mathbf E,
[4pt]
\nabla\cdot\mathbf D=0,
[4pt]
\nabla\cdot\mathbf B=0.
\end{cases}
}
]

需要特别注意：

[
\boxed{
-i\omega\mathbf D
\quad\text{或}\quad
-i\omega\epsilon\mathbf E
}
]

是等价写法，但不能写成

[
-i\omega\epsilon\mathbf D.
]

此外，若选择的时间因子是 (e^{+i\omega t})，两个旋度方程中的 (i) 符号会全部反过来。
