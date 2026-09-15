$$\begin{align}
&\boldsymbol{E}_{-}(z)=E_{0}\left(e^{ikz}+re^{-ikz}\right)\hat{\boldsymbol{x}}\\
&\boldsymbol{H}_{-}(z)=E_{0}\eta^{-1}\left(e^{ikz}-re^{-ikz}\right)\hat{\boldsymbol{y}}\\
&\boldsymbol{E}_{+}(z)=tE_{0}e^{ikz}\hat{\boldsymbol{x}}\\
&\boldsymbol{H}_{+}(z)=tE_{0}\eta^{-1}e^{ikz}\hat{\boldsymbol{y}}\end{align}$$

$$
\begin{align}
&\hat{\boldsymbol{z}}\times(\boldsymbol{E}_+ - \boldsymbol{E}_-)\\
=&\hat{\boldsymbol{z}}\times[tE_0e^{ikz}\hat{\boldsymbol{x}} - E_0(e^{ikz} + re^{-ikz})\hat{\boldsymbol{x}}]\\
=&E_0[(t-1)e^{ikz}-re^{-ikz}]\hat{\boldsymbol{y}}\\
=&0
\end{align}
$$

$$\therefore (t-1)e^{ikz}-re^{-ikz} = 0$$

$$\hat{\boldsymbol{z}}\times[tE_0\eta^{-1}e^{ikz}\hat{\boldsymbol{y}} - E_0\eta^{-1}(e^{ikz} - re^{-ikz})\hat{\boldsymbol{y}}] = -\frac{i}{2A}\omega\epsilon\alpha(E_+ + E_-)\hat{\boldsymbol{x}}$$
$$-E_0\eta^{-1}[(t-1)e^{ikz} + re^{-ikz}] = -\frac{i}{2A}\omega\epsilon\alpha E_0[(t+1)e^{ikz}+re^{-ikz}]$$

AI说：
$z = 0$
所以第一个式子可以表示为：$t-1 = r$
第二个式子可以表示为：$\eta^{-1}(t-1+r) = \frac{i\omega\epsilon\alpha}{2A}(t+1+r)$
$$\eta^{-1}2r = \frac{i\omega\epsilon\alpha}{2A}2t$$
$$\epsilon\eta = \frac{1}{v}$$
$$C = \frac{\omega\alpha}{2A\nu}$$
$$r = iCt$$