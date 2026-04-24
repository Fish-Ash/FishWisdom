// 由 scripts/html-to-pages.js 自动生成，请勿手改
export const pagesData = {
  "clock": { title: "clock", content: `` },
  "home": { title: "不惑", content: `<div class="SearchBox" id="SearchBox">
            <input type="text" placeholder="搜索" id="SearchText">
            <i class="fa-solid fa-magnifying-glass SearchGlass" id="SearchGlass"></i>
        </div>
        
        <h1>目录</h1>
        
        <a href="/note/signals_and_linearsystems/signals_and_linearsystems" class="book">信号与线性系统分析</a>
        <a href="/note/analog_electronics_technique/analog_electronics_technique" class="book"> 模拟电路 </a>
        <a href="/note/digital_eletronic_technique/catalog" class="book">数字电路</a>
        <a href="/note/mechanical_principle/mechanical_principle" class="book">机械原理</a>
        <a href="/note/optics/catalog" class="book">光学</a>
        <a href="/note/maozedongthought/maothought" class="book">毛概</a>
        <br>
        <a href="/note/instrument/errortheory/catalog" class="book">误差理论</a>
        <a href="/note/instrument/precision/catalog" class="book">仪器精度理论</a>
        <a href="/note/stm32/stm32" class="book">嵌入式系统</a>
        <a href="/note/computer/catalog" class="book">编程</a>
        
        <br>
        <h2>数学</h2>
        <a href="/note/math/mathematic/catalog" class="book">高等数学</a>
        <a href="/note/math/probability/catalog" class="book">概率论</a>
        <a href="/note/math/linearalgebra/catalog" class="book">线性代数</a>
        <a href="/note/math/complexvariablefunction/catalog" class="book">复变函数</a>
        <br>
        <h2>哲学</h2>
        <a href="/note/politics/marxism/chpater0" class="book">马克思主义</a>` },
  "homepage/homepage": { title: "个人主页", content: `
    ` },
  "index": { title: "登陆页面", content: `
    <div class="logo">
        不惑
    </div>
    <div class="login">   
        <h2>登陆</h2>
        <span>账号：</span>
        <input type="text" placeholder="请输入账号" class="input">
        <br>
        <span>密码：</span>
        <input type="password" placeholder="请输入密码" class="input">
        <div>
        <button class="login_btn"><a href="/">登 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</a></button>
        </div>
    </div>
` },
  "machine_learning": { title: "机器学习", content: `<b>过拟合（overfitting）</b>：学习器的学习能力过于强大，把训练样本所包含的非一般特性当做了潜在样本具有的一般性质，导致泛化能力下降。
        <br><b>欠拟合（underfitting）</b>：学习器的学习能力低下，对训练样本的一般性质尚未学好。
        <br><b>测试集（testing set）</b>：用于测试学习器对新样本辨别能力的数据集。从样本真实分布中<b>独立同分布采样</b>得到，同时应尽可能与训练集互斥（即测试样本尽量不在训练集中出现）。
        <br><b>测试误差（testing error）</b>：学习器在测试集上的误差，可作为泛化误差的近似。

        <h3>测试集划分方法</h3>
        <p><b>留出法（hold-out）</b>：直接将数据集划分为两个互斥的集合，其中一个集合作为训练集S，另一个作为测试集T。为了保证数据分布的一致性，常使用<b>分层采样</b>的采样方式。</p>
    </p>` },
  "mathematical_model": { title: "模板", content: `</p>` },
  "navigation": { title: "导航", content: `<h1>导航</h1>

        <h2 lang="en">AI</h2>
        
        <a href="https://www.doubao.com/chat/" target="_blank" class="button">豆包</a>
        <a href="https://chat.deepseek.com/" target="_blank" class="button" lang="en">DeepSeek</a>
        <a href="https://chatgpt.com" target="_blank" class="button" lang="en">GPT</a>


        <br>

        <a href="https://scholar.google.com.hk/?hl=zh-CN" target="_blank" class="button">谷歌学术</a>
        <a href="https://www.sci-hub.st/" target="_blank" class="button" lang="en">SCI-Hub</a>

        <br>
        <a href="https://www.csdn.net" target="_blank" class="button">CSDN</a>
        <a href="https://www.cnki.net" target="_blank" class="button">知网</a>
        <br>
        <a href="https://cnki.nbsti.net/CSYDMirror/Trade/yearbook/single/N2022060061?z=Z024" target="_blank" class="button">中国能源统计年鉴</a>
        <a href="https://www.ceads.net.cn/" target="_blank" class="button">中国碳核算数据库</a>
        <br>
        <a href="https://openstd.samr.gov.cn/bzgk/gb/index" target="_blank" class="button">国家标准全文公开系统</a>
        <a href="https://www.runoob.com/" target="_blank" class="button">菜鸟教程</a>
        <br>
        <a href="https://github.com/" target="_blank" class="button">GutHub</a>
        
        
        <h2>期刊</h2>
        <h3>Top</h3>
        <a href="https://m.opticsjournal.net/journals/hpl.cshtml" class="button">High Power Laser Science and Engineering</a>
        <a href="https://opg.optica.org/aop/home.cfm">Advances in Optics and Photonics</a>
        <h3>2区</h3>
        <a href="https://prj.opticsjournal.net/Journals/zgjg.cshtml" traget="_blank" class="button">中国激光</a>
        
        <h3>Others</h3>
        <a href="https://signal.ejournal.org.cn/" class="button">信号处理</a>
        <a href="https://www.gpxygpfx.com/CN/column/column105.shtml" target="_blank" class="button">光谱学与光谱分析</a>
        <a href="https://www.chrom-china.com/CN/1000-8713/home.shtml" target="_blank" class="button">色谱</a>
        <br>
        <a href="https://opg.optica.org/oe/home.cfm" class="button">Optic Express</a>

        <h2>小工具</h2>
        <a href="https://app.diagrams.net/" target="_blank" class="button">流程图绘制</a>
        <a href="https://trexlabel.com/prepare" target="_blank" class="button">标注工具</a>
        <a href="https://setpdf.com/zh-CN/split-pdf" target="_blank" class="button">PDF分割</a>` },
  "note/algorithm/arima": { title: "算法", content: `<h1>时间序列模型</h1>

        <h2>时间序列</h2>
        <p>
            <b>时间序列数据</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;按照时间顺序排列的一组数据。
        <br>&nbsp;&nbsp;&nbsp;&nbsp;对同一对象在不同时间连续观察所得到的数据，包含时间要素与数值要素。
        <ul>
            <li>时期时间序列：数值要素反映现象在一定时期内发展的结果
                <br>例：我国历年的GDP数据
            </li>
            <li>时点时间序列：数值要素反映现象在一定时点上的瞬间水平
                <br>例：每隔一小时测得的温度数据
            </li>
        </ul>
        特点：时期时间序列可以累加、时点时间序列不可累加
        </p>
        <h2>自回归模型（AR Model，Auto-Regression Model）</h2>
        <h3>介绍</h3>
        <p>
            &nbsp;&nbsp;&nbsp;&nbsp;如果一个单变量时序数据\\(y_t\\)可以以此时序数据本身的多个时刻之前的点的值来进行回归，称这种情况为自回归，公式如下：
            $$y_t = \\alpha_1y_{t-1} + \\alpha_2y_{t-2} + \\cdots + \\alpha_py_{t-p}+\\omega$$
            &nbsp;&nbsp;&nbsp;&nbsp;这里的\\(p\\)称为AR模型的阶数，记作AR(\\(p\\))，\\(\\alpha\\)是系数项，\\(\\omega\\)是白噪声
        <h2>差分自回归移动平均模型（ARIMA Model）</h2>
        <h3>介绍</h3>
        <p>
            &nbsp;&nbsp;&nbsp;&nbsp;ARIMA模型是自回归模型（AR）、移动平均模型（MA）与差分法的结合体
            <br>
            <br>&nbsp;&nbsp;&nbsp;&nbsp;ARIMA（\\(p,d,q\\)）中，\\(p\\)是自回归项、\\(q\\)为移动平均项数、\\(d\\)为时间序列平稳时所做的差分次数

            <br>
            <br><b>平稳性</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;经由样本时间序列所得的你和曲线在未来一段时间仍能按现有形态延续下去的性质
            <br>&nbsp;&nbsp;&nbsp;&nbsp;要求序列的均值和方差不发生明显变化
            <ul>
                <li>严平稳：序列所有的统计性质都不随时间的推移而发生变化</li>
                <li>宽平稳（弱平稳、二阶平稳、协方差平稳）：序列的期望与相关系数不变，也就是说t时刻的值依赖于过去的信息</li>
            </ul>

            <br>
        </p>
        <h3>流程</h3>
        <ol>
            <li>进行平稳性检验，对于非平稳时间序列进行d阶差分使其平稳</li>
            <li>对平稳时间序列求自相关系数和偏自相关系数，进行分析得到最佳阶数p、q</li>
            <li>由以上参数d、q、p构建ARIMA模型</li>
        </ol>

        <h3>平稳性检验</h3>
        <ul>
            <li>DF检验</li>
            <li>ADF检验</li>
        </ul>
        <p><b></b></p>


        <hr>
        <p>回归模型
            <ul>
                <li>静态模型：解释变量与被解释变量是同期的
                    <br>例如：\\(Y_t = \\alpha + \\beta X_t + \\epsilon_t~~~t = 1,\\cdots,T\\)
                </li>
                <li>动态模型：解释变量包含被解释变量的滞后项
                    <br>例如：\\(Y_t = \\alpha + \\beta X_t + \\gamma Y_{t-1} + \\epsilon_t~~~t=1,\\cdots,T\\)
                </li>
                <li>有限分布滞后模型：解释变量既包含同期，又包含有限的滞后期
                    <br>例如：\\(Y_t = \\alpha + \\beta_1 X_t + \\beta_2 X_{t-1} + \\epsilon_t~~~t=1,\\cdots,T\\)
                </li>
                <li>动态有限分布滞后模型：解释变量既包含同期，又包含有限的滞后期，还包含被解释变量的滞后项
                    <br>例如：\\(Y_t = \\alpha + \\beta_1 X_t + \\beta_2 X_{t-1} + \\gamma Y_{t-1} + \\epsilon_t~~~t=1,\\cdots,T\\)
                </li>
            </ul>
        </p>



        <hr>
        <p>
            典型的非平稳序列：
            <ul>
                <li>随机游走过程</li>
                <li>随机趋势过程</li>
                <li>趋势非平稳过程</li>
            </ul>
        </p>

        <p><b>随机游走过程</b>：
        <br>定义：
        $$\\{Y_t\\}:Y_t = Y_{t-1}+\\epsilon_t$$
        其中\\(\\epsilon_t\\)为白噪声过程
        $$\\begin{align}
        Y_t &= Y_{t-1} + \\epsilon_t\\\\
        &= Y_{t-2} + \\epsilon_{t-1} + \\epsilon_t\\\\
        &= \\cdots \\\\
        &= Y_0 + \\mathop{\\sum}_{i=0}^{t-1}\\epsilon_{t-i}
        \\end{align}$$
        </p>

        <p><b>随机趋势过程</b>：
        <br>定义：
        $$\\{Y_t\\}:Y_t = \\alpha + Y_{t-1} + \\epsilon_t(\\alpha\\neq 0)$$
        随机趋势过程即为随机游走过程加一非零常数项
        $$\\begin{align}
        Y_t &= \\alpha + Y_{t-1} + \\epsilon_t\\\\
        &= \\alpha + \\alpha + Y_{t-2} + \\epsilon_{t-1} + \\epsilon_t\\\\
        &= \\cdots \\\\
        &= t\\alpha + Y_0 + \\mathop{\\sum}_{i=0}^{t-1}\\epsilon_{t-i}
        \\end{align}$$
        </p>
        </p>` },
  "note/algorithm/catalog": { title: "算法", content: `<h1>算法</h1>
        <h2>目录</h2>
        <ul class="catalog">
            <li><a href="/note/algorithm/concept">一些概念</a></li>
            <li><a href="/note/algorithm/ols">最小二乘法</a></li>
            <li><a href="/note/algorithm/collaborative_filtering">协同过滤算法</a></li>
        </ul>` },
  "note/algorithm/collaborative_filtering": { title: "算法", content: `<h1>协同过滤算法</h1>

        <p>目前主流的协同过滤算法有<b>基于用户的协同过滤算法</b>以及<b>基于物品的协同过滤算法</b>。</p>
        
        <h2>基于用户的协同过滤算法</h2>

        <p>流程：
            <ol>
                <li>构建用户-项目评分矩阵</li>
                <li>计算用户之间的相似度</li>
                <li>找出目标用户的最邻近邻居集合</li>
                <li>对最邻近邻居集合进行加权，产生目标用户的推荐集</li>
            </ol>
        </p>
        <p>缺点：
            <ol>
                <li>用户信息量非常有限，用户对项目的评分数据相对稀少，数据冷启动问题严重，难以找到相似用户集。</li>
            </ol>
        </p>

        <h3>计算用户相似度</h3>
        <p>
            <ul>
                <li><b>皮尔逊相关系数</b></li>
                <li><b>调整的向量余弦法</b></li>
                <li><b>约束的皮尔逊相关系数法</b></li>
                <li><b>斯皮尔曼相关系数法</b></li>
            </ul>
        </p>` },
  "note/algorithm/compressedsensing": { title: "压缩感知理论", content: `<h1>压缩感知理论</h1>

        <p><span lang="en">Compressed Sensing</span>理论可以以远低于奈奎斯特采样定理所要求的标准对信号进行采样并重建。</p>

        <h2>条件</h2>
        <b>稀疏性条件</b>
        <p>信号在某个基或字典下是稀疏的</p>
        <b>相干性条件</b>
        <p>测量矩阵与稀疏基之间的相干性越低，越容易重建</p>

        <hr>
        <b lang="en">basis</b>：
        <p>对于一个<span lang="en">n</span>维的向量空间，一个基由<span lang="en">n</span>个线性无关的向量组成。该向量空间的任一向量均可由基中的向量线性组合而成。</p>
    
        <b>正交基</b>
        <p>正交基中，任意两个向量内积为0</p>

        <b>稀疏基</b>
        <p>使信号\\(x\\)在此基下的表示\\(s\\)具有很少非零分量的基\\(\\Psi\\)</p>
        $$x = \\Psi s$$
        <p>完备性：基的数量等于信号空间的维度，对任一信号仅有唯一的表示方式</p>
        <ul>
            <li>傅里叶基</li>
            <li>小波基</li>
            <li>离散余弦变换基</li>
            <li>字典学习</li>
        </ul>

        <b lang="en">Dictionary</b>
        <p>对于字典矩阵\\(\\mathbb{D}^{m\\times n}\\)，每列称为一个原子</p>
        <p>\\(m\\)为信号维度</p>
        <p>\\(n\\)为字典中的原子数量</p>
        <p>过完备性：原子数大于信号维度，提供了多种信号表示方式</p>

        量化稀疏性
        <ul>
            <li><span lang="en">L1</span>范数越小，信号越稀疏</li>
            <li>稀疏度指标：非零元素个数/总元素个数</li>
        </ul>` },
  "note/algorithm/concept": { title: "算法", content: `<h1>一些概念</h1>

        <b>鲁棒性</b>：

        <br><br>
        <b>残差</b>：
        <p>数据真实值与预测值间的偏差</p>
        <b>数据稀疏性</b>：
        <p>数据集中大量数据缺失或为零的特性</p>
        <b>独热编码（<span lang="en">One-Hot Encoding</span>）</b>：
        <p>将文本数据转换为数值数据形成的一种二进制串</p>
        
        <b>海明距离（<span lang="en">Hamming Distance</span>）</b>：
        <p>用于计算两个等长字符串的距离，其值为两个字符串对应位置不同字符的个数。</p>
        <b>欧式距离（<span lang="en">Euclidean Distance</span>）</b>：
        <p>两点之间的直线距离</p>
    

        <b>归一化</b>：
        <p>将数据映射到\\([0,1]\\)的范围区间。</p>

        <b>标准化</b>：
        <p>调整数据以使其符合标准正态分布</p>

        <b>平均绝对误差（<span lang="en">Mean Absolute Error, MAE</span>）</b>：\\(\\frac1m \\mathop{\\sum}\\limits_{i=1}^m|\\hat y_i - y_i|\\)
        <br><br>
        <b>均方误差（<span lang="en">Mean Squared Error, MSE</span>）</b>
        <br><br>
        <b>均方根误差（<span lang="en">Mean Root Squared Error, MRSE</span>）</b>
        <br><br>
        <b>平均绝对百分比误差（Mean Absolute Percentage Error, MAPE）</b>



        <p><ul>
            <li><b>TP（True Positive）真正例</b>：实际为正例且被预测为正例的样本数</li>
            <li><b>FN（False Negative）假反例</b>：实际为正例但被预测为反例的样本数</li>
        </ul></p>
        <p><b>准确率（Accuracy）</b>：正确预测的样本数占样本总数的比值。$$accuracy = \\frac{TP+TN}{TP+FP+TN+FN}$$</p>
        <p><b>召回率/查全率（Recall）</b>：正确预测的正例样本数占正例样本总数的比值。$$recall = \\frac{TP}{TP + FN}$$</p>
        <p><b>精确率/查准率（Precision）</b>：正确预测的正例样本数占预测为正例的样本总数的比值。$$precision = \\frac{TP}{TP+FP}$$</p>
        <p><b>F1-score</b>：\\(\\frac{2\\cdot recall\\cdot precision}{recall + precision}\\)</p>
    
    
        <p>核密度估计法、文本分析</p>
        <p>分类方法：XGBoost、感知器、SVM支持向量机、LSTM、RNN</p>

        <p><b>自相关系数（ACF）：</b>
            <ul>
                <li>有序的随机变量序列与其自身相比较。</li>
                <li>自相关系数反映了同一序列在不同时序的取值之间的相关性。</li>
                <li>对于时间序列\\(y_t\\)，\\(y_t\\)和\\(y_{t-k}\\)的相关系数称为\\(y_t\\)间隔为\\(k\\)的自相关系数</li>
            </ul>
            $$ACF(k) = \\frac{Cov(y_t, y_t-k)}{Var(y_t)}$$
        </p>


        <p>
            <b>凸集</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;如果对集合中的任意两个点，其连线上的所有点也在集合中，则称该集合为凸集。
            <br>
            <br>
            <b>闭集</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;如果集合包含了一个序列的所有点，以及该序列的极限（序列的极限存在），则称该集合为闭集。
            <b>闭凸性</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;若一个集合既是凸的又是闭的，则称此集合具有闭凸性。
        </p>

        <p>
            <b>盒式约束</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;设\\(\\mathbf{x}\\)为一个\\(n\\)维向量，表示优化问题中的决策变量，盒式约束定义了每个变量\\(x_i\\)的上界\\(u_i\\)和下界\\(l_i\\)，即
            $$\\mathbf{l} < \\mathbf{x} < \\mathbf{u}$$

            <b>摄动</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;在系统、模型或函数中施加小的变化或扰动。
            <br>
            <br>
        </p>

        <b>L1范数（曼哈顿范数，1-范数）</b>：
        $$\\|\\mathbf{x}\\|_1 = \\mathop{\\sum}^{n}_{i=1}|x_i|$$
        <b>L2范数（欧几里得范数）</b>：
        $$\\|\\mathbf{x}\\|_2 = \\sqrt{\\mathop{\\sum}_{i=1}^nx_i^2}$$

        <p>
            <b>敏感性分析</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;\\(S(t, r) = \\frac{dt}{dr} \\cdot \\frac rt\\)即为\\(t\\)对\\(r\\)的敏感性
        </p>



        <h2>一些算法</h2>

        <h3>图像：</h3>
        <b>卡尔曼滤波</b>
        <br>
        <b>非极大值抑制（None-Maximum Suppression, NMS）</b>
        <br>
        <b>IoU（Intersection over Union）：
            
        </b>
        <p>
            混合整数线性规划（MILP）
        </p>


        <h2>不确定性优化算法</h2>
        <p>
            <ul>
                <li>随机规划</li>
                <li>模糊规划</li>
                <li>区间规划</li>
                <li>鲁棒优化</li>
            </ul>

        </p>
        <h3>鲁棒优化</h3>
        <p> 
            <b>定义</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;参数在一定范围的变动下，解的优化性能仍能得以保证或部分保证的方法。
            <br>
            <br><b>描述</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;鲁棒优化理论将不确定性的所有可能实现事先划定在一个确定性的集合\\(W\\)中，鲁棒优化的最优解对集合\\(W\\)中的每个元素可能造成的不良影响都有抑制性，即若优化策略能应对最坏的情况，则亦可以应对其他所有情况。
        </p>

        <h3>期望效用理论</h3>
        <p>
            <b>定义</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;期望效用理论是经济学和决策理论中的一种模型，用于描述和分析人在不确定情况下如何做出选择。该理论假设决策者根据每个结果的概率及其效用（即该结果带来的主观价值）来做出决策。
            <br>
            <br>效用：用于衡量一个结果对决策者的主观价值，效用值越高，表示结果越令决策者满意。
            <br>概率：每个结果发生的概率，所有可能结果的概率之和为1
            <br>期望效用：
            $$E(U) = \\mathop{\\sum}_{i=1}^n p_i\\cdot U_i$$
            <br>决策准则：选择期望效用最大的选项
        </p>

        <p>
            <b>设备残值</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;设备在使用寿命结束后，仍然具有的一定经济价值。这一价值通常是指设备在其使用寿命终止时，出售或废弃设备所能获得的估计金额。
        </p>

        <p>
            <b>互补品</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;互补品是指两种商品或服务在消费时具有互补性，通常是一起使用的。当一种商品的需求增加时，另一种商品的需求也会增加。
            <br>
            <br>
            <b>替代品</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;替代品是指两种商品或服务在功能上具有替代性，当一种商品的需求增加时，另一种商品的需求会减少。
        </p>` },
  "note/algorithm/deeplearning/catalog": { title: "应用光学", content: `<h1>深度学习</h1>
        <h2>目录</h2>
        <ul>
            <li><a href="/note/algorithm/deeplearning/chapter1">第一章 基础知识</a></li>
            
        </ul>` },
  "note/algorithm/deeplearning/chapter1": { title: "算法", content: `<h1>第一章 基础知识</h1>

        <table lang="en">
            <tr>
                <td rowspan="2">supervised learning</td>
                <td>regression</td>
            </tr>
            <tr>
                <td>classification</td>
            </tr>
            <tr>
                <td rowspan="4">unsupervised learning</td>
                <td lang="zh">聚类</td>
            </tr>
            <tr>
                <td lang="zh">主成分分析</td>
            </tr>
            <tr>
                <td lang="zh">因果关系和概率图模型</td>
            </tr>
            <tr>
                <td lang="zh">生成对抗网络</td>
            </tr>
        </table>

        <h3>未定项</h3>
        <b>仿射变换</b>
        <p>由线性变换（旋转、缩放、剪切）和平移（移动）组合而成</p>
        <b>数据、模型、优化算法</b>
        <b>输入层、输入、输出层、输出、隐藏层、隐藏单元</b>
        <b>训练集、样本、标签、特征</b>

        <h2 lang="en">Supervised Learning</h2>
        <p></p>



        <h2 lang="en">Regression</h2>
        <b>类别</b>
        <ul>
            <li>二分类</li>
            <li>多分类</li>
        </ul>
        <b>作用</b>
        <p>预测数量</p>
        
        <h3 lang="en">linear regression</h3>
        <b>假设</b>
        <p>1、自变量x与因变量y之间的关系是线性的</p>
        <p>2、假设任何噪声都比较正常，如符合正态分布</p>
        <b>注</b>
        <p>统计学模型中的线性并非数学严格意义上的线性，其表征的是输入x与权重w间的线性关系。</p>

        <p>一种单层神经网络</p>
        $$\\hat y = w_1x_1 + \\cdots + w_dx_d + b$$
        设
        $$\\mathbf{w} = \\left [\\begin{matrix}w_1\\\\\\vdots\\\\w_d\\end{matrix}\\right ]$$
        $$\\mathbf{x} = \\left [\\begin{matrix}x_1\\\\\\vdots\\\\x_d\\end{matrix}\\right ]$$
        $$\\therefore \\hat y = \\mathbf{w}^T\\mathbf{x} + b$$
        <ul>
            <li>\\(\\hat y\\)：预测值</li>
            <li lang="en">\\(w\\)：weight</li>
            <li lang="en">\\(b\\)：bias</li>
        </ul>

        设
        $$\\hat{\\mathbf{y}} = \\left [\\begin{matrix}y_1\\\\\\vdots\\\\y_n\\end{matrix}\\right ]$$
        $$\\mathbf{w} = \\left [\\begin{matrix}w_1\\\\\\vdots\\\\w_d\\end{matrix}\\right ]$$
        $$\\mathbf{x} = \\left [\\begin{matrix}x_1\\\\\\vdots\\\\x_d\\end{matrix}\\right ]$$

        <b lang="en">Loss Function</b>
        <p>用于量化目标实际值与预测值之间的差距</p>

        <b><span lang="en">Linear Regression Model</span>的神经网络表示</b>


        <h2 lang="en">Classification</h2>
        <b>作用</b>
        <p>预测类别</p>` },
  "note/algorithm/deeplearning/chapter11": { title: "算法", content: `<h1>第十一章 特征选择与稀疏学习</h1>
        <b lang="en">feature</b>：
        <p>样本的属性</p>
        <ul>
            <li>相关特征：与当前学习任务有关的特征</li>
            <li>无关特征
                <ul>
                    <li>冗余特征：能从其他特征中推演得出的特征</li>
                </ul>
            </li>
        </ul>

        <b lang="en">feature selection</b>：
        <p>从给定的特征集合中选择出相关特征子集的过程</p>
        <p>属于数据预处理过程</p>

        步骤
        <ol>
            <li lang="en">subset search</li>
            <li lang="en">subset evaluation</li>
        </ol>

        方法分类
        <ul>
            <li>过滤式（<span lang="en">filter</span>）</li>
            <li>包裹式（<span lang="en">wrapper</span>）</li>
            <li>嵌入式（<span lang="en">embedding</span>）</li>
        </ul>

        <h2>第五节 稀疏表示与字典学习</h2>
        特征的稀疏性通过<span lang="en">feature selection</span>解决` },
  "note/algorithm/deeplearning/chapter2": { title: "算法", content: `<h1>第二章 多层感知机（<span lang="en">Multilayer Preception, MLP</span>）</h1>



        <h2 lang="en">Activation Function</h2>

        <h3>修正线性单元（<span lang="en">Rectified linear unit, ReLU</span>）</h3>
        $$ReLU(x) = \\max\\{x, 0\\}$$


        <h3><span lang="en">Sigmoid</span>函数</h3>
        $$Sigmoid(x) = \\frac{1}{1 + e^{-x}}$$` },
  "note/algorithm/dp": { title: "算法", content: `<h1>动态规划</h1>

        <b>示例</b>
        <p>楼梯有\\(n\\)级台阶，每次可以上\\(1\\sim k\\)阶，问共有多少种上楼方式</p>

        <b>思路</b>
        <p>\\(n=1\\)：一种上楼方式\\([1]\\)。</p>
        <p>\\(n=2\\)：两种上楼方式\\([1+1, 2]\\)</p>
        <p>其中，第一种为\\(n=1\\)时往上一阶、第二种为\\(n=0\\)时往上两阶。</p>
        <p>\\(n=3\\)：四种上楼方式\\([1+1+1, 2+1, 1+2, 3]\\)</p>
        <p>其中，前两种为\\(n=2\\)时向上一阶、第三种为\\(n=1\\)时向上两阶、第四种为\\(n=0\\)时向上三阶</p>
        <p>\\(\\cdots\\)</p>
        <p>\\(n=k\\)：前\\(k-1\\)阶上楼方式的累加和再加一</p>
        <p>其中，\\(n=k-1\\)时向上\\(1\\)阶、\\(n=k-2\\)时向上\\(2\\)阶、……、\\(n=0\\)时向上\\(k\\)阶。</p>
        <p>\\(n\\gt k\\)：\\(dp[n] = dp[n-1] + dp[n-2] + \\cdots + dp[n-k]\\)</p>
        <p>\\(n=n-1\\)时向上\\(1\\)阶、\\(n=n-2\\)时向上\\(2\\)阶、……、\\(n=n-k\\)时向上\\(k\\)阶</p>` },
  "note/algorithm/ga": { title: "算法", content: `<h1>遗传算法</h1>
        <p>
            是一种基于自然选择原理和自然遗传机制的优化算法
            <br>
            通过模拟自然界中的生命进化机制，在人工系统中是按特定目标的优化
            <br>
            遗传算法的实质是通过群体搜索技术，根据适者生存的原则逐代进化，最终得到最优解或准最优解
            <br>
            流程：
            <ul>
                <li>初始群体的产生：
                    <br>对初始问题进行编码
                </li>
                <li>求每一个个体的适应度</li>
                <li>根据适者生存原则选择优良个体</li>
                <li>被选出的个体进行两两配对</li>
                <li>通过随机交叉其染色体的基因并随机变异某些染色体的基因生成下一代群体</li>
            </ul>
        </p>` },
  "note/algorithm/gm": { title: "算法", content: `<h1>灰色预测模型</h1>
        <p>
            适用场景：数据少，看不出明显规律

            <br>
            找规律:
            <br>
            累加生成序列：
            $$x^{(1)}(i) = \\mathop{\\sum}_{k=1}^ix^{(0)}(i)$$

            构建一阶常微分方程拟合曲线<span class="note">（不懂为什么用一阶常微分方程，需要补充高数相关知识）</span>
            $$\\frac{dx^{(1)}}{dt} + ax^{(1)} = u$$
            要预测数据就要解微分方程，要解微分方程，就要求解\\(a\\)和\\(u\\)
            <br>
            由于数据是离散的而非连续的，故：
            $$
            \\frac{dx^{(1)}}{dt} = \\frac{\\Delta x^{(1)}}{\\Delta t} = x^{(0)}(t)\\\\
            x^{(0)}(t) = -ax^{(1)} + u
            $$
            
        </p>` },
  "note/algorithm/heuristic_algorithm": { title: "算法", content: `<h1>启发式算法</h1>
        <p>
            特点：不能保证找到最优解，但能加快求解速度
            <br>
            <br>思想：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;对于\\(f(x)\\)
            <ul>
                <li>若\\(f(x_2)>f(x_1)\\)，接受\\(x_2\\)</li>
                <li>若\\(f(x_2)\\leq f(x_1)\\)
                    <ul>
                        <li>直接拒绝\\(x_2\\rightarrow\\)容易陷入局部最优</li>
                        <li>直接接受\\(x_2\\rightarrow\\)耗时过长</li>
                        <li>启发式算法</li>
                    </ul>
                </li>
            </ul>
            <br>分类：
            <ul>
                <li>模拟退火算法</li>
                <li>粒子群算法</li>
                <li>遗传算法</li>
                <li>蚁群算法</li>
            </ul>
        </p>

        <hr>
        <h2>模拟退火算法</h2>
        <p>
            核心思想：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;设定接受\\(x_2\\)的概率\\(p\\in [0, 1]\\)，随着迭代次数的增加\\(p\\)逐渐减小
            <br>
            <br>方案1：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;接受次数越多，\\(p\\)越小
            <br>
            <br>方案2：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;新解与旧解函数值越接近，越愿意接受
            $$\\begin{cases}
            p\\in [0, 1]\\\\
            p\\propto\\frac {1}{|f(x_2) - f(x_1)|}\\\\
            p\\propto \\frac 1 t
            \\end{cases}
            \\Rightarrow
            p = e^{-|f(x_2) - f(x_1)|C_t}(C_t\\in[0,1]andC_t\\propto t)$$
            过程
            <ol>
                <li>解空间</li>
                <li>目标函数</li>
            </ol>

        </p>` },
  "note/algorithm/kmeans++": { title: "应用光学", content: `<h1>KMeans++</h1>
        <h2>初始化中心簇：</h2>
        <p>
            逐个选取k个簇中心，且离其他簇越远的样本点越有可能被选为下一个簇中心。
            <ol>
                <li>从数据集中随机选取一个样本点最为第一个初始聚类中心</li>
            </ol>
        </p>` },
  "note/algorithm/monte_carlo_simulation": { title: "算法", content: `<h1>蒙特卡罗模拟</h1>
        <p>
            蒙特卡罗模拟又称统计模拟法，是一种随机模拟方法。

            <br>
            原理：大数定理，当样本容量足够大时，事件发生的频率即为其概率
        </p>` },
  "note/algorithm/mtah_method": { title: "算法", content: `<h2>拉格朗日乘子法</h2>
        <b>带等式约束的优化问题</b>
        $$\\begin{align}
        &\\mathop{\\min}_{x} &&f(x)\\\\
        &subject~~ to\\quad &&g_i(x) = 0, \\quad i=1,2,\\cdots,n
        \\end{align}$$
        构造拉格朗日函数：
        $$L(x, \\lambda) = f(x) + \\mathop{\\sum}_{i=1}^n\\lambda_ig_i(x)$$
        求驻点：
        $$\\begin{cases}
        \\frac{\\partial L}{\\partial x} = f'(x) = 0\\\\
        \\frac{\\partial L}{\\partial \\lambda_i} = g_i(x) = 0
        \\end{cases}$$
        <b>带不等式约束的优化问题</b>
        <p>需要满足<span lang="en">KTT</span>条件</p>
        <p><span lang="en">KTT</span>条件确保在最优解处拉格朗日函数的构造与原问题的约束条件之间的关系保持一致</p>` },
  "note/algorithm/numpy": { title: "算法", content: `<h1>Numpy</h1>

        <p>
            伪模拟量：
            <br>
            <code>
                np.linspace(start, end, num)
            </code><br>

            <br>
            展平列表：
            <br>
            <code>
                [item for sublist in list for item in sublist]
            </code><br>

            <br>
            随机初始化矩阵:
            <br>
            <code>
                x_min + np.random.rand(col, row)*(x_max - x_min)
            </code><br>

            <br>matplotlib正常显示中文：<br>
            <code>
                plt.rcParams['font.sans-serif'] = ['SimHei']
            </code><br>
            <code>
                plt.rcParams['axes.unicode_minus'] = False
            </code>
        </p>` },
  "note/algorithm/ols": { title: "算法", content: `<h1>最小二乘法</h1>
        $$k = \\frac{\\sum\\limits_{i=1}^n x_iy_i - n\\bar x\\bar y}{\\sum\\limits_{i=1}^nx_i^2 - n(\\bar x)^2}$$` },
  "note/algorithm/originpro": { title: "OriginPro", content: `<h1>OriginPro</h1>

        <h2>导入数据</h2>
        <p>
            .dat数据可以直接拖入
        </p>

        <h2>视图</h2>
        <p>
            退出窗口最大化：<button class="opt">Windows</button>\\(\\rightarrow\\)<button class="opt">Cascade</button>
        </p>


        <h2>绘图</h2>
        <h3>2D窗口</h3>
        <p>
            <ul>
                <li><button class="opt">Line</button>：折线</li>
                <li><button class="opt">Horizontal Step</button>：水平过渡</li>
                <li><button class="opt">Vertical Step</button>：竖直过渡</li>
                <li><button class="opt">Spline Connected</button>：平滑连接</li>
                
                <li><button class="opt">Scatter</button>：散点图</li>
            </ul>
        </p>

        <h3>界面操作</h3>
        <p>
            除了图像，其他元素均能拖动
        </p>

        <h3>坐标轴操作</h3>
        <p>
            <button class="opt">拖动坐标轴</button>
        </p>
        <h4><button class="opt">双击X轴</button></h4>
        <p>
            <button class="opt">Grids</button>：网格线
            <ul>
                <li></li>
            </ul>
        </p>

        <h3>图像操作</h3>
        <p>
            <button class="opt">双击图像</button>
            <ul>
                <li><button class="opt">Line</button>
                    <ul>
                        <li><button class="opt">Style</button>：虚实线 </li>
                        <li><button class="opt">Compound Style</button>：单双线</li>
                        <li><button class="opt">Width</button>：线宽</li>
                        <li><button class="opt">Transparency</button>：透明度</li>
                        <li><button class="opt">Fill Aera Under Curve</button>：填充曲线以下的所有</li>
                    
                    </ul>
                </li>
            </ul>
        </p>

        <h3>图像背景</h3>
        <p>
            <table>
                <tr>
                    <td colspan="3"><button class="opt">双击背景</button></td>
                </tr>
                <tr>
                    <td rowspan="7"><button class="opt">Background</button></td>
                    <td colspan="2"><button class="opt">Color</button></li></td>
                </tr>
                <tr>
                    <td colspan="2"><button class="opt">Transparency</button></td>
                </tr>
                <tr>
                    <td colspan="2"><button class="opt">Gradient Fill</button></td>
                </tr>
                <tr>
                    <td rowspan="3"><button class="opt">Mode</button></td>
                    <td><button class="opt">None</button></td>
                </tr>
                <tr>
                    <td><button class="opt">One Color</button></td>
                    
                </tr>
                <tr><td><button class="opt">Two Color</button></td></tr>
            </table>
        </p>

        <h3>饼图</h3>
        <p>
            <button class="opt">Plot</button>\\(\\rightarrow\\)<button class="opt">Bar, Pie, Area</button>
        </p>
        <h4>3D饼图</h4>
        <button class="opt">3D Color Pie Chart</button>
        <ul>
            <li><button class="opt">X</button>：标签</li>
            <li><button class="opt">Y</button>：值</li>
        </ul>` },
  "note/algorithm/pso": { title: "算法", content: `<h1>粒子群算法（PSO）</h1>

        <p>
            分类：
            <ul>
                <li>离散型粒子群算法\\(\\rightarrow\\)动态规划问题</li>
                <li>连续型粒子群算法\\(\\rightarrow\\)函数最优化问题</li>
            </ul>

            基本粒子群算法：
            <br>
            <br>参数介绍
            <ul>
                <li>在一个D维目标搜索空间中，有N个粒子组成一个群落：
                    $$X = \\{X_1, X_2, \\cdots, X_N\\}$$
                </li>
                <li>第i个粒子为一个D维的向量：
                    $$X_i = (x_{i1}, x_{i2}, \\cdots, x_{iD})$$
                </li>
                <li>第i个粒子的速度也为一个D维的向量：
                    $$V_i = (v_{i1}, v_{i2}, \\cdots, v_{iD})$$
                </li>
                <li>第i个例子迄今为止搜索到的最优位置称为个体极值：
                    $$p_{best} = (p_{i1}, p_{i2}, \\cdots, p_{iD})$$
                </li>
                <li>整个粒子群迄今为止搜索到的最优位置为全局最优：
                    $$g_{best} = (g_1, g_2, \\cdots, g_D)$$
                </li>
            </ul>
            <br>参数更新
            <br>
            <br>1.速度更新
            $$v_{ij}(t+1) = v_{ij}(t) + c_1r_1(t)[p_{ij}(t)-x_{ij}(t)] + c_2r_2(t)[p_{gj}(t) - x_{ij}(t)]$$
            <ul>
                <li>\\(v_{ij}(t)\\)：
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;动量部分，代表粒子有维持自己先前速度的趋势。</li>
                <li>\\(c_1r_1(t)[p_{ij}(t)-x_{ij}(t)]\\)：
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;
                </li>
            </ul>
            2.位置更新
            $$x(t+1) = x(t) + v(t+1)$$
        </p>
        <p>标准粒子群算法
            <br>1.速度更新
            $$v_{ij}(t+1) = w\\cdot v_{ij}(t) + c_1r_1(t)[p_{ij}(t)-x_{ij}(t)] + c_2r_2(t)[p_{gj}(t) - x_{ij}(t)]$$
            <ul>
                <li>\\(w\\)：
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;动态权重，保证在迭代前期具有足够的全局搜索能力，后期专注于局部最优解的搜索能力，即\\(w\\propto \\frac1t\\)
                    $$w = w_{max} - \\frac{(w_{max}-w_{min})\\cdot t}{T}$$
                </li>
            </ul>
            2.位置更新
            $$x(t+1) = x(t) + v(t+1)$$
        </p>` },
  "note/algorithm/yolo": { title: "Yolo", content: `<h1 lang="en">Yolo</h1>
        <h2>数据集</h2>
        <p>对于被部分遮挡的样本，应进行保留</p>` },
  "note/analog_electronics_technique/analog_electronics_technique": { title: "模电", content: `<h1>模拟电路</h1>


    <h2>目录</h2>
    <a href="/note/analog_electronics_technique/chapter2">第二章 运算放大器</a>
    <br>
    <a href="/note/analog_electronics_technique/chapter3">第三章 二极管及其基本电路</a>
    <br>
    <a href="#chapter4">第四章 场效应三极管及其放大电路</a>
    <br>
    <a href="/note/analog_electronics_technique/chapter5">第五章 双极结型三极管及其放大电路</a>
    <br>
    <a href="/note/analog_electronics_technique/chapter8">第八章 反馈放大电路</a>

    <h2 id="chapter4">第四章 场效应三极管及其放大电路</h2>
    <p><b>场效应三极管（场效应管，field effect transistor，FET）</b>：
    <ul>
        <li><b>金属-氧化物-半导体场效应三极管（metal-oxide-semiconductor FET，MOSFET）</b></li>
        <li><b>结型场效应管（junction FET，JFET）</b></li>
    </ul></p>

    <h3>金属-氧化物-半导体场效应三极管</h3>
    <p>分类：
        <ul>
            <li>按导电载流子的带电极性：</li>
            <ul>
                <li>NMOS管：N沟道（电子型沟道）MOSFET</li>
                <li>PMOS管：P沟道（空穴型沟道）MOSFET</li>
            </ul>
            <li>按导电沟道形成机理：</li>
            <ul>
                <li>增强型（enhancement-mode，E型）</li>
                <li>耗尽型（depletion-mode，D型）</li>
            </ul>
        </ul>
    </p>
    <i>总的来说，MOS管分为：增强型NMOS管、耗尽型NMOS管、增强型PMOS管、耗尽型PMOS管</i>

    <p><b>N沟道增强型MOSFET</b></p>
    <p><b>结构</b>：</p>
    <p>以一块掺杂浓度较低、电阻率较高的P型硅半导体薄片作为<b>衬底</b>，利用扩散的方法在P型硅中形成两个高掺杂的N<sup>+</sup>区。</p>
    <p>在P型硅表面生长一层很薄的二氧化硅绝缘层，并在二氧化硅表面及N<sup>+</sup>区表面上分别安置三个铝电极——<b>栅极g（gate）</b>、<b>源极s（source）</b>、<b>漏极d（drain）</b>。</p>
    <br><img src="./img/4.1_(1).jpg" width="350"><br>
    <p><ul>
        <li>L：沟道长度</li>
        <li>W：沟道宽度</li>
        <i>通常\\(L < W \\)且数量级均在纳米到微米间</i>
        <li>\\(t_{ox}\\)：氧化物厚度</li>
        <i>\\(t_{ox}\\)典型值在0.4×10<sup>-7</sup>m数量级以内</i>
    </ul></p>

    <p><b>工作原理</b>：</p>
    <p>\\(v_{GS}\\geq V_{TH}\\)时：</p>
    <p><b>阈值电压（\\(V_{TH}\\)）</b>：能够使漏源之间开始导电的栅源电压</p>
    <p>当\\(v_{GS}>0\\)时，相当于在栅极与衬底之间加了正向电压。因为栅极与衬底之间有二氧化硅绝缘层，故不会产生栅极电流\\(i_G\\)，但会产生由栅极指向衬底的垂直电场。
    <br>由于绝缘层很薄，所以产生的电场强度很高。该电场力会排斥P型衬底中的空穴，使它们远离绝缘层，缺少了空穴的区域成为<b>耗尽层</b>。
    <br>同时，该电场会吸引自由电子在绝缘层下方聚集，当\\(v_{GS}\\)达到一定数值时，绝缘层
    </p>

    <ul class="pagination">
        <li><a href="#">«</a></li>
        <li><a href="#">1</a></li>
        <li><a class="active" href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">6</a></li>
        <li><a href="#">7</a></li>
        <li><a href="#">»</a></li>
      </ul>` },
  "note/analog_electronics_technique/chapter11": { title: "模拟电路", content: `<h1>第十一章 直流稳压电源</h1>
        <p>小功率线性直流稳压电源的组成：
            <ul>
                <li>电源变压器</li>
                <li>整流电路</li>
                <li>滤波电路</li>
                <li>稳压电路</li>
            </ul>
        </p>
        <h2>第一节 小功率整流滤波电路</h2>
        <h3>一、单相桥式整流电路</h3>
        <p><b>整流电路</b>：将交流电转换为直流电的电路。</p>` },
  "note/analog_electronics_technique/chapter2": { title: "模拟电路", content: `<h1>第二章 运算放大器</h1>
        <h2>第一节 集成电路运算放大器</h2>
        <h3>一、集成电路运算放大器简介</h3>
        <p>绝大多数集成运放可分为：</p>
        <p><ul><li><b>输入级</b>：<b>差分放大</b>，解决漂移的机制与信号的有效放大问题。</li>
        <li><b>中间级</b>：<b>电压放大</b>，极大提高电压增益。多采用<b>直接耦合的多级放大电路</b></li>
        <li><b>输出级</b>：<b>功率放大</b>，极大提高输出能力。</li></ul></p>
        <h3>二、运算放大器的电路简化模型</h3>
        <h3>三、运算放大器的传输特性</h3>
        <p><b>电压传输特性曲线</b>（用于描述\\(v_O\\)与\\(v_P-v_N\\)的关系）：
        <br><img src=""><br>
            <ul>
                <li><b>线性工作区</b>：斜线部分，此时\\(v_O = A_{vo}(v_P-v_N)\\)</li>
                <li><b>饱和区（非线性区、限幅区）</b>：水平线部分，此时\\(v_O\\)达到最大值（饱和值）</li>
            </ul>
        </p>
        <p>实际情况下，有：
            <br>电源电压\\(V_{+}、V_{-}\\)
            <br>运放输出端的饱和压降\\(\\Delta V\\)
            <br>则输出电压最大值：\\(+V_{Om} = V_{+} - \\Delta V、-V_{Om} = V_{-} + \\Delta V\\)
            <br>进而有\\(A_{vo} = \\frac{+V_{Om}}{(v_P - v_N)_{max}} = \\frac{-V_{Om}}{(v_P-v_N)_{min}}\\)</p>
        
        <h3>四、共模信号与差模信号</h3>
        <p><ul>
            <li><b>差模输入信号</b>：两输入端信号的差值，\\(v_{id} = v_P - v_N\\)</li>
            <li><b>共模输入信号</b>：两输入端信号的算术平均值，\\(v_{ic} = \\frac{v_P+v_N}{2}\\)</li>
        </ul></p>
        <p>$$\\begin{cases}
            v_P = v_{ic} + \\frac12 v_{id}\\\\
            v_N = v_{ic} - \\frac12 v_{id}
            \\end{cases}$$
        即两输入端共模电压大小相等，极性相同；
        <br>&nbsp;&nbsp;两输入端差模电压大小相等，极性相反。</p>
        <p><b>共模抑制比</b>：差模增益与共模增益之比的绝对值。用于反映运放放大差模信号与抑制共模信号的能力。
        $$K_{CMR} = |\\frac{A_{vd}}{A_{vc}}|$$
        <i>理想情况下，\\(A_{vc} = 0, K_{CMR} = \\infty\\)</i></p>

        <hr>
        <h2>第二节 理想运放</h2>
        <p><b>理想运放</b>：将集成运放的各项性能指标理想化得到的理想运放模型</p>
        <p><b>理想运放的特性</b>：
        <ul>
            <li>\\(+V_{Om} = V_{+}、-V_{Om} = V_{-}\\)</li>
            <li>\\(A_{vo} \\rightarrow \\infty\\)，由于\\(v_O = A_{vo}(v_P-v_N)\\)且\\(v_O\\)为有限值，所以\\(v_P \\approx v_N\\)。这说明运放两输入端电压近似相等，如同两输入端近似短路，这种现象称为<b>虚假短路（虚短）</b>。</li>
            <li>\\(r_i \\rightarrow \\infty\\)，故\\(i_P\\approx i_N \\approx0\\)，这种现象称为<b>虚断</b>。</li>
            <li>\\(r_o\\approx 0\\)</li>
        </ul></p>
        <hr>
        <h2>第三节 基本线性运放电路</h2>
        <h3>一、同相放大电路</h3>
        <h4>1.基本电路</h4>
        <br><img src="./img/2.3.1.1.png" width="400"><br>
        <h4>2.放大电路指标</h4>
        <p>
            <ul><li>
                <b>闭环电压增益\\(A_v\\)</b>：对运放反向端节点应用KCL：
                $$\\frac{v_o-v_n}{R_2} = \\frac{v_n}{R_1} + i_n$$
                由虚短和虚断特性：\\(v_n\\approx v_p = v_i、i_p\\approx i_n\\approx 0\\)，故：
                $$A_{v} = \\frac{v_o}{v_i} = 1+\\frac{R_2}{R_1}$$
                \\(A_v\\)为正值，表示\\(v_o\\)与\\(v_i\\)同相，故称该电路为同相放大电路
            </li></ul>
        </p>
        <h4>3.电压跟随器</h4>
        <p>要使\\(A_v = 1\\)，即要使\\(\\frac{R_2}{R_1} = 0\\)，令\\(R_2 = 0, R_1 = \\infty\\)，有：
            <br><img src="./img/2.3.1.2.png" width="450"><br>
        </p>

        <h3>二、反相放大电路</h3>
        <h4>1.基本电路</h4>
        <br><img src="./img/2.3.2.1.png" width="450"><br>
        <h4>2.放大电路指标</h4>
        <p><ul><li>
            <b>闭环电压增益\\(A_v\\)</b>：
            <br>虚短：\\(v_n\\approx v_p = 0\\)
            <br>虚断：\\(i_i = i_n\\approx i_p\\approx 0 \\Rightarrow i_1 = i_2\\)
            $$\\frac{v_i}{R_1} = -\\frac{v_o}{R_2}$$
            $$A_v = \\frac{v_o}{v_i} = -\\frac{R_2}{R_1}$$
            \\(A_v\\)为负值，表示\\(v_o\\)与\\(v_i\\)反相，故称该电路为反相放大电路
        </li></ul></p>` },
  "note/analog_electronics_technique/chapter3": { title: "模拟电路", content: `<h1 id="chapter3">第三章 二极管及其基本电路</h1>




        
        <h2>第三节 二极管</h2>
        <h3>一、二极管的结构</h3>
        <p><b>二极管</b>：可以看作PN结的物化器件</p>
        <h3>二、二极管的I-V特性</h3>
        <p>（1）正向特性：</p>
        <p><b>门坎电压/死区电压（\\(V_{th}\\)）</b>
        <ul>
            <li>硅管：0.5V</li>
            <li>锗管：0.1V</li>
        </ul></p>
        <p><b>正向导通压降（工作压降）</b>
        <ul>
            <li>硅管：0.7V</li>
            <li>锗管：0.2V</li>
        </ul></p>
        <p>（2）反向特性：</p>

        
        <h2>第四节 二极管的基本电路及其分析方法</h2>
        
        <p><b>符号命名规则</b>：
            <ul>
                <li>大写字母+大写下标：静态值（直流）</li>
                <li>小写字母+小写下标：瞬时值（交流）</li>
                <li>小写字母+大写下标：总量瞬时值（直流+交流）</li>
            </ul>
            
        </p>


        <p><b>二极管简化模型分析法</b>：
        <ul>
            <li><b>理想模型</b></li>
            <li><b>恒压降模型</b></li>
            <li><b>折线模型</b></li>
            <li><b>小信号模型</b>：<br>
            静态：电路的直流工作状态</li>
        </ul></p>

        
        <p><b>判断二极管导通/截止</b>：
            <ol>
                <li>将电路中所有二极管均断开</li>
                <li>判断二极管阴阳两极电压</li>
                <li>若 阳极电压-阴极电压>二极管管压降，则导通；<br>反之则截止</li>
                <li>再逐个分析各个二极管导通/断开的情况下，某个二极管导通/断开的情况</li>
            </ol></p>

        <h2>第五节 特殊二极管</h2>
        <h3>一、齐纳二极管（稳压二极管）</h3>
        <p>稳压管稳压时，工作在<b>反向击穿区</b></p>
        <h3>二、发光二极管</h3>
        <p>发光二极管发光时，工作在<b>正向导通区</b></p>` },
  "note/analog_electronics_technique/chapter5": { title: "模拟电路", content: `<h2 id="chapter5">第五章 双极结型三极管及其放大电路</h2>
        <h3>第一节 双极结型三极管（半导体三极管，BJT）</h3>
    
        <h4>一、BJT的结构</h4>
        <p>
            <br><img src="./img/5.1_BJTstructure.jpg" width="380"><br>
            发射极的箭头表示发射结外加正偏电压时，发射极电流的实际方向
            <ul>
                <li><b>发射区</b>：掺杂浓度最高</li>
                <li><b>基区</b>：宽度很薄，且掺杂浓度很低</li>
                <li><b>集电区</b>：集电区掺杂浓度远低于发射区；集电结面积大于发射结面积</li>
            </ul>
            <i>可以看出集电区与发射区并不是对称的</i>
        </p>
    
        <p><b>工作状态</b>：BJT内部含有两个背靠背的PN结。当这两个PN结的偏置条件（正偏或反偏）不同时，BJT将呈现不同的特性，共有四种可能的偏置组合：
        <ul>
            <li><b>放大</b>：发射结正偏、集电结反偏</li>
            <li><b>饱和</b></li>
            <li><b>截止</b></li>
            <li><b>倒置</b></li>
        </ul></p>
        
        <hr>

        <h4>二、放大状态下BJT的工作原理</h4>
        <p><b>BJT内部载流子的传输过程</b></p>
        <p><b>基极无任何连接时</b>：
            <br><img src="./img/5.1_(2).jpg" width="380"><br>
            集电极和发射之间相当于两个背靠背的PN结二极管。此时无论c、e间接什么极性的电压，总有一个PN结是反偏的。c、e间都不能导通。</p>
        <p><b>仅有集电结反偏电压时</b>：集电结少子漂移运动加强，产生<b>漂移电流（集电结反向饱和电流）I<sub>CBO</sub></b></p>
        <p><b>发射结再加正偏电压时</b>：发射结多子扩散运动加强，高掺杂浓度的发射区向基区注入自由电子（同时极少部分空穴从基区流入发射结），形成发射极电流I<sub>E</sub>。注入基区的自由电子又在集电结电场力作用下漂移到集电区，形成电流I<sub>CN</sub>，I<sub>CN</sub>与I<sub>CBO</sub>共同构成集电极电流I<sub>C</sub>，即\\(I_C=I_{CN}+I_{CBO}<\\frac{V_{CC}}{R_C}\\)</p>
        <p>发射区注入基区的自由电子，除了被集电区收集外，还有一部分与基区的多子空穴复合，形成基区复合电流\\(I_{BN}\\)，其与\\(I_{CBO}\\)一起形成基极电流\\(I_B = I_{BN} - I_{CBO}\\)</p>
        <p><b>发射极电流对集电极电流的控制作用</b>：由于集电极掺杂浓度很低，所以漂移电流I<sub>CBO</sub>很小，而I<sub>CN</sub>取决于I<sub>E</sub>的大小</p>
        <p><b>BJT三个电极的电流关系</b>：\\(I_E=I_B+I_C\\)</p>
        
        <p><b>BJT放大状态下的控制关系</b></p>
        <p><b>（1）I<sub>E</sub>对I<sub>C</sub>的控制：电流放大系数\\(\\bar \\alpha \\rightarrow 1^- \\)</b>
            $$ \\begin{align}
                \\bar \\alpha &= \\frac{I_{CN}}{I_E} = \\frac{I_C-I_{CBO}}{I_E}\\\\
                I_C &= \\bar \\alpha I_E + I_{CBO}
                \\end{align}
            $$
            由于\\(I_C \\gg I_{CBO}\\)：
            $$ I_C \\approx \\bar \\alpha I_E $$
        </p>
        <p><b>（2）I<sub>B</sub>对I<sub>C</sub>的控制：电流放大系数\\(\\bar \\beta\\)</b>
            $$ \\begin{align}
            \\bar \\beta &= \\frac{I_{CN}}{I_{BN}} = \\frac{I_C-I_{CBO}}{I_B+I_{CBO}}\\\\
            I_C &= \\bar \\beta I_B +(1+\\bar \\beta)I_{CBO}
            \\end{align}
            $$
        </p>

        <p><b>BJT的三种组态</b>：
        <ul>
            <li>共基极组态</li>
            <li>共射极组态</li>
            <li>共集电极组态</li>
        </ul>
        <i>某极既在输出回路，又在输出回路，则称为共某极组态</i></p>
        <i>特别注意：集电极始终不能做输入端子，基极始终不能做输出端子，这是由BJT内部载流子的控制关系决定的</i>

        <hr>

        <p><b>三、BJT的I-V特性曲线</b></p>
        <p><b>共射极连接时的I-V特性曲线</b>：</p>
        <img src="./img/5.2.3.1_IV.jpg" width="500">
        <p>（1）输入特性：\\(i_B = f(v_{BE})|_{v_{CE} = 常数}\\)</p>
        <p>特点：
        <ul>
            <li>\\(v_{CE}\\)增大，曲线会向右移动：\\(v_{CE}\\)增大时，\\(I_{CBO}\\)增大，要使\\(i_b\\)保持不变，只能使\\(v_{BE}\\)增大进而使\\(I_{BN}\\)增大</li>
            <li>当\\(v_{CE}\\geq 1\\)时，曲线基本不变：当\\(v_{CE}\\)足够大时，集电区对基区自由电子吸引能力已达峰值，无法再增加</li>
        </ul></p>
        <p>（2）输出特性：\\(i_c=f(v_{CE})|_{i_B=常数}\\)</p>
        <p><ul>
            <li>放大区：\\(i_B=0\\)上方特性曲线基本水平的区域就是放大区。此时发射结正偏电压大于开启电压，而集电结反偏，\\(i_C\\)主要受\\(i_B\\)控制，\\(i_C = \\bar\\beta i_B\\)。</li>
            <li>饱和区：横轴左侧特性曲线快速上升的区域是饱和区。\\(i_C\\)与\\(i_B\\)不成比例，\\(u_{CE}\\)很小，集电结正偏。\\(i_C = \\frac{V_{CC}-u_{CE}}{R_C}\\)，\\(u_{CE}\\)很小时\\(i_C\\)很难达到临界值。</li>
            <li>截止区：该区域内发射结偏置电压小于PN结开启电压，BJT无法导通，\\(i_B=0\\)。此时对于小功率管\\(i_C=I_{CEO}\\approx 0\\)</li>
        </ul></p>

        <h3>第二节 BJT放大电路</h3>
        <h4>一、基本共射极放大电路</h4>
        <p>
            结构：
            <br><img src=".\\img\\Common_emitter_amplifier_circuit.jpg" width="380"><br>
            分析：
            <br>
            \\(R_b\\)是一个限流电阻，防止电流过大使BJT损坏
            <br>
            基本共射极放大电路中，交流量、直流量共存。分析时，先确定直流量，后分析交流性能。
        </p>
        <p><b>直流量分析</b>：令\\(v_s=0\\)，通过直流通路求得电路的静态工作点\\(Q\\)（\\(I_{BQ}、I_{CQ}、V_{CEQ}、V_{BEQ}\\)）
            <br>
            规定硅管的\\(V_{BEQ}=0.7\\)V，锗管\\(V_{BEQ}=0.2\\)V
            <ol>
                <li>由基极-发射极回路：
                    $$ I_{BQ} = \\frac{V_{BB}-V_{BEQ}}{R_b} $$</li>
                <li>由BJT放大区的控制关系：
                    $$ I_{CQ} = \\beta I_{BQ} $$</li>
                <li>由集电极-发射极回路：
                    $$ V_{CEQ} = V_{CC}-I_{CQ}R_c $$</li>
            </ol>
        </p>
        <p><b>交流性能分析</b>：\\(v_s\\neq0\\)时，BJT各极电流电压都在Q点的基础上随输入信号作相应变化。
            <ol>
                <li>信号源：
                    $$ v_{BB} = V_{BB}+v_s $$</li>
                <li>电阻R<sub>b</sub>：
                    $$ i_B = I_{BQ}+i_b $$</li>
                <li>电阻R<sub>c</sub>：
                    $$ i_c = \\beta i_b $$</li>
                    $$ i_C = I_{CQ}+i_c $$
            </ol>
        </p>
        <h4>二、BJT放大电路的图解分析</h4>
    
        <h4>三、BJT的小信号模型</h4>
        <p><b>（一）H参数小信号模型（混合参数模型）</b></p>
        <p>由BJT的输入、输出曲线写出如下两个方程：
            $$\\begin{cases}\\begin{align}
            v_{BE} &= f_1(i_B,v_{CE})\\\\
            i_C &= f_2(i_B,v_{CE})
            \\end{align}\\end{cases}$$
            小信号模型指BJT在交流低频小信号工作状态下的模型，这时考虑的是电压、电流间的微变关系。为此，对上两式取全微分：
            $$\\begin{cases}\\begin{align}
            dv_{BE} &= \\frac{\\partial v_{BE}}{\\partial i_B}|_{V_{CEQ}}di_B+\\frac{\\partial v_{BE}}{\\partial v_{CE}}|_{I_{BQ}}dv_{CE}\\\\
            di_C &= \\frac{\\partial i_C}{\\partial i_B}|_{V_{CEQ}}di_B+\\frac{\\partial i_C}{\\partial v_{CE}}|_{I_{BQ}}dv_{CE}
            \\end{align}\\end{cases}$$
            $$\\begin{cases}\\begin{align}
            v_{BE} &= h_{ie}i_b + h_{re}v_{ce}\\\\
            i_C &= h_{fe}i_b + h_{oe}v_{ce}
            \\end{align}\\end{cases}$$
            式中，\\(h_{ie}\\)、\\(h_{re}\\)、\\(h_{fe}\\)、\\(h_{oe}\\)即为<b>H参数</b>。
        </p>
        <p>\\(h_{ie}=\\frac{\\partial v_{BE}}{\\partial i_B}|_{V_{CEQ}}=r_{be}(\\Omega)\\)：BJT输出端交流短路（即\\(v_{ce}=0,v_{CE}=V_{CEQ}\\)）时的输入电阻，即小信号作用下b-e极间的交流电阻</p>
        <p>\\(h_{re}=\\frac{\\partial v_{BE}}{\\partial v_{CE}}|_{I_{BQ}}\\)（无量纲）：BJT输入端交流开路（即\\(i_b=0,i_B=I_{BQ}\\)）时的反向电压传输比。反映了BJT输出回路电压\\(v_{CE}\\)对输入回路电压\\(v_{BE}\\)的影响程度</p>
        <p>\\(h_{fe}=\\frac{\\partial i_C}{\\partial i_B}|_{V_{CEQ}}\\)（无量纲）：BJT输出端交流短路时的正向电压传输比，或电流放大倍数，即β</p>
        <p>\\(h_{oe}=\\frac{\\partial i_C}{\\partial v_{CE}}|_{I_{BQ}}=\\frac{1}{r_{ce}}(S)\\)：BJT输入端交流开路时的输出电导。是放大区输出特性曲线的斜率，反映了电压\\(v_{CE}\\)对电流\\(i_C\\)的影响程度。</p>
        <i>由于四个H参数的量纲各不相同，故称为混合参数</i>
        <br><img src=".\\img\\5.2.3.1_model.jpg" width="380"><br>
        <p><b>（二）小信号模型的简化</b></p>` },
  "note/analog_electronics_technique/chapter7": { title: "模拟电路", content: `<h1>第七章 模拟集成电路</h1>
        <h2>第二节 差分式放大电路</h2>
        <p><b>零漂（零点漂移）</b>：当放大电路输入信号为0时，输出端还有缓慢变化的电压产生，即输出电压偏离原来的起始点而上下漂动。</p>
        <p>产生原因：
            <ul>
                <li>温度变化</li>
                <li>电源电压波动</li>
            </ul>
        </p>
        <p><b>共模抑制比</b>：衡量差分式放大电路放大差模信号能力和抑制共模信号能力的综合指标。
        $$K_{CMR1} = |\\frac{A_{vd1}}{A_{vc1}}|$$</p>` },
  "note/analog_electronics_technique/chapter8": { title: "模拟电路", content: `<h1>第八章 反馈放大电路</h1>
        <h2>第一节 反馈的基本概念与分类</h2>
        <p><b>反馈</b>：将电路输出电量（电压或电流）的一部分或全部通过反馈网络，用一定的方式送回到输入回路，以影响输入、输出电量的过程。</p>
        <p><b>反馈放大电路</b>：引入反馈的放大电路
            <br><img src="./img/8.1.1_1.jpg" width="450"><br>
            <ul>
                <li>\\(x_I\\)：输入信号</li>
                <li>\\(x_O\\)：输出信号</li>
                <li>\\(x_F\\)：反馈信号</li>
                <li>\\(x_{ID}\\)：净输入信号</li>
                <i>负反馈放大电路中\\(x_{ID} = x_I - x_F\\)</i>
            </ul>
            <ul>
                <li><b>基本放大电路的增益</b>：\\(A = \\frac{x_O}{x_{ID}}\\)</li>
                <li><b>反馈系数（反向传输系数）</b>：\\(F = \\frac{x_F}{x_O}\\)</li>
            </ul>
            <ul>
                <li><b>闭环</b>：反馈网络存在，能形成反馈。</li>
                <li><b>开环</b>：反馈网络不存在，不能形成反馈。</li>
            </ul>
        </p>
        
        <p>反馈的分类：
            <ul>
                <li><b>正反馈</b>：
                <br>&nbsp;&nbsp;&nbsp;&nbsp;反馈信号引回输入回路与原输入信号共同作用后，使净输入信号量比没有引入反馈时有所<b>增加</b>。</li>
                <li><b>负反馈</b>：
                <br>&nbsp;&nbsp;&nbsp;&nbsp;反馈信号引回输入回路与原输入信号共同作用后，使净输入信号量比没有引入反馈时有所<b>减少</b>。</li>
                <i>放大电路中一般引入负反馈。</i>
                <br>
                <br>判断方法：

            </ul>
            <br>
            <ul>
                <li><b>直流反馈</b>：存在于放大电路直流通路中的反馈。</li>
                <li><b>交流反馈</b>：存在于放大电路交流通路中的反馈。</li>
            </ul>
            <br>
            <ul>
                <li><b>局部反馈</b></li>
                <li><b>间反馈</b></li>
            </ul>
            <ul>
                <li>电压并联负反馈：得到电流-电压转换电路</li>
                <li>电压串联负反馈：减小输入电流，增大带负载能力</li>
                <li>电流并联负反馈：增大输入电流、稳定输出电流（电流控制）</li>
                <li>电流串联负反馈：增大输入电压，稳定电流。得到电压电流-负反馈</li>
            </ul>
        </p>` },
  "note/analog_electronics_technique/chapter9": { title: "模拟电路", content: `<h1>第九章 功率放大电路</h1>
        <h2></h2>` },
  "note/computer/catalog": { title: "几何光学", content: `<h1 lang="en">Programming Catalog</h1>
        <h2>编程语言</h2>
        <div class="Catalog">
            <ul>
                <li><a href="/note/computer/python/catalog">Python</a></li>
            </ul>
        </div>

        <h2>前端开发</h2>
        <div class="Catalog">
            <ul>
                <li><a href="/note/computer/html/chapter1">HTML</a></li>
                <li><a href="/note/computer/css/chapter1">CSS</a></li>
                <li><a href="/note/computer/javascript/catalog">JavaScript</a></li>
                <li><a href="/note/computer/react/catalog">React</a></li>
            </ul>
        </div>

        <h2>术语</h2>
        <div class="Catalog">
            <ul>
                <li><a href="/note/computer/terminology/catalog">计算机术语库</a></li>
            </ul>
        </div>` },
  "note/computer/cpp/cmake": { title: "CMake", content: `<h1 lang="en">CMake</h1>

        <h2><span lang="en">CMake</span>配置</h2>
        <b lang="en">VS Installer</b>：
        <p>勾选：用于Windows的C++ CMake预设</p>
        <b lang="en">VS</b>
        <ul>
            <li>工具-选项-CMake-始终使用CMake预设</li>
            <!-- <li>扩展-管理扩展-下载：Force UTF-8(No BOM)</li> -->
        </ul>

        <h3 lang="en">VS Code</h3>
        <b lang="en">Extensions</b>
        <ul lang="en">
            <li>C/C++</li>
            <li>C/C++ Extension Pack</li>
            <li>C/C++ Themes</li>
            <li>CMake</li>
            <li>CMake Tools</li>
            <li>Output Colorizer</li>
        </ul>

        <b>使用</b>
        <p lang="en">Ctrl + Shift + P ：CMake:Quick Start</p>
        <b>OutPut乱码解决方案</b>
        <ol>
            <li>打开settings</li>
            <li>搜索Output</li>
            <li>在Extensions-C/C++-CMakeTools中，修改Output Log Encoding为UTF-8</li>
        </ol>

    <h2><span lang="en">CMake</span>编写</h2>
        <b lang="en">CMakeLists.txt</b><br>
        <p>主文件夹与每个子文件夹下都需要有一个<span lang="en">CMakeLists.txt</span>文件</p>
        
        <b>主文件</b>
        <pre class="code"><code class="cpp">
        cmake_minimum_required (VERSION 3.8) \\\\要求的最小版本
        project(ProjectName)                 \\\\项目名称
        add_subdirectory(path)               \\\\链接子文件所在目录
        </code></pre>

        <b>子文件</b>
        <pre class="code"><code class="cpp">
        add_executable(exeName file1.cpp...) \\\\编译代码为可执行文件，不需要写入.h文件
        </code></pre>` },
  "note/computer/cpp/cpp": { title: "Pandas", content: `<h1 lang="en">C++</h1>

        
        <h2>指针</h2>

        <b lang="en">&</b>
        <p>取地址符号。</p>

        <b lang="en">DataType *ptr</b>
        <p>创建一个指向指定类型数据的指针。</p>

        <b lang="en">ptr = &a</b>
        <p>给指针类型的数据赋值。</p>

        <table>
            <tr>
                <td lang="en" rowspan="2">DataType* ptr = &a</td>
                <td lang="en">ptr</td>
                <td>存储的是数据的地址，即<span lang="en">&a</span>。（地址不可修改）</td>
            </tr>
            <tr>
                <td lang="en">*ptr</td>
                <td>解引用，存储的是数据的值，即<span lang="en">a</span>。</td>
            </tr>
            <tr>
                <td lang="en" rowspan="3">DataType** pptr = &ptr</td>
                <td lang="en">pptr</td>
                <td>指针的地址，即<span lang="en">&ptr</span></td>
            </tr>
            <tr>
                <td lang="en">*pptr</td>
                <td>存储的指针，即数据的地址<span lang="en">ptr = &a</span></td>
            </tr>
            <tr>
                <td lang="en">**pptr</td>
                <td>存储的指针的解引用，即数据的值<span lang="en">a</span></td>
            </tr>
            <tr>
                <td lang="en" rowspan="4">DataType*& ptr_ = ptr</td>
                <td lang="en">ptr_</td>
                <td>指针</td>
            </tr>
            <tr>
                <td lang="en">&ptr_</td>
                <td>指针的地址（可修改）</td>
            </tr>
            <tr>
                <td lang="en">*ptr</td>
                <td>指针解引用</td>
            </tr>
            <tr>
                <td lang="en">*&ptr</td>
                <td>指针</td>
            </tr>
        </table>


        <hr>

        <h2>链表</h2>
        <h3>创建链表</h3>
        <code><pre class="code">

            typedef struct Node{
                    int data;
                    struct Node* next;
            }LinkList;
        </pre></code>

        <hr>



        <h2>结构体</h2>

        <p>结构体中也可以定义构造函数，与类的构造函数类似，用于成员变量的初始化。</p>
        <hr>



        <h2>类</h2>

        <h3>类的构成</h3>
        <ul>
            <li>成员变量</li>
            <li>构造函数</li>
        </ul>

        <h3>构造函数</h3>
        <p>
            类的一种特殊成员函数，在创建类对象时自动调用，用于初始化对象的成员变量。它的主要作用是确保对象在使用前处于一个有效的状态。
        </p>
        <b>特点</b>
        <ul>
            <li>名称与类名相同</li>
            <li>无返回值</li>
            <li>自动调用</li>
        </ul>
        <code><pre class="code">

            ClassName() : var(init){};
        </pre></code>
        
        <p>C++中，类成员函数和变量根据它们的访问权限被分为三种类型</p>
        <ul>
            <li><b lang="en">public</b>：可以从类的外部直接调用</li>
            <li><b lang="en">protected</b>：可以在类内部或子类中调用</li>
            <li><b lang="en">private</b>：只能在类的内部调用</li>
        </ul>

        <b><span lang="en">explicit</span>关键字</b>
        <p>防止隐式转换</p>

        <h3>析构函数</h3>
        <p>当对象生命周期结束时被调用，用于执行一些清理操作，如释放资源、关闭文件等。</p>
        <b>命名规则</b>：<code>~MyClass()</code>

        <br><br>


        <b>关键字</b>
        <table>
            <tr>
                <td lang="en">const</td>
                <td>被<span lang="en">const</span>关键字修饰的变量不允许被赋值</td>
            </tr>
        </table>
        <b><span lang="en">nullptr</span>关键字</b>：空指针


        <h2>头文件</h2>
        <p>头文件需要与源文件同名，同时需要声明源文件中定义的函数。</p>


        <h2>extern关键字</h2>
        <p>用于全局变量的传输</p>
        <p>定义文件中，extern int 定义</p>
        <p>调用文件中，int 定义</p>` },
  "note/computer/cpp/libuvc": { title: "Pandas", content: `<h1 lang="en">libuvc</h1>
        
        <span lang="en">Prerequisites:</span>
        <ul lang="en">
            <li>libusb</li>
            <li>CMake</li>
        </ul>` },
  "note/computer/cpp/opencv": { title: "OpenCV", content: `<h1 lang="en">OpenCV</h1>
        <h2>VS配置OpenCV环境</h2>
        <p>项目-属性-VC++目录-包含目录-&lt;编辑&gt;...\\opencv\\build\\include</p>
        <p>项目-属性-VC++目录-库目录-&lt;编辑&gt;...\\opencv\\build\\x64\\vc16\\lib</p>
        <p>链接器-输入-附加依赖项-&lt;编辑&gt;opencv_world4100d.lib</p>
        <p>Error：无法找到opencv_world4455d.ddl</p>
        <p>复制Opencv\\build\\x64\\vc15\\bin目录下的opencv_world4100d.dll至C\\Windows\\System32</p>` },
  "note/computer/cpp/pthread": { title: "Pandas", content: `<h1 lang="en">Pthread</h1>
        <b lang="en">Pthread</b>
        <p><span lang="en">POSIX</span>线程标准的具体实现</p>

        <b>进程</b>
        <p>操作系统分配资源的最小单位。</p>

        <b>线程</b>
        <p>是操作系统能够进行运算调度的最小单位，是包含在进程之中的实际运行单位。</p>
        <p>一条线程是进程中一个单一顺序的控制流，一个进程中可以并发多个线程，每条线程并行执行不同的任务。</p>

        <b>线程的状态</b>
        <ul>
            <li>就绪<span lang="en">ready</span>：
            <p>线程等待可用的处理器</p></li>
        </ul>

        <ul>
            <li><b>深拷贝</b>：拷贝一个新对象，对其进行任何修改都不会影响原始对象。</li>
            <li><b>浅拷贝</b>：拷贝一个新对象，对其进行修改的同时原始对象也会进行相应的修改。</li>
        </ul>


        <b>线程池</b>：
        <p>线程池用于管理和重用一组线程，通过事先创建一定数量的线程，将其放入池中，等待任务分配，可以避免频繁地创建和销毁线程，提升性能和资源利用率。</p>
        <p>当有新的任务需要执行时，线程池会从池中取出一个空闲的线程来完成，任务完成后，线程会返回线程池，等待下一个任务。</p>` },
  "note/computer/cpp/qt": { title: "Pandas", content: `` },
  "note/computer/cpp/sfml": { title: "SFML", content: `<h1 lang="en">SFML</h1>

        <h2>导入头文件</h2>
        <code><pre class="code">
            
            #include&lt;SFML/Graphics.hpp&gt;
        </pre></code>


        <h2>主窗口</h2>
        <code><pre class="code">

            int main()
            {
                RenderWindow window(VideoMode(1200, 800), "SFML works!");
                Color background_color = Color::White;

                while (window.isOpen())
                {
                    Event event;
                    while (window.pollEvent(event))
                    {
                        if (event.type == Event::Closed)
                            window.close();
                    }

                    window.clear(background_color);
                    window.display();
                }

                return 0;
            }
        </pre></code>` },
  "note/computer/cpp/vector": { title: "Vector", content: `<h1 lang="en">Vector</h1>

        <b>头文件</b>
        <code><pre class="code">

            #include&lt;vector&gt;
        </pre></code>
        
        <h2>参数</h2>
        <b>长度</b>
        <code><pre class="code">

            vector.size();
        </pre></code>

        二维<span lang="en">Vector</span>：
        <code><pre class="code">

            vector&lt;vector&lt;DataType&gt;&gt; data = {{},{},……};
        </pre></code>` },
  "note/computer/cpp/vs": { title: "Pandas", content: `<h1 lang="en">Visual Studio</h1>
        <h2>文件夹栏</h2>
        <b>外部依赖项</b>
        <p>程序运行所需要的库和头文件等</p>


        <h2>C/C++底层逻辑</h2>
        <ol>
            <li>编译</li>
            <li>链接</li>
        </ol>

        <b>头文件</b>
        <ul>
            <li lang="en">FileName.cpp
                <p lang="zh">函数功能定义</p>
            </li>
            <li lang="en">FileName.h
                <p lang="zh">函数声明</p>
            </li>
        </ul>

        <h2 lang="en">Error</h2>
        <h3 lang="en">C4996</h3>
        <b>产生原因</b>：
        <p>使用了已被弃用的函数等</p>
        <b>解决方案</b>：
        <p>项目-属性-<span lang="en">C/C++</span>-预处理器-预处理器定义-编辑-增加：“<span lang="en">_CRT_SECURE_NO_WARNINGS</span>”</p>
        
        <h3 lang="en">LINK2019</h3>
        <b>产生原因</b>：
        <p>未链接静态库</p>
        <b>解决方案</b>：
        <p>#pragma comment(lib, libpath)</p>



        <h2>链接库文件</h2>
        <table>
            <tr>
                <td rowspan="3">项目-属性</td>
                <td rowspan="2"><span lang="en">VC++</span>目录</td>
                <td>包含目录</td>
                <td>添加<span lang="en">include</span>文件夹所在路径</td>
            </tr>
            <tr>
                <td>库目录</td>
                <td>添加<span lang="en">lib</span>文件夹所在路径</td>
            </tr>
            <tr>
                <td>链接器-输入</td>
                <td>附加依赖项</td>
                <td>添加<span lang="en">lib</span>文件名</td>
            </tr>
        </table>` },
  "note/computer/css/buttonstyle": { title: "CSS", content: `<h1>Button样式</h1>

        <h2>按钮样式</h2>
        <b>边框</b>
        <pre><code>
            border: none; # 无边框
        </code></pre>` },
  "note/computer/css/chapter1": { title: "CSS", content: `<h1 lang="en">CSS</h1>

        
        <h2>测试</h2>

        <p><span class="test">AAAAAAAAAAAAAAAAA</span></p>
        <p>AAAAAAA<span class="tip">BBBB<span class="tiptext">CCCCCCCCCCCCCC</span></span>AAAAAA</p>
        <p>当鼠标悬停在这个 <span class="tooltip">词<span class="tooltiptext">这Aasdfef是词的解释。</span></span> 上时，会显示解释。</p>
        
        
        
        
        <h2>懂</h2>
        <table>
            <tr>
                <td colspan="3">背景样式</td>
            </tr>
            <tr>
                <td>参数</td>
                <td>单位</td>
                <td>作用</td>
            </tr>
            <tr>
                <td lang="en">background-color</td>
                <td>颜色#</td>
                <td>设置背景颜色</td>
            </tr>
            <tr>
                <td lang="en">border-radius</td>
                <td lang="en">n(px)</td>
                <td>设置背景圆角</td>
            </tr>
            <tr>
                <td lang="en">border</td>
                <td></td>
                <td>设置边框样式，三个参数依次为线宽（px）、线型（solid-实线）、颜色（#）</td>
            </tr>
        </table>

        <table>
            <tr>
                <td colspan="3">布局控制</td>
            </tr>
            <tr>
                <td lang="en">margin-bottom</td>
                <td lang="en">px</td>
                <td>下边距</td>
            </tr>
            <tr>
                <td lang="en">padding</td>
                <td></td>
                <td>填充</td>
            </tr>
        </table>

        <table>
            <tr>
                <td lang="en">text-indent</td>
                <td lang="en">0%</td>
                <td>无缩进</td>
            </tr>
            <tr>
                <td lang="en">cursor</td>
                <td lang="en" style="cursor: pointer;">pointer</td>
                <td>鼠标悬停时，变为“手指”类型</td>
            </tr>
            <tr>
                <td lang="en" rowspan="2">visibility</td>
                <td lang="en">hidden</td>
                <td>默认隐藏</td>
            </tr>
            <tr>
                <td lang="en">visible</td>
                <td>默认显示</td>
            </tr>
            <tr>
                <td lang="en">color</td>
                <td></td>
                <td>设置字体颜色</td>
            </tr>


            <tr>
                <td lang="en" rowspan="2">position</td>
                <td lang="en">relative</td>
                <td>相对定位。元素仍按正常文本流排列，可作为祖先元素。</td>
            </tr>
            <tr>
                <td lang="en">absolute</td>
                <td>绝对定位。元素相对于最近的祖先元素进行定位。</td>
            </tr>
            <tr>
                <td lang="en">bottom</td>
                <td lang="en">100%</td>
                <td>向上浮动一行</td>
            </tr>
            <tr>
                <td lang="en">top</td>
                <td lang="en">100%</td>
                <td>向下浮动一行</td>
            </tr>
        </table>

        <table>
            <tr>
                <td lang="en" colspan="3">a</td>
            </tr>
            <tr>
                <td>text-decoration</td>
                <td>none</td>
                <td>无下划线</td>
            </tr>
        </table>

        <table>
            <tr>
                <td lang="en" colspan="3">ul</td>
            </tr>
            <tr>
                <td>list-style-type</td>
                <td>none</td>
                <td>无样式</td>
            </tr>
        </table>


        <h2>不懂</h2>
        <table>
            <tr>
                <td lang="en">position</td>
                <td lang="en">relative</td>
                <td>设置相对定位</td>
            </tr>
            <tr>
                <td lang="en">display</td>
                <td lang="en">inline-block</td>
                <td>使该元素成为一个行内块级元素</td>
            </tr>
        </table>` },
  "note/computer/css/layout": { title: "CSS", content: `<h1 lang="en">布局</h1>

        <h2>应用flex布局</h2>
        <p>display: flex</p>

        <h2>居中控制</h2>
        <b>水平居中</b>
        <p>justify-content: center</p>` },
  "note/computer/cursor/catalog": { title: "Cursor", content: `<h1>React</h1>
        <h2>目录</h2>

        <div class="Catalog">
            <ul>
                <li><a href="/note/computer/cursor/environment">Cursor环境</a></li>
            </ul>
        </div>` },
  "note/computer/cursor/environment": { title: "Cursor", content: `<h1>Cursor环境</h1>

        <h2>安装</h2>
        <a href="https://cursor.com/">Cursor官网</a>


        <div id="PageEnd"></div>` },
  "note/computer/hardware/gpu": { title: "JavaScript", content: `<h1>GPU</h1>
        <h2>命令</h2>
        <b>查看GPU状态</b>
        <pre><code>
            nvidia-smi
        </code></pre>

        <b>实时查看GPU状态</b>
        <pre><code>
            nvidia-smi -l x
        </code></pre>` },
  "note/computer/hardware/others": { title: "JavaScript", content: `<h1>查看硬件</h1>

        <h2>查看系统类型</h2>
        <pre><code>
            # 命令
            systeminfo
        </code></pre>` },
  "note/computer/hardware/performance": { title: "JavaScript", content: `<p>桌面Win + G，小组件菜单-小组件商店-已安装-卸载Edge游戏助手;</p>
        <p>Edge-设置-系统和性能-系统-"关闭"关闭 Microsoft Edge 后继续运行后台扩展和应用</p>` },
  "note/computer/hardware/power": { title: "JavaScript", content: `<h1>默认使用管理员权限打开应用</h1>
        <p>右键应用-属性-兼容性-勾选“以管理员身份运行此程序”</p>` },
  "note/computer/html/chapter1": { title: "HTML", content: `<h1>HTML</h1>

        <h2>文档声明</h2>
        <pre><code>
            &lt;!DOCTYPE&gt;    #H5标准
        </code></pre>

        <h2>HTML基本结构</h2>
        <pre><code>
            &lt;html&gt;
                &lt;head&gt;
                &lt;\\head&gt;

                &lt;body&gt;
                &lt;\\body&gt;
            &lt;\\html&gt;

            &lt;!--
            HTML基本属性：
            lang="zh-CN"    # 语言：简体中文
            --&gt;
        </code></pre>

        <h2>标签（元素）</h2>
        <h3>head</h3>
        <b>页面标签</b>
        <pre><code>
            &lt;title&gt;Title&lt;\\title&gt;
        </code></pre>

        <b>解码方式</b>
        <pre><code>
            &lt;meta charset="UTF-8"&gt;
        </code></pre>

        <h3>body</h3>
        <b>走马灯</b>
        <pre><code>
            &lt;marquee&gt;text&lt;/marquee&gt;
            """
            属性：
            id = "Str."        # ID
            loop = "Num."      # 循环次数
            bgcolor = "Color." # 背景颜色
            """
        </code></pre>
        <marquee>text</marquee>

        <b>输入框</b>
        <pre><code>
            &lt;input&gt;
            """
            属性：
            type = "password" # 密码模式（隐藏输入）
            disable           # 禁用
            
            """
        </code></pre>
        <input>` },
  "note/computer/javascript/catalog": { title: "JavaScript", content: `<h1>JavaScript</h1>
        <h2>目录</h2>

        <div class="Catalog">
            <ul>
                <li><a href="/note/computer/javascript/js_introduction">简介</a></li>
                <li><a href="/note/computer/javascript/js_annotation">注释</a></li>
                <li><a href="/note/computer/javascript/js_dom">DOM</a></li>
                <li><a href="/note/computer/javascript/js_class">类</a></li>
            </ul>
        </div>` },
  "note/computer/javascript/js_annotation": { title: "JavaScript", content: `<h1>注释</h1>

        <h2>单行注释</h2>
        <pre><code>
            //单行注释
        </code></pre>

        <h2>多行注释</h2>
        <pre><code>
            /*
            多行注释
            */
        </code></pre>` },
  "note/computer/javascript/js_class": { title: "JavaScript", content: `<h1>类</h1>

        <h2>创建类</h2>
        <pre class="Code"><code><textarea>
            <!-- 创建基本类 -->
            class Person{

            }

            <!-- 带参数的类 -->
            class Person{
                // 构造器（this指代实例对象）
                constructor(name, age){
                    this.name = name
                    this.age = age
                }

                // 一般方法（在类的原型对象上）
                say_hi(){
                    console.log(\`My name is {this.name}, I'm {this.age} years old.\`)
                }
            }
        </textarea></code></pre>

        <h2>创建类的实例对象</h2>
        <pre class="Code"><code><textarea>
            const p1 = Person()

            const me = Person("Lux Yu", 18)
            me.say_hello()
        </textarea></code></pre>

        <h2>类的继承</h2>
        <pre class="Code"><code><textarea>
            class User extends Person{

            }

            const p1 = Person("Lux Yu", 18)

            class User extends Person{
                constructor(name, age, id){
                    super(name, age) // 接收共有属性（必须在构造器方法的最开始调用）
                    this.id = id
                }
            }
        </textarea></code></pre>

        
        <div id="PageEnd"></div>` },
  "note/computer/javascript/js_dom": { title: "JavaScript", content: `<h1>DOM</h1>

        <h2>获取元素</h2>
        <b>通过id获取某个元素</b>
        <pre><code>
            const element = document.getElementById("id")
        </code></pre>

        <b>通过class获取元素</b>
        <pre>
            const element = document.getElementByClassName("class");
        </pre>
        <p>[注]即使只有一个该class的元素，使用这种方法返回的也是一个数组.</p>

        <b>通过id或class获取元素</b>
        <pre><code>
            const element = document.querySelector(".class")
            const element = document.querySelector("#id")
        </code></pre>
        <hr>

        <h2>元素属性</h2>
        <b>位置与尺寸属性</b>
        <pre><code>
            const rect = el.getBoundingClientRect()

        </code></pre>
        <hr>

        <h2>事件监听</h2>
        <b>对于某个元素进行事件监听</b>
        <pre class="Code"><code class="JavaScript">
            el.addEventListener(Event, Function)
            /*
            Event列表
            点击-'click'
            鼠标按下-'mousedown'
            鼠标拖动-'mousemove'
            */
        </code></pre>

        <pre><code>
            el.addEventListener(Event, function(){
                
            })
        </code></pre>
        <hr>

                <b>获取输入框中的值</b>
        <pre><code>
            element.value
        </code></pre>

        <b>更改某个元素中的内容</b>
        <pre><code>
            
        </code></pre>

        <b>获取<span lang="en">html</span>文件中所有指定类型的元素</b>
        <pre class="Code"><code class="JavaScript">
            document.querySselectorAll('.class')
            // 返回一个包含所有该类型元素的类数组
        </code></pre>

        <b>对于数组中的每个元素</b>
        <pre class="Code"><code class="JavaScript">
            arr.Each(el => {

            });
        </code></pre>

        <b>事件列表</b>

        <table>
            <tr>
                <td colspan="2">event.button</td>
            </tr>
            <tr>
                <td>0</td>
                <td>左键</td>
            </tr>
            <tr>
                <td>1</td>
                <td>中键</td>
            </tr>
            <tr>
                <td>2</td>
                <td>右键</td>
            </tr>
            <tr>
                <td>3</td>
                <td>侧键1</td>
            </tr>
            <tr>
                <td>4</td>
                <td>侧键2</td>
            </tr>
        </table>

        <b>鼠标相对于窗口的坐标（左上角为(0,0)）</b>
        <pre><code>
            event.clientX # 鼠标的x坐标
            event.clientY # 鼠标的y坐标
        </code></pre>

        <b>获取当前页面路径</b>
        <pre><code>
            window.location.pathname
        </code></pre>` },
  "note/computer/javascript/js_introduction": { title: "JavaScript", content: `<h1 lang="en">JavaScript</h1>
        <h2>简介</h2>

        <p><span lang="en">JavaScript</span>是一种<b>面向对象</b>的语言。</p>
        <p>JS区分大小写.</p>
        <p>语句间用英文分号（;）分隔.</p>
        <p>对象具有<b>属性</b>，有些属性本身也是对象，因此对象可以拥有子对象</p>
        <p>对象可以做的事情叫<b>方法</b>。</p>
        <p><b>内部脚本</b>：写于HTML文件内，仅供当前页面使用</p>

        <pre class="Code"><code><textarea>` },
  "note/computer/javascript/js_object": { title: "JavaScript", content: `<h1>Object</h1>

        <h2>定义对象</h2>
        <pre><code class="JavaScript">
            // 定义对象
            class User {
                // 构造函数（初始化实例属性）
                constructor(name, age, gender) {
                    this.name = name;
                    this.age = age;
                    this.gender = gender;
                }
            }

            // 创建实例
            let User_Fish = new User("Fish", 18, "Male")

            // 调用
            console.log(User_Fish.name)
            
        </code></pre>` },
  "note/computer/javascript/js_variable": { title: "JavaScript", content: `<h1><span lang="en">JavaScript</span>变量</h1>
        <div class="PageCatalog">
            <ul>
                <li><a href="#List">数组</a></li>
            </ul>
        </div>

        <p><span lang="en">JavaScript</span>提供以下三种声明变量的方法：</p>
        <pre class="Code"><code class="javascript">
            var x;
            let y;
            const z;
        </code></pre>
        <p>其中，<span lang="en">var</span>变量与<span lang="en">let</span>变量均为常规变量，可以是整型、浮点型、字符串或null值，但是<span lang="en">let</span>变量更安全.</p>
        <p><span lang="en">const</span>声明的是常量.</p>


        <h2>数据类型</h2>
        <ul lang="en">
            <li>String：字符串</li>
            <li>Number：浮点数</li>
            <li>BigInt：整数</li>
            <li>Boolean：true或false</li>
            <li>null：空值</li>
            <li>undefined：未定义</li>
        </ul>

        <div class="Card-Analysis">
            <h2>类型转换</h2>
            <b>转换为浮点数</b>
            <pre><code>
                parseFloat(value)
            </code></pre>
        </div>

        <b>字符串拼接</b>
        <pre class="Code"><code>
            "String" + Variable +"String";
        </code></pre>

        <b>模板字符串</b>
        <pre class="Code"><code>
            \`String \${Variable} String\`;
        </code></pre>

        <b>字符串字数</b>
        <pre class="Code"><code>
            S.length;
        </code></pre>

        <b>字符串全大写</b>
        <pre class="Code"><code>
            S.toUpperCase();
        </code></pre>        
        
        <b>字符串全小写</b>
        <pre class="Code"><code>
            S.toLowerCase();
        </code></pre>

        <b>字符串切片</b>
        <pre class="Code"><code>
            S.substring(start, end);
        </code></pre>

        <b>字符串分割</b>
        <pre class="Code"><code>
            S.split("");
        </code></pre>

        <div class="Card-Analysis" id="List">
            <h3>数组</h3>
            <b>定义数组</b>
            <pre class="Code"><code>
                let array = [];
                let array = new Array();
            </code></pre>
    
            <b>索引</b>
            <pre class="Code"><code>
                Array[index];
            </code></pre>
    
            <b>数组头部增加元素</b>
            <pre class="Code"><code>
                array.unshift(element);
            </code></pre>
    
            <b>数组尾部增加元素</b>
            <pre class="Code"><code>
                array.push();
            </code></pre>
    
            <b>删除数组末尾元素</b>
            <pre class="Code"><code>
                array.pop();
            </code></pre>
    
            <b>判断变量是否为数组</b>
            <pre class="Code"><code>
                Array.isArray(Variable);
            </code></pre>
    
            <b>获取特定元素的索引</b>
            <pre class="Code"><code>
                array.indexOf(element);
            </code></pre>
        </div>` },
  "note/computer/javascript/test": { title: "Temperature Converter", content: `
    <h1>温度转换器</h1>

    <div class="row">
        <label>摄氏度 (℃):</label>
        <input type="number" id="celsiusInput" placeholder="Enter Celsius">
        <button id="cToFBtn">Convert C to F</button>
        <span id="fahrenheitResult"></span>
    </div>

    <div class="row">
        <label>华氏度 (℉):</label>
        <input type="number" id="fahrenheitInput" placeholder="Enter Fahrenheit">
        <button id="fToCBtn">Convert F to C</button>
        <span id="celsiusResult"></span>
    </div>

    <script>
        // 1. 获取元素
        const celsiusInput = document.getElementById('celsiusInput');
        const fahrenheitResult = document.getElementById('fahrenheitResult');
        const cToFBtn = document.getElementById('cToFBtn');
        const fahrenheitInput = document.getElementById('fahrenheitInput');
        const celsiusResult = document.getElementById('celsiusResult');
        const fToCBtn = document.getElementById('fToCBtn');

        // 2. 绑定事件
        cToFBtn.addEventListener('click', () => {
            let CValue = parseFloat(celsiusInput.value)
            if(!isNaN(CValue)){
                let FRes = CValue *9/5 + 32;
                fahrenheitResult.textContent = FRes
            }
            // TODO: 读取 celsiusInput 的值，计算华氏度，并将结果写入 fahrenheitResult
            // 温度转换公式：℉ = ℃ * 9/5 + 32
            // 记得处理用户可能没有输入的情况
        });
        fToCBtn.addEventListener('click', () => {
            let FValue = parseFloat(fahrenheitInput.value)
            if(!isNaN(FValue)){
                let CRes = (FValue - 32) * 5/9;
                celsiusResult.textContent = CRes.toFixed(2)
            }
            // TODO: 读取 fahrenheitInput 的值，计算摄氏度，并将结果写入 celsiusResult
            // 温度转换公式：℃ = (℉ - 32) * 5/9
        });
    </script>
` },
  "note/computer/linuxos/linux": { title: "Pandas", content: `<h1 lang="en">Linux</h1>

    <b>创建虚拟环境</b>
    <pre class="Code"><code>
        python3 -m venv VenvName
    </code></pre>` },
  "note/computer/office/word": { title: "Word", content: `<h1 lang="en">Word</h1>
        <h2>取消自动编号</h2>
        <p>文件—选项—校对—自动更正选项—键入时自动套用格式—取消勾选自动编号列表</p>

        <h2>插入公式快捷键</h2>
        <p lang="en">Alt + +</p>


        <h2>三线表</h2>
        <p>表格样式</p>
        <p>将格式应用于-整个表格，格式（边框和底纹）-1.5磅宽度、上下框线</p>
        <p>将格式应用于-标题行，格式（边框和底纹）-0.75磅宽度下框线、1.5磅上框线</p>

        <h2>表格不随文字移动解决方案</h2>
        <p>右键表格选择表格属性，在表格一栏中将文字环绕选择为“无”。</p>

        <h2>参考文献</h2>
        <p>全选-悬挂2字符-alt选中所有标号，删除-全选参考文献，编号</p>
        <p>插入-分页</p>` },
  "note/computer/python/anaconda": { title: "Pandas", content: `<h1 lang="en">Anaconda</h1>
        
        <p>用于管理虚拟环境。</p>
        <p>因为Python代码会用到很多库嘛，如果不用虚拟环境的话，就会出现一个环境下有无数个库的情况（哪怕用不到），还有一种情况就是Python的版本和库的版本对应不上，这就是为什么要建虚拟环境。</p>


        <p>以下指令均为终端指令</p>

        <b>查看现有的虚拟环境列表</b>
        <pre><code>
            conda info -e
        </code></pre>

        <b>创建虚拟环境</b>
        <pre><code>
            conda create -n EnvName python=x.x
        </code></pre>
        <p>其中<span lang="en">EnvName</span>为自己取的虚拟环境的名字，<span lang="en">x.x</span>为你设定的<span lang="en">Python</span>的版本。</p>
 
        <b>激活虚拟环境</b>
        <code><pre class="code">

            conda activate EnvName
        </pre></code>
        <p>成功激活后路径前会有一个括号显示虚拟环境的名称。</p>


        <b>退出当前虚拟环境</b>
        <code><pre class="code">

            conda deactivate
        </pre></code>

        <b>删除虚拟环境</b>
        <code><pre class="code">

            conda remove -n EnvName --all
        </pre></code>


        <b>查看当前环境下有哪些库</b>
        <code><pre class="code">
            
            conda list
        </pre></code>

        <b>在当前环境下安装库</b>
        <code><pre class="code">

            conda install RequirementName
        </pre></code>` },
  "note/computer/python/basics/catalog": { title: "Python基础", content: `<h1 lang="en">Python Basics</h1>

        <div class="Catalog">
            <ul>
                <li><a href="/note/computer/python/basics/namingconvention">命名规范</a></li>
                <li><a href="/note/computer/python/basics/numbersystem">进制转换</a></li>
                <li><a href="/note/computer/python/basics/pythonbasics">Python基础</a></li>
                <li><a href="/note/computer/python/basics/complex">复数</a></li>
            </ul>
        </div>

        
        <br>` },
  "note/computer/python/basics/class": { title: "Python", content: `<h1>类</h1>

    <b>创建一个类最基础的程序</b>
    <pre><code>
        class Creature:
            pass
    </code></pre>

    <h2>方法</h2>
    <p>类中定义的函数.</p>

    <h3>特殊方法</h3>
    <b>__init__</b>
    <p>__init__方法的作用是，创建示例时自动初始化.</p>
    <pre><code>
        class Creature:
            def __init__(self):
                pass
    </code></pre>
    
    <b>自定义方法</b>
    <pre><code>
        class Creature:
        def Attack(self):
        print("Attack!")
    </code></pre>
    <p>[注]定义方法（无论是特殊方法还是自定义方法）时，必须将self作为第一个参数声明；但在实例时，不需要传入self参数.</p>
    <p>[注]是否要在__init__()中增加参数，取决于创建实例时是否依赖给定的初始值.</p>

    <hr>
    <h2>属性</h2>
    <pre><code>
    class Creature:
        def __init__(self, element):
            self.Element = element
    </code></pre>

    <hr>
    <h2>实例化类</h2>
    <pre><code>
        fish = Creature(element)
    </code></pre>
    <p>称fish为Creature类的一个实例</p>
    <p>[注]实例化类时，一定要在类名后加括号，不然就是复制类.</p>


    <b>调用属性</b>
    <pre><code>
        fish.Element
    </code></pre>

    <hr>
    <h2>继承</h2>
    <pre><code>
        class Animal(Creature):
            def __init__(self):
                super().__init__()
    </code></pre>
    <p>super().__init__()用于使子类继承父类的__init__方法.</p>` },
  "note/computer/python/basics/complex": { title: "React", content: `<h1>复数</h1>
        
        <h2>定义复数</h2>
        <pre><code><textarea>
            x = 1j
            # 复数只能用 数字 + j或J定义
        </textarea></code></pre>

        <h2>复数运算（numpy）</h2>
        <pre><code><textarea>
            import numpy as np

            x = 2 + 7j

            # 取实部
            Re_x = np.real(x)

            # 取虚部
            Im_x = np.imag(x)

            # 取共轭
            bar_x = np.conj(x)
        </textarea></code></pre>
        

        <div id="PageEnd"></div>` },
  "note/computer/python/basics/list": { title: "Pandas", content: `<h1>迭代关系</h1>

        <h2>可迭代对象与迭代器</h2>
        <b>可迭代对象（<span lang="en">Iterable</span>）</b>
        <p>常见可迭代对象：列表、元组、字符串、字典、集合</p>

        <b>迭代器（<span lang="en">Iterator</span>）</b>
        <p>常见迭代器：<span lang="en">map()、filter()、zip()</span>的返回值</p>
        <p>迭代器无法直接使用<span lang="en">print()</span>输出，常先转化为列表。</p>

        <h2>迭代器</h2>
        <h3 lang="en">map()</h3>

        <pre class="Cdoe"><code class="Py">
            iterator = map(function, iterable)
        </code></pre>
        <p>对于<span lang="en">iterable</span>中的每一个元素应用<span lang="en">function</span>，返回一个迭代器。</p>` },
  "note/computer/python/basics/namingconvention": { title: "React", content: `<h1>命名规范</h1>

        <h2>函数命名</h2>
        <pre class="Code"><code><textarea>
            def fun_name():
        </textarea></code></pre>

        <h2>变量命名</h2>
        <pre class="Code"><code><textarea>
            # 普通变量
            var_name

            # 常量
            CONST_NAME

            # 布尔变量
            is_open
            can_run
            has_done
        </textarea></code></pre>
       

        <div id="PageEnd"></div>` },
  "note/computer/python/basics/numbersystem": { title: "Pandas", content: `<h1>进制转换</h1>

        <h2>十进制转二进制</h2>

        <h3 lang="en">bin()</h3>
        <b>十进制转二进制数</b>
        <code><pre class="code">

            bin(num)
        </pre></code>
        注：返回字符串以<span lang="en">0b</span>开头，后面跟着<span lang="en">num</span>的二进制数。
        
        <h3 lang="en">oct()</h3>
        <b>十进制转八进制数</b>
        <code><pre class="code">

            oct(num)
        </pre></code>
        注：返回字符串以<span lang="en">0o</span>开头，后面跟着<span lang="en">num</span>的二进制数。
        
        <h3 lang="en">hex()</h3>
        <b>十进制转十六进制数</b>
        <code><pre class="code">

            hex(num)
        </pre></code>
        注：返回字符串以<span lang="en">0h</span>开头，后面跟着<span lang="en">num</span>的二进制数。` },
  "note/computer/python/basics/pythonbasics": { title: "Pandas", content: `<h1><span lang="en">Python</span>基础</h1>

        <h2 lang="en">Environment</h2>

        <pre class="Code"><code class="Py">
        pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
        </code></pre>

        <h2 lang="en">Input and Output</h2>
        <b lang="en">Input</b>

        <pre class="Code"><code class="Py">
        var = input("hint")
        </code></pre>

        <b lang="en">Output</b><br><br>
        <b>保留<span lang="en">n</span>位小数（四舍五入）</b>

        <pre class="Code"><code class="Py">
        print(f"{var:.nf}")
        </code></pre>

        <b>修改末尾值（默认为换行）</b>
        <pre class="Code"><code class="Py">
        print("", end="...")
        </code></pre>




        <hr>
        <h2>数据类型</h2>
        <ul>
            <li>整型：<span lang="en">int</span></li>
        </ul>
        <b>类型强制转换</b>
        <code><pre class="code">

            int(var)
        </pre></code>
        注：默认向下取整

        <h2 lang="en">list</h2>

        <b>求和</b>
        <code><pre class="code">

            sum(list)
        </pre></code>
        <b>求元素数量</b>
        <code><pre class="code">

            list.count(var)
        </pre></code>

        <b>列表连接</b>
        <code><pre class="code">

            list1 + list2
        </pre></code>

        <b>字符串列表合成字符串</b>
        <code><pre class="code">

            "".join(list)
        </pre></code>
        
        <b>排序</b>
        <code><pre class="code">

            sorted(list)  \\\\生成一个浅拷贝的正向排序
            sorted(list, reverse = True) \\\\生成一个浅拷贝的逆向排序
        </pre></code>

        <b>逆序输出</b>
        <code><pre class="code">

            list(reversed(list))
        </pre></code>


        <b>列表推导式</b>
        <code><pre class="code">

            [x for x in literable if condition]
        </pre></code>




        <h2 lang="en">set</h2>
        <b></b>


        <hr>


        <hr>
        <table>
            <tr>
                <td class="tbtitle">关键字</td>
                <td class="tbtitle">解释</td>
            </tr>
            <tr>
                <td><b lang="en">nonlocal</b></td>
                <td class="tbtext">用于嵌套函数中，声明修改的是外部函数的变量。</td>
            </tr>
        </table>` },
  "note/computer/python/basics/string": { title: "Pandas", content: `<h1>字符串</h1>

    <b>所有字母小写</b>
    <pre class="Code"><code class="Py">
        res.lower() -> str
    </code></pre>

    <b>判断是否以指定字符串结尾</b>
    <pre class="Code"><code class="Py">
        res.endwith(extension) -> bool
    </code></pre>


    <b>字符串逆序</b>
    <pre class="Code"><code class="Py">
        res = res[::-1]
    </code></pre>` },
  "note/computer/python/basicsalgorithm": { title: "Pandas", content: `<h1><span lang="en">Python</span>基础算法</h1>

        <b>回溯算法 求解列表所有子集</b>
        <code><pre class="code">

            def sublists(list):
                def backtrack(start, path):
                    res.append(path)

                    for i in range(start, len(list)):
                        backtrack(i+1, path + list[i:i+1])

                res = []
                backtrack(0, [])
                return res
        </pre></code>` },
  "note/computer/python/catalog": { title: "几何光学", content: `<h1 lang="en">Python Catalog</h1>
        <a href="/note/computer/python/anaconda" lang="en">Anaconda</a>
        <br>
        <a href="/note/computer/python/pythonbasics" lang="en">Python Basics</a>` },
  "note/computer/python/ink/matplotlib": { title: "Pandas", content: `<h1 lang="en">Matplotlib</h1>

        <b>绘制图像</b>
        <pre><code class="language-Py">
            ax.plot(x,y)
        </code></pre>

        <b>设置坐标轴的位置为0</b>
        <pre><code class="language-Py">
            ax.spines[ax].set_position('zero')
        </code></pre>


        <b>获取<span lang="en">Axes</span>对象</b>
        <pre><code class="language-Py">
            plt.subplots() -> tuple[Figure, Axes]
        </code></pre>` },
  "note/computer/python/opencv/opencv": { title: "OpenCV", content: `<h1 lang="en">OpenCV</h1>



        <b>彩色图转灰度图</b>
        <pre><code class="python">
            gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        </code></pre>


        <b>绘制圆形</b>
        <pre><code>
            cv2.circle(img, center, )
        </code></pre>` },
  "note/computer/python/os/os": { title: "Pandas", content: `<h1 lang="en">os</h1>
    

    <b>连接路径</b>
    <pre class="Code"><code class="Py">
        path = os.path.join(path1, path2)
    </code></pre>


    <b>判断路径是否存在</b>
    <pre class="Code"><code class="Py">
        os.path.isdir(path) -> bool
    </code></pre>

    <b>获取指定路径下的全部文件名称</b>
    <pre calss="Code"><code class="Py">
        os.listdir(path)
    </code></pre>

    
    <b>结束程序</b>
    <pre class="Code"><code>
        os._exit(0)
    </code></pre>
    
    <hr>
    <h2>文件夹操作</h2>
    <b>创建文件夹</b>
    <pre class="Code"><code class="Py">
        os.mkdir(path)
    </code></pre>
    
    <pre class="Code"><code class="Py">
        os.makedirs(path, exist_ok:bool = False)
    </code></pre>
    <p>当<span class="CodeCite">os.makedirs</span>中<span class="CodeCite">exist_ok</span>参数为<span class="CodeCite">True</span>时，不会新建文件夹</p>


    <b>递归遍历目录树</b>
    <pre class="Code"><code class="Py">
        os.walk(path) -> root, dirs, files
    </code></pre>
    <p>其中，<span class="CodeCite">root</span>为当前遍历的文件夹名称；<span class="CodeCite">dirs</span>为当前遍历文件夹下所有的子文件夹名称；<span class="CodeCite">files</span>为当前遍历文件夹下所有文件名称。</p>

    <hr>
    <h2>文件操作</h2>
    <b>重命名文件</b>
    <pre class="Code"><code class="Py">
        os.rename(file_name, new_name)
    </code></pre>` },
  "note/computer/python/package_scipy/catalog": { title: "scipy", content: `<h1 lang="en">scipy包</h1>

        <div class="Catalog">
            <ul>
                <li><a href="/note/computer/python/package_scipy/m_solve_ivp">求解常微分方程的初值问题——solve_ivp</a></li>
            </ul>
        </div>

        
        <br>` },
  "note/computer/python/package_scipy/m_solve_ivp": { title: "React", content: `<h1>solve_ivp</h1>

        <h2>导入</h2>
        <pre><code><textarea>
            from scipy.integrate import solve_ivp
        </textarea></code></pre>

        <h2>使用</h2>
        <b>定义求解函数</b>
        <pre><code><textarea>
            def fun(x,y):
                return res
        </textarea></code></pre>
        <p>这样定义的函数为：</p>
        $$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = res$$
        <p>\\(res\\)是与\\(y\\)等长度的向量.</p>


        <h2>实例</h2>
        <p>求解\\(\\frac{\\mathrm{d}y}{\\mathrm{d}t} = 2t\\)，\\(y(0) = 1\\)</p>
        <pre><code><textarea>
            from scipy.integrate import solve_ivp
            import numpy as np

            def fun(t, y):
                return 2*t

            sol = solve_ivp(fun, [0,10], [1], t_eval = np.linspace(0,10,100))
            print(sol)

            import matplotlib.pyplot as plt

            y_num = sol.y[0]
            y_exact = sol.t**2 + 1

            plt.plot(sol.t, y_num, label="solve_ivp")
            plt.plot(sol.t, y_exact, "--", label="exact")
            plt.legend()
            plt.xlabel("t")
            plt.ylabel("y")
            plt.show()
        </textarea></code></pre>

        <p>输出</p>
        <pre><code><textarea>
            message: The solver successfully reached the end of the integration interval.
            success: True
            status: 0
                    t: [ 0.000e+00  1.010e-01 ...  9.899e+00  1.000e+01]
                    y: [[ 1.000e+00  1.010e+00 ...  9.899e+01  1.010e+02]]
                sol: None
            t_events: None
            y_events: None
                nfev: 38
                njev: 0
                nlu: 0
        </textarea></code></pre>
        

        <div id="PageEnd"></div>` },
  "note/computer/python/pandas/pandas": { title: "Pandas", content: `<h1 lang="en">Pandas</h1>
    <b>导入<span lang="en">Pandas</span>库</b>
    <pre class="Code"><code class="Py">
        import pandas as pd
    </code></pre>

    <h2>创建Dataframe</h2>
    <b>创建空的Dataframe</b>
    <pre><code>
        
    </code></pre>

    <b>读取<span lang="en">excel</span>文件</b>
    <pre><code>
        df = pd.read_excel(path)
    </code></pre>

    <b>索引</b>
    <pre><code>
        df2 = df1.iloc[row1:row2, col1:col2]
        df2 = df1["ColName"]
    </code></pre>

    <b>获取列名</b>
    <pre><code>
        cols = df.columns.tolist()
    </code></pre>

    <b>按某列相同元素合并</b>
    <pre><code>
        data = df.groupby(col).sum()
    </code></pre>` },
  "note/computer/python/pandas": { title: "Pandas", content: `<h1>Pandas</h1>

        <h2>清洗空值</h2>
        <pre class="code"><code>
            DataFrame.dropna(axis=0, how='any', thresh=None, subset=None, inplace=False)
        </code></pre>
        <ul>
            <li><span lang="en">axis</span></li>
        </ul>
        


        <h2>数据融合</h2>
        <pre class="code"><code>
            joint_df = pd.merge(df1, df2, on='')
        </code></pre>
        <ul>
            <li><span lang="en">df1</span>：融合的主体</li>
            <li><span lang="en">df2</span>：融合的材料</li>
            <li><span lang="en">on</span>：融合的依据</li>
        </ul>

        <h2>数据透视</h2>
        <p class="code"></p>` },
  "note/computer/python/perceptron": { title: "note/computer/python/perceptron", content: `<h1>感知器</h1>
<h2>介绍</h2>
<p><b>公式</b>：\\(y = w_1 x_1 + w_2 x_2 + \\cdots+bias\\)</p>
<p>数据集：
<table>
<tr>
    <td>样本</td>
    <td>\\(x_1\\)</td>
    <td>\\(x_2\\)</td>
    <td>\\(\\cdots\\)</td>
    <td>\\(y\\)</td>
</tr>
<tr>
    <td>\\(sample_1\\)</td>
    <td>\\(x_{11}\\)</td>
    <td>\\(x_{12}\\)</td>
    <td>\\(\\cdots\\)</td>
    <td>\\(y_1\\)</td>
</tr>
<tr>
    <td>\\(sample_2\\)</td>
    <td>\\(x_{21}\\)</td>
    <td>\\(x_{22}\\)</td>
    <td>\\(\\cdots\\)</td>
    <td>\\(y_2\\)</td>
</tr>
<tr>
    <td>\\(\\cdots\\)</td>
    <td>\\(\\cdots\\)</td>
    <td>\\(\\cdots\\)</td>
    <td>\\(\\cdots\\)</td>
    <td>\\(\\cdots\\)</td>
</tr>
</table>
</p>
<p>其中，\\(x\\)为输入项，\\(w、b\\)分别为权重、偏置项，由训练获得</p>
<p>更新：
    <ul>
        <li>\\(w = w + \\eta(\\hat y - y)x\\)</li>
        <li>\\(b = b + \\eta(\\hat y - y)\\)</li>
    </ul>
</p>
<p><b>感知器类的组成：
<pre>
class Perceptron():
<i># 输入：输入个数、激活函数</i>
<i># 初始化：激活函数（自定义）、权重与偏置项（初始为0）</i>
def __init__(self, input_num, activator):
    self.activator = activator
    self.weights = [0.0]*input_num
    self.bias = 0.0

<i># infomation</i>
def __str__(self):
    return f'weights\\t:{self.weights}\\nbias\\t:{self.bias:.6f}'

<i># Prediction</i>
def predict(self, sample):
    return self.activator(
        sum(list(map(lambda x,y:x*y, self.weights, sample))) + self.bais
    )

def updata_param(self, ):
    delta = self.predict(sample, )
    self.weight = [w + lr*(self.predict(in))]
</pre>
</b></p>` },
  "note/computer/python/pil/pil": { title: "Pandas", content: `<h1>PIL</h1>

    <b>导入图片</b>
    <pre class="Code"><code>
        from PIL import Image
        img = Image.open(path:str)
    </code></pre>` },
  "note/computer/python/project_yolotargetdetection/a": { title: "Pandas", content: `<h1>YOLO模型</h1>
        <b>Nano版本</b>
        <p>适用于树莓派等设备</p>


        <h1>数据集</h1>
<pre><code class="Py">
YoloData/
├─images
│  ├─train
│  │  ├─train_1.jpg
│  │  ├─train_2.jpg
│  │  └─...
│  └─val
│      ├─val_1.jpg
│      ├─val_2.jpg
│      └─...
├─labels
│  ├─train
│  │   ├─train_1.txt
│  │   ├─train_2.txt
│  │   └─...
│  └─val
│       ├─end_1.txt
│       ├─end_2.txt
│       └─...
└─dataset.yaml
</code></pre>

        <a href="dataset.yaml"><b>dataset.yaml文件格式</b></a>


        <h1>训练</h1>
        <p>执行命令</p>
<pre><code>
yolo detect train data=dataset.yaml model=yolov10n/s/m/b/l/x.pt epochs=500 batch=4 imgsz=640 device=0,1,2,3,4,5,6,7
</code></pre>` },
  "note/computer/python/pyqt5/layout": { title: "Pandas", content: `<h1 lang="en">Layout</h1>

        <h2>创建布局</h2>
        <b>横向布局</b>
        <pre><code class="Python">
            from PyQt5.QtWidgets import QHBoxLayout
            Layout = QHBoxLayout()
        </code></pre>

        <b>纵向布局</b>
        <pre><code class="Python">
            from PyQt5.QtWidgets import QVBoxLayout
            Layout = QVBoxLayout()
        </code></pre>

        <p>[注]主窗口中的布局需要指定主部件.</p>
        <pre><code>
            Layout = QVBoxLayout(CentralWidget)
        </code></pre>

        <h3>在部件内创建布局</h3>
        <p>在部件内创建布局时，需要主动调用.</p>
        <pre><code>
            self.setLayout(Layout)
        </code></pre>

        <h2>美化</h2>
        <b>控制部件与布局的边距</b>
        <pre><code>
            Layout.setContentsMargins(left, top, right, bottom)
        </code></pre>

        <b>控制布局窗口挤压控件</b>
        <pre><code>
            Layout.addStretch()
        </code></pre>` },
  "note/computer/python/pyqt5/qmainwindow": { title: "Pandas", content: `<h1 lang="en">PyQt5</h1>

        <b>初始界面</b>
        <pre><code>
        from PyQt5.QtWidgets import QApplication, QMainWindow
        import sys

        if __name__ == "__main__":
            app = QApplication(sys.argv)
            window = QMainWindow()
            window.show()
            sys.exit(app.exec_())
        </code></pre>

        <b>修改window大小</b>
        <pre><code>
          window.setGeometry(x,y,w,h)
          """
          x：界面左上角相对屏幕左上角的x轴距离
          y：界面左上角相对屏幕左上角的y轴距离
          w：界面宽度
          h：界面高度

          """
        </code></pre>


        <b>设置界面图标</b>
        <pre><code>
          from PyQt5.QtGui import QIcon

          window.setWindowIcon(QIcon("Icon.png"))
        </code></pre>

        <b>隐藏系统默认的标题栏</b>
        <pre><code>
          from PyQt5.QtCore import Qt
          window.setWindowFlags(Qt.FramelessWindowHint)
        </code></pre>


        <b>主部件</b>
        <p>在向QMainWindow中添加布局或部件前，必须先创建主部件</p>
        <pre><code class="Python">
            from PyQt5.QtWidgets import QtWidget

            CentralWidget = QtWidget()
            self.setCentralWidget(CentralWidget)
        </code></pre>

        <b>关闭窗口</b>
        <pre><code>
            self.close
        </code></pre>` },
  "note/computer/python/pyqt5/widget": { title: "Pandas", content: `<h1 lang="en">Widget</h1>

        <h2>文字</h2>
        <pre><code>
            from PyQt5.QtWidgets import QLabel

            Label = QLabel("Content")
        </code></pre>


        <h2>按钮</h2>
        <pre><code>
            from PyQt5.QtWidgets import QPushButton

            Btn = QPushButton("Content")
        </code></pre>

        <b>点击后执行</b>
        <pre><code>
            Btn.clicked.connect(Function)
        </code></pre>

        <b>更改样式</b>
        <pre><code>
        self.close_btn.setStyleSheet("""
            QPushButton {
                background-color: #e74c3c;
                color: white;
                border: none;
                width: 30px;
                height: 30px;
            }
            QPushButton:hover {
                background-color: #c0392b;
            }
        """)
        </code></pre>

        <h2>美化</h2>
        <b>修改控件大小</b>
        <pre><code>
        Widget.resize(width, height)
        </code></pre>

        <b>修改部件高度</b>
        <pre><code>
            Widget.setFixedHeight(Value)
        </code></pre>

        <b>部件样式设计</b>` },
  "note/computer/python/pytorch/gradient": { title: "Pandas", content: `<h1>Gradient</h1>
    
    <div class="Card-Definition">
        <b>叶子节点（叶子张量，leaf tensor）</b>
        <p>由用户直接创建的，requires_grad=True的张量，其会在优化中计算梯度.</p>
    </div>
    
    <b>创建叶子节点</b>
    <pre><code>
        x = torch.zeros(h, w, requires_grad=True)
    </code></pre>    

    <b>grad_fn</b>
    <p>当requires_grad=True的张量被计算时，会自动生成一个grad_fn</p>
    <table>
        <tr>
            <td>Operation</td>
            <td>grad_fn</td>
        </tr>
        <tr>
            <td>+</td>
            <td>&lt;AddBackward0&gt;</td>
        </tr>
        <tr>
            <td>-</td>
            <td>&lt;SubBackward0&gt;</td>
        </tr>
        <tr>
            <td>*</td>
            <td>&lt;MulBackward0&gt;</td>
        </tr>
        <tr>
            <td>/</td>
            <td>&lt;DivBackward0&gt;</td>
        </tr>
        <tr>
            <td>mean</td>
            <td>&lt;MeanBackward0&gt;</td>
        </tr>
    </table>

    <b>计算梯度</b>
    <pre><code>
        y.backward()
        grad = x.grad
    </code></pre>

    <p>当在循环中计算梯度时，梯度会累计，消除梯度累计的方法为：</p>
    <pre><code>
        for i in range(length):
            y.backward()
            
            # 清除梯度
            x.grad_zero_()
    </code></pre>
    
    <b>取消张量梯度属性的三种方法</b>
    <pre><code>
        # 直接消除
        x.requires_grad_(False)

        # 定义一个等同于x但无需梯度的新变量y
        y = x.detach()

        # x仍有梯度属性，但x的运算结果y没有
        with torch.no_grad():
            y = fun(x)
    </code></pre>` },
  "note/computer/python/pytorch/neuralnetwork_base": { title: "Pandas", content: `<h1>NeuralNetwork</h1>

    <h2>Data</h2>
    <p>在监督学习中，输入数据由batch_size组样本\\(x\\)与标签\\(y\\)对应组成，每一个样本\\(x\\)中又含有\\(n\\)个特征.</p>


    <h2>Neuron</h2>
    <ul>
        <li>input</li>
        <li>output</li>
    </ul>

    <h2>Layer</h2>
    <ul>
        <li>Input Layer：接收原始输入数据.</li>
        <li>Hidden Layer：对输入数据进行处理，可以有多个隐藏层.</li>
        <li>Output Layer：产生最终输出的结果.</li>
    </ul>

    <p>Layer可以改变特征的数量，而激活函数不能.</p>

    <h2>FNN（Feedfroward Neural Network）</h2>
    <p>数据从输入层开始，经过一个或多个隐藏层，最终达到输出层，全程没有任何循环或反馈.</p>

    <h2>RNN（Recurrent Neural Network）</h2>

    <h2>模型构建</h2>
    <h3>顺序模型</h3>
    <pre><code>
        import torch.nn as nn

        model = nn.Sequential(
            Layer_1
            Layer_2
            ...
            Layer_n
        )
    </code></pre>
    <p>nn.Sequential是Pytoorch中用于搭建顺序模型的容器，数据会按照在nn.Sequential中定义各个层的顺序，从第一层输入，经过每一层的操作后，输出传递到下一层，直到最后一层输出最终结果.</p>
    <b>观察模型结构</b>
    <pre><code>
        # 观察模型整体结构
        print(model)

        # 观察模型第i层
        print(model[i])
    </code></pre>

    <h3>层</h3>
    <b>线性层</b>
    <pre><code>
        Layer = nn.Linear(n,m)
        print(Layer.weight)
        print(Layer.bias)
    </code></pre>
    <p>其中\\(n\\)为线性层输入特征数，\\(m\\)为线性层输出特征数.</p>
    $$\\left[\\begin{matrix}x_1\\\\x_2\\\\\\vdots\\\\x_n\\end{matrix}\\right] \\rightarrow nn.Linear(n,m) \\rightarrow \\left[\\begin{matrix}y_1\\\\y_2\\\\\\vdots\\\\y_m\\end{matrix}\\right]$$
    $$\\left[\\begin{matrix}y_1\\\\y_2\\\\\\vdots\\\\y_m\\end{matrix}\\right] = \\left[\\begin{matrix}w_{11}&w_{12}&\\cdots&w_{1n}\\\\w_{21}&w_{22}&\\cdots&w_{2n}\\\\\\vdots&\\vdots&&\\vdots\\\\w_{m1}&w_{m2}&\\cdots&w_{mx}\\end{matrix}\\right]\\left[\\begin{matrix}x_1\\\\x_2\\\\\\vdots\\\\x_n\\end{matrix}\\right] + \\left[\\begin{matrix}b_1\\\\b_2\\\\\\vdots\\\\b_m\\end{matrix}\\right]$$
    $$\\mathbf{y} = \\mathbf{w}\\mathbf{x} + \\mathbf{b}$$

    <h3>激活函数</h3>
    <b>ReLU函数</b>
    <pre><code>
        nn.ReLU()
    </code></pre>
    $$ReLU(x) = \\max\\{x, 0\\}$$
    $$\\left[\\begin{matrix}x_1\\\\x_2\\\\\\vdots\\\\x_n\\end{matrix}\\right] \\rightarrow nn.ReLU() \\rightarrow \\left[\\begin{matrix}y_1 = \\max\\{x_1, 0\\}\\\\y_2 = \\max\\{x_2, 0\\}\\\\\\vdots\\\\y_n = \\max\\{x_n, 0\\}\\end{matrix}\\right]$$

    <b>Sigmoid函数</b>
    <pre><code>
        nn.Sigmoid()
    </code></pre>
    $$Sigmoid(x) = \\frac{1}{1 + e^{-x}}$$
    $$\\left[\\begin{matrix}x_1\\\\x_2\\\\\\vdots\\\\x_n\\end{matrix}\\right] \\rightarrow nn.Sigmoid() \\rightarrow \\left[\\begin{matrix}y_1 = \\frac{1}{1 + e^{-x_1}}\\\\y_2 = \\frac{1}{1 + e^{-x_2}}\\\\\\vdots\\\\y_n = \\frac{1}{1 + e^{-x_n}}\\end{matrix}\\right]$$

    <h3>损失函数</h3>
    <p>用于衡量模型预测值\\(y_pred\\)与目标真实值间的差异性.</p>

    <h3>优化器</h3>
    <p>根据损失函数计算出的梯度调整模型的参数，使得损失函数的值朝着减小的方向变化.</p>

    <h3>训练模型</h3>
    <pre><code>
        # 训练迭代，循环epochs次
        for epoch in range(epochs)：
            y_pred = model(x) # 前向传播，按定义的模型model计算y_pred
            loss = criterion(y_pred, y) # 损失计算，按定义的损失函数criterion计算loss

            optimizer.zero_grad()  # 清零梯度
            loss.backward()  # 反向传播，计算梯度
            optimizer.step()  # 更新模型参数
    </code></pre>

    <p>调用loss.backward()时，将计算模型中所有可训练参数的梯度（偏导数），并存储在对应可训练参数自身的grad属性中.</p>` },
  "note/computer/python/pytorch/pytorch": { title: "Pandas", content: `<h1>Pytorch</h1>

    <h2>Transform</h2>
    <b>ToTenser</b>
    <p>Function：将数据类型转化为tensor.</p>
    <pre><code>
        from torchvision import transform
        tool = transform.ToTensor()
        output = tool(input)
    </code></pre>

    <b>Normalize</b>
    <p>Function：归一化</p>

    <b>Resize</b>
    <p></p>
    <pre><code>
        from torchvision import transform
        tool = transform.Resize((h2,w2))
        output = tool(input)

        # input:tensor[c, h1, w1]
        # output:tensor[c, h2, w2]
    </code></pre>` },
  "note/computer/python/pytorch/tensor": { title: "Pandas", content: `<h1>Tensor</h1>
    <p>[注]张量可以是\\(n\\)维的.</p>


    <div class="Card-Analysis">
        <h2>创建Tensor</h2>
        <pre><code>
            import torch
        </code></pre>
    
        <details>
            <summary><b>全0张量</b></summary>
            <pre><code>
                tensor = torch.zeros(h,w)
                tensor = torch.zeros((h,w))
            </code></pre>
            <p>[注]以上两种创建张量的书写格式是等价的.</p>
        </details>
        
        <details>
            <summary><b>全1张量</b></summary>
            <pre><code>
                tensor = ones(h,w)
            </code></pre>
        </details>

        <details>
            <summary><b>空张量</b></summary>
            <pre><code>
                tensor = empty(h,w)
            </code></pre>
            <p>[注]空张量未经初始化操作，其初始值为随机数.</p>
        </details>

        <details>
            <summary><b>服从\\(U[0,1)\\)的随机张量</b></summary>
            <pre><code>
               tensor = torch.rand(h,w) 
            </code></pre>
        </details>

        <details>
            <summary><b>服从\\(N(0,1)\\)的随机张量</b></summary>
            <pre><code>
                tensor = torch.randn(h,w)
            </code></pre>
        </details>

        <details>
            <summary><b>从Python列表或Numpy数组创建张量</b></summary>
            <pre><code>
                tensor = torch.tensor(data)

                # 仅适用于从Numpy数组转化为Tensor
                # 用这种方法创建的tensor张量会随data改变而改变
                tensor = torch.from_numpy(data)
            </code></pre>
        </details>
        
        <p>创建张量时，可以使用dtype参数控制张量内部元素的数据类型.</p>
        <pre><code>
            tensor = torch.zeros(h,w,dtype=...)
        </code></pre>
        <p>常见的数据类型有：</p>
        <ul>
            <li>torch.float(torch.float32)(default)</li>
            <li>torch.int(torch.int32)</li>
            <li>torch.double(torch.float64)</li>
        </ul>

        <b>在GPU上创建tensor/将tensor转移到GPU</b>
        <pre><code>
            if torch.cuda.is_avaiable():
                device = torch.device("cuda")
                x = torch.zeros(h, w, device=device)
                y = torch.zeros(h, w)
                y = y.to(device)
        </code></pre>


    </div>

    <div class="Card-Analysis">
        <h2>Tensor的属性</h2>
        <b>张量的形状</b>
        <pre><code>
            # 张量整体形状
            print(tensor.shape)
            print(tensor.size())

            # 张量某维度的形状
            print(tensor.shape[0])
            print(tensor.size()[0])
        </code></pre>

        <b>张量元素的类型</b>
        <pre><code>
            print(tensor.dtype)
        </code></pre>
    </div>

    <div class="Card-Analysis">
        <h2>张量运算</h2>

        <details>
            <summary><b>元素加法</b></summary>
            <pre><code>
                z = x + y
                z = torch.add(x,y)
    
                # y加上x
                y.add_(x)
            </code></pre>
        </details>
        
        <details>
            <summary><b>元素减法</b></summary>
            <pre><code>
                z = y - x
                z = sub(y, x)
    
                # y减去x
                y.sub_(x)
            </code></pre>
        </details>
        
        <details>
            <summary><b>元素乘法</b></summary>
            <pre><code>
                z = x * y
                z = torch.mul(x,y)
    
                # y乘上x
                y.mul_(x)
            </code></pre>
        </details>
        
        <details>
            <summary><b>元素除法</b></summary>
            <pre><code>
                z = y/x
                z = torch.div(y,x)
    
                # x除以y
                y.div_(x)
            </code></pre>
        </details>
    </div>

    <div class="Card-Analysis">
        <h2>张量切片</h2>
        <pre><code>
            tensor[i:j,:]
        </code></pre>

        <b>当切片为一个元素时，可以直接获取它的值</b>
        <pre><code>
            tensor[i,j].item()
        </code></pre>

        <b>更改tensor形状</b>
        <pre><code>
            x = torch.rand(4,4)

            # 将形状更改为[1,n], n = h*w
            y = x.view(16)

            # 将形状更改为[a,b], a*b = h*w
            y = x.view(a,b)
            y = x.view(-1,b)
            y = x.view(a,-1)
        </code></pre>

    </div>` },
  "note/computer/python/rnn": { title: "RNN", content: `<h1>循环神经网络（RNN）</h1>

        <h2>介绍</h2>
        <p><b>用途</b>：处理序列数据</p>

        <h2>一些循环神经网络</h2>
        <h3>基本循环神经网络</h3>
        <p>由输入层、一个隐藏层和一个输出层组成</p>
        <br><img src="./img/RNN1.png" width="100"><br>` },
  "note/computer/python/yolo/labelme": { title: "Pandas", content: `<h1 lang="en">Labelme</h1>

    <h2>数据集标注要求</h2>
    <h3>不能漏标</h3>
    <p>模型会将标注部分视为正样本，将未标注部分视为负样本，漏标会导致模型将样本与背景混淆而降低准确度。</p>

    <b>关于遮挡的情况</b>
    <p>对于遮挡50%以下的样本建议标注。</p>` },
  "note/computer/python/yolo/precision": { title: "Pandas", content: `<h1><span lang="en">Yolo</span>模型提高精度的方法</h1>

    <h2>数据优化</h2>
    <h3>动态增强</h3>` },
  "note/computer/react/catalog": { title: "React", content: `<h1>React</h1>
        <h2>目录</h2>

        <div class="Catalog">
            <ul>
                <li><a href="/note/computer/react/introduction">React基本介绍</a></li>
                <li><a href="/note/computer/react/chapter1">引入React环境</a></li>
            </ul>
        </div>` },
  "note/computer/react/chapter1": { title: "React", content: `<h1>引入React环境</h1>

        <h2>导入JavaScript库</h2>
        
        <pre class="Code"><code><textarea>
            <!-- React核心 -->` },
  "note/computer/react/introduction": { title: "React", content: `<h1>React基本介绍</h1>

        <h2>React是什么</h2>
        <p>用于构建用户界面的JavaScript库.</p>

        <h2>React包含哪些部分</h2>
        <ul>
            <li>React基础</li>
            <li>React-Router（路由）</li>
            <li>Pubsub（消息管理）</li>
            <li>Redux（集中式管理）</li>
            <li>Ant-Design（UI组件库）</li>
        </ul>

        <h2>为什么要学React</h2>
        <p>1、原生JavaScript操作繁琐、效率低，浏览器会进行大量的重绘重排；</p>
        <p>2、原生JavaScript库无组件化编码方案，代码复用率低.</p>

        <h2>React特点</h2>
        <p>1、采用组件化模式、声明式编码，提高开发效率及组件复用率；</p>
        <p>2、React Native可以使用React语法进行移动端开发；</p>
        <p>3、使用虚拟DOM，具有优秀的Diffing算法，尽量减少与真实DOM的交互.</p>

        <h2>需要掌握的JavaScript基础</h2>
        <ul>
            <li>判断this指向</li>
            <li>class（类）</li>
            <li>ES6语法规范</li>
            <li>npm包管理器</li>
            <li>原型、原型链</li>
            <li>数组常用方法</li>
            <li>模块化</li>
        </ul>


        <div id="PageEnd"></div>` },
  "note/computer/terminology/catalog": { title: "术语（计算机）", content: `<h1>计算机术语库</h1>
        <h2>目录</h2>

        <div class="Catalog">
            <ul>
                <li><a href="/note/computer/terminology/front-end">前端</a></li>
            </ul>
        </div>` },
  "note/computer/terminology/front-end": { title: "术语（计算机）", content: `<h1>前端</h1>

        <div class="Card-Definition">
            <b>DOM（Document Object Model）</b>
            <p>文档对象模型.</p>
        </div>
        
        <div class="Card-Definition">
            <b>Diffing算法</b>
            <p>前端框架中用于提升渲染性能的一种优化算法.</p>
        </div>


        <div id="PageEnd"></div>` },
  "note/computer/virtualmachine/virtualmachine": { title: "虚拟机", content: `<h1>虚拟机</h1>
        <b>常用虚拟机软件</b>
        <a href="https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion" lang="en">vmware</a>

        <p></p>
        <b>常用系统</b>
        <a href="https://cn.ubuntu.com/download"><span lang="en">Ubuntu</span>桌面版</a>` },
  "note/convexoptimization/chapter1": { title: "Pandas", content: `<h1>简介</h1>
        <ul>
            <li>
                Mathematical Optimization Problem
                <ul>
                    <li>
                        Convex Optimization
                        <ul>
                            <li>Least-Square Problem</li>
                            <li>Linear Programming Problem</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>

        <b>Mathematical Optimization Problem的基本形式</b>：
        $$\\begin{align}
        &\\mathrm{minimize}~f_0(x)\\\\
        &\\mathrm{subject~to}~f_i(x)\\leq b_i,~i=1,\\cdots,m
        \\end{align}$$

        <table>
            <tr>
                <td>$$x = (x_1, \\cdots, x_n)^T$$</td>
                <td>optimization variable</td>
            </tr>
            <tr>
                <td>$$f_0:\\mathbb{R}^n \\rightarrow \\mathbb{R}$$</td>
                <td>objective function</td>
            </tr>
            <tr>
                <td>$$f_i:\\mathbb{R}^n \\rightarrow \\mathbb{R},~i=1,\\cdots,m$$</td>
                <td>(inequality) constraint function</td>
            </tr>
        </table>` },
  "note/digital_eletronic_technique/catalog": { title: "数字电子", content: `<h1>数字电子技术</h1>

        <h2>目录</h2>
        <a href="/note/digital_eletronic_technique/chapter1">第一章 数字逻辑概论</a>
        <br>
        <a href="/note/digital_eletronic_technique/chapter2">第二章 逻辑代数</a>
        <br>
        <a href="/note/digital_eletronic_technique/chapter3">第三章 逻辑门电路</a>
        <br>
        <a href="/note/digital_eletronic_technique/chapter4">第四章 组合逻辑电路</a>
        <br>
        <a href="/note/digital_eletronic_technique/chapter5">第五章 锁存器和触发器</a>` },
  "note/digital_eletronic_technique/chapter1": { title: "数字电路", content: `<h1>第一章 数字逻辑概论</h1>
        <h2>第一节 数字信号与数字电路</h2>
        <p>
            &nbsp;&nbsp;&nbsp;&nbsp;根据电路的结构特点及其对输入信号的响应规则不同，数字电路可以分为<b>组合逻辑电路</b>和<b>时序逻辑电路</b>。
            <br>&nbsp;&nbsp;&nbsp;&nbsp;数字电路中晶体管工作于开关状态，即晶体管的饱和区和截止区
            <br>&nbsp;&nbsp;&nbsp;&nbsp;两相邻脉冲间的时间间隔为数字信号的周期
        </p>
        <h2>第二节 数制</h2>
        <p>
            二进制（B）转十进制（D）：
            <ul>
                <li>整数部分：由低位至高位\\(\\sum b\\times2^n, n=0,1,\\cdots\\)</li>
                <li>小数部分：由低位至高位\\(\\sum b\\times2^{-n}, n=1,2,\\cdots\\)</li>
            </ul>
            二进制（B）转八进制（O）：
            <ul>
                <li>以小数点为分界，三个为一组，不足补0，每组用二进制转十进制数替换</li>
            </ul>
            八进制（O）转二进制（B）：
            <ul>
                <li>每位数以十进制转二进制数替换</li>
            </ul>
            二进制（B）转十六进制（H）：
            <ul>
                <li>以小数点为分界，四个为一组，不足补0，每组用二进制转十进制数替换</li>
            </ul>
            十六进制（H）转二进制（B）：
            <ul>
                <li>每位数以十进制转二进制数替换</li>
            </ul>


        </p>

        <h2>第四节 二进制代码</h2>
        <p>
            BCD码：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;有权BCD码的名称对应着相应的位数的权重
        </p>
        <h2>第五节 二值逻辑变量与基本逻辑运算</h2>


        <p>
            <b>与运算：</b>
            <ul>
                <li>逻辑表达式：\\(F = A \\cdot B\\)</li>
                <li>特异形符号：</li>
                <li>矩形符号：</li>
                <li>真值表：</li>
            </ul>


            <b>或运算：</b>
            <ul>
                <li>逻辑表达式：</li>
                <li>特异形符号</li>
                <li>矩形符号</li>
                <li>真值表</li>
            </ul>

            <b>非运算：</b>
            <ul>
                <li>逻辑表达式：</li>
                <li>特异形符号</li>
                <li>矩形符号</li>
                <li>真值表</li>
            </ul>



        </p>` },
  "note/digital_eletronic_technique/chapter2": { title: "数字电路", content: `<h1>第二章</h1>
        <h2>第二节 逻辑函数表达式的形式</h2>
        <p>
            最小项:
            <br>&nbsp;&nbsp;&nbsp;&nbsp;对于有n个变量的逻辑函数，包含了全部n个变量，且每个变量都以原变量或非变量的形式仅出现一遍的乘积项。
        </p>

        <p>卡诺图化简法：
            <ol>
                <li>确定最小项表达式</li>
                <li>画出卡诺图</li>
                <li>四边形包围数量为\\(2^n\\)方格，每次画方格时面积尽可能大，每个方格代表一项最简项。</li>
                <li>\\(d\\)为无关项，用×表示，画方格时可视为最小项。</li>
            </ol>
        </p>` },
  "note/digital_eletronic_technique/chapter4": { title: "数字电路", content: `<h1>第四章 组合逻辑电路</h1>
        <h2>第一节 组合逻辑电路的分析</h2>
        <p>
            任务：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;已知逻辑电路图，求解逻辑功能的过程
            <br><b>组合逻辑电路</b>：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;输出状态只取决于同一时刻输入状态的逻辑电路
        <br>
        <br>组合逻辑电路分析方法：
        <ol>
            <li>写出各级逻辑函数表达式，最终得到输出信号与输入信号的逻辑函数表达式，并对其化简和变换。</li>
            <li>列出真值表，分析电路确定其功能。</li>
        </ol>
        奇校验电路：
        <br><img src="./img/4.1.1.png", width="450">
        $$Z = A⊕B\\\\
        L = Z⊕C = A⊕B⊕C
        $$

        偶校验器：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;奇校验器输出端加一级反相器
    </p>
    
    <h2>组合逻辑电路的设计</h2>
    <p>
        任务：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;已知逻辑要求，求解逻辑表达式并画出电路图的过程
    </p>

    <h2>第三节 组合逻辑电路中的竞争-冒险</h2>
    <p>
        <b>竞争冒险</b>
        <br>&nbsp;&nbsp;&nbsp;&nbsp;电路在电平变化的瞬间，可能与稳态下的逻辑功能不一致，产生错误输出。
        <br><b>竞争</b>
        <br>&nbsp;&nbsp;&nbsp;&nbsp;在一定条件下，当一个逻辑门的两个输入端的信号同时向相反方向变化，而变化的时间有差异的现象。
        <br>&nbsp;&nbsp;&nbsp;&nbsp;体现为门电路输出端的逻辑表达式化简为两个互补信号相乘或相加：\\(L = A\\cdot\\bar A\\)或\\(L = A+\\bar A\\)
        <br><b>消除竞争冒险的方法</b>
        <ul>
            <li>发现并消去互补相乘项</li>
            <li>增加乘积项以避免互补项相加</li>
            <li>输出端并联电容器</li>
        </ul>
    </p>


    <h2>第四节 常用组合逻辑电路模块</h2>
    <p><b>编码</b>：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;用一个二进制代码表示特定含义的信息
        <br><b>编码器</b>：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;具有编码功能的逻辑电路
        <br>&nbsp;&nbsp;&nbsp;&nbsp;输入\\(x \\leq 2^n\\)个编码对象，输出\\(n\\)个二进制代码
        <br>分类
        <ul>
            <li>普通编码器</li>
            <li>优先编码器</li>
        </ul>
    </p>
    <p><b>译码</b>：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;译码是编码的逆过程，将具有特定含义的二进制码转换为对应的输出信号。
        <br><b>译码器</b>：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;具有译码功能的逻辑电路。
        <br>&nbsp;&nbsp;&nbsp;&nbsp;译码器具有\\(n\\)个输入端、\\(2^n\\)个输出端与一个使能输入端。
    </p>

    <p>
        <b>数据分配</b>
        <br>&nbsp;&nbsp;&nbsp;&nbsp;将公共数据线上的数据根据需要送到不同的通道上去
        <br><b>数据分配器</b>
        <br>&nbsp;&nbsp;&nbsp;&nbsp;实现数据分配功能的逻辑电路。
        <br>&nbsp;&nbsp;&nbsp;&nbsp;\\(2^n\\)路数据分配器有\\(n\\)个地址输入端。
    </p>

    <p>
        <b>半加器</b>
        <ul>
            <li>\\(S = A \\oplus B\\)</li>
            <li>\\(C = AB\\)</li>
        </ul>

        <b>全加器</b>
        <ul>
            <li>\\(S = A\\oplus B\\oplus C_i\\)</li>
            <li>\\(C_o = AB + (A\\oplus B)C_i\\)</li>
        </ul>
    </p>` },
  "note/digital_eletronic_technique/chapter5": { title: "应用光学", content: `<h1>第五章 锁存器和触发器</h1>

        <h2>第一节 基本双稳态电路</h2>
        <p>
            <b>双稳态电路（双稳态存储电路）</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;一旦进入0、1某种逻辑状态就能长期保持不变的单元电路。
            <ul>
                <li>锁存器</li>
                <li>触发器</li>
            </ul>

        </p>
        <h2>第二节 锁存器</h2>
        <p>
            <b>锁存器</b>
            <br>&nbsp;&nbsp;&nbsp;&nbsp;对脉冲电平敏感的双稳态电路
            <br><b>SR锁存器</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;是一种具有最简单控制功能的双稳态电路
            <ul>
                <li>\\(S=R=0\\)：保持</li>
                <li>\\(S=0、R=1\\)：置0</li>
                <li>\\(S=1、R=0\\)：置1</li>
                <li>\\(S=R=1\\)：处于既非0又非1的未定义状态</li>
            </ul>
            &nbsp;&nbsp;&nbsp;&nbsp;为使锁存器始终工作于定义状态，输入信号应遵守\\(SR=0\\)的约束条件。
        </p>
        <p>
            <b>触发</b>
            <br>&nbsp;&nbsp;&nbsp;&nbsp;对时钟脉冲边沿敏感的状态更新
            <br><b>触发器</b>
            <br>&nbsp;&nbsp;&nbsp;&nbsp;具有触发工作特性的存储单元
            <br>&nbsp;&nbsp;&nbsp;&nbsp;\\(CP\\)表示以上升沿触发的时钟信号
            <br>&nbsp;&nbsp;&nbsp;&nbsp;\\(\\overline{CP}\\)表示以下降沿触发的时钟信号
            <table>
                <tr>
                    <td>触发器</td>
                    <td>特性方程</td>
                    <td>功能</td>
                </tr>
                <tr>
                    <td>JK触发器</td>
                    <td>\\(Q^{n+1} = J\\overline{Q^n} + \\overline KQ^n\\)</td>
                    <td>计数（翻转）、保持、置0、置1</td>
                </tr>
                <tr>
                    <td>D触发器</td>
                    <td>\\(Q^{n+1} = D\\)</td>
                    <td>置0、置1</td>
                </tr>
                <tr>
                    <td>SR触发器</td>
                    <td>\\(\\begin{cases}Q^{n+1} = S+\\overline RQ^n\\\\SR=0（约束条件）\\end{cases}\\)</td>
                    <td>保持、置0、置1</td>
                </tr>
                <tr>
                    <td>T触发器</td>
                    <td>\\(Q^{n+1} = T\\overline{Q^n} + \\overline TQ^n\\)</td>
                    <td>计数（翻转）、保持</td>
                </tr>
                <tr>
                    <td>T'触发器</td>
                    <td>\\(Q^{n+1} = \\overline{Q^n}\\)</td>
                    <td>计数（翻转）</td>
                </tr>
            </table>
        </p>
        <p><b>JK触发器</b>
            <ul>
                <li>当\\(J=K=0\\)时，JK触发器保持不变（\\(Q^{n+1} = Q^n\\)）</li>
                <li>当\\(J=0,K=1\\)时，JK触发器的下一状态将被置0（\\(Q^{n+1} = 0\\)）</li>
                <li>当\\(J=1,K=0\\)时，JK触发器的下一状态将被置1（\\(Q^{n+1} = 1\\)）</li>
                <li>当\\(J=K=1\\)时，JK触发器的下一状态将被翻转（\\(Q^{n+1} = \\bar{Q^n}\\)）</li>
            </ul>
        </p>
        <p><b>D触发器</b>
            <ul>
                <li>构成JK触发器：\\(D = J\\overline{Q^n}+\\overline{K}Q^n\\)</li>
                <li>构成T触发器：\\(D = T\\oplus Q^n\\)</li>
                <li>构成T'触发器：\\(D = \\overline{Q^n}\\)</li>
            </ul>
            
        </p>` },
  "note/digital_eletronic_technique/chapter6": { title: "数字电路", content: `<h1>第六章 时序逻辑电路</h1>
        <p>
            <b>基本结构</b>：
            <ul>
                <li>组合电路：完成逻辑运算</li>
                <li>存储电路：具有记忆功能
                    <ul>
                        <li>触发器或锁存器</li>
                    </ul>
                </li>
            </ul>
            <b>分类</b>
            <ul>
                <li>异步时序电路</li>
                <li>同步时序电路</li>
            </ul>
        </p>

        <p>
            <b>计数器</b>
            <br>按触发器动作分：
            <ul>
                <li>异步计数器</li>
                <li>同步计数器</li>
            </ul>
            按数值增减分：
            <ul>
                <li>递增计数器</li>
                <li>递减计数器</li>
                <li>可逆计数器</li>
            </ul>
            按编码分类：
            <ul>
                <li>二进制计数器</li>
                <li>BCD计数器</li>
                <li>循环码计数器</li>
            </ul>
            <b>计数器的模\\(M\\)</b>
            <br>&nbsp;&nbsp;&nbsp;&nbsp;计数器运行时，从某一状态开始完整循环经历一次的状态数称为计数器的模
            <br>&nbsp;&nbsp;&nbsp;&nbsp;模n计算器即为n进制计数器，构成一个\\(x \\leq 2^n\\)计数器，至少需要\\(n\\)个触发器

            <br><b>二进制计数器</b>
            <ul>
                <li>异步二进制计数器</li>
                <li>同步二进制计数器</li>
            </ul>
        </p>` },
  "note/electron/catalog": { title: "Electron", content: `<h1>Electron</h1>
        <h2>目录</h2>

        <div class="Catalog">
            <ul>
                <li><a href="/note/electron/chapter1">第一章 环境配置</a></li>
                <li><a href="/note/electron/environmentconfiguration">项目环境配置</a></li>
                <li><a href="/note/electron/chapter2">第二章 主进程与渲染进程</a></li>
                <li><a href="/note/electron/window">第三章 窗口</a></li>
                <li><a href="/note/electron/vue">Vue</a></li>
            </ul>
        </div>` },
  "note/electron/chapter1": { title: "Electron", content: `<h1>Electron入门</h1>
        
        <h2>环境配置</h2>
        <b>VSCode</b>
        <p><a href="/note/computer/hardware/power">以管理员身份运行</a>.</p>
        <p>每次使用npm安装完一个包后，都需要关闭VSCode的全部窗口再重新打开.</p>

        <b>Node.js</b>
        <p>一个基于Chrome V8引擎的JavaScript运行环境.</p>
        <p>开发者使用Node.js创建Electron项目.</p>
        <p><a href="https://nodejs.org/en/download">下载地址</a></p>

        <b>yarn</b>
        <p>依赖包管理工具.</p>
        <p>下载方式：</p>
        <pre><code>
            # 命令
            npm install -g yarn
        </code></pre>
        <p>[注]-g即为全局安装.</p>

        <b>创建第一个Electron应用</b>
        <pre><code>
            # 命令
            yarn init
        </code></pre>
        <p>该命令执行完成后，会有一系列提示，要求用户输入项目名称、项目版本、作者等信息，若按默认设置全部回车即可.</p>
        <p>执行这条命令将会生成一个package.js文件.</p>

        <b>安装Electron依赖包</b>
        <p><a href="https://github.com/electron/electron/releases">下载地址</a></p>
        <pre><code>
            yarn config set ELECTRON_MIRROR https://github.com/electron/electron/releases
        </code></pre>


        <b>创建界面窗口</b>
        <p>创建一个index.html文件</p>


        <b>运行界面</b>
        <pre><code>
            yarn start
        </code></pre>` },
  "note/electron/chapter2": { title: "Electron", content: `<h1>主进程与渲染进程</h1>

        <table>
            <tr>
                <td rowspan="8">Electron</td>
                <td rowspan="5">主进程</td>
                <td>监听应用程序的生命周期事件</td>
            </tr>
            <tr><td>启动第一个窗口</td></tr>
            <tr><td>加载index.html页面</td></tr>
            <tr><td>应用程序关闭后回收资源</td></tr>
            <tr><td>退出程序</td></tr>
            <tr>
                <td rowspan="3">渲染进程</td>
                <td>m渲染界面</td>
            </tr>
            <tr><td>接收用户输入</td></tr>
            <tr><td>响应用户交互</td></tr>
        </table>

        <p>一个Electron应用只有一个主进程，但可以有多个渲染进程.</p>
        <p>主进程与渲染进程之间可以互相访问.</p>` },
  "note/electron/environmentconfiguration": { title: "Electron", content: `` },
  "note/electron/vue": { title: "Electron", content: `<h1>Vue</h1>

        <b>安装Vue</b>
        <pre><code>
            npm install -g @vue/cli
        </code></pre>


        <b>创建Vue项目</b>
        <pre><code>
            vue create VueName
        </code></pre>` },
  "note/electron/window": { title: "Electron", content: `<h1>窗口</h1>

        <h2>空白窗口</h2>
        <p>修改main.js为以下：</p>
        <pre><code>
            const { app, BrowserWindow } = require('electron');

            app.whenReady().then(() => {
                const win = new BrowserWindow({
                    width: 800,
                    height: 600
                });
            });

            // 所有窗口关闭时退出
            app.on('window-all-closed', () => {
                if (process.platform !== 'darwin') app.quit();
            });
        </code></pre>

        <h2>标题栏</h2>
        <b>禁用默认边框</b>
        <pre><code>
            # index.js
            win = new BrowserWindow({
                frame: flase,
                webPreferences: {nodeIntegration: true}
            });f 
        </code></pre>
        <p>禁用默认边框后，无法对窗口进行：拖拽、最大化、最小化、关闭的操作.</p>` },
  "note/instrument/autocad/chapter2": { title: "量子力学", content: `<h1>第二章 定态Schrödinger方程</h1>

        <div class="PageCatalog">
            <ul>
            </ul>
        </div>





        <div id="PageEnd"></div>
        <a class="GoToBottom" href="#PageEnd">Bottom</a>` },
  "note/instrument/errortheory/catalog": { title: "误差理论", content: `<h1>误差理论</h1>
        <h2>目录</h2>
        <ul>
            <li><a href="/note/instrument/errortheory/chapter1">第一章</a></li>
            <li><a href="/note/instrument/errortheory/chapter2">第二章 误差分布</a></li>
            <li><a href="/note/instrument/errortheory/chapter3">第三章 随机误差</a></li>
            <li><a href="/note/instrument/errortheory/chapter4">第四章 系统误差</a></li>
            <li><a href="/note/instrument/errortheory/chapter5">第五章 粗大误差</a></li>
            <li><a href="/note/instrument/errortheory/chapter6">第六章 误差传播与误差合成</a></li>
            <li><a href="/note/instrument/errortheory/chapter7">第七章 测量结果的不确定度评定</a></li>
            <li><a href="/note/instrument/errortheory/chapter8">第八章 最小二乘法</a></li>

                
        </ul>` },
  "note/instrument/errortheory/chapter1": { title: "仪器精度理论", content: `<h1>第一章</h1>

        <h2>第一节 研究误差的意义</h2>
        <h3>研究误差的重要性</h3>
        <p>
            <ul>
                <li>正确认识误差的性质，分析误差产生的原因，以消除或减小误差。</li>
                <li>正确处理测量和实验数据，合理计算所得结果，以便在一定条件下得到更接近于真值的数据。</li>
                <li>正确组织实验过程，合理选用仪器和测量方法，以便在最经济的条件下，得到理想的结果。</li>
            </ul>
        </p>
        <h3>误差理论的发展历程</h3>
        <p>
            <ul></ul>
        </p>

        <h2>第二节 误差的基本概念</h2>
        <b>误差</b>
        <p>
            <br>定义：测量误差为测得值与真值之差
            $$\\Delta_i = x_i - x_0,~ i=1,2,3,\\cdots,n$$
            <br>
            <b id="TruthValue">真值（理论值、定义值）：</b>
            <ul>
                <li><b>理论真值（绝对真值）</b></li>
                <li><b>约定真值</b>：世界各国公认的一些几何量和物理量的最高基准值</li>
                <li><b>相对真值</b>：若标准仪器的误差比一般仪器的误差小一个数量级，则标准仪器的误差可视为真值。</li>
            </ul>
            <br>&nbsp;&nbsp;&nbsp;&nbsp;一个特定的物理量在一定条件下具有的客观量值，理论真值一般只存在于纯理论中。
            <br>&nbsp;&nbsp;&nbsp;&nbsp;实际测量中常用算数平均值来代替真值展开计算。
            <br>
            <br>表示方式：
            <table>
                <tr>
                    <td rowspan="6">误差表示方式</td>
                    <td></td>
                    <td class="tbtitle">公式</td>
                    <td colspan = "2" class="tbtitle">参数说明</td>
                    <td class="tbtitle">特点</td>
                </tr>
                <tr>
                    <td rowspan="2">绝对误差</td>
                    <td rowspan="2">\\(\\Delta x = x - x_0\\)</td>
                    <td>\\(x\\)</td>
                    <td>测得值</td>
                    <td rowspan="2" class="tbtext">
                        <li>绝对误差是一个具有确定大小、符号及单位的量，其单位与测得值相同</li><br>
                        <li>绝对误差不能完全说明测量的准确度</li><br>
                        <li>对于相同的被测量，常用绝对误差评定测量精度的高低。</li>
                    </td>
                </tr>
                <tr>
                    <td>\\(x_0\\)</td>
                    <td>被测量的真值，常用约定真值代替</td>
                </tr>

                <tr>
                    <td rowspan="2">相对误差</td>
                    <td rowspan="2">\\(r = \\frac{\\Delta x}{x_0}\\)</td>
                    <td>\\(\\Delta x\\)</td>
                    <td>绝对误差</td>
                    <td rowspan="2" class="tbtext">
                        <li>相对误差只有大小和符号，而无量纲，一般用百分数表示。</li>
                        <li>相对误差常用来衡量测量的相对准确程度。</li>
                        <li>对于不同的被测量，常相对误差评定测量精度的高低。</li>
                    </td>
                </tr>
                <tr>
                    <td>\\(x_0\\)</td>
                    <td>被测量的真值，常用约定真值代替，也可近似用\\(x\\)测量值\\(x_0\\)代替</td>
                </tr>
            </table>

            

            <table>
                <tr>
                    <td class="tbtitle">引用误差（引用相对误差、满度误差）</td>
                    <td colspan = "2" class="tbtitle">参数说明</td>
                </tr>
                <tr>
                    <td rowspan="3">$$r_m = \\frac{\\Delta x_m}{x_m}$$</td>
                    <td>\\(\\Delta x_m\\)</td>
                    <td>仪器某标称范围（或量程）内的最大绝对误差。</td>
                </tr>
                <tr>
                    <td>\\(x_m\\)</td>
                    <td>该标称范围（或量程）上限</td>
                </tr>
                
            </table>
            特点：
            <ul>
                <li>引用误差是一种相对误差，而且该相对误差是引用了特定值，及标称范围（或量程）上限得到的。</li>
                <li>对于有一定测量范围的仪器仪表，绝对误差和相对误差都会随测量点的改变而改变，因此采用引用误差评定测量精度的高低。</li>
            </ul>
        </p>

        <p>仪表的等级\\(s\\)为其引用误差不超过的百分数。</p>
        <p>\\(s\\)越小，精度越高，成本越高。</p>
        <p>当一个仪表的等级\\(s\\)选定后，用此表测量某一被测量所产生的最大绝对误差和最大相对误差分别为：</p>
        $$
            \\Delta x_m = x_m \\times \\pm s\\%
        $$




        <h3>误差的分类</h3>
        <p>
            <ul>
                <li>系统误差：
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;在同一条件下，多次测量同一量值，绝对值和符号保持不变；
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;在条件改变时，按一定规律变化的误差。
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;例如标准量值误差、仪器刻度误差等。
                    <br>
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;按对系统误差掌握的程度分：
                    <ul>
                        
                        <li>已定系统误差：误差绝对值和符号确定</li>
                        <li>未定系统误差：误差绝对值和符号未定</li>
                    </ul>
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;按系统误差出现的规律分：
                    <ul>
                        <li>不变系统误差：误差绝对值和符号固定</li>
                        <li>变化系统误差：误差绝对值和符按规律变化</li>
                    </ul>
                </li><br>
                <li>随机误差：
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;在同一测量条件下，多次测量同一量值，绝对值和符号以不可预定的方式变化的误差。
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;例如传动部件的间隙和摩擦、连接杆的弹性形变等。
                </li>
                <li>粗大误差：
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;超出规定条件下预期的误差。
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;例如操作失误或仪器故障等。
                </li>
            </ul>
        </p>

        <h2>第三节 误差的来源与精度</h2>
        <h3>误差来源</h3>
        <p>
            <ul>
                <li>仪器误差
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;由于仪器的设计、制造和装配校正等方面欠缺所引起的测量误差。
                    <ul>
                        <li>标准器件误差</li>
                        <li>装置误差</li>
                        <li>附件误差</li>
                    </ul>
                </li>
                <li>方法误差（理论误差）：
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;使用测量方法不完善，或采用近似的计算公式等原因引起的误差。
                </li>
                <li>环境误差：
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;由于测量过程中测量条件的变动所引起的测量误差
                </li>
                <li>人为误差：
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;由于测量者造成的误差
                </li>
            </ul>
        </p>
        <h3>精度</h3>
        <b>精度</b>
        <p>反映测量结果与真值接近程度的量。</p>
        <p>
            <ul>
                <li>正确度：
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;反映测量结果中系统误差的影响程度
                </li>
                <li>精密度：
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;反映测量结果中随机误差的影响程度
                </li>
                <li>准确度：
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;反映测量结果中随机误差和系统无误综合的影响程度
                </li>
            </ul>
            特点：
            <ul>
                <li>精密度与准确度无确定关系</li>
                <li>正确度高则精密度与准确度都高</li>
            </ul>
        </p>

        <h2>第四节 测量的基本问题</h2>
        <h3>测量与测量过程</h3>
        <p>
            <b>测量</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;将被测量与标准量通过一定测量方法进行比较，并确定被测量值大小的实验过程。
            $$L = ku$$
            <ul>
                <li>\\(L\\)：被测量</li>
                <li>\\(k\\)：比值</li>
                <li>\\(u\\)：计量单位</li>
            </ul>
            <b>测量过程</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;与实施该测量有关的一组互相关联的资源（测量设备、测量程序、操作者、资金、技术等）、活动和影响量
        </p>

        <h3>测量方法的分类</h3>
        <p>
            根据对测量结果获取方式的不同：
            <ul>
                <li>直接测量：被测量与该标准量直接进行比较的测量</li>
                <li>间接测量：通过直接测量与被测参数有一直函数关系的其他量而得到该被测参数量值的测量</li>
            </ul>
            根据被测对象在测量过程中所处的状态：
            <ul>
                <li>静态测量：在测量过程中被测量是固定不变的测量方式</li>
                <li>动态测量：被测量在测量期间随实践发生变化的测量方式</li>
            </ul>
            根据测量条件是否发生变化：
            <ul>
                <li>等权测量：测量过程中，测量仪器、测量方法、测量条件和操作人员都保持不变的测量</li>
                <li>不等权测量：测量过程中，测量仪器、测量方法、测量条件和操作人员都发生变化的测量</li>
            </ul>
            根据被测对象的属性：
            <ul>
                <li>电量测量：电子学中有关量的测量</li>
                <li>非电量测量</li>
            </ul>
            根据对测量结果的要求不同：
            <ul>
                <li>工作测量：测量误差要求不严的测量</li>
                <li>精密测量：测量误差要求较高的测量</li>
            </ul>
        </p>
        <h3>测量要素</h3>
        <ul>
            <li>测量对象与被测量</li>
            <li>测量资源（测量设备与辅助设施、测量人员、测量方法等）</li>
            <li>测量单位</li>
            <li>测量环境</li>
            <li>测量结果</li>
        </ul>` },
  "note/instrument/errortheory/chapter2": { title: "仪器精度理论", content: `<h1>第二章 误差分布</h1>
        <h2>第一节 测量误差的统计特性</h2>


        <b>测量点列图</b>
        <table>
            <tr>
                <td class="tbtitle">统计特征</td>
                <td class="tbtitle">描述</td>
            </tr>
            <tr>
                <td>有界性</td>
                <td class="tbtext">数据分布在\\(x_{max} \\sim x_{min}\\)之间，可确定测得值及其误差分布的大致范围。</td>
            </tr>
            <tr>
                <td>单峰性</td>
                <td class="tbtext">数据集中在算术平均值附近，如不存在系统误差，则其接近<a href="chapter1.html#TruthValue" >约定真值</a>。</td>
            </tr>
            <tr>
                <td>对称性</td>
                <td class="tbtext">正负误差数目基本相等。</td>
            </tr>
            <tr>
                <td>抵偿性</td>
                <td class="tbtext">误差总和大致趋于零。</td>
            </tr>
        </table>

            <b>统计直方图</b>
            <br>
            <b>概率密度分布图</b>
        </p>
        <h3>测量误差统计分布的特征值</h3>

        <h2>第二节 常见误差分布</h2>
        <p>
            <ul>
                <li>正态分布</li>
                <li>均匀分布</li>
                <li>三角分布</li>
                <li>反正弦分布</li>
                <li>瑞利分布</li>
            </ul>
        </p>` },
  "note/instrument/errortheory/chapter3": { title: "误差理论", content: `<h1>第三章 随机误差</h1>


        <h2>第三节 标准差的计算方法</h2>
        <p>标准差用于描述一组测量数据的分散性。</p>

        <b id="BesselFormula">贝塞尔公式</b>
        $$\\sigma = s = \\sqrt{\\frac{\\mathop{\\sum}_{i=1}^{n}\\nu_i^2}{n-1}}$$
        其中，残差（参与误差）\\(\\nu_i = x_i - \\bar{x_i}\\)，自由度为\\(n-1\\)


        <br><br>
        <b>极差法</b>
        <p>适用于\\(n \\lt 10\\)的正态分布整体</p>
        <p>设等精度多次测量的测得值\\(x_1,x_2,\\cdots,x_n\\)服从正态分布，则极差为：</p>
        $$\\omega_n = x_{max} - x_{min}$$
        <p>当测量误差服从正态分布时，标准差为：</p>
        $$s = \\omega_n/d_n$$
        其中，\\(d_n\\)为极差法系数

        <br><br>
        <b>最大误差法</b>
        <p>真值已知且测量误差服从正态分布时：</p>
        $$s = \\frac{1}{k_n}|\\delta_i|_{max} $$
        其中，\\(|\\delta_i|_{max}\\)为真误差绝对值最大值，\\(\\frac{1}{k_n}\\)为真值已知时的最大误差系数。
        <p>真值未知时：</p>
        $$s = \\frac{1}{k'_n}|\\nu_i|_{max}$$
        其中，\\(|\\nu_i|_{max}\\)为最大残差，\\(\\frac{1}{k'_n}\\)为真值未知时的最大误差法系数。` },
  "note/instrument/errortheory/chapter4": { title: "误差理论", content: `<h1>第四章 系统误差</h1>
        <h2>第一节 系统误差概述</h2>

        <h3>三、系统误差的分类</h3>
        <b>按系统误差在测量过程中的不同变化特性</b>
        <ul>
            <li>恒定系统误差（定值系统误差）：整个测量过程中，误差大小和符号固定不变的系统误差</li>
            <li>可变系统误差：测量过程中，误差大小和符号随测量位置或测量时间发生有规律变化的系统误差。
                <ul>
                    <li>线性变化的系统误差</li>
                    <li>周期性变化的系统误差</li>
                    <li>多项式变化的系统误差</li>
                    <li>复杂规律变化的系统误差</li>
                </ul>
            </li>
        </ul>

        <b>马利科夫判据（残余误差校核法）</b>
        <p>假设测量列共有\\(n\\)个残余误差，将其分为\\(k:n-k\\)两组。</p>
        <p>\\(n\\)为偶数时，\\(k = \\frac{n}{2}\\)</p>
        <p>\\(n\\)为奇数时，\\(k = \\frac{n+1}{2}\\)</p>
        $$\\Delta = \\sum\\limits_{i=1}^k\\nu_i - \\sum\\limits_{i=k+1}^n\\nu_i$$
        <ul>
            <li>\\(\\Delta\\)值显著不为\\(0\\)时，存在系统误差。</li>
            <li>\\(\\Delta\\)值区域\\(0\\)时，不存在系统误差。</li>
        </ul>


        <b>阿贝判据</b>
        <br><br>






        <b><span lang="en">t</span>检验法</b>
        <p>设某量的测量值服从正态分布，若独立测得该量的两组数据如下：</p>
        $$
        x_i, i=1,2,\\cdots,n_x\\\\
        y_j, j=1,2,\\cdots,n_y\\\\
        \\bar x = \\frac{1}{n_x}\\mathop{\\sum}_{i=1}^{n_x}x_i\\\\
        \\bar y = \\frac{1}{n_y}\\mathop{\\sum}_{j=1}^{n_y}y_j\\\\
        s_x^2 = \\frac{1}{n_x}\\mathop{\\sum}_{i=1}^{n_x}(x_i-\\bar x)^2\\\\
        s_y^2 = \\frac{1}{n_y}\\mathop{\\sum}_{j=1}^{n_y}(y_i-\\bar y)^2\\\\
        \\nu = n_x + n_y -2\\\\
        t = (\\bar x - \\bar y)\\sqrt{\\frac{n_xn_y\\nu}{(n_x + n_y)(n_xs_x^2+n_ys_y^2)}}
        $$
        <p>显著水平\\(\\alpha\\)为超参数，查\\(t\\)分布表可得\\(t_\\alpha\\)的值。</p>
        <ul>
            <li>\\(|t|\\lt t_\\alpha\\)：不存在系统误差</li>
            <li>\\(|t|\\gt t_\\alpha\\)：存在系统误差</li>
        </ul>

        <b>组间<span lang="en">F</span>检验法</b>



        <h2>系统误差的减少与消除</h2>
        <ul>
            <li>消除误差源法</li>
            <li>加修正值法</li>
            <li>改进测量方法</li>
        </ul>

        对于恒定系统误差：
        <ul>
            <li>代替法</li>
            <li>相消法</li>
            <li>交换法</li>
        </ul>` },
  "note/instrument/errortheory/chapter5": { title: "误差理论", content: `<h1>第五章 粗大误差</h1>

        <b>产生原因</b>
        <ul>
            <li>测量条件</li>
            <li>测量人员</li>
            <li>测量仪器内部故障</li>
        </ul>

        <b>判别方法</b>
        <p>
            <li>直观判别法</li>
            <li>统计判别法</li>
        </p>

        <h2>统计判别法</h2>
        <b>莱伊达准则（\\(3\\sigma\\)准则）</b>
        <p>根据随机误差的有界性，对于某一服从正态分布的测量列，当测量次数足够多时（\\(n\\gg10\\)）其残差的绝对值大于三倍标准差的概率很小。</p>
        <p>故若</p>
        $$|x_i - \\bar x| > 3\\sigma$$
        则认为\\(x_i\\)含有粗大误差，将其剔除。其中，\\(\\sigma\\)由<a href="chapter3.html#BesselFormula" class="goto">贝塞尔公式</a>计算得出。
    
        <br><br>
        <b>格拉布斯准则</b>
        <p>设某数据测量量的测量误差服从正态分布，若测量数据\\(x_k\\)满足</p>
        $$g_{(k)} = \\frac{|\\nu_k|}{s}\\geq g_0(n,a)$$
        则认为\\(x_k\\)含有粗大误差，将其剔除。其中，\\(g_{(k)}\\)为查表得数据\\(x_k\\)的统计量；\\(g_0(n,a)\\)为统计量的临界值，由测量次数\\(n\\)及显著水平\\(\\alpha\\)决定（通常取\\(\\alpha=0.05\\)）。
    
        <br><br>
        <b>狄克逊准则</b>
        <p>对某量做等精度测量，得：</p>
        $$x_1, x_2,\\cdots,x_n$$
        <p>排序得：</p>
        $$x_{(1)}\\leq x_{(2)}\\leq\\cdots x_{(n)}$$
        <p>当\\(x_i\\)服从正态分布时，\\(x_{(1)}\\)和\\(x_{(n)}\\)的统计量如下：</p>
        $$\\begin{align}
        &n\\leq 7 
        &&\\begin{cases}
        \\gamma_{10} = \\frac{x_{(n)} - x_{(n-1)}}{x_{(n)} - x_{(1)}}\\\\
        \\gamma'_{10} = \\frac{x_{(1)} - x_{(2)}}{x_{(1)} - x_{(n)}}
        \\end{cases}\\\\
        &8\\leq n\\leq 10
        &&\\begin{cases}
        \\gamma'_{11} = \\frac{x_{(n)} - x_{(n-1)}}{x_{(n)} - x_{(2)}}
        \\end{cases}
        \\end{align}$$


        <b>稳健处理</b>
        <p>适用于严重偏离正态分布的情况。</p>

        <h3>消除粗差的方法</h3>
        <ul>
            <li>不等精度测量并相互校核</li>
            <li>保证测量条件的稳定</li>
        </ul>` },
  "note/instrument/errortheory/chapter6": { title: "误差理论", content: `<h1>第六章 误差传播与误差合成</h1>
        <h2>第一节 函数误差</h2>

        <h3>函数系统误差的计算</h3>
        <b>间接测量</b>
        <p>通过直接测量与被测量之间有一定函数关系的其他量，根据已知的函数关系式计算出被测量的量。</p>
        $$y = f(x_1, x_2, \\cdots x_n)$$

        <b>函数误差</b>
        <p>间接测量的量是直接测得的各个测得值的函数，间接测得的被测误差也应是直接测得的各个测得值及其误差的函数，故称这种间接测量的误差为函数误差。</p>
        <p>研究函数误差的实质是在研究误差的传播问题。</p>
        
        <b>函数系统误差</b>
        <p>若已知各个直接测得值的系统误差\\(\\Delta x_1, \\Delta x_2, \\cdots, \\Delta x_n\\)，则函数系统误差为：</p>
        $$\\Delta y = \\frac{\\partial f}{\\partial x_1}\\Delta x_1 + \\frac{\\partial f}{\\partial x_2}\\Delta x_2 +\\cdots + \\frac{\\partial f}{\\partial x_3}\\Delta x_3$$
        式中\\(\\frac{\\partial f}{\\partial x_i}\\)为各个直接测得值的误差传递系数。
    

        <h4>系统误差计算及修正</h4>
        <b>线性函数</b>
        <p>函数关系式为</p>
        $$y = a_1x_1 + a_2x_2 + \\cdots + a_nx_n$$
        <p>若不考虑测得值的系统误差，可以直接由测得的\\(x_i\\)值计算出\\(y\\)。</p>
        $$\\Delta x = x - x_0$$
        $$\\Delta y = a_1\\Delta x_1 + a_2 \\Delta x_2 + \\cdots a_n\\Delta x_n$$
        <p>修正后的结果为</p>
        $$y_c = y - \\Delta y$$

        <hr>

        <h3>函数随机误差的计算</h3>
        $$\\sigma_y = \\sqrt{\\sum\\limits_{i=1}^n(\\frac{\\partial f}{\\partial x_i})^2\\sigma_{x_i}^2 + 2\\sum\\limits_{1\\le i\\lt j}^n(\\frac{\\partial f}{\\partial x_i}\\frac{\\partial f}{\\partial x_j}D_{ij})}$$
        其中：\\(D_{ij} = \\rho_{ij}\\sigma_i\\sigma_j\\)为测得值误差的标准差；\\(\\rho_{ij}\\)为第\\(i\\)个测得值与第\\(j\\)个测得值间的相关系数。
        <p>若各测得值的误差相互独立</p>
        $$\\sigma_y = \\sqrt{\\sum\\limits_{i=1}^n(\\frac{\\partial f}{\\partial x_i})^2\\sigma_{x_i}^2}$$


        <h2>第二节 误差的合成</h2>
        <h3>二、随机误差的合成</h3>

        <b>极限误差合成</b>
        <br><br>
        单项极限误差：
        $$\\delta_i = k_i\\sigma_i$$
        式中，\\(k_i\\)为各单项随机误差的置信因子；
        <br>\\(\\sigma_i\\)为各单项随机误差的标准差

        <h3>四、系统误差和随机误差的合成</h3>
        <p>当测量中存在各种不同性质的多项系统误差与随机误差时，应将其综合求得总误差。</p>
        <p>常用极限误差表，也可用标准差表示</p>
        <b>极限误差表示</b>
        $$\\Delta_总 = \\pm\\sqrt{\\frac{1}{n}\\sum\\limits_{i=1}^q(a_i\\delta_i)^2 + \\sum\\limits_{j=1}^S(b_je_j)^2}$$

        <br>
        <b>最可信赖值</b>
        $$x_0 = \\bar x - \\Delta$$
        其中\\(\\Delta\\)为已定系统误差


        <h3>误差分配问题</h3>
        $$\\begin{cases}
        \\sigma_f \\le t\\\\
        \\frac{\\partial f}{\\partial x_i}\\sigma_i = \\frac{\\partial f}{\\partial x_j}\\sigma_j
        \\end{cases}$$` },
  "note/instrument/errortheory/chapter7": { title: "误差理论", content: `<h1>第七章 测量结果的不确定度评定</h1>


        <h2>第二节 不确定度的基本概念</h2>
        <b>测量不确定度</b>
        <p>测量结果带有的一个参数，意味着对测量结果可信任性、有效性的怀疑程度或不肯定程度。</p>
        <p>测量不确定度一般包含若干分量。</p>
        <p>按数值评定方法的不同分为两类：</p>
        <ul>
            <li><span lang="en">A</span>类评定：由一系列测量数据的统计分布获得的不确定度，用实验标准差表征。</li>
            <li><span lang="en">B</span>类评定：基于经验或资料及假设的概率分布，用估计的标准偏差表征。</li>
        </ul>

        <b>标准不确定度（\\(u\\)）</b>
        <p>以标准差表示的不确定度，其分量一般用\\(u_1, u_2, \\cdots, u_n\\)表示。</p>


        <b><span lang="en">A</span>类评定方法</b>
        <p>对同一被测量\\(x\\)独立重复观测\\(n\\)时，当用\\(\\bar x\\)作为测量结果时，测量结果的<span lang="en">A</span>类评定的标准不确定度为：</p>
        $$u_A(x) = s(\\bar x) = s(x)/\\sqrt n$$
        其中，\\(n\\geq 6\\)时，\\(s(x)\\)用贝塞尔公式计算；\\(2\\leq n\\leq 5\\)时，\\(s(x)\\)用极差法计算。

        <b><span lang="en">B</span>类评定方法</b>
        $$u_B(x) = a/k$$
        <p>一般取\\(k = \\sqrt{3}\\)</p>
        <ul>
            <li>舍入误差</li>
            <li>引用误差</li>
            <li>示值误差</li>
            <li>仪器基本误差</li>
            <li>仪器分辨力</li>
            <li>仪器的滞后</li>
        </ul>

        <h2>第五节 扩展不确定度</h2>
        <b>扩展不确定度（展伸不确定度、范围不确定度，\\(U\\)、\\(U_p\\)）</b>
        <p>为了提高置信概率，用包含因子\\(k\\gt 1\\)乘合成标准不确定度得到的一个区间来表示的测量不确定度。规定了测量结果取值区间的半宽度。</p>
        表示方式
        <ul>
            <li>标准差的倍数，即合成标准不确定度乘包含因子：\\(U = ku_c\\)</li>
            <li>根据给定的置信概率\\(p\\)确定扩展不确定数：\\(U_p =  k_pu_c\\)</li>
        </ul>

        <b>包含因子（覆盖因子，\\(k\\)、\\(k_p\\)）</b>
        <p>为确定扩展不确定度，对合成标准不确定度所乘的大于1的数。</p>
        
        确定包含因子的方法
        <ul>
            <li>自由度法</li>
            <li>超越系数法</li>
            <li>简易法</li>
        </ul>

        <h2>第六节 测量结果的表示方法</h2>
        <p>若某标准砝码质量为\\(m\\)，测量结果为\\(100.02147g\\)，合成标准不确定度\\(u_c(m) = 0.35\\)<span lang="en">mg</span>，自由度为9。</p>

        <h3>一、合成标准不确定度表示方法</h3>
        <span lang="en">（1）</span>\\(m = 100.02147\\)<span lang="en">g</span>，\\(u_c(m) = 0.35\\)<span lang="en">mg</span>或\\(u_c(m) = 0.00035\\)<span lang="en">g</span>，（自由度\\(\\nu = 9\\)）。<br>
        <span lang="en">（2）</span>\\(m = 100.02147(35)\\)<span lang="en">g</span>，（\\(\\nu=9\\)）。括号内的数值按标准差给出，末位与测量结果的最低位对齐。<br>
        <span lang="en">（3）</span>\\(m = 100.02147(0.00035)\\)<span lang="en">g</span>，（\\(\\nu = 9\\)）。括号内的数值按标准差给出，单位同测量结果一致。

        <h3>二、扩展不确定度表示方法</h3>
        <p>取包含因子\\(k = 2\\)，扩展不确定度\\(U(m) = ku_c(m) = 0.00070\\)<span lang="en">g</span></p>
        <span lang="en">（1）</span>\\(M = m \\pm U(m) = (100.02147 \\pm 0.00070)\\)<span lang="en">g</span>，\\(k = 2\\)，（\\(\\nu = 9\\)）<br>
        <span lang="en">（1）</span>\\(m = 100.02147\\)<span lang="en">g</span>，\\(U(m) = 0.00070\\)<span lang="en">g</span>，\\(k = 2\\)，（\\(\\nu = 9\\)）` },
  "note/instrument/errortheory/chapter8": { title: "误差理论", content: `<h1>第八章 最小二乘法</h1>
        <h2>线性参数的最小二乘估计</h2>

        <b>等权测量数据</b>
        <p>一组在相同条件下测得的数据</p>

        <p>对于一组直接测得的等权测量数据：</p>
        $$y_i = x_{i1}w_1 + x_{i2}w_2 + \\cdots + x_{it}w_t = \\sum\\limits_{j=1}^{t}x_{ij}w_j,~ i=1,2,\\cdots,n$$
        其中，\\(y_i\\)不含系统误差和粗大误差，且\\(n>t\\)，\\(w_1, w_2, \\cdots, w_t\\)为代求量。

        $$\\nu_i = y_i - (mx_i + b)$$
        $$\\begin{bmatrix}\\nu_1\\\\\\vdots\\\\\\ \\nu_n\\end{bmatrix}
        =\\begin{bmatrix}y_1\\\\\\vdots\\\\y_n\\end{bmatrix}
        -\\begin{bmatrix}1 & x_i\\\\\\vdots&\\vdots\\\\1&x_n\\end{bmatrix}
        \\begin{bmatrix}b\\\\m\\end{bmatrix}$$
        $$\\mathbf{\\nu} = \\mathbf{Y} - \\mathbf{X}\\mathbf{p}$$

        $$\\because \\mathbf{Y} = \\mathbf{X}\\mathbf{p}$$
        $$\\therefore \\mathbf{X}^T\\mathbf{Y} = \\mathbf{X}^T\\mathbf{X}\\mathbf{p}$$
        令
        $$\\mathbf{C} = \\mathbf{X}^T\\mathbf{X} = 
        \\begin{bmatrix}1 & \\sum x_i\\\\\\sum x_i & \\sum x_i^2\\end{bmatrix}$$
        $$\\therefore \\mathbf{p} = \\mathbf{C}^{-1}\\mathbf{X}^T\\mathbf{Y}$$
    
        <hr>


        <h2>标准差的估计</h2>
        <h3>直接测量结果的标准差估计</h3>
        <b>等权测量数据</b>
        $$s = \\sqrt{\\frac{\\sum\\limits_{i=1}^n\\nu_i^2}{n-t}}$$
        其中\\(n\\)为测量次数、\\(t\\)为参数个数。
        <br><br>
        <b>不等权测量数据</b>
        $$s = \\sqrt{\\frac{\\sum\\limits_{i=1}^n\\omega_i\\nu_i^2}{n-t}}$$

        <h3>待求量的标准差估计</h3>
        <p>待求量\\(x_i\\)的标准差：</p>
        $$\\sigma_{x_i} = \\sigma \\sqrt{d_{ii}}$$
        其中\\(\\sigma\\)为直接测量结果的标准差估计、\\(d_{ii}\\)为\\((A^TA)^{-1}\\)的对角元素。
        <p>待求量\\(x_i\\)与\\(x_j\\)的相关系数：</p>
        $$\\rho_{ij} = \\frac{d_{ij}}{\\sqrt{d_{ii}d_{jj}}}$$


    
        <h2>组合测量问题</h2>
        $$\\nu = X - Ax$$
        $$X = A\\hat{x}$$
        $$A^TA\\hat{x} = A^TX$$
        $$\\hat{x} = (A^TA)^{-1}A^TX$$` },
  "note/instrument/errortheory/chapter9": { title: "误差理论", content: `<h1>第九章 回归分析与经验公式拟合</h1>

        <b>变量之间的关系</b>
        <ul>
            <li>函数关系（确定性关系）</li>
            <li>相关关系</li>
        </ul>

        <b>函数关系</b>
        <p>变量之间可以用确定的函数来描述。例如数学分析和物理学中的大多数公式。</p>
        <p>这种确定性的函数关系仅存在于理论分析中。</p>` },
  "note/instrument/instrumentcomponent/chapter1": { title: "仪器零件设计", content: `<h1>第一章 摩擦轮传动、带传动（含注释部分）</h1>

        <h2>第一节 摩擦轮传动</h2>
        <!-- <b>摩擦轮传动</b>
        <p>利用两轮直接接触所产生的摩擦力来传递运动和动力的一种机械运动.</p>
        <b>传动方式</b>
        <p>借助摩擦力传递运动和转矩（动力）.</p>
        <b>传动装置</b>
        <p>直接接触的摩擦轮.</p>
        <b>优点</b>
        <ul> 
            <li>结构简单</li>
            <li>平稳、噪音小</li>
            <li>过载-安全作用（滑动）</li>
            <li>无级变速</li>
        </ul>
        <b>缺点</b>
        <ul>
            <li>传动精度低</li>
            <li>无恒定速度比</li>
            <li>传动转矩小</li>
            <li>效率低</li>
        </ul>

        <b>工作原理</b>
        <p>利用主动轮、从动轮在接触处产生摩擦力传递运动、转矩.</p>
         -->

        <h2>第二节 摩擦轮传动设计</h2>
        <!-- <b>工作条件</b>
        <p>两轮接触面间的摩擦力应大于或等于带动从动轮回转所需的工作圆周力.</p>
        $$fF_n \\geq F_t$$
        <p>若不满足工作条件，则会出现<b>打滑</b>现象.</p>


        <b>影响</b>
        <p>从动轮的轮面局部磨损，影响传动质量.</p> -->

        <b>摩擦轮主要失效形式</b>
        <ul>
            <li>由于过载、压紧力的改变或摩擦系数的减小导致打滑，使轮面产生<b>局部磨损与烧伤</b>.</li>
            <li>在交变接触应力的作用下，工作表面易产生<b>疲劳点蚀和表面压溃</b>.</li>
            <li>在较大压紧力的作用下，高速运转将导致摩擦表面瞬时温度升高，<b>轮面产生胶合</b>.</li>
        </ul>

        <h2>第四节 带传动</h2>
        <b>带传动</b>
        <p>由带和带轮的组成传递运动和动力的传动.</p>
        <table>
            <tr>
                <td rowspan="5">带传动</td>
                <td rowspan="4">摩擦传动</td>
                <td>平带传动</td>
            </tr>
            <tr>
                <td><span lang="en">V</span>带传动（最常用）</td>
            </tr>
            <tr>
                <td>多楔带传动</td>
            </tr>
            <tr>
                <td>圆带传动</td>
            </tr>
            <tr>
                <td>啮合传动</td>
                <td>同步带传动</td>
            </tr>
        </table>



        <b>工作原理</b>
        <p>带传动在两带轮之间用带作挠性拉曳元件，利用传动带与带轮的摩擦力或啮合来传递运动和动力.</p>

        <b>主要参数</b>
        <p>包角：带绕在带轮上时，接触弧所对应的中心角.</p>
        <img src="./Img/Chapter1/Image1.png" width="400"><br>
        <b>带传动张紧装置</b>
        <ul>
            <li><b>定期张紧装置</b>
                <p>采用滑轨和调节螺钉或采用摆动架和调节螺栓改变中心距的张紧方式.</p>
            </li>
            <li><b>自动张紧装置</b>
                <p>采用重力和带轮上的制动力矩，使带轮随浮动架绕固定轴摆动而改变中心距的自动张紧方法.</p>
            </li>
            <li>
                <b>张紧轮张紧装置</b>
                <p>张紧轮一般放在松边内侧，使带只受单向弯曲，同时张紧轮应尽量靠近大轮，以免过分影响在小带轮上的包角.</p>
            </li>
        </ul>
        <b>作用</b>
        <p>传动带运转一段时间后带会松弛，为了保证传动能力，需加张紧装置，使得带与带轮接触区间产生正常的压力.</p>

        <b>V带与V带轮结构</b>
        <p>普通<span lang="en">V</span>带楔角：\\(\\phi = 40°\\)</p>
        <p><span lang="en">V</span>带轮槽角：\\(\\phi = 32°,34°,36°,38°\\)</p>

        <h3>影响带的承载能力的因素</h3>
        <b>最大有效拉力</b>
        $$F_{tc} = 2F_0\\frac{e^{f_v\\alpha} - 1}{e^{f_v\\alpha} + 1}$$
        <ul>
            <li>张紧力\\(F_0\\)</li>
            <li>小带轮包角\\(\\alpha\\)</li>
            <li>当量摩擦系数\\(f_v\\)</li>
        </ul>
        <p>避免打滑的条件：具有足够的张紧力、包角与当量摩擦系数，但注意各参数都不应过大或过小.</p>

        <b>弹性滑动</b>
        <p>由于材料弹性变形产生的滑动</p>

        <b>打滑</b>
        <p>不满足工作条件时，主动轮不能带动传动轮，两轮面接触处在传动中会出现相对滑移现象.</p>

        <b>带传动应力分析</b>
        <p>小轮的弯曲应力比大轮处应力大.</p>
        <p>带中最大应力发生在小轮与带相遇点处.</p>

        <b>带传动的失效形式</b>
        <ul>
            <li>打滑</li>
            <li>疲劳破坏</li>
        </ul>

        <ul class="navibar">
            <li class="next"><a href="/note/instrument/instrumentcomponent/chapter2">下一页</a></li>
        </ul>` },
  "note/instrument/instrumentcomponent/chapter10": { title: "仪器零件设计", content: `<h1>第十二章 弹性元件（含注释）</h1>

        <h2>第一节 概述</h2>
        <!-- <b>弹性</b>
        <p>材料在外力作用下产生形变，外力去除后恢复原状的性能.</p> -->

        <b>弹性元件</b>
        <p>利用材料弹性性能和结构特点完成各种功能的零部件.</p>
<!-- 
        <b>主要作用</b>
        <ul>
            <li>测力——弹簧秤</li>
            <li>产生振动——振动筛</li>
            <li>储存能量——钟表弹簧</li>
            <li>缓冲和吸振——车辆减振弹簧</li>
            <li>控制机械运动——离合器中的控制弹簧</li>
            <li>改变机械的自振频率——电机、压缩机的弹性支座</li>
            <li>消除空回和配合间隙——精密设备</li>
        </ul> -->

        <table>
            <tr><td colspan="2">弹簧的分类</td></tr>
            <tr>
                <td rowspan="6">按结构分类</td>
                <td>片簧</td>
            </tr>
            <tr>
                <td>平卷簧</td>
            </tr>
            <tr>
                <td>螺旋弹簧</td>
            </tr>
            <tr>
                <td>弹簧管</td>
            </tr>
            <tr>
                <td>波纹管</td>
            </tr>
            <tr>
                <td>膜片</td>
            </tr>
            <tr>
                <td rowspan="2">按材料分类</td>
                <td>金属弹簧</td>
            </tr>
            <tr>
                <td>非金属弹簧</td>
            </tr>
        </table>

<!-- 
        <b>弹簧材料要求</b>
        <p>较高的弹性极限和疲劳极限、足够的韧性和良好的热处理功能.</p>

        <b>金属材料</b>
        <ul>
            <li>碳素弹簧钢</li>
            <li>合金弹簧钢</li>
            <li>有色金属合金</li>
        </ul>


        <b>非金属材料</b>
        <ul>
            <li>橡胶</li>
            <li>塑料</li>
            <li>石英</li>
            <li>陶瓷</li>
            <li>空气</li>
        </ul> -->

        <h2>第二节 弹性元件的基本特性</h2>

        <b>弹性滞后</b>
        <p>在弹性范围内加载与去载时特性曲线不重合的现象.</p>

        <b>弹性后效</b>
        <p>载荷改变后，变形不是立刻完成，而是在一定时间内逐渐完成.</p>

        <!-- <b>弹性元件的基本特性</b>
        <p>作用在弹性元件上的力、压力或温度等工作载荷与变形量之间的关系.</p>

        <h3>基本特性的表示方式</h3>
        <b>基本特性解析式</b>
        $$\\lambda = f(F)(p,t)$$
        <ul>
            <li>\\(\\lambda\\)：变形量</li>
            <li>\\(F\\)：力</li>
            <li>\\(p\\)：压力</li>
            <li>\\(t\\)：温度</li>
        </ul>
        <b>特性曲线</b>
        <ul>
            <li>直线型：有线性特征</li>
            <li>曲线型：有非线性特征</li>
        </ul> -->
        <b>刚度</b>
        <p>表示弹性元件随外力作用产生变形的能力.</p>
        <b>柔度</b>
        <p>刚度的倒数</p>


        <h2>第三节 螺旋弹簧</h2>
        <b>按载荷作用方式分类</b>
        <ul>
            <li>压缩弹簧</li>
            <li>拉伸弹簧</li>
            <li>扭转弹簧</li>
        </ul>

        <b>压缩弹簧的失稳</b>
        <p>若压缩弹簧的高径比\\(b = H_0/D\\)比较大，当载荷达到一定值时，弹簧会突然发生侧向弯曲，使弹簧刚度突然降低.</p>

        <b>保证弹簧稳定性的措施</b>
        <ul>
            <li>设计条件：高径比保证
                <ul>
                    <li>弹簧两端固定：\\(b\\lt 5.3\\)</li>
                    <li>弹簧一端固定，另一端回转：\\(b\\lt 3.7\\)</li>
                    <li>弹簧两端回转：\\(b\\lt 2.6\\)</li>
                </ul>
            </li>
            <li>工作条件：工作载荷保证</li>
            <li>辅助设计：结构保证
                <p>设置导杆或导套，或采用组合弹簧.</p>
            </li>
        </ul>

        <ul class="navibar">
            <li><a href="/note/instrument/instrumentcomponent/chapter9">上一页</a></li>
        </ul>` },
  "note/instrument/instrumentcomponent/chapter2": { title: "仪器零件设计", content: `<h1>第二章 齿轮传动</h1>

        <h2>第一节 概述</h2>
        <b>优点</b>
        <ul>
            <li>传动功率和速度的适应范围广</li>
            <li>传动比准确、稳定</li>
            <li>工作可靠，使用寿命长</li>
            <li>传动效率高</li>
            <li>结构紧凑，外廓尺寸小</li>
            <li>可传递空间任意两轴间的运动</li>
        </ul>

        <b>缺点</b>
        <ul>
            <li>齿轮制造成本高</li>
            <li>制造及安装精度要求高</li>
            <li>齿轮精度低时，传动的噪声和振动大</li>
            <li>不宜用于传动中心距较大的场合</li>
        </ul>
        <h2>第二节 渐开线直齿圆柱齿轮</h2>

        <b>渐开线直齿圆柱齿轮的正确啮合条件</b>
        <p>两齿轮分度圆上的模数和压力角必须分别相等.</p>

        <h2>第四节 斜齿圆柱齿轮传动</h2>
        <b>正确啮合条件</b>
        <ul>
            <li>两齿轮模数和压力角分别相等.</li>
            <li>外啮合时，两齿轮螺旋角需大小相等，方向相反.</li>
        </ul>

        <h2>第五节 齿轮传动的失效形式及材料</h2>
        <b>齿轮传动的失效形式</b>
        <ul>
            <li>轮齿的折断</li>
            <li>齿面的点蚀</li>
            <li>齿面的磨损</li>
            <li>齿面的胶合</li>
        </ul>

        <b>轮齿的折断</b>
        <ul>
            <li>发生部位：齿根</li>
            <li>提高轮齿疲劳折断能力的方法</li>
            <ul>
                <li>增大齿根过渡曲线半径</li>
                <li>降低表面粗糙度</li>
                <li>采用表面强化技术</li>
            </ul>
        </ul>

        <h2>第八节 蜗杆传动</h2>
        <b>蜗杆按形状分类</b>
        <ul>
            <li>圆柱蜗杆传动</li>
            <li>环面蜗杆传动</li>
            <li>锥蜗杆传动</li>
        </ul>
        
        <h3>圆柱蜗杆传动</h3>
        <b>基本参数</b>
        <ul>
            <li>模数\\(m\\)</li>
            <li>压力角\\(\\alpha\\)</li>
            <li>分度圆直径\\(d_1\\)</li>
            <li>直径系数\\(q = d_1/m\\)</li>
            <li>导程角\\(\\gamma\\)</li>
        </ul>

        <b>正确啮合条件</b>
        <ul>
            <li>蜗轮端面模数应等于蜗杆轴向模数，且均为标准值.</li>
            <li>蜗轮端面压力角应等于蜗杆轴向压力角，且均为标准值.</li>
        </ul>

        <h2>第九节 谐波齿轮传动</h2>
        <b>组成</b>
        <ul>
            <li>波发生器</li>
            <li>柔轮</li>
            <li>刚轮</li>
        </ul>

        <h2>第十节 轮系</h2>
        <b>按传动时各齿轮轴线的相对位置关系分</b>
        <ul>
            <li>定轴轮系</li>
            <li>周转轮系</li>
        </ul>

        <b>周转轮系按自由度数目分</b>
        <ul>
            <li>差动轮系：自由度为2</li>
            <li>行星轮系：自由度为1</li>
        </ul>

        <h2>第十一节 齿轮传动的空回</h2>
        <b>齿轮空回</b>
        <p>主动轮反向转动时，从动轮滞后的现象.</p>
        <p>滞后的转角即<b>空回误差角</b>.</p>


        <h2>第十二节 齿轮传动链的设计</h2>
        <b>齿轮传动传动比的分配原则</b>
        <ul>
            <li>先小后大的原则</li>
            <li>最小体积原则</li>
            <li>最小转动惯量原则</li>
        </ul>
        
        <b>精密机械中常用的连接方法</b>
        <ul>
            <li>销钉连接</li>
            <li>螺钉连接</li>
            <li>键连接</li>
        </ul>` },
  "note/instrument/instrumentcomponent/chapter3": { title: "仪器零件设计", content: `<h1>第三章 螺旋传动</h1>
        <h2>第一节 概述</h2>
        <b>螺旋传动</b>
        <p>利用<b>螺杆</b>和<b>螺母</b>组成的螺旋副实现传动要求.</p>
        <b>作用</b>
        <p>用于将回转运动变为直线运动，同时传递运动或动力.</p>
        $$l = \\frac{P_h}{2\\pi}\\phi$$
        <p>\\(l\\)——螺杆或螺母的位移</p>
        <p>\\(P_h\\)——导程</p>
        <p>\\(\\phi\\)——螺杆和螺母间的相对转角</p>


        <b>普通螺纹</b>
        <p>牙型角：\\(60°\\)</p>
        <p>公称直径：螺纹大径</p>

        <h2>第二节 滑动螺旋传动</h2>
        <b>优点</b>
        <ul>
            <li>降速传动比大</li>
            <li>具有增力作用</li>
            <li>能自锁</li>
        </ul>
        <b>缺点</b>
        <ul>
            <li>效率低、磨损快</li>
            <li>低速时有爬行现象（滑移）</li>
        </ul>

        <b>螺纹旋合长度代号</b>
        <ul>
            <li>短旋合长度：<span lang="en">S</span></li>
            <li>中等旋合长度：<span lang="en">N</span></li>
            <li>长旋合长度：<span lang="en">L</span></li>
        </ul>


        <h3>差动螺旋传动</h3>
        <p>由两个螺旋副组成的使活动螺母与螺杆产生差动的螺旋传动.</p>
        <b>活动螺母的实际移动距离</b>
        $$L = \\frac{\\phi}{2\\pi}(P_{h1} \\pm P_{h2})$$
        <p>\\(L\\)——活动螺母的实际移动距离</p>
        <p>\\(\\phi\\)——螺杆回旋角度</p>
        <p>\\(P_{h1}\\)——固定螺母导程</p>
        <p>\\(P_{h2}\\)——活动螺母导程</p>
        <p>两螺纹旋向相同时，为差动降速螺旋传动，取“\\(-\\)”；旋向相反时，为差动增速螺纹传动，取“\\(+\\)”</p>
        <p>\\(L\\gt 0\\)时，活动螺母实际移动方向与螺杆同向；\\(L\\lt 0\\)时，活动螺母实际移动方向与螺杆反向.</p>


        <h2>滑动螺旋传动的失效形式</h2>
        <ul>
            <li>螺纹的磨损</li>
            <li>螺杆的变形</li>
            <li>螺杆或螺纹牙的断裂</li>
        </ul>

        <b>螺旋副零件与滑板连接结构的确定</b>
        <ul>
            <li>刚性连接结构</li>
            <li>弹性连接结构</li>
            <li>活动连接结构</li>
        </ul>

        <b>消除螺旋传动空回的方法</b>
        <ul>
            <li>利用单向作用力</li>
            <li>利用调整螺母</li>
            <ul>
                <li>径向调整法</li>
                <li>轴向调整法</li>
            </ul>
            <li>利用塑料螺母消空回</li>
        </ul>` },
  "note/instrument/instrumentcomponent/chapter4": { title: "仪器零件设计", content: `<h1>第四章 轴和常见精密轴系</h1>
        <h2>第一节 概述</h2>
        <b>根据承载情况分类</b>
        <ul>
            <li>心轴</li>
            <li>转轴</li>
            <li>传动轴</li>
        </ul>` },
  "note/instrument/instrumentcomponent/chapter5": { title: "仪器零件设计", content: `<h1>第五章 支承</h1>
        <h2>第一节 概述</h2>
        <b>支承的组成部分</b>
        <ul>
            <li>运动件：转动或在一定角度范围内摆动的部分.</li>
            <li>承导件：固定部分，用以约束运动件，使其只能转动或摆动.</li>
        </ul>

        <h2>第三节 滚动摩擦支承</h2>
        <table>
            <tr>
                <td>类型</td>
                <td>代号</td>
            </tr>
            <tr>
                <td>深沟球轴承</td>
                <td>\\(6\\)</td>
            </tr>
            <tr>
                <td>调心球轴承</td>
                <td>\\(1\\)</td>
            </tr>
            <tr>
                <td>角接触轴承</td>
                <td>\\(7\\)</td>
            </tr>
            <tr>
                <td>推力球轴承</td>
                <td>\\(5\\)</td>
            </tr>
        </table>

        <b>滚动轴承的失效形式</b>
        <ul>
            <li>疲劳点蚀</li>
            <li>塑性变形</li>
            <li>磨损</li>
        </ul>` },
  "note/instrument/instrumentcomponent/chapter6": { title: "仪器零件设计", content: `<h1>第六章 运动导轨（含注释）</h1>
        <h2>第一节 概述</h2>
        <b>基本组成</b>
        <p>运动件、承导件</p>
        <b>作用</b>
        <p>支承和引导运动部件按给定方向作往复运动.</p>

        <b>按摩擦性质分类</b>
        <ul>
            <li>滑动摩擦导轨</li>
            <li>滚动摩擦导轨</li>
            <li>弹性膜材导轨</li>
            <li>流体摩擦导轨</li>
            <li>气体静压导轨</li>
            <li>液体静压导轨</li>
        </ul>

        <b>按结构分类</b>
        <ul>
            <li>开式导轨</li>
            <li>闭式导轨</li>
        </ul>

        <!-- <b>静导轨——承导件</b>
        <p>导轨副中设在支承构件上的，其导轨面为承导面，较长.</p>
        <p>支承和限制运动件，使其只能按给定方向运动.</p>
        <b>动导轨——运动件</b>
        <p>设在运动件上的，导轨面一般较短。</p>
        <p>作往复运动.</p> -->



        <h2>第二节 滑动摩擦导轨</h2>
        <table>
            <tr>
                <td colspan="2">圆柱面导轨</td>
                <td>导轨面加工和检验简单，易于达到较高精度</td>
                <td>温度变化敏感、间隙不易调整</td>
            </tr>
            <tr>
                <td rowspan="4">棱柱面导轨</td>
                <td>双三角形导轨</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>三角形平面导轨</td>
            </tr>
            <tr>
                <td>矩形导轨</td>
            </tr>
            <tr>
                <td>燕尾导轨</td>
            </tr>
        </table>

        <h2>第三节 滚动摩擦导轨</h2>
        <b>结构</b>
        <p>在运动件和承导件之间放置滚动体（滚珠、滚柱、滚动轴承等），使导轨运动时处于滚动摩擦状态.</p>
        <b>特点</b>
        <ul>
            <li>摩擦系数小、运动灵便、不易出现爬行现象.</li>
            <li>定位精度高.</li>
            <li>磨损小、寿命长、润滑方便.</li>
            <li>结构复杂、加工困难、成本高.</li>
            <li>对脏物及导轨面的误差敏感.</li>
        </ul>


        <h2>第四节 其他类型导轨</h2>` },
  "note/instrument/instrumentcomponent/chapter7": { title: "仪器零件设计", content: `<h1>第七章 机械零件的连接（含注释）</h1>
        <h2>第一节 连接的分类与要求</h2>
        <b>连接的分类——按连接结构的特点分</b>
        <ul>
            <li><b>可拆连接</b>
                <!-- <p>可反复拆装、所有零件不损坏、不影响性能.</p>
                <p>便于装配、调整、维修.</p>
                <p>易受环境影响，比如震动环境使用易自松.</p> -->
            </li>
            <li><b>永久连接（不可拆连接）</b>
                <!-- <p>拆开至少有一个零件损坏，连接性能被破坏.</p>
                <p>不便调整.</p> -->
            </li>
        </ul>
        <!-- <b>连接的要求</b>
        <ul>
            <li>足够的连接强度</li>
            <li>连接精度</li>
            <li>连接结构的可靠性</li>
            <li>连接方便、工艺性好</li>
            <li>满足特殊要求</li>
        </ul> -->

        <h2>第二节 可拆连接</h2>
        <b>可拆连接的主要形式</b>
        <ul>
            <li>螺钉（包括螺栓）和螺纹连接</li>
            <li>销钉连接</li>
            <li>键连接</li>
        </ul>

        <h3>螺钉和螺纹连接</h3>
        <p>螺钉（包括螺栓）和螺纹连接的基本要素都是螺纹.</p>
        
<!-- 
        <h2>第三节 不可拆连接</h2> -->



        <ul class="navibar">
            <li><a href="/note/instrument/instrumentcomponent/chapter6">上一页</a></li>
            <li class="next"><a href="/note/instrument/instrumentcomponent/chapter8">下一页</a></li>
        </ul>` },
  "note/instrument/instrumentcomponent/chapter8": { title: "仪器零件设计", content: `<h1>第八章 光学零件的连接</h1>

        <h2>圆形光学零件的固紧</h2>
        <ul>
            <li>滚边法</li>
            <li>压圈法</li>
            <li>弹性元件法</li>
            <li>电镀法</li>
            <li>胶接法</li>
        </ul>

        <h2>非圆形光学零件的固紧</h2>
        <ul>
            <li>夹板固紧</li>
            <li>平板和角铁固紧</li>
            <li>弹簧固紧</li>
            <li>胶接固紧</li>
        </ul>




        <ul class="navibar">
            <li><a href="/note/instrument/instrumentcomponent/chapter7">上一页</a></li>
            <li class="next"><a href="/note/instrument/instrumentcomponent/chapter9">下一页</a></li>
        </ul>` },
  "note/instrument/instrumentcomponent/chapter9": { title: "仪器零件设计", content: `<h1>第九章 仪器常用装置</h1>

        <h2>第一节 概述</h2>
        <ul>
            <li>微动装置</li>
            <li>锁紧装置</li>
            <li>示数装置</li>
            <li>隔振器</li>
        </ul>

        <h2>第二节 微动装置</h2>

        <b>设计要求</b>
        <ul>
            <li>有足够的灵敏度，使微动装置的最小位移量满足精密机械的使用要求.</li>
            <li>传动灵活平稳、无空回.</li>
            <li>工作可靠，调整好的位置应保持稳定</li>
            <li>若微动装置包括在仪器读数系统中，则要求微动手轮转角与直线微动或角度微动的位移量成正比.</li>
            <li>微动手轮应布置得当，操作方便.</li>
            <li>有良好的工艺性，经久耐用.</li>
        </ul>


        <b>类型</b>
        <ul>
            <li>螺旋微动装置</li>
            <li>螺旋-斜面微动装置</li>
            <li>螺旋-杠杆微动装置</li>
            <li>齿轮-杠杆微动装置</li>
        </ul>


        <h2>第三节 锁紧装置</h2>

        <b>设计要求</b>
        <ul>
            <li>锁紧时，被锁部件的正确位置不被破坏.</li>
            <li>锁紧后的工作过程中，被锁部件不会产生微动走位现象.</li>
            <li>锁紧力应均匀，大小可调节.</li>
            <li>结构简单、操作方便、制造修理容易.s</li>
        </ul>

        <b>类型</b>
        <ul>
            <li>径向受力锁紧装置</li>
            <ul>
                <li>顶紧式</li>
                <li>夹紧式</li>
                <li>三点自位均匀收缩式</li>
            </ul>
            <li>轴向受力锁紧装置</li>
        </ul>



        <ul class="navibar">
            <li><a href="/note/instrument/instrumentcomponent/chapter8">上一页</a></li>
            <li class="next"><a href="/note/instrument/instrumentcomponent/chapter10">下一页</a></li>
        </ul>` },
  "note/instrument/mechanical_principle/chapter1": { title: "模板", content: `
        <h1>机械原理</h1>
        <h2>第一章 绪论</h2>
        <p>研究对象及基本内容：</p>
        <p><b>机械（machinery）</b>：机构（mechanism）和机器（machine）的总称</p>
        <p><b>机构</b>：一种用来传递与变化运动与力的可动装置</p>
        <p><b>机器</b>：通常是根据某种使用要求而设计的用于变换或传递能量、物料和信息的执行机械运动的装置</p>
    ` },
  "note/instrument/mechanical_principle/chapter10": { title: "机械原理", content: `<h1>第十章 齿轮机构及其设计</h1>
        <p>
            <ul>
                <li>齿顶圆\\(r_a\\)：齿轮中心到轮齿最高点（齿顶）的距离</li>
                <li>齿根圆\\(r_f\\)：齿轮中心到轮齿最低点（齿根）的距离</li>
                <li>齿顶圆齿厚\\(s_a\\)：齿顶两边线的距离</li>
                <li>齿根圆齿厚\\(s_f\\)：齿根两边线的距离</li>
                <li>齿顶齿槽宽\\(e_a\\)：相邻两齿顶间的距离</li>
                <li>齿根齿槽宽\\(e_f\\)：相邻两齿根间的距离</li>
                <li>分度圆：齿厚等于齿槽宽的位置，分度圆直径\\(d = mz\\)</li>
                <li>齿距\\(p = s + e = \\pi m\\)</li>
                <li>模数：m</li>
                <li>齿宽：齿轮的横向长度</li>
                <li>齿顶高\\(h_a\\)：分度圆到齿顶圆的高度</li>
                <li>齿根高\\(h_f\\)：分度圆到齿根圆的高度</li>
                <li>齿高：\\(h = h_a + h_f\\)</li>
                <li>基圆：渐开线的公法线均切于基圆</li>
                <li>法向齿距：渐开线公法线与下一个齿同侧渐开线延长线的交点的距离，\\(p_n = p_b = pcos\\alpha\\)</li>
                <li>齿顶高系数：齿顶高与模数的比值，\\(h_a^* = h_a/m = 1\\)</li>
                <li>顶隙距离：\\(c^* = (h_f - h_a)/m = 0.25\\)</li>
            </ul>
            找基圆：
            <ol>
                <li>过分度圆与齿边交点（P）做渐开线切线，过圆心（O）做半径，交点（N）为半径做圆即为基圆</li>
                <li>压力角：\\(PON = 20°\\)</li>
            </ol>
            标准齿轮计算：
            <br>\\(\\alpha = 20°\\)、\\(h_a* = 1\\)、\\(c* = 0.25\\)， \\(m\\)已知，齿数\\(z\\)已知
            <ul>
                <li>分度圆直径\\(d = mz = \\frac{p}{\\pi}z\\)</li>
                <li>基圆直径\\(d_b = d\\cos\\alpha = mz\\cos20°\\)</li>
                <li>齿顶高\\(h_a = h_a^* \\times m = m\\)</li>
                <li>齿根高\\(h_f = c^*m + h_a = 1.25m\\)</li>
                <li>齿全高\\(h = h_a + h_f = 2.25m\\)</li>
                <li>齿顶圆直径\\(d_a = d + 2h_a = mz + 2m\\)</li>
                <li>齿根圆直径\\(d_f = d - 2hf = mz - 2.5m\\)</li>
                <li>其他压力角\\(\\alpha_k = \\arccos(d_b/d_k)\\)</li>
                <li>齿距\\(p = \\pi m\\)</li>
                <li>基圆齿距与法向齿距\\(p_b = p_n = p \\cos\\alpha = \\pi m \\cos20°\\)</li>
                <li>分度圆齿厚与齿槽宽\\(s = e = \\pi m/2\\)</li>
                <li>其他齿厚\\(s_k = sr_k/r - 2r[(\\tan\\alpha_k - \\alpha_k) - (\\tan\\alpha - \\alpha)]\\)</li>
                <li>顶隙\\(c = c^*m = 0.25m\\)</li>
                <li>标准中心距\\(a = m(z_1+z_2)/2\\)</li>
                <li>传动比\\(i_{12} = \\omega_1/\\omega_2 = z_2/z_1 = d_2/d_1\\)</li>
                <li>按标准中心距安装时，节圆与分度圆重合\\(d' = d\\)</li>
                <li>以非标准中心距安装时，节圆直径\\((d_1' + d_2')/2 = a\\)，\\(i = d_1'/d_2'\\)，\\(d_1'\\)与\\(d_2'\\)发生改变；同时，\\(a\\cos\\alpha = a'\\cos\\alpha'\\)，\\(\\alpha'\\)改变</li>
            </ul>
        </p>` },
  "note/instrument/mechanical_principle/chapter2": { title: "模板", content: `<p>按自由度分：</p>
        <ul>
            <li>自由度为1的运动副称为Ⅰ类副（Ⅰ Pair）</li>
            <li>自由度为2的运动副称为Ⅱ类副（Ⅱ Pair）</li>
            <li>……</li>        
        </ul>
        <p>按构成运动副的两构件接触情况分：</p>
        <ul>
            <li>通过单一点或线接触而构成的运动副称为<b>高副（higher pair）</b></li>
            <li>通过面接触而构成的运动副称为<b>低副（lower pair）</b></li>
        </ul>
        
        <p><b>运动链（kinematic chain）</b>：构建通过运动副的连接而构成的可相对运动的系统</p>
        <p><b>机构（mechanism）</b>：在运动链中，若使其中某一构件加以固定使其成为机架（fixed link），则该运动链便成为机构，亦即具有机架的运动链称为机构</p>
        <ul>
            <li><b>主动件（原动件，driving link）</b>：机构中按给定的已知运动规律独立运动的构件，图中以箭头示意运动方向。</li>
            <li><b>从动件（drived link）</b>：机构中除主动件外的构件，其运动规律取决于主动件的运动规律和机构的结构及个构件尺寸。</li>
        </ul>

        

        <h3>机构的运动确定性及其自由度分析</h3>
        <p>机构具有确定运动的条件：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;机构原动件数目等于机构的自由度数目且自由度大于0
            <ul>
                <li>若原动件数小于自由度，机构运动将无法确定。
                    <br>原动件数小于自由度的机构或机械系统称为欠驱机构或欠驱系统。
                    <br>此时机构运动将遵循<b>最小阻力定律</b>。
                </li>
                <li>若原动件数大于自由度，机构中最薄弱环节将会损坏。
                    <br>原动件数大于自由度的机构或机械系统称为冗余机构或冗余机械系统。
                </li>
            </ul>
            <br>
            <br>自由度：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;机构具有确定运动时所必须给定的独立运动的参数
            <br>
            <br>自由度计算：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;\\(F = 3n - (2P_l + P_h - p') - F'\\)
            <ul>
                <li>\\(F\\)：自由度</li>
                <li>\\(n\\)：活动构件数</li>
                <li>\\(P_l\\)：低副</li>
                <li>\\(P_h\\)：高副</li>
                <li>\\(p'\\)：虚约束</li>
                <li>\\(F'\\)：局部自由度</li>
            </ul>
            注意事项：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;复合铰链：两个以上构件在同一处以转动副连接所形成的结构。当m个构件在同一个点处以复合铰链相连接时，转动副数目等于\\(m-1\\)个。此处m包括机架。
            <br>&nbsp;&nbsp;&nbsp;&nbsp;局部自由度：不影响其他构件运动，仅与自身局部运动有关的自由度。常以滚子形式出现。
            <br>&nbsp;&nbsp;&nbsp;&nbsp;虚约束：在机构中不起独立限制作用的重复约束。
            例题：b站 p1 35m
        </p>` },
  "note/instrument/mechanical_principle/chapter3": { title: "模板", content: `<p>瞬心数量（K）：由N个构件（含机架）组成的机构的瞬心总数\\(K=\\frac{N(N-1)}{2}\\)</p>
        <p>瞬心位置：
            <ul>
                <li>直接相连两构件</li>
                <ul>
                    <li>以转动副相连的两构件：转动副中心处</li>
                    <li>以移动副相连的两构件：垂直于导路方向的无穷远处</li>
                    <li>以平面高副相连接的两构建（高副两元素作纯滚动）：接触点处</li>
                    <li>以平面高副相连接的两构建（高副两元素有相对滑动）：过接触点高副元素的公法线上</li>
                    <img src="./img/3.1_(1).jpg">
                    <i>第三种情况（高副两元素作纯滚动）很少见</i>
                </ul>
                <li>不直接相连两构件</li>
                <ul>
                    <li><b>三心定理</b>：为了满足瞬心等速的条件，三个彼此作平面平行运动构件的三个瞬心必位于同一直线上</li>
                </ul>
            </ul>

        </p>
        <p>求解某点的速度：
            <br>任何构件都是绕其绝对瞬心旋转的
            $$\\omega_B = \\omega_A\\frac{P_{AB}P_{AC}}{P_{AB}P_{BC}}$$
            其中：A为已知速度的机构，B为代求速度的机构，C为机架
        </p>` },
  "note/instrument/mechanical_principle/chapter4": { title: "模板", content: `</li>
        </ul></p>

        <h3>机构力分析的任务和目的</h3>
        <p><ul>
            <li>确定运动副中的反力</li>
            <li>确定机械上的平衡力或平衡力偶</li>
        </ul>
        <b>运动副反力</b>：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;运动副两元素接触处彼此作用的正压力和摩擦力的合力。
        <br>
        <b>平衡力或平衡力偶</b>：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;机械在已知外力作用下，为了使该机构能够按照给定的运动规律运动，必须加于机械上的未知外力或力偶。
        </p>

        <h2>第二节 运动副中摩擦力的确定</h2>
        <h3>移动副中总反力的确定</h3>
        <p>
            摩擦力：
            $$F_{f21} = fF_{N21} = f_vG$$
            其中，\\(f_v\\)为当量摩擦因数。
            <ul>
                <li>平面接触：\\(f_v = f\\)</li>
                <li>槽面接触：\\(f_v = f/sin\\theta\\)</li>
                <li>半圆柱面接触：\\(f_v = kf, ~k=1\\sim \\pi/2\\)</li>
            </ul>
            运动副的总反力：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;运动副的法向反力与摩擦力的合力
            <br>当量摩擦角：
            $$\\tan \\phi_v = f_v$$
        </p>
        <h3>转动副中摩擦量的确定</h3>
        <p>
            &nbsp;&nbsp;&nbsp;&nbsp;机器中所有的转动轴都要支承在轴承中，轴放在轴承中的部分称为<b>轴颈</b>，轴颈与轴承构成转动副。
            <br>摩擦力\\(F_{f21}\\)对轴颈的摩擦力矩为：
            $$M = F_{f21}r = f_vGr = F_{R21}\\rho$$
            <br>轴承对轴颈的总反力：
            <br>对于一个具体的轴颈，由于\\(f_v\\)与\\(r\\)均为定值，故\\(\\rho\\)为一固定长度。
            <br>&nbsp;&nbsp;&nbsp;&nbsp;摩擦圆：以轴颈中心\\(O\\)为圆心，\\(\\rho\\)为半径做的虚线圆。
            <br>&nbsp;&nbsp;&nbsp;&nbsp;轴承对轴颈的总反力始终切于摩擦圆，且与\\(G\\)大小相等，方向相反。
        </p>
        <h3>平面高副中总反力的确定</h3>
        <p>
            类似于移动副
        </p>
        <p>步骤：
            <ol>
                <li>考虑工作阻力与平衡力矩的前提下判断二力杆（除机架）</li>
                <li>由工作阻力判断机械的运动（逆工作阻力）</li>
                <li>由其他构件运动方向判断力的位置，由\\(v_{AB}\\)判断\\(F_{RBA}\\)</li>
            </ol>
            
            
            <b>一个机构上的所有反力合力为0</b></p>` },
  "note/instrument/mechanical_principle/chapter7": { title: "机械原理", content: `<h1>第七章 机械的运转及其速度波动的调节</h1>
        <h2>第一节 概述</h2>
        <h3>一、机械运转的三个阶段</h3>
        <p><ul>
            <li>起动阶段：\\(W_d = W_r' + E\\)</li>
            <li>稳定运转阶段：\\(W_d = W_r'\\)</li>
            <li>停车阶段：\\(E = -W_r'\\)</li>
        </ul></p>
        <h3>二、作用在机械上的驱动力和阻力</h3>
        <p>当构件的重力以及运动副中的摩擦力等可以忽略不计时，作用在机械上的力只有原动机发出的驱动力以及执行构件上承受的工作阻力。它们随机械工况的不同以及所使用的原动机的不同而不同。</p>
        <p><b>原动机的机械特性</b>：各种原动机的作用力（或力矩）与其运动参数（位移、速度）之间的关系</p>

        <h2>第二节 机械的运动方程式</h2>
        <h3>一、机械运动方程的一般表达式</h3>
        <p><b>机械的运动方程</b>：作用在机械上的力、构件的质量、转动惯量和其运动参数之间的函数关系。</p>
        <p><b>广义坐标</b>：能用来完全确定机械系统运动的某一组独立坐标。</p>
        <p><b>系统的自由度数目</b>：完全确定系统运动所需的独立坐标数目。</p>
        <p>建立运动方程的方法：
            <ol>
                <li>确定活动构件及其运动方式（转动、平动、转动+平动）</li>
                <li>\\(dE = dW = \\sum(\\frac{J\\omega^2}{2}) + \\sum(\\frac12mv^2)\\)</li>
            </ol>
        </p>

        <p>由输出力矩图求飞轮转动惯量：
            <ol>
                <li>求等效阻力矩：\\(W_r\\times T = \\sum W_{di}t_i\\)</li>
                <li>根据等效阻力矩求各个时间段内的功\\(W = Ft = (W_d - W_r)t\\)</li>
                <li>由0开始累加力，找到\\(E_{max}\\)与\\(E_{min}\\)的点</li>
                <li>求\\(\\Delta W_{max} = E_{max} - E_{min}\\)</li>
                <li>飞轮的转动惯量\\(J_F = \\frac{900\\Delta W_{max}}{\\pi^2n^2\\delta}\\)</li>
            </ol>
            速度波动系数：\\(\\delta = \\frac{\\omega_{max} - \\omega_{min}}{\\omega_m} = \\frac{\\Delta W_{max}}{(J_F + J_e)\\omega_m^2}\\)
            <br>
            平均转速：\\(n_m = \\frac{n_{max}+n_{min}}{2}\\)
            <br>
            最大转速：\\(n_{max} = n_m(\\delta/2 + 1)\\)
            <br>最小转速：\\(n_{min} = n_m(\\delta/2 - 1)\\)
        </p>` },
  "note/instrument/mechanical_principle/chapter8": { title: "机械原理", content: `<h1>第八章 连杆机构及其设计</h1>
        <h2>第一节 连杆机构及其传动特点</h2>
        <p>连架杆：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;与机架直接相连的杆
            <br>连杆：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;不与机架直接相连的杆
            <br>连杆机构的特点：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;其主动件的运动都要经过一个连杆才能传动至从动件。
            <br>传动特点：
            <br>
            <br>周转副：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;曲柄两端
            
            <ul>
                <li></li>
            </ul>
            平面四杆机构
            <ul>
                <li>基本型
                    <ul>
                        <li>曲柄摇杆机构</li>
                        <li>双曲柄机构</li>
                        <li>双摇杆机构</li>
                    </ul>
                </li>
                <li>演化型</li>
            </ul>
        如何区分曲柄摇杆机构、双曲柄机构、双摇杆机构：
        <ul>
            <li>杆长条件：最短杆长+最长杆长 ≤ 其他杆长之和，满足此条件说明存在周转副即摇杆</li>
            <li>不满足杆长条件：双摇杆机构</li>
            <li>最短杆对边为机架：双摇杆机构</li>
            <li>最短杆为连架杆：曲柄摇杆机构，曲柄为最短杆</li>
            <li>最短杆为机架：双曲柄机构</li>
        </ul>
        <b>注意：为使四杆能装配成封闭的运动链，最长杆长必须小于其他三杆长度之和。</b>
        <br>极位作图法：
        <ol>
            <li>分别以A、D为圆心，AB、CD为半径作圆，此圆为曲柄运动轨迹</li>
            <li>连接AC，由三角形边长关系，以A为圆心，AB+BC与BC-AB为半径分别作圆弧，交</li>
        </ol>
    
        </p>` },
  "note/instrument/mechanical_principle/chapter9": { title: "机械原理", content: `<h1>第九章 凸轮机构及其设计</h1>
        <h2>第一节 凸轮机构的应用、分类与选型</h2>
        <h3>一、凸轮机构的应用</h3>
        <p><b>凸轮</b>：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;具有曲线轮廓或凹槽的构建，通常为主动件</p>
        <p><b>推杆</b>：被凸轮直接推动的构件，通常为从动件</p>

        <p><b>反凸轮机构</b>：凸轮为从动件的机构</p>
        <p><b>凸轮机构</b>：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;由凸轮、推杆与机架组成的汉高副的三构件机构。
        <br><b>传动特点：</b>
        <ul>
            <li>优点：
                <br>&nbsp;&nbsp;&nbsp;&nbsp;只要适当地设计出凸轮的轮廓曲线，就可以使推杆得到各种预期的运动规律，且响应快速，机构简单紧凑。</li>
            <li>缺点：
                <br>&nbsp;&nbsp;&nbsp;&nbsp;凸轮廓线与推杆之间为点、线接触，易磨损，制造困难。</li>
        </ul></p>

        <p>
            分类：
            <ul>
                <li>按布局方式（仅限直动）分：
                    <ul>
                        <li>对心：通过凸轮回转中心</li>
                        <li>偏置：不通过凸轮回转中心，回转中心到推杆延长线的距离为偏距圆半径</li>
                    </ul>
                </li>
                <li>按动件运动形式分：
                    <ul>
                        <li>直动推杆</li>
                        <li>摆动推杆</li>
                    </ul>
                </li>
                <li>按推杆形状分：
                    <ul>
                        <li>尖顶推杆</li>
                        <li>滚子推杆</li>
                        <li>平底推杆</li>
                    </ul>
                </li>
                <li>按凸轮形状分：
                    <ul>
                        <li>盘型凸轮</li>
                        <li>圆柱凸轮</li>
                        <li>移动凸轮</li>
                    </ul>
                </li>
            </ul>
            <ul>
                <li>理论轮廓曲线（滚子推杆限定）：滚子中心在推杆复合运动中的轮廓</li>
                <li>实际轮廓曲线：以理论曲线为圆心，滚子半径为半径做的圆族的内包络线</li>
                <li>基圆：以回转中心为圆心，其到凸轮理论轮廓曲线最短距离为半径所做的圆。</li>
                <li><b>推程</b>：推杆在凸轮廓线段的推动下，由最低位置推送到最高位置的过程，相应的凸轮转角\\(\\delta_0\\)称为<b>推程运动角</b></li>
                <li><b>远休止</b>：推杆在与凸轮廓线段接触时，处于最高位置而静止不动的过程，相应的凸轮转角\\(\\delta_{01}\\)称为<b>远休止角</b></li>
                <li><b>回程</b>：推杆在凸轮廓线段的推动下，由最高位置回到最低位置的过程，相应的凸轮转角\\(\\delta_0'\\)称为回程运动角。</li>
                <li><b>近休止</b>：推杆在与凸轮廓线段接触时，处于最低位置静止不动的过程，相应的凸轮转角\\(\\delta_{02}\\)称为近休止角。</li>
                <li><b>推杆行程</b>：推杆在最高点和最低点的位移差。</li>
                <li><b>摆杆摆角</b>：摆杆在摆动过程中的最大摆动范围。</li>
            </ul>
            作图法：
            <ul>
                <li>理论轮廓曲线：滚子圆心绕凸轮旋转而成</li>
                <li>基圆半径：连接圆心与回转中心，与理论廓线形成两个交点，回转中心到最近交点的距离即为基圆半径</li>
                <li>推杆行程：另一交点到基圆的最短距离</li>
                <li>绝对位移：滚子中心与回转中心连线方向上，滚子中心到基圆的距离</li>
                <li>压力角：法线方向与几何中心方向的夹角</li>
            </ul>
        </p>` },
  "note/instrument/mechanical_principle/mechanical_principle": { title: "模板", content: `
        <h1>机械原理</h1>

        </p>
    ` },
  "note/instrument/mechanical_principle/sw_gear": { title: "机械原理", content: `<h1>齿轮的绘制</h1>

        <h2>必需参数</h2>
        <p>模数：m</p>
        <p>齿数：z</p>
        <p>半齿宽：s = "m"*pi/4</p>
        <p>齿根圆角半径：r = "m"*0.38</p>

        <h2>步骤</h2>
        <p>1、打开方程式，输入"m"、"z"、"a" = 20、"rb" = "m"*"z"*cos("a")/2</p>

        <p>2、绘制样条曲线-方程式驱动的曲线，选择参数性，参数如下：</p>
        <p>Xt = "rb"*cos(t)+"rb"*t*sin(t)</p>
        <p>Yt = "rb"*sin(t)-"rb"*t*cos(t)</p>
        <p>t1 = 0</p>
        <p>t2 = pi/4</p>

        <p>3、将样条曲线转换为实体</p>

        <p>4、绘制四个圆，其直径分别为："m"*"z"、"m"*"z"*cos("a")、"m"*("z"-2.5)、"m"*("z"+2)</p>` },
  "note/instrument/precision/catalog": { title: "互换性", content: `<h1>互换性</h1>
        <h2>目录</h2>
        <ul>
            <li><a href="/note/instrument/precision/chapter1">第一章</a></li>
            <li><a href="/note/instrument/precision/chapter2">第二章</a></li>
            <li><a href="/note/instrument/precision/chapter3">第三章</a></li>
            <li><a href="/note/instrument/precision/chapter4">第四章</a></li>
            <li><a href="/note/instrument/precision/chapter5">第五章</a></li>
            <li><a href="/note/instrument/precision/chapter6">第六章</a></li>
            <li><a href="/note/instrument/precision/chapter7">第七章</a></li>
            <li><a href="/note/instrument/precision/chapter10">第十章</a></li>



                
        </ul>` },
  "note/instrument/precision/chapter1": { title: "互换性", content: `<h1>绪论</h1>
        <b>机械设计的步骤</b>
        <p>机械运动设计\\(\\rightarrow\\)机械结构设计\\(\\rightarrow\\)机械精度设计</p>

        <h2>互换性</h2>
        <b>广义定义</b>
        <p>一种产品、过程或服务代替另一种产品、过程或服务，能满足同样要求的能力。</p>
        <b>机械领域定义</b>
        <p>同一规格的一批零（部）件，按规定的技术要求制造或装配，彼此能够互相代替使用，且效果相同的性能。</p>
        <b>作用</b>
        <p>制造方面，有利于专业化生产，提高生产效率与产品质量，降低生产成本。</p>
        <p>设计方面，简化绘图和计算工作，缩短设计周期。</p>
        <p>使用和维修方面，能即使更换损坏零件，提高机器使用价值。</p>

        <ul>
            <li>大批量生产：互换性原则</li>
            <li>单件、小批量生产：单个配置（单个配置时虽不满足互换性，但也有精度设计与检测的要求）</li>
        </ul>


        <table>
            <tr>
                <td colspan="2">分类</td>
                <td>应用</td>
            </tr>
            <tr>
                <td colspan="2">完全互换性</td>
                <td>厂际协作</td>
            </tr>
            <tr>
                <td rowspan="4">不完全互换性</td>
                <td>分组装配法</td>
                <td rowspan="4">厂内之间</td>
            </tr>
            <tr>
                <td>调整装配法</td>
            </tr>
            <tr>
                <td>修配法</td>
            </tr>
            <tr>
                <td>大数互换法</td>
            </tr>
        </table>

        <b>完全互换（绝对互换）</b>
        <p>零部件装配或更换时不需要挑选或修配，装上即能满足性能要求。</p>

        <b>不完全互换（有限互换）</b>
        <p>在零部件装配前，需要挑选、修整或调整，再进行装配。</p>

    
        <b>分组装配法</b>
        <p>仅对应组内零件可互换</p>

        <b>调整装配法</b>
        <p>通过调整垫片实现零件互换</p>

        <h2>公差</h2>
        <b>定义</b>
        <p>几何量允许的变动量。</p>

        <b>分类</b>
        <ul>
            <li>尺寸公差</li>
            <li>几何公差</li>
            <li>表面粗糙度</li>
        </ul>
        <p>公差标注在图纸上，用于控制加工误差。</p>
        <p>公差是互换性生产的保证。</p>
        <b>经济性原则</b>
        <p>在满足功能要求的前提下，公差应尽可能大，即尽量选取精度较低的标准公差等级。</p>


        <h2>检测</h2>
        <b>定义</b>
        <p>检验与测量的统称</p>

        <b>检验的特点</b>
        <p>能确定几何量是否合格。</p>
        <b>测量</b>
        <p>能获得几何量的具体数值。</p>

        <p>为保证零件满足设计的公差要求，零件加工后必须对其几何量加以检测。</p>
        <p>检测是实现互换性生产的手段和措施。</p>


        <b>测量值</b>
        <p>一个完整的几何量测量过程包括四个要素：被测对象、计量单位、测量方法、测量精度。</p>
        

        <b>量块</b>
        <p>量块按制造精度分为\\(K\\)、\\(0\\)、\\(1\\)、\\(2\\)、\\(3\\)五级。</p>
        <p>量块按测量精度分为\\(1\\)、\\(2\\)、\\(3\\)、\\(4\\)、\\(5\\)五等。</p>

        <b>分度值（刻度值）</b>
        <p>计量器具的标尺或刻度盘上每个刻度间距代表的最小量值。</p>
        <p>分度值越小，计量器具测量精度越高。</p>` },
  "note/instrument/precision/chapter10": { title: "互换性", content: `<h1>第十章 尺寸链</h1>


        <h2>第一节 尺寸链的基本概念</h2>

        <b>尺寸链</b>
        <p>在机器装配或零件加工过程中，由相互连接的尺寸形成的封闭尺寸组。</p>
        
        <table>
            <tr>
                <td>装配尺寸链</td>
                <td>由不同零件相互联结构成的尺寸链。</td>
            </tr>
            <tr>
                <td>零件尺寸链</td>
                <td>由一个设计零件的设计尺寸构成的设计链。</td>
            </tr>
            <tr>
                <td>工艺尺寸链</td>
                <td>由同一零件的几个工艺尺寸构成的尺寸链。</td>
            </tr>
        </table>
        
        <b>环</b>
        <p>列入尺寸链的每一个尺寸。</p>
        <p>表示方式：<span lang="en">A<sub>0</sub>，B<sub>1</sub>，C<sub>2</sub>/2，……</span></p>

        <table>
            <tr>
                <td rowspan="2">环</td>
                <td>封闭环</td>
                <td class="tbtext">尺寸链中，在装配过程或加工过程最后形成的尺寸。</td>
                <td lang="en">X<sub>0</sub></td>
            </tr>
            <tr>
                <td>组成环</td>
                <td class="tbtext">
                    <p>尺寸链中，对封闭环有影响的全部环。</p>
                    <p>任一组成环变动必将引起封闭环的变动。</p>
                </td>
                <td lang="en">A<sub>1</sub>，B<sub>2</sub>，……</td>
            </tr>
        </table>

        <br>
        <table>
            <tr>
                <td>增环</td>
                <td class="tbtext">当尺寸链中其他组成环不变时，其变动引起封闭环同向变动的组成环。</td>
            </tr>
            <tr>
                <td>减环</td>
                <td class="tbtext">当尺寸链中其他组成环不变时，其变动引起封闭环反向变动的组成环。</td>
            </tr>
        </table>

        <b>尺寸链的计算</b>
        <p>计算封闭环与组成环的公称尺寸与极限偏差。</p>
        <ul>
            <li>设计计算</li>
            <p>已知封闭环的公称尺寸与极限偏差以及各组成环的公称尺寸，计算各组成环的极限偏差。</p>
            <li>校核计算</li>
            <p>已知所有组成环的公称尺寸和极限偏差，计算封闭环的公称尺寸和极限偏差。</p>
        </ul>


        <b>完全互换法</b>
        $$L_0 = \\sum\\limits_{i=1}^nL_i - \\sum\\limits_{j=1}^mL_j$$
        $$$$` },
  "note/instrument/precision/chapter2": { title: "互换性", content: `<h1>第二章 尺寸精度与检测</h1>
        
        <h2>第一节 基本术语及定义</h2>
        <h3>尺寸</h3>
        <table>
            <tr>
                <td></td>
                <td>孔</td>
                <td>轴</td>
            </tr>
            <tr>
                <td>公称尺寸</td>
                <td>\\(D\\)</td>
                <td>\\(d\\)</td>
            </tr>
            <tr>
                <td>上极限尺寸</td>
                <td>\\(D_{max}\\)</td>
                <td>\\(d_{max}\\)</td>
            </tr>
            <tr>
                <td>下极限尺寸</td>
                <td>\\(D_{min}\\)</td>
                <td>\\(d_{min}\\)</td>
            </tr>
            <tr>
                <td>实际尺寸</td>
                <td>\\(D_a\\)</td>
                <td>\\(d_a\\)</td>
            </tr>
            <tr>
                <td>上偏差</td>
                <td>\\(ES\\)</td>
                <td>\\(es\\)</td>
            </tr>
            <tr>
                <td>下偏差</td>
                <td>\\(EI\\)</td>
                <td>\\(ei\\)</td>
            </tr>
            <tr>
                <td>公差</td>
                <td>\\(T_h\\)</td>
                <td>\\(T_s\\)</td>
            </tr>
        </table><br>

        <table>
            <tr>
                <td class="tbtitle"><b>孔</b></td>
                <td class="tbtext">圆柱工件的内尺寸要素，包括非圆柱形的内尺寸要素（如键槽的宽度表面）</td>
            </tr>
            <tr>
                <td class="tbtitle"><b>轴</b></td>
                <td class="tbtext">圆柱工件的外尺寸要素，包括非圆柱形的外尺寸要素（如平键的宽度表面）</td>
            </tr>
        </table><br>

        <b>尺寸要素</b>
        <p>用于表达理想要素参数方程的<b>线性尺寸</b>或<b>角度尺寸</b>。</p>

        <table>
            <tr>
                <td class="tbtitle"><b>尺寸<br>（线性尺寸）</b></td>
                <td class="tbtext" colspan="3">表示几何要素特征的尺寸要素，通过两点法测量得到的两点之间的距离。</td>
            </tr>
            <tr>
                <td class="tbtitle"><b>公称尺寸</b></td>
                <td class="tbtext" colspan="3">
                    <p>由图样规范定义的理想形状要素的尺寸，设计时给定。</p>
                    <p>是根据零件的强度、刚度等的计算和结构的设计确定的，应依据<span lang="en">GB/T 2822-2005</span>《标准尺寸》化整为优先数。</p>
                </td>
            </tr>
            <tr>
                <td class="tbtitle" rowspan="2"><b>极限尺寸</b></td>
                <td class="tbtext" rowspan="2">尺寸所允许的极限值，设计时给定</td>
                <td class="tbtitle">上极限尺寸</td>
                <td class="tbtext">尺寸所允许的最大值</td>
            </tr>
            <tr>
                <td class="tbtitle">下极限尺寸</td>
                <td class="tbtext">尺寸所允许的最小值</td>
            </tr>
            <tr>
                <td class="tbtitle"><b>实际尺寸</b></td>
                <td class="tbtext" colspan="3">
                    <p>零件加工后的实际表面通过测量获得的尺寸，再通过拟合操作，从非理想表面模型或实际要素中建立理想尺寸要素。</p>
                    <p>合格条件：\\(\\begin{cases}D_{min}\\leq D_a\\leq D_{max}\\\\d_{min}\\leq d_a\\leq d_{max}\\end{cases}\\)</p>
                </td>
            </tr>
        </table><br>

        
        <table>
            <tr>
                <td>正偏差<br>（必须冠以正号）</td>
                <td class="tbtitle" rowspan="3"><b>偏差（尺寸偏差）</b></td>
                <td class="tbtext" rowspan="3">某尺寸减公称尺寸的代数差。</td>
                <td class="tbtitle" rowspan="2"><b>极限偏差</b></td>
                <td class="tbtitle"><b>上偏差<br>（上极限偏差）</b></td>
                <td class="tbtext">上极限尺寸减去公称尺寸所得的代数差。$$\\begin{cases}ES = D_{max} - D\\\\es = d_{max} - d\\end{cases}$$</td>
            </tr>
            <tr>
                <td>负偏差<br>（必须冠以负号）</td>
                <td class="tbtitle"><b>下偏差<br>（下极限偏差）</b></td>
                <td class="tbtext">下极限尺寸减去公称尺寸所得的代数差。$$\\begin{cases}EI = D_{min} - D\\\\ei = d_{min} - d\\end{cases}$$</td>
            </tr>
            <tr>
                <td>零偏差</td>
                <td class="tbtitle" colspan="2"><b>实际偏差</b></td>
                <td class="tbtext" colspan="2">实际尺寸减去公称尺寸所得的代数差。</td>
            </tr>
        </table>

        <b>公差（尺寸公差）</b>
        <p>上极限尺寸与下极限尺寸之差，或上极限偏差与下极限偏差之差。是实际尺寸的允许变动量。</p>
        $$T_h = D_{max} - D_{min} = ES - EI$$
        $$T_s = d_{max} - d_{min} = es - ei$$

        <b>基本偏差</b>
        <p>用于确定公差带相对公称尺寸位置的极限偏差。</p>
        <p>最接近公称尺寸的极限偏差。</p>
        <p>一般来说，孔的基本偏差是指\\(EI\\)，轴的极限偏差是指\\(es\\)。</p>

        <b>公差带</b>
        <p>孔：斜杠</p>
        <p>轴：点</p>


        <h3>配合相关术语及定义</h3>
        <b>配合</b>
        <p>设计时定义的具有理想形状的工件模型，公称尺寸相同的、相互结合的孔和轴公差带之间的关系。</p>

        <b>间隙与过盈</b>
        <p>孔的尺寸与相配合的轴的尺寸之差</p>
        <ul>
            <li>孔的直径大于轴的直径时，差为正值，表示为间隙\\(X\\)</li>
            <li>孔的直径小于轴的直径时，差为负值，表示为过盈\\(Y\\)</li>
        </ul>

        <b>配合的分类</b><br><br>
        <b>（一）间隙配合</b>
        <p>孔和轴装配时总存在间隙（包括最小间隙为零）的配合。</p>
        <p>孔的下极限尺寸\\(\\geq\\)轴的上极限尺寸，即孔的公差带在轴的公差带之上。</p>
        <ul>
            <li>最大间隙：\\(X_{max} = D_{max} - d_{min} = ES - ei\\)</li>
            <li>最小间隙：\\(X_{min} = D_{min} - d_{max} = EI - es\\)</li>
            <li>平均间隙：\\(X_{ave} = (X_{max} + X_{min})/2\\)</li>
        </ul>
        注：间隙值前必须冠以正号。
        
        <br><br>

        <b>（二）过盈配合</b>
        <p>孔和轴装配时总是存在过盈（包括最小过盈为零）的配合。</p>
        <p>孔的上极限尺寸\\(\\leq\\)轴的下极限尺寸，即孔的公差带在轴的公差带之下。</p>
        <ul>
            <li>最大过盈：\\(Y_{max} = D_{min} - d_{max} = EI - es\\)</li>
            <li>最小过盈：\\(Y_{min} = D_{max} - d_{min} = ES - ei\\)</li>
            <li>平均过盈：\\(Y_{ave} = (Y_{max} + Y_{min})/2\\)</li>
        </ul>
        注：过盈值前必须冠以负号。

        <br><br>

        <b>（三）过渡配合</b>
        <p>孔和轴装配时可能具有间隙或过盈配合。</p>
        <p>孔公差带和轴公差带交叠。</p>
        <ul>
            <li>最大间隙：\\(X_{max} = D_{max} - d_{min} = Y_{min}\\)</li>
            <li>最大过盈：\\(Y_{max} = D_{min} - d_{max} = X_{min}\\)</li>
            <li>平均间隙或平均过盈：\\(X_{ave}~or~Y_{ave} = (X_{max} + Y_{max})/2\\)</li>
        </ul>

        <b>（四）配合公差</b>
        <p>组成配合的两个尺寸要素的尺寸公差之和，亦即配合的最大量值与最小量值之差，是对其配合所允许的变动量。</p>
        <ul>
            <li>间隙配合：\\(T_f = T_h + T_s = X_{max} - X_{min}\\)</li>
            <li>过盈配合：\\(T_f = T_h + T_s = Y_{min} - Y_{max}\\)</li>
            <li>过渡配合：\\(T_f = T_h + T_s = X_{max} - X_{min}\\)</li>
        </ul>

        <p>相互配合的孔轴间有相对运动时，必须选择间隙配合。</p>
        <p>无相对运动且传递载荷（转矩或轴向力）时，应选取过盈配合或过渡配合。</p>

        <h3>五、<span lang="en">ISO</span>配合制</h3>
        <b>基孔制</b>
        <p>孔的基本偏差为0的配合，即孔的下极限偏差为0。</p>
        <p>一般情况下，优先选用基孔制。</p>
        <p>原因：经济性好。</p>
        
        
        <b>基轴制</b>
        <p>轴的基本偏差为0的配合，即轴的上极限偏差为0。</p>


        <h2>第二节 极限与配合国家标准的构成</h2>
        <h3>一、标准公差系列</h3>
        <b><span lang="en">GB/T 1800.1-2020</span>规定了\\(20\\)个等级的标准化公差数值</b>：
        <p>标准公差分\\(20\\)个等级，分别用\\(IT01、IT0、IT1、IT2\\cdots IT18\\)表示。</p>
        <p>其中，\\(IT01\\)精度最高、\\(IT18\\)精度最低。</p>
        $$ES = EI + IT$$
        $$es = ei + IT$$

        <h3>二、基本偏差系列</h3>
        <b><span lang="en">GB/T 1800.1-2020</span>规定了\\(28\\)种极限偏差</b>：
        <ul>
            <li>孔：\\(26\\)个英文字母去掉\\(I、L、O、Q、W\\)，加上\\(CD、EF、FG、JS、ZA、ZB、ZC\\)</li>
            <li>轴：\\(26\\)个英文字母去掉\\(i、l、o、q、w\\)，加上\\(cd、ef、fg、js、za、zb、zc\\)</li>
        </ul>

        <table>
            <tr class="tbtitle">
                <td colspan="2">孔</td>
                <td colspan="2">轴</td>
            </tr>
            <tr>
                <td lang="en">A、B、C、CD、D、E、EF、F、FG、G</td>
                <td>$$EI \\gt 0$$</td>
                <td lang="en">a、b、c、cd、d、e、ef、f、fg、g</td>
                <td>$$es \\lt 0$$</td>
            </tr>
            <tr>
                <td><span lang="en">H</span><br>（基孔制中基准孔的基本偏差代号）</td>
                <td>$$EI = 0$$</td>
                <td><span lang="en">h</span><br>（基轴制中基准轴的基本偏差代号）</td>
                <td>$$es = 0$$</td>
            </tr>
            <tr>
                <td><span lang="en">JS</span></td>
                <td>
                    $$ES = +IT/2$$
                    $$EI = -IT/2$$
                </td>
                <td><span lang="en">js</span></td>
                <td>
                    $$es = +IT/2$$
                    $$ei = -IT/2$$
                </td>
            </tr>
        </table>


        <span lang="en">e.g.</span>求\\(\\phi 50f6\\)轴的极限偏差数值。
        <br><br>
        解：
        <p>\\(\\phi 50f6\\)：</p>
        <ul>
            <li>\\(50\\)：公称尺寸</li>
            <li>\\(f\\)：基本偏差</li>
            <li>\\((IT)6\\)：标准公差</li>
        </ul>` },
  "note/instrument/precision/chapter3": { title: "互换性", content: `<h1>第三章 几何精度与检测</h1>
        
        <b>几何误差</b>
        <ul>
            <li>实际要素存在<b>形状误差</b></li>
            <li>要素与要素存在<b>方向误差</b>或<b>位置误差</b></li>
        </ul>

        <b>几何公差</b>
        <p>控制几何误差的评价指标</p>
        <p>被测要素的提取要素相对于图纸上给定理想形状、理想方向、理想位置的允许变动量。</p>
        <p>用于表示要素的形状、要素与要素间方向和位置的精度。</p>


        <b>要素（几何要素）</b>
        <p>几何公差的研究对象</p>
        <p>构成机械零件几何特征的点、线、面</p>

        <b>分类</b><br>
        <details>
            <summary>按制造过程分为三个范畴</summary>
            <table>
                <tr>
                    <td rowspan="2">设计范畴<br>（机械制图中绘制的几何要素）</td>
                    <td>公称组成要素</td>
                    <td class="tbtext">由技术制图或其他方法确定的理论正确的组成要素。即构成工件表面的理论轮廓要素。</td>
                </tr>
                <tr>
                    <td>公称导出要素</td>
                    <td class="tbtext">由一个或几个公称组成要素导出的中心点、轴线或中心平面。即构成工件表面的理论对称中心要素。</td>
                </tr>
                <tr>
                    <td>工件范畴</td>
                    <td>实际（组成）要素</td>
                    <td class="tbtext">加工后工件表面实际存在的几何要素。</td>
                </tr>
                <tr>
                    <td rowspan="4">检验范畴</td>
                    <td>提取组成要素</td>
                    <td class="tbtext">按规定方法，由实际（组成）要素提取有限数目的点所形成的实际（组成）要素的近似替代。</td>
                </tr>
                <tr>
                    <td>提取导出要素</td>
                    <td class="tbtext">由一个或几个提取组成要素计算导出的中心点、中心或中心面。</td>
                </tr>
                <tr>
                    <td>拟合组成要素</td>
                    <td class="tbtext">按规定方法，由非理想表面模拟或实际表面建立的理想组成要素。</td>
                </tr>
                <tr>
                    <td>拟合导出要素</td>
                    <td class="tbtext">由一个或几个拟合组成要素导出的中心点、轴线或中心平面。</td>
                </tr>
            </table>
        </details>

        <details>
            <summary>按所处的检测关系分类</summary>
            <table>
                <tr>
                    <td>被测要素</td>
                    <td class="tbtext">图样上给出了形状、方向、位置或跳动公差要求的公称组成要素或公称导出要素。</td>
                </tr>
                <tr>
                    <td>基准要素</td>
                    <td class="tbtext">
                        <p>图样上规定用来确定被测要素方向或位置的公称组成要素或公称导出要素。</p>
                        <p>基准要素自身也是被测要素。</p>
                    </td>
                </tr>
            </table>
        </details>
        
        <details>
            <summary>按功能关系分类</summary>
            <table>
                <tr>
                    <td>单一要素</td>
                    <td>按本身功能要求仅给出形状公差要求的被测要素。</td>
                </tr>
                <tr>
                    <td>关联要素</td>
                    <td>相对于基准要素有功能关系而给出方向、位置或跳动公差要求的被测要素。</td>
                </tr>
            </table>
        </details>

        

        <h2>第二节 几何公差的标注</h2>
        <b>几何公差的全符号标注（<span lang="en">GB/T 1182-2018</span>）</b>
        <ul>
            <li>带箭头的指引线</li>
            <li>公差框格</li>
            <li>（可选）辅助平面与要素框格</li>
            <li>（可选）相邻标注（补充标准）</li>
        </ul>

        <h3>指引线</h3>
        <table>
            <tr class="tbtitle">
                <td>被测要素</td>
                <td>绘图方法</td>
                <td>例图</td>
            </tr>
            <tr>
                <td>公称组成要素</td>
                <td class="tbtext">指引线的箭头应置于被测要素的轮廓线或轮廓线延长线上，必须与尺寸线明显错开。</td>
                <td><img src="./Img/Line1.png" width="200"></td>
            </tr>
            <tr>
                <td rowspan="2">公称导出要素</td>
                <td class="tbtext">指引线的箭头应与尺寸线在一条线上。</td>
                <td><img src="./Img/Line2.png" width="200"></td>
            </tr>
            <tr>
                <td>若尺寸的箭头在尺寸线外侧，指引线箭头</td>
                <td><img src="./Img/Line3.png" width="200"></td>
            </tr>
        </table>

        <h3>基准</h3>
        <p>基准要素字母放在方框中，用细实线与三角形相连。</p>
        <p>三角形应涂黑，靠在基准要素上。</p>
        <p>连线由三角形顶部引出。</p>
        <p>方框必须正向放置，方框中的字母必须水平书写。</p>
        <br>
        <img src="./Img/Base1.png" width="100">
        <table>
            <tr class="tbtitle">
                <td>被测要素</td>
                <td>绘图方法</td>
                <td>例图</td>
            </tr>
            <tr>
                <td>公称组成要素</td>
                <td class="tbtext">基准三角形应在基准要素的轮廓线或其延长线上。且基准符号的连线与尺寸线应明显错开</td>
                <td><img src="./Img/Base2.png" width="200"></td>
            </tr>
            <tr>
                <td rowspan="2">公称导出要素</td>
                <td class="tbtext">基准符号的连线应与尺寸线在一条线上。</td>
                <td><img src="./Img/Base3.png" width="200"></td>
            </tr>
            <tr>
                <td>若尺寸的箭头在尺寸线外侧，指引线箭头</td>
                <td><img src="./Img/Base4.png" width="200"></td>
            </tr>
        </table>


        <b>公差框格</b>
        <br><br>
        水平布置：2-5格
        <ul>
            <li>第1格：几何公差特征项目符号</li>
            <li>第2格：几何公差值\\(t(mm)\\)</li>
            <li>第3-5格：基准字母</li>
        </ul>

        几何公差值的标注形式：
        <ul>
            <li>\\(t\\)</li>
            <li>\\(\\phi t\\)</li>
            <li>\\(S\\phi t\\)</li>
        </ul>

        基准类型：
        <ul>
            <li>单一基准</li>
            <li>公共基准</li>
            <li>基准体系</li>
        </ul>

        <h2> 第三节 几何公差的标注及公差带</h2>
        <h3>一、形状公差</h3>
        <b>母线</b>
        <p>曲面可看作一动线再空间运动的轨迹，该动线称为母线。</p>
        <b>素线</b>
        <p>母线位于曲面任一位置上时称为素线。</p>

        <table>
            <tr>
                <td colspan="3">公差</td>
                <td>图</td>
                <td>被测要素</td>
                <td colspan="2">公差带</td>
            </tr>
            <tr>
                <td rowspan="8">形状公差</td>
                <td rowspan="3">直线度<img src="Img/1-1.png" width="30"></td>
                <td>给定平面的直线度</td>
                <td><img src="./Img/Straightness1.png" width="300"></td>
                <td class="tbtext">给定平面内被测表面的素线，该素线平行于平面<span lang="en">A</span>。</td>
                <td class="tbtext">平行于基准<span lang="en">A</span>的任意相交平面内，间距为\\(t\\)的两平行直线限定的区域。</td>
                <td><img src="./Img/Straightness1-1.png" width="100"></td>
            </tr>
            <tr>
                <td>棱线</td>
                <td><img src="./Img/Straightness2.png" width="180"></td>
                <td>棱线</td>
                <td class="tbtext">距离为\\(t\\)的两平行平面间的区域。</td>
                <td><img src="./Img/Straightness2-2.png" width="100"></td>
            </tr>
            <tr>
                <td>轴线</td>
                <td><img src="./Img/Straightness3.png" width="200"></td>
                <td>轴线</td>
                <td class="tbtext">直径为\\(\\Phi t\\)的圆柱面间的区域。</td>
                <td><img src="./Img/Straightness3-1.png" width="100"></td>
            </tr>
            <tr>
                <td colspan="2">平面度<img src="Img/1-2.png" width="30"></td>
                <td></td>
                <td>平面</td>
                <td class="tbtext">距离为\\(t\\)的两平面间的区域</td>
                <td><img src="./Img/Straightness2-2.png" width="100"></td>
            </tr>
            <tr>
                <td colspan="2">圆度<img src="Img/1-3.png" width="30"></td>
                <td></td>
                <td></td>
                <td class="tbtext">半径差为\\(t\\)的两共面同心圆间的区域</td>
                <td><img src="Img/Circle.png" width="100"></td>
            </tr>            <tr>
                <td colspan="2">圆柱度<img src="Img/1-4.png" width="30"></td>
                <td></td>
                <td>圆柱面</td>
                <td class="tbtext">半径差为\\(t\\)的两同轴圆柱面间的区域</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2">线轮廓度<img src="Img/1-5.png" width="30"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2">面轮廓度<img src="Img/1-6.png" width="30"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td rowspan="5">方向公差</td>
                <td colspan="2">平行度</td>
                <td></td>
                <td>平面或直线</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2">垂直度</td>
                <td></td>
                <td>平面或直线</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2">倾斜度</td>
                <td></td>
                <td>平面或直线</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2">线轮廓度</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2">面轮廓度</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td rowspan="6">位置公差</td>
                <td colspan="2">位置度</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2">同心度</td>
                <td></td>
                <td>圆心</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2">同轴度</td>
                <td></td>
                <td>圆柱面轴线或圆锥面轴线</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2">对称度</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2">线轮廓度</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2">面轮廓度</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td rowspan="6">由特定测量方法定义的跳动公差</td>
                <td rowspan="4">圆跳动公差</td>
                <td>径向圆跳动公差</td>
                <td></td>
                <td class="tbtext">指示表测杆轴线与基准轴线垂直且相交，指向圆柱面被测要素。圆柱面被测要素绕公共基准轴线<span lang="en">A-B</span>旋转一周。</td>
                <td class="tbtext">在垂直于基准轴线的任一测量平面内、半径差为\\(t\\)且圆心在基准上的两同心圆间的区域。</td>
                <td><img src="Img/Circle.png" width="100"></td>
            </tr>
            <tr>
                <td>轴向圆跳动公差</td>
                <td></td>
                <td>端平面</td>
                <td></td>
            </tr>
            <tr>
                <td>斜向圆跳动公差</td>
                <td></td>
                <td>圆锥面</td>
                <td></td>
            </tr>
            <tr>
                <td>给定方向的圆跳动公差</td>
                <td></td>
                <td>圆锥截面</td>
                <td></td>
            </tr>
            <tr>
                <td rowspan="2">全跳动公差</td>
                <td>径向全跳动公差</td>
                <td></td>
                <td>圆柱面</td>
                <td></td>
            </tr>
            <tr>
                <td>轴向全跳动公差</td>
                <td></td>
                <td>端平面</td>
                <td></td>
            </tr>
        </table>

        <b>跳动公差带的特点</b>
        <p>跳动公差带相对于基准轴线有确定的位置或方向。</p>
        <ul>
            <li>径向圆跳动公差带形状与圆度公差带形状相同，其圆心位于基准轴线上。</li>
            <li>径向全跳动公差带形状与圆柱度公差带形状相同，其轴线与基准轴线同轴。</li>
            <li>轴向圆跳动公差带轴线与基准轴线重合。</li>
            <li>轴向全跳动公差带方向与基准轴线方向垂直。</li>
        </ul>
        <p>跳动公差可综合控制被测要素的形状、方向或位置误差。</p>
        <ul>
            <li>径向圆跳动公差：圆度误差+同轴度误差</li>
            <li>径向全跳动公差：圆柱度误差+同轴度误差</li>
            <li>轴向圆跳动公差：被测端面不同半径位置的平面度误差+相对于基准轴线的垂直度误差</li>
            <li>轴向全跳动公差：被测端面的平面度误差+相对于基准轴线的垂直度误差</li>
        </ul>

        <table>

        </table>

        <h2>第四节 公差原则</h2>

        <table>
            <tr>
                <td>独立原则</td>
                <td>同一要素的尺寸公差与几何公差相互独立、彼此无关。</td>
            </tr>
            <tr>
                <td>相关公差要求</td>
                <td></td>
            </tr>
        </table>

        <b>体外作用尺寸</b>
        <table>
            <tr>
                <td>孔</td>
                <td>\\(D_{fe} = D_a - f\\)</td>
                <td class="tbtext">被测孔在给定长度上，与实际孔体外相接的最大理想轴的直径或宽度。</td>
                <td><img src="./Img/3-4-1.png" width="150"></td>
            </tr>
            <tr>
                <td>轴</td>
                <td>\\(d_{fe} = d_a + f\\)</td>
                <td class="tbtext">被测轴在给定长度上，与实际轴体外相接的最小理想孔的直径或宽度。</td>
                <td><img src="./Img/3-4-2.png" width="150"></td>
            </tr>
        </table>

        <br>
        <table>
            <tr>
                <td>最大实体状态<span lang="en">MMC</span></td>
                <td class="tbtext">提取组成要素的局部尺寸处处位于极限尺寸，且使其具有材料最多的状态。</td>
                <td>孔处于下极限尺寸时的状态</td>
                <td>轴处于上极限尺寸时的状态</td>
            </tr>
            <tr>
                <td>最大实体尺寸<span lang="en">MMS</span></td>
                <td class="tbtext">实际要素在最大实体状态下的极限尺寸。</td>
                <td>$$D_M = D_{min}$$</td>
                <td>$$d_M = d_{max}$$</td>
            </tr>
            <tr>
                <td>最大实体实效状态<br><span lang="en">MMVC</span></td>
                <td class="tbtext">在给定长度上，实际要素处于最大实体状态且其导出要素的几何误差等于给出的几何公差值时的综合极限状态。</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>最大实体实效尺寸<br><span lang="en">MMVS</span></td>
                <td class="tbtext">实际要素在最大实体实效状态下的体外作用尺寸。</td>
                <td>$$D_{MV} = D_{min} - t$$</td>
                <td>$$d_{MV} = d_{max} + t$$</td>
            </tr>
            <tr>
                <td>最小实体状态<span lang="en">LMC</span></td>
                <td class="tbtext">提取组成要素的局部尺寸处处位于极限尺寸，且使其具有材料最少的状态。</td>
                <td>孔处于上极限尺寸时的状态</td>
                <td>轴处于下极限尺寸时的状态</td>
            </tr>
            <tr>
                <td><br><span lang="en"></span></td>
                <td class="tbtext"></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td><br><span lang="en"></span></td>
                <td class="tbtext"></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td><br><span lang="en"></span></td>
                <td class="tbtext"></td>
                <td></td>
                <td></td>
            </tr>
        </table>

        <b>边界</b>
        <p>设计时给定的具有理想形状的极限包容面。</p>
        <p>实际轴的极限包容面为具有理想形状的孔表面。</p>
        <p>实际孔的极限包容面为具有理想形状的轴表面。</p>
        <table>
            <tr>
                <td>最大实体边界<br><span lang="en">MMB</span></td>
                <td class="tbtext">极限包容界面的尺寸采用最大实体尺寸。</td>
            </tr>
            <tr>
                <td>最大实体实效边界<br><span lang="en">MMVB</span></td>
                <td class="tbtext">极限包容界面的尺寸采用最大实体实效尺寸。</td>
            </tr>
            <tr>
                <td></td>
                <td class="tbtext"></td>
            </tr>
            <tr>
                <td></td>
                <td class="tbtext"></td>
            </tr>
        </table>

        <b>包容要求<img src="./Img/CircledE.png" width="30"></b>
        <p>包容要求采用<b>最大实体边界</b>。</p>
        <table>
            <tr>
                <td>孔</td>
                <td>\\(D_a \\le D_{max}\\) 且 \\(D_{fe} \\ge D_{min}\\)</td>
            </tr>
            <tr>
                <td>轴</td>
                <td>\\(d_a \\ge d{min}\\) 且 \\(d_{fe} \\le d_{max}\\)</td>
            </tr>
        </table>


        <b>最大实体要求<img src="./Img/CircledM.png" width="30"></b>
        <p>最大实体要求采用<b>最大实体实效边界</b>。</p>
        <table>
            <tr>
                <td>孔</td>
                <td>\\(D_{min}\\le D_a \\le D_{max}\\) 且 \\(D_{fe} \\ge D_{MV}\\)</td>
            </tr>
            <tr>
                <td>轴</td>
                <td>\\(d_{min}\\le d_a \\le d_{max}\\) 且 \\(d_{fe} \\le d_{MV}\\)</td>
            </tr>
        </table>

        <h2>第五节 几何精度设计</h2>
        <b>几何公差值的选择</b>
        <ul>
            <li>满足功能的条件下，取低不取高。</li>
            <li>同一要素上，形状公差值\\(\\lt\\)方向公差值\\(\\lt\\)位置公差值。</li>
        </ul>

        <b>未注几何公差等级</b>
        <ul>
            <li><span lang="en">H</span>：高精度</li>
            <li><span lang="en">K</span>：中等精度</li>
            <li><span lang="en">L</span>：低精度</li>
        </ul>` },
  "note/instrument/precision/chapter4": { title: "互换性", content: `<h1>第四章 表面粗糙度轮廓精度检测</h1>

        <h2>第一节 表面粗糙度轮廓精度的基本概念</h2>

        <b>微观不平度</b>
        <p>被加工零件表面产生的微小峰谷。</p>
        <p>是一种微观轮廓误差。</p>

        <b>产生原因</b>
        <ul>
            <li>刀具或砂轮切削后遗留的刀痕</li>
            <li>切削过程中切屑分离时的塑性变形</li>
            <li>机床的振动</li>
        </ul>

        <b>表面粗糙度</b>
        <p>零件的加工表面上具有的间距较小的微小峰谷组成的微观几何形状特征。</p>
        <p>是微观不平度的评价指标。</p>

        <b>表面粗糙度对机械性能的影响</b>
        <ul>
            <li>相互运动两个表面的耐磨性</li>
            <li>两个相互配合表面的配合性质稳定性</li>
            <li>零件表面耐疲劳性、抗腐蚀性、密封性、润滑性等</li>
        </ul>

        <h2>第二节 表面粗糙度轮廓精度的判定</h2>

        <b>取样长度\\(lr\\)</b>
        <p>测量或评定表面粗糙度时所规定的一段基准线长度。</p>
        <p>引入取样长度的目的是限制、减弱波纹度、形状误差对测量结果的影响。</p>
        <p>取样长度过短则不能反应表面的微观起伏程度。</p>
        <p>取样长度过长则可能使测量结果受波纹度甚至形状误差的影响。</p>

        <b>轮廓算数平均中线</b>
        <p>在取样长度\\(lr\\)内，将实际轮廓分为上下两部分，且上部分面积之和等于下部分面积之和。</p>

        <b>轮廓最小二乘中线</b>
        <p>在取样长度\\(lr\\)内，使轮廓上各点到基线距离的平方和最小。</p>

        <h3>评定参数</h3>
        <b>幅度（高度）参数</b>
        <br><br>
        <b>轮廓算术平均偏差\\(Ra\\)</b>
        <p>在一个取样长度\\(lr\\)内，被测轮廓上各点到中线的点的纵坐标绝对值的算数平均值。</p>
        $$
        \\begin{align}
        Ra &= \\frac{1}{lr}\\int_{0}^{lr}|Z(x)|\\mathbb{d}x\\\\
           &= \\frac{1}{n}\\sum\\limits_{i=1}^n|Z_i|
        \\end{align}
        $$
        
        <b>轮廓最大高度\\(Rz\\)</b>
        <p>在一个取样长度\\(lr\\)内，最大轮廓峰高与最大轮廓谷深之和。</p>` },
  "note/instrument/precision/chapter5": { title: "互换性", content: `<h1>第五章 轴承</h1>
        <p>轴承是标准不见，在机器中起支承作用，可减小运动副的摩擦、磨损，提高机械效率。</p>
        <p>轴承由内圈、外圈、滚动体与保持架组成。</p>
        <p>轴承内圈与轴颈配合采用基孔制</p>
        <p>轴承外圈与外壳孔配合采用基轴制</p>

        <b>分类</b>
        <br><br>
        按滚动体形状分：
        <ul>
            <li>球轴承</li>
            <li>滚子轴承</li>
        </ul>
        按能承受载荷的方向分：
        <ul>
            <li>向心轴承（公称接触角\\(0°\\leq \\alpha \\leq 45°\\)）</li>
            <li>推力轴承（公称接触角\\(45°\\lt \\alpha \\leq 90°\\)）</li>
        </ul>` },
  "note/instrument/precision/chapter6": { title: "互换性", content: `<h1>第六章 螺纹联结精度与检测</h1>
        <b>螺纹的主要使用要求</b>
        <p>具有良好的旋合性和连接的可靠性。</p>

        <b>普通螺纹的主要几何参数</b>
        <ul>
            <li>大径（基本大径、公称直径）</li>
            <li></li>
        </ul>

        <b>螺纹公差精度</b>
        <ul>
            <li>精密级</li>
            <li>中等级</li>
            <li>粗糙级</li>
        </ul>


        <b>螺纹的旋合长度</b>
        <ul>
            <li>长旋合长度<span lang="en">L</span></li>
            <li>中等旋合长度<span lang="en">N</span></li>
            <li>短旋合长度<span lang="en">S</span></li>
        </ul>
        

        <b>影响普通螺纹联结精度的因素</b>
        <ul>
            <li>中径偏差</li>
            <li>螺距偏差</li>
            <li>牙测角偏差</li>
            <li>作用中径</li>
        </ul>` },
  "note/instrument/precision/chapter7": { title: "互换性", content: `<h1>第七章 圆柱齿轮精度与检测</h1>

        <table>
            <tr>
                <td rowspan="9">齿轮加工误差</td>
                <td rowspan="3">按方向特征分</td>
                <td>径向误差</td>
            </tr>
            <tr>
                <td>切向误差</td>
            </tr>
            <tr>
                <td>轴向误差</td>
            </tr>
            <tr>
                <td rowspan="4">按表现特征分</td>
                <td>齿廓误差</td>
            </tr>
            <tr>
                <td>齿距误差</td>
            </tr>
            <tr>
                <td>齿向误差</td>
            </tr>
            <tr>
                <td>齿厚误差</td>
            </tr>
            <tr>
                <td rowspan="2">按周期或频率特征分</td>
                <td>长周期误差（低频）</td>
            </tr>
            <tr>
                <td>短周期误差（高频）</td>
            </tr>
        </table>

        <b>齿轮及其传动的使用要求</b>
        <table>
            <tr>
                <td>传递运动的准确性</td>
                <td class="tbtext">要求齿轮在转一转范围内，瞬时传动比变化不超过一定限度。</td>
            </tr>
            <tr>
                <td>传动的平稳性</td>
                <td class="tbtext">要求齿轮在转一齿范围内，瞬时传动比变动不超过一定限度。</td>
            </tr>
            <tr>
                <td>载荷分布的均匀性</td>
                <td class="tbtext">一对齿轮啮合时，工作齿面要保证一定的接触面积，从而避免载荷局部集中，以减少轮齿损坏和齿面磨损，提高轮齿强度和齿轮寿命。</td>
            </tr>
            <tr>
                <td>齿侧间隙</td>
                <td class="tbtext">一对齿轮啮合时，在非工作齿面间留有适当间隙。</td>
            </tr>
        </table>

        <b>齿侧间隙的作用</b>
        <p>使传递灵活，用以贮存润滑油，以及补偿热变形、制造误差和装配误差等。</p>


        <h2>齿轮精度必检参数</h2>

        <b>圆柱齿轮同侧齿面</b>
        <table>
            <tr>
                <td><b>单个齿距偏差\\(\\Delta f_{pt}\\)</b></td>
                <td class="tbtext">在端平面上，接近齿高中部的一个与齿轮轴线同轴心的圆上，实际齿距与理论齿距的代数差。</td>
                <td>传动的平稳性</td>
            </tr>
            <tr>
                <td><b>齿距累计总偏差\\(\\Delta F_p\\)</b></td>
                <td></td>
                <td>传递运动的准确性</td>
            </tr>
            <tr>
                <td><b>齿廓总偏差\\(\\Delta F_\\alpha\\)</b></td>
                <td></td>
                <td>传动的平稳性</td>
            </tr>
            <tr>
                <td><b>螺旋线总偏差\\(\\Delta F_\\beta\\)</b></td>
                <td></td>
                <td>载荷分布均匀性</td>
            </tr>
        </table>
        <b>圆柱齿轮径向综合偏差</b>
        <table>
            <tr>
                <td><b>径向综合总偏差\\(\\Delta F_i''\\)</b></td>
                <td>传递运动准确性</td>
            </tr>
            <tr>
                <td><b>一齿径向综合偏差\\(\\Delta f_i''\\)</b></td>
                <td>传动平稳性</td>
            </tr>
            <tr>
                <td><b>径向跳动\\(\\Delta F_r\\)</b></td>
                <td>传递运动准确性</td>
            </tr>
        </table>` },
  "note/language/english/article": { title: "英语语法", content: `<h2>情感表达</h2>
    <h3>正负情感</h3>
    <h3>加重语气</h3>
    <ul>
        <li>强调句</li>
        <li>反问句</li>
    </ul>


    <h2>细节题</h2>
    <h3>陈述句填补</h3>
    <ul>
        <li>事实细节</li>
        <li>因果细节</li>
        <li>目的细节</li>
    </ul>
    <h3>特殊疑问句提问</h3>

    <b>做题方法</b>
    <ol>
        <li>明确问什么：
            <p>事实/因果/目的？</p>
            <p>现在/将来/现在？</p>
        </li>
        <li>划取关键词：
            <p>名词、动词、形容词</p>
        </li>
    </ol>

    <h2>例证题</h2>
    <b>标志</b>
    <p>be quoted, be mentioned, be used, be cited...</p>
    <p>indicate, illustrate...</p>
    <p>方法：找观点</p>

    <h2>词句理解题</h2>
    <p>根据上下文猜测意义.</p>
    <p>逻辑</p>
    <ul>
        <li>同向逻辑</li>
        <li>反向逻辑</li>
    </ul>


    <h2>主旨题（通常在最后一题）</h2>
    <ul>
        <li>文章大意概况</li>
        <li>文章命名</li>
    </ul>

    <h3>解题方法1——首尾句串读法</h3>
    

    <h2>七选五</h2>
    <h2>排序题</h2>
    <h2>小标题</h2>` },
  "note/language/english/clause": { title: "英语语法", content: `<b>特殊主语从句</b>
    <ul>
        <li>It(be) + 主语从句</li>
        <li>宾语从句后置：动词+it+宾语补足语+that宾语从句</li>
        <li>同位语从句与名词的隔裂</li>
    </ul>



    <h2>定语从句</h2>

    <h3>限定性定语从句</h3>
    <p lang="en">A carrot that I bought</p>
    <ul>
        <li>carrot：先行词（被修饰词）</li>
        <li>that：关系词</li>
    </ul>

    <b>关系词</b>
    <ul>
        <li>关系代词</li>
        <ul>
            <li>that</li>
            <li>who：从句中人做<b>主语</b></li>
            <li>whom：从句中人做<b>宾语</b></li>
            <li>whose：谁的.../什么的...</li>
            <li>which</li>
        </ul>
        <li>关系副词 = 介词 + 关系代词</li>
        <ul>
            <li>why</li>
            <li>when</li>
            <li>where</li>
        </ul>
    </ul>
    <p>注：that与which在大多数情况下可替换</p>
    <p>先行词位于关系词之前.</p>
    <p>关系词用于连接主句与定语从句，并替代先行词充当成分.</p>

    <h3>非限定性定语从句</h3>
    <p>特征为关系词前有逗号隔开，用于继续补充句意。</p>

    
    <h3>介词提前的定语从句</h3>
    <p>the environment in which they = they live in the environment</p>


    <h3>整个句子作先行词的定语从句</h3>
    <h3>定语从句与先行词的割裂</h3>
    <h3>定语从句与同位语从句的区别</h3>


    <h2>状语从句</h2>
    <table>
        <tr>
            <td rowspan="9">状语从句</td>
            <td>时间状语从句</td>
        </tr>
        <tr>
            <td>地点状语从句</td>
        </tr>
        <tr>
            <td>原因状语从句</td>
        </tr>
        <tr>
            <td>结果状语从句</td>
        </tr>
        <tr><td>目的状语从句</td></tr>
        <tr><td>方式状语从句</td></tr>
        <tr><td>条件状语从句</td></tr>
        <tr><td>让步状语从句</td></tr>
        <tr><td>比较状语从句</td></tr>
    </table>

    <h3>时间状语从句</h3>
    <table>
        <tr>
            <td colspan="3">引导词</td>
        </tr>
        <tr>
            <td rowspan="5">时间状语从句</td>
            <td>when, while, as</td>
            <td>当...时</td>
        </tr>
        <tr>
            <td>before, after</td>
            <td>在...之前/之后</td>
        </tr>
        <tr>
            <td>till, untill</td>
            <td>直到...</td>
        </tr>
        <tr>
            <td>as soon as..., once, directly</td>
            <td>一...就...</td>
        </tr>
        <tr>
            <td>the moment, every time</td>
            <td>表示时间的名词词组</td>
        </tr>
        <tr>
            <td rowspan="3">地点状语从句</td>
            <td>where</td>
            <td>在...地方</td>
        </tr>
        <tr>
            <td>wherever</td>
            <td>在任何...地方</td>
        </tr>
        <tr>
            <td>everywhere</td>
            <td>每一...地方</td>
        </tr>
        <tr>
            <td rowspan="3">原因状语从句</td>
            <td>because, since, as, now that</td>
            <td>因为</td>
        </tr>
        <tr>
            <td>in that</td>
            <td>在于</td>
        </tr>
        <tr>
            <td>considering that</td>
            <td>考虑到</td>
        </tr>
        <tr>
            <td rowspan="2">结果状语从句</td>
            <td>so that</td>
            <td>所以</td>
        </tr>
        <tr>
            <td>so (adj.)...that..., so (n.)... that...</td>
            <td>太...以至于...</td>
        </tr>
        <tr>
            <td rowspan="2">目的状语从句</td>
            <td>so that, in order that</td>
            <td>为了</td>
        </tr>
        <tr>
            <td>for fear that</td>
            <td>以免</td>
        </tr>
        <tr>
            <td rowspan="2">方式状语从句</td>
            <td>as</td>
            <td>按照...方式</td>
        </tr>
        <tr>
            <td>ad if, as though</td>
            <td>好像</td>
        </tr>
        <tr>
            <td rowspan="3">条件状语从句</td>
            <td>if</td>
            <td>如果</td>
        </tr>
        <tr>
            <td>unless</td>
            <td>除非</td>
        </tr>
        <tr>
            <td>as long as, on condition that, provided (that), providing (that)</td>
            <td>只要...</td>
        </tr>
        <tr>
            <td rowspan="2">让步状语从句</td>
            <td>though, although, even if, even though, while</td>
            <td>尽管</td>
        </tr>
        <tr>
            <td>no matter (what, when, how), whatever, whenever, however</td>
            <td>无论什么/何时/怎样</td>
        </tr>
        <tr>
            <td>比较状语从句</td>
            <td>than</td>
            <td>比...</td>
        </tr>
    </table>` },
  "note/language/english/grammar": { title: "树莓派", content: `<b>不定式作主语</b>
    <p>It is + adj. + (for sb.) to do sth.</p>
    <p>句首的It无实义，为形式主语.</p>
    <p>It (be) + adj./n./others + to do</p>

    <b>不定式作表语</b>
    <p>表示目的</p>
    <p>e.g. The next step is to put the theory into practice.</p>

    <b>不定式作状语</b>
    <p>表示目的</p>
    <p>e.g. I have to work hard to make money.</p>
    <p>目的为重点，强调目的：</p>
    <p>e.g. I have to work hard in order/ so as to make money.</p>
    <p>e.g. To/In order to make money, I have to work hard. </p>

    <p>表示原因</p>
    <p>e.g. I'm glad to meet you.</p>

    <p>表示结果</p>
    <p>结构1：only to do 结果却（不满意）</p>
    <p>结构2：so + adj. + as to do 如此...以至于...</p>
    <p>结构3：...enough to do 足以...</p>
    <p>结构4：too...to do 太...以至于不能...</p>

    <b>不定式作宾语</b>
    <p>结构1：v. + to do</p>
    <p>结构2：v. + 疑问词 + to do</p>
    <p>结构3：v. + it + 宾语补足语 + to do</p>

    <b>不定式作宾语补足语</b>
    <p>v. + 宾语 + to do</p>
    <p>advise, allow, ask, cause, enable, encourage, expect, force, instruct, order, permit, persuade, recommend, request, teach, tell, warn, urge...</p>

    <b>不定式作定语</b>
    <p>不定式作定语时需要后置.</p>
    <p>n. + to do</p>
    <p>ability, attempt, chance, decision, determination, eagerness, effort, need, opportunity, plan, place, reason, resonsibility, right, time, way...</p>


    <h3>动名词</h3>
    <ul>
        <li>主语</li>
        <li>宾语</li>
        <li>表语</li>
        <li>定语</li>
    </ul>


    <b>动名词作主语</b>
    <p>在句首</p>
    <p>e.g. Eating vegetables is good for our health.</p>
    <p>在句末</p>
    <p>e.g. It is no ues complaining.怨天尤人没有用</p>
    <p>There is no good/use/point in doing</p>

    <b>动名词作宾语</b>
    <p>v. + doing</p>
    <p>I like learning English.</p>

    <table>
        <tr>
            <td>表达情感的动词</td>
            <td>like, love, prefer, hate, regret...</td>
        </tr>
        <tr>
            <td>表示“开始、停止、中断”的动词</td>
            <td>begin, start, continue, cease, stop...</td>
        </tr>
        <tr>
            <td>只能接动名词的动词</td>
            <td>admit, avoid, consider, deny, escape, mind, permit, practice, risk, suggest, oppose...</td>
        </tr>
    </table>

    <p>表达情感的动词 + doing：表示动作具有持续性或反复发生.</p>
    <p>表达情感的动词 + to do：表示某一次具体或特定的动作.</p>

    <p>表示“开始、停止、中断”的动词：除stop外，后接 doing 或 to do 没有区别.</p>
    <p>stop doing sth.：停止做某事.</p>
    <p>stop to do sth.：停下正在做的事去做某事.</p>
    
    <p>介词 + doing</p>
    <p>介词后面不能直接跟动词原形.</p>
    <table>
        <tr>
            <td>介词</td>
            <td>about, after, at, as, between, by, for, from, in , of, on, since, through, to, with, without...</td>
        </tr>
    </table>
    <table>
        <tr>
            <td>常见的介词to短语</td>
            <td>look forward to, object to, be used to, in addition to, be opposed to, perfer doing to, devote sth. to, the solution to...</td>
        </tr>
    </table>
    

    <b>动名词作表语</b>
    <p>系动词 + doing</p>
    <p>e.g. Her habit is eating vegetables.</p>
    <p>动名词作表语与现在进行时的区别：动名词作表语用于表达主语状态，表语与主语可以划等号；而现在进行时表示动作正在发生.</p>
    
    <b>动名词作定语</b>
    <p>e.g. drinking water</p>
    <p>表示被修饰成分的用途.</p>

    <h3>分词</h3>
    <b>分词作定语</b>
    <p>单个分词+名词</p>
    <p>e.g. falling leaves</p>
    <p>e.g. a broken cup</p>
    <p>名词+分词短语</p>

    <b>分词作表语</b>
    <p>用于说明主语的特征或状态.</p>
    <p>e.g. The dog is frightening.</p>
    <p>这只狗令人害怕</p>
    <p>...ing：令人...的</p>
    <p>...ed：感到...的</p>

    <b>分词作宾语补足语</b>
    <p>e.g. She still could not make herself understood in English.</p>
    <p>她还不能用英语表达自己的意思</p>


    <b>分词作状语</b>
    <p></p>
    <table>
        <tr>
            <td>意义</td>
            <td>分词（短语）单独作状语</td>
        </tr>
        <tr>
            <td>表示时间</td>
            <td>Hearing the news, their burst out crying.</td>
        </tr>
        <tr>
            <td>表示结果</td>
            <td>A number of new machines were introduecd from abroad, increasing the production.</td>
        </tr>
        <tr>
            <td>表示让步</td>
            <td>Wounded, the brave soldier continued to fight.</td>
        </tr>
        <tr>
            <td>表示原因</td>
            <td>Not konwing what to do next, I want to ask for your advice.</td>
        </tr>
        <tr>
            <td>表示条件</td>
            <td>Given another chance, I will do it much better.</td>
        </tr>
        <tr>
            <td>表示伴随</td>
            <td>He stood by the door, looking out.</td>
        </tr>
    </table>
    
    <table>
        <tr>
            <td>意义</td>
            <td>分词的独立结构（with + 名词 + 分词）作状语</td>
        </tr>
        <tr>
            <td>表示原因</td>
            <td>With its natural habitat destroyed, the species is doomed to extinction.</td>
        </tr>
        <tr>
            <td>表示伴随</td>
            <td>We sat in the courtyard, with the moon rising above the treetops.</td>
        </tr>
        <tr>
            <td>表示补充说明</td>
            <td>Lodon was found to be the least punctual city, with 41% of respondents admitting that they were hardly ever on time.</td>
        </tr>
    </table>

    <h2>并列句</h2>
    <p>将两个句子合并为一个句子</p>
    <b>并列句标志：并列连词</b>
    <table>
        <tr>
            <td rowspan="2">顺接</td>
            <td>...和...</td>
            <td>and, both...and..., as well as</td>
        </tr>
        <tr>
            <td>不但...而且...</td>
            <td>not only...but (also) ...</td>
        </tr>
        <tr>
            <td>转折</td>
            <td>但是/然而</td>
            <td>but, yet, while, whereas, rather</td>
        </tr>
        <tr>
            <td rowspan="2">选择</td>
            <td>或者</td>
            <td>or, either...or...</td>
        </tr>
        <tr>
            <td>既不...也不...</td>
            <td>neither...nor</td>
        </tr>
        <tr>
            <td rowspan="2">因果</td>
            <td>因为</td>
            <td>for</td>
        </tr>
        <tr>
            <td>所以</td>
            <td>so</td>
        </tr>
    </table>

    <h3>并列句形式</h3>
    <b>两件事</b>
    <p>..., and ...</p>
    <p>... and ...</p>
    <b>多件事</b>
    <p>..., ..., and ...</p>

    <h3>并列句的省略</h3>` },
  "note/language/english/translation": { title: "英语语法", content: `<h3>专有名词的翻译</h3>
    <ul>
        <li>常见的专有名词：积累</li>
        <li>不常见的专有名词：音译</li>
        <li>对其他语言的引用：照抄</li>
    </ul>` },
  "note/language/german/chinese": { title: "note/language/german/chinese", content: `<ul>
            <li>need</li>
            <li>boring</li>
        </ul>` },
  "note/language/german/english": { title: "note/language/german/english", content: `<ul>
            <li>entail</li>
            <li>tedious</li>
        </ul>` },
  "note/language/german/englishgramma": { title: "高等数学", content: `<h1 lang="en">English Gramma</h1>

        <h2>时态</h2>
        <p>时态，即“时间”+“状态”。</p>

        <b>时间</b>
        <ul>
            <li>过去</li>
            <li>现在</li>
            <li>将来</li>
        </ul>

        <b>状态</b>
        <ul>
            <li>一般</li>
            <li>完成</li>
            <li>进行</li>
        </ul>` },
  "note/language/german/note1": { title: "note/language/german/note1", content: `名词
        <ul>
            <li>day = Tag</li>
            <li>morning  = Morgen</li>
            <li>park = Park</li>
            <li>school = Schule</li>
            <li>work = Abrbeit</li>
            <li>dog = Hund</li>
            <li>rain = Regen</li>
            <li>TV = fern</li>
        </ul>

        介词
        <ul>
            <li>in = im</li>
            <li>to = zur</li>
            <li>with = mit</li>
        </ul>

        动词
        <ul>
            <li>walk = laufe</li>
            <li>run = renne</li>
            <li>watch = sehe</li>
        </ul>

        副词
        <ul>
            <li>slowly = langsam</li>
        </ul>

        代词
        <ul>
            <li>my = meinem</li>
        </ul>

        形容词
        <ul>
            <li>every = jeden</li>
            <li>fast = schnell</li>
        </ul>` },
  "note/math/complexvariablefunction/analyticfunction": { title: "复变函数", content: `<h1>解析函数</h1>
        
        <div class="Card-Definition">
            <b>解析</b>
            <p>若复变函数\\(f(z)\\)在\\(z_0\\)及其某个邻域内处处可导，则称\\(f(z)\\)在\\(z_0\\)处解析.</p>
        </div>
        
        <div class="Card-Definition">
            <b>解析函数</b>
            <p>若\\(f(z)\\)在区域D内每一点解析，则称\\(f(z)\\)在D内解析，或称\\(f(z)\\)是D内的一个<b>解析函数</b>，并称D为\\(f(z)\\)的<b>解析区域</b>.</p>
        </div>

        <div class="Card-Definition">
            <b>奇点</b>    
            <p>若\\(f(z)\\)在\\(z_0\\)处不解析，但在\\(z_0\\)的每一邻域内，总有若干点使\\(f(z)\\)解析，则称\\(z_0\\)是\\(f(z)\\)的奇点.</p>
        </div>

        <div class="Card-Analysis">
            <b>C-R条件（柯西-黎曼条件、柯西-黎曼方程）</b>
            <p>设\\(f(z) = u(x,y) + iv(x,y)\\)在区域<span lang="en">D</span>内有定义，<span lang="en">D</span>内一点\\(z = x+iy\\)可导：</p>
    
            $$\\begin{cases}
            \\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}\\\\
            \\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}
            \\end{cases}$$
            <p>C-R条件反应了解析函数实部与虚部的联系.</p>
            <p>函数在\\(D\\)内解析的条件是在D内处处满足C-R条件.</p>
        </div>

        <div class="Card-Definition">
            <b>调和函数</b>
            <p>满足二维Laplace方程的函数：</p>
            $$\\frac{\\partial^2 f}{\\partial x^2} + \\frac{\\partial^2 f}{\\partial y^2} = 0$$

            <p>[注]解析函数的实部与虚部都必须是调和函数.</p>
        </div>



        <a class="BackToTop" href="#PageHead">Top</a>
        <div class="PageEnd"></div>` },
  "note/math/complexvariablefunction/catalog": { title: "复变函数", content: `<h1>复变函数</h1>
        <h2>目录</h2>

        <div class="Catalog">
            <ul>
                <li><a href="/note/math/complexvariablefunction/plural">复数</a></li>
                <li><a href="/note/math/complexvariablefunction/complexoperation">复数的运算</a></li>
                <li><a href="/note/math/complexvariablefunction/complexsequence">复数序列</a></li>
                <li><a href="/note/math/complexvariablefunction/region">区域</a></li>
                <li><a href="/note/math/complexvariablefunction/analyticfunction">解析函数</a></li>
                <li><a href="/note/math/complexvariablefunction/elementaryanalyticfunction">基本解析函数</a></li>
                <li><a href="/note/math/complexvariablefunction/multivaluefunction">多值函数</a></li>
                <li><a href="/note/math/complexvariablefunction/complexvariableintegration">复变积分</a></li>
                <li><a href="/note/math/complexvariablefunction/fouriertransform">傅里叶变换</a></li>
            </ul>
        </div>` },
  "note/math/complexvariablefunction/cauchytheorem": { title: "复变函数", content: `<h1>Cauchy定理</h1>

        <div class="Card-Definition">
            <b>Cauchy定理</b>
            <p>若复变函数\\(f(z)\\)在有界闭区域\\(\\overline{G}\\)中解析，则沿\\(\\overline{G}\\)的边界\\(C\\)，有：</p>
            $$\\oint_C f(z)\\mathrm{d}z = 0$$

            <p>对于单连通区域：</p>
            <p>设\\(f'(z)\\)在\\(\\overline{G}\\)中连续，则：</p>
            $$\\oint_Cf(z)\\mathrm{d}z = \\oint_C(u\\mathrm{d}x - v\\mathrm{d}y) + i\\oint_C(v\\mathrm{d}x + v\\mathrm{d}y)$$
            <p>应用Green公式：</p>
            $$\\oint_C\\left[P(x,y)\\mathrm{d}x + Q(x,y)\\mathrm{d}y\\right] = \\iint_S\\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right)\\mathrm{d}x\\mathrm{d}y$$
            <p>从而将闭合围道积分化为面积分：</p>
            $$\\oint_C(u\\mathrm{d}x - v\\mathrm{d}y) = -\\iint_S\\left(\\frac{\\partial v}{\\partial x} + \\frac{\\partial u}{\\partial y}\\right)$$
            $$\\oint_C(v\\mathrm{d}x + u\\mathrm{d}y) = \\iint_S\\left(\\frac{\\partial u}{\\partial x} - \\frac{\\partial v}{\\partial y}\\right)$$
            <p>由Cauchy-Riemann方程，右端两个积分中的被积函数均为0，故：</p>
            $$\\oint_Cf(z)\\mathrm{d}z = 0$$



        </div>


        <div id="PageEnd"></div>` },
  "note/math/complexvariablefunction/complexoperation": { title: "复变函数", content: `<h1>复数运算</h1>

        <div class="PageCatalog">
            <ul>
            </ul>
        </div>

        <div class="Card-Analysis">
            <h2>复数的乘法</h2>
            $$z_1z_2 = r_1e^{i\\theta_1}r_2e^{i\\theta_2} = r_1r_2e^{i(\\theta_1 + \\theta_2)}$$
            <p>从几何的角度上看，两个复数相乘的结果为：模相乘，辐角相加.</p>
        </div>

        <div class="Card-Analysis">
            <h2>复数的除法</h2>
            $$\\frac{z_1}{z_2} = \\frac{r_1e^{i\\theta_1}}{r_2e^{i\\theta_2}} = \\frac{r_1}{r_2}e^{i(\\theta_1-\\theta_2)}$$
            <p>从几何的角度上看，两个复数相除的结果为：模相除，辐角相减.</p>
        </div>
      


        <div id="PageEnd"></div>
        <a class="GoToBottom" href="#PageEnd">Bottom</a>` },
  "note/math/complexvariablefunction/complexsequence": { title: "复变函数", content: `<h1>复数序列</h1>

        <div class="Card-Definition">
            <b>复数序列</b>
            <p>按一定顺序排列的无穷个复数\\(\\{z_n\\}\\)：</p>
            $$z_n = x_n + iy_n,~n=1,2,3,\\cdots$$
            <p>[注]一个复数序列\\(\\{z_n\\}\\)完全等价于两个实数序列\\(\\{x_n\\}\\)和\\(\\{y_n\\}\\).</p>
        </div>
      
        <div class="Card-Definition">
            <b>聚点（极限点）</b>
            <p>给定序列\\(\\{z_n\\}\\)，若\\(\\exists z,\\forall \\epsilon\\gt 0\\)，恒有无穷多\\(n\\)使得\\(|z_n - z|\\lt\\epsilon\\)，则称\\(z\\)为\\(\\{z_n\\}\\)的一个聚点.</p>
            <p>[注]一个序列可以有不止一个聚点.</p>

            <p>实数序列\\(\\{x_n\\}\\)的聚点必然也是实数.</p>
            <p>其中数值最大的，称为\\(\\{x_n\\}\\)的上极限，记为\\(\\overline\\lim\\limits_{n\\rightarrow \\infty}x_n\\)；</p>
            <p>其中数值最小的，称为\\(\\{x_n\\}\\)的下极限，记为\\(\\underline\\lim\\limits_{n\\rightarrow \\infty}x_n\\).</p>
        </div>

        <div class="Card-Property">
            <p>\\(x_n\\gt 0\\)时：</p>
            $$\\overline\\lim\\limits_{n\\rightarrow \\infty}\\frac{1}{x_n} = \\frac{1}{\\underline\\lim\\limits_{n\\rightarrow\\infty}x_n}$$
            $$\\underline\\lim\\limits_{n\\rightarrow \\infty}\\frac{1}{x_n} = \\frac{1}{\\overline\\lim\\limits_{n\\rightarrow\\infty}x_n}$$

            <p>\\(x_n\\geq 0, y_n\\geq 0\\)时：</p>
            $$\\overline\\lim\\limits_{n\\rightarrow\\infty}(x_n\\cdot y_n)\\leq\\overline\\lim\\limits_{n\\rightarrow\\infty}x_n\\cdot\\overline\\lim\\limits_{n\\rightarrow\\infty}y_n$$
            $$\\underline\\lim\\limits_{n\\rightarrow\\infty}(x_n\\cdot y_n)\\geq\\underline\\lim\\limits_{n\\rightarrow\\infty}x_n\\cdot\\underline\\lim\\limits_{n\\rightarrow\\infty}y_n$$
        </div>

        <div class="Card-Definition">
            <b>复数序列的有界性</b>
            <p>给定序列\\(\\{z_n\\}\\)，若\\(\\exists M\\gt 0\\)，使得\\(\\forall n\\)，都有\\(|z_n|\\lt M\\)，则序列\\(\\{z_n\\}\\)为有界序列；否则为无界序列.</p>
        </div>

        <div class="Card-Definition">
            <b>Bolzano-Weierstrass定理</b>
            <p>一个有界序列至少有一个聚点.</p>
        </div>

        <div class="Card-Definition">
            <b>极限</b>
            <p>给定序列\\(\\{z_n\\}\\)，若存在复数\\(z\\)，\\(\\forall \\epsilon \\gt 0\\)，\\(\\exists N(\\epsilon) \\gt 0\\)，使得当\\(n\\gt N(\\epsilon)\\)时，有\\(|z_n - z|\\lt \\epsilon\\)，则称序列\\(\\{z_n\\}\\)收敛于\\(z\\)，记为：</p>
            $$\\lim\\limits_{n\\rightarrow \\infty}z_n = z$$
            <p>此时称序列\\(\\{z_n\\}\\)时收敛的.</p>
            <p>\\(z\\)称为序列\\(\\{z_n\\}\\)的极限.</p>
            <p>[注]一个序列的极限必然是此序列的聚点，而且是唯一的聚点.</p>
            <p>[注]一个无界序列不可能是收敛的，不收敛的序列称为发散序列.</p>
        </div>

        <div class="Card-Definition">
            <b>序列收敛的Cauchy充要条件</b>
            <p>\\(\\forall \\epsilon \\gt 0, \\exists N(\\epsilon)\\gt 0\\)，使得对于\\(\\forall p \\in \\mathbb{N}_+\\)，有：</p>
            $$|z_{N+p} - z_N| \\lt \\epsilon$$
        </div>

        <div id="PageEnd"></div>
        <a class="GoToBottom" href="#PageEnd">Bottom</a>` },
  "note/math/complexvariablefunction/complexvariableintegration": { title: "复变函数", content: `<h1>复变积分</h1>

        <div class="Card-Definition">
            <b>复变积分</b>
            <p>复变积分是复平面\\(\\mathbb{C}\\)上的线积分.</p>
            <p>设\\(C\\)是\\(\\mathbb{C}\\)内一条由\\(A\\)点至\\(B\\)点的曲线，函数\\(f(z)\\)在\\(C\\)上有定义.</p>
            <p>将\\(C\\)任意分割为\\(n\\)段，分点为\\(z_0(A), z_1, z_2, \\cdots, z_n(B)\\)，\\(\\zeta_k\\)是\\(z_{k-1}-z_k\\)段上任意一点，左和数：</p>
            $$\\sum_{k=1}^nf(\\zeta_k)(z_k-z_{k-1}) = \\sum_{k=1}^{n}f(\\zeta_k)\\Delta z_k$$
            <p>若当\\(n\\rightarrow \\infty\\)，即\\(\\max{|\\Delta z_k|}\\rightarrow 0\\)时，此和数的极限存在，且极限值与\\(\\zeta_k\\)的选取无关，则称此极限值为函数\\(f(z)\\)沿曲线\\(C\\)的积分，记为：</p>
            $$\\int_C f(z)\\mathrm{d}z = \\lim_{n\\rightarrow\\infty}f(\\zeta_k)\\Delta z_k$$
            <p>曲线\\(C\\)称为积分路径.</p>
            <p>闭合的积分路径称为（积分）围道.</p>

            <p>一个复变积分实则为两个实变积分的有序组合：</p>
            $$\\begin{align}
            \\int_C f(z)\\mathrm{d}z &= \\int_C (u+iv)(\\mathrm{d}x + i\\mathrm{d}y)\\\\
                                   &= \\int_C (u\\mathrm{d}x - v\\mathrm{d}y) + i\\int_C (v\\mathrm{d}x + u\\mathrm{d}y)
            \\end{align}$$
        </div>


        <div id="PageEnd"></div>` },
  "note/math/complexvariablefunction/elementaryanalyticfunction": { title: "复变函数", content: `<h1>初等函数</h1>

        <div class="Card-Analysis">
            <h2>幂函数\\(z^n\\)</h2>
            <p>\\(n = 0,1,2,\\cdots\\)时，\\(z^n\\)在\\(\\mathbb{C}\\)内解析；且当\\(n=1,2,\\cdots\\)时，\\(z^n\\)在\\(z=\\infty\\)不解析.</p>
            <p>\\(n = -1,-2,\\cdots\\)时，\\(z^n\\)在\\(z=0\\)处不解析，在\\(\\infty\\)处与\\(\\mathbb{C}\\)内除\\(0\\)外的其他点均解析.</p>
    
            <b>导数</b>
            $$(z^n)' = nz^{n-1}$$
        
            <div class="Card-Definition">
                <b>\\(n\\)次多项式</b>
                $$P_n(z) = a_n z^n + a_{n-1}z^{n-1} + \\cdots + a_1z + a_0,~a_n\\neq 0$$
            </div>

            <div class="Card-Definition">
                <b>有理函数</b>
                $$R(z) = \\frac{P_n(z)}{Q_m(z)},~ Q_m(z) \\neq 0$$
            </div>
        </div>

        <div class="Card-Analysis">
            <h2>指数函数\\(e^z\\)</h2>
        </div>


        <a class="BackToTop" href="#PageHead">Top</a>
        <div class="PageEnd"></div>` },
  "note/math/complexvariablefunction/fouriertransform": { title: "复变函数", content: `<h1>傅里叶变换</h1>

        <div class="Card-Definition">
            <b>\\(f(x)\\)的傅里叶变换式</b>
            <p>设函数\\(f(t)\\)满足傅里叶积分定理条件，则表达式：</p>
            $$F(\\omega) = \\int_{-\\infty}^{+\\infty}f(t)e^{-i\\omega t}\\mathrm{d}t$$
            <p>为\\(f(t)\\)的傅里叶变换式，记为\\(F(\\omega) = F[f(t)]\\)，称函数\\(F(\\omega)\\)为\\(f(t)\\)的傅里叶变换.</p>
        </div>

        <div class="Card-Definition">
            <b>\\(F(\\omega)\\)的傅里叶逆变换式</b>
            $$f(t) = \\frac{1}{2\\pi}\\int_{-\\infty}^{+\\infty}F(\\omega)e^{i\\omega t}\\mathrm{d}\\omega$$
            <p>该表达式为\\(F(\\omega)\\)的傅里叶逆变换式，记作\\(f(t) = F^{-1}[F(\\omega)]\\)，称函数\\(f(t)\\)为\\(F(\\omega)\\)的傅里叶逆变换.</p>
        </div>

        <h2>傅里叶变换的性质</h2>
        <h3>线性性质</h3>
        $$F[k_1f_1(t) + k_2f_2(t)] = k_1F[f_1(t)] + k_2F[f_2(t)]$$
        $$F^{-1}[k_1F_1(\\omega) + k_2F_2(\\omega)] = k_1F^{-1}[F_1(\\omega)] + k_2F^{-1}[F_2(\\omega)]$$

        <h3>对称性质</h3>
        <div class="Formula">
            $$F(\\omega) = F[f(t)]\\Rightarrow F[F(t)] = 2\\pi f(-\\omega)$$
            <div class="Derivation">
                $$\\because F[f(t)] = \\int_{-\\infty}^{+\\infty}f(t)e^{-i\\omega t}\\mathrm{d}t$$
                $$\\therefore F[F(t)] = \\int_{-\\infty}^{+\\infty}F(t)e^{i\\omega t}\\mathrm{d}t$$
                $$\\because f(t) = \\int_{-\\infty}^{+\\infty}F(\\omega)e^{i\\omega t}\\mathrm{d}\\omega$$
                $$\\begin{align}
                \\therefore f(-\\omega) &= \\frac{1}{2\\pi}\\int_{-\\infty}^{+\\infty}F(x)e^{ix(-\\omega)}\\mathrm{d}x\\\\
                                      &= \\frac{1}{2\\pi}\\int_{-\\infty}^{+\\infty}F(t)e^{-i\\omega t}\\mathrm{d}t\\\\
                                      &= \\frac{1}{2\\pi}F[F(t)]
                \\end{align}$$
                $$\\therefore F[F(t)] = 2\\pi f(-\\omega)$$
            </div>
        </div>

        <div class="Card-Definition">
            <b>卷积</b>
            <p>给定定义在\\((-\\infty, +\\infty)\\)上的函数\\(f_1(t)\\)与\\(f_2(t)\\)，称</p>
            $$g(t) = \\int_{-\\infty}^{+\\infty}f_1(\\tau)f_2(t-\\tau)\\mathrm{d}\\tau$$
            <p>为函数\\(f_1(t)\\)与\\(f_2(t)\\)的卷积，记作</p>
            $$g(t) = f_1(t) * f_2(t)$$
        </div>

        <div class="Card-Analysis">
            <h2>卷积的性质</h2>
            <h3>交换性质</h3>
            $$f_1(t)*f_2(t) = f_2(t)*f_1(t)$$

            <h3>结合性质</h3>
            $$f_1(t)*[f_2(t)*f_3(t)] = [f_1(t)*f_2(t)]*f_3(t)$$

            <h3>线性性质</h3>
            $$[k_1f_1(t) + k_2f_2(t)]*g(t) = k_1f_1(t)g(t) + k_2f_2(t)g(t),~k_1,k_2\\in \\mathbb{C}$$

            <h3>平移不变性质</h3>
            $$f_1(t)*f_2(t) = g(t) \\Rightarrow f_1(t-\\alpha)*f_2(t-\\beta) = g(t-\\alpha-\\beta)$$

            <h3>坐标放缩性质</h3>
            $$f_1(t)*f_2(t) = g(t) \\Rightarrow f_1(at)*f_2(at) = \\frac{1}{|a|}g(at),~a\\neq 0$$
        </div>

        
        <div id="PageEnd"></div>
        <a class="GoToBottom" href="#PageEnd">Bottom</a>` },
  "note/math/complexvariablefunction/multivaluefunction": { title: "复变函数", content: `<h1>多值函数</h1>
        
        <div class="Card-Definition">
            <b>多值函数</b>
            <p>设有复数平面上的一个区域G，若给定G内的\\(z\\)值，有多个复数值\\(w\\)与之对应，则称\\(w = f(z)\\)为\\(z\\)的多值函数.</p>
            <p>[注]根式函数、对数函数、反三角函数均为多值函数.</p>
        </div>

        <div class="Card-Analysis">
            <h2>根式函数\\(\\sqrt{z-a}\\)</h2>
            <p>令</p>
            $$w = \\rho e^{i\\phi}$$
            $$z - a = re^{i\\theta}$$
            $$\\because w^2 = z - a$$
            $$\\therefore \\rho^2e^{2i\\phi} = re^{i\\theta}$$
            $$\\therefore \\begin{cases} \\rho^2 = r\\\\ 2\\phi = \\theta + 2n\\pi \\end{cases}\\Rightarrow \\begin{cases}\\rho = \\sqrt{r}\\\\\\phi = \\frac{\\theta}{2} + n\\pi\\end{cases},~n = 0,\\pm1,\\pm2,\\cdots$$
            <p>故对于一个给定的\\(z\\)值。有两个\\(w\\)值与之对应：</p>
            $$w_1(z) = \\sqrt{r}e^{i\\theta/2},~n = 0, \\pm2, \\cdots$$
            $$w_2(z) = \\sqrt{r}e^{i(\\pi + \\theta/2)} = -\\sqrt{r}e^{i\\theta/2},~n= \\pm1,\\pm3,\\cdots$$

            <p>可见：</p>
            <p>\\(w\\)的多值性来源于\\(z-a\\)辐角的多值性.</p>

            <div class="Card-Definition">
                <b>宗量</b>
                <p>引起多值性的\\(z-a\\).</p>
            </div>

            <p>\\(w = \\sqrt{z-a}\\)可以表示为：</p>
            $$|w| = \\sqrt{|z-a|}$$
            $$\\arg w = \\frac{1}{2}\\arg(z-a)$$
        </div>

        <div class="Card-Analysis">
            <h2>分支点</h2>
            <p>在\\(z\\)复平面画一个不经过\\(a\\)点的简单闭合曲线，即自身不相交的闭合曲线.</p>
            <p>研究自变量\\(z\\)从闭合曲线上某一点\\(z_0\\)出发，沿曲线逆时针连续运动一周回到\\(z_0\\)点时，\\(w\\)复平面内\\(w\\)值相应的连续变化情况.</p>
            <b>Caes 1</b>
            <p>当\\(a\\)在闭合曲线之外时：</p>
            $$\\arg'(z-a) = \\arg(z-a)$$
            $$\\begin{align}
            \\arg' w &= \\frac{1}{2}\\arg'(z-a)\\\\
                    &= \\frac{1}{2}\\arg(z-a)\\\\
                    &= \\arg w
            \\end{align}$$
            <p>即\\(w' = w\\).</p>
            <img src="Img/No1.gif" alt="" width="400"><br>

            <b>Case 2</b>
            <p>当\\(a\\)在闭合曲线之内时：</p>
            $$\\arg'(z-a) = \\arg(z-a) + 2\\pi$$
            $$\\begin{align}
            \\arg' w &= \\frac{1}{2}\\arg'(z-a)\\\\
                    &= \\frac{1}{2}\\arg(z-a) + \\pi\\\\
                    &\\neq \\arg w
            \\end{align}$$
            <p>即\\(w'\\neq w\\).</p>
            <img src="Img/No2.gif" alt="" width="300">

            <div class="Card-Definition">
                <b>分支点</b>
                <p>设\\(w(z)\\)在\\(z_0\\)点的空心邻域内每一点均有对应值，若对于\\(\\forall r\\gt 0\\)，当\\(z\\)绕圆周\\(|z-z_0 = r|\\)一圈回到原处时，\\(w\\)值不还原，则称\\(z_0\\)点为多值函数\\(w(0)\\)的分支点.</p>
                <p>[注]一个多值函数通常有多个分支点.</p>
            </div>

            <p>对于\\(w(z) = \\sqrt{z-a}\\)：</p>
            <p>\\(z = a\\)（Case 2）与\\(z = \\infty\\)为\\(w(z) = \\sqrt{z-a}\\)的分支点.</p>
            <p>\\(z = b \\neq a\\)均不是\\(w(z) = \\sqrt{z-a}\\)的分支点（Case 1中\\(b = O\\)的情形）.</p>

        </div>

        <div class="Card-Analysis">
            <h2>\\(w = \\sqrt{z-a}\\)的单值化</h2>
            <p>单值化的目的：研究解析性、连续性等性质.</p>
            <p>单值化的方法：将宗量\\(z-a\\)的辐角限制在某个\\(2\\pi\\)周期内.</p>

            <p>宗量辐角变化的各个周期，给出多值函数的各个单值分支，每个单值分支都是单值函数，整个多值函数就是它的各个单值分支的总和.</p>
            <p>e.g.多值函数\\(\\sqrt{z-a}\\)有两个单值分支，可以是：</p>
            <p>单值分支Ⅰ：</p>
            $$0 \\leq \\arg(z-a) \\lt 2\\pi \\Rightarrow 0\\leq \\arg w \\lt \\pi$$
            <p>单值分支Ⅱ：</p>
            $$2\\pi \\leq \\arg(z-a) \\lt 4\\pi \\Rightarrow \\pi\\leq \\arg w\\lt 2\\pi$$
            <p>[注]宗量辐角变化范围的规定不是唯一的.</p>


        </div>



        <div id="PageEnd"></div>` },
  "note/math/complexvariablefunction/plural": { title: "复变函数", content: `<h1>复数</h1>

        <div class="PageCatalog">
            <ul>
                <li><a href="#Plural">复数的定义</a></li>
                <li><a href="#Conjugation">共轭复数</a></li>
                <li><a href="#GeometricRepresentation">复数的几何表示</a></li>
                <li><a href="#ExponentialRepresentation">复数的指数表示</a></li>
            </ul>
        </div>

        
        <div class="Card-Analysis" id="Plural">
            <h2>复数的定义</h2>

            <div class="Card-Definition">
                <b>复数</b>
                <p>设\\(x,y\\in \\mathbb{R}\\)，则形如：</p>
                $$z = x + iy$$
                <p>的数称为复数.</p>
                <p>\\(i\\)为虚单位，有性质\\(i^2 = -1 \\Rightarrow 1/i = -i\\).</p>
                <p>\\(x\\)为复数的实部，记作\\(x = \\mathrm{Re}z\\).</p>
                <p>\\(y\\)为复数的虚部，记作\\(x = \\mathrm{Im}z\\).</p>
                <p>[注]一般情况下，复数无法比较大小.</p>
            </div>
            
            <div class="Card-Definition">
                <b>实数\\(\\mathbb{R}\\)</b>
                <p>虚部为\\(0\\)的复数，\\(\\mathbb{R}\\subset \\mathbb{C}\\).</p>
            </div>
    
            <div class="Card-Definition">
                <b>虚数（纯虚数）</b>
                <p>实部为\\(0\\)且虚部不为\\(0\\)的复数.</p>
            </div>
        </div>

        <div class="Card-Analysis" id="Conjugation">
            <h2>共轭复数</h2>

            <div class="Card-Definition">
                <b>共轭复数</b>
                <p>实部相等，虚部互为相反数的两个复数称为共轭复数.</p>
                <p>若一个复数记为\\(z\\)，则其共轭复数记为\\(\\overline{z}\\)</p>
                $$\\overline{x + iy} = x - iy$$
            </div>
    
            <div class="Card-Property">
                <b>共轭复数的性质</b>
                $$\\overline{\\overline{z}} = z$$
                $$\\overline{z_1 \\pm z_2} = \\overline{z_1} \\pm \\overline{z_2}$$
                $$\\overline{z_1\\cdot z_2} = \\overline{z_1}\\cdot \\overline{z_2}$$
                $$\\overline{\\left(\\frac{z_1}{z_2}\\right)} = \\frac{\\overline{z_1}}{\\overline{z_2}},~z_2\\neq0$$
            </div>
        </div>

        <div class="Card-Analysis" id="GeometricRepresentation">
            <h2>复数的几何表示</h2>
            <img src="./Img/p1.png" width="400">
            <p>对于\\(\\forall z = x+iy\\)，总有平面直角坐标系上一点\\(P(x,y)\\)与之对应.</p>
    
            <div class="Card-Definition">
                <b>复数的模</b>
                $$|z| = \\sqrt{x^2 + y^2}$$
            </div>
    
            <div class="Card-Property">
                <b>复数模的性质</b>
                $$|\\bar{z}| = |z|$$
                <div class="Formula">
                    $$|z|^2 = z\\cdot\\bar{z}$$
                    <div class="Derivation">
                        $$\\begin{align}
                        z\\cdot\\bar{z} &= (x + iy)(x-iy)\\\\
                                      &= x^2 + y^2\\\\
                                      &= |z|^2
                        \\end{align}$$
                    </div>
                </div>
            </div>

            <div class="Card-Definition">
                <b>复数的辐角</b>
                $$\\theta = \\arg z$$
                <p>[注]\\(z = 0\\)时，辐角不确定.</p>
            </div>

            <b>辐角的多值性</b>
            <p>\\(z\\neq 0\\)时，由于三角函数的周期性，导致复数的辐角并不唯一，其加上\\(2\\pi\\)的整数倍，仍表示同一个复数.</p>
            <p>通常把\\((-\\pi,\\pi]\\)之间的辐角值称为辐角的<b>主值</b>.</p>

        </div>

        <div class="Card-Analysis" id="ExponentialRepresentation">
            <h2>复数的指数表示</h2>
            <div class="Card-Formula" id="EulerFormula">
                <b>欧拉公式</b>
                <div class="Formula">
                    $$e^{ix} = \\cos{x} + i\\sin{x}$$
                    <div class="Derivation">
                        <p>由<a href="/note/math/mathematic/taylorformula" class="goto">泰勒公式</a>：</p>
                        $$\\begin{align}
                        \\sin x &= \\sum\\limits_{n=0}^\\infty (-1)^n\\frac{x^{2n+1}}{(2n+1)!}\\\\
                               &= \\sum\\limits_{n=0}^\\infty i^{2n}\\frac{x^{2n+1}}{(2n+1)!}\\\\
                               &= \\frac{1}{i}\\sum\\limits_{n=0}^\\infty \\frac{(ix)^{2n+1}}{(2n+1)!}\\\\
                               &= \\frac{1}{i}\\left[ix + \\frac{1}{3!}(ix)^3 + \\frac{1}{5!}(ix)^5 + \\cdots\\right]
                        \\end{align}$$
                        $$\\begin{align}
                        \\cos x &= \\sum\\limits_{n=0}^\\infty (-1)^n\\frac{x^{2n}}{(2n)!}\\\\
                               &= \\sum\\limits_{n=0}^\\infty i^{2n}\\frac{x^{2n}}{(2n)!}\\\\
                               &= \\sum\\limits_{n=0}^\\infty \\frac{(ix)^{2n}}{(2n)!}\\\\
                               &= 1 + \\frac{1}{2!}(ix)^2 + \\frac{1}{4!}(ix)^4 + \\cdots
                        \\end{align}$$
                        $$\\begin{align}
                        \\therefore \\cos x + \\sin x &= 1 + ix + \\frac{1}{2!}(ix)^2 + \\frac{1}{3!}(ix)^3 + \\cdots\\\\
                                                   &= \\sum_{n=0}^\\infty\\frac{1}{n!}(ix)^n
                        \\end{align}$$
                        $$\\because e^x = \\sum\\limits_{n=0}^\\infty\\frac{1}{n!}x^n$$
                        $$\\therefore \\cos x + i\\sin x = e^{ix}$$
                    </div>
                </div>
                
                <b>推导式</b>
                <div class="Formula">
                    $$\\cos x = \\frac{e^{ix} + e^{-ix}}{2}$$
                    <div class="Derivation">
                        $$\\begin{align}
                        \\frac{e^{ix} + e^{-ix}}{2} &= \\frac{\\cos x + i\\sin x + \\cos x - i\\sin x}{2}\\\\
                                                   &= \\cos x
                        \\end{align}$$
                    </div>
                </div>
    
                <div class="Formula">
                    $$\\sin x = \\frac{e^{ix} - e^{-ix}}{2i}$$
                    <div class="Derivation">
                        $$\\begin{align}
                        \\frac{e^{ix} - e^{-ix}}{2i} &= \\frac{\\cos x + i\\sin x - \\cos x + i\\sin x}{2i}\\\\
                                                    &= \\sin x
                        \\end{align}$$
                    </div>
                </div>
            </div>

            <div class="Card-Definition">
                <b>复数的指数表示</b>
                $$z = re^{i\\theta}$$
            </div>
            $$i = e^{i(\\pi/2 + 2k\\pi)}$$
            <p>通常应用于根式.</p>
        </div>

        <div id="PageEnd"></div>
        <a class="GoToBottom" href="#PageEnd">Bottom</a>` },
  "note/math/complexvariablefunction/region": { title: "复变函数", content: `<h1>区域</h1>

        <div class="Card-Definition">
            <b>复平面内的点集</b>
            <P>复平面内点的集合.</P>
        </div>

        <div class="Card-Definition">
            <b>内点</b>
            <p>以内点为圆心可作一圆，圆内所有点均属于点集.</p>
        </div>

        <div class="Card-Definition">
            <b>区域</b>
            <p>满足以下两个条件的点集：</p>
            <ul>
                <li>全部由内点组成.</li>
                <li>具有连通性：即点集中任意两点都可用一条折线连接，且折线上的点全属于此点集.</li>
            </ul>
        </div>

        <div class="Card-Definition">
            <b>扩充复平面\\(\\overline{\\mathbb{C}}\\)</b>
            <p>包含无穷远点的复平面.</p>
        </div>
        

        <div id="PageEnd"></div>
        <a class="GoToBottom" href="#PageEnd">Bottom</a>` },
  "note/math/geometry/catalog": { title: "几何学", content: `<h1>几何学</h1>
        <h2>目录</h2>
        <ul class="catalog">
            <h3>圆锥曲线</h3>
            <ul>
                <li><a href="/note/math/geometry/hyperbola">双曲线</a></li>
            </ul>
        </ul>` },
  "note/math/geometry/hyperbola": { title: "几何学", content: `<h1>双曲线</h1>

        <div class="Card-Definition">
            <b>双曲线</b>
            <p>平面内到两点距离差的绝对值为定值的点的轨迹.</p>
            $$\\left||PF_1| - |PF_2|\\right| = 2a$$
        </div>

        <div class="Card-Formula">
            <b>标准方程</b>
            $$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$$
        </div>



        <ul class="navibar">
            <li><a href="">上一页</a></li>
            <li class="catalog"><a href="/note/math/geometry/catalog">主页</a></li>
            <li class="next"><a href="">下一页</a></li>
        </ul>

        <div id="PageEnd"></div>
        <a class="GoToBottom" href="#PageEnd">Bottom</a>` },
  "note/math/linearalgebra/catalog": { title: "高等数学", content: `<h1>线性代数</h1>
        <h2>目录</h2>
        <ul class="catalog">
            <li><a href="/note/math/linearalgebra/determinant">行列式</a></li>
            <ul>
                <li><a href="/note/math/linearalgebra/specialdeterminant">特殊行列式</a></li>
            </ul>
            <li><a href="/note/math/linearalgebra/matrix">矩阵</a></li>
            <ul>
                <li><a href="/note/math/linearalgebra/matrix_inversematrix">逆矩阵</a></li>
                <li><a href="/note/math/linearalgebra/matrix_elementarytransformation">矩阵的初等变换</a></li>
                <li><a href="/note/math/linearalgebra/matrix_rank">矩阵的秩</a></li>
            </ul>
            <li><a href="/note/math/linearalgebra/systemoflinearequations">线性方程组</a></li>
            <li><a href="/note/math/linearalgebra/vector">向量</a></li>
            <ul>
                <li><a href="/note/math/linearalgebra/vector_lineardependence">向量组的线性相关性</a></li>
                <li><a href="/note/math/linearalgebra/vector_rank">向量组的秩</a></li>
                <li><a href="/note/math/linearalgebra/vector_space">向量空间</a></li>
            </ul>
        </ul>` },
  "note/math/linearalgebra/determinant": { title: "线性代数", content: `<h1>行列式</h1>

        <h2>二阶行列式</h2>
        $$D = 
        \\left |\\begin{matrix}
        a_{11} & a_{12}\\\\
        a_{21} & a_{22}
        \\end{matrix}\\right | = a_{11}a_{22} - a_{12}a_{21}$$


        <h2>三阶行列式</h2>
        $$D = \\left |\\begin{matrix}
        a_{11} & a_{12} & a_{13}\\\\
        a_{21} & a_{22} & a_{23}\\\\
        a_{31} & a_{32} & a_{33}    
        \\end{matrix}\\right | = a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32}- a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32}- a_{12}a_{21}a_{33}$$


        <hr>
        <h2>排列与逆序数</h2>
        <b>\\(n\\)级排列（排列）</b>
        <p>由自然数\\(1,2,\\cdots, n\\)组成的不重复的有确定次序的排列.</p>
        <p>\\(n\\)级排列共有\\(n!\\)个.</p>

        <b>逆序</b>
        <p>在一个\\(n\\)级排列\\(i_1i_2\\cdots i_s\\cdots i_t\\cdots i_n\\)中，若\\(i_s \\gt i_t\\)，则称\\(i_s\\)与\\(i_t\\)构成一个逆序.</p>

        <b>逆序数\\(\\tau(i_1i_2\\cdots i_n)\\)</b>
        <p>一个排列中逆序的总数.</p>

        <ul>
            <li><b>奇排列</b>：逆序数为奇数的排列.</li>
            <li><b>偶排列</b>：逆序数为偶数的排列.</li>
        </ul>

        <b>对换</b>
        <p>在排列中将任意两个数的位置互换，而其他数不动的操作.</p>

        <b>相邻对换</b>
        <p>将两个相邻的数进行对换.</p>

        <p>任意一个排列经过一个对换后，其奇偶性改变.</p>

        <hr>

        <h2>第三节 \\(n\\)阶行列式</h2>
        $$D = \\left |\\begin{matrix}a_{11} & a_{12} & \\cdots & a_{1n}\\\\a_{21} & a_{22} & \\cdots & a_{2n}\\\\ \\vdots & \\vdots & &\\vdots\\\\a_{n1} & a_{n2}& \\cdots & a_{nn}\\end{matrix}\\right | = \\sum -1^{\\tau(j_1j_2\\cdots j_n)}a_{1j_1}a_{2j_2}\\cdots a_{nj_n}$$

        <h2>第四节 行列式的性质</h2>
        <b>\\(D\\)的转置行列式\\(D^T(D')\\)</b>
        $$D = \\left |\\begin{matrix}a_{11} & a_{12} & \\cdots & a_{1n}\\\\a_{21} & a_{22} & \\cdots & a_{2n}\\\\ \\vdots & \\vdots & &\\vdots\\\\a_{n1} & a_{n2}& \\cdots & a_{nn}\\end{matrix}\\right | \\Rightarrow D^T = D' = \\left |\\begin{matrix}a_{11} & a_{21} & \\cdots & a_{n1}\\\\a_{12} & a_{22} & \\cdots & a_{n2}\\\\ \\vdots & \\vdots & &\\vdots\\\\a_{1n} & a_{2n}& \\cdots & a_{nn}\\end{matrix}\\right |$$

        <b>性质1</b>
        <p>行列式与其转置行列式相等，即\\(D = D'\\).</p>

        <b>性质2</b>
        <p>交换行列式的两行（列），行列式变号.</p>
        <p>交换\\(i,j\\)两行（列），通常记为\\(r_i\\leftrightarrow r_j(c_i \\leftrightarrow c_j)\\).</p>

        <b>推论</b>
        <p>行列式中有两行（列）对应元素完全相同\\(\\Rightarrow D = 0\\).</p>

        <b>性质3</b>
        <p>行列式某行（列）所有元素同时乘同一数\\(k\\)，则等于\\(kD\\).</p>
        <p>第\\(i\\)行（列）乘\\(k\\)，记为\\(r_i\\times k(c_i \\times k)\\).</p>

        <b>推论1</b>
        <p>行列式中某行（列）所有元素的公因子可提到行列式符号的外面.</p>
        <p>特别地，一行（列）元素全为\\(0\\)时，行列式为零.</p>

        <b>推论2</b>
        <p>行列式中某两行（列）元素对应成比例\\(\\Rightarrow D=0\\).</p>

        <b>性质4</b>
        $$D = \\left |\\begin{matrix}a_{11} & \\cdots & a_{1n}\\\\\\vdots & & \\vdots \\\\a_{i1} + a_{i1}' & \\cdots & a_{in} + a_{in}'\\\\ \\vdots  & &\\vdots\\\\a_{n1} & \\cdots & a_{nn}\\end{matrix}\\right | = \\left |\\begin{matrix}a_{11} & \\cdots & a_{1n}\\\\\\vdots & & \\vdots \\\\a_{i1} & \\cdots & a_{in} \\\\ \\vdots  & &\\vdots\\\\a_{n1} & \\cdots & a_{nn}\\end{matrix}\\right | + \\left |\\begin{matrix}a_{11} & \\cdots & a_{1n}\\\\\\vdots & & \\vdots \\\\a_{i1}' & \\cdots & a_{in}'\\\\ \\vdots  & &\\vdots\\\\a_{n1} & \\cdots & a_{nn}\\end{matrix}\\right | = D_1 + D_2$$

        <b>性质5</b>
        <p>行列式某行（列）各元素同时乘同一数后加到令一行（列）元素上，行列式不变.</p>


        <h2><a href="/note/math/linearalgebra/specialdeterminant">特殊行列式</a></h2>
        <hr>
        <h2>第五节 行列式按行（列）展开</h2>
        <b>元素\\(a_{ij}\\)的余子式</b>
        <p>划去元素\\(a_{ij}\\)所在的第\\(i\\)行与第\\(j\\)列，剩下的元素按原来的位置构成的\\(n-1\\)阶行列式.</p>

        <b>元素\\(a_{ij}\\)的代数余子式</b>
        $$A_{ij} = (-1)^{i+j}M_{ij}$$

        <b>按行/列展开</b>
        <p>行列式等于它的任一行（列）元素与其对应的代数余子式乘积之和.</p>
        $$D_n = \\sum\\limits_{k=1}^n a_{ik}A_{ik}(i = 1,2,\\cdots,n) = \\sum\\limits_{k=1}^n a_{kj}A_{kj}(j = 1,2,\\cdots,n)$$
        
        <b>推论</b>
        <p>行列式某一行（列）元素与另一行（列）对应元素的代数余子式之和为零.</p>
        $$\\sum\\limits_{k=1}^n a_{ik}A_{kj} = \\sum\\limits_{k=1}^n a_{kj}A_{ik} = 0(i\\neq j)$$

        <hr>
        <h2>克拉默法则</h2>
        <b>\\(n\\)元一次线性方程组</b>
        $$\\begin{cases}
        a_{11}x_1 + a_{12}x_2 + \\cdots + a_{1n}x_n = b_1\\\\
        a_{21}x_1 + a_{22}x_2 + \\cdots + a_{2n}x_n = b_2\\\\
        \\cdots\\\\
        a_{n1}x_1 + a_{n2}x_2 + \\cdots + a_{nn}x_n = b_n\\\\
        \\end{cases}$$

        <p>当常数项\\(b_1, b_2, \\cdots b_n\\)全为零时，称为<b>齐次线性方程组</b>.</p>
        <p>当常数项\\(b_1, b_2, \\cdots b_n\\)不全为零时，称为<b>非齐次线性方程组</b>.</p>

        <b>系数行列式</b>
        $$D = \\left |\\begin{matrix}a_{11} & a_{12} & \\cdots & a_{1n}\\\\a_{21} & a_{22} & \\cdots & a_{2n}\\\\ \\vdots & \\vdots & &\\vdots\\\\a_{n1} & a_{n2}& \\cdots & a_{nn}\\end{matrix}\\right |$$
        <p>\\(D \\neq 0 \\Rightarrow\\)线性方程组有唯一解.</p>
        $$x_j = \\frac{D_j}{D}, j=1,2,\\cdots, n$$


        <b>应用——二阶行列式</b>
        $$
        \\begin{cases}
        a_{11}x_1 + a_{12}x_2 = b_1\\\\
        a_{21}x_1 + a_{22}x_2 = b_2
        \\end{cases}
        $$
        $$D = \\left |\\begin{matrix}a_{11} & a_{12}\\\\a_{21} & a_{22}\\end{matrix}\\right |, D_1 = \\left |\\begin{matrix}b_1 & a_{12}\\\\b_2 & a_{22}\\end{matrix}\\right |, D_2 = \\left |\\begin{matrix}a_{11} & b_1\\\\a_{21} & b_2\\end{matrix}\\right |$$
        $$x_1 = \\frac{D_1}{D}, x_2 = \\frac{D_2}{D}$$

        <p>[注]行列式的项一定带正负号.</p>


        <h2>题型</h2>
        <h3>求解行列式</h3>
        <p>对于二阶行列式，直接求解.</p>
        <p>对于三阶以上行列式，求解方法有：</p>
        <ul>
            <li>特殊行列式求解</li>
            <li>利用性质将行列式化为主对角线行列式</li>
        </ul>

        <h3>\\(x\\)的系数</h3>
        <p>求\\(x\\)的代数余子式.</p>
        <b>求\\(x^n\\)的系数</b>
        <p>若同时存在多个\\(x\\)，则连续求含\\(x\\)项的代数余子式.</p>` },
  "note/math/linearalgebra/key": { title: "高等数学", content: `<h1>题型</h1>

        <h2>求\\(\\mathbf{A}^n\\)</h2>
        <h3>题目条件：\\(\\mathbf{A} = \\mathbf{\\alpha}\\mathbf{\\beta}\\)</h3>
        <p>思路：\\(\\mathbf{A}^n = (\\mathbf{\\alpha}\\mathbf{\\beta})^n = \\mathbf{\\alpha}(\\mathbf{\\beta}\\mathbf{\\alpha})^{n-1}\\mathbf{\\beta}\\)</p>
        <h3>题目条件：\\(\\left(\\begin{matrix}\\mathbf{X_1}\\\\&\\mathbf{X_2}\\\\&&\\ddots\\\\&&&\\mathbf{X}_t\\end{matrix}\\right)\\)</h3>
        <p>思路：\\(\\mathbf{A}^n = \\left(\\begin{matrix}\\mathbf{X_1}^n\\\\&\\mathbf{X_2}^n\\\\&&\\ddots\\\\&&&\\mathbf{X}_t^n\\end{matrix}\\right)\\)</p>


        <b>已知矩阵方程\\(f(\\mathbf{A})\\)，求\\(g(\\mathbf{A})\\)的逆矩阵</b>
        <p>思路：将\\(f(\\mathbf{A})\\)化为\\(g(\\mathbf{A})\\phi(\\mathbf{A}) = \\mathbf{E}\\)的形式，\\(\\phi(\\mathbf{A}) = g^{-1}(\\mathbf{A})\\)</p>
        <p>要点：\\(\\mathbf{A} = \\mathbf{A}\\mathbf{E}\\)</p>


        <h2>已知\\(R\\)，求未知数\\(k\\)</h2>
        <p>思路：通过基本行/列变换，化简矩阵，发现有\\(t\\)行/列无法依靠不含参数列继续化简.</p>
        <p>此时参数的值影响这些列能否被化简为0.</p>` },
  "note/math/linearalgebra/matrix": { title: "高等数学", content: `<h1>矩阵</h1>
        <h2>概念</h2>
        <b>矩阵（\\(m\\times n\\)矩阵）</b>
        <p>由\\(m\\times n\\)个数\\(a_{ij}(i = 1,2,\\cdots , m; j=1,2,\\cdots , n)\\)构成的\\(m\\)行\\(n\\)列的数表.</p>
        $$\\left (\\begin{matrix}a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots && \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn}\\end{matrix} \\right )$$
        <p>其中\\(a_{ij}\\)称为矩阵第\\(i\\)行第\\(j\\)列的元素.</p>

        <b>矩阵的表示方法</b>
        $$\\mathbf{A}$$
        $$\\mathbf{A}_{m\\times n}$$
        $$\\mathbf{A} = (a_{ij})_{m\\times n}$$

        <table>
            <tr>
                <td colspan="3">特殊形式的矩阵</td>
            </tr>
            <tr>
                <td>\\(n\\)阶矩阵（\\(n\\)阶方阵）</td>
                <td>行数与列数相等（\\(m = n\\)）</td>
                <td>$$\\left( \\begin{matrix} \\end{matrix}\\right)$$</td>
            </tr>
            <tr>
                <td>行矩阵</td>
                <td>行数为\\(1\\)（\\(m=1\\)）</td>
                <td>$$\\left( \\begin{matrix}a_{11}, a_{12}, \\cdots a_{1n}\\end{matrix}\\right)$$</td>
            </tr>
            <tr>
                <td>列矩阵</td>
                <td>列数为\\(1\\)（\\(n = 1\\)）</td>
                <td>$$\\left( \\begin{matrix}a_{11} \\\\ a_{21} \\\\ \\vdots \\\\ a_{m1}\\\\ \\end{matrix}\\right)$$</td>
            </tr>
            <tr>
                <td>零矩阵</td>
                <td>元素均为\\(0\\)的矩阵</td>
                <td>$$\\left( \\begin{matrix} \\end{matrix}\\right)$$</td>
            </tr>
            <tr>
                <td>同型矩阵</td>
                <td>两个矩阵的行数与列数相等</td>
                <td></td>
            </tr>
        </table>
        
        <table>
            <tr>
                <td colspan="2">特殊形式的方阵</td>
            </tr>
            <tr>
                <td>对角矩阵</td>
                <td>$$\\mathrm{diag}(\\lambda_1, \\lambda_2, \\cdots, \\lambda_n) = \\left( \\begin{matrix}\\lambda_1\\\\&\\lambda_2\\\\&&\\ddots\\\\&&&\\lambda_n\\end{matrix}\\right)$$</td>
            </tr>
            <tr>
                <td>数量矩阵</td>
                <td>$$\\left( \\begin{matrix}a\\\\&a\\\\&&\\ddots\\\\&&&a\\end{matrix}\\right)(a\\neq 0)$$</td>
            </tr>
            <tr>
                <td>单位矩阵</td>
                <td>$$\\left( \\begin{matrix}1\\\\&1\\\\&&\\ddots\\\\&&&1\\end{matrix}\\right)(a\\neq 0)$$</td>
            </tr>
            <tr>
                <td>上三角矩阵</td>
                <td></td>
            </tr>
            <tr>
                <td>下三角矩阵</td>
                <td></td>
            </tr>
            <tr>
                <td>对称矩阵</td>
                <td>\\(a_{ij} = a_{ji}(i,j = 1,2,\\cdots,n)\\)</td>
            </tr>
            <tr>
                <td>反称矩阵</td>
                <td>
                    $$a_{ij} = -a_{ji}(i,j = 0,1,\\cdots,n)$$
                    $$a_{ii} = -a_{ii}\\Rightarrow a_{ii} = 0(i=0,1,\\cdots,n)$$
                </td>
            </tr>
        </table>
        <p>[注]一阶方阵即为一个数.</p>
        
        
        <h2>矩阵运算</h2>
        <h3>矩阵的加法</h3>
        $$\\mathbf{A} + \\mathbf{B} = (a_{ij} + b_{ij})_{m\\times n} = \\left(\\begin{matrix}a_{11}+b_{11} & a_{12}+b_{12} & \\cdots & a_{1n}+b_{1n} \\\\ a_{21}+b_{21} & a_{22}+b_{22} & \\cdots & a_{2n}+b_{2n} \\\\ \\vdots & \\vdots && \\vdots \\\\ a_{m1}+b_{m1} & a_{m2}+b_{m2} & \\cdots & a_{mn}+b_{mn}\\end{matrix}\\right)$$

        <h3>矩阵的数乘</h3>
        $$k\\mathbf{A} = (ka_{ij})_{m\\times n} = \\left(\\begin{matrix}ka_{11}&ka_{12}&\\cdots&ka_{1n}\\\\ka_{21}&ka_{22}&\\cdots&ka_{2n}\\\\\\vdots&\\vdots&&\\vdots\\\\ka_{m1}&ka_{m2}&\\cdots&ka_{mn}\\end{matrix}\\right)$$
        
        <h3>矩阵的乘法</h3>
        <p>设\\(\\mathbf{C} = \\mathbf{A}\\mathbf{B}\\)，则\\(c_{ij} = \\sum\\limits_{k=1}^na_{ik}b_{kj}\\)</p>
        <p>[注]\\(\\mathbf{A}\\mathbf{B}\\)读作“\\(\\mathbf{A}\\)左乘\\(\\mathbf{B}\\)”或“\\(\\mathbf{B}\\)右乘\\(\\mathbf{A}\\)”</p>
        <p>[注]\\(\\mathbf{A}\\mathbf{B}\\neq \\mathbf{B}\\mathbf{A}\\)</p>
        <b>运算性质</b>
        <p>乘法结合律：\\((\\mathbf{A}\\mathbf{B})\\mathbf{C} = \\mathbf{A}(\\mathbf{B}\\mathbf{C})\\)</p>
        <p>数乘结合律：\\(k(\\mathbf{A}\\mathbf{B}) = (k\\mathbf{A})\\mathbf{B} = \\mathbf{A}(k\\mathbf{B})\\)</p>
        <p>左分配律：\\(\\mathbf{A}(\\mathbf{B}+\\mathbf{C}) = \\mathbf{A}\\mathbf{B} + \\mathbf{A}\\mathbf{C}\\)</p>
        <p>右分配律：\\((\\mathbf{B}+\\mathbf{C})\\mathbf{A} = \\mathbf{B}\\mathbf{A} + \\mathbf{C}\\mathbf{A}\\)</p>
        <p>\\(\\mathbf{A}\\mathbf{O} = \\mathbf{O}\\mathbf{A} = \\mathbf{O}\\)</p>
        <p>\\(\\mathbf{A}_{m\\times n}\\mathbf{E}_n = \\mathbf{E}_m\\mathbf{A}_{m\\times n} = \\mathbf{A}_{m\\times n}\\)</p>
        <p>若两个\\(n\\)阶方阵\\(\\mathbf{A},\\mathbf{B}\\)满足\\(\\mathbf{A}\\mathbf{B} = \\mathbf{B}\\mathbf{A}\\)，称方阵\\(\\mathbf{A}\\)与方阵\\(\\mathbf{B}\\)<b>可交换</b>.</p>
        <p>对于方阵\\(\\mathbf{A}\\)</p>
        $$\\mathbf{A}\\mathbf{E} = \\mathbf{E}\\mathbf{A} = \\mathbf{A}$$
        $$$$
        
        
        <h3>矩阵的转置 </h3>
        <p>将矩阵的行换为同序数的列得到的新矩阵称为转置矩阵.</p>
        <b>转置矩阵的性质</b>
        <p>\\((\\mathbf{A}^T)^T = A\\)</p>
        <p>\\((\\mathbf{A}_1 + \\mathbf{A}_2 + \\cdots + \\mathbf{A}_k)^T = \\mathbf{A}_1^T + \\mathbf{A_2}^T + \\cdots + \\mathbf{A}_k^T\\)</p>
        <p>\\((k\\mathbf{A})^T = k\\mathbf{A}^T\\)</p>
        <p>\\((\\mathbf{A}_1\\mathbf{A}_2\\cdots \\mathbf{A}_k)^T = \\mathbf{A}_k^T\\cdots \\mathbf{A}_2^T\\mathbf{A}_1^T\\)</p>
        <p>\\(|\\mathbf{A}^T| = |\\mathbf{A}|\\)</p>

        <p>\\(\\mathbf{A}\\)为对称矩阵\\(\\Leftrightarrow\\mathbf{A}^T = \\mathbf{A}\\)</p>
        <p>\\(\\mathbf{A}\\)为反对称矩阵\\(\\Leftrightarrow\\mathbf{A}^T = -\\mathbf{A}\\)</p>


        <h3>方阵的行列式</h3>
        <b>性质</b>
        <p>\\(|k\\mathbf{A}| = k^n|\\mathbf{A}|\\)</p>
        <p>\\(|\\mathbf{A}^T| = |\\mathbf{A}|\\)</p>
        <p>\\(|\\mathbf{A}^{-1}| = |\\mathbf{A}|^{-1}\\)</p>
        <p>\\(|\\mathbf{A}_1\\mathbf{A}_2\\cdots\\mathbf{A}_k| = |\\mathbf{A}_1||\\mathbf{A}_2|\\cdots|\\mathbf{A}_k| \\Rightarrow |\\mathbf{A}^k| = |\\mathbf{A}|^k\\)</p>


        <h2>分块矩阵</h2>
        $$\\mathbf{A} = \\left(\\begin{matrix}\\mathbf{A}_{11}&\\mathbf{A}_{12}&\\cdots&\\mathbf{A}_{1t} \\\\ \\mathbf{A}_{21}&\\mathbf{A}_{22}&\\cdots&\\mathbf{A}_{2t} \\\\ \\vdots&\\vdots&&\\vdots \\\\ \\mathbf{A}_{s1}&\\mathbf{A}_{s2}&\\cdots&\\mathbf{A}_{st}\\end{matrix}\\right)$$

        <h3>分块矩阵的加法</h3>
        <p>设矩阵\\(\\mathbf{B}\\)为矩阵\\(\\mathbf{A}\\)的同型矩阵，采用相同的分块法.</p>
        $$\\mathbf{B} = \\left(\\begin{matrix}\\mathbf{B}_{11}&\\mathbf{B}_{12}&\\cdots&\\mathbf{B}_{1t} \\\\ \\mathbf{B}_{21}&\\mathbf{B}_{22}&\\cdots&\\mathbf{B}_{2t} \\\\ \\vdots&\\vdots&&\\vdots \\\\ \\mathbf{B}_{s1}&\\mathbf{B}_{s2}&\\cdots&\\mathbf{B}_{st}\\end{matrix}\\right)$$
        $$\\mathbf{A} + \\mathbf{B} = \\left(\\begin{matrix}\\mathbf{A}_{11}+\\mathbf{B}_{11}&\\mathbf{A}_{12}+\\mathbf{B}_{12}&\\cdots&\\mathbf{A}_{1t}+\\mathbf{B}_{1t} \\\\ \\mathbf{A}_{21}+\\mathbf{B}_{21}&\\mathbf{A}_{22}+\\mathbf{B}_{22}&\\cdots&\\mathbf{A}_{2t}+\\mathbf{B}_{2t} \\\\ \\vdots&\\vdots&&\\vdots \\\\ \\mathbf{A}_{s1}+\\mathbf{B}_{s1}&\\mathbf{A}_{s2}+\\mathbf{B}_{s2}&\\cdots&\\mathbf{A}_{st}+\\mathbf{B}_{st}\\end{matrix}\\right)$$
    
        <h3>分块矩阵的数乘</h3>
        $$k\\mathbf{A} = \\left(\\begin{matrix}k\\mathbf{A}_{11}&k\\mathbf{A}_{12}&\\cdots&k\\mathbf{A}_{1t} \\\\ k\\mathbf{A}_{21}&k\\mathbf{A}_{22}&\\cdots&k\\mathbf{A}_{2t} \\\\ \\vdots&\\vdots&&\\vdots \\\\ k\\mathbf{A}_{s1}&k\\mathbf{A}_{s2}&\\cdots&k\\mathbf{A}_{st}\\end{matrix}\\right)$$

        <h3>分块矩阵的转置</h3>
        $$\\mathbf{A}^T = \\left(\\begin{matrix}\\mathbf{A}_{11}^T&\\mathbf{A}_{21}^T&\\cdots&\\mathbf{A}_{s1}^T \\\\ \\mathbf{A}_{12}^T&\\mathbf{A}_{22}^T&\\cdots&\\mathbf{A}_{s2}^T \\\\ \\vdots&\\vdots&&\\vdots \\\\ \\mathbf{A}_{1t}^T&\\mathbf{A}_{2t}^T&\\cdots&\\mathbf{A}_{st}^T\\end{matrix}\\right)$$

        <h2>分块对角矩阵</h2>
        $$\\mathbf{A} = \\left(\\begin{matrix}\\mathbf{A}_1 \\\\ &\\mathbf{A}_2 \\\\ &&\\ddots \\\\ &&&\\mathbf{A}_t\\end{matrix}\\right)$$
        
        <h3>分块对角矩阵的行列式</h3>
        $$|\\mathbf{A}| = |\\mathbf{A}_1||\\mathbf{A}_2|\\cdots|\\mathbf{A}_t|$$

        <h3>分块对角矩阵求逆</h3>
        <p>\\(\\mathbf{A}\\)可逆\\(\\Leftrightarrow |\\mathbf{A}_i|\\neq 0(i=1,2,\\cdots,t)\\)</p>
        $$\\mathbf{A}^{-1} = \\left(\\begin{matrix}\\mathbf{A}_1^{-1} \\\\ &\\mathbf{A}_2^{-1} \\\\ &&\\ddots \\\\ &&&\\mathbf{A}_t^{-1}\\end{matrix}\\right)$$

        <b>结论</b>
        <p>\\(\\alpha_i\\)为列向量.</p>
        $$(\\lambda_{11}\\alpha_1 + \\lambda_{21}\\alpha_2+\\cdots+\\lambda_{n1}\\alpha_n, \\lambda_{12}\\alpha_1 + \\lambda_{22}\\alpha_2+\\cdots+\\lambda_{n2}\\alpha_n, \\cdots, \\lambda_{1m}\\alpha_1 + \\lambda_{2m}\\alpha_2+\\cdots+\\lambda_{nm}\\alpha_n) = (\\alpha_1, \\alpha_2, \\cdots, \\alpha_n)\\left(\\begin{matrix}\\lambda_{11}&\\lambda_{12}&\\cdots&\\lambda_{1m}\\\\\\lambda_{21}&\\lambda_{22}&\\cdots&\\lambda_{2m}\\\\\\vdots&\\vdots&&\\vdots\\\\\\lambda_{n1}&\\lambda_{n2}&\\cdots&\\lambda_{nm}\\end{matrix}\\right)$$

        <h2>矩阵的秩</h2>
        <b>矩阵\\(\\mathbf{A}\\)的\\(k\\)阶子式</b>
        <p>在\\(m\\times n\\)矩阵\\(\\mathbf{A}\\)中，任取\\(k\\)行\\(k\\)列（\\(1\\leq k\\leq \\min\\{m,n\\}\\)），位于这些行列交叉处的\\(k^2\\)个元素按原次序组成的一个\\(k\\)阶行列式.</p>
        <p>在一个\\(m\\times n\\)矩阵中，共有\\(C_m^k\\cdot C_n^k\\)个\\(k\\)阶子式.</p>

        <b>利用初等变换求矩阵的秩</b>
        <p>初等变换不改变矩阵的秩，即\\(\\mathbf{A}\\cong\\mathbf{B}\\Rightarrow R(\\mathbf{A}) = R(\\mathbf{B})\\).</p>
        <p>矩阵左乘或右乘可逆矩阵，不改变矩阵的秩.</p>
        <p>矩阵的秩等于其行阶梯形矩阵中非零行的行数.</p>

        <b>矩阵秩的性质</b>
        <p>\\(0\\leq R(\\mathbf{A}_{m\\times n}) \\leq \\min\\{m,n\\}\\)</p>
        <p>\\(R(\\mathbf{A}^T) = R(\\mathbf{A})\\)</p>
        <p>\\(R(k\\mathbf{A}) = R(\\mathbf{A})(k\\neq 0)\\)</p>
        <p>\\(\\mathbf{A}_{n\\times n}\\)可逆\\(\\Leftrightarrow R(\\mathbf{A}) = n\\)</p>
        <p>\\(R(\\mathbf{A} + \\mathbf{B}) \\leq R(\\mathbf{A}) + R(\\mathbf{B})\\)</p>
        <p>\\(R(\\mathbf{A}\\mathbf{B}) \\leq \\min\\{R(\\mathbf{A}, \\mathbf{B})\\}\\)</p>
        <p>\\(\\mathbf{A}_{m\\times n}\\mathbf{B}_{n\\times l} = \\mathbf{O} \\Rightarrow R(\\mathbf{A}) + R(\\mathbf{B}) \\leq n\\)</p>` },
  "note/math/linearalgebra/matrix_elementarytransformation": { title: "高等数学", content: `<h1>矩阵的初等变换</h1>
        <h2>初等变换</h2>

        <table>
            <tr>
                <td colspan="2"><b>初等变换</b></td>
            </tr>
            <tr>
                <td rowspan="3">初等行变换</td>
                <td>交换矩阵的两行（交换\\(i,j\\)两行，记作\\(r_i \\leftrightarrow r_j\\)）</td>
            </tr>
            <tr>
                <td>以数\\(k\\neq 0\\)乘矩阵某一行（第\\(i\\)行乘数\\(k\\)，记作\\(kr_i\\)或\\(r_i\\times k\\)）</td>
            </tr>
            <tr>
                <td>将矩阵某行的\\(k\\)倍加到另一行上（第\\(j\\)行乘\\(k\\)加到第\\(i\\)行，记为\\(r_i + kr_j\\)）</td>
            </tr>
            <tr>
                <td>初等列变换</td>
                <td>将初等行变换定义中的“行”换成“列”，同时将符号\\(r\\)改为符号\\(c\\).</td>
            </tr>
        </table>
        <p>矩阵的初等行变换与初等列变换统称为矩阵的初等变换.</p>

        <div class="Card-Definition">
            <b>等价矩阵</b>
            <p>若矩阵\\(\\mathbf{A}\\)经过有限次初等变换得到矩阵\\(\\mathbf{B}\\)，称矩阵\\(\\mathbf{A}\\)与\\(\\mathbf{B}\\)等价，记作\\(\\mathbf{A}\\cong \\mathbf{B}.\\)</p>
        </div>
        <b>等价矩阵的性质</b>
        <p>自反性：\\(\\mathbf{A} \\cong \\mathbf{A}\\)</p>
        <p>对称性：\\(\\mathbf{A} \\cong \\mathbf{B} \\Leftrightarrow \\mathbf{B} \\cong \\mathbf{A}\\)</p>
        <p>传递性：\\(\\mathbf{A} \\cong \\mathbf{B}, \\mathbf{B} \\cong \\mathbf{C} \\Rightarrow \\mathbf{A} \\cong \\mathbf{C}\\)</p>

        <table>
            <tr>
                <td><b>行阶梯形矩阵</b></td>
                <td>仅初等行变换</td>
                <td class="tbtext">
                    <p>矩阵每行非零首元（左起第一个非零元素）下方元素均为0.</p>
                    <p>若存在零行（元素全为0的行），应位于矩阵最下方.</p>
                </td>
            </tr>
            <tr>
                <td><b>行最简形矩阵</b></td>
                <td>仅初等行变换</td>
                <td class="tbtext">
                    <p>非零行的非零首元均为1.</p>
                    <p>非零首元所在列其余元素均为0.</p>
                </td>
            </tr>
            <tr>
                <td><b>标准形矩阵</b></td>
                <td>仅初等列变换</td>
                <td class="tbtext"><p>左上角为单位矩阵，其他元素均为0.</p></td>
            </tr>
        </table>
        


        <b></b>
        

        <h2>初等矩阵</h2>
        <div class="Card-Definition">
            <b>初等矩阵</b>
            <p>对单位矩阵\\(\\mathbf{E}\\)进行一次初等变换所得的矩阵.</p>
            <p>对应三种初等变换，可以得到三种不同形式的初等矩阵.</p>
            <table>
                <tr>
                    <td><b>初等矩阵</b></td>
                </tr>
                <tr>
                    <td>交换\\(\\mathbf{E}\\)的\\(i,j\\)两行（列）所得的初等矩阵，记为\\(\\mathbf{E}(i,j)\\).</td>
                </tr>
                <tr>
                    <td>以非零数\\(k\\)乘\\(\\mathbf{E}\\)的第\\(i\\)行（列）所得的初等矩阵，记为\\(\\mathbf{E}(i(k))\\).</td>
                </tr>
                <tr>
                    <td>将\\(\\mathbf{E}\\)的第\\(j\\)行的\\(k\\)倍加到第\\(i\\)行（或将第\\(i\\)列的\\(k\\)倍加到第\\(j\\)列）上所得的初等矩阵，记作\\(\\mathbf{E}(i,j(k))\\).</td>
                </tr>
            </table>
        </div>

        <b>用初等矩阵表示初等变换</b>
        <p>矩阵\\(\\mathbf{A}\\)右乘初等矩阵，相当于对\\(\\mathbf{A}\\)做对应的初等行变换.</p>
        <p>矩阵\\(\\mathbf{A}\\)左乘初等矩阵，相当于对\\(\\mathbf{A}\\)做对应的初等列变换.</p>

        <a href="InverseMatrix.html#2"><b>初等矩阵求逆</b></a>




        <h2>初等变换的应用</h2>
        <h3>初等行变换求逆</h3>
        $$(\\mathbf{A}~\\vdots~\\mathbf{E}) \\rightarrow (\\mathbf{E}~\\vdots~\\mathbf{A}^{-1})$$

        <h3>初等行变换求矩阵方程</h3>
        $$\\mathbf{A}\\mathbf{X} = \\mathbf{B} \\Rightarrow \\mathbf{X} = \\mathbf{A}^{-1}\\mathbf{B}$$
        $$(\\mathbf{A}~\\vdots~\\mathbf{B})\\rightarrow (\\mathbf{E}~\\vdots~\\mathbf{A}^{-1}\\mathbf{B})$$

        <h3>初等列变换求矩阵方程</h3>
        $$\\mathbf{X}\\mathbf{A} = \\mathbf{B} \\Rightarrow \\mathbf{X} = \\mathbf{B}\\mathbf{A}^{-1}$$
        $$\\left( \\begin{matrix}\\mathbf{A}\\\\\\cdots \\\\\\mathbf{B}\\end{matrix}\\right) \\rightarrow \\left(\\begin{matrix}\\mathbf{E} \\\\ \\cdots \\\\ \\mathbf{B}\\mathbf{A}^{-1}\\end{matrix}\\right)$$






        <br><br><br>
        <br><br><br>
        <br><br><br>
        <br><br><br>
        <br><br><br>
        <br><br><br>
        <br><br><br>` },
  "note/math/linearalgebra/matrix_inversematrix": { title: "高等数学", content: `<h1>逆矩阵</h1>

        <h2>概念</h2>
        <div class="Card-Definition">
            <b>逆矩阵</b>
            <p>设\\(\\mathbf{A}\\)是\\(n\\)阶方阵，若存在一个\\(n\\)阶方阵\\(\\mathbf{B}\\)，使得\\(\\mathbf{A}\\mathbf{B} = \\mathbf{B}\\mathbf{A} = \\mathbf{E}\\)，则称矩阵\\(\\mathbf{A}\\)为可逆矩阵，矩阵\\(\\mathbf{B}\\)称为\\(\\mathbf{A}\\)的逆矩阵，记为\\(\\mathbf{A}^{-1}\\).</p>
        </div>
        <p>[注1]逆矩阵运算仅限于方阵.</p>
        <p>[注2]矩阵\\(\\mathbf{A}\\)的逆矩阵唯一.</p>

        <h2>逆矩阵存在的条件</h2>
        <b>伴随矩阵</b>
        $$\\mathbf{A}^* = \\left(\\begin{matrix}
        A_{11} & A_{21} & \\cdots & A_{n1}\\\\
        A_{12} & A_{22} & \\cdots & A_{n2}\\\\
        \\vdots & \\vdots & & \\vdots\\\\
        A_{13} & A_{23} & \\cdots & A_{33}
        \\end{matrix}\\right)$$
        <p>其中\\(A_{ij}\\)为\\(|\\mathbf{A}|\\)中元素\\(a_{ij}\\)的代数余子式.</p>
        $$\\mathbf{A}\\mathbf{A^*} = \\mathbf{A^*}\\mathbf{A} = |\\mathbf{A}|\\mathbf{E}$$

        <table>
            <tr><td colspan="2"><b>伴随矩阵的变换</b></td></tr>
            <tr>
                <td>$$\\mathbf{A}^* \\rightarrow \\mathbf{A}^{-1}$$</td>
                <td>$$\\mathbf{A}^* = |\\mathbf{A}|\\mathbf{A}^{-1}$$</td>
            </tr>
            <tr>
                <td>$$\\mathbf{A}^*\\rightarrow\\mathbf{A}$$</td>
                <td>$$\\mathbf{A} = |\\mathbf{A}|(\\mathbf{A}^*)^{-1}$$</td>
            </tr>
            <tr>
                <td>$$|\\mathbf{A}^*|\\rightarrow |\\mathbf{A}|$$</td>
                <td>$$|\\mathbf{A}^*| = |\\mathbf{A}|^{n-1}$$
                    <div class="Prove">
                        $$|\\mathbf{A}^*| = ||\\mathbf{A}|\\mathbf{A}^{-1}| = |\\mathbf{A}|^n\\frac{1}{|\\mathbf{A}|}$$
                    </div>
                </td>
            </tr>
        </table>

        <b>充分必要条件</b>
        <p>\\(n\\)阶方阵\\(\\mathbf{A}\\)可逆\\(\\Leftrightarrow|\\mathbf{A}|\\neq 0\\)</p>
        $$\\mathbf{A}^{-1} = \\frac{\\mathbf{A}^*}{|\\mathbf{A}|}$$
        <p>[注]\\(\\mathbf{A} = (a)\\Rightarrow \\mathbf{A}^{-1} = (\\frac{1}{a})\\)</p>

        <p>\\(|\\mathbf{A}| \\neq 0\\)，\\(\\mathbf{A}\\)为可逆矩阵，也称为<b>非奇异方阵</b>.</p>
        <p>\\(|\\mathbf{A}| = 0\\)，\\(\\mathbf{A}\\)为不可逆矩阵，也称为<b>奇异方阵</b>.</p>

        <div class="Card-Method">
            <h2>判断矩阵可逆的方法</h2>
            <h3>直接法</h3>
            <p>\\(|\\mathbf{A}| \\neq 0 \\Leftrightarrow \\mathbf{A}\\)可逆</p>
            <p>\\(|\\mathbf{A}| = 0 \\Leftrightarrow \\mathbf{A}\\)不可逆</p>
        </div>

        <h2>逆矩阵的性质</h2>
        <p>\\(\\mathbf{A}\\)可逆\\(\\Rightarrow\\mathbf{A}^{-1}\\)可逆，且\\((\\mathbf{A}^{-1})^{-1} = \\mathbf{A}\\).</p>
        <p>\\(\\mathbf{A}\\)可逆\\(\\Rightarrow\\mathbf{A}^T\\)可逆，且\\((\\mathbf{A}^T)^{-1} = (\\mathbf{A}^{-1})^{T}\\).</p>
        <p>\\(\\mathbf{A}\\)可逆，且\\(k\\neq 0\\)\\(\\Rightarrow k\\mathbf{A}\\)可逆，且\\((k\\mathbf{A})^{-1} = \\frac{\\mathbf{A}^{-1}}{k}\\).</p>
        <p>\\(\\mathbf{A}\\)可逆\\(\\Rightarrow |\\mathbf{A}^{-1}| = |\\mathbf{A}|^{-1}\\).</p>
        <p>\\(\\mathbf{A}_1, \\mathbf{A}_2, \\cdots \\mathbf{A}_n\\)均可逆\\(\\Rightarrow \\mathbf{A}_1\\mathbf{A}_2\\cdots\\mathbf{A}_n\\)可逆，且\\((\\mathbf{A}_1\\mathbf{A}_2\\cdots\\mathbf{A}_n)^{-1} = \\mathbf{A}_n^{-1}\\cdots\\mathbf{A}_2^{-1}\\mathbf{A}_1^{-1}\\).</p>


        <h2>一阶方阵求逆</h2>
        $$(a)^{-1} = (\\frac{1}{a}) = \\frac{1}{a}$$

        <h2>二阶方阵求逆</h2>
        $$\\mathbf{A}^{-1} = \\left(\\begin{matrix}a&b\\\\c&d\\end{matrix}\\right)^{-1} = \\frac{1}{|{\\mathbf{A}}|}\\left(\\begin{matrix}d&-b\\\\-c&a\\end{matrix}\\right)$$

        <h2>分块矩阵求逆</h2>
        $$\\left(\\begin{matrix}\\mathbf{A}&\\mathbf{O} \\\\ \\mathbf{O}&\\mathbf{B}\\end{matrix}\\right)^{-1} = \\left(\\begin{matrix}\\mathbf{A}^{-1}&\\mathbf{O} \\\\ \\mathbf{O}&\\mathbf{B}^{-1}\\end{matrix}\\right)$$
        $$\\left(\\begin{matrix}\\mathbf{O}&\\mathbf{A} \\\\ \\mathbf{B}&\\mathbf{O}\\end{matrix}\\right)^{-1} = \\left(\\begin{matrix}\\mathbf{O}&\\mathbf{B}^{-1} \\\\ \\mathbf{A}^{-1}&\\mathbf{O}\\end{matrix}\\right)$$
        $$\\left(\\begin{matrix}\\mathbf{A}&\\mathbf{O} \\\\ \\mathbf{C}&\\mathbf{B}\\end{matrix}\\right)^{-1} = \\left(\\begin{matrix}\\mathbf{A}^{-1}&\\mathbf{O} \\\\ -\\mathbf{B}^{-1}\\mathbf{C}\\mathbf{A}^{-1}&\\mathbf{B}^{-1}\\end{matrix}\\right)$$
        $$\\left(\\begin{matrix}\\mathbf{A}&\\mathbf{C} \\\\ \\mathbf{O}&\\mathbf{B}\\end{matrix}\\right)^{-1} = \\left(\\begin{matrix}\\mathbf{A}^{-1}&-\\mathbf{A}^{-1}\\mathbf{C}\\mathbf{B}^{-1} \\\\ \\mathbf{O}&\\mathbf{B}^{-1}\\end{matrix}\\right)$$

        <h2 id="2">初等矩阵求逆</h2>
        $$\\mathbf{E}(i,j)^{-1} = \\mathbf{E}(i,j)$$
        $$\\mathbf{E}(i(k))^{-1} = \\mathbf{E}(i(\\frac{1}{k}))$$
        $$\\mathbf{E}(i,j(k))^{-1} = \\mathbf{E}(i,j(-k))$$` },
  "note/math/linearalgebra/matrix_rank": { title: "高等数学", content: `<h1>矩阵的秩</h1>
        <b>矩阵\\(\\mathbf{A}\\)的\\(k\\)阶子式</b>
        <p>在\\(m\\times n\\)矩阵\\(\\mathbf{A}\\)中，任取\\(k\\)行\\(k\\)列（\\(1\\leq k\\leq \\min\\{m,n\\}\\)），位于这些行列交叉处的\\(k^2\\)个元素按原次序组成的一个\\(k\\)阶行列式.</p>
        <p>在一个\\(m\\times n\\)矩阵中，共有\\(C_m^k\\cdot C_n^k\\)个\\(k\\)阶子式.</p>
        
        <div class="Card-Theorem">
            $$\\mathbf{A}\\cong\\mathbf{B}\\Rightarrow R(\\mathbf{A}) = R(\\mathbf{B})$$
        </div>

        <div class="Card-Theorem">
            <p>矩阵左乘或右乘可逆矩阵，不改变矩阵的秩.</p>
        </div>

        <div class="Card-Method">
            <h2>求矩阵秩的方法</h2>
            <h3>直接法</h3>
            <p>矩阵的秩等于其行阶梯形矩阵中非零行的行数.</p>

            <h3>题目条件：初等变换</h3>
            <div class="TheoremQuote">
                $$\\mathbf{A}\\cong\\mathbf{B}\\Rightarrow R(\\mathbf{A}) = R(\\mathbf{B})$$
            </div>

            <h3>题目条件：矩阵运算</h3>
            <p>将矩阵化为\\(\\mathbf{A}\\mathbf{B}\\)的形式，并确定其中一个矩阵可逆.</p>
            <div class="TheoremQuote"><p>矩阵左乘或右乘可逆矩阵，不改变矩阵的秩.</p></div>
        </div>

        <b>利用初等变换求矩阵的秩</b>
        

        <b>矩阵秩的性质</b>
        <p>\\(0\\leq R(\\mathbf{A}_{m\\times n}) \\leq \\min\\{m,n\\}\\)</p>
        <p>\\(R(\\mathbf{A}^T) = R(\\mathbf{A})\\)</p>
        <p>\\(R(k\\mathbf{A}) = R(\\mathbf{A})(k\\neq 0)\\)</p>
        <p>\\(\\mathbf{A}_{n\\times n}\\)可逆\\(\\Leftrightarrow R(\\mathbf{A}) = n\\)</p>
        <p>\\(R(\\mathbf{A} + \\mathbf{B}) \\leq R(\\mathbf{A}) + R(\\mathbf{B})\\)</p>
        <p>\\(R(\\mathbf{A}\\mathbf{B}) \\leq \\min\\{R(\\mathbf{A}), R(\\mathbf{B})\\}\\)</p>
        <p>\\(\\mathbf{A}_{m\\times n}\\mathbf{B}_{n\\times l} = \\mathbf{O} \\Rightarrow R(\\mathbf{A}) + R(\\mathbf{B}) \\leq n\\)</p>` },
  "note/math/linearalgebra/specialdeterminant": { title: "线性代数", content: `<h1>特殊行列式</h1>
        <h2>主对角型行列式</h2>
        $$
            D = \\left |\\begin{matrix}a_{11} & 0 & \\cdots & 0\\\\0 & a_{22} & \\cdots & 0\\\\ \\vdots & \\vdots & &\\vdots\\\\0 & 0 & \\cdots & a_{nn}\\end{matrix}\\right |
              = \\left |\\begin{matrix}a_{11} & a_{12} & \\cdots & a_{1n}\\\\0 & a_{22} & \\cdots & a_{2n}\\\\ \\vdots & \\vdots & &\\vdots\\\\0 & 0 & \\cdots & a_{nn}\\end{matrix}\\right |
              = \\left |\\begin{matrix}a_{11} & 0 & \\cdots & 0\\\\a_{21} & a_{22} & \\cdots & 0\\\\ \\vdots & \\vdots & &\\vdots\\\\a_{n1} & a_{n2}& \\cdots & a_{nn}\\end{matrix}\\right |
              = a_{11}a_{22}\\cdots a_{nn}
        $$

        <h2>副对角型行列式</h2>
        $$
            D = \\left |\\begin{matrix} 0&\\cdots&0&a_{1n} \\\\ 0&\\cdots&a_{2,n-1}&0 \\\\ \\vdots&&\\vdots&\\vdots\\\\a_{n1}&\\cdots&0&0\\end{matrix}\\right |
              = \\left |\\begin{matrix} a_{11}&\\cdots&a_{1,n-1}&a_{1n} \\\\ a_{21}&\\cdots&a_{2,n-1}&0 \\\\ \\vdots&&\\vdots&\\vdots\\\\a_{n1}&\\cdots&0&0\\end{matrix}\\right |
              = \\left |\\begin{matrix} 0&\\cdots&0&a_{1n} \\\\ 0&\\cdots&a_{2,n-1}&a_{2n} \\\\ \\vdots&&\\vdots&\\vdots\\\\a_{nn}&\\cdots&a_{n,n-1}&a_{n1}\\end{matrix}\\right |
              = (-1)^{\\frac{n(n-1)}{2}}a_{1n}a_{2,n-1}\\cdots a_{n1}
        $$
        <div class="Prove">
            <p>逆序数法</p>
            <p>非零项仅有\\(a_{1n}a_{2,n-1},\\cdots,a_{n1}\\)</p>
            <p>逆序数\\(\\tau[n(n-1)\\cdots1] = \\frac{(1+n-1)(n-1)}{2} = \\frac{n(n-1)}{2}\\)</p>
            <p>故\\(D = (-1)^{\\frac{n(n-1)}{2}}a_{1n}a_{2,n-1}\\cdots a_{n1}\\)</p>
        </div>



        $$\\left | \\begin{matrix} \\mathbf{A} & \\mathbf{O} \\\\ \\mathbf{*}&\\mathbf{B}\\end{matrix} \\right | = \\left | \\begin{matrix} \\mathbf{A} & \\mathbf{*} \\\\ \\mathbf{O}&\\mathbf{B}\\end{matrix} \\right | = |\\mathbf{A}||\\mathbf{B}|$$
        $$\\left | \\begin{matrix} \\mathbf{O} & \\mathbf{A} \\\\ \\mathbf{B}&\\mathbf{*}\\end{matrix} \\right | = \\left | \\begin{matrix} \\mathbf{*} & \\mathbf{A} \\\\ \\mathbf{B}&\\mathbf{O}\\end{matrix} \\right | = (-1)^{mn}|\\mathbf{A}||\\mathbf{B}|$$
        
        $$\\left | \\begin{matrix}a&b&b&\\cdots&b \\\\ b&a&b&\\cdots&b \\\\ \\vdots&\\vdots&\\vdots&&\\vdots \\\\ b&b&b&\\cdots&a \\end{matrix}\\right | = [a+(n-1)b](a-b)^{n-1}$$
        <div class="Prove">
        $$\\begin{align}
        \\left | \\begin{matrix}a&b&b&\\cdots&b \\\\ b&a&b&\\cdots&b \\\\ \\vdots&\\vdots&\\vdots&&\\vdots \\\\ b&b&b&\\cdots&a \\end{matrix}\\right | &= \\left | \\begin{matrix}a+(n-1)b&b&b&\\cdots&b \\\\ a+(n-1)b&a&b&\\cdots&b \\\\ \\vdots&\\vdots&\\vdots&&\\vdots \\\\ a+(n-1)b&b&b&\\cdots&a \\end{matrix}\\right |\\\\
        &= [a+(n-1)b]\\left | \\begin{matrix}1&b&b&\\cdots&b \\\\ 1&a&b&\\cdots&b \\\\ \\vdots&\\vdots&\\vdots&&\\vdots \\\\ 1&b&b&\\cdots&a \\end{matrix}\\right |\\\\
        &= [a + (n-1)b]\\left | \\begin{matrix}1&b&b&\\cdots&b \\\\ 0&a-b&0&\\cdots&0 \\\\ \\vdots&\\vdots&\\vdots&&\\vdots \\\\ 0&0&0&\\cdots&a-b \\end{matrix}\\right |\\\\
        &= [a+(n-1)b](a-b)^{n-1}
        \\end{align}$$
        </div>

        <b>范德蒙德行列式</b>
        $$\\left | \\begin{matrix}1&1&1&\\cdots&1 \\\\ x_1&x_2&x_3&\\cdots&x_n \\\\ x_1^2&x_2^2&x_3^2&\\cdots&x_n^2 \\\\ \\vdots&\\vdots&\\vdots&&\\vdots \\\\x_1^{n-1}&x_2^{n-1}&x_3^{n-1}&\\cdots&x_n^{n-1}\\end{matrix}\\right | = \\prod\\limits_{1\\leq j\\lt i\\leq n}(x_i - x_j)$$` },
  "note/math/linearalgebra/systemoflinearequations": { title: "线性代数", content: `<h1>线性方程组</h1>
        <b>含\\(m\\)个方程，\\(n\\)个未知量的\\(n\\)元线性方程组</b>
        $$
        \\begin{cases}
        a_{11}x_1 + a_{12}x_2 + \\cdots + a_{1n}x_n = b_1\\\\
        a_{21}x_1 + a_{22}x_2 + \\cdots + a_{2n}x_n = b_n\\\\
        \\cdots\\cdots\\\\
        a_{m1}x_1 + a_{m2}x_2 + \\cdots + a_{mn}x_n = b_m
        \\end{cases}
        $$
        <table>
            <tr>
                <td>方程组的系数矩阵</td>
                <td>$$\\mathbf{A} = \\left(\\begin{matrix}a_{11}&a_{12}&\\cdots&a_{1n} \\\\ a_{21}&a_{22}&\\cdots&a_{2n} \\\\ \\vdots&\\vdots&&\\vdots \\\\ a_{m1}&a_{m2}&\\cdots&a_{mn}\\end{matrix}\\right)$$</td>
            </tr>
            <tr>
                <td>方程组的\\(n\\)元未知量矩阵</td>
                <td>$$\\mathbf{x} = \\left(\\begin{matrix}x_1\\\\x_2\\\\\\vdots\\\\x_n\\end{matrix}\\right)$$</td>
            </tr>
            <tr>
                <td>方程组的常数项矩阵</td>
                <td>$$\\mathbf{b} = \\left(\\begin{matrix}b_1\\\\b_2\\\\\\vdots\\\\b_n\\end{matrix}\\right)$$</td>
            </tr>
        </table>
        <table>
            <tr>
                <td></td>
                <td></td>
                <td>方程组的矩阵形式</td>
            </tr>
            <tr>
                <td><b>非齐次线性方程组</b></td>
                <td>$$\\mathbf{b} \\neq \\mathbf{O}$$</td>
                <td>$$\\mathbf{A}\\mathbf{x} = \\mathbf{b}$$</td>
            </tr>
            <tr>
                <td><b>齐次线性方程组</b></td>
                <td>$$\\mathbf{b} = \\mathbf{O}$$</td>
                <td>$$\\mathbf{A}\\mathbf{x} = \\mathbf{O}$$</td>
            </tr>
        </table>
        <b>方程组的增广矩阵</b>
        $$\\bar{\\mathbf{A}} = (\\mathbf{A}, \\mathbf{b}) = \\left(\\begin{matrix}a_{11}&a_{12}&\\cdots&a_{1n}&b_1 \\\\ a_{21}&a_{22}&\\cdots&a_{2n}&b_2 \\\\ \\vdots&\\vdots&&\\vdots&\\vdots \\\\ a_{m1}&a_{m2}&\\cdots&a_{mn}&b_n\\end{matrix}\\right)$$
        <p>[注]线性方程组唯一地由增广矩阵\\(\\bar{\\mathbf{A}}\\)确定，反之增广矩阵\\(\\bar{\\mathbf{A}}\\)也完全刻画了线性方程组.</p>
        <p>[注]\\(R(\\bar{\\mathbf{A}}) = R(\\mathbf{A})\\)或\\(R(\\bar{\\mathbf{A}}) = R(\\mathbf{A})+1\\)</p>

        <b>方程组的解</b>
        <p>若\\(x_1 = c_1, x_2 = c_2, \\cdots, x_n = c_n\\)可使方程组中的\\(m\\)个等式均成立，则称有序数组\\((c_1, c_2, \\cdots, c_n)\\)为方程组的一个解.</p>
        <p>方程组的所有解称为<b>方程组解的集合</b>.</p>
        <p>若两个方程组解的集合相同，称这两个方程组<b>同解</b>.</p>


        <b>线性方程组解的判定定理</b>
        <p>\\(R(\\mathbf{A}) \\lt R(\\mathbf{\\bar{\\mathbf{A}}})\\Leftrightarrow\\)无解.</p>
        <p>\\(R(\\mathbf{A}) = R(\\mathbf{\\bar{\\mathbf{A}}}) = n \\Leftrightarrow\\)有唯一解.</p>
        <p>\\(R(\\mathbf{A}) = R(\\mathbf{\\bar{\\mathbf{A}}}) = r \\lt n \\Leftrightarrow\\)有无穷多解.</p>


        <b>求解线性方程组的步骤</b>
        <p>对于线性方程组\\(\\mathbf{A}\\mathbf{x} = \\mathbf{b}\\)，写出增广矩阵\\(\\bar{\\mathbf{A}} = (\\mathbf{A}, \\mathbf{b})\\)，并将其化为行阶梯形矩阵，从\\(\\bar{\\mathbf{A}}\\)的行阶梯形矩阵中确定\\(R(\\mathbf{A})\\)和\\(R(\\bar{\\mathbf{A}})\\).</p>
        <p>若\\(R(\\mathbf{A})\\lt R(\\bar{\\mathbf{A}})\\)，则方程组无解.</p>
        <p>若\\(R(\\mathbf{A}) = R(\\bar{\\mathbf{A}}) = r\\)，则进一步将增广矩阵化为行最简形矩阵（与原方程组同解）.</p>
        <p>当\\(r = n\\)时，直接写出方程组的唯一解.</p>
        <p>当\\(r \\lt n\\)时，依据行最简形矩阵写出原方程组的同解方程组，将\\(r\\)个非零首元对应的未知量作为保留未知量，将剩下\\(n - r\\)个未知量作为自由未知量，即可得到方程组的全部解.</p>
        


        <h2>齐次线性方程组</h2>
        <b>齐次线性方程组解的判定定理</b>
        <p>\\(R(\\mathbf{A}) = n \\Leftrightarrow\\)仅有零解.</p>
        <p>\\(R(\\mathbf{A}) \\lt n \\Leftrightarrow\\)有无穷多解.</p>

        <div class="Prove">
            <p>由于齐次方程组的增广矩阵最后一列均为\\(0\\)，故在任何情况下都有\\(R(\\mathbf{A}) = R(\\bar{\\mathbf{A}})\\)，即齐次线性方程组恒有解，因为其至少有零解.</p>
        </div>
        
        <b>推论</b>
        <div class="Card-Theorem">
            <p>若\\(n\\)元齐次线性方程组的方程个数\\(m\\)小于未知数个数\\(n\\)，则其必有非零解.</p>
            <div class="Prove">
                $$R(\\mathbf{A}) \\leq m \\lt n$$
            </div>
        </div>

        <div class="Card-Theorem">
            <p>含\\(n\\)个方程\\(n\\)个未知数的齐次线性方程组有非零解\\(\\Leftrightarrow |\\mathbf{A}| = 0\\)</p>
            <div class="Prove">
                $$|\\mathbf{A}| = 0 \\Leftrightarrow R(\\mathbf{A})\\lt n$$
            </div>
        </div>

        <div class="Card-Method" id="Homo">
            <h2>齐次线性方程组解的判定</h2>

            <table>
                <tr>
                    <td></td>
                    <td>有非零解</td>
                    <td>仅有零解</td>
                </tr>
                <tr>
                    <td>$$m \\lt n$$</td>
                    <td colspan="2">必有非零解.</td>
                </tr>
                <tr>
                    <td>$$m = n$$</td>
                    <td>$$|\\mathbf{A}| = 0$$</td>
                    <td>$$|\\mathbf{A}| \\neq 0$$</td>
                </tr>
                <tr>
                    <td>$$m \\gt n$$</td>
                    <td>$$R(\\mathbf{A}) \\lt n$$</td>
                    <td>$$R(\\mathbf{A})  n$$</td>
                </tr>

            </table>
        </div>

        <h2>线性方程组解的结构</h2>
        <b>解（解向量）</b>
        <p>\\(n\\)元线性方程组的一组解\\(x_1 = c_1, x_2 = c_2, \\cdots, x_n = c_n\\)可以看作是一个\\(n\\)维向量\\(\\xi = (c_1, c_2, \\cdots, c_n)^T\\).</p>

        <h3>齐次线性方程组\\(\\mathbf{A}\\mathbf{x} = \\mathbf{0}\\)解的结构</h3>
        <div class="Card-Property">
            <p>若\\(\\xi_1, \\xi_2\\)是\\(\\mathbf{A}\\mathbf{x} = \\mathbf{0}\\)的两个解向量，那么\\(\\xi_1+\\xi_2\\)也是\\(\\mathbf{A}\\mathbf{x} = \\mathbf{0}\\)的解向量.</p>
            <div class="Prove">
                <p>\\(\\because \\xi_1, \\xi_2\\)是\\(\\mathbf{A}\\mathbf{x} = \\mathbf{0}\\)的两个解向量.</p>
                $$\\therefore \\begin{cases}
                \\mathbf{A}\\xi_1 = \\mathbf{0}\\\\
                \\mathbf{A}\\xi_2 = \\mathbf{0}
                \\end{cases}\\Rightarrow \\mathbf{A}(\\xi_1 + \\xi_2) = \\mathbf{0}$$
                <p>\\(\\therefore \\xi_1+\\xi_2\\)也是\\(\\mathbf{A}\\mathbf{x} = \\mathbf{0}\\)的解向量.</p>
            </div>
        </div>
        <div class="Card-Property">
            <p>若\\(\\xi\\)是\\(\\mathbf{A}\\mathbf{x} = \\mathbf{0}\\)的解向量，\\(k\\)为常数，那么\\(k\\xi\\)也是\\(\\mathbf{A}\\mathbf{x} = \\mathbf{0}\\)的解向量.</p>
            <div class="Prove">
                <p>\\(\\because \\xi\\)是\\(\\mathbf{A}\\mathbf{x} = \\mathbf{0}\\)的解向量.</p>
                $$\\therefore \\mathbf{A}(k\\xi) = k(\\mathbf{A}\\xi) = \\mathbf{0}$$
                <p>\\(\\therefore k\\xi\\)也是\\(\\mathbf{A}\\mathbf{x} = \\mathbf{0}\\)的解向量.</p>
            </div>
        </div>

        <p>由以上两个性质可以得出，若\\(\\xi_1, \\xi_2, \\cdots, \\xi_n\\)为\\(\\mathbf{A}\\mathbf{x} = \\mathbf{0}\\)的解向量，那么\\(\\xi_1, \\xi_2, \\cdots, \\xi_n\\)的线性组合也是\\(\\mathbf{A}\\mathbf{x} = \\mathbf{0}\\)的解向量.</p>
        <p>上述性质启发我们，可以找到有限个解，来表示齐次线性方程组的任意一解.</p>

        <div class="Card-Definition">
            <b>基础解系</b>
            <p>若\\(\\mathbf{A}\\mathbf{x} = \\mathbf{0}\\)有无穷多解，则其全部解向量组成的\\(n\\)维向量组的一个极大无关组</p>
            $$\\xi_1, \\xi_2, \\cdots, \\xi_t$$
            <p>称为\\(\\mathbf{A}\\mathbf{x} = \\mathbf{0}\\)的一个基础解系.</p>
        </div>
        <p>[注]：\\(\\mathbf{A}\\mathbf{x} = \\mathbf{0}\\)仅有零解时，无基础解系.</p>
        <p>[注]：\\(\\mathbf{A}\\mathbf{x} = \\mathbf{0}\\)有无穷多解时，基础解系不唯一.</p>

        <div class="Card-Definition">
            <b>齐次线性方程组\\(\\mathbf{A}\\mathbf{x} = \\mathbf{0}\\)的通解</b>
            $$\\eta = c_1\\xi_1 + c_2\\xi_2 + \\cdots + c_t\\xi_t$$
            <p>其中\\(c\\)为任意常数.</p>
        </div>

        <p>\\(R(\\mathbf{A}_{m\\times n}) = r\\)时，\\(t = n-r\\).</p>

        <div class="Card-Method">
            <h2>求齐次线性方程组基础解系及通解的方法</h2>
            <p>将齐次线性方程组的系数矩阵\\(\\mathbf{A}\\)化为行最简型矩阵.</p>
            <p>由最简型矩阵得到同解方程组以及\\(R(\\mathbf{A})\\).</p>
            <p>基础解系中解向量的个数\\(t = n - R(\\mathbf{A})\\).</p>
            <p>将同解方程组中\\(t\\)个未知量作为自由未知量，令其为\\(c_i\\)即可得到方程组通解，其中\\(c_i\\)为任意常数.</p>
            <p>将通解中的\\(c_i\\)提出，余下列向量即为方程组的一个基础解系.</p>
        </div>

        <h2>求满足基础解系的齐次线性方程组</h2>
        <p>已知基础解系\\(\\xi_i\\)，则\\(\\mathbf{A}\\xi_i = \\mathbf{0}\\).</p>
        <p>令\\(\\mathbf{A}\\)的行向量为\\(\\alpha\\)，有\\(\\alpha^T\\xi_i = 0\\)，构成一个齐次方程组.</p>
        <p>令该齐次方程组的系数矩阵为\\(\\mathbf{B} = \\left(\\begin{matrix}\\xi_1\\\\\\xi_2\\\\\\vdots\\\\\\xi_t\\end{matrix}\\right)\\).</p>
        <p>按此解出基础解系\\(\\alpha_1^T, \\alpha_2^T, \\cdots, \\alpha_t^T\\).</p>
        <p>\\(\\mathbf{A} = \\left(\\begin{matrix}\\alpha_1^T\\\\\\alpha_2^T\\\\\\vdots\\\\\\alpha_t^T\\end{matrix}\\right)\\)即为所求方程组的系数矩阵.</p>

        <div class="Card-Method">
            <h2>求满足基础解系的方程组</h2>
            $$\\mathbf{B} = \\left(\\begin{matrix}\\xi_1\\\\\\xi_2\\\\\\vdots\\\\\\xi_t\\end{matrix}\\right)$$
            <p>求得基础解系\\(\\alpha_1^T, \\alpha_2^T, \\cdots, \\alpha_t^T\\).</p>
            $$\\mathbf{A} = \\left(\\begin{matrix}\\alpha_1^T\\\\\\alpha_2^T\\\\\\vdots\\\\\\alpha_t^T\\end{matrix}\\right)$$
        </div>


        <h3>非齐次线性方程组\\(\\mathbf{A}\\mathbf{x} = \\mathbf{b}\\)解的结构</h3>

        <b>导出组（导出方程组）</b>
        <p>由非齐次线性方程组\\(\\mathbf{A}\\mathbf{x} = \\mathbf{b}\\)导出的齐次线性方程组\\(\\mathbf{A}\\mathbf{x} = \\mathbf{0}\\).</p>

        <div class="Card-Property">
            <p>若\\(\\gamma\\)为\\(\\mathbf{A}\\mathbf{x} = \\mathbf{b}\\)的一个解向量，\\(\\xi\\)是其导出组\\(\\mathbf{A}\\mathbf{x} = \\mathbf{0}\\)的一个解向量，那么\\(\\gamma + \\xi\\)也是\\(\\mathbf{A}\\mathbf{x} = \\mathbf{b}\\)的一个解向量.</p>
            <div class="Prove">
                <p>\\(\\gamma\\)为\\(\\mathbf{A}\\mathbf{x} = \\mathbf{b}\\)的一个解向量\\(\\Rightarrow \\mathbf{A}\\gamma = \\mathbf{b}\\)</p>
                <p>\\(\\xi\\)是其导出组\\(\\mathbf{A}\\mathbf{x} = \\mathbf{0}\\)的一个解向量\\(\\Rightarrow \\mathbf{A}\\xi = \\mathbf{0}\\)</p>
                $$\\therefore \\mathbf{A}(\\gamma + \\xi) = \\mathbf{b}$$
                <p>\\(\\therefore \\gamma + \\xi\\)也是\\(\\mathbf{A}\\mathbf{x} = \\mathbf{b}\\)的一个解向量.</p>
            </div>
        </div>
        <p>设\\(\\mathbf{A}\\mathbf{x} = \\mathbf{b}\\)中，\\(R(\\mathbf{A}) = R(\\bar{\\mathbf{A}}) = r \\lt n\\)；\\(\\gamma_0\\)是\\(\\mathbf{A}\\mathbf{x} = \\mathbf{b}\\)的一个特解；\\(\\xi_1, \\xi_2, \\cdots, \\xi_{n-r}\\)是其导出组\\(\\mathbf{A}\\mathbf{x} = \\mathbf{0}\\)的一个基础解系.</p>
        <p>由上述性质可知</p>
        $$\\gamma = \\gamma + c_1\\xi_1 + c_2\\xi_2 + \\cdots c_{n-r}\\xi_{n-r}$$
        <p>都是\\(\\mathbf{A}\\mathbf{x} = \\mathbf{b}\\)的解，其中\\(c_1, c_2, \\cdots, c_{n-r}\\)为任意常数.</p>

        <div class="Card-Property">
            <p>若\\(\\gamma_1, \\gamma_2\\)是\\(\\mathbf{A}\\mathbf{x} = \\mathbf{b}\\)的两个任意解向量，那么\\(\\gamma_1 - \\gamma_2\\)是其导出组\\(\\mathbf{A}\\mathbf{x} = \\mathbf{0}\\)的解向量.</p>
            <div class="Prove">
                <p>\\(\\because \\gamma_1, \\gamma_2\\)是\\(\\mathbf{A}\\mathbf{x} = \\mathbf{b}\\)的两个任意解向量.</p>
                $$\\therefore
                \\begin{cases}\\mathbf{A}\\gamma_1 = \\mathbf{b}\\\\
                \\mathbf{A}\\gamma_2 = \\mathbf{b}
                \\end{cases}\\Rightarrow
                \\mathbf{A}(\\gamma_1 - \\gamma_2) = \\mathbf{0}
                $$
                <p>\\(\\therefore\\gamma_1 - \\gamma_2\\)是其导出组\\(\\mathbf{A}\\mathbf{x} = \\mathbf{0}\\)的解向量.</p>
            </div>
        </div>
        <p>设\\(\\gamma\\)为\\(\\mathbf{A}\\mathbf{x} = \\mathbf{b}\\)的任一解.</p>
        <p>由上述性质可知</p>
        $$\\gamma - \\gamma_0 = c_1\\xi_1 + c_2\\xi_2 + \\cdots c_{n-r}\\xi_{n-r}$$
        <p>故\\(\\mathbf{A}\\mathbf{x} = \\mathbf{b}\\)的任一解\\(\\gamma\\)均可表示为</p>
        $$\\gamma = \\gamma_0 + c_1\\xi_1 + c_2\\xi_2 + \\cdots c_{n-r}\\xi_{n-r}$$

        <div class="Card-Definition">
            <b>非齐次线性方程组\\(\\mathbf{A}\\mathbf{x} = \\mathbf{b}\\)的通解</b>
            $$\\gamma = \\gamma_0 + c_1\\xi_1 + c_2\\xi_2 + \\cdots c_{n-r}\\xi_{n-r}$$
            <p>其中\\(\\gamma_0\\)为\\(\\mathbf{A}\\mathbf{x} = \\mathbf{b}\\)的一个特解，\\(c_1,c_2, \\cdots, c_{n-r}\\)为任意常数.</p>
        </div>

        <div class="Card-Method">
            <h2>求非齐次线性方程组的通解</h2>
            <p>将增广矩阵\\(\\bar{\\mathbf{A}}\\)初等变换为行最简型矩阵，得到同解方程.</p>
            <p>将非零首元对应未知量作为保留未知量，余下未知量作为自由未知量并赋值为\\(0\\)，解得保留未知量的值，得到特解\\(\\gamma_0\\).</p>
            <p>解出导出方程组的通解\\(c_1\\xi_1 + c_2\\xi_2 + \\cdots + c_t\\xi_t\\).</p>
            <p>非齐次线性方程组的通解为\\(\\gamma_0 + c_1\\xi_1 + c_2\\xi_2 + \\cdots + c_t\\xi_t\\).</p>
        </div>

        <div class="Ending">Ending...</div>` },
  "note/math/linearalgebra/vector": { title: "线性代数", content: `<h1>向量</h1>
        <div class="Card-Definition">
            <b>\\(n\\)维向量</b>
            <p>由\\(n\\)个数\\(a_1, a_2, \\cdots a_n\\)组成的有序数组</p>
            $$(a_1, a_2, \\cdots, a_n)~or~ \\left(\\begin{matrix}a_1\\\\a_2\\\\\\vdots\\\\a_n\\end{matrix}\\right)$$
            <p>其中第\\(i\\)个数\\(a_i(i=1,2,\\cdots,n)\\)称为\\(n\\)维向量的第\\(i\\)个分量.</p>
            
            <table>
                <tr>
                    <td rowspan="2">按元素类型分</td>
                    <td><b>\\(n\\)维实向量</b></td>
                    <td>分量全为实数的向量</td>
                </tr>
                <tr>
                    <td><b>\\(n\\)维复向量</b></td>
                    <td>含有复数的向量</td>
                </tr>
                <tr>
                    <td rowspan="2">按向量形状分</td>
                    <td><b>\\(n\\)维行向量</b></td>
                    <td>\\(1\\times n\\)矩阵</td>
                </tr>
                <tr>
                    <td><b>\\(n\\)维列向量</b></td>
                    <td>\\(n\\times1\\)矩阵</td>
                </tr>
                <tr>
                    <td colspan="2"><b>零向量</b></td>
                    <td>$$\\mathbf{0} = (0,0,\\cdots 0)^T$$</td>
                </tr>
                <tr>
                    <td colspan="2"><b>负向量</b></td>
                    <td>$$-\\mathbf{\\alpha} = (-a_1, -a_2, \\cdots, -a_n)^T$$</td>
                </tr>
            </table>
            <p>[注]行（列）向量的转置即为列（行）向量.</p>
            <p>[注]\\(\\alpha\\)与\\(\\alpha^T\\)常被视为不同向量.</p>
        </div>

        <h2>向量运算</h2>
        $$\\vec\\alpha = (a_1, a_2, \\cdots, a_n)^T$$
        $$\\vec\\beta = (b_1, b_2, \\cdots, b_n)^T$$
        <table>
            <tr>
                <td width="64">运算</td>
                <td colspan="2" width="50">公式</td>
                <td colspan="3">运算规律</td>
            </tr>
            <tr>
                <td rowspan="4"><b>向量加法</b></td>
                <td rowspan="4" colspan="2">$$\\vec\\alpha + \\vec\\beta = (a_1 + b_1, a_2 + b_2, \\cdots, a_n + b_n)^T$$</td>
                <td width="16">交换律</td>
                <td>$$\\alpha + \\beta = \\beta + \\alpha$$</td>
            </tr>

            <tr>
                <td>结合律</td>
                <td>$$\\alpha + (\\beta + \\gamma) = (\\alpha + \\beta) + \\gamma$$</td>
            </tr>
            <tr>
                <td colspan="2">$$\\alpha + \\mathbf{0} = \\mathbf{0} + \\alpha = \\alpha$$</td>
            </tr>
            <tr>
                <td colspan="2"><p>\\(\\alpha + (-\\alpha) = 0\\)</p></td>
            </tr>      
            <tr>
                <td rowspan="3"><b>向量数乘</b></td>
                <td rowspan="3" colspan="2">$$k\\alpha = (ka_1, ka_2, \\cdots, ka_n)^T$$</td>
                <td colspan="2">$$k(l\\alpha) = (kl)\\alpha$$</td>
            </tr>
            <tr>
                <td colspan="2">$$k(\\alpha + \\beta) = k\\alpha + k\\beta$$</td>
            </tr>
            <tr>
                <td colspan="2">$$(k+l)\\alpha = k\\alpha + l\\alpha$$</td>
            </tr>
            <tr>
                <td><b>点乘</b><br>（标量）</td>
                <td colspan="2">$$\\vec\\alpha\\cdot\\vec\\beta = \\sum\\limits_{i=1}^n a_ib_i = |\\vec a||\\vec b|\\cos\\theta$$</td>
                <td colspan="3"></td>
            </tr>
            <tr>
                <td rowspan="2"><b>叉乘</b><br>（矢量）</td>
                <td width="16">方向</td>
                <td class="tbtext">由右手法则决定，右手四指指向\\(\\vec\\alpha\\)，向\\(\\vec\\beta\\)弯曲，拇指所指方向即为结果方向。</td>
                <td rowspan="2" colspan="3"></td>
            </tr>
            <tr>
                <td width="16">大小</td>
                <td>$$\\vec\\alpha \\times \\vec \\beta = |\\vec a||\\vec b|\\sin\\theta$$</td>
            </tr>
        </table>        

        <h2>向量组的线性组合</h2>
        <p>给定一组向量\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_s\\)以及一个向量\\(\\beta\\)，若存在一组数\\(\\lambda_1, \\lambda_2, \\cdots, \\lambda_s\\)，使得</p>
        $$\\beta = \\lambda_1\\alpha_1 + \\lambda_2\\alpha_2 + \\cdots + \\lambda_s\\alpha_s$$
        <p>称\\(\\beta\\)可表示为\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_s\\)的线性组合.</p>
        <p>或称\\(\\beta\\)可由向量组\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_s\\)线性表示.</p>
        <p>其中，\\(\\lambda_1, \\lambda_2, \\cdots, \\lambda_s\\)称为组合系数.</p>
        <p>[注]零向量可以表示为任一向量组的线性组合，因为可以取其组合系数均为\\(0\\).</p>

        <b>定理</b>
        <p>向量\\(\\beta\\)可由向量组\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n\\)线性表示\\(\\Leftrightarrow \\mathbf{A} = (\\alpha_1, \\alpha_2, \\cdots, \\alpha_n)\\)的秩与\\(\\bar{\\mathbf{A}} = (\\alpha_1, \\alpha_2, \\cdots, \\alpha_n, \\beta)\\)的秩相等.</p>

        <p>任一\\(n\\)维向量\\(\\alpha = (a_1, a_2, \\cdots, a_n)^T\\)是\\(n\\)维向量组\\(\\epsilon_1 = (1,0,\\cdots,0)^T, \\epsilon_2 = (0,1,\\cdots,0)^T, \\cdots, \\epsilon_n = (0,0,\\cdots, 1)^T\\)的线性组合.</p>
        <div class="Prove">
            $$\\alpha = a_1\\epsilon_1 + a_2\\epsilon_2 + \\cdots + a_n\\epsilon_n$$
        </div>

        <p>向量组\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_s\\)中每个向量\\(\\alpha_i(i=1,2,\\cdots,s)\\)可由该向量组线性表示.</p>
        <div class="Prove">
            $$\\alpha_i = 0\\alpha_1 + \\cdots + 0\\alpha_{i-1} + 1\\alpha_i + 0\\alpha_{i+1} + \\cdots + 0\\alpha_s$$
        </div>

        <h3>题型</h3>
        <b>判断向量\\(\\beta\\)是否为\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n\\)的线性组合，若是，写出表达式.</b>
        <p>对矩阵\\(\\bar{\\mathbf{A}} = (\\alpha_1, \\cdots, \\alpha_n, \\beta)\\)实施初等行变换，化为行最简形矩阵.</p>
        <p>若\\(R(\\mathbf{A}) \\neq R(\\bar{\\mathbf{A}})\\)，则向量\\(\\beta\\)不是\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n\\)的线性组合.</p>
        <p>若\\(R(\\mathbf{A}) = R(\\bar{\\mathbf{A}})\\)，则增广矩阵的解即为系数.</p>


        <b>向量组的等价</b>
        <p>设有\\(n\\)维向量组</p>
        $$(Ⅰ):\\alpha_1, \\alpha_2, \\cdots, \\alpha_r$$
        $$(Ⅱ):\\beta_1, \\beta_2, \\cdots, \\beta_s$$
        <p>若向量组\\((Ⅰ)\\)中的每个向量\\(\\alpha_i(i=1,2,\\cdots, r)\\)均可有向量组\\((Ⅱ)\\)线性表示，即</p>
        $$
        \\begin{align}
        &\\alpha_1 = p_{11}\\beta_1 + p_{21}\\beta_2 + \\cdots + p_{s1}\\beta_s\\\\
        &\\alpha_2 = p_{12}\\beta_1 + p_{22}\\beta_2 + \\cdots + p_{s2}\\beta_s\\\\
        &\\cdots\\cdots\\\\
        &\\alpha_r = p_{1r}\\beta_1 + p_{2r}\\beta_2 + \\cdots + p_{sr}\\beta_s\\\\
        \\end{align}
        $$
        <p>称向量组\\((Ⅱ)\\)可由向量组\\(Ⅰ\\)线性表示</p>
        <p>矩阵表示为</p>
        $$
        (\\alpha_1, \\alpha_2, \\cdots, \\alpha_r) = (\\beta_1, \\beta_2, \\cdots, \\beta_s)\\left(\\begin{matrix}p_{11}&p_{12}&\\cdots&p_{1r}\\\\p_{21}&p_{22}&\\cdots&p_{2r}\\\\\\vdots&\\vdots&&\\vdots\\\\p_{s1}&p_{s2}&\\cdots&p_{sr}\\end{matrix}\\right)
        $$
        <p>记</p>
        $$\\mathbf{P} = \\left(\\begin{matrix}p_{11}&p_{12}&\\cdots&p_{1r}\\\\p_{21}&p_{22}&\\cdots&p_{2r}\\\\\\vdots&\\vdots&&\\vdots\\\\p_{s1}&p_{s2}&\\cdots&p_{sr}\\end{matrix}\\right)$$
        则
        $$(\\alpha_1, \\alpha_2, \\cdots, \\alpha_r) = (\\beta_1, \\beta_2, \\cdots, \\beta_s)\\mathbf{P}$$
        <p>称\\(\\mathbf{P}\\)为向量组\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_r\\)关于向量组\\(\\beta_1, \\beta_2, \\cdots, \\beta_s\\)的<b>表示矩阵</b>.</p>

        <div class="Card-Definition">
            <b>等价</b>
            <p>若向量组Ⅰ可由向量组Ⅱ线性表示，且向量组Ⅱ也可由向量Ⅰ线性表示，那么称向量组Ⅰ与向量组Ⅱ<b>等价</b>.</p>
        </div>

        <div class="Card-Property">
            <b>反身性</b>
            <p>每一个向量组与自身等价.</p>
        </div>

        <div class="Card-Property">
            <b>对称性</b>
            <p>向量组Ⅰ与向量组Ⅱ等价\\(\\Leftrightarrow\\)向量组Ⅱ与向量组Ⅰ等价.</p>
        </div>

        <div class="Card-Property">
            <b>传递性</b>
            <p>向量组Ⅰ与向量组Ⅱ等价，向量组Ⅱ与向量组Ⅲ等价\\(\\Leftrightarrow\\)向量组Ⅰ与向量组Ⅲ等价.</p>
        </div>




        <h2>向量的内积</h2>
        <div class="Card-Definition">
            <b>向量的内积</b>
            $$\\alpha = (x_1, x_2, \\cdots, x_n)^T$$
            $$\\beta = (y_1, y_2, \\cdots, y_n)^T$$
            $$(\\alpha, \\beta) = \\alpha^T\\beta = x_1y_1 + x_2y_2 + \\cdots + x_ny_n$$
            <p>称\\((\\alpha, \\beta)\\)为向量\\(\\alpha\\)与向量\\(\\beta\\)的内积.</p>
        </div>

        <div class="Card-Property">
            $$(\\alpha, \\beta) = (\\beta, \\alpha)$$
            $$(\\lambda\\alpha, \\beta) = \\lambda(\\alpha, \\beta)$$
            $$(\\alpha + \\beta, \\gamma) = (\\alpha, \\gamma) + (\\beta, \\gamma)$$
            $$\\alpha=\\mathbf{0}\\Rightarrow(\\alpha, \\alpha) = 0, \\alpha\\neq \\mathbf{0} \\Rightarrow (\\alpha, \\alpha)\\gt 0$$
        </div>

        <b>柯西-施瓦茨不等式</b>
        $$(\\alpha, \\beta)^2 \\leq (\\alpha, \\alpha)(\\beta, \\beta)$$

        <h3>向量的长度和夹角</h3>
        <div class="Card-Definition">
            <b>向量的长度</b>
            $$\\|\\alpha\\| = \\sqrt{(\\alpha, \\alpha)} = \\sqrt{x_1^2 + x_2^2 + \\cdots + x_n^2}$$
        </div>

        <div class="Card-Definition">
            <b>单位向量</b>
            <p>\\(\\|\\alpha\\| = 1\\)的向量\\(\\alpha\\).</p>
        </div>

        <div class="Card-Definition">
            <b>向量标准化（单位化）</b>
            <p>对于非零向量\\(\\alpha\\)，\\(e = \\frac{\\alpha}{\\|a\\|}\\)为单位向量.</p>
        </div>

        <div class="Card-Property">
            $$\\|\\lambda \\alpha\\| = |\\lambda|\\|\\alpha\\|$$
        </div>

        <div class="Card-Definition">
            <b>向量的夹角</b>
            <p>\\(\\alpha \\neq \\mathbf{0}, \\beta \\neq \\mathbf{0}\\)时</p>
            $$\\cos \\theta = \\frac{(\\alpha, \\beta)}{\\|\\alpha\\|\\|\\beta\\|}(0\\leq \\theta\\leq \\pi)$$
            <p>称\\(\\theta\\)为\\(\\alpha\\)与\\(\\beta\\)的夹角.</p>
        </div>

        <div class="Card-Definition">
            <b>正交</b>
            <p>\\((\\alpha,\\beta) = 0\\)时，称\\(\\alpha\\)与\\(\\beta\\)正交，记作\\(\\alpha \\perp \\beta\\).</p>
        </div>
        <p>[注]对于任意向量\\(\\alpha\\)，总有\\((\\alpha, \\mathbf{0}) = \\mathbf{0}\\)，故零向量与任何向量都正交.</p>

        <div class="Card-Definition">
            <b>正交向量组</b>
            <p>若\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n\\)为一个非零向量组，且其中的向量两两正交，则称其为正交向量组.</p>
        </div>

        <div class="Card-Definition">
            <b>正交规范向量组（标准正交向量组）</b>
            <p>所有向量均为单位向量的正交向量组.</p>
        </div>

        <b>定理</b>
        <p>正交向量组线性无关.</p>

        <div class="Card-Definition">
            <b>特征值与特征向量</b>
            <p>设\\(\\mathbf{A}\\)为\\(n\\)阶矩阵，若数\\(\\lambda\\)和\\(n\\)维非零列向量\\(\\alpha\\)满足</p>
            $$\\mathbf{A}\\alpha = \\lambda\\alpha$$
            <p>称数\\(\\lambda\\)为方阵\\(\\mathbf{A}\\)的特征值.</p>
            <p>非零列向量\\(\\alpha\\)为\\(\\mathbf{A}\\)对应于特征值\\(\\lambda\\)的特征向量.</p>
        </div>
        <p>上式也可写成</p>
        $$(\\lambda\\mathbf{E} - \\mathbf{A})\\alpha = \\mathbf{0}$$
        <p>这说明\\(\\alpha\\)是齐次线性方程组\\((\\lambda\\mathbf{E} - \\mathbf{A})\\mathbf{x} = \\mathbf{0}\\)的非零解.</p>
        <p>方程组\\((\\lambda\\mathbf{E} - \\mathbf{A})\\mathbf{x} = \\mathbf{0}\\)有非零解的充分必要条件为\\(|\\lambda\\mathbf{E} - \\mathbf{A}| = 0\\)</p>
        
        <div class="Card-Definition">
            <b>矩阵\\(\\mathbf{A}\\)的特征多项式</b>
            $$f(\\lambda) = |\\lambda\\mathbf{E} = \\mathbf{A}|$$
            
            <b>矩阵\\(\\mathbf{A}\\)的特征方程</b>
            $$f(\\lambda) = |\\lambda\\mathbf{E} = \\mathbf{A}| = 0$$
        </div>
        
        <div class="Card-Method">
            <h2>求矩阵特征值与特征向量的方法</h2>
            <b>特征值</b>
            $$f(\\lambda) = |\\lambda \\mathbf{E} - \\mathbf{A}| = 0 \\Rightarrow \\lambda_i$$
            <b>特征向量</b>
            $$(\\lambda_i \\mathbf{E} - \\mathbf{A})\\alpha = 0 \\Rightarrow \\alpha$$
        </div>
        <p>[注]\\(\\lambda\\)需标注（\\(k\\)重），一重可以省略不写.</p>
        <p>[注]\\(\\alpha\\)的通解中\\(k_i\\)不同时为\\(0\\).</p>

        <div class="Card-Definition">
            <b>方阵的迹</b>
            <p>方阵主对角线上的元素之和</p>
            $$Tr(\\mathbf{A}) = a_{11} + a_{22} + \\cdots + a_{nn}$$
        </div>

        <div class="Card-Property">
            <b>方阵特征值的性质</b>
            <p>\\(n\\)阶方阵\\(\\mathbf{A}\\)的特征值为\\(\\lambda_1, \\lambda_2, \\cdots, \\lambda_n\\)（包含重根）.</p>
            $$\\sum\\limits_{i=1}^n\\lambda_i = Tr(\\mathbf{A})$$
            $$\\lambda_1\\lambda_2\\cdots\\lambda_n = |\\mathbf{A}|$$
        </div>

        <div class="Card-Theorem">
            <p>\\(n\\)阶方阵可逆\\(\\Leftrightarrow \\lambda_i\\neq 0(i=1,2,\\cdots, n )\\)</p>
        </div>

        <div class="Card-Theorem">
            <p>\\(n\\)阶方阵\\(\\mathbf{A}\\)与\\(\\mathbf{A}^T\\)具有相同的特征值.</p>
        </div>

        <div class="Card-Theorem">
            <p>\\(\\lambda\\)为\\(n\\)阶方阵\\(\\mathbf{A}\\)的特征值，\\(k,m\\in \\mathbb{N}^+\\)，则</p>
            <p>\\(\\lambda^k\\)为\\(\\mathbf{A}^k\\)的特征值.</p>
            <p>\\(f(\\lambda) = a_0\\lambda^m + a_1\\lambda^{m-1} + \\cdots + a_{m-1}\\lambda + a_m\\)是\\(f(\\mathbf{A}) = a_0\\mathbf{A}^m + a_1\\mathbf{A}^{m-1}+\\cdots+a_{m-1}\\mathbf{A} + a_m\\mathbf{E}\\)的特征值.</p>
        </div>

        <div class="Card-Theorem">
            <p>\\(\\lambda\\)为可逆方阵\\(\\mathbf{A}\\)的特征值，则</p>
            <p>\\(1/\\lambda\\)为\\(\\mathbf{A}^{-1}\\)的特征值.</p>
            <p>\\(|\\mathbf{A}|/\\lambda\\)为\\(\\mathbf{A}^*\\)的特征值.</p>
        </div>

        <div class="Card-Theorem">
            <p>若\\(\\mathbf{p}_1, \\mathbf{p}_2, \\cdots, \\mathbf{p}_m\\)是\\(n\\)阶方阵\\(\\mathbf{A}\\)属于互不相同特征值\\(\\lambda_1, \\lambda_2, \\cdots, \\lambda_m\\)的特征向量，则\\(\\mathbf{p}_1, \\mathbf{p}_2, \\cdots, \\mathbf{p}_m\\)线性无关.</p>
        </div>` },
  "note/math/linearalgebra/vector_lineardependence": { title: "线性代数", content: `<h2>向量组的线性相关性</h2>
        
        <div class="Card-Definition">
            <b>线性相关与线性无关</b>
            <p>设\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_s\\)为\\(s\\)个\\(m\\)维向量，若存在不全为\\(0\\)的数\\(k_1, k_2, \\cdots, k_s\\)，使得</p>
            $$k_1\\alpha_1 + k_2\\alpha_2 + \\cdots + k_s\\alpha_s = 0$$
            <p>称向量组\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_s\\)<b>线性相关</b>.</p>
            <p>否则，称向量组\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_s\\)<b>线性无关</b>.</p>
        </div>

        <b>结论</b>
        <p>一个向量\\(\\alpha\\)线性相关\\(\\Leftrightarrow \\alpha=0\\).</p>
        <p>向量组\\(\\alpha_1, \\alpha_2\\)线性相关\\(\\Leftrightarrow \\alpha_1, \\alpha_2\\)成比例.</p>
        <p>含有零向量的向量组必线性相关.</p>
        <p>由\\(n\\)个\\(n\\)维单位向量</p>
        $$\\epsilon_1 = (1,0,\\cdots,0)^T, \\epsilon_2 = (0,1,\\cdots,0)^T, \\cdots, \\epsilon_n = (0,0,\\cdots, 1)^T$$
        <p>组成的向量组线性无关.</p>
        <div class="Prove">
            <p>设</p>
            $$k_1\\epsilon1 + k_2\\epsilon_2 + \\cdots + k_n\\epsilon_n = \\mathbf{0}$$
            $$\\therefore (k_1, k_2, \\cdots, k_n)^T = (0,0,\\cdots,0)^T$$
            $$\\therefore k_1 = k_2 = \\cdots = k_n = 0$$
            <p>故向量组\\(\\epsilon_1, \\epsilon_2, \\cdots, \\epsilon_n\\)线性无关.</p>
        </div>

        <p>向量组\\(\\alpha_1, \\alpha_2, \\alpha_3\\)线性无关\\(\\Leftrightarrow\\)向量组\\(\\alpha_1 + \\alpha_2, \\alpha_1 + \\alpha_3, \\alpha_2 + \\alpha_3\\)线性无关.</p>

        <h2>向量组线性相关性的判定</h2>

        <b>由<a class="goto" href="./SystemOfLinearEquations.html#Homo">齐次线性方程组解的情况</a>判定向量组的线性相关性</b>
        <p>对于向量组\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n\\)</p>
        $$\\mathbf{A} = (\\alpha_1, \\alpha_2, \\cdots, \\alpha_n)$$

        <p>以\\(\\mathbf{A}\\)为系数矩阵的齐次方程组存在非零解时，向量组线性相关.</p>
        <p>以\\(\\mathbf{A}\\)为系数矩阵的齐次方程组仅有零解时，只有\\(0\\alpha_1 + 0\\alpha_2 + \\cdots + 0\\alpha_n = 0\\)成立，向量组线性无关.</p>

        <div class="Card-Method">
            <h2>向量组线性相关性的判定</h2>
            <h3>由<a class="goto" href="./SystemOfLinearEquations.html#Homo">齐次线性方程组解的情况</a>判定</h3>
            <p>线性相关\\(\\Leftrightarrow\\)有非零解.</p>
            <p>线性无关\\(\\Leftrightarrow\\)仅有零解.</p>
        </div>

        <div class="Card-Property">
            <p>对于向量数大于\\(1\\)的向量组：</p>
            <p>向量组线性相关\\(\\Leftrightarrow\\)向量组中至少存在一个向量可由其他向量线性表示.</p>
            <p>向量组线性无关\\(\\Leftrightarrow\\)向量组中任一向量均不能由其他向量线性表示.</p>
            <div class="Prove">
                <p>设向量组为\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n\\).</p>
                <b>充分性：</b>
                <p>设\\(\\alpha_t\\)可由其他向量线性表示</p>
                $$\\alpha_t = k_1\\alpha_1 + k_2\\alpha_2 + \\cdots + k_{t-1}\\alpha_{t-1} + k_{t+1}\\alpha_{t+1} + \\cdots k_n\\alpha_n$$
                $$k_1\\alpha_1 + k_2\\alpha_2 + \\cdots + k_{t-1}\\alpha_{t-1} + k_{t+1}\\alpha_{t+1} + \\cdots k_n\\alpha_n - \\alpha_t = 0$$
                <p>\\(-1\\neq 0\\)即\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n\\)线性相关.</p>
                <b>必要性：</b>
                <p>\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n\\)线性相关</p>
                $$k_1\\alpha_1 + k_2\\alpha_2 + \\cdots + k_{t-1}\\alpha_{t-1} + k_t\\alpha_t + k_{t+1}\\alpha_{t+1} + \\cdots k_n\\alpha_n = 0$$
                <p>设\\(k_t \\neq 0\\)</p>
                $$\\alpha_t = -\\frac{k_1}{k_t}\\alpha_1 -\\frac{k_2}{k_t}\\alpha_2 - \\cdots - \\frac{k_{t-1}}{k_t}\\alpha_{t-1} - \\frac{k_{t+1}}{k_t}\\alpha_{t+1} - \\cdots -\\frac{k_n}{k_t}\\alpha_n $$
                <p>即\\(\\alpha_t\\)可由其他向量线性表示.</p>
            </div>
        </div>

        <b>定理</b>
        <p>向量组\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n\\)线性无关而\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n, \\beta\\)线性相关\\(\\Leftrightarrow\\beta\\)可由\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n\\)线性表示，且表达式唯一。</p>
        <div class="Prove">
            <p>\\(\\because \\alpha_1, \\alpha_2, \\cdots, \\alpha_n, \\beta\\)线性相关. </p>
            <p>\\(\\therefore\\)存在一组不全为为\\(0\\)的数，使得</p>
            $$k_1\\alpha_1 + k_2\\alpha_2 + \\cdots + k_n\\alpha_n + k\\beta = 0$$
            <p>要证\\(\\beta\\)可由\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n\\)线性表示，即证\\(k\\neq 0\\).</p>
            <p>反证法：假设\\(k = 0\\).</p>
            <p>则存在不全为\\(0\\)的一组\\(k_1, k_2, \\cdots, k_n\\)，使得\\(k_1\\alpha_1 + k_2\\alpha_2 + \\cdots + k_n\\alpha_n = 0\\).</p>
            <p>这与“向量组\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n\\)线性无关”的条件矛盾，反证法不成立，即\\(k\\neq 0\\).</p>
            $$\\therefore \\beta = -\\frac{k_1}{k}\\alpha_1 -\\frac{k_2}{k}\\alpha_2 - \\cdots -\\frac{k_n}{k}\\alpha_n$$
            <p>故\\(\\beta\\)可由\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n\\)线性表示.</p>
            <br>
            <p>设\\(\\beta\\)有两个表达式</p>
            $$\\beta = \\lambda_1\\alpha_1 + \\lambda_2\\alpha_2 + \\cdots + \\lambda_n\\alpha_n$$
            $$\\beta = \\mu_1\\alpha_1 + \\mu_2\\alpha_2 + \\cdots + \\mu_n\\alpha_n$$
            <p>两式相减得</p>
            $$(\\lambda_1-\\mu_1)\\alpha_1 + (\\lambda_2-\\mu_2)\\alpha_2 + \\cdots + (\\lambda_n-\\mu_n)\\alpha_n = 0$$
            <p>\\(\\because\\)向量组\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n\\)线性无关</p>
            $$\\therefore \\lambda_i = \\mu_i(i=1,2,\\cdots,n)$$
            <p>故表达式唯一.</p>
        </div>

        <b>定理</b>
        <p>一个向量组中的某个子向量组线性相关\\(\\Rightarrow\\)该向量组线性相关.</p>
        <p>向量组线性无关\\(\\Rightarrow\\)其任一子向量组也线性无关.</p>


        <b>定理</b>
        <p>\\(r\\)维向量组</p>
        $$
        \\begin{align}
        &\\alpha_1 = (a_{11}, a_{12}, \\cdots, a_{1r})^T\\\\
        &\\alpha_2 = (a_{12}, a_{22}, \\cdots, a_{2r})^T\\\\
        &\\cdots\\cdots\\\\
        &\\alpha_n = (a_{1n}, a_{2n}, \\cdots, a_{nr})^T
        \\end{align}
        $$
        中每个向量添加\\(m-r\\)个分量得到
        $$
        \\begin{align}
        &\\beta_1 = (a_{11}, a_{12}, \\cdots, a_{1r}, a_{1,r+1}, \\cdots, a_{1m})^T\\\\
        &\\beta_2 = (a_{12}, a_{22}, \\cdots, a_{2r}, a_{2,r+1}, \\cdots, a_{2m})^T\\\\
        &\\cdots\\cdots\\\\
        &\\beta_n = (a_{1n}, a_{2n}, \\cdots, a_{nr}, a_{n,r+1}, \\cdots, a_{nm})^T
        \\end{align}        
        $$
        <p>\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n\\)线性无关\\(\\Rightarrow \\beta_1, \\beta_2, \\cdots, \\beta_n\\)线性无关.</p>
        <p>\\(\\beta_1, \\beta_2, \\cdots, \\beta_n\\)线性相关\\(\\Rightarrow \\alpha_1, \\alpha_2, \\cdots, \\alpha_n\\)线性相关.</p>


        <b>定理</b>
        <p>\\(n\\)维向量组\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_r\\)可由\\(n\\)维向量组\\(\\beta_1, \\beta_2, \\cdots, \\beta_s\\)线性表示，且\\(r\\gt s\\)，则向量组\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_r\\)线性相关.</p>

        <b>推论1</b>
        <p>\\(n\\)维向量组\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_r\\)可由\\(n\\)维向量组\\(\\beta_1, \\beta_2, \\cdots, \\beta_s\\)线性表示，且向量组\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_r\\)线性无关，则\\(r\\leq s\\).</p>

        <b>推论2</b>
        <p>向量组\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_r\\)与向量组\\(\\beta_1, \\beta_2, \\cdots, \\beta_s\\)等价且均线性无关，则\\(r = s\\).</p>` },
  "note/math/linearalgebra/vector_rank": { title: "线性代数", content: `<h1>向量组的秩</h1>
        <div class="Card-Definition">
            <b>极大无关组</b>
            <p>从向量组中选取一个子向量组，若子向量组线性无关，且原向量组中的每个向量都可由子向量组线性表示，则成子向量组为原向量组的一个<b>极大线性无关向量组</b>，简称<b>极大无关组</b>.</p>
        </div>
        <p>[注]向量组的极大无关组不唯一.</p>
        <p>[注]只含零向量的向量组没有极大无关组.</p>
        <p>[注]线性无关向量组的极大无关组就是它本身.</p>

        <b>定理</b>
        <p>任一向量组与其极大无关组等价.</p>
        <b>推论</b>
        <p>向量组中任意两极大无关组等价，从而这两个极大无关组中所含向量个数相等.</p>

        <div class="Card-Definition">
            <b>向量组的秩</b>
            <p>向量组的极大无关组所含向量的个数，记作\\(R(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n)\\)</p>
        </div>
        <p>[注]若一个向量仅含零向量，规定其秩为零.</p>

        <b>定理</b>
        <p>向量组\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n\\)可由向量组\\(\\beta_1, \\beta_2, \\cdots, \\beta_m\\)线性表示\\(\\Leftrightarrow R(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n)\\leq R(\\beta_1, \\beta_2, \\cdots, \\beta_m)\\)</p>

        <b>推论</b>
        <p>若向量组\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n\\)与向量组\\(\\beta_1, \\beta_2, \\cdots, \\beta_m\\)等价\\(\\Leftrightarrow R(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n) = R(\\beta_1, \\beta_2, \\cdots, \\beta_m)\\)</p>


        <h3>向量组秩与矩阵秩的关系</h3>
        <p>矩阵\\(\\mathbf{A} = (a_{ij})_{m\\times n}\\)按行、列分块为</p>
        $$\\mathbf{A} = \\left(\\begin{matrix}\\alpha_1^T\\\\\\alpha_2^T\\\\\\vdots\\\\\\alpha_m^T\\end{matrix}\\right) = (\\beta_1, \\beta_2, \\cdots, \\beta_n)$$
        <p><b>\\(\\mathbf{A}\\)的行秩</b>：\\(R(\\alpha_1^T, \\alpha_2^T, \\cdots, \\alpha_m^T)\\)</p>
        <p><b>\\(\\mathbf{A}\\)的列秩</b>：\\(R(\\beta_1, \\beta_2, \\cdots, \\beta_n)\\)</p>
        $$R(\\mathbf{A}) = R(\\alpha_1^T, \\alpha_2^T, \\cdots, \\alpha_m^T) = R(\\beta_1, \\beta_2, \\cdots, \\beta_n)$$
      

        <div class="Card-Method">
            <h2>求向量组的秩、极大无关组并将其他向量用极大无关组表示的方法</h2>

            <p>对矩阵施以初等行变换，不改变矩阵列向量组的线性关系.</p>
            <p>对于给定的向量组，将其组合成矩阵，而后化为行最简型矩阵的形式.</p>

            <b>向量组的秩</b>
            <p>向量组的秩即为行最简型矩阵的非零行数即矩阵的秩.</p>

            <b>向量组的一个极大无关组</b>
            <p>含非零首元列对应的向量组即为极大无关组.</p>

            <b>用极大无关组表示其余向量</b>
            <p>行最简型行列式中，极大无关组对应的列均为单位列向量，非极大无关组对应列用单位列向量表示的方式，即为极大无关组表示向量组中其他向量的方式.</p>
        </div>` },
  "note/math/linearalgebra/vector_space": { title: "线性代数", content: `<h1>向量空间</h1>
        <div class="Card-Definition">
            <b>向量空间</b>
            <p>设\\(V\\)为\\(n\\)维向量的集合，\\(P\\)是一个数域，若\\(V\\)非空且</p>
            <ul>
                <li>对向量加法封闭：\\(\\alpha \\in V, \\beta \\in V \\Rightarrow \\alpha+\\beta \\in V\\)</li>
                <li>对数乘运算封闭：\\(\\alpha \\in V, \\lambda \\in P \\Rightarrow \\lambda\\alpha \\in V\\)</li>
            </ul>
            <p>称集合\\(V\\)为数域\\(P\\)上的向量空间.</p>
        </div>

        <div class="Card-Definition">
            <b>子空间</b>
            <p>若向量空间\\(V_1 \\in V_2\\)，称\\(V_1\\)为\\(V_2\\)的子空间.</p>
        </div>

        <div class="Card-Definition">
            <b>向量空间的基与维数</b>
            <p>向量空间\\(V\\)中，向量\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_r \\in V\\)，且</p>
            <ul>
                <li>\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_r\\)线性无关</li>
                <li>\\(V\\)中任一向量都可用\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_r\\)线性表示</li>
            </ul>
            <p>称向量组\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_r\\)为向量空间\\(V\\)中的一个<b>基</b>.</p>
            <p>称\\(r\\)为向量空间\\(V\\)的<b>维数</b>，记作\\(\\mathrm{dim}V = r\\).</p>
            <p>称\\(V\\)为\\(r\\)维向量空间.</p>
        </div>
        <p>[注]只含零向量的向量空间称为零维向量空间，其没有基.</p>
        <p>[注]若将向量空间\\(V\\)视为向量组，那么\\(V\\)的基就是向量组的极大无关组，\\(V\\)的维数就是向量组的秩.</p>

        <div class="Card-Definition">
            <b>\\(\\mathbf{R}^n\\)的自然基</b>
            <p>在\\(n\\)维向量空间\\(\\mathbf{R}^n\\)中，\\(n\\)维单位向量组</p>
            $$\\epsilon_1 = (1,0,\\cdots,0)^T, \\epsilon_2 = (0,1,\\cdots,0)^T,\\cdots, \\epsilon_n=(0,0,\\cdots, 1)^T$$
            <p>线性无关，且对任一向量\\(\\alpha = (a_1, a_2, \\cdots, a_n) \\in \\mathbf{R}\\)，有</p>
            $$\\alpha = a_1\\epsilon_1 + a_2\\epsilon_2 + \\cdots + a_n\\epsilon_n$$
            <p>故向量组\\(\\epsilon_1, \\epsilon_2, \\cdots, \\epsilon_n\\)为向量空间\\(\\mathbf{R}^n\\)的一个基，一般称之为\\(\\mathbf{R}^n\\)的自然基，且\\(\\mathrm{dim}\\mathbf{R}^n = n\\).</p>
        </div>
        
        <div class="Card-Definition">
            <b>坐标</b>
            <p>若在向量空间\\(V\\)中取定一个基\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_r\\)，那么\\(V\\)中任一向量\\(\\mathbf{x}\\)可唯一表示为</p>
            $$\\mathbf{x} = \\lambda_1\\alpha_1 + \\lambda_2\\alpha_2 + \\cdots + \\lambda_r\\alpha_r$$
            <p>\\(\\lambda_1, \\lambda_2, \\cdots, \\lambda_r\\)称为向量\\(\\mathbf{x}\\)在基\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_r\\)下的坐标，记作\\((\\lambda_1, \\lambda_2, \\cdots, \\lambda_r)^T\\)</p>
        </div>


        <h3>基变换与坐标变换</h3>
        <p>在\\(\\mathbf{R}^n\\)中取一个基\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n\\)，再取一个新基\\(\\beta_1, \\beta_2, \\cdots, \\beta_n\\)，则它们可互相线性表示.</p>
        $$(\\beta_1, \\beta_2, \\cdots, \\beta_n) = (\\alpha_1, \\alpha_2, \\cdots, \\alpha_n)\\mathbf{A}$$
        <p>其中\\(\\mathbf{A}\\)称为由旧基\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n\\)到新基\\(\\beta_1, \\beta_2, \\cdots, \\beta_n\\)的<b>过渡矩阵</b>.</p>
        <p>\\(\\mathbf{A}\\)的每一列元素分别是\\(\\beta_1, \\beta_2, \\cdots, \\beta_n\\)在\\(\\alpha_1, \\alpha_2, \\cdots, \\alpha_n\\)下的坐标.</p>` },
  "note/math/mathematic/12.1fourierseries": { title: "高等数学", content: `<h1>傅里叶级数</h1>

        <p>设函数\\(f(x)\\)为周期为\\(2l\\)的周期函数，则其展开为傅里叶级数</p>
        $$f(x)\\sim \\frac{a_0}{2} + \\sum\\limits_{n=1}^\\infty(a_n\\cos \\frac{n\\pi}{l}x + b_n\\sin\\frac{n\\pi}{l}x)$$
        $$a_n = \\frac{1}{l}\\int_{-l}^{l}f(x)\\cos\\frac{n\\pi}{l}x\\mathrm{d}x, n=0,1,2,\\cdots$$
        $$b_n = \\frac{1}{l}\\int_{-l}^lf(x)\\sin\\frac{n\\pi}{l}x\\mathrm{d}x, n=1,2,\\cdots$$

        <h2>收敛定理（狄利克雷条件）</h2>
        <p>设\\(f(x)\\)为周期函数，若其满足：</p>
        <ul>
            <li>在一个周期内连续或只有有限个第一类间断点</li>
            <li>在一个周期内至多只有有限个极值点</li>
        </ul>
        <p>则\\(f(x)\\)的傅里叶级数收敛，且：</p>
        <ul>
            <li>\\(x_0\\)为\\(f(x)\\)连续点\\(\\Rightarrow\\)级数收敛于\\(f(x_0)\\)</li>
            <li>\\(x_0\\)为\\(f(x)\\)间断点\\(\\Rightarrow\\)级数收敛于\\(\\frac{1}{2}[f(x_0^-) + f(x_0^+)]\\)</li>
        </ul>

        <b>常用结论</b>
        $$\\sin n\\pi = 0$$
        $$\\cos n\\pi = (-1)^n$$
        <p>[注]\\(\\sin[(n+k)x], \\cos[(n+k)x]\\)直接展开.</p>

        <h3>将\\(f(x)\\)展开为傅里叶级数的基本步骤</h3>
        <p><span lang="en">(1)</span>列出\\(a_n\\)表达式，将\\(n=0\\)代入求得\\(a_0\\).</p>
        <p><span lang="en">(2)</span>求出\\(n=1,2,\\cdots\\)时的\\(a_n\\)与\\(b_n\\).</p>
        <p><span lang="en">(3)</span>判断\\(f(x)\\)在一个区间内的连续性，以及\\(f(-l)\\)是否等于\\(f(l)\\)，得出收敛区间.</p>
        <p>[注]：若\\(f(x)\\)在\\(x_0\\)出间断，则\\(x\\neq (2k + 1)x_0, k\\in \\mathbb{Z}\\)</p>` },
  "note/math/mathematic/approximation": { title: "高等数学", content: `<h1>近似方法</h1>
        


        <ul class="navibar">
            <li class="catalog"><a href="/note/math/mathematic/mathematic">主页</a></li>
        </ul>` },
  "note/math/mathematic/catalog": { title: "高等数学", content: `<h1>高等数学</h1>
        <h2>目录</h2>
        <ul class="catalog">
            <li><a href="/note/math/mathematic/function">函数</a></li>
            <ul>
                <li><a href="/note/math/mathematic/function_basicelementary">基本初等函数</a></li>
                <li><a href="/note/math/mathematic/function_tri">三角函数</a></li>
                <li><a href="/note/math/mathematic/function_property">函数性质</a></li>
                <li><a href="/note/math/mathematic/function_graph">函数图像</a></li>
            </ul>
            
            <li><a href="/note/math/mathematic/chapter1">第一章 极限</a></li>
            <ul>
                <li><a href="/note/math/mathematic/limit_sequence">数列极限</a></li>
                <li><a href="/note/math/mathematic/taylorformula">泰勒公式</a></li>
            </ul>
            <li><a href="/note/math/mathematic/chapter2">第二章 导数与微分</a>
            <ul>
                <li><a href="/note/math/mathematic/derivative">导数</a></li>
            </ul>
            </li>
            <li><a href="/note/math/mathematic/chapter3">第三章 微分中值定理与导数的应用</a></li>
            <li><a href="/note/math/mathematic/differentialequation">微分方程</a></li>
            <li><a href="/note/math/mathematic/chapter8">第八章 多元函数微分学</a></li>
            <li><a href="/note/math/mathematic/chapter9">第九章 二重积分</a></li>
            <li><a href="/note/math/mathematic/chapter10">第十章 曲线积分与曲面积分</a></li>
            <li><a href="/note/math/mathematic/chapter12">第十二章 无穷级数</a></li>
            
            <li><a href="/note/math/mathematic/inequation">不等式</a></li>
            <li><a href="/note/math/mathematic/tips">技巧</a></li>
            <li><a href="/note/math/mathematic/approximation">近似方法</a></li>
            
            <h3>极限</h3>
            <ul>
                <li><a href="/note/math/mathematic/limit_function">函数极限</a></li>
                <li><a href="/note/math/mathematic/limit_sequence">数列极限</a></li>
            </ul>

            <h3>积分</h3>
            <ul>
                <li><a href="/note/math/mathematic/integral_indefinite">不定积分</a></li>
                <li><a href="/note/math/mathematic/integral_definite">定积分</a></li>
                <li><a href="/note/math/mathematic/integral_improper">反常积分</a></li>
                <li><a href="/note/math/mathematic/integral_upperlimitfunction">积分上限函数</a></li>
                <li><a href="/note/math/mathematic/integral_application">定积分的应用</a></li>
            </ul>

            <h3>补充</h3>
            <ul>
                <li><a href="/note/math/mathematic/mathbasic">基础补足</a></li>
                <li><a href="/note/math/mathematic/planegeometry">平面几何</a></li>
            </ul>
            

            <h1>题型</h1>
            <li><a href="/note/math/mathematic/key1.1">极限</a></li>
            <li><a href="/note/math/mathematic/key5.1">定积分</a></li>
        </ul>` },
  "note/math/mathematic/chapter10": { title: "高等数学", content: `<h1>第十章 曲线积分与曲面积分</h1>

        <h2>第一节 对弧长的曲线积分</h2>
        
        <p>设\\(f(x,y)\\)在曲线弧L上有定义且连续，L的参数方程为</p>
        $$\\begin{cases}
        x = x(t)\\\\
        y = y(t)
        \\end{cases}(\\alpha \\leq t \\leq \\beta)$$
        <p>若\\(x(t), y(t)\\)在\\([\\alpha,\\beta]\\)上存在一阶导数，且\\(x^2(t) + y^2(t) \\neq 0\\)，则曲线积分\\(f_L(x,y)\\mathrm{d}s\\)存在.</p>
        
        $$f_L(x,y)\\mathrm{d}s = \\int_\\alpha^\\beta f[x(t),y(t)]\\sqrt{x'^2(t)+y'^2(t)}\\mathrm{d}t(\\alpha \\lt \\beta)$$
        <ul class="navibar">
            <li><a href="/note/math/mathematic/chapter8">上一页</a></li>
            <li class="catalog"><a href="/note/math/mathematic/mathematic">主页</a></li>
            <li class="next"><a href="/note/math/mathematic/chapter10">下一页</a></li>
        </ul>` },
  "note/math/mathematic/chapter11": { title: "高等数学", content: `<h1>第十一章 向量代数与空间解析几何及多元微分学在几何上的应用</h1>

        <h2>第一节 向量</h2>

        <b>向量（矢量）</b>
        <p>既有大小又有方向的量.</p>
        $$\\mathbf{a} = (x,y,z)$$

        <b>向量的模</b>
        <p>向量的大小.</p>
        $$|\\mathbf{a}| = \\sqrt{x^2 + y^2 + z^2}$$

        <b>单位向量</b>
        <p>\\(|\\mathbf{a}| = 1|\\)的向量.</p>

        <b>零向量</b>
        <p>\\(|\\mathbf{a}| = 1|\\)的向量，记作\\(\\mathbf{0}\\).</p>
        <p>零向量的方向是任意的. </p>

        <b>两向量的夹角</b>
        <p>向量尾尾相连的夹角.</p>

        <h2>第二节 坐标系</h2>
        <b>卦限</b>
        <img src="Img/octant.jpg" width="300j">

        <h2>第三节 向量的运算</h2>
        <h3>一、向量的加减</h3>
        $$\\mathbf{a}\\pm \\mathbf{b}$$
        <img src="Img/vectorpm.png" width="300">

        <h3>二、向量的数乘</h3>
        <table>
            <tr><td colspan="2">运算规律</td></tr>
            <tr>
                <td>结合律</td>
                <td>$$\\lambda(\\mu \\mathbf{a}) = \\mu(\\lambda \\mathbf{a}) = (\\lambda\\mu)\\mathbf{a}$$</td>
            </tr>
            <tr>
                <td rowspan="2">分配律</td>
                <td>$$(\\lambda + \\mu)\\mathbf{a} = \\lambda\\mathbf{a} + \\mu\\mathbf{a}$$</td>
            </tr>
            <tr>
                <td>$$\\lambda(\\mathbf{a} + \\mathbf{b}) = \\lambda \\mathbf{a} + \\lambda \\mathbf{b}$$</td>
            </tr>
        </table>

        $$\\mathbf{a} = (a_x, a_y, a_z), \\mathbf{b} = (b_x, b_y, b_z)$$
        <table>
            <tr>
                <td colspan="2"><b>向量的数量积（点乘）</b></td>
            </tr>
            <tr>
                <td>几何表示</td>
                <td>$$\\mathbf{a}\\cdot\\mathbf{b} = |\\mathbf{a}|\\cdot|\\mathbf{b}|\\cdot\\cos\\lt\\mathbf{a}, \\mathbf{b}\\gt$$</td>
            </tr>
            <tr>
                <td>代数表示</td>
                <td>$$\\mathbf{a}\\cdot \\mathbf{b} = a_xb_x + a_yb_y + a_zb_z$$</td>
            </tr>
            <tr>
                <td rowspan="3">运算规律</td>
                <td>交换律</td>
            </tr>
            <tr>
                <td>结合律</td>
            </tr>
            <tr>
                <td>分配律</td>
            </tr>
            <tr>
                <td rowspan="3">几何应用</td>
                <td>向量的模：\\(|\\mathbf{a}| = \\sqrt{a^2}\\)</td>
            </tr>
            <tr>
                <td>向量夹角：\\(\\cos \\lt\\mathbf{a},\\mathbf{b}\\gt \\frac{\\mathbf{a}\\cdot\\mathbf{b}}{|\\mathbf{a}|\\cdot|\\mathbf{b}|}\\)</td>
            </tr>
            <tr>
                <td>$$\\mathbf{a}\\perp\\mathbf{b} \\Rightarrow \\mathbf{a}\\cdot \\mathbf{b} = 0$$</td>
            </tr>
        </table>
        <br>

        <table>
            <tr><td colspan="2"><b>向量的向量积（叉乘）</b></td></tr>
            <tr>
                <td>几何表示</td>
                <td>
                    $$\\mathbf{a} \\times \\mathbf{b}$$
                    <p>大小：\\(|\\mathbf{a}|\\cdot|\\mathbf{b}|\\cdot\\sin\\lt\\mathbf{a}, \\mathbf{b}\\gt\\)</p>
                    <p>方向：垂直于\\(\\mathbf{a}\\)与\\(\\mathbf{b}\\)，满足右手法则.</p>
                </td>
            </tr>
            <tr>
                <td>代数表示</td>
                <td>$$\\mathbf{a}\\times \\mathbf{b} =\\left |\\begin{matrix}i & j & k\\\\a_x & a_y & a_z\\\\b_x & b_y & b_z\\end{matrix}\\right |$$</td>
            </tr>
            <tr>
                <td rowspan="2">运算规律</td>
                <td>反交换律：\\(\\mathbf{a}\\times\\mathbf{b} = -\\mathbf{b}\\times \\mathbf{a}\\)</td>
            </tr>
            <tr>
                <td>分配律</td>
            </tr>
            <tr>
                <td rowspan="3">几何应用</td>
                <td>同时垂直于\\(\\mathbf{a}\\)和\\(\\mathbf{b}\\)的向量：\\(\\mathbf{a}\\times\\mathbf{b}\\)</td>
            </tr>
            <tr>
                <td>以\\(\\mathbf{a}\\)与\\(\\mathbf{b}\\)为边的平行四边形面积：\\(S = |\\mathbf{a}\\times\\mathbf{b}| = |\\mathbf{a}|\\cdot|\\mathbf{b}|\\cdot\\sin\\lt \\mathbf{a}, \\mathbf{b}\\gt\\)</td>
            </tr>
            <tr>
                <td>$$\\mathbf{a} // \\mathbf{b} \\Rightarrow \\mathbf{a}\\times\\mathbf{b} = 0$$</td>
            </tr>
        </table>

        <br>
        <table>
            <tr><td colspan="2"><b>混合积</b></td></tr>
            <tr>
                <td>几何表示</td>
                <td>$$[a,b,c] = (a\\times b)\\cdot c$$</td>
            </tr>
            <tr>
                <td>代数表示</td>
                <td>$$[a,b,c] = \\left |\\begin{matrix}a_x & a_y & a_z\\\\b_x & b_y & b_z\\\\c_x & c_y & c_z\\end{matrix}\\right |$$</td>
            </tr>
            <tr>
                <td>运算规律</td>
                <td>交换变号：\\([a,b,c] = -[b,a,c] = -[a,c,b]\\)</td>
            </tr>
            <tr>
                <td rowspan="2">几何应用</td>
                <td>以\\(\\mathbf{a}, \\mathbf{b}, \\mathbf{c}\\)为棱的平行六面体的体积：\\(V = |[a,b,c]|\\)</td>
            </tr>
            <tr>
                <td>向量\\(\\mathbf{a}, \\mathbf{b}, \\mathbf{c}\\)共面：\\([a,b,c] = 0\\)</td>
            </tr>
        </table>

        <h3>常用结论</h3>
        $$\\mathbf{a}\\times \\mathbf{a} = 0$$
        <div class="Prove">
            $$\\mathbf{a}\\times \\mathbf{a} = |a||a|\\sin 0 = 0$$
        </div>
        $$(\\mathbf{a}\\times\\mathbf{b})\\cdot\\mathbf{a} = 0$$
        <div class="Prove">
            $$\\mathbf{a}\\times\\mathbf{b} \\perp \\mathbf{a} \\Rightarrow (\\mathbf{a}\\times\\mathbf{b})\\cdot\\mathbf{a} = 0$$
        </div>

        <h2>空间中的直线方程与平面方程</h2>
        <h3>平面方程</h3>
        <p>设平面法向量\\(\\mathbf{n} = (A,B,C)\\)，在平面上任取两点\\((x,y,z)\\)与\\((x_0, y_0, z_0)\\).故向量\\((x-x_0, y-y_0, z-z_0)\\)与\\(\\mathbf{n}\\)垂直.</p>
        <b>点法式</b>
        $$A(x-x_0) + B(y-y_0) + C(z-z_0) = 0$$
        <b>一般式</b>
        $$Ax + By + Cz -(Ax_0 +By_0 + Cz_0) = 0$$
        <p>令\\(Ax_0 + By_0 + Cz_0 = D\\)，有</p>
        $$Ax + By + Cz + D = 0$$
        <b>截距式</b>
        <p>设平面与\\(x,y,z\\)轴的截距分别为\\(a,b,c\\)</p>
        $$\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$$
        
        <table>
            <tr>
                <td colspan="2">特殊平面</td>
            </tr>
            <tr>
                <td>过<span lang="en">x</span>轴的平面</td>
                <td>$$By + Cz = 0 \\Rightarrow y + tz = 0$$</td>
            </tr>
            <tr>
                <td>过<span lang="en">y</span>轴的平面</td>
                <td>$$Ax + Cz = 0 \\Rightarrow x + tz = 0$$</td>
            </tr>
            <tr>
                <td>过<span lang="en">z</span>轴的平面</td>
                <td>$$Ax + By = 0 \\Rightarrow x + ty = 0$$</td>
            </tr>
        </table>
        <div class="Prove">
            <p>以过<span lang="en">x</span>轴的平面为例：</p>
            <p>点\\((x,0,0), x\\in \\mathbb{R}\\)均位于该平面内，带入一般式\\(Ax + By + Cz + D = 0\\)得：</p>
            $$Ax + D = 0 \\Rightarrow By + Cz = 0$$
        </div>

        <hr>
        <h3>直线方程</h3>
        <b>一般式（两平面交线）</b>
        $$\\begin{cases}
        A_1x + B_1y + C_1z + D_1 = 0\\\\
        A_2x + B_2y + C_2z + D_2 = 0
        \\end{cases}$$

        <p>设方向向量\\(\\mathbf{s} = (a,b,c)\\)与直线平行，在直线上任取两点\\((x,y,z)\\)与\\((x_0, y_0, z_0)\\)构成向量\\((x-x_0, y-y_0, z-z_0)\\).</p>
        <b>对称式</b>
        $$\\frac{x-x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c} = t$$

        <b>参数式</b>
        $$\\begin{cases}
        x = x_0 + at\\\\
        y = y_0 + bt\\\\
        z = z_0 + ct
        \\end{cases}$$
        
        <h3>直线与平面之间的角度</h3>
        <b>直线与直线间的夹角</b>
        $$\\cos \\theta = \\frac{\\mathbf{s_1}\\cdot \\mathbf{s_2}}{|\\mathbf{s_1}|\\cdot|\\mathbf{s_2}|}$$

        <b>平面与平面间的夹角</b>
        $$\\cos \\theta = \\frac{\\mathbf{n_1}\\cdot \\mathbf{n_2}}{|\\mathbf{n_1}|\\cdot|\\mathbf{n_2}|}$$

        <b>直线与平面间的夹角</b>
        $$\\sin \\theta = \\frac{\\mathbf{n}\\cdot \\mathbf{s}}{|\\mathbf{n}|\\cdot|\\mathbf{s}|}$$

        <b>点到平面的距离</b>
        <p>点\\((x_0, y_0, z_0)\\)到平面\\(Ax + By + Cz+ D = 0\\)的距离</p>
        $$d = \\frac{|Ax_0 + By_0 + Cz_0|}{\\sqrt{A^2 + B^2 + C^2}}$$

        <b>点到直线的距离</b>
        <p>点\\((x_0, y_0, z_0)\\)到直线\\(\\frac{x - x_1}{l} = \\frac{y - y_1}{m} = \\frac{z - z_1}{n}\\)的距离</p>
        $$d = \\frac{|(x_1 - x_0, y_1 - y_0, z_1 - z_0)\\times(l,m,n)|}{\\sqrt{l^2 + m^2 + n^2 }}$$
        
 

        <h2>空间中的曲面及曲线方程</h2>
        <h2>空间中的曲面</h2>
        <p>隐函数：\\(F(x,y,z) = 0\\Rightarrow z = z(x,y)\\)</p>
        <p>显函数：\\(z = f(x,y)\\)</p>

        <h2>空间中的曲线</h2>
        <p>一般式：</p>
        $$\\begin{cases}F(x,y,z)=0\\\\G(x,y,z)=0\\end{cases}$$
        <p>参数式：</p>
        $$\\begin{cases}x=x(t)\\\\y=y(t)\\\\z=z(t)\\end{cases}$$

        <h3>旋转曲面</h3>
        <p>设\\(L\\)为\\(yoz\\)平面上的一条曲线，其方程为\\(\\begin{cases}f(y,z)=0\\\\x=0\\end{cases}\\)</p>
        <p>曲线绕\\(y\\)轴旋转所得的旋转曲面方程为</p>
        $$f(y, \\pm\\sqrt{x^2+z^2}) = 0$$
        <p>曲线绕\\(z\\)轴旋转所得的旋转曲面方程为</p>
        $$f(\\pm \\sqrt{x^2 + y^2}, z) = 0$$` },
  "note/math/mathematic/chapter12": { title: "高等数学", content: `<h1>第十二章 无穷级数</h1>

        <div class="Card-Analysis">
            <h2>常数项级数</h2>
            <div class="Card-Definition">
                <b>级数（常数项无穷级数）</b>
                $$\\sum\\limits_{n=1}^\\infty u_n = u_1 + u_2 + \\cdots + u_n + \\cdots$$
                <p>其中\\(u_n\\)称为级数的一般项.</p>
            </div>

            <div class="Card-Definition">
                <b>无穷级数的前\\(n\\)项</b>
                $$u_1 + u_2 + \\cdots + u_n + \\cdots$$
            </div>

            <div class="Card-Definition">
                <b>级数的部分和</b>
                $$s_n = \\sum\\limits_{k=1}^n u_k = u_1 + u_2 + \\cdots + u_n$$

                <b>推导公式</b>
                $$u_n = s_n - s_{n-1}$$
            </div>
    

        </div>
        
        <div class="Card-Analysis">
            <h2>级数的敛散性</h2>
            
            <div class="Card-Definition">
                <b>级数的收敛与发散</b>
                <p>若\\(\\lim\\limits_{n\\rightarrow\\infty}s_n = s\\)，称\\(\\sum\\limits_{n=1}^\\infty u_n\\)收敛.</p>
                <p>\\(s\\)称为级数的和：</p>
                $$s = u_1 + u_2 + \\cdots +$$
    
                <p>若\\(\\lim\\limits_{n\\rightarrow\\infty}S_n\\)不存在，称\\(\\sum\\limits_{n=1}^\\infty u_n\\)发散.</p>
            </div>
        </div>

        <b>级数的性质</b>
        <p>\\(\\sum\\limits_{n=1}^\\infty u_n\\)收敛于\\(s \\Rightarrow \\sum\\limits_{n=1}^\\infty ku_n\\)收敛于\\(ks\\).</p>
        <p>\\(\\sum\\limits_{n=1}^\\infty u_n, \\sum\\limits_{n=1}^\\infty v_n\\)分别收敛于\\(s,t\\Rightarrow \\sum\\limits_{n=1}^\\infty(u_n \\pm v_n)\\)收敛于\\(s \\pm t\\).</p>
        <p>\\(\\sum\\limits_{n=1}^\\infty u_n\\)收敛，\\(\\sum\\limits_{n=1}^\\infty v_n\\)发散\\(\\Rightarrow \\sum\\limits_{n=1}^\\infty(u_n \\pm v_n)\\)发散.</p>
        <p>\\(\\sum\\limits_{n=1}^\\infty u_n, \\sum\\limits_{n=1}^\\infty v_n\\)均发散\\(\\Rightarrow \\sum\\limits_{n=1}^\\infty(u_n \\pm v_n)\\)敛散性不确定.</p>
        <p>无穷级数中增减或改变有限项，级数敛散性不变</p>
        <ul>
            <li>原级数收敛\\(\\Rightarrow\\)加括号后收敛.</li>
            <li>级数加括号后收敛\\(\\Rightarrow\\)原级数不一定收敛.</li>
            <li>级数加括号后发散\\(\\Rightarrow\\)原级数一定发散.</li>
        </ul>
        <p>[注]级数加括号：\\((u_1 + u_2) + (u_3 + u_4) + \\cdots\\)</p>

        <b>级数收敛的必要条件</b>
        <p>\\(\\sum\\limits_{n=1}^\\infty u_n\\)收敛\\(\\Rightarrow \\lim\\limits_{n\\rightarrow \\infty}u_n = 0\\)</p>

        <h2>级数审敛法</h2>
        <p>首先考虑利用等价无穷大或等价无穷小进行化简.</p>
        <h3>正项级数</h3>
        $$\\sum\\limits_{n=1}^\\infty u_n(u_n\\geq 0)$$
        <p>正项级数收敛\\(\\Leftrightarrow\\)部分和\\(\\{S_n\\}\\)有上界.</p>
        <b>比较判别法</b>
        <p>设\\(u_n \\leq v_n\\)</p>
        <ul>
            <li>\\(\\sum\\limits_{n=1}^\\infty v_n\\)收敛\\(\\Rightarrow \\sum\\limits_{n=1}^\\infty u_n\\)收敛.</li>
            <li>\\(\\sum\\limits_{n=1}^\\infty u_n\\)发散\\(\\Rightarrow \\sum\\limits_{n=1}^\\infty v_n\\)发散.</li>
        </ul>

        <b>比较判别法（极限形式）</b>
        <p>设\\(\\lim\\limits_{n\\rightarrow \\infty}\\frac{u_n}{v_n} = l(0\\leq l \\leq +\\infty)\\)</p>
        <ul>
            <li>\\(0\\lt l \\lt \\infty\\)：\\(\\sum\\limits_{n=1}^\\infty u_n\\)与\\(\\sum\\limits_{n=1}^\\infty v_n\\)具有相同的敛散性.</li>
            <li>\\(l = 0 \\Rightarrow u_n \\lt v_n\\)：使用比较判别法.</li>
            <li>\\(l = +\\infty \\Rightarrow u_n \\gt v_n\\)：使用比较判别法.</li>
        </ul>

        <details>
            <summary><b>比值审敛法</b>——适用于含\\(n!\\)项、含\\(a^n\\)项</summary>
            <table>
                <tr>
                    <td colspan="3">$$\\lim\\limits_{n\\rightarrow \\infty}\\frac{u_{n+1}}{u_n} = \\rho$$</td>
                </tr>
                <tr>
                    <td rowspan="3">$$\\sum\\limits_{n=1}^\\infty u_n$$</td>
                    <td>收敛</td>
                    <td>$$\\rho \\lt 1$$</td>
                </tr>
                <tr>
                    <td>不确定</td>
                    <td>$$\\rho = 1$$</td>
                </tr>
                <tr>
                    <td>发散</td>
                    <td>$$\\rho \\gt 1$$</td>
                </tr>
            </table>
        </details>
        

        <details>
            <summary><b>根值审敛法（柯西判别法）</b>——适用于仅含\\(a^n\\)项</summary>
            <table>
                <tr>
                    <td colspan="3">$$\\lim\\limits_{n\\rightarrow \\infty}\\sqrt[n]{u_n} = \\rho$$</td>
                </tr>
                <tr>
                    <td rowspan="3">$$\\sum\\limits_{n=1}^\\infty u_n$$</td>
                    <td>收敛</td>
                    <td>$$\\rho \\lt 1$$</td>
                </tr>
                <tr>
                    <td>不确定</td>
                    <td>$$\\rho = 1$$</td>
                </tr>
                <tr>
                    <td>发散</td>
                    <td>$$\\rho \\gt 1$$</td>
                </tr>
            </table>
        </details>
        
        <b>积分判别法</b>
        <p>设\\(f(x)\\)是\\([1,+\\infty)\\)上单调递减，非负的连续函数，\\(a(n) = f(n)\\)，则\\(\\sum\\limits_{n=1}^\\infty a_n\\)与\\(\\int_1^{+\\infty}f(x)\\mathrm{d}x\\)具有相同的敛散性.</p>
        
        <h2>常见级数</h2>
        <table>
            <tr>
                <td colspan="2">级数</td>
                <td>条件</td>
                <td>敛散性</td>
            </tr>
            <tr>
                <td rowspan="2"><a href="#series1">等比级数（几何级数）</a></td>
                <td rowspan="2">\\(\\sum\\limits_{n=1}^\\infty aq^n\\)</td>
                <td>\\(|q|\\lt1\\)</td>
                <td>收敛</td>
            </tr>
            <tr>
                <td>\\(|q|\\geq1\\)</td>
                <td>发散</td>
            </tr>
            <tr>
                <td rowspan="2"><span lang="en">p</span>级数</td>
                <td rowspan="2">\\(\\sum\\limits_{n=1}^\\infty \\frac{1}{n^p}\\)</td>
                <td>\\(p\\gt1\\)</td>
                <td>收敛</td>
            </tr>
            <tr>
                <td>\\(p\\leq1\\)</td>
                <td>发散</td>
            </tr>
            <tr>
                <td rowspan="2"></td>
                <td rowspan="2">\\(\\sum\\limits_{n=1}^\\infty \\frac{1}{n\\ln^p n}\\)</td>
                <td>\\(p\\gt1\\)</td>
                <td>收敛</td>
            </tr>
            <tr>
                <td>\\(p\\leq1\\)</td>
                <td>发散</td>
            </tr>            
        </table>

        <b id="series1">等比级数（几何级数）</b>
        $$\\sum\\limits_{n=1}^\\infty aq^n = a + aq + aq^2 + \\cdots + aq^n + \\cdots,~a\\neq0$$
        <p>\\(q\\)称为级数的公比.</p>

        <div class="Prove">
            <p>\\(q \\neq 1\\)时：</p>
            $$S_n = \\frac{aq(1-q^n)}{1-q}$$
            $$|q| \\gt 1 \\Rightarrow\\lim\\limits_{n\\rightarrow \\infty}S_n = \\infty \\Rightarrow 级数发散$$
            $$|q| \\lt 1 \\Rightarrow\\lim\\limits_{n\\rightarrow \\infty}S_n = \\frac{aq}{1-q} \\Rightarrow 级数收敛$$
            $$q = -1\\Rightarrow \\lim\\limits_{n\\rightarrow \\infty}S_n不存在\\Rightarrow 级数发散$$
            <p>\\(q=1\\)时：</p>
            $$S_n = na$$
            $$\\lim\\limits_{n\\rightarrow \\infty}S_n = \\infty \\Rightarrow 级数发散$$
            <p>综上：</p>
            <p>\\(|q|\\lt1\\)时，级数收敛；\\(|q|\\neq 1\\)时，级数发散.</p>
        </div>

        <b><span lang="en">p</span>级数</b>
        $$\\sum\\limits_{n=1}^\\infty \\frac{1}{n^p}$$
        <p>当\\(p = 1\\)时，\\(\\sum\\limits_{n=1}^\\infty \\frac{1}{n}\\)称为<b>调和级数</b>.</p>

        <div class="Prove">
            <p>反证法证明调和级数\\(\\sum\\limits_{n=1}^\\infty \\frac{1}{n}\\)发散：</p>
            <p>假设\\(\\sum\\limits_{n=1}^\\infty \\frac{1}{n}\\)收敛.</p>
            $$\\therefore \\lim\\limits_{n\\rightarrow \\infty}S_n = \\lim\\limits_{n\\rightarrow \\infty}S_{2n} = s \\Rightarrow \\lim\\limits_{n\\rightarrow \\infty}(S_{2n} - S_n) = 0$$
            $$\\begin{align}S_{2n} - S_{n} &= (1 + \\frac12 + \\cdots + \\frac1n + \\frac{1}{n+1} + \\cdots \\frac{1}{2n}) -  (1 + \\frac12 + \\cdots + \\frac1n)\\\\ &= \\frac{1}{n+1} + \\frac{1}{n+2} + \\cdots \\frac{1}{2n}\\end{align}$$
            $$\\because \\frac{1}{n+1}\\gt \\frac{1}{2n}, \\frac{1}{n+2}\\gt \\frac{1}{2n},\\cdots, \\frac{1}{2n-1}\\gt \\frac{1}{2n}$$
            $$\\therefore \\lim\\limits_{n\\rightarrow \\infty}(S_{2n} - S_n) \\gt \\lim\\limits_{n\\rightarrow \\infty}(n\\cdot\\frac{1}{2n}) = \\frac12 \\neq 0$$
            <p>故假设不成立，调和级数\\(\\sum\\limits_{n=1}^\\infty \\frac{1}{n}\\)发散.</p>
            <p>利用调和级数证明<span lang="en">p</span>级数敛散性：</p>
        </div>

        <hr>

        <h3>交错级数</h3>
        $$\\sum\\limits_{n=1}^\\infty (-1)^nu_n(u_n\\gt 0)$$
        <b>莱布尼兹准则</b>
        <p>若\\(\\{u_n\\}\\)单调递减，\\(\\lim\\limits_{n\\rightarrow \\infty} u_n = 0 \\Rightarrow \\sum\\limits_{n=1}^\\infty(-1)^{n-1}u_n\\)收敛.</p>

        <h3>任意项级数</h3>
        <b>绝对收敛</b>
        <p>若\\(\\sum\\limits_{n=1}^\\infty|u_n|\\)收敛，且\\(\\sum\\limits_{n=1}^\\infty u_n\\)收敛.</p>
        <b>条件收敛</b>
        <p>若\\(\\sum\\limits_{n=1}^\\infty u_n\\)收敛，但\\(\\sum\\limits_{n=1}^\\infty |u_n|\\)发散.</p>

        <b>结论</b>
        <p>\\(\\sum\\limits_{n=1}^\\infty u_n\\)绝对收敛\\(\\Rightarrow \\sum\\limits_{n=1}^\\infty \\frac{u_n + |u_n|}{2}, \\sum\\limits_{n=1}^\\infty \\frac{u_n - |u_n|}{2}\\)绝对收敛.</p>
        <p>\\(\\sum\\limits_{n=1}^\\infty u_n\\)条件收敛\\(\\Rightarrow \\sum\\limits_{n=1}^\\infty \\frac{u_n + |u_n|}{2}, \\sum\\limits_{n=1}^\\infty \\frac{u_n - |u_n|}{2}\\)发散.</p>

        <h2>幂级数</h2>
        <b>定义</b>
        $$\\sum\\limits_{n = 0}^\\infty a_n x^n = a_0 + a_1x + a_2x^2 + \\cdots + a_n x^n + \\cdots$$
        $$\\sum\\limits_{n = 0}^\\infty a_n(x- x_0)^n = a_0 + a_1(x-x_0) + a_2(x-x_0)^2 + \\cdots + a_n(x-x_0)^n + \\cdots$$

        <b>阿贝尔定理</b>
        <p>若\\(\\sum\\limits_{n=0}^\\infty a_nx^n\\)在\\(x = x_0(x\\neq 0)\\)处收敛，则当\\(|x|\\lt |x_0|\\)时，\\(\\sum\\limits_{n=1}^\\infty a_nx^n\\)绝对收敛.</p>
        <p>若\\(\\sum\\limits_{n=0}^\\infty a_nx^n\\)在\\(x = x_1\\)处发散，则当\\(|x|\\gt |x_1|\\)时，\\(\\sum\\limits_{n=1}^\\infty a_nx^n\\)发散.</p>

        <b>定理</b>
        <p>幂级数\\(\\sum\\limits_{n=0}^\\infty a_nx^n\\)的收敛性有且仅有三种可能：</p>
        <p>（1）对于\\(\\forall x \\in (-\\infty, +\\infty)\\)，幂级数都收敛.</p>
        <p>（2）仅在\\(x=0\\)收敛.</p>
        <p>（3）存在一个正数\\(R\\)，当\\(|x|\\lt R\\)时，幂级数绝对收敛，当\\(|x|\\gt R\\)时，幂级数发散.</p>
        <p>上述定理中正数\\(R\\)称为幂级数\\(\\sum\\limits_{n=0}^\\infty a_nx^n\\)收敛半径，开区间\\((-R,R)\\)称为其收敛区间.</p>
        <p>在幂级数的收敛区间基础上考察\\(x=\\pm R\\)时幂级数的敛散性，得出幂级数全部收敛点的集合，称为收敛域.</p>
        <p>[注]若幂级数在点\\(x = x_0\\)处条件收敛，则点\\(x_0\\)必为幂级数收敛区间\\((-R,R)\\)上的一个端点，即\\(R=|_0|\\)</p>

        <h3>求解幂级数收敛半径及收敛区间</h3>

        <h3>幂级数的性质</h3>
        <b>有理运算的性质</b>
        <p>设幂级数\\(\\sum\\limits_{n = 0}^\\infty a_n x^n\\)收敛半径为\\(R_1\\)，幂级数\\(\\sum\\limits_{n = 0}^\\infty b_n x^n\\)收敛半径为\\(R_2\\)，令\\(R = \\min\\{R_1, R_2\\}\\)，则</p>
        $$\\sum\\limits_{n = 0}^\\infty a_n x^n \\pm \\sum\\limits_{n = 0}^\\infty b_n x^n = \\sum\\limits_{n = 0}^\\infty (a_n\\pm b_n) x^n$$
        $$\\sum\\limits_{n = 0}^\\infty a_n x^n\\cdot \\sum\\limits_{n = 0}^\\infty b_n x^n$$
        $$\\frac{\\sum\\limits_{n = 0}^\\infty a_n x^n}{\\sum\\limits_{n = 0}^\\infty b_n x^n}$$
        在\\(x \\in (-R, R)\\)上绝对收敛.
        <br><br>

        <b>分析性质</b>
        <p>设幂级数\\(\\sum\\limits_{n = 0}^\\infty a_n x^n\\)收敛半径为\\(R\\)，和函数为\\(S(x)\\)，则</p>
        <ul>
            <li>连续性：\\(S(x)\\)在收敛域上连续.</li>
            <li>可导性：\\(S(x)\\)在收敛区间\\((-R, R)\\)上可导且逐项可导.
                $$\\begin{align}
                S'(x) &= (\\sum\\limits_{n = 0}^\\infty a_n x^n)' = \\sum\\limits_{n = 0}^\\infty (a_n x^n)'\\\\
                      &= \\sum\\limits_{n = 0}^\\infty na_n x^{n-1} = \\sum\\limits_{n = 1}^\\infty na_n x^{n-1}
                \\end{align}$$
                <p>该幂级数与原幂级数有相同的收敛半径\\((-R, R).\\)</p>
            </li>
            <li>可积性：\\(S(x)\\)在收敛域上可积且逐项可积.
                $$\\begin{align}
                \\int_0^x S(t)\\mathrm{d}t &= \\int_0^x (\\sum\\limits_{n=0}^\\infty a_nt^n)\\mathrm{d}t = \\sum\\limits_{n=0}^\\infty\\int_0^x (a_nt^n)\\mathrm{d}t\\\\
                                         &= \\sum\\limits_{n=0}^\\infty \\frac{a_n}{n + 1}t^{n+1}|_0^x = \\sum\\limits_{n=0}^\\infty \\frac{a_n}{n+1}x^{n+1}
                \\end{align}$$
                <p>该幂级数与原幂级数有相同的收敛半径\\((-R, R).\\)</p>
            </li>
        </ul>

        <h2>和函数</h2>
        $$S(x) = \\lim\\limits_{n\\rightarrow\\infty}S_n$$

        <hr>
        <h1>幂级数</h1>
        <h2>求解幂级数的收敛半径</h2>
        <b>不缺项幂级数\\(\\sum\\limits_{n = 0}^\\infty a_n x^n\\)</b>
        $$R = \\frac{1}{\\lim\\limits_{n\\rightarrow \\infty}|\\frac{a_{n+1}}{a_n}|} = \\frac{1}{\\lim\\limits_{n\\rightarrow \\infty}\\sqrt[n]{|a_n|}}$$

        <b>缺项幂级数</b>
        <p>例如仅含偶数项幂级数\\(\\sum\\limits_{n = 0}^\\infty a_{2n} x^{2n}\\)或仅含奇数项幂级数\\(\\sum\\limits_{n = 0}^\\infty a_{2n+1} x^{2n+1}\\)</p>
        <p>满足\\(\\lim\\limits_{n\\rightarrow \\infty}|\\frac{u_{n+1}(x)}{u_n(x)}|\\lt 1\\)的范围即为幂级数的收敛区间.</p>

        <h2>幂级数收敛区间</h2>
        <b>\\(\\sum\\limits_{n = 0}^\\infty a_n x^n\\)或缺项级数</b>
        <p>计算幂级数收敛半径\\(R\\).</p>
        $$x \\in (-R, R)$$
        <b>\\(\\sum\\limits_{n = 0}^\\infty a_n (x - t)^n\\)</b>
        <p>求\\(\\sum\\limits_{n = 0}^\\infty a_n x^n\\)的收敛半径\\(R\\)</p>
        $$x - t \\in (-R, R)\\Rightarrow x\\in (-R+t, R+t)$$
        <p>\\(\\)</p>

        <h2>幂级数收敛域</h2>
        <p>在幂级数收敛区间的基础上，将收敛区间的左右两端点带入幂级数，求解两个端点下幂级数的敛散性。</p>

        <h2>函数的幂级数展开</h2>
        <p>设函数\\(f(x)\\)在开区间\\((x_0 - R, x_0 + R)\\)内有定义，若</p>
        $$f(x)  = \\sum\\limits_{n=0}^\\infty a_n(x-x_0)^n$$
        对\\(\\forall x \\in (x_0-R, x_0+R)\\)都成立，则称函数\\(f(x)\\)在区间\\((x_0-R, x_0+R)\\)上能展开为\\(x-x_0\\)的幂级数.
        <p>函数\\(f(x)\\)在区间\\((x_0-R, x_0+R)\\)上能展开为\\(x-x_0\\)的幂级数\\(\\Rightarrow f(x)\\)在区间\\((x,x_0)\\)上有任意阶导数，且展开式是唯一的.</p>
        $$a_n = \\frac{f^{(n)}(x_0)}{n!}, n=0,1,2,\\cdots$$
        <h3><a href="/note/math/mathematic/1.3taylorformula">泰勒级数与麦克劳林级数</a></h3>


        <h2>傅里叶级数</h2>
        <p>设函数\\(f(x)\\)是周期为\\(2\\pi\\)的周期函数，且在\\([-\\pi, \\pi]\\)上可积，若</p>
        $$f(x) \\sim \\frac{a_0}{2} + \\sum\\limits_{n=1}^\\infty(a_n\\cos nx + b_n\\sin nx)$$
        称其为\\(f(x)\\)的傅里叶级数.
        $$a_n = \\frac{1}{\\pi} \\int_{-\\pi}^\\pi f(x) \\cos nx \\mathrm{d}x, n=0,1,2,\\cdots$$
        $$b_n = \\frac{1}{\\pi} \\int_{-\\pi}^\\pi f(x) \\sin nx \\mathrm{d}x, n=1,2,\\cdots$$
        称为\\(f(x)\\)的傅里叶系数.

        <br><br>

        <h3>收敛定理（狄利克雷条件）</h3>
        <p>设\\(f(x)\\)为周期函数，若其满足：</p>
        <ul>
            <li>在一个周期内连续或只有有限个第一类间断点</li>
            <li>在一个周期内至多只有有限个极值点</li>
        </ul>
        <p>则\\(f(x)\\)的傅里叶级数收敛，且：</p>
        <ul>
            <li>\\(x_0\\)为\\(f(x)\\)连续点\\(\\Rightarrow\\)级数收敛于\\(f(x_0)\\)</li>
            <li>\\(x_0\\)为\\(f(x)\\)间断点\\(\\Rightarrow\\)级数收敛于\\(\\frac{1}{2}[f(x_0^-) + f(x_0^+)]\\)</li>
        </ul>


        <h3>周期为\\(2\\pi\\)函数\\(f(x)\\)的展开</h3>
        <b>奇函数在\\([-\\pi, \\pi\\)上的傅里叶级数</b>
        $$a_n = 0, n = 0,1,2, \\cdots$$
        $$b_n = \\frac{2}{\\pi}\\int_0^\\pi f(x)\\sin nx \\mathrm{d}x, n=1,2,\\cdots$$
        <b>\\(f(x)\\)为偶函数</b>
        $$a_n = \\frac{2}{\\pi}\\int_0^\\pi f(x)\\cos nx \\mathrm{d}x, n=0,1,2\\cdots$$
        $$b_n = 0, n=1,2,\\cdots$$

        <b>在\\([0,\\pi]\\)上函数\\(f(x)\\)的正弦级数和余弦级数</b>
        <p>（1）将\\(f(x)\\)延拓成\\([-\\pi, \\pi]\\)上的奇函数，则</p>
        $$a_0, n=0,1,2\\cdots$$
        $$b_n = \\frac{2}{\\pi}\\int_0^\\pi f(x)\\sin nx \\mathrm{d}x, n=1,2,\\cdots$$
        <p>\\(f(x)\\)的正弦级数为：</p>
        $$f(x) \\sim \\sum\\limits_{n=1}^\\infty b_n\\sin nx$$

        <p>（2）将\\(f(x)\\)延拓成\\([-\\pi, \\pi]\\)上的偶函数，则</p>
        $$a_n = \\frac{2}{\\pi}\\int_0^\\pi f(x)\\cos nx \\mathrm{d}x, n=0,1,2\\cdots$$
        $$b_n = 0, n=1,2,\\cdots$$
        <p>\\(f(x)\\)的余弦级数为：</p>
        $$f(x)\\sim \\frac{a_0}{2} + \\sum\\limits_{n=1}^\\infty a_n\\cos nx$$


        <b>周期为\\(2l\\)的函数的展开</b>
        <p>在\\([-l,l]\\)上函数\\(f(x)\\)的傅里叶级数为</p>
        $$f(x)\\sim \\frac{a_0}{2} + \\sum\\limits_{n=1}^\\infty(a_n\\cos \\frac{n\\pi}{l}x + b_n\\sin\\frac{n\\pi}{l}x)$$
        $$a_n = \\frac{1}{l}\\int_{-l}^{l}f(x)\\cos\\frac{n\\pi}{l}x\\mathrm{d}x, n=0,1,2,\\cdots$$
        $$b_n = \\frac{1}{l}\\int_{-l}^lf(x)\\sin\\frac{n\\pi}{l}x\\mathrm{d}x, n=1,2,\\cdots$$


        <b>在\\([-l,l]\\)上奇偶函数的傅里叶级数展开</b>
        <p>\\(f(x)\\)为奇函数</p>
        $$a_n = 0, n=0,1,2,\\cdots$$
        $$b_n = \\frac{2}{l}\\int_0^lf(x)\\sin\\frac{n\\pi}{l}x\\mathrm{d}x, n=1,2,\\cdots$$
        $$f(x)\\sim \\sum\\limits_{n=1}^\\infty b_n\\sin\\frac{n\\pi}{l}x$$

        <p>\\(f(x)\\)为偶函数</p>
        $$a_n = \\frac{2}{l}\\int_0^{l}f(x)\\cos\\frac{n\\pi}{l}x\\mathrm{d}x, n=0,1,2,\\cdots$$
        $$b_n = 0, n=1,2,\\cdots$$
        $$f(x)\\sim \\frac{a_0}{2} + \\sum\\limits_{n=1}^\\infty a_n\\cos \\frac{n\\pi}{l}x$$

        <b>在\\([0,l]\\)上\\(f(x)\\)的正弦级数和余弦级数</b>
        <p>（1）将\\(f(x)\\)延拓成\\([-l,l]\\)上的奇函数，则</p>
        $$a_n = 0, n=0,1,2,\\cdots$$
        $$b_n = \\frac{2}{l}\\int_0^lf(x)\\sin\\frac{n\\pi}{l}x\\mathrm{d}x, n=1,2,\\cdots$$
        $$f(x)\\sim \\sum\\limits_{n=1}^\\infty b_n\\sin\\frac{n\\pi}{l}x$$

        <p>（1）将\\(f(x)\\)延拓成\\([-l,l]\\)上的偶函数，则</p>
        $$a_n = \\frac{2}{l}\\int_0^{l}f(x)\\cos\\frac{n\\pi}{l}x\\mathrm{d}x, n=0,1,2,\\cdots$$
        $$b_n = 0, n=1,2,\\cdots$$
        $$f(x)\\sim \\frac{a_0}{2} + \\sum\\limits_{n=1}^\\infty a_n\\cos \\frac{n\\pi}{l}x$$


        <ul class="navibar">
            <li><a href="/note/math/mathematic/chapter9">上一页</a></li>
            <li class="catalog"><a href="/note/math/mathematic/mathematic">主页</a></li>
            <li class="next"><a href="/note/math/mathematic/chapter11">下一页</a></li>
        </ul>` },
  "note/math/mathematic/chapter2": { title: "高等数学", content: `<h1>第二章 导数与微分</h1>

        
        
        <h2>第二节 微分</h2>
        <h3>微分的定义</h3>
        <p>设函数\\(y = f(x)\\)在点\\(x_0\\)的某邻域内有定义，\\(\\Delta x\\)是\\(x\\)在\\(x_0\\)处的增量，\\(x_0 + \\Delta x\\)在该邻域内。</p>
        <b>曲线的增量</b>
        $$\\Delta y = f(x_0 + \\Delta x) - f(x_0)$$
        <b>直线\\(y = Ax + B\\)的增量</b>

        $$\\mathrm{d} y = f(x_0 + \\Delta x) - f(x_0) = A\\Delta x$$
        若
        $$\\lim\\limits_{\\Delta x \\rightarrow 0}\\frac{\\Delta y - A\\Delta x}{\\Delta x} = 0\\Leftrightarrow\\Delta y = A\\Delta x + o(\\Delta x)$$
        则称函数\\(y = f(x)\\)在点\\(x_0\\)处可微.
        <p>\\(\\mathrm{d}y = \\mathrm{d}f(x) = A\\Delta x\\)称为\\(y=f(x)\\)在\\(x_0\\)处的微分。</p>
        <p>自变量\\(x\\)的增量\\(\\mathrm{d}x = \\Delta x\\)称为自变量的微分。</p>
        <p>由于\\(A = f'(x)\\)，故函数\\(y = f(x)\\)的积分又可写为\\(\\mathrm{d}y = f'(x)\\mathrm{d}x\\)</p>
        $$可导\\Leftrightarrow 可微$$
        <p>可微一定连续，连续不一定可微</p>

        <b>微分近似计算</b>
        <p>\\(\\Delta y = f(x_0 + \\Delta x) - f(x) \\approx \\mathrm{d}y = f'(x_0)\\Delta x\\) </p>

        <p>[注]\\(\\mathrm{d}(f(x) + C) = f'(x)\\mathrm{d}x\\)</p>

        <ul class="navibar">
            <li><a href="/note/math/mathematic/chapter1">上一页</a></li>
            <li class="catalog"><a href="/note/math/mathematic/mathematic">主页</a></li>
            <li class="next"><a href="/note/math/mathematic/chapter3">下一页</a></li>
        </ul>` },
  "note/math/mathematic/chapter3": { title: "高等数学", content: `<h1>第三章 微分中值定理与导数的应用</h1>

        <h2>微分中值定理</h2>

        <div class="Card-Definition">
            <h3>费马引理</h3>
            <b>定义</b>
            <p>设函数\\(f(x)\\)在\\(x_0\\)处可导，若函数\\(f(x)\\)在\\(x_0\\)处取得极值，则\\(f'(x_0) = 0\\).</p>
            <b>描述</b>
            <p>\\(f(x)\\)极值处导数为\\(0\\).</p>
        </div>

        <div class="Card-Definition">
            <h3>罗尔定理</h3>
            <p>若函数\\(f(x)\\)在\\([a,b]\\)上连续，在\\((a,b)\\)上可导，\\(f(a) = f(b)\\)，则至少存在一点\\(\\xi \\in (a,b)\\)，使得\\(f'(\\xi) = 0\\).</p>
        </div>

        <div class="Card-Definition">
            <h3>拉格朗日中值定理</h3>
            <b>定义</b>
            <p>设\\(f(x)\\)在\\([a,b]\\)上连续，在\\((a,b)\\)内可导，则至少存在一点\\(\\xi\\in(a,b)\\)，使得\\(f'(\\xi) = \\frac{f(b) - f(a)}{b-a}\\)</p>
    
            <b>形式2</b>
            <p>设\\(f(x)\\)在\\([a,b]\\)上连续，在\\((a,b)\\)内可导，则至少存在一点\\(\\theta\\in(0,1)\\)，使得\\(f'(a + \\theta(b-a)) = \\frac{f(b) - f(a)}{b-a}\\)</p>
            <div class="Prove">
                $$a\\lt \\xi \\lt b\\Rightarrow 0\\lt \\xi-a \\lt b-a \\Rightarrow 0\\lt \\frac{\\xi-a}{b-a}\\lt 1$$
                <p>令\\(\\frac{\\xi - a}{b - a} = \\theta\\)</p>
                $$\\xi = a + \\theta(b-1)$$
            </div>
        </div>


        <h3>柯西中值定理</h3>
        <p>设\\(f(x), F(x)\\)在\\([a,b]\\)上连续，在\\((a,b)\\)内可导，且\\(F'(x) \\neq 0\\)，则至少存在一点\\(\\xi\\in(a,b)\\)，使得</p>
        $$\\frac{f(b) - f(a)}{F(b) - F(a)} = \\frac{f'(\\xi)}{F'(\\xi)}$$

        <h3>泰勒中值定理</h3>
        <p>设\\(f(x)\\)在含有\\(x_0\\)的\\((a,b)\\)内有\\(n + 1\\)阶导数，则当\\(x\\in (a,b)\\)时，</p>
        $$f(x) = f(x_0) + f'(x_0)(x-x_0) + \\frac{f''(x_0)}{2!}(x-x_0)^2 + \\cdots + \\frac{f^{(n)}(x_0)}{n!}(x - x_0)^n + \\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}$$
        其中\\(\\xi \\in (x_0, x)\\)，\\(R(n) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}\\)称为拉格朗日余项。

        <ul class="navibar">
            <li><a href="/note/math/mathematic/chapter2">上一页</a></li>
            <li class="catalog"><a href="/note/math/mathematic/mathematic">主页</a></li>
            <li class="next"><a href="/note/math/mathematic/chapter4">下一页</a></li>
        </ul>` },
  "note/math/mathematic/chapter8": { title: "高等数学", content: `<h1>第八章 多元函数微分学</h1>

        <div class="PageCatalog">
            <ul>
                <li><a href="#Limitation">二元函数极限</a></li>
                <li><a href="#Continuity">二元函数连续性</a></li>
                <li><a href="#PartialDerivative">二元函数偏导数</a></li>
                <li><a href="#CompleteDifferential">全微分</a></li>
                <li><a href="#ImplicitFun">隐函数求偏导</a></li>
                <li><a href="#Extreme">极值</a></li>
            </ul>
        </div>

        <h2>多元函数的基本概念</h2>
        <div class="Card-Definition">
            <h3>二元函数</h3>
            $$z = f(x,y)$$
            <ul>
                <li>自变量：\\(x,y\\)</li>
                <li>因变量：\\(z\\)</li>
                <li>定义域：\\((x,y)\\in \\mathbb{D}\\)</li>
                <li>值域：\\(z \\in \\mathbb{R}\\)</li>
            </ul>
            <b>几何意义</b>
            <p>表示空间中的曲面.</p>
        </div>


        <div class="Card-Definition" id="Limitation">
            <h3>二元函数的极限</h3>
            <p>设\\(z = f(x,y)\\)在区域\\(D\\)上有定义，点\\(P_0(x_0, y_0)\\in D\\)或在区域\\(D\\)的边界上，对于\\(\\forall \\epsilon\\gt 0, \\exists \\delta \\gt 0\\)，使得\\(P(x,y)\\in D\\)，且\\(0\\lt \\sqrt{(x-x_0)^2 + (y-y_0)^2}\\lt \\delta\\)时，都有\\(|f(x,y) - A|\\lt \\epsilon\\)</p>
            <p>称\\(f(x,y)\\)在\\((x,y)\\rightarrow (x_0, y_0)\\)时极限值为\\(A\\)，记为</p>
            $$\\lim\\limits_{(x,y)\\rightarrow(x_0,y_0)}f(x,y)=A$$
            <p>[注]二元函数极限路径任意</p>
        </div>

        
        <div class="Card-Method">
            <h2>判断\\(\\lim\\limits_{(x,y)\\rightarrow(x_0,y_0)}f(x,y)\\)是否存在</h2>
            <b>特殊路径法</b>
            <p>令\\(y = kf(x)\\)，代入极限得函数\\(g\\).</p>
            <p>若\\(g\\)与\\(k\\)的取值有关，则说明极限不存在.</p>
            <p>[注]预设\\(kf(x)\\)时，尽量将原函数中的\\(x\\)消去.</p>
        </div>

        <div class="Card-Method">
            <h2>求二元极限的方法</h2>
            <b>夹逼定理</b>
            $$\\lim f(x) = 0 \\Leftrightarrow \\lim |f(x)| = 0$$
        </div>

        <div class="Card-Method">
            <h2>判断\\(f(x,y)\\)在点\\((x_0,y_0)\\)处是否连续</h2>
            <p>判断\\(\\lim\\limits_{(x,y)\\rightarrow(x_0,y_0)}f(x,y)\\)是否等于\\(f(x_0, y_0)\\)</p>
        </div>
        
        <b>二元函数的性质</b>
        <ul>
            <li>有界性</li>
            <li>保号性</li>
            <li>有理运算</li>
            <li>极限与无穷小的关系</li>
            <li>夹逼性</li>
        </ul>

        <div class="Card-Definition" id="Continuity">
            <b>多元函数连续性</b>
            <p>设多元函数\\(z = f(x,y)\\)在区域\\(D\\)上有定义，点\\(P_0(x_0, y_0) \\in D\\)，若\\(\\lim\\limits_{(x,y)\\rightarrow (x_0, y_0)}f(x,y) = f(x_0,y_0)\\)，称\\(f(x,y)\\)在\\(P_0(x_0, y_0)\\)处连续。</p>
            <p>若\\(f(x,y)\\)在区域\\(D\\)上每个点\\((x,y)\\)都连续，称\\(z = f(x,y)\\)在区域\\(D\\)上连续。</p>
        </div>


        <b>多元连续函数的性质</b>
        <p>多元连续函数的四则运算均为连续函数</p>
        <p>多元连续函数的复合函数仍为连续函数</p>
        <p>多元初等函数在其定义域内连续</p>
        <p>最值定理：有界闭区域\\(D\\)上的多元连续函数必有最大值和最小值</p>

        <div class="Card-Definition" id="PartialDerivative">
            <b>偏导数</b>
            <p>设\\(z = f(x,y)\\)在点\\(P_0(x_0,y_0)\\)的某邻域内有定义，若</p>
            $$\\lim\\limits_{\\Delta x \\rightarrow 0} \\frac{f(x_0 + \\Delta x, y_0) - f(x_0, y_0)}{\\Delta x} = \\lim\\limits_{x\\rightarrow x_0}\\frac{f(x, y_0) - f(x_0, y_0)}{x-x_0}$$
            存在，称其为\\(f(x,y)\\)在\\(P_0(x_0,y_0)\\)处关于\\(x\\)的偏导数，记为\\(\\frac{\\partial f}{\\partial x}|_{(x_0, y_0)}\\)或\\(f'_x(x_0, y_0)\\).
            <p>同理，\\(f(x,y)\\)在\\(P_0(x_0,y_0)\\)处关于\\(y\\)的偏导数记为\\(\\frac{\\partial f}{\\partial y}|_{(x_0, y_0)}\\)或\\(f'_y(x_0, y_0)\\).</p>
    
            <b>二元函数偏导数的几何意义</b>
            <p>设\\(M(x_0, y_0, z_0)\\)为曲面\\(z = f(x,y)\\)上一点，过\\(M\\)作平面\\(y = y_0\\)与曲面\\(z = f(x,y)\\)相交，其交线为平面\\(y = y_0\\)上的曲线\\(z = f(x,y_0)\\)，即\\(\\begin{cases}z = f(x,y_0)\\\\y = y_0\\end{cases}\\).</p>
            <p>则\\(f'_x(x_0,y_0)\\)表示该曲线在点\\(M\\)处切线的斜率。</p>
        </div>

        <div class="Card-Method">
            <h2>判断\\(f(x,y)\\)在\\((x_0,y_0)\\)处是否可求偏导</h2>
            <p>若\\(\\lim\\limits_{\\Delta x \\rightarrow 0} \\frac{f(x_0 + \\Delta x, y_0) - f(x_0, y_0)}{\\Delta x} = \\lim\\limits_{x\\rightarrow x_0}\\frac{f(x, y_0) - f(x_0, y_0)}{x-x_0}\\)存在，则\\(f(x,y)\\)在\\((x_0,y_0)\\)处有关于\\(x\\)的偏导数\\(f'_x\\).</p>
            <p>若\\(\\lim\\limits_{\\Delta y \\rightarrow 0} \\frac{f(x_0, y_0 + \\Delta y) - f(x_0, y_0)}{\\Delta y} = \\lim\\limits_{y\\rightarrow y_0}\\frac{f(x_0, y) - f(x_0, y_0)}{y-y_0}\\)存在，则\\(f(x,y)\\)在\\((x_0,y_0)\\)处有关于\\(y\\)的偏导数\\(f'_y\\).</p>
        </div>

        <div class="Card-Method">
            <h2>求偏导数方法</h2>
            <h3>定义法</h3>
            $$f'_x(x_0, y_0) = \\lim\\limits_{\\Delta x \\rightarrow 0} \\frac{f(x_0 + \\Delta x, y_0) - f(x_0, y_0)}{\\Delta x} = \\lim\\limits_{x\\rightarrow x_0}\\frac{f(x, y_0) - f(x_0, y_0)}{x-x_0}$$
            $$f'_y(x_0, y_0) = \\lim\\limits_{\\Delta y \\rightarrow 0} \\frac{f(x_0, y_0 + \\Delta y) - f(x_0, y_0)}{\\Delta y} = \\lim\\limits_{y\\rightarrow y_0}\\frac{f(x_0, y) - f(x_0, y_0)}{y-y_0}$$

            <h3>一般函数求偏导数\\(f'_x(x,y)\\)</h3>
            <p>将\\(y\\)视为常数，对\\(x\\)求导数.</p>
            
            <h3>一般函数求偏导数\\(f'_x(x, y_0)\\)</h3>
            <p>将\\(y_0\\)代入\\(f(x, y)\\)得到\\(f(x, y_0)\\)，将\\(f(x,y_0)\\)对\\(x\\)求导得\\(f'_x(x,y_0)\\).</p>
            
            <h3>复合函数求偏导</h3>
            <p>设\\(z = f(u,v)\\)在\\((u,v)\\)处有连续的偏导数，\\(u = u(x,y), v = v(x,y)\\)在\\((x,y)\\)处偏导数存在，则\\(z = f[u(x,y), v(x,y)]\\)的偏导数为：</p>
            $$\\frac{\\partial z}{\\partial x} = \\frac{\\partial z}{\\partial u}\\frac{\\partial u}{\\partial x} + \\frac{\\partial z}{\\partial v}\\frac{\\partial v}{\\partial x} = f'_u\\frac{\\partial u}{\\partial x} + f'_v\\frac{\\partial v}{\\partial x}$$
            <p>求二阶导数时对\\(f'_u\\)的处理：</p>
            $$\\frac{\\partial f'_u}{\\partial x} = \\frac{\\partial f'_u}{\\partial u}\\frac{\\partial u}{\\partial x} + \\frac{f'_u}{\\partial v}\\frac{\\partial v}{\\partial x}$$
            
            <h3>二阶偏导数</h3>
            $$f''_{xy} = \\frac{\\partial^2 f}{\\partial x\\partial y} = \\frac{\\partial}{\\partial y}(\\frac{\\partial f}{\\partial x})$$
            <p>定理：若\\(f(x,y)\\)的两个二阶混合导数\\(\\frac{\\partial^2 f}{\\partial x \\partial y}, \\frac{\\partial^2 f}{\\partial y \\partial x}\\)在区域\\(D\\)内连续，则\\(\\frac{\\partial^2 f}{\\partial x \\partial y} = \\frac{\\partial^2 f}{\\partial y \\partial x}\\)</p>
            
            <h3>全微分法求隐函数偏导数</h3>
            $$\\mathrm{d}z = \\frac{\\partial z}{\\partial x}\\mathrm{d}x + \\frac{\\partial z}{\\partial y}\\mathrm{d}y$$
        </div>

        
        <h2 id="CompleteDifferential">全微分</h2>

        <div class="Card-Definition">
            <p>若二元函数\\(z = f(x,y)\\)在\\(x_0, y_0\\)处的全增量</p>
            $$\\Delta z = f(x_0 + \\Delta x, y_0 + \\Delta y) - f(x_0, y_0)$$
            可以表示为
            $$\\Delta z = A\\Delta x + B\\Delta y + o(\\rho)$$
            其中\\(A,B\\)与\\(\\Delta x,\\Delta y\\)无关，\\(\\rho = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}\\)
            <p>称\\(z = f(x,y)\\)处可微，而\\(A\\Delta x + B\\Delta y\\)称为\\(z = f(x,y)\\)在\\((x_0,y_0)\\)处的全微分，记为</p>
            $$\\mathrm{d}z = A\\Delta x + B\\Delta y = = \\frac{\\partial z}{\\partial x}\\mathrm{d}x + \\frac{\\partial z}{\\partial y}\\mathrm{d}y$$
        </div>
        
        <div class="Card-Analysis">
            <h2>多元函数性质间的关系</h2>
            <p>偏导数连续\\(\\Rightarrow\\)可微</p>
            <p>可微\\(\\Rightarrow\\)连续\\(\\Rightarrow\\)极限存在</p>
            <p>可微\\(\\Rightarrow\\)偏导数存在</p>
        </div>
        

        <div class="Card-Method">
            <h2>判断是否可微</h2>
            <div class="Formula">
                <p>对于\\(z = f(x,y)\\)，若\\(\\lim\\limits_{(\\Delta x, \\Delta y) \\rightarrow (0,0)}\\frac{f(\\Delta x, \\Delta y) - [f_x'(x_0,y_0)\\Delta x + f_y'(x_0,y_0)\\Delta y]}{\\sqrt{(\\Delta x)^2 + (\\Delta y)^2}} = 0\\)，则称\\(z = f(x,y)\\)在\\((x_0, y_0)\\)处可微.</p>
                <div class="Derivation">
                    <p>由可微的定义：</p>
                    $$\\Delta z = f_x'\\Delta x + f_y'\\Delta y + o(\\rho)$$
                    $$\\Delta z - f_x'\\Delta x - f_y'\\Delta y = o(\\rho)$$
                    $$\\lim\\limits_{(\\Delta x, \\Delta y) \\rightarrow (0,0)} \\frac{\\Delta z - f_x'\\Delta x - f_y'\\Delta y}{\\rho} = 0$$
                    $$\\lim\\limits_{(\\Delta x, \\Delta y) \\rightarrow (0,0)}\\frac{f(\\Delta x, \\Delta y) - [f_x'(x_0,y_0)\\Delta x + f_y'(x_0,y_0)\\Delta y]}{\\sqrt{(\\Delta x)^2 + (\\Delta y)^2}} = 0$$
                </div>
            </div>
        </div>
        
        <div class="Card-Method">
            <h2>全微分求法</h2>
            <h3>一般函数求全微分</h3>
            $$\\mathrm{d}z = \\frac{\\partial z}{\\partial x}\\mathrm{d}x + \\frac{\\partial z}{\\partial y}\\mathrm{d}y$$

            <h3>隐函数求全微分</h3>
            $$f(x,y,z) = 0 \\Rightarrow \\mathrm{d}f(x,y,z) = 0$$
            <p>化简后提出\\(\\mathrm{d}z\\)，得</p>
            $$\\mathrm{d}z = \\frac{\\partial z}{\\partial x}\\mathrm{d}x + \\frac{\\partial z}{\\partial y}\\mathrm{d}y$$
        </div>

        <h2>复合函数微分法</h2>

        <details open>
            <summary>\\(z = f[x(t), y(t)]\\)</summary>
            $$\\frac{\\partial z}{\\partial t} = \\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial t} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial t}$$
        </details>

        <details open>
            <summary>\\(z = f[u(x,y), v(x,y)]\\)</summary>
            $$\\frac{\\partial z}{\\partial x} = \\frac{\\partial z}{\\partial u}\\frac{\\partial u}{\\partial x} + \\frac{\\partial z}{\\partial v}\\frac{\\partial v}{\\partial x}$$
            $$\\frac{\\partial z}{\\partial y} = \\frac{\\partial z}{\\partial u}\\frac{\\partial u}{\\partial y} + \\frac{\\partial z}{\\partial v}\\frac{\\partial v}{\\partial y}$$
        </details>
        
        <b>全微分形式不变性</b>
        <p>设\\(z = f(u,v), u = u(x,y), v = v(x,y)\\)都有连续的一阶偏导数，则\\(z = f[u(x,y), v(x,y)]\\)的全微分为：</p>
        $$\\begin{align}
        \\mathrm{d}z &= \\frac{\\partial z}{\\partial x}\\mathrm{d}x + \\frac{\\partial z}{\\partial y}\\mathrm{d}y\\\\
                    &= (\\frac{\\partial z}{\\partial u}\\frac{\\partial u}{\\partial x} + \\frac{\\partial z}{\\partial v}\\frac{\\partial v}{\\partial x})\\mathrm{d}x + (\\frac{\\partial z}{\\partial u}\\frac{\\partial u}{\\partial y} + \\frac{\\partial z}{\\partial v}\\frac{\\partial v}{\\partial y})\\mathrm{d}y\\\\
                    &= \\frac{\\partial z}{\\partial u}(\\frac{\\partial u}{\\partial x}\\mathrm{d}x + \\frac{\\partial u}{\\partial y}\\mathrm{d}y) + \\frac{\\partial z}{\\partial v}(\\frac{\\partial v}{\\partial x}\\mathrm{d}x + \\frac{\\partial v}{\\partial y}\\mathrm{d}y)\\\\
                    &= \\frac{\\partial z}{\\partial u}\\mathrm{d}u + \\frac{\\partial z}{\\partial v}\\mathrm{d}v
        \\end{align}$$

        <b>常见的多元函数求微分</b>
        $$u = f(x,y,z), z = z(x,y)$$
        $$\\frac{\\partial u}{\\partial x} = \\frac{\\partial f}{\\partial x} + \\frac{\\partial f}{\\partial z}\\frac{\\partial z}{\\partial x}$$

        $$u = f(x,y,z), y = y(x), z = z(x)$$
        $$\\frac{\\mathrm{d}u}{\\mathrm{d}x} = \\frac{\\partial f}{\\partial x} + \\frac{\\partial f}{\\partial y}\\frac{\\mathrm{d}y}{\\mathrm{d}x} + \\frac{\\partial f}{\\partial z}\\frac{\\mathrm{d}z}{\\mathrm{d}x}$$

        <div class="Card-Method" id="ImplicitFun">
            <h2>隐函数求导法</h2>
            <details open>
                <summary>\\(F(x,y) = 0\\Rightarrow y = y(x)\\)</summary>
                <div class="Formula">
                    $$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\frac{F'_x}{F'_y}$$
                    <div class="Derivation">
                        <p>由于\\(y = y(x)\\)是由\\(F(x,y)=0\\)得出的抽象函数，故：</p>
                        $$F[x,y(x)] \\equiv 0$$
                        $$\\frac{\\mathrm{d}F}{\\mathrm{d}x} = \\frac{\\partial F}{\\partial x} + \\frac{\\partial F}{\\partial y}\\frac{\\mathrm{d}y}{\\mathrm{d}x } = 0$$
                        $$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\frac{F'_x}{F'_y}$$
                    </div>               
                </div>
            </details>
    

            <details open>
                <summary>\\(F(x,y,z)\\Rightarrow z = z(x,y)\\)</summary>
                <div class="Formula">
                    $$\\frac{\\partial z}{\\partial x} = -\\frac{F_x'}{F_z'}$$
                    $$\\frac{\\partial z}{\\partial y} = -\\frac{F_y'}{F_z'}$$
                    <div class="Derivation">
                        <p>由于\\(z = z(x,y)\\)是由\\(F(x,y,z) = 0\\)得出的抽象函数，故：</p>
                        $$F[x,y,z(x,y)] \\equiv 0$$
                        $$\\frac{\\mathrm{d}F}{\\mathrm{d}x} = \\frac{\\partial F}{\\partial x} + \\frac{\\partial F}{\\partial z}\\frac{\\partial z}{\\partial x} = 0$$
                        $$\\frac{\\partial z}{\\partial x} = -\\frac{F_x'}{F_z'}$$
                        <p>由\\(x,y\\)的轮换对称性：</p>
                        $$\\frac{\\partial z}{\\partial y} = -\\frac{F_y'}{F_z'}$$
                    </div>
                </div>
            </details>
            <p>\\(\\begin{cases}F(x,y,u,v)\\\\G(x,y,u,v)\\end{cases}\\Rightarrow u(x,y), v(x,y)\\)</p>
            $$\\begin{cases}
            F'_x + F'_u\\frac{\\partial u}{\\partial x} + F'_v\\frac{\\partial v}{\\partial x} = 0\\\\
            G'_x + G'_u\\frac{\\partial u}{\\partial x} + G'_v\\frac{\\partial v}{\\partial x} = 0\\\\
            \\end{cases}\\Rightarrow \\frac{\\partial u}{\\partial x}, \\frac{\\partial v}{\\partial x}$$
    
            $$\\begin{cases}
            F'_y + F'_u\\frac{\\partial u}{\\partial y} + F'_v\\frac{\\partial v}{\\partial y} = 0\\\\
            G'_y + G'_u\\frac{\\partial u}{\\partial y} + G'_v\\frac{\\partial v}{\\partial y} = 0\\\\
            \\end{cases}\\Rightarrow \\frac{\\partial u}{\\partial y}, \\frac{\\partial v}{\\partial y}$$
        </div>

        <h2>多元函数的极值与最值</h2>
        <h3>无约束条件极值</h3>
        <div class="Card-Definition">
            <b>极值</b>
            <p>设\\(z = f(x,y)\\)在点\\(P_0(x_0,y_0)\\)某邻域内有定义，若对该邻域内的任意点\\(P(x,y)\\)有</p>
            <ul>
            <li>\\(f(x,y)\\leq f(x_0,y_0)\\)，称\\(f(x_0,y_0)\\)为极大值，\\((x_0, y_0)\\)为极大值点。</li>
            <li>\\(f(x,y)\\geq f(x_0,y_0)\\)，称\\(f(x_0,y_0)\\)为极小值，\\((x_0, y_0)\\)为极小值点。</li>
            </ul>
    
            <b>极值的必要条件</b>
            <p>\\((x_0,y_0)\\)为极值点\\(\\Rightarrow f'_x(x_0,y_0) = 0, f'_y(x_0,y_0) = 0\\)</p>
        </div>

        <div class="Card-Method" id="Extreme">
            <h2>求极值方法</h2>
            $$\\begin{cases}f'_x = 0\\\\f'_y = 0\\end{cases} \\Rightarrow (x_0,y_0)$$
            <p>\\((x_0, y_0)\\)即为驻点.</p>
            <p>求\\(A = f''_{xx}(x_0,y_0), B = f''_{xy}(x_0,y_0), C = f''_{yy}(x_0,y_0)\\)</p>
            <table>
                <tr>
                    <td rowspan="2">$$AC - B^2 \\gt 0$$</td>
                    <td>$$A \\gt 0$$</td>
                    <td>\\(f(x_0,y_0)\\)为极小值</td>
                </tr>
                <tr>
                    <td>$$A \\lt 0$$</td>
                    <td>\\(f(x_0,y_0)\\)为极大值</td>
                </tr>
                <tr>
                    <td>$$AC - B^2 = 0$$</td>
                    <td colspan="2">无法判断\\(f(x_0,y_0)\\)是否为极值</td>
                </tr>
                <tr>
                    <td>$$AC - B^2 \\lt 0$$</td>
                    <td colspan="2">\\(f_(x_0,y_0)\\)不是极值</td>
                </tr>
            </table>
        </div>

        <div class="Card-Method">
            <h2>条件极值解法</h2>
            <details open>
                <summary><b>求\\(z = f(x.y)\\)在条件\\(\\phi(x,y) = 0\\)下的极值</b></summary>
                <p>构造拉格朗日函数</p>
                $$F(x,y,\\lambda) = f(x,y) + \\lambda\\phi(x,y)$$
                <p>解方程</p>
                $$\\begin{cases}
                F'_x = f'_x + \\lambda \\phi'_x = 0\\\\
                F'_y = f'_y + \\lambda \\phi'_y = 0\\\\
                F'_\\lambda  = \\phi = 0
                \\end{cases}$$
                <p>方程的解\\((x_0,y_0)\\)即为极值点.</p>
            </details>
            
            <details open>
                <summary><b>求\\(z = f(x,y,z)\\)在条件\\(\\phi_1(x,y,z) = 0, \\phi_2(x,y,z) = 0\\)下的极值</b></summary>
                <p>构造拉格朗日函数</p>
                $$F(x,y,z,\\lambda_1, \\lambda_2) = f(x,y,z) + \\lambda_1\\phi_1(x,y,z) + \\lambda_2\\phi_2(x,y,z)$$
                <p>解方程</p>
                $$\\begin{cases}
                F'_x = f'_x + \\lambda_1\\phi'_{1x} + \\lambda_2\\phi'_{2x} = 0\\\\
                F'_y = f'_y + \\lambda_1\\phi'_{1y} + \\lambda_2\\phi'_{2y} = 0\\\\
                F'_z = f'_z + \\lambda_1\\phi'_{1z} + \\lambda_2\\phi'_{2z} = 0\\\\
                F'_{\\lambda_1}  = \\phi_1 = 0\\\\
                F'_{\\lambda_2}  = \\phi_2 = 0
                \\end{cases}$$
                <p>方程的解\\((x_0,y_0,z_0)\\)即为极值点.</p>
            </details>
        </div>

        <h2>最大值和最小值</h2>
        <div class="Card-Definition">
            <b>最值</b>
            <p>设\\(z = f(x,y)\\)在区域\\(D\\)内有定义，点\\(P_0(x_0, y_0)\\in D\\)，对\\(\\forall (x,y)\\in D\\)，有</p>
            <ul>
                <li>\\(f(x,y)\\geq f(x_0,y_0)\\)，称\\(f(x_0,y_0)\\)为最小值，\\((x_0,y_0)\\)为最小值点。</li>
                <li>\\(f(x,y)\\leq f(x_0,y_0)\\)，称\\(f(x_0,y_0)\\)为最大值，\\((x_0,y_0)\\)为最大值点。</li>
            </ul>
        </div>

        <div class="Card-Method">
            <h2>多元函数最值求法</h2>
            <p>先求无条件极值，并保留区域\\(D\\)内的极值点.</p>
            <p>再求满足区域\\(D\\)边界条件的有条件极值.</p>
            <p>比较极值大小，得出最大值与最小值.</p>
        </div>

        <h2>方向导数</h2>
        <div class="Card-Definition">
            <b>方向导数</b>
            <p>设\\(l\\)为\\(xOy\\)平面上以\\(P_0(x_0,y_0)\\)为始点的一条射线，\\(\\mathbf{e}_l = (\\cos\\alpha, \\cos\\beta)\\)为与\\(l\\)同方向的单位向量.</p>
            <p>射线\\(l\\)的参数方程为：</p>
            $$\\begin{cases}
            x = x_0 + t\\cos\\alpha\\\\
            y = y_0 + t\\cos\\beta
            \\end{cases}(t\\geq 0)$$
            <p>函数\\(f(x,y)\\)在点\\((x_0, y_0)\\)处沿方向\\(l\\)的方向导数为：</p>
            $$\\frac{\\partial f}{\\partial l}\\bigg|_{(x_0, y_0)} = \\lim\\limits_{t\\rightarrow 0^+}\\frac{f(x_0 + t\\cos\\alpha, y_0 + t\\cos\\beta) - f(x_0, y_0)}{t}$$
            <p>方向导数\\(\\frac{\\partial f}{\\partial l}\\bigg|_{(x_0, y_0)}\\)就是函数\\(f(x,y)\\)在点\\(P_0(x_0, y_0)\\)沿方向\\(l\\)的变化率.</p>
        </div>

        <div class="Card-Method">
            <h2>判断方向导数是否存在及方向导数的计算</h2>
            <p>若\\(f(x,y)\\)在点\\(P_0(x_0, y_0)\\)可微分，则该函数在该点沿任一方向\\(l\\)的方向导数存在，且</p>
            $$\\frac{\\partial f}{\\partial l}\\bigg|_{(x_0, y_0)} = f_x(x_0,y_0)\\cos\\alpha + f_y(x_0,y_0)\\cos\\beta$$
            <p>其中\\(\\cos\\alpha\\)与\\(\\cos\\beta\\)为方向\\(l\\)的方向余弦.</p>
        </div>

        <div class="Card-Definition">
            <b>梯度</b>
            $$\\nabla f = \\mathbf{grad} f = \\frac{\\partial f}{\\partial x_1}\\mathbf{i}_1 + \\frac{\\partial f}{\\partial x_2}\\mathbf{i}_2 + \\cdots + \\frac{\\partial f}{\\partial x_n}\\mathbf{i}_n$$

            <p>\\(\\nabla\\)称为Nabla算子（向量微分算子）</p>
        </div>

        <ul class="navibar">
            <li><a href="/note/math/mathematic/chapter7">上一页</a></li>
            <li class="catalog"><a href="/note/math/mathematic/mathematic">主页</a></li>
            <li class="next"><a href="/note/math/mathematic/chapter9">下一页</a></li>
        </ul>

        <div id="PageEnd"></div>
        <a class="GoToBottom" href="#PageEnd">Bottom</a>` },
  "note/math/mathematic/chapter9": { title: "高等数学", content: `<h1>第九章 二重积分</h1>

        <h2>二重积分的概念与性质</h2>
        <b>二重积分</b>
        <p>设\\(z = f(x,y)\\)在有界闭区域\\(D\\)上有定有定义，将区域\\(D\\)划分为\\(n\\)个小区域，其中\\(\\Delta \\sigma_i\\)表示第\\(i\\)个小区域的面积。</p>
        $$\\iint\\limits_D f(x,y)\\mathrm{d}x\\mathrm{d}y = \\lim\\limits_{\\lambda\\rightarrow 0}\\sum\\limits_{i=1}^nf(\\epsilon_i, \\eta_i)\\Delta \\sigma_i$$

        <b>二重积分几何意义</b>
        $$\\iint\\limits_D f(x,y)\\mathrm{d}x\\mathrm{d}y = 曲顶柱体体积$$

        <b>二重积分的性质</b>
        <p>（1）若在区域\\(D\\)上\\(f(x,y)\\leq g(x,y)\\)，则</p>
        $$\\iint\\limits_D f(x,y)\\mathrm{d}\\sigma \\leq \\iint\\limits_D g(x,y)\\mathrm{d}\\sigma$$
        <p>（2）</p>
        $$|\\iint\\limits_Df(x,y)\\mathrm{d}\\sigma|\\leq \\iint\\limits_D|f(x,y)|\\mathrm{d}\\sigma$$
        <p>积分中值定理</p>
        $$\\iint\\limits_D f(x,y)\\mathrm{d}\\sigma = f(\\xi, \\eta)\\sigma, (\\xi, \\eta)\\in D$$

        <div class="Card-Method">
            <h2>交换二重积分的积分次序</h2>
            <h3>平面直角坐标系</h3>
            <p>根据现有积分，确定积分区域，再按新次序积分即可.</p>

            <h3>极坐标系</h3>
            <p>根据现有积分，确定积分区域.</p>
            <p></p>
        </div>

        <div class="Card-Method">
            <h2>二重积分的计算</h2>
            <h3>一般方法</h3>
            <p>绘制出积分区域.</p>
            <p>若\\(f(x,y)\\)关于某个变量好积分，关于另一个变量不好积分，交换积分次序.</p>

            <h3>极坐标法</h3>
            <p>将积分区域画出，利用极坐标表示积分区域\\(r\\)的范围\\(r_1(\\theta) \\sim r_2(\\theta)\\)与\\(\\theta\\)的范围\\(\\alpha\\sim\\beta\\).</p>
            $$\\iint\\limits_D f(x,y)\\mathrm{d}\\sigma = \\int_\\alpha^\\beta\\mathrm{d}\\theta\\int_{r_1(\\theta)}^{r_2(\\theta)}f(r\\cos\\theta, r\\sin\\theta)r\\mathrm{d}r$$        
            <b>圆心位于\\((a,b)\\)处</b>
            <p>令\\(x = a + r\\cos\\theta, y = b + r\\sin\\theta\\)</p>

        </div>

        <h2>二重积分的计算</h2>
        <h3>直角坐标系</h3>
        $$\\begin{align}
        \\iint\\limits_D f(x,y)\\mathrm{d}\\sigma &= \\int_a^b\\mathrm{d}x\\int_{\\phi_1(x)}^{\\phi_2(x)}f(x,y)\\mathrm{d}y\\\\
                                              &= \\int_a^b\\mathrm{d}y\\int_{\\phi_1(y)}^{\\phi_2(y)}f(x,y)\\mathrm{d}x
        \\end{align}$$

        <h3>极坐标系</h3>

        <h2>二重积分的对称性</h2>
        <table>
            <tr>
                <td colspan="3">$$\\iint\\limits_D f(x,y)\\mathrm{d}\\sigma$$</td>
            </tr>
            <tr>
                <td rowspan="2">\\(D\\)关于\\(x\\)轴对称</td>
                <td>\\(f(x,y)\\)为\\(y\\)的奇函数</td>
                <td>\\(0\\)</td>
            </tr>
            <tr>
                <td>\\(f(x,y)\\)为\\(y\\)的偶函数</td>
                <td>\\(2\\iint\\limits_{D_0}f(x,y)\\mathrm{d}\\sigma\\)</td>
            </tr>
            <tr>
                <td rowspan="2">\\(D\\)关于\\(y\\)轴对称</td>
                <td>\\(f(x,y)\\)为\\(x\\)的奇函数</td>
                <td>\\(0\\)</td>
            </tr>
            <tr>
                <td>\\(f(x,y)\\)为\\(x\\)的偶函数</td>
                <td>\\(2\\iint\\limits_{D_0}f(x,y)\\mathrm{d}\\sigma\\)</td>
            </tr>
            <tr>
                <td colspan="2">\\(D\\)关于\\(y = x\\)对称</td>
                <td>\\(\\frac12\\iint\\limits_D [f(x,y) + f(y,x)]\\mathrm{d}\\sigma\\)</td>
            </tr>
        </table>
        <p>[注1]：研究\\(f(x,y)\\)关于某一变量的奇偶性时，将另一变量视为常数.</p>
        <p>[注2]：\\(D_0\\)为\\(D\\)关于坐标轴对称的一半.</p>

        <h2>补充说明</h2>
        <p>二重积分的正负性取决于\\(f(x,y)\\)在区域\\(D\\)上的取值。</p>

        <hr>

        <b>求重积分通用解法</b>
        <p>1、画出区域\\(D\\).</p>
        <p>2、观察区域\\(D\\)的对称性，化简二重积分.</p>

        <b>二重积分比较大小</b>
        <p>在区域\\(D\\)上，\\(f(x,y )\\gt g(x, y) \\Rightarrow \\iint\\limits_D f(x, y) \\mathrm{d}x \\gt \\iint\\limits_D g(x,y)\\mathrm{d}x\\)</p>
        <p>核心思路：</p>
        <p>1、找出两个积分共有元\\(\\phi(x,y)\\).</p>
        <p>2、通过\\(D\\)判断\\(\\phi(x,y)\\)的值域.</p>

        <ul class="navibar">
            <li><a href="/note/math/mathematic/chapter8">上一页</a></li>
            <li class="catalog"><a href="/note/math/mathematic/mathematic">主页</a></li>
            <li class="next"><a href="/note/math/mathematic/chapter10">下一页</a></li>
        </ul>` },
  "note/math/mathematic/derivative": { title: "高等数学", content: `<h1>导数</h1>

        <div class="PageCatalog">
            <ul>
                <li><a href="#DefinitionFormula">导数的定义式</a></li>
                <li><a href="#GeometricMeaning">导数的几何意义</a></li>
                <li><a href="#CommonFormula">常用导数公式</a></li>
            </ul>
        </div>

        <div class="Card-Formula" id="DefinitionFormula">
            <b>导数</b>
            $$f'(x_0) = \\lim\\limits_{\\Delta x\\rightarrow 0}\\frac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x} = \\lim\\limits_{x\\rightarrow x_0}\\frac{f(x)-f(x_0)}{x-x_0}$$
            <ul>
                <li>左导数：\\(f'_-(x_0) = \\lim\\limits_{\\Delta x\\rightarrow 0^-}\\frac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}\\)</li>
                <li>右导数：\\(f'_+(x_0) = \\lim\\limits_{\\Delta x\\rightarrow 0^+}\\frac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}\\)</li>
            </ul>
            $$f'(x_0)\\Leftrightarrow f'_-(x_0) = f'_+(x_0)$$
            <p>[注]可导一定连续，连续不一定可导。</p>
            <b>二阶导数</b>
            $$f''(x_0) = \\lim\\limits_{x\\rightarrow x_0}\\frac{f'(x) - f'(x_0)}{x - x_0}$$
        </div>
        
        <div class="Card-Method" id="GeometricMeaning">
            <h2>求曲线的切线方程或法线方程</h2>
            <h3>过曲线上一点</h3>
            <p><b>切线方程</b>：\\(y - f(x_0) = f'(x_0)(x-x_0)\\)</p>
            <p><b>法线方程</b>：\\(y - f(x_0) = -\\frac{1}{f'(x_0)}(x-x_0)\\)</p>

            <h3>过曲线外一点</h3>
            <p>设切线或法线经过曲线上\\((x_0, f(x_0))\\)，求出切线方程或法线方程.</p>
            <p>将曲线外点带入方程求出\\(x_0\\).</p>
        </div>
        
        <div class="Card-Formula" id="CommonFormula">
            <b>常用导数公式</b>
        <table>
            <tr>
                <td colspan="2"><b>三角函数导数</b></td>
            </tr>
            <tr>
                <td>$$(\\sin x)' = \\cos x$$</td>
                <td>$$(\\cos x)' = -\\sin x$$</td>
            </tr>
            <tr>
                <td>$$(\\arcsin x)' = \\frac{1}{\\sqrt{1 - x^2}}$$</td>
                <td>$$(\\arccos x)' = -\\frac{1}{\\sqrt{1-x^2}}$$</td>
            </tr>
            <tr>
                <td>$$(\\tan x)' = \\sec^2x$$</td>
                <td>$$(\\cot x)' = -\\csc^2x$$</td>
            </tr>
            <tr>
                <td>$$(\\arctan x)' = \\frac{1}{1 + x^2}$$</td>
                <td>$$(\\arctan x)' = -\\frac{1}{1 + x^2}$$</td>
            </tr>
            <tr>
                <td>$$(\\sec x)' = \\sec x\\tan x$$</td>
                <td>$$(\\csc x)' = -\\csc x\\cot x$$</td>
            </tr>
            <tr>
                <td colspan="2"><b>指对函数导数</b></td>
            </tr>
            <tr>
                <td>$$(a^x)' = a^x\\ln a(a\\gt 0, a\\neq 1)$$</td>
                <td>$$(e^x)' = e^x$$</td>
            </tr>
            <tr>
                <td>$$(\\log_a x)' = \\frac{1}{x\\ln a}(a\\gt 0, a\\neq 1)$$</td>
                <td>$$(\\ln x)' = \\frac{1}{x}$$</td>
            </tr>
            <tr>
                <td colspan="2"><b>其他函数导数</b></td>
            </tr>
            <tr>
                <td>$$(C)' = 0$$</td>
                <td>$$(x^a)' = ax^{a-1}$$</td>
            </tr>
        </table>
        </div>


        <div class="Card-Method">
            <h2>求隐函数的导数</h2>
            <p>注意将\\(y\\)视为\\(y(x)\\).</p>

            <b>求高阶导数\\(y^{(n)}\\)</b>
            <p>将\\(y^{(n-1)}(x,y)\\)代入表达式表示.</p>
        </div>

        <div class="Card-Method">
            <h2>求反函数的导数</h2>
            <p>设函数\\(y = f(x)\\)的导数为\\(f'(x)\\)，则其反函数\\(x = g(y)\\)的导数为</p>
            $$g'(y) = (f^{-1})'(y) = \\frac{1}{f'(x)}$$
        </div>

        <div class="Card-Property">
            <p>奇函数的导函数是偶函数</p>
            <p>偶函数的导函数是奇函数</p>
            <p>周期函数的导函数仍是周期函数</p>
        </div>

        <div class="Card-Method">
            <h2>求参数方程的导数</h2>
            <p>设\\(y = y(x)\\)由参数方程\\(\\begin{cases}x = x(t)\\\\y = y(t)\\end{cases}\\)确定</p>

            <h3>一阶导数</h3>
            $$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{y'(t)}{x'(t)}$$
            <div class="Prove">
                $$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{\\frac{\\mathrm{d}y}{\\mathrm{d}t}}{\\frac{\\mathrm{d}x}{\\mathrm{d}t}} = \\frac{y'(t)}{x'(t)}, x'(t)\\neq 0$$
            </div>

            <h3>二阶导数</h3>
            $$\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = [\\frac{y'(t)}{x'(t)}]'\\frac{1}{x'(t)}$$
            <div class="Prove">
                $$\\begin{align}
                \\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} &= \\frac{\\mathrm{d}}{\\mathrm{d}x}(\\frac{\\mathrm{d}y}{\\mathrm{d}x})\\\\
                                                    &= \\frac{\\mathrm{d}}{\\mathrm{d}t}(\\frac{\\mathrm{d}y}{\\mathrm{d}x})\\frac{\\mathrm{d}t}{\\mathrm{d}x}\\\\
                                                    &= \\frac{\\mathrm{d}}{\\mathrm{d}t}[\\frac{y'(t)}{x'(t)}]\\frac{1}{x'(t)}\\\\
                                                    &= [\\frac{y'(t)}{x'(t)}]'\\frac{1}{x'(t)}
                \\end{align}$$
            </div>
        </div>

        <p>[注]使用对数求导法时，应将\\(y(x)\\)代回\\(y'\\)的表达式中表示.</p>

        <div class="Card-Formula">
            <b>常用高阶导数公式</b>
            $$\\begin{align}
            &(\\sin x)^{(n)} = \\sin(x + n\\frac{\\pi}{2})\\\\\\\\
            &(\\cos x)^{(n)} = \\cos(x + n\\frac{\\pi}{2})
            \\end{align}$$

            <b>莱布尼兹公式</b>
            $$(u\\cdot v)^{(n)} = \\sum\\limits_{k=0}^{n}C_n^ku^{(k)}v^{(n-k)}$$
        </div>

        <h3>题型</h3> 
        <b>证明函数不等式</b>
        <p>构造辅助函数，将函数不等式问题转化为函数零点问题</p>

        常用结论
        <p>设\\(f(x) = \\phi |x - a|\\)，\\(\\phi(x)\\)在\\(x = a\\)处连续，则\\(f(x)\\)在\\(x=a\\)处可导\\(\\Leftrightarrow \\phi(a) = 0 \\)</p>` },
  "note/math/mathematic/differentialequation": { title: "高等数学", content: `<h1>第七章 微分方程</h1>

        <div class="PageCatalog">
            <ul>
                <li><a href="#FirstOrder">一阶微分方程</a></li>
                <li><a href="#HigherOrder">高阶微分方程</a></li>
            </ul>
        </div>

        <div class="Card-Definition">
            <b>微分方程</b>
            <p>含有未知函数的导数或微分的方程.</p>
            <ul>
                <li>显式：\\(y^{(n)} = f(x,y,y',\\cdots y^{(n-1)})\\)</li>
                <li>隐式：\\(F(x,y,y',\\cdots y^{(n)}) = 0\\)</li>
            </ul>
        </div>

        <div class="Card-Definition">
            <b>微分方程的阶</b>
            <p>微分方程中未知函数最高阶导数的阶数。</p>
        </div>

        <div class="Card-Definition">
            <b>微分方程的解</b>
            <p>满足微分方程的函数。</p>
    
            <b>微分方程的通解</b>
            <p>若\\(n\\)阶微分方程中含有\\(n\\)个任意常数，称为通解。</p>
    
            <b>微分方程的特解</b>
            <p>不含有任意常数的解。</p>
        </div>

        <div class="Card-Definition">
            <b>微分方程的初始条件</b>
            <p>\\(y(x_0) = y_0, y'(x_0) = y'_0, \\cdots y^{(n-1)}(x_0) = y_0^{(n-1)}\\)</p>
        </div>

        <div class="Card-Definition">
            <b>积分曲线</b>
            <p>微分方程的一个解对应平面上的一条曲线。</p>
        </div>


        <div class="Card-Method" id="FirstOrder">
            <h2>求解一阶微分方程的方法</h2>
            <details open>
                <summary><b>变量可分离微分方程</b></summary>
                $$\\frac{\\mathrm{d}y}{\\mathrm{d}x}=f(x)g(y)\\Rightarrow \\int\\frac{1}{g(y)}\\mathrm{d}y = \\int f(x)\\mathrm{d}x$$
            </details>
            
            <details open>
                <summary><b>齐次微分方程</b></summary>
                $$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\phi(\\frac{y}{x})$$
                <p>令\\(\\frac{y}{x} = t\\)</p>
                $$\\therefore y = tx \\Rightarrow \\frac{\\mathrm{d}y}{\\mathrm{d}x} = t + x\\frac{\\mathrm{d}t}{\\mathrm{d}x} = \\phi(t)$$
                $$\\therefore \\int \\frac{1}{\\phi(t)-t  }\\mathrm{d}t = \\int \\frac{1}{x}\\mathrm{d}x$$            
            </details>
            
            <details open>
                <summary><b>一阶线性微分方程</b></summary>
                $$y'(x) + p(x)y(x) = q(x)$$
                <p>通解为：</p>
                $$y = e^{-\\int p(x)\\mathrm{d}x}\\int e^{\\int p(x)\\mathrm{d}x}q(x)\\mathrm{d}x$$
                <div class="Prove">
                    $$e^{\\int p(x)\\mathrm{d}x}y'(x) + e^{\\int p(x)\\mathrm{d}x}p(x)y(x) = e^{\\int p(x)\\mathrm{d}x}q(x)$$
                    $$[e^{\\int p(x)\\mathrm{d}x}y(x)]' = e^{\\int p(x)\\mathrm{d}x}q(x)$$
                    $$y = e^{-\\int p(x)\\mathrm{d}x}\\int e^{\\int p(x)\\mathrm{d}x}q(x)\\mathrm{d}x$$
                </div>
                <p>[注]：\\(\\int p(x) \\mathrm{d}x = P(x)\\)</p>
            </details>

            <details open>
                <summary><b>伯努利方程</b></summary>
                
                <p>形如\\(y'(x) + p(x)y(x) = q(x) y^\\alpha(x)(\\alpha \\neq 0,1)\\)的方程。</p>
                <p>转化为一阶线性微分方程\\(\\frac{\\mathrm{d}u}{\\mathrm{d}x} +(1-\\alpha)p(x)u = (1-\\alpha)q(x)\\)的形式。</p>
                <div class="Prove">
                    <p>令\\(u = y^{1-\\alpha}\\)</p>
                    $$\\therefore \\frac{\\mathrm{d}u}{\\mathrm{d}x} = (1-\\alpha)y^{-\\alpha}\\frac{\\mathrm{d}y}{\\mathrm{d}x}$$
                    $$(1-\\alpha)y^{-\\alpha}y'(x) + (1-\\alpha)y^{-\\alpha}p(x)y(x) = (1-\\alpha)y^{-\\alpha}q(x) y^\\alpha(x)$$
                    $$\\frac{\\mathrm{d}u}{\\mathrm{d}x} +(1-\\alpha)p(x)u = (1-\\alpha)q(x)$$
                </div>
            </details>

            <details open>
                <summary><b>全微分方程</b></summary>
                $$\\frac{\\partial u}{\\partial x}\\mathrm{d}x + \\frac{\\partial u}{\\partial y}\\mathrm{d}y = \\mathrm{d}u(x,y) = 0$$
                $$u(x,y) = C$$
            </details>
            
            <p>[注]求解微分方程时，经过积分步骤一定要加常数\\(C\\).</p>
            <p>[注]求解微分方程时，绝对值通常可以被\\(C\\)吸收，即\\(\\pm C = C\\).</p>
            <p>[注]在微分方程中，\\(y\\)可以是\\(x\\)的函数，\\(x\\)也可以是\\(y\\)的函数.</p>
            <p>[注]求解微分方程时，\\(\\int \\frac{1}{x}\\mathrm{d}x = \\ln x + C\\)，原因如下：</p>
            $$\\int \\frac{1}{x}\\mathrm{d}x = \\ln|x| + C = \\ln|x| + \\ln C = \\ln C|x|$$
            <p>由于\\(C\\)可以取任意常数，故</p>
            $$\\int \\frac{1}{x} \\mathrm{d}x = \\ln x + C$$
            <p>[注]通解计算过程中出现反三角函数时，计算\\(C\\)值用带有反三角函数的式子计算，因为其范围更小.</p>
            
        </div>



        <b>全微分方程</b>

        <div class="Card-Method">
            <h2>可降阶微分方程</h2>
            <b>\\(y^{(n)}=f(x)\\)型</b>
            $$\\int y^{(n)} \\mathrm{d}x = \\int f(x)\\mathrm{d}x$$
            <hr>
    
            <b>\\(y''(x) = f(x)\\)型</b>
            <p>令\\(y' = p(x)\\)</p>
            $$y'' = \\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = \\frac{\\mathrm{d}}{\\mathrm{d}x}\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{\\mathrm{d}p}{\\mathrm{d}x}$$
            $$\\frac{\\mathrm{d}p}{\\mathrm{d}x} = f(x, p(x))$$
            <hr>
    
            <b>\\(y'' = f(y,y')\\)型</b>
            <p>令\\(y' = p(y)\\)</p>
            $$y'' = \\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = \\frac{\\mathrm{d}}{\\mathrm{d}x}(\\frac{\\mathrm{d}y}{\\mathrm{d}x}) = \\frac{\\mathrm{d}y}{\\mathrm{d}x} \\cdot \\frac{\\mathrm{d}}{\\mathrm{d}y}(\\frac{\\mathrm{d}y}{\\mathrm{d}x}) = p\\frac{\\mathrm{d}p}{\\mathrm{d}x}$$
            $$p\\frac{\\mathrm{d}p}{\\mathrm{d}x} = f(y, p(y))$$
        </div>
        <p>[注1]：求特解时，当即解出对应的常数值，而不是等到最后一起解。</p>


        <h2 id="HigherOrder">高阶线性微分方程</h2>

        <b>线性微分方程解的结构</b>
        <ul>
            <li>齐次线性微分方程：\\(y'' + p(x)y' + q(x)y = 0\\)</li>
            <li>非齐次线性微分方程：\\(y'' + p(x)y' + q(x)y = f(x)\\)</li>
        </ul>
        <p>设\\(y_1(x), y_2(x)\\)是齐次方程的两个线性无关解</p>
        <p>设\\(y_1^*(x), y_2^*(x)\\)是非齐次方程的两个线性无关解</p>

        <p>[注]：\\(\\frac{y_1(x)}{y_2(x)}\\neq c \\Rightarrow y_1(x),y_2(x)\\)线性无关</p>

        <b>齐次线性微分方程解的结构：</b>
        $$y = C_1y_1(x) + C_2y_2(x)~~ C_1,C_2\\in \\mathbb{R}$$

        <b>非齐次线性微分方程解的结构：</b>
        $$y = C_1y_1(x) + C_2y_2(x) + y_1^*(x)~~ C_1,C_2\\in \\mathbb{R}$$


        <div class="Card-Method">
            <h2>常系数齐次线性微分方程的解法</h2>

            <details open>
                <summary id="2LinearHomo"><b>二阶齐次微分方程</b></summary>
                $$y'' + py' + qy = 0，其中p,q是确定实数$$
                <p>特征方程：</p>
                $$r^2 + pr + q = 0$$
                <p>设\\(r_1, r_2\\)是特征方程的两个解：</p>
                <table>
                    <tr>
                        <td>\\(\\Delta\\)</td>
                        <td>\\(r\\)</td>
                        <td>通解</td>
                    </tr>
                    <tr>
                        <td>$$\\Delta \\gt 0$$</td>
                        <td>$$r_1 \\neq r_2$$</td>
                        <td>$$y = C_1 e^{r_1x} + C_2e^{r_2 x}$$</td>
                    </tr>
                    <tr>
                        <td>$$\\Delta = 0$$</td>
                        <td>$$r_1 = r_2 = r$$</td>
                        <td>$$y = (C_1 + C_2 x) e^{r x}$$</td>
                    </tr>
                    <tr>
                        <td>$$\\Delta \\lt 0$$</td>
                        <td>$$r_{1,2} = \\alpha \\pm i\\beta$$</td>
                        <td>$$y = e^{\\alpha x}(C_1\\cos \\beta x + C_2\\sin \\beta x)$$</td>
                    </tr>
                </table>
            </details>

            <details open>
                <summary><b>\\(n\\)阶齐次微分方程</b></summary>
                $$y^{(n)} + p_1y^{(n-1)} + \\cdots + p_{n-1}y' + p_ny = 0$$
                <p>其中\\(p_1, p_2, \\cdots, p_n\\)为常数.</p>
                <p>特征方程：</p>
                $$r^n + p_1r^{n-1} + p_2r^{n-2} + \\cdots + p_{n-1}r + p_n = 0$$
                <table>
                    <tr>
                        <td>根中包含</td>
                        <td>通解中增加项</td>
                    </tr>
                    <tr>
                        <td>单实根\\(r\\)</td>
                        <td>$$Ce^{rx}$$</td>
                    </tr>
                    <tr>
                        <td>\\(k\\)重实根</td>
                        <td>$$(C_1 + C_2x + \\cdots + C_kx^{k-1})e^{rx}$$</td>
                    </tr>
                    <tr>
                        <td>一对单复根\\(r_{1,2} = \\alpha \\pm \\beta i\\)</td>
                        <td>$$e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)$$</td>
                    </tr>
                    <tr>
                        <td>一对\\(k\\)重复根\\(r_{1,2} = \\alpha \\pm \\beta i\\)</td>
                        <td>$$e^{\\alpha x}[(C_{11} + C_{12}x + \\cdots + C_{1k}x^{k-1})\\cos\\beta x + (C_{21} + C_{22}x + \\cdots + C_{2k}x^{k-1})\\sin\\beta x]$$</td>
                    </tr>
                </table>


            </details>
        </div>

        <div class="Card-Property">
            <b>常系数齐次线性微分方程\\(f(y)\\)的性质</b>
            <p>若\\(y_1(x), y_2(x)\\)为\\(f(y) = 0\\)的两个不同特解，则通解为：</p>
            $$y = C[y_1(x) - y_2(x)]$$
            $$\\begin{align}f(y_1) = 0\\\\f(y_2) = 0\\end{align}\\Rightarrow f(y_1) - f(y_2) = f(y_1 - y_2) = 0$$
            <p>\\(y_1 - y_2\\)一定为\\(f(x)\\)的非零解.</p>
            <p>故\\(f(x)\\)通解为\\(C(f_1 - f_2)\\)</p>

            <b>齐次方程的叠加原理</b>
            <p>\\(L(y) = f_1(x)\\)的解为\\(y_1(x)\\).</p>
            <p>\\(L(y) = f_2(x)\\)的解为\\(y_2(x)\\).</p>
            <p>则\\(L(y) = f_1(x) + f_2(x)\\)的解为\\(y_1(x) + y_2(x)\\).</p>
            $$L(y_1 + y_2) = L(y_1) + L(y_2) = f_1(x) + f_2(x)$$
        </div>

        <div class="Card-Method">
            <h2>常系数非齐次线性微分方程</h2>
            $$y'' + py' + qy = f(x)，其中p,q为确定实数$$
            <p>1、求解齐次方程\\(y'' + py' + q = 0\\)的通解</p>
            <p>2、求解非齐次方程\\(y'' + py' + q = f(x)\\)的特解</p>
            <p>用待定系数法求特解，将与\\(f(x)\\)结构一致的\\(y^*\\)代入非齐次方程</p>

            <details open>
                <summary>\\(f(x) = e^{\\lambda x} P_m(x)\\)</summary>
                $$y'' + py' + qy = e^{\\lambda x}P_m(x)$$

                <div class="Formula">
                    <table>
                        $$y^* = x^tR_m(x)e^{\\lambda x}$$
                        $$t = \\begin{cases}
                        0,~\\lambda不为特征方程的根\\\\
                        1,~\\lambda为特征方程的单根\\\\
                        2,~\\lambda为特征方程的重根
                        \\end{cases}$$
                    </table>
                    <div class="Derivation">
                        <p>令\\(y^* = e^{\\lambda x}R(x)\\)</p>
                        $$\\begin{cases}
                        y^* = e^{\\lambda x}R(x)\\\\
                        {y^*}' = \\lambda e^{\\lambda x}R(x) + e^{\\lambda x}R'(x) = e^{\\lambda x}[\\lambda R(x) + R'(x)]\\\\
                        {y^*}'' = \\lambda e^{\\lambda x}[\\lambda R(x) - R'(x)] + e^{\\lambda x}[\\lambda R'(x) + R''(x)] = e^{\\lambda x}[\\lambda^2 R(x) + 2\\lambda R'(x) + R''(x)]
                        \\end{cases}$$
                        <p>代入非齐次方程，并消去\\(e^{\\lambda x}\\)，得：</p>
                        $$[\\lambda^2 R(x) + 2\\lambda R'(x) + R''(x)] + p[\\lambda R(x) + R'(x)] + qR(x) = P_m(x)$$
                        $$(\\lambda^2 + p\\lambda + q)R(x) + (2\\lambda + p)R'(x) + R''(x) = P_m(x)$$
                        <p>在这个式子中，\\(R(x)\\)为左侧式的最高次多项式.</p>
        
                        <b>若\\(\\lambda\\)不为特征方程\\(r^2 + pr + q = 0\\)的根</b>：
                        $$\\lambda^2 + p\\lambda + q \\neq 0 \\Rightarrow (\\lambda^2 + p\\lambda + q)R(x) + (2\\lambda + p)R'(x) + R''(x) = P_m(x)$$
                        <p>要使上式恒成立，\\(R(x)\\)必须为\\(x\\)的\\(m\\)次多项式：</p>
                        $$R(x) = R_m(x) = b_0x^m + b_1x^{m-1} + \\cdots + b_{m-1}x + b_m$$
                        <p>通过左右两式同次幂相等，可以解出\\(b_i(i=0,1,\\cdots,m)\\)的值.</p>
                        $$y^* = R_m(x)e^{\\lambda x}$$
        
                        <b>若\\(\\lambda\\)为特征方程\\(r^2 + pr + q = 0\\)的单根</b>：
                        $$
                        \\begin{cases}\\lambda^2 + p\\lambda + q = 0\\\\
                        \\lambda \\neq -\\frac{p}{2} \\Rightarrow 2\\lambda + p\\neq 0\\end{cases}
                        \\Rightarrow (2\\lambda + p)R'(x) + R''(x) = P_m(x)
                        $$
                        <p>要使上式恒成立，\\(R'(x)\\)必须为\\(x\\)的\\(m\\)次多项式：</p>
                        $$R(x) = xR_m(x)$$
                        <p>通过左右两式同次幂相等，可以解出\\(b_i(i=0,1,\\cdots,m)\\)的值.</p>
                        $$y^* = xR_m(x)e^{\\lambda x}$$
        
                        <b>若\\(\\lambda\\)为特征方程\\(r^2 + pr + q = 0\\)的重根</b>：
                        $$
                        \\begin{cases}\\lambda^2 + p\\lambda + q = 0\\\\
                        \\lambda = -\\frac{p}{2} \\Rightarrow 2\\lambda + p = 0\\end{cases}
                        \\Rightarrow R''(x) = P_m(x)
                        $$
                        <p>要使上式恒成立，\\(R''(x)\\)必须为\\(x\\)的\\(m\\)次多项式：</p>
                        $$R(x) = x^2R_m(x)$$
                        <p>通过左右两式同次幂相等，可以解出\\(b_i(i=0,1,\\cdots,m)\\)的值.</p>
                        $$y^* = x^2R_m(x)e^{\\lambda x}$$
                    </div>
                </div>
            </details>

            <details open>
                <summary>\\(f(x) = e^{\\lambda x}[P_m(x)\\cos\\omega x + Q_n(x)\\sin\\omega x]\\)</summary>

                $$y'' + py' + qy = e^{\\lambda x}P_m(x)$$

                <div class="Formula">
                    $$y^* = x^t e^{\\lambda x}[R_{1k}(x)\\cos\\omega x + R_{2k}(x)\\sin\\omega x]$$
                    $$\\begin{cases}
                    t=0,~\\lambda + \\omega i或\\lambda - \\omega i不为特征方程的根\\\\
                    t=1,~\\lambda + \\omega i或\\lambda - \\omega i
                    \\end{cases}$$
                    $$k = \\max\\{m,n\\}$$
                    <div class="Derivation">
                        $$ e^{ix} = \\cos x + i\\sin x\\Rightarrow \\begin{cases}
                        \\cos x = \\frac{1}{2}(e^{ix} + e^{-ix})\\\\
                        \\sin x = \\frac{1}{2i}({e^{ix} - e^{-ix}}) = -\\frac{1}{2}(e^{ix} - e^{-ix})i
                        \\end{cases}$$
                        $$\\begin{align}
                        f(x) &= e^{\\lambda x}[P_m\\cos\\omega x + Q_n\\sin\\omega x]\\\\
                             &= e^{\\lambda x}[\\frac{1}{2}P_m(e^{\\omega xi} + e^{-\\omega xi}) - \\frac{1}{2}Q_n(e^{\\omega ix} - e^{-\\omega xi})]i\\\\
                             &= (\\frac{P_m}{2} - \\frac{Q_n}{2}i)e^{(\\lambda + \\omega i)x} + (\\frac{P_m}{2} + \\frac{Q_n}{2}i)e^{(\\lambda - \\omega i)x}\\\\
                             &= P(x)e^{(\\lambda + \\omega t)x} + \\overline{P}(x)e^{(\\lambda - \\omega t)x}
                        \\end{align}$$
                        <p>对于方程\\(y'' + py' + qy = P(x)e^{(\\lambda + \\omega i)x}\\)，可以求得一特解：</p>
                        $$y_1^* = x^tR_ke^{(\\lambda + \\omega i)x}$$
                        <p>对于方程\\(y'' + py' + qy = \\overline{P}(x)e^{(\\lambda - \\omega i)x}\\)，可以求得一特解：</p>
                        $$y_2^* = x^t\\overline{R}_ke^{(\\lambda -\\omega i)x}$$
                        $$y^* = x^t e^{\\lambda x}[R_{1k}(x)\\cos\\omega x + R_{2k}(x)\\sin\\omega x]$$
                        <p>其中</p>
                        $$\\begin{cases}
                        t=0,~\\lambda + \\omega i或\\lambda - \\omega i不为特征方程的根\\\\
                        t=1,~\\lambda + \\omega i或\\lambda - \\omega i为特征方程的单根
                        \\end{cases}$$
                        $$k = \\max\\{m,n\\}$$
                    </div>
                </div>

                <p>\\(f(x) = e^x(\\cos \\omega x + \\sin\\omega x), y^* = xe^x(a\\cos\\omega x + b\\sin\\omega x)\\)情况下的化简：</p>
                <p>令\\(y_1 = e^x\\cos\\omega x, y_2 = e^x\\sin\\omega x\\)</p>
                $$\\begin{align}
                &y = x(ay_1 + by_2)\\\\
                &y' = (ay_1 + by_2) + x(ay_1' + by_2')\\\\
                &y'' = (ay_1' + by_2') + (ay_1' + by_2') + x(ay_1'' + by_2'') = (2ay_1' + 2by_2') + x(ay_1'' + by_2'')
                \\end{align}$$
                $$\\begin{align}
                y'' + py' + qy &= x(ay_1'' + by_2'') + (2ay_1' + 2by_2') + xp(ay_1' + by_2') + p(ay_1 + by_2) + xq(ay_1 + by_2)\\\\
                               &= x[a(y_1'' + py_1' + qy_1) + b(y_2' + py_2' + qy_2)] + a(2y_1' + py_1) + b(2y_2' + py_2)\\\\
                               &= a(2y_1' + y_1) + b(2y_2' + y_2)
                \\end{align}$$


            </details>

            <p>[注]\\(\\lambda\\)为常数.</p>
            <p>[注]\\(P_m(x)\\)为\\(x\\)的一个\\(m\\)次多项式，\\(P_m(x) = a_0x^m + a_1x^{m-1} + \\cdots + a_{m-1}x + a_m\\).</p>
        </div>

        <div class="Card-Method">
            <h2>欧拉方程</h2>
            <p>形如\\(x^2y'' + pxy' + qy = f(x)\\)的方程。</p>
            <p>令\\(x = e^t\\Rightarrow \\frac{\\mathrm{d}x}{\\mathrm{d}t} = e^t\\)</p>
            $$\\begin{align}
            \\frac{\\mathrm{d}y}{\\mathrm{d}x} &= \\frac{\\mathrm{d}y}{\\mathrm{d}t}\\frac{\\mathrm{d}t}{\\mathrm{d}x}\\\\
                                            & = e^{-t}\\frac{\\mathrm{d}y}{\\mathrm{d}t}
            \\end{align}$$
            $$\\begin{align}
            \\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} &= \\frac{\\mathrm{d}}{\\mathrm{d}x}(\\frac{\\mathrm{d}y}{\\mathrm{d}x})\\\\
                                                &= \\frac{\\mathrm{d}t}{\\mathrm{d}x}\\frac{\\mathrm{d}}{\\mathrm{d}t}(e^{-t}\\frac{\\mathrm{d}y}{\\mathrm{d}t})\\\\
                                                &= e^{-t}(-e^{-t}\\frac{\\mathrm{d}y}{\\mathrm{d}t} + e^{-t}\\frac{\\mathrm{d}^2y}{\\mathrm{d}t^2})\\\\
                                                &= e^{-2t}(\\frac{\\mathrm{d}^2y}{\\mathrm{d}t^2} - \\frac{\\mathrm{d}y}{\\mathrm{d}t})
            \\end{align}$$
    
            $$x^2y'' + pxy' + qy = f(x)$$
            $$e^{2t}e^{-2t}(\\frac{\\mathrm{d}^2y}{\\mathrm{d}t^2} - \\frac{\\mathrm{d}y}{\\mathrm{d}t}) + pe^te^{-t}\\frac{\\mathrm{d}y}{\\mathrm{d}t} + qy = f(e^t)$$
            $$\\frac{\\mathrm{d}^2y}{\\mathrm{d}t^2} + (p-1)\\frac{\\mathrm{d}y}{\\mathrm{d}t} + qy = f(e^t)$$
        
        </div>
        <ul class="navibar">
            <li><a href="/note/math/mathematic/chapter6">上一页</a></li>
            <li class="catalog"><a href="/note/math/mathematic/mathematic">主页</a></li>
            <li class="next"><a href="/note/math/mathematic/chapter8">下一页</a></li>
        </ul>

        <div id="PageEnd"></div>
        <a class="GoToBottom" href="#PageEnd">Bottom</a>` },
  "note/math/mathematic/function": { title: "高等数学", content: `<h1>函数</h1>

        <h2>函数的基本概念</h2>
        <p>若对于\\(x\\in D\\)，按照一定的法则总有唯一确定的数\\(y\\)与之对应，则称\\(f\\)为\\(x\\)的函数，记作</p>
        $$y = f(x),x\\in D$$
        <ul>
            <li>自变量：\\(x\\)</li>
            <li>因变量：\\(y\\)</li>
            <li>函数定义域：\\(D_f = D\\)</li>
            <li>函数值域：\\(R_f = f(D) = \\{y|y = f(x),x\\in D\\}\\)</li>
        </ul>

        <b>判断两个函数是否为同一函数</b>
        <ul>
            <li>对应法则是否相同</li>
            <li>定义域是否相同</li>
        </ul>

        <h2>反函数</h2>
        <p>设函数\\(y = f(x)\\)定义域为\\(D\\)，值域为\\(R_y\\)。</p>
        <p>若对任意\\(y\\in R_y\\)，有唯一确定的\\(x\\in D\\)，使得\\(y = f(x)\\)，则记\\(x = f^{-1}(y)\\)为函数\\(y = f(x)\\)的反函数。</p>
        <ul>
            <li>不是每个函数都有反函数。</li>
            <li>单调函数一定有反函数，反函数不一定是单调函数。</li>
            <li>\\(f^{-1}[f(x)] = f[f^{-1}(x)] = x\\)</li>
        </ul>


        <h2>常见函数</h2>

        <a href="/note/math/mathematic/functions_basicelementary"><h3>基本初等函数</h3></a>


        <div class="Card-Definition">
            <b>初等函数</b>
            <p>由常数和基本初等函数经过有限次四则运算和有限次函数复合所构成，并可用一个式子表示的函数。</p>
        </div>

        <h3>特殊函数</h3>
        <b>符号函数</b>
        $$
        y = sgnx = 
        \\begin{align}\\begin{cases}
        -1, &x \\lt 0,\\\\
        0, &x = 0,\\\\
        1, &x \\gt 0
        \\end{cases}\\end{align}
        $$

        <b>取整函数</b>
        $$y = [x] = 不大于x的最大整数$$
        $$x-1 \\lt [x] \\leq x \\lt [x]+1$$


        <br><br>
        


        函数的自然定义域
        <table>
            <tr>
                <td class="tbgrid">函数</td>
                <td class="tbgrid">自然定义域</td>
            </tr>
            <tr>
                <td>\\(\\sqrt x\\)</td>
                <td>\\(x\\geq 0\\)</td>
            </tr>
            <tr>
                <td>\\(\\frac1x\\)</td>
                <td>\\(x\\neq 0\\)</td>
            </tr>
            <tr>
                <td>\\(\\ln(x)\\)</td>
                <td>\\(x>0\\)</td>
            </tr>
        </table>


        $$\\frac 1x > -n(n>0) \\Rightarrow x\\in(-\\infty, -\\frac 1n)\\cup(0, +\\infty)$$

        <h2><a href="/note/math/mathematic/functions_property">函数的性质</a></h2>` },
  "note/math/mathematic/function_basicelementary": { title: "高等数学", content: `` },
  "note/math/mathematic/function_graph": { title: "高等数学", content: `<h1>函数图像</h1>
        
        <div class="PageCatalog">
            <ul>
                <li><a href="#Monotonicity">函数单调性</a></li>
                <li><a href="#Extremum">函数极值</a></li>
                <li><a href="#ConcavityAndConvexity">函数凹凸性</a></li>
                <li><a href="#InflectionPoint">函数拐点</a></li>
                <li><a href="#DiscontinuityPoint">函数间断点</a></li>
                <li><a href="#Asymptote">函数渐近线</a></li>
                <li><a href="#Curvature">函数弧微分与曲率（曲率半径）</a></li>
                <li><a href="#Zero">函数零点</a></li>
            </ul>
        </div>
        <a class="BackToTop" href="#PageHead">Top</a>


        <h2 id="Monotonicity">函数单调性</h2>
        <p>设\\(f(x)\\)在\\([a,b]\\)上连续，在\\((a,b)\\)内可导。</p>
        <ul>
            <li>若在\\((a,b)\\)内\\(f'(x)\\gt 0\\)，则\\(f(x)\\)在\\([a,b]\\)内单调递增。</li>
            <li>若在\\((a,b)\\)内\\(f'(x)\\lt 0\\)，则\\(f(x)\\)在\\([a,b]\\)内单调递减。</li>
        </ul>
        <p>[注]有限个\\(f'(x) = 0\\)的点不影响函数单调性.</p>
        <p>[注]单调区间需要考虑间断点.</p>
        <hr>


        <h2 id="Extremum">函数极值</h2>
        <b>定义</b>
        <p>若\\(f'(x) = 0\\)，称\\(x = x_0\\)为驻点。</p>
        <p>设\\(f(x)\\)在\\(x_0\\)某个邻域内有定义，对\\(\\forall x\\in U_\\delta(x_0)\\)</p>
        <ul>
            <li>恒有\\(f(x)\\leq f(x_0)\\)，称\\(f(x_0)\\)为极大值，\\(x_0\\)为极大值点。</li>
            <li>恒有\\(f(x)\\geq f(x_0)\\)，称\\(f(x_0)\\)为极小值，\\(x_0\\)为极小值点。</li>
        </ul>
        <b>极值的必要条件</b>
        $$x = x_0为f(x)的极值点\\Rightarrow f'(x_0) = 0$$
        <b>极值的第一充分条件</b>
        <p>设\\(f'(x_0) = 0\\)或\\(f(x)\\)在\\(x_0\\)处连续：</p>
        $$\\begin{cases}
        f'(x) \\gt 0, x\\lt x_0\\\\
        f'(x) \\lt 0, x\\gt x_0
        \\end{cases}\\Rightarrow x = x_0为f(x)的极大值点$$        
        $$\\begin{cases}
        f'(x) \\lt 0, x\\lt x_0\\\\
        f'(x) \\gt 0, x\\gt x_0
        \\end{cases}\\Rightarrow x = x_0为f(x)的极小值点$$

        <b>极值的第二充分条件</b>
        <p>设\\(f'(x_0)=0\\)</p>
        $$f''(x) \\lt 0 \\Rightarrow x = x_0为f(x)的极大值点$$
        $$f''(x) \\gt 0 \\Rightarrow x = x_0为f(x)的极小值点$$
        $$f''(x) \\neq 0 \\nRightarrow x = x_0为f(x)的极值点$$

        <hr>


        <h2 id="ConcavityAndConvexity">函数凹凸性</h2>

        <table>
            <tr>
                <td></td>
                <td>\\(f(x)\\)在\\(U\\)上连续，且\\(x_1, x_2 \\in U\\)</td>
                <td>\\(f(x)\\)在\\([a,b]\\)连续，在\\((a,b)\\)二阶可导</td>
            </tr>
            <tr>
                <td>凹函数</td>
                <td>$$\\frac{f(x_1)+f(x_2)}{2}\\gt f(\\frac{x_1 + x_2}{2})$$</td>
                <td>$$f''(x)\\gt 0$$</td>
            </tr>
            <tr>
                <td>凸函数</td>
                <td>$$\\frac{f(x_1)+f(x_2)}{2}\\lt f(\\frac{x_1 + x_2}{2})$$</td>
                <td>$$f''(x) \\lt 0$$</td>
            </tr>
        </table>

        <hr>
        
        <h2 id="InflectionPoint">函数拐点</h2>
        <div class="Card-Definition">
            <b>拐点</b>
            <p>连续曲线弧上凹凸分界点。</p>
            $$(x_0,f''(x_0))为f(x)的拐点\\Rightarrow f''(x_0)=0或f''(x_0)不存在$$
        </div>

        <div class="Card-Method">
            <h2>判断拐点的方法</h2>
            <h3>二阶导数</h3>
            <p>设\\(f''(x_0) = 0\\)或\\(f(x)\\)在\\(x_0\\)处连续：</p>
            $$f''(x_0)两侧异号或f''(x_0)不存在\\Rightarrow (x_0, f(x_0))为f(x_0)的拐点$$
            $$f''(x_0)两侧同号\\Rightarrow (x_0, f(x_0))不是f(x_0)的拐点$$

            <h3>三阶导数</h3>
            $$f'''(x_0) \\neq 0 \\Rightarrow (x_0, f(x_0))为f(x)的拐点$$
            $$f'''(x_0) = 0 \\nRightarrow (x_0, f(x_0))不为f(x)的拐点$$
        </div>

        <hr>

        <h2 id="DiscontinuityPoint">函数间断点</h2>
        <b>间断</b>
        <p>设\\(f(x)\\)在\\(x_0\\)某个去心邻域内有定义，但\\(f(x)\\)在\\(x_0\\)处不连续，称\\(x_0\\)为\\(f(x)\\)的间断点。</p>
        $$\\lim\\limits_{x\\rightarrow x_0}f(x) \\neq f(x_0)$$

        <b>间断点</b>
        <ul>
            <li>第一类间断点：\\(\\lim\\limits_{x\\rightarrow x_0^-}f(x)\\)与\\(\\lim\\limits_{x\\rightarrow x_0^+}f(x)\\)均存在</li>
            <ul>
                <li>可去间断点：\\(\\lim\\limits_{x\\rightarrow x_0^-}f(x) = \\lim\\limits_{x\\rightarrow x_0^+}f(x) \\neq f(x_0)\\)</li>
                <li>跳跃间断点：\\(\\lim\\limits_{x\\rightarrow x_0^-}f(x) \\neq \\lim\\limits_{x\\rightarrow x_0^+}f(x)\\)</li>
            </ul>
            <li>第二类间断点：\\(\\lim\\limits_{x\\rightarrow x_0^-}f(x)\\)与\\(\\lim\\limits_{x\\rightarrow x_0^+}f(x)\\)至少一个不存在</li>
            <ul>
                <li>无穷间断点：\\(\\lim\\limits_{x\\rightarrow x_0^-}f(x) = \\infty\\)或\\(\\lim\\limits_{x\\rightarrow x_0^+}f(x) = \\infty\\)</li>
                <li>振荡间断点：\\(\\lim\\limits_{x\\rightarrow x_0^-}f(x)\\)或\\(\\lim\\limits_{x\\rightarrow x_0^+}f(x)\\)振荡</li>
            </ul>
        </ul>
        <b>找间断点方法</b>
        <p>找函数定义域内无意义的点。</p>
        <ul>
            <li>\\(\\frac1x\\)：\\(x\\neq 0\\)</li>
            <li>\\(\\ln|x|\\)：\\(x\\neq 0\\)</li>
        </ul>

        <hr>

        <h2 id="Asymptote">函数渐近线</h2>
        <table>
            <tr>
                <td>类型</td>
                <td>名称</td>
                <td>条件</td>
                <td>渐近线</td>
            </tr>
            <tr>
                <td rowspan="3"><b>水平渐近线</b></td>
                <td>左侧水平渐近线</td>
                <td>$$\\lim\\limits_{x\\rightarrow -\\infty}f(x) = y_0$$</td>
                <td rowspan="3">$$y = y_0$$</td>
            </tr>
            <tr>
                <td>右侧水平渐近线</td>
                <td>$$\\lim\\limits_{x\\rightarrow +\\infty}f(x) = y_0$$</td>
            </tr>
            <tr>
                <td>水平渐近线</td>
                <td>$$\\lim\\limits_{x\\rightarrow \\infty}f(x) = y_0$$</td>
            </tr>
            <tr>
                <td><b>铅直渐近线</b></td>
                <td>铅直渐近线</td>
                <td>\\(\\lim\\limits_{x\\rightarrow x_0^+}f(x) = \\infty\\)或\\(\\lim\\limits_{x\\rightarrow x_0^-}f(x) = \\infty\\)</td>
                <td>$$x=x_0$$</td>
            </tr>
            <tr>
                <td rowspan="3"><b>斜渐近线</b></td>
                <td>左侧斜渐近线</td>
                <td>$$\\lim\\limits_{x\\rightarrow -\\infty}\\frac{f(x)}{x} = a, \\lim\\limits_{x\\rightarrow -\\infty}[f(x) - ax] = b$$</td>
                <td rowspan="3">$$y = ax + b$$</td>
            </tr>
            <tr>
                <td>右侧斜渐近线</td>
                <td>$$\\lim\\limits_{x\\rightarrow +\\infty}\\frac{f(x)}{x} = a, \\lim\\limits_{x\\rightarrow +\\infty}[f(x) - ax] = b$$</td>
            </tr>
            <tr>
                <td>斜渐近线</td>
                <td>$$\\lim\\limits_{x\\rightarrow \\infty}\\frac{f(x)}{x} = a, \\lim\\limits_{x\\rightarrow \\infty}[f(x) - ax] = b$$</td>
            </tr>
        </table>

        <hr>

        <h2 id="Curvature">曲线弧微分与曲率（曲率半径）</h2>
        <b>弧微分</b>
        <p>设\\(f(x)\\)在\\((a,b)\\)内有连续导数，则称弧微分\\(\\mathrm{d}s = \\sqrt{1 + f'^2(x)}\\mathrm{d}x\\)</p>
        <div class="Card-Formula">
            <b>曲率\\(\\kappa\\)</b>
            $$\\kappa = \\frac{|f''(x)|}{[1 + f'^2(x)]^{3/2}}$$
            <b>曲率半径\\(\\rho\\)</b>
            $$\\rho = \\frac{1}{\\kappa} = \\frac{[1 + f'^2(x)]^{3/2}}{|f''(x)|}$$
            <b>曲率中心\\((\\alpha, \\beta)\\)</b>
            $$\\alpha = x_0 - \\frac{f'(x_0)[1 + f'^2(x_0)]}{f''(x_0)}$$
            $$\\beta = y_0 + \\frac{f'^2(x_0)}{f''(x_0)}$$
            <b>曲率圆方程</b>
            $$(x - \\alpha)^2 + (y - \\beta)^2 = \\rho^2$$
        </div>
        <hr>


        <h2 id="Zero">函数零点</h2>
        <p>通过\\(f'(x)\\)求解出\\(f(x)\\)在每个区间内的单调性；求解单调区间内两端点对应的函数值，若异号则存在一根。</p>` },
  "note/math/mathematic/function_property": { title: "高等数学", content: `<h1>函数性质</h1>

        <div class="PageCatalog">
            <ul>
                <li><a href="#Monotonicity">单调性</a></li>
                <li><a href="#Parity">奇偶性</a></li>
                <li><a href="#Periodicity">周期性</a></li>
                <li><a href="#Boundedness">有界性</a></li>
            </ul>
        </div>

        <h2 id="Monotonicity">单调性</h2>
        <table>
            <tr>
                <td></td>
                <td>区间\\(D\\)内，\\(\\forall x_1 \\lt x_2\\)</td>
            </tr>
            <tr>
                <td>单调递增</td>
                <td>$$f(x_1) \\lt f(x_2)$$</td>
            </tr>
            <tr>
                <td>单调不减</td>
                <td>$$f(x_1) \\leq f(x_2)$$</td>
            </tr>
            <tr>
                <td>单调递减</td>
                <td>$$f(x_1) \\gt f(x_2)$$</td>
            </tr>
            <tr>
                <td>单调不增</td>
                <td>$$f(x_1) \\geq f(x_2)$$</td>
            </tr>
        </table>

        <h2 id="Parity">奇偶性</h2>
        <ul>
            <li>奇函数：定义在\\((-l, l)\\)上的函数，满足\\(f(-x) = -f(x)\\)</li>
            <li>偶函数：定义在\\((-l, l)\\)上的函数，满足\\(f(-x) = f(x)\\)</li>
            <li>既奇又偶函数：\\(f(x) = 0\\)</li>
            <li>非奇非偶函数</li>
        </ul>
        $$
        \\begin{align}
        奇+奇 = 奇 &&偶+偶=偶 &&&奇+偶=?\\\\
        奇\\times奇 = 偶 && 偶\\times 偶 = 偶 &&&奇\\times 偶 = 奇
        \\end{align}
        $$
        <p>奇函数\\(f(0) = 0\\)</p>


        <h2 id="Periodicity">周期性</h2>
        <p>若\\(\\exists T>0\\)，对\\(\\forall x\\)，恒有</p>
        $$f(x + T) = f(x)$$
        <p>则称\\(f(x)\\)为以\\(T\\)为周期的周期函数。</p>
        <p>若存在使上式成立的最小正数\\(T\\)，则其被称为<b>最小正周期</b>。</p>
        <p>不是所有的周期函数都有最小正周期，例如常数函数、迪利克雷函数。</p>
        <p>若\\(f(x)\\)周期为\\(T\\)，则\\(f(ax+b)\\)周期为\\(\\frac{T}{|a|}\\)</p>


        <h2 id="Boundedness">有界性</h2>
        <table>
            <tr>
                <td></td>
                <td>对于\\(\\forall x\\in D, \\exists M \\gt 0\\)</td>
            </tr>
            <tr>
                <td>有界</td>
                <td>$$|f(x)|\\leq M$$</td>
            </tr>
            <tr>
                <td>有上界</td>
                <td>$$f(x) \\leq M$$</td>
            </tr>
            <tr>
                <td>有下界</td>
                <td>$$f(x) \\geq -M$$</td>
            </tr>
        </table>

        <div class="Ending">Ending...</div>` },
  "note/math/mathematic/function_tri": { title: "高等数学", content: `<h1>三角函数专题</h1>

        <div class="PageCatalog">
            <ul>
                <li><a href="#ProductToSum">积化和差公式</a></li>
                <li><a href="#SumToProduct">和差化积公式</a></li>
            </ul>
        </div>

        <div class="Card-Definition">
            <b>弧度制</b>
            $$弧度 = 弧长/半径$$
            <p>单位：\\(rad\\)</p>
            $$\\pi~rad=180°$$
            <p>[注]弧度的单位\\(rad\\)无量纲，可以省略不写.</p>
        </div>

        <h2>三角函数及其图像</h2>
        <table>
            <tr>
                <td><b>正弦函数</b></td>
                <td>$$\\sin x$$</td>
                <td><b>余割函数</b></td>
                <td>$$\\csc x = \\frac{1}{\\sin x}$$</td>
            </tr>
            <tr>
                <td><b>余弦函数</b></td>
                <td>$$\\cos x$$</td>
                <td><b>正割函数</b></td>
                <td>$$\\sec x = \\frac{1}{\\cos x}$$</td>
            </tr>
            <tr>
                <td><b>正切函数</b></td>
                <td>$$\\tan x = \\frac{\\sin x}{\\cos x}$$</td>
                <td><b>余切函数</b></td>
                <td>$$\\cot x = \\frac{\\cos x}{\\sin x}$$</td>
            </tr>
            <tr>
                <td><b>反正弦函数</b></td>
                <td>$$\\arcsin x$$</td>
                <td><b>反正切函数</b></td>
                <td>$$\\arccos x$$</td>
            </tr>
        </table>
        
        <div class="Prove">
            $$(\\arcsin x)' = \\frac{1}{\\sqrt{1 - x^2}}$$
            <p>证明：</p>
            <p>\\(y = f(x) = \\arcsin x\\)的反函数为\\(x = g(y) = \\sin y\\)</p>
            $$\\because g'(y) = \\cos y$$
            $$\\begin{align}
            \\therefore f'(x) &= \\frac{1}{g'(y)}\\\\
                  &= \\frac{1}{\\cos y}\\\\
                  &= \\frac{1}{\\sqrt{1 - \\sin^2y}}\\\\
                  &= \\frac{1}{\\sqrt{1 - \\sin^2(\\arcsin x)}}\\\\
                  &= \\frac{1}{\\sqrt{1 - x^2}}
            \\end{align}
            $$

        </div>


        <b>正余互换公式</b>
        $$\\cot \\theta = \\tan(\\frac{\\pi}{2} - \\theta)$$
        
        <div class="Card-Formula">
            <b>两角和差公式</b>
            $$\\begin{align}
            &\\sin(\\alpha \\pm \\beta) = \\sin\\alpha \\cos\\beta \\pm \\cos\\alpha \\sin\\beta\\\\\\\\
            &\\cos(\\alpha \\pm \\beta) = \\cos\\alpha \\cos\\beta \\mp \\sin\\alpha \\sin\\beta\\\\\\\\
            &\\tan(\\alpha \\pm \\beta) = \\frac{\\tan\\alpha \\pm \\tan\\beta}{1 \\mp \\tan\\alpha\\tan\\beta}
            \\end{align}$$
        </div>

        <div class="Card-Formula">
            <b>二倍角公式</b>
            $$\\begin{align}
            &\\sin2\\theta = 2\\sin\\theta\\cos\\theta\\\\\\\\
            &\\cos2\\theta = \\cos^2\\theta - \\sin^2\\theta = 1 - 2\\sin^2\\theta = 2\\cos^2\\theta - 1\\\\\\\\
            &\\tan2\\theta = \\frac{2\\tan\\theta}{1-\\tan^2\\theta}
            \\end{align}$$
        </div>

        <div class="Card-Formula">
            <b>降幂公式</b>
            $$\\begin{align}
            &\\sin^2\\theta = \\frac{1-\\cos2\\theta}{2}\\\\\\\\
            &\\cos^2\\theta = \\frac{1 + \\cos2\\theta}{2}
            \\end{align}$$
        </div>

        <div class="Card-Formula" id="ProductToSum">
            <b>积化和差公式</b>
            $$\\sin\\alpha\\cdot \\cos\\beta = \\frac{1}{2}[\\sin(\\alpha + \\beta) + \\sin(\\alpha - \\beta)]$$
            $$\\cos\\alpha\\cdot \\cos\\beta = \\frac{1}{2}[\\cos(\\alpha + \\beta) + \\cos(\\alpha - \\beta)]$$
            $$\\sin\\alpha\\cdot \\sin\\beta = \\frac{1}{2}[\\cos(\\alpha - \\beta) - \\cos(\\alpha + \\beta)]$$
        </div>

        <div class="Card-Formula" id="SumToProduct">
            <b>和差化积公式</b>
            $$\\begin{align}
            &\\sin\\alpha + \\sin\\beta = 2\\sin\\frac{\\alpha+\\beta}{2}\\cos\\frac{\\alpha-\\beta}{2}\\\\\\\\
            &\\sin\\alpha - \\sin\\beta = 2\\cos\\frac{\\alpha+\\beta}{2}\\sin\\frac{\\alpha-\\beta}{2}\\\\\\\\
            &\\cos\\alpha - \\cos\\beta = -2\\sin\\frac{\\alpha+\\beta}{2}\\sin\\frac{\\alpha-\\beta}{2}
            \\end{align}$$
            <div class="Formula">
                $$\\cos\\alpha + \\cos\\beta = 2\\cos\\frac{\\alpha+\\beta}{2}\\cos\\frac{\\alpha-\\beta}{2}$$
                <div class="Derivation">
                    $$\\begin{align}
                    \\cos\\alpha + \\cos\\beta &= \\cos(\\frac{\\alpha + \\beta}{2} + \\frac{\\alpha - \\beta}{2}) + \\cos(\\frac{\\alpha + \\beta}{2} - \\frac{\\alpha - \\beta}{2})\\\\
                                           &= \\cos(\\frac{\\alpha + \\beta}{2})\\cos(\\frac{\\alpha - \\beta}{2}) - \\sin(\\frac{\\alpha + \\beta}{2})\\sin(\\frac{\\alpha - \\beta}{2}) + \\cos(\\frac{\\alpha + \\beta}{2})\\cos(\\frac{\\alpha - \\beta}{2}) + \\sin(\\frac{\\alpha + \\beta}{2})\\sin(\\frac{\\alpha - \\beta}{2})\\\\
                                           &= 2\\cos(\\frac{\\alpha + \\beta}{2})\\cos(\\frac{\\alpha - \\beta}{2})
                    \\end{align}$$
                </div>
            </div>
        </div>

        <div class="Card-Formula">
            <b>其他公式</b>
            <diV class="Formula">
                $$\\arctan \\theta + \\arctan \\frac{1}{\\theta} = \\frac{\\pi}{2}$$
                <div class="Derivation">
                    <p>令\\(t = \\arctan\\theta\\).</p>
                    $$\\therefore \\theta = \\tan t \\Rightarrow \\frac{1}{\\theta} = \\cot t = \\tan(\\frac{\\pi}{2} - t)$$
                    $$\\therefore \\arctan \\theta + \\arctan \\frac{1}{\\theta} = t + \\frac{\\pi}{2} - t = \\frac{\\pi}{2}$$
                </div>
            </diV>

            <div class="Formula">
                $$\\frac{1}{1 + \\cos x} = \\frac{1}{2}\\sec^2 \\frac{x}{2}$$
                <div class="Derivation">
                    $$\\sec^2 x = \\frac{1}{\\cos^2 x} = \\frac{2}{1 + \\cos 2x}$$
                    $$\\frac{1}{1 + \\cos 2x} = \\frac{1}{2}\\sec^2 x$$
                    $$\\frac{1}{1 + \\cos x} = \\frac{1}{2}\\sec^2 \\frac{x}{2}$$
                </div>
            </div>

            <div class="Formula">
                $$\\frac{1}{1 - \\cos x} = \\frac{1}{2}\\csc^2 \\frac{x}{2}$$
                <div class="Derivation">
                    $$\\csc^2 x = \\frac{1}{\\sin^2 x}= \\frac{2}{1 - \\cos 2x}$$
                    $$\\frac{1}{1 - \\cos 2x} = \\frac{1}{2}\\csc^2 x$$
                    $$\\frac{1}{1 - \\cos x} = \\frac{1}{2}\\csc^2 \\frac{x}{2}$$
                </div>
            </div>
        </div>

        <h2>三角函数带皮亚诺余项的麦克劳林展开式</h2>
        <table>
            <tr>
                <td>
                    $$
                    \\begin{align}
                    \\sin x &= f(0) + \\frac{f'(0)}{1!}x + \\frac{f''(0)}{2!}x^2 + \\frac{f'''(0)}{3!}x^3 + o(x^3)\\\\
                           &= x - \\frac16 x^3 + o(x^3)\\\\
                           
                    \\end{align}
                    \\Rightarrow
                    \\begin{cases}
                    \\sin x \\sim x\\\\
                    x - \\sin x \\sim \\frac16 x^3
                    \\end{cases}
                    $$
                </td>
            </tr>
            <tr>         
                <td>
                    $$
                    \\begin{align}
                    \\arcsin x &= f(0) + \\frac{f'(0)}{1!}x + \\frac{f''(0)}{2!}x^2 + \\frac{f'''(0)}{3!}x^3 + o(x^3)\\\\
                              &= x + \\frac16 x^3 + o(x^3)
                    \\end{align}
                    \\Rightarrow
                    \\begin{cases}
                    \\arcsin x \\sim x\\\\
                    \\arcsin x - x \\sim \\frac16 x^3
                    \\end{cases}
                    $$
                </td>
            </tr>
            <tr>
                <td>
                    $$
                    \\begin{align}
                    \\tan x &= f(0) + \\frac{f'(0)}{1!}x + \\frac{f''(0)}{2!}x^2 + \\frac{f'''(0)}{3!}x^3 + o(x^3)\\\\
                           &= x + \\frac13x^3 + o(x^3)  
                    \\end{align}
                    \\Rightarrow
                    \\begin{cases}
                    \\tan x \\sim x\\\\
                    \\tan x - x \\sim \\frac13x^3
                    \\end{cases}
                    $$
                </td>
            </tr>
            <tr>
                <td>
                    $$
                    \\begin{align}
                    \\arctan x &= f(0) + \\frac{f'(0)}{1!}x + \\frac{f''(0)}{2!}x^2 + \\frac{f'''(0)}{3!}x^3 + o(x^3)\\\\
                              &= x - \\frac13x^3 + o(x^3)
                    \\end{align}
                    \\Rightarrow
                    \\begin{cases}
                    \\arctan x \\sim x\\\\
                    x - \\arctan x \\sim \\frac13x^3
                    \\end{cases}
                    $$
                </td>
            </tr>
            <tr>
                <td>
                    $$
                    \\begin{align}
                    \\cos x &= f(0) + \\frac{f'(0)}{1!}x + \\frac{f''(0)}{2!}x^2 + \\frac{f'''(0)}{3!}x^3 + o(x^3)\\\\
                           &= 1 - \\frac{1}{2}x^2 + o(x^2)
                    \\end{align}
                    \\Rightarrow
                    1 - \\cos x \\sim \\frac12 x^2
                    $$
                </td>
            </tr>
        </table>` },
  "note/math/mathematic/inequation": { title: "高等数学", content: `<h1>不等式</h1>

        <h2>基本不等式</h2>
        <p>完全平方式：\\((\\sqrt{x} - \\sqrt{y})^2\\geq 0\\)</p>
        <p>基本不等式：\\(x + y \\geq 2\\sqrt{xy}\\quad (x\\gt 0, y>0)\\)</p>
        <p>当\\(x = y\\)时，基本不等式才能取等号。</p>

        <b>考点</b>
        <ul>
            <li>和积式（基本）</li>
            <li>非齐次式：凑</li>
            <li>齐次式：换元\\(\\rightarrow\\)“\\(1\\)”的代换</li>
        </ul>


        <h2>常用不等式</h2>
        $$||a| - |b||\\leq |a \\pm b| \\leq |a| + |b|$$
        <div class="Prove">
            \\(ab\\geq 0\\)时：
            $$||a|-|b|| = |a - b| \\leq |a + b| = |a| + |b|$$
            \\(ab \\leq 0\\)时：
            $$||a|-|b|| = |a + b| \\leq |a - b| = |a| + |b|$$
        </div>

        <div class="Formula">
            $$x \\gt \\sin x(x \\gt 0)$$
            <div class="Derivation">
                <p>令\\(f(x) = x - \\sin x\\)</p>
                $$f'(x) = 1 - \\cos x \\geq 0$$
                <p>故\\(x - \\sin x\\)单调递增.</p>
                $$f(0) = 0$$
                $$x - \\sin x \\gt 0 \\Rightarrow x \\gt \\sin x$$
            </div>
        </div>

        <div class="Formula" id="Concentration">
            <b>分数的浓度不等式</b>
            $$c\\gt 0 \\Rightarrow \\frac{a + c}{b + c} \\gt \\frac{a}{b}$$
        </div>` },
  "note/math/mathematic/infinty": { title: "高等数学", content: `<h1>无穷</h1>
        <h2>无穷小量</h2>
        <p>若\\(\\lim\\limits_{x\\rightarrow x_0}f(x) = 0\\)，则称\\(f(x)\\)为\\(x\\rightarrow x_0\\)时的无穷小量。</p>

        <div class="Card-Definition">
            <b>无穷小量阶的比较</b>
            <p>\\(\\lim\\alpha = 0, \\lim\\beta = 0, \\beta(x)\\neq 0\\).</p>
            <p>\\(\\alpha(x)\\)为\\(\\beta(x)\\)的：</p>
            <ul>
                <li>高阶无穷小：\\(\\lim \\frac{\\alpha(x)}{\\beta(x)} = 0\\)，记作\\(\\alpha(x) = o[\\beta(x)]\\)</li>
                <li>低阶无穷小：\\(\\lim \\frac{\\alpha(x)}{\\beta(x)} = \\infty\\)</li>
                <li>同阶无穷小：\\(\\lim \\frac{\\alpha(x)}{\\beta(x)} = c\\neq 0\\)</li>
                <li>等价无穷小：\\(\\lim \\frac{\\alpha(x)}{\\beta(x)} = 1\\)，记作\\(\\alpha(x)\\sim \\beta(x)\\)</li>
                <li>\\(k\\)阶无穷小：\\(\\lim \\frac{\\alpha(x)}{\\beta^k(x)} = c\\neq 0\\)</li>
            </ul>
        </div>

        <div class="Card-Method">
            <h2>比较无穷小的阶数</h2>
            <p>构造\\(\\lim \\frac{f(x)}{x^k} = c \\neq 0\\)</p>
            <p>则\\(f(x)\\)是\\(x\\)的\\(k\\)阶无穷小.</p>
        </div>

        <div class="Card-Formula">
            <b>无穷小的运算</b>
            $$o(x^m) + o(x^n) = o(x^k), k = \\min\\{m,n\\}$$
            $$o(x^m)\\cdot o(x^n) = o(x^{m+n})$$
            $$x^m\\cdot o(x^n) = o(x^{m+n})$$
            $$o(kx^n) = k\\cdot o(x^n) = o(x^n), k\\neq 0$$
        </div>

        <div class="Card-Property">
            <b>无穷小的性质</b>
            <p>有限个无穷小的和仍是无穷小</p>
            <p>有限个无穷小的乘积仍然是无穷小</p>
            <p>无穷小与有界量的乘积仍然是无穷小</p>
            <p>等价无穷小具有相同的函数值与导数值</p>
        </div>

        <div class="Card-Formula" id="sim">
            <b>常见等价无穷小</b><br>
            <img src="./Img/triangle_infinitesimal.png" width="400"> 
            $$1 - \\cos x \\sim \\sec x - 1 \\sim \\frac{1}{2}x^2$$
            $$\\ln(1 + x) \\sim e^x - 1 \\sim x$$    
            $$x - \\ln(1 + x) \\sim \\frac12 x^2$$
            $$a^x - 1 \\sim x\\ln a$$
            $$(1 + x)^\\alpha -1 = \\alpha x$$
        </div>

        <h2>无穷大量</h2>
        <p>\\(\\lim\\limits_{x\\rightarrow x_0}f(x) = \\infty\\)，称\\(f(x)\\)为\\(x\\rightarrow x_0\\)时的无穷大量。</p>
        $$对于\\forall M \\gt 0, \\exists \\delta \\gt 0, 使得当0\\lt |x - x_0|\\lt \\delta时，|f(x)|\\gt M$$
        <p>\\(\\lim\\limits_{x\\rightarrow \\infty}f(x) = \\infty\\)，称\\(f(x)\\)为\\(x\\rightarrow \\infty\\)时的无穷大量。</p>
        $$对于\\forall M \\gt 0, \\exists X \\gt 0, 使得当|x|\\gt X时，|f(x)|\\gt M$$

        <b>常见无穷大量的比较</b>
        <p>令\\(\\alpha \\gt 0, \\beta \\gt 0, a\\gt 1\\)</p>
        函数
        <p>\\(x\\rightarrow +\\infty\\)时：</p>
        $$\\ln^\\alpha x \\ll x^\\beta \\ll a^x$$
        数列
        <p>\\(n\\rightarrow \\infty\\)时：</p>
        $$\\ln^\\alpha n\\ll n^\\beta \\ll a^n \\ll n! \\ll n^n$$

        <b>无穷大量的性质</b>
        <p>无穷大量包括正无穷与负无穷</p>
        <p>两个无穷大量的乘积仍为无穷大量</p>
        <p>无穷大量与有界变量之和仍是无穷大量</p>

        <b>无穷大量与无界变量的关系</b>
        <p>对于数列\\(\\{x_n\\}\\)，无穷大量要求\\(n\\gt N\\)后所有项均满足\\(|x_n|\\gt M\\)，无界变量仅要求存在一项满足\\(|x_n|\\gt M\\)。</p>
        <p>因此无界变量包含无穷大量。</p>

        <b>无穷大量与无穷小量的关系</b>
        <p>设\\(f(x)\\neq 0\\)</p>
        $$\\lim f(x) = 0 \\Leftrightarrow \\lim \\frac{1}{f(x)} = \\infty$$

        <hr>

        <b>反常积分中常用的等价无穷小与等价无穷大</b>
        <table>
            <tr>
                <td colspan="3">$$(x^\\alpha + x^\\beta)^t (\\alpha \\lt \\beta)$$</td>
            </tr>
            <tr>
                <td>等价无穷小</td>
                <td>$$x^{\\alpha t}$$</td>
                <td>$$\\lim\\limits_{x\\rightarrow 0}(\\frac{x^\\alpha + x^\\beta}{x^\\alpha})^t = \\lim\\limits_{x\\rightarrow 0}(1 + \\frac{x^\\beta}{x^\\alpha})^t = 1$$</td>
            </tr>
            <tr>
                <td>等价无穷大</td>
                <td>$$x^{\\beta t}$$</td>
                <td>$$\\lim\\limits_{x\\rightarrow \\infty}(\\frac{x^\\alpha + x^\\beta}{x^\\beta})^t = \\lim\\limits_{x\\rightarrow 0}(\\frac{x^\\alpha}{x^\\beta} + 1)^t = 1$$</td>
            </tr>
        </table>` },
  "note/math/mathematic/integral_application": { title: "高等数学", content: `<h1>定积分的应用</h1>
        <div class="PageCatalog">
            <ul>
                <li><a href="#Area of Plane Figure">平面图形面积</a></li>
                <li><a href="#Volume of Rotator">旋转体体积</a></li>
                <li><a href="#Arc Length of Curve">曲线弧长</a></li>
            </ul>
        </div>


        <h2 id="Area of Plane Figure">平面图形面积</h2>
        <p>设\\(D\\)是由\\(y=f(x),y=g(x),x=a,x=b(f(x)\\geq g(x))\\)围成的平面区域：</p>
        $$S = \\int_a^b [f(x) - g(x)]\\mathrm{d}x$$
        <img src="Img/Integral/Application1.jpg" width="700">

        <p>设\\(D\\)是由\\(r=r_1(\\theta), r=r_2(\\theta), \\theta=\\alpha, \\theta = \\beta(r_1(\\theta)\\geq r_2(\\theta))\\)围成的平面区域：</p>
        $$S = \\frac12\\int_\\alpha^\\beta[r_1^2(\\theta)-r_2^2(\\theta)]\\mathrm{d}\\theta$$
        <img src="Img/Integral/Application2.jpg" width="680">

        <p>[注]积分变量可以取\\(x\\)或\\(y\\).</p>
        <p>[注]原方程较复杂时，可以化为参数方程计算.</p>
        <p>[注]有时无需纠结函数的图像形状.</p>

        <hr>

        <h2 id="Volume of Rotator">旋转体体积</h2>
        <p>设\\(D\\)是由\\(y=f(x),y=0,x=a,x=b\\)围成的平面区域。</p>
        <table>
            <tr>
                <td>\\(D\\)绕\\(x\\)轴旋转一周所得旋转体</td>
                <td>\\(D\\)绕\\(y\\)轴旋转一周所得旋转体</td>
            </tr>
            <tr>
                <td>
                    <div class="Formula">
                        $$V = \\pi \\int_a^b f^2(x)\\mathrm{d}x$$
                        <div class="Derivation">
                            <p>体积元</p>
                            $$\\mathrm{d}V = \\pi f^2(x) \\mathrm{d}x$$
                            <p>近似为一个半径为\\(f(x)\\)，高为\\(\\mathrm{d}x\\)的圆柱体.</p>
                            $$V = \\int_a^b \\pi f^2(x)\\mathrm{d}x = \\pi\\int_a^b f^2(x)\\mathrm{d}x$$
                        </div>
                    </div>
                </td>
                <td>$$V = 2\\pi\\int_a^bxf(x)\\mathrm{d}x$$</td>
            </tr>
            <tr>
                <td>\\(D\\)绕\\(y = k\\)旋转一周所得旋转体</td>
                <td></td>
            </tr>
            <tr>
                <td>$$V = \\pi \\int_a^b [f(x)-a]^2 \\mathrm{d}x$$</td>
                <td></td>
            </tr>
        </table>

        <img src="Img/Integral/Application3.jpg" width="600">
        <img src="Img/Integral/Application4.jpg" width="700">

        
        $$\\begin{cases}x = x(t)\\\\y = y(t)\\end{cases}，~\\alpha\\leq t\\leq \\beta$$
        $$\\begin{cases}t=\\alpha\\rightarrow x =a\\\\t=\\beta\\rightarrow x=b\\end{cases}$$
        <p>绕\\(x\\)轴旋转的体积：</p>
        $$V = \\pi\\int_a^b f^2(x)\\mathrm{d}x$$
        <p>令\\(x = x(t)\\)</p>
        $$\\begin{align}
        V &= \\pi\\int_\\alpha^\\beta f^2[x(t)]\\mathrm{d}x(t)\\\\
          &= \\pi\\int_\\alpha^\\beta y^2(t)x'(t)\\mathrm{d}t
        \\end{align}$$
        
        <div class="Card-Supplement">
            <b>补充知识点——参数方程的性质</b>
            $$\\begin{cases}x = x(t)\\\\y = y(t)\\end{cases}$$
            <p>由于\\((t_0,x_0,y_0)\\)唯一对应，故</p>
            $$y = f(x) = f[x(t)] = y(t)$$
        </div>

        <hr>
        
        <h2 id="Arc Length of Curve">曲线弧长</h2>
        
        <table>
            <tr>
                <td>$$y = f(x), a\\leq x\\leq b$$</td>
                <td>
                    <div class="Formula">
                        $$L = \\left|\\int_a^b \\sqrt{1+f'^2(x)}\\mathrm{d}x\\right|$$
                        <div class="Derivation">
                            $$\\Delta L = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2} = \\sqrt{1 + (\\frac{\\Delta y}{\\Delta x})^2}\\Delta x$$
                            $$L = \\lim\\limits_{n\\rightarrow \\infty}\\sum\\limits_{k=1}^n\\sqrt{1 + (\\frac{\\Delta y}{\\Delta x})^2}\\Delta x$$
                        </div>        
                    </div>
                </td>
            </tr>
            <tr>
                <td>$$\\begin{cases}x = x(t)\\\\y = y(t)\\end{cases}, \\alpha\\leq t\\leq \\beta$$</td>
                <td>
                    <div class="Formula">
                        $$L = \\left|\\int_\\alpha^\\beta \\sqrt{x'^2(t) + y'^2(t)}\\mathrm{d}t\\right|$$
                        <div class="Derivation">
                            $$L = \\int_a^b \\sqrt{1+f'^2(x)}\\mathrm{d}x$$
                            $$\\begin{cases}t = \\alpha \\rightarrow x = a\\\\t = \\beta \\rightarrow x = b\\end{cases}$$
                            $$\\begin{align}
                            L &= \\int_\\alpha^\\beta \\sqrt{1 + \\left [\\frac{y'(t)}{x'(t)}\\right]^2}x'(t)\\mathrm{d}t\\\\
                              &= \\int_\\alpha^\\beta \\sqrt{x'^2(t) + y'^2(t)}\\mathrm{d}t
                            \\end{align}$$
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>$$r = r(\\theta), \\alpha \\leq \\theta \\leq \\beta$$</td>
                <td>$$L = \\int_\\alpha^\\beta \\sqrt{r^2(\\theta) + [r'(\\theta)]^2}\\mathrm{d}\\theta$$</td>
            </tr>
        </table>
        
        <h2>旋转体的侧面积</h2>
        <p>由\\(y=f(x)\\geq 0, x=a, x=b\\)以及\\(x\\)轴围成的区域绕\\(x\\)轴旋转所得旋转体的侧面积：</p>
        $$S = 2\\pi\\int_a^bf(x)\\sqrt{1+f'^2(x)}\\mathrm{d}x$$
        <img src="Img/Integral/Application5.jpg" width="680">

        <h2>物理应用</h2>
        <h2>水压强</h2>
        <p>压强\\(p = \\rho g h\\)</p>
        <p>压力\\(P = pS\\)</p>

        
        <ul class="navibar">
            <li><a href="/note/math/mathematic/integral_upperlimitfunction">上一页</a></li>
            <li class="catalog"><a href="/note/math/mathematic/catalog">主页</a></li>
        </ul>` },
  "note/math/mathematic/integral_definite": { title: "高等数学", content: `<h1>定积分</h1>

        <h2>定积分的应用——曲边梯形的面积</h2>
        <div class="Card-Definition">
            <b>曲边梯形</b>
            <p>设\\(f(x)\\)在\\([a,b]\\)上非负且连续.</p>
            <p>由\\(y=0, x=a, x=b, y=f(x)\\)围成的图形称为<b>曲边梯形</b>.</p>
            <p>曲线弧称为<b>曲边</b>.</p>
        </div>

        <p>在区间\\([a,b]\\)中插入若干分点\\(a= x_0\\lt x_1\\lt \\cdots \\lt x_{n-1} \\lt x_n = b\\).</p>
        <p>每一个小区间的长度\\(\\Delta x_i = x_i - x_{i-1}\\).</p>
        <p>在\\([x_{i-1}, x_{i}]\\)上任取一点\\(\\xi_i\\)，曲边梯形的面积可以近似表示为</p>
        $$S \\approx f(\\xi_1)\\Delta x_1 + f(\\xi_2)\\Delta x_2 + \\cdots + f(\\xi_n)\\Delta x_n$$
        <p>将分段数\\(n\\)无限增多，则每个小区间的长度均接近于\\(0\\)，此时拟合面积将无限接近于真实面积，即</p>
        $$S = \\lim\\limits_{n\\rightarrow \\infty}\\sum\\limits_{i=1}^nf(\\xi_i)\\Delta_i$$

        <h2>定积分的应用——变速直线运动的路程</h2>
        <p>某物体按速度\\(v = v(t)\\)做变速直线运动，设其在\\([T_1, T_2]\\)时间段内的路程为\\(s\\).</p>
        <p>在时间间隔\\([T_1, T-2]\\)内插入若干分点：\\(T_1 = t_0 \\lt t_1 \\lt \\cdots \\lt t_{n-1} \\lt t_n = T_2\\).</p>
        <p>每一小段的时长\\(\\Delta t_i = t_i - t_{i-1}\\).</p>
        <p>在\\([t_{i-1}, t_i]\\)上任取一个时刻\\(\\tau_i\\)，以\\(v(\\tau_i)\\)代替\\([t_{i-1}, t_i]\\)上各个时刻的速度，\\(s\\)的值可以近似表示为</p>
        $$s \\approx \\sum\\limits_{i=1}^n v(\\tau_i)\\Delta t_i $$
        <p>将分段数\\(n\\)无限增多，则每个小区间的时间均接近于\\(0\\)，此时拟合路程将无限接近于真实路程，即</p>
        $$s = \\lim\\limits_{n\\rightarrow \\infty}\\sum\\limits_{i=1}^n v(\\tau_i)\\Delta t_i$$


        <h2>定积分定义</h2>
        <b>定义</b>
        <p>\\(\\int_0^1f(x)\\mathrm{d}x = \\lim\\limits_{n\\rightarrow \\infty}\\sum\\limits_{k=1}^nf(\\frac{k}{n})\\frac{1}{n}\\)</p>
        <p>\\(\\int_a^b f(x)\\mathrm{d}x\\)</p>
        <b>几何意义</b>
        <p>函数\\(y = f(x)\\)在区间\\([a,b]\\)上与\\(x\\)轴围成区域的面积。</p>
        <p>在\\(x\\)轴上方的定积分面积为正值，在\\(x\\)轴下方的定积分面积为负值，且可线性相加。</p>

        <b>注意：</b>
        <p>积分的上下限并无大小关系，下限\\(a\\)可以大于上限\\(b\\)，当换元的时候也无需交换位置。</p>
        <p>举例来说，若换元后\\(a'=b, b'=a\\)，则\\(\\int_a^b f[\\phi(x)]\\mathrm{d}x = \\int_{b}^{a} f(t)\\mathrm{d}t\\)</p>

        <b>定积分存在的充分条件</b>
        <p>\\(f(x)\\)在\\([a,b]\\)上连续\\(\\Rightarrow \\int_a^b f(x)\\mathrm{d}x\\)存在</p>
        <p>\\(f(x)\\)在\\([a,b]\\)上有界，且只有有限个间断点\\(\\Rightarrow \\int_a^b f(x)\\mathrm{d}x\\)存在</p>
        <p>\\(f(x)\\)在\\([a,b]\\)上只有有限个第一类间断点\\(\\Rightarrow \\int_a^b f(x)\\mathrm{d}x\\)存在</p>
        <b>定积分存在的必要条件</b>、
        <p>\\(\\int_a^b f(x)\\mathrm{d}x\\)存在\\(\\Rightarrow[a,b]\\)有界且\\(f(x)\\)在\\([a,b]\\)上有界</p>

        <h2>定积分性质</h2>
        <div class="Card-Property">
            <b>定积分性质</b>
            <div class="Formula">
                <p>\\(\\int_a^a f(x) \\mathrm{d}x = 0\\)</p>
                <div class="Derivation">
                    $$\\int_a^a f(x) \\mathrm{d}x = F(a) - F(a) = 0$$
                </div>
            </div>
            <div class="Formula">
                <p>\\(\\int_a^b f(x) \\mathrm{d}x = -\\int_b^a f(x) \\mathrm{d}x\\)</p>
                <div class="Derivation">
                    $$\\int_a^b f(x) \\mathrm{d}x = F(b) - F(a) = -[F(a) - F(b)] = -\\int_b^a f(x) \\mathrm{d}x$$
                </div>
            </div>
        </div>
        <h3>不等式性质</h3>
        <p>在\\([a,b]\\)上\\(f(x)\\leq g(x) \\Rightarrow \\int_a^bf(x)\\mathrm{d}x\\leq \\int_a^bg(x)\\mathrm{d}x\\)</p>
        <p>若\\(f(x)\\)在\\([a,b]\\)上最大值为\\(M\\)，最小值为\\(m \\Rightarrow m(b-a)\\leq \\int_a^bf(x)\\mathrm{d}x\\leq M(b-a)\\)</p>
        <p>\\(|\\int_a^b f(x)\\mathrm{d}x|\\leq \\int_a^b|f(x)|\\mathrm{d}x\\)</p>

        <h3>积分中值定理</h3>
        <p>若\\(f(x)\\)在\\([a,b]\\)内连续，则至少存在一点\\(\\xi \\in [a,b]\\)使得\\(\\int_a^bf(x)\\mathrm{d}x=f(\\xi)(b-a)\\)</p>
        <p>若\\(f(x)\\)在\\([a,b]\\)内连续，则至少存在一点\\(\\xi \\in (a,b)\\)使得\\(\\int_a^bf(x)\\mathrm{d}x=f(\\xi)(b-a)\\)</p>
        <p>设\\(f(x), g(x)\\)在\\([a,b]\\)内连续，且\\(g(x)\\)不变号，则至少存在一点\\(\\xi \\in [a,b]\\)，使得</p>
        $$\\int_a^b f(x)g(x) \\mathrm{d}x = f(\\xi)\\int_a^bg(x)\\mathrm{d}x$$
        <div class="Prove">
            <p>\\(f(x)\\)在\\([a,b]\\)上连续\\(\\Rightarrow f(x)\\)在\\([a,b]\\)上存在最大值\\(M\\)与最小值\\(m\\)使得\\(m\\leq f(x)\\leq M\\)</p>
            <p>\\(g(x)\\)不变号\\(\\Rightarrow\\)不妨设\\(g(x)\\gt 0 \\Rightarrow mg(x)\\leq f(x)g(x)\\leq Mg(x)\\)</p>
        </div>

        
        <div class="Card-Method">
            <h2>求定积分的方法</h2>
            <b>奇偶函数积分</b>
            <p>奇函数：\\(\\int_{-a}^a f(x)\\mathrm{d}x = 0\\)</p>
            <p>偶函数：\\(\\int_{-a}^a f(x)\\mathrm{d}x = 2\\int_0^a f(x)\\mathrm{d}x\\)</p>
            
            <b>周期函数积分</b>
            $$\\int_a^{a+nT}f(x)\\mathrm{d}x = n\\int_b^{b+T}f(x)\\mathrm{d}x$$
            
            <b>沃利斯公式</b>
            $$\\begin{align}
            &n = 1:\\int_0^{\\frac\\pi2}\\sin x\\mathrm{d}x = \\int_0^{\\frac\\pi2}\\cos x\\mathrm{d}x = 1\\\\\\\\
            &n\\gt 1:\\int_0^{\\frac\\pi2}\\sin^n x\\mathrm{d}x = \\int_0^\\frac\\pi2 \\cos^nx \\mathrm{d}x =
            \\begin{cases}
            \\frac{2}{3}\\cdot\\frac{4}{5}\\cdots\\frac{n-3}{n-2}\\cdot\\frac{n-1}{n},n为奇数\\\\
            \\frac{\\pi}{2}\\cdot \\frac{1}{2}\\cdots\\frac{n-3}{n-2}\\cdot\\frac{n-1}{n}, n为偶数\\\\
            \\end{cases}
            \\end{align}$$
            $$\\int_0^\\frac\\pi2 f(\\sin x)\\mathrm{d}x = \\int_0^\\frac\\pi2 f(\\cos x)\\mathrm{d}x$$
            $$\\int_0^\\pi xf(\\sin x)\\mathrm{d}x = \\frac{\\pi}{2}\\int_0^\\pi f(\\sin x)\\mathrm{d}x$$
            
            <b>牛顿-莱布尼茨公式</b>
            $$\\int_a^b f(x)\\mathrm{d}x = F(x)|_a^b = F(b) -F(a)$$

            <b>换元法</b>
            $$\\int_a^b f(x) \\mathrm{d}x = \\int_{\\phi(a)}^{\\phi(b)}f[\\phi(t)]\\phi'(t)\\mathrm{d}t$$

            <b>几何法</b>
            <p>计算积分区域的面积得到积分的值.</p>
            $$y = \\int_0^r \\sqrt{2rx - x^2}\\mathrm{d}x = \\frac{1}{4}\\pi r^2$$
            $$y = \\int_0^{2r} \\sqrt{2rx - x^2}\\mathrm{d}x = \\frac{1}{2}\\pi r^2$$
        </div>

        <div class="Card-Method">
            <h2>比较同区间的定积分大小</h2>
            <p>直接比较被积函数的大小.</p>
            $$f(x) \\gt g(x) \\Rightarrow \\int_a^b f(x) \\mathrm{d}x \\gt \\int_a^b g(x) \\mathrm{d}x$$

            <p>当能计算出其中一个定积分的值为k时：</p>
            $$\\int_a^b f(x) \\mathrm{d}x = k$$
            <p>\\(f(x)\\)平均值为\\(\\frac{k}{b-a}\\).</p>
            $$g(x) \\gt \\frac{k}{b-a} \\Rightarrow \\int_a^b g(x)\\mathrm{d}x \\gt \\int_a^b f(x)\\mathrm{d}x$$
        </div>


        <ul class="navibar">
            <li><a href="/note/math/mathematic/integral_indefinite">上一页</a></li>
            <li class="catalog"><a href="/note/math/mathematic/catalog">主页</a></li>
            <li class="next"><a href="/note/math/mathematic/integral_improper">下一页</a></li>
        </ul>` },
  "note/math/mathematic/integral_improper": { title: "高等数学", content: `<h1>反常积分</h1>

        <div class="PageCatalog">
            <ul>
                <li><a href="#Method">求解反常积分</a></li>
                <li><a href="#GammaFormula">\\(\\Gamma\\)函数</a></li>
            </ul>
        </div>
        <a href="#PageHead" class="BackToTop">Top</a>

        <p>设\\(f(x)\\)在\\([a,+\\infty)\\)上连续，若\\(\\lim\\limits_{t\\rightarrow +\\infty}\\int_a^t f(x) \\mathrm{d}x\\)存在，则称此极限为\\(f(x)\\)在\\([a,+\\infty)\\)上的反常积分，记作：</p>
        $$\\int_a^{+\\infty}f(x)\\mathrm{d}x = \\lim\\limits_{t\\rightarrow +\\infty}\\int_a^t f(x) \\mathrm{d}x$$

        <p>设\\(f(x)\\)在\\((-\\infty,b]\\)上连续，若 \\(\\lim\\limits_{t\\rightarrow -\\infty}\\int_t^b f(x) \\mathrm{d}x\\)存在，则称此极限为\\(f(x)\\)在\\((-\\infty,b]\\)上的反常积分，记作：</p>
        $$\\int_{-\\infty}^bf(x)\\mathrm{d}x = \\lim\\limits_{t\\rightarrow -\\infty}\\int_t^b f(x) \\mathrm{d}x$$

        <p>设\\(f(x)\\)在\\((-\\infty, +\\infty)\\)上连续，若\\(\\int_{-\\infty}^a f(x)\\mathrm{d} x\\)与\\(\\int_a^{+\\infty} f(x)\\mathrm{d}x\\)都存在，则:</p>
        $$\\int_{-\\infty}^{+\\infty} f(x) \\mathrm{d}x = \\int_{-\\infty}^a f(x) \\mathrm{d}x + \\int_a^{+\\infty} f(x) \\mathrm{d}x $$

        <p>若反常积分存在，称其收敛；若反常积分不存在，称其发散。</p>

        <b>比较判别法（积分形式）</b>
        <p>设\\(f(x), g(x)\\)在\\([a,+\\infty)\\)上连续，且\\(0\\leq f(x)\\leq g(x)\\)：</p>
        <ul>
            <li>\\(\\int_a^{+\\infty}g(x)\\mathrm{d}x\\)收敛\\(\\Rightarrow \\int_a^{+\\infty}f(x)\\mathrm{d}x\\)收敛</li>
            <li>\\(\\int_a^{+\\infty}f(x)\\mathrm{d}x\\)发散\\(\\Rightarrow \\int_a^{+\\infty}g(x)\\mathrm{d}x\\)发散</li>
        </ul>

        <b>比较判别法（极限形式）</b>
        <p>设\\(f(x), g(x)\\)在\\([a,+\\infty)\\)上连续，且\\(\\lim\\limits_{x\\rightarrow +\\infty}\\frac{f(x)}{g(x)} = \\lambda\\)：</p>
        <ul>
            <li>\\(\\lambda \\neq 0\\)：\\(\\int_a^{+\\infty}f(x)\\mathrm{d}x\\)与\\(\\int_a^{+\\infty}g(x)\\mathrm{d}x\\)同敛散</li>
            <li>\\(\\lambda = 0\\)：\\(\\int_a^{+\\infty}g(x)\\mathrm{d}x\\)收敛\\(\\Rightarrow\\int_a^{+\\infty}f(x)\\mathrm{d}x\\)收敛</li>
            <li>\\(\\lambda = 0\\)：\\(\\int_a^{+\\infty}g(x)\\mathrm{d}x\\)发散\\(\\Rightarrow\\int_a^{+\\infty}f(x)\\mathrm{d}x\\)发散</li>
        </ul>

        <b>常用结论</b>
        $$\\int_a^{+\\infty} \\frac{1}{x^p}\\mathrm{d}x
        \\begin{cases}
        收敛, p\\gt 1\\\\
        发散, p\\leq 1
        \\end{cases}$$
        <div class="Prove">
            $$\\int_a^{+\\infty} \\frac{1}{x^p}\\mathrm{d}x = \\frac{x^{1-p}}{1-p}\\Bigg|_a^{+\\infty}$$
            <p>当\\(1-p\\lt 0\\)，即\\(p\\gt 1\\)时：\\(\\int_a^{+\\infty} \\frac{1}{x^p}\\mathrm{d}x\\)收敛；</p>
            <p>当\\(1-p\\geq 0\\)，即\\(p\\leq 1\\)时：\\(\\int_a^{+\\infty} \\frac{1}{x^p}\\mathrm{d}x\\)发散。  </p>
        </div>
        
        <h2>无界函数的反常积分</h2>
        <p>设\\(f(x)\\)在\\((a,b]\\)上连续，\\(\\lim\\limits_{x\\rightarrow a^+}f(x) = \\infty\\)，则称\\(x=a\\)为\\(f(x)\\)的瑕点。</p>
        <p>若极限\\(\\lim\\limits_{t\\rightarrow a^+}\\int_t^b f(x)\\mathrm{d}x\\)存在，称此极限为\\(f(x)\\)在\\([a,b]\\)上的反常积分，记为：</p>
        $$\\int_a^b f(x) \\mathrm{d}x = \\lim\\limits_{t\\rightarrow a^+}\\int_t^b f(x)\\mathrm{d}x$$
        <p>此时称\\(\\int_a^b f(x)\\mathrm{d}x\\)收敛；若上述极限不存在，则称其发散。</p>
        
        <hr>

        <p>设\\(f(x)\\)在\\([a,b)\\)上连续，\\(\\lim\\limits_{x\\rightarrow b^-}f(x) = \\infty\\)，称\\(x=b\\)是\\(f(x)\\)的瑕点。</p>
        <p>若极限\\(\\lim\\limits_{t\\rightarrow b^-}\\int_a^t f(x)\\mathrm{d}x\\)存在，称此极限为\\(f(x)\\)在\\([a,b]\\)上的反常积分，记为：</p>
        $$\\int_a^b f(x) \\mathrm{d}x = \\lim\\limits_{t\\rightarrow b^-}\\int_a^t f(x)\\mathrm{d}x$$
        <p>此时称\\(\\int_a^b f(x)\\mathrm{d}x\\)收敛；若上述极限不存在，则称其发散。</p>

        <hr>

        <p>设\\(f(x)\\)在\\([a,b]\\)上除点\\(C(a\\lt C\\lt b)\\)外连续，\\(\\lim\\limits_{x\\rightarrow c}f(x)\\mathrm{d}x = \\infty\\)，称\\(c\\)为\\(f(x)\\)的瑕点。</p>
        <p>若反常积分\\(\\int_a^c f(x)\\mathrm{d}x, \\int_c^b f(x)\\mathrm{d}x\\)均收敛，则反常积分\\(\\int_a^b f(x)\\mathrm{d}x\\)也收敛，且\\(\\int_a^b f(x)\\mathrm{d}x = \\int_a^c f(x)\\mathrm{d}x + \\int_c^b f(x)\\mathrm{d}x\\)</p>

        <b>比较判别法</b>
        <p>设\\(f(x), g(x)\\)在\\((a,b]\\)上连续，且\\(0\\leq f(x)\\leq g(x), x=a\\)是\\(f(x)\\)和\\(g(x)\\)的瑕点。</p>
        <ul>
            <li>\\(\\int_a^b g(x)\\mathrm{d}x\\)收敛\\(\\Rightarrow \\int_a^b f(x)\\mathrm{d}x\\)收敛。</li>
            <li>\\(\\int_a^b f(x)\\mathrm{d}x\\)发散\\(\\Rightarrow \\int_a^b g(x)\\mathrm{d}x\\)发散。</li>
        </ul>

        <b>比较判别法（极限形式）</b>
        <p>设\\(f(x), g(x)\\)在\\((a,b]\\)上连续，\\(x=a\\)是\\(f(x)\\)和\\(g(x)\\)的瑕点，且\\(\\lim\\limits_{x\\rightarrow a^+}\\frac{f(x)}{g(x)} = \\lambda\\)（有限或无穷）</p>
        <ul>
            <li>\\(\\lambda \\neq 0\\)时，\\(\\int_a^b f(x)\\mathrm{d}x\\)与\\(\\int_a^b g(x)\\mathrm{d}x\\)同收敛。</li>
            <li>\\(\\lambda = 0\\)时，\\(\\int_a^b g(x)\\mathrm{d}x\\)收敛\\(\\Rightarrow\\int_a^b g(x)\\mathrm{d}x\\)收敛。</li>
        </ul>
        
        <b>常用结论</b>
        $$\\int_a^{+\\infty} \\frac{1}{x^p}\\mathrm{d}x(a\\gt 0)
        \\begin{cases}
        p\\gt 1, 收敛\\\\
        p\\leq 1, 发散
        \\end{cases}
        $$
        $$\\int_a^b \\frac{1}{(x-a)^q}\\mathrm{d}x, \\int_a^b \\frac{1}{(b-x)^q}\\mathrm{d}x
        \\begin{cases}
        q\\lt 1,收敛\\\\
        q\\geq 1,发散
        \\end{cases}
        $$
        $$
        \\int_a^{+\\infty} \\frac{1}{x^\\alpha \\ln^\\beta x}\\mathrm{d}x(a\\gt 1)
        \\begin{cases}
        \\alpha \\gt 1, 收敛\\\\
        \\alpha \\lt 1, 发散\\\\
        \\alpha = 1\\begin{cases}
        \\beta \\gt 1, 收敛\\\\
        \\beta \\leq 1, 发散
        \\end{cases}
        \\end{cases}
        $$

        <div class="Card-Method">
            <h2>反常积分判敛法</h2>
            <h3>无界函数的反常积分</h3>
            <b>极限审敛法</b>
            <p>条件：\\(f(x)\\)在\\((a,b]\\)上连续，\\(f(x)\\geq 0\\)，\\(x = a\\)为\\(f(x)\\)瑕点.</p>
            $$\\lim\\limits_{x\\rightarrow a^+}(x-a)f(x) \\gt 0$$
            <p>则反常积分\\(\\int_a^b f(x) \\mathrm{d}x\\)发散.</p>
        </div>
        <h2>反常积分判敛法</h2>
        <p>1、找出瑕点与\\(x\\rightarrow \\infty\\)的点。</p>


        <div class="Card-Method" id="Method">
            <h2>求解反常积分</h2>
            $$\\int_{-\\infty}^b f(x) \\mathrm{d}x = F(b) - \\lim\\limits_{x\\rightarrow -\\infty}F(x)$$
            $$\\int_a^{+\\infty} f(x) \\mathrm{d}x = \\lim\\limits_{x\\rightarrow +\\infty}F(x) - F(b)$$
            $$\\int_{-infty}^{+\\infty} f(x) \\mathrm{d}x= \\lim\\limits_{x\\rightarrow +\\infty}F(x) - \\lim\\limits_{x\\rightarrow -\\infty}F(x)$$

            <b>多项式的反常积分</b>
            <p>\\(\\int f(x) \\mathrm{d}x\\)发散，\\(\\int g(x) \\mathrm{d}x\\)发散，但\\(\\int f(x) + g(x) \\mathrm{d}x\\)可能收敛.</p>
        </div>


        <div class="Card-Formula" id="GammaFormula">
            <b>\\(\\Gamma\\)函数</b>
            $$\\Gamma(\\alpha) = \\int_0^{+\\infty}x^{\\alpha-1}e^{-x}\\mathrm{d}x$$
            <p>初始值</p>
            $$\\Gamma(1) = 1$$
            $$\\Gamma(\\frac{1}{2}) = \\sqrt{\\pi}$$
            <p>递推公式</p>
            $$\\Gamma(\\alpha) = (\\alpha-1)\\Gamma(\\alpha - 1)$$
            $$\\Gamma(n) = (n-1)!$$
        </div>


        <ul class="navibar">
            <li><a href="/note/math/mathematic/integral_definite">上一页</a></li>
            <li class="catalog"><a href="/note/math/mathematic/catalog">主页</a></li>
            <li class="next"><a href="/note/math/mathematic/integral_upperlimitfunction">下一页</a></li>
        </ul>` },
  "note/math/mathematic/integral_indefinite": { title: "高等数学", content: `<h1>不定积分</h1>
        <h2>一、不定积分概念与性质</h2>
        <div class="Card-Definition">
            <b>原函数</b>
            <p>若\\(F'(x) = f(x)\\)，称\\(F(x)\\)为\\(f(x)\\)的一个原函数.</p>
            <p>[注]若\\(F(x)\\)为\\(f(x)\\)的原函数，则\\(F(x) + C\\)也是\\(f(x)\\)的一个原函数。</p>
        </div>
        
        <div class="Card-Definition">
            <b>不定积分</b>
            <p>\\(f(x)\\)原函数的全体称为\\(f(x)\\)的不定积分。</p>
            $$\\int f(x) \\mathrm{d}x = F(x) + C$$
        </div>
        
        <b>原函数存在定理</b>
        $$f(x)在区间U内连续\\Rightarrow f(x)在区间U上原函数F(x)存在$$
        $$f(x)在区间U内存在第一类间断点\\Rightarrow f(x)在区间U上原函数F(x)不存在$$
        
        
        <div class="Card-Formula">
            <b>不可由导数公式直接得出的不定积分</b>
            $$\\begin{align}
            &\\int \\frac 1x \\mathrm{d}x = \\ln |x| + C\\\\\\\\
            &\\int \\sec x\\mathrm{d}x = \\ln|\\sec x + \\tan x| + C\\\\\\\\
            &\\int \\frac{1}{\\sqrt{a^2 - x^2}}\\mathrm{d}x = \\arcsin\\frac{x}{a} + C\\\\\\\\
            &\\int \\frac{1}{a^2 + x^2}\\mathrm{d}x = \\frac{1}{a}\\arctan\\frac{x}{a} + C\\\\\\\\
            \\end{align}$$
            <div class="Formula">
                $$\\begin{align}
                \\int \\csc x\\mathrm{d}x &= \\frac{1}{2}\\ln|\\tan\\frac{x}{2}| + C\\\\
                                       &= \\ln|\\csc x - \\cot x| + C\\\\
                                       &= -\\ln|\\csc x + \\cot x| + C
                \\end{align}$$
                <div class="Derivation">
                    $$\\begin{align}
                    \\int \\csc x\\mathrm{d}x &= \\int\\frac{1}{\\sin x}\\mathrm{d}x\\\\
                                           &= \\int\\frac{1}{2\\sin\\frac{x}{2}\\cos\\frac{x}{2}}\\mathrm{d}x\\\\
                                           &= \\int\\frac{\\cos\\frac{x}{2}\\sec^2\\frac{x}{2}}{2\\sin\\frac{x}{2}}\\\\
                                           &= \\int\\frac{1}{2\\tan\\frac{x}{2}}\\mathrm{d}\\tan\\frac{x}{2}\\\\
                                           &= \\frac{1}{2}\\ln|\\tan\\frac{x}{2}| + C
                    \\end{align}$$
                </div>
            </div>
            
            <div class="Formula">
                $$\\int \\tan x\\mathrm{d}x = -\\ln|\\cos x| + C$$
                <div class="Derivation">
                    $$\\begin{align}
                    \\int \\tan x \\mathrm{d}x &= -\\int \\frac{1}{\\cos x}\\mathrm{d}\\cos x\\\\
                    &= -\\ln |\\cos x| + C
                    \\end{align}$$
                </div>
            </div>
            <div class="Formula">
                $$\\int \\cot x\\mathrm{d}x = \\ln|\\sin x| + C$$
                <div class="Derivation">
                    
                </div>
            </div>
            
            <b>不定积分常用结论</b>
            $$\\int \\ln x \\mathrm{d}x = x\\ln x - x + C$$
            $$\\int x\\sin x \\mathrm{d}x = \\sin x - x\\cos x + C$$
            $$\\int x\\cos x \\mathrm{d}x = \\cos x + x\\sin x + C$$
            $$\\int \\cos^2 x \\mathrm{d}x = \\frac{1}{2}x + \\frac{1}{4}\\sin 2x + C$$
            <div class="Formula">
            $$\\int \\frac{1}{\\sqrt{x^2 + a^2}}\\mathrm{d}x = \\ln(x + \\sqrt{x^2 + a^2}) + C$$
            <div class="Derivation">
                <p>令\\(x = a\\tan t\\)</p>
                $$\\begin{align}
                &\\int \\frac{1}{\\sqrt{x^2 + a^2}}\\mathrm{d}x\\\\
                =&\\int \\frac{1}{\\sec t}\\cdot a\\sec^2 t\\mathrm{d}t\\\\
                =&a\\int \\sec t\\mathrm{d}t\\\\
                =&a\\ln|\\sec t + \\tan t| + C\\\\
                =&a\\ln|\\frac{\\sqrt{x^2+a^2}}{a} + \\frac{x}{a}| + C\\\\
                =&a\\ln(\\sqrt{x^2+a^2}+x) + C
                \\end{align}$$
            </div>
        </div>
        $$\\int \\frac{1}{\\sqrt{x^2 - a^2}}\\mathrm{d}x = \\ln|x + \\sqrt{x^2 - a^2}| + C$$
        
        </div>
        
        
        <div class="Card-Property">
            <b>不定积分的性质</b>
            $$\\begin{align}
            &\\int [f(x) \\pm g(x)]\\mathrm{d}x = \\int f(x)\\mathrm{d}x \\pm \\int g(x)\\mathrm{d}x\\\\\\\\
            &\\int kf(x)\\mathrm{d}x = k\\int f(x)\\mathrm{d}x
            \\end{align}$$
        </div>
        
        <h2>二、积分法</h2>
        
        <h3>凑微分法</h3>
        $$\\int f[\\phi(x)]\\phi'(x)\\mathrm{d}x = \\int f[\\phi(x)]\\mathrm{d}\\phi(x) = F[\\phi(x)] + C$$
        
        <h3>变量代换法</h3>
        <table>
            <tr>
                <td>原式\\((a\\gt0)\\)</td>
                <td>变元代换</td>
                <td>微元代换</td>
                <td>结果</td>
                <td>还原</td>
            </tr>
            <tr>
                <td>$$\\sqrt{a^2 - x^2}$$</td>
                <td>$$x = a\\sin t~(-\\frac{\\pi}{2} \\leq t \\leq \\frac{\\pi}{2})$$</td>
                <td>$$\\mathrm{d}x = a\\cos t\\mathrm{d}t$$</td>
                <td>$$a\\cos t$$</td>
                <td><img src="Img/asint.png" width="100"></td>
            </tr>
            <tr>
                <td>$$\\sqrt{a^2 + x^2}$$</td>
                <td>$$x = a\\tan t~(-\\frac{\\pi}{2}\\lt t \\lt \\frac{\\pi}{2})$$</td>
                <td>$$\\mathrm{d}x = a\\sec^2 t \\mathrm{d}t$$</td>
                <td>$$a\\sec t$$</td>
                <td><img src="Img/atant.png" width="100"></td>
            </tr>
            <tr>
                <td>$$\\sqrt{x^2 - a^2}$$</td>
                <td>$$x  = a\\sec t~(\\begin{cases}0\\leq t\\lt \\frac{\\pi}{2}, x\\geq a\\\\\\frac{\\pi}{2}\\lt t \\leq \\pi, x\\leq -a \\end{cases})$$</td>
                <td>$$\\mathrm{d}x = a\\sec t\\tan t\\mathrm{d}t$$</td>
                <td>$$|a\\tan t|$$</td>
                <td><img src="Img/asect.png" width="150"></td>
            </tr>
        </table>
        
        $$\\begin{align}\\int \\sqrt{2r x - x^2}\\mathrm{d}x &= \\int \\sqrt{r^2 - (x-r)^2}\\mathrm{d}x\\\\
        &= \\int \\end{align}$$

        <h3>分部积分法</h3>
        $$\\mathrm{d}(uv) = u\\mathrm{d}v + v\\mathrm{d}u$$
        $$\\int u\\mathrm{d}v = uv - \\int v\\mathrm{d}u $$
        <p>\\(u \\)的优先级：反对幂指三</p>
        
        <h3>三角有理化</h3>
        <p>设\\(\\tan \\frac{x}{2} = t\\)，则\\(x = 2\\arctan t, \\mathrm{d}x = \\frac{2}{1 + t^2}\\)</p>
        <table>
            <tr>
                <td>$$\\sin x = \\frac{2\\sin\\frac{x}{2}\\cos\\frac{x}{2}}{\\sin^2\\frac{x}{2}+\\cos^2\\frac{x}{2}} = \\frac{2\\tan\\frac{x}{2}}{\\tan^2\\frac{x}{2}+1} = \\frac{2t}{t^2 + 1}$$</td>
            </tr>
            <tr>
                <td>$$\\cos x = \\frac{\\cos^2 \\frac{x}{2}-\\sin^2 \\frac{x}{2}}{\\sin^2\\frac{x}{2} + \\cos^2\\frac{x}{2}} = \\frac{1 - t^2}{t^2 + 1 }$$</td>
            </tr>
            <tr>
                <td>$$\\tan x = \\frac{\\sin x}{\\cos x} = \\frac{2t}{1-t^2}$$</td>
            </tr>
        </table>
        
        <h2>题型</h2>
        <h3>判断函数是否存在原函数</h3>
        <b>解题思路</b>
        <p>函数连续\\(\\Rightarrow\\)存在原函数</p>
        <p>函数不连续\\(\\Rightarrow\\)判断间断点类型</p>
        <ul>
            <li>若为第一类间断点\\(\\Rightarrow\\)不存在原函数</li>
            <li>若为第二类间断点\\(\\Rightarrow\\)构造出\\(F'(x) = f(x)\\)</li>
        </ul>
        

        
        
        <div class="Card-Method">
            <h2>被积函数化简方法</h2>
            <table>
                <tr>
                    <td><b>一般分式</b></td>
                    <td>按分子拆分</td>
                </tr>
                <tr>
                    <td><b>有理函数</b></td>
                    <td>部分分式分解</td>
                </tr>
                <tr>
                    <td><b>三角函数</b></td>
                    <td>积化和差</td>
                </tr>
            </table>
            
            $$\\frac{u^m}{\\sqrt{u^n + a}} = u^{m-n}\\sqrt{u^n + a} - \\frac{au^{m-n}}{\\sqrt{u^n + a}}$$
        </div>
        
        
        
        <div class="Card-Method">
            <h2>求解不定积分的方法</h2>
            <hr>
            
            <h3>初等函数</h3>
            <p>直接利用公式求解</p>
            <hr>
            
            <h3>\\(\\int f[\\phi(x)]\\phi'(x)\\mathrm{d}x\\)型——凑微分法</h3>
            $$\\int f[\\phi(x)]\\phi'(x)\\mathrm{d}x = \\int f[\\phi(x)]\\mathrm{d}\\phi(x) = F[\\phi(x)] + C$$
            <hr>
            
            <h3>\\(\\int f(x)\\cdot g(x)\\mathrm{d}x\\)型——分部积分法</h3>
            $$\\begin{align}
            \\int f(x)g'(x)\\mathrm{d}x &= \\int f(x) \\mathrm{d}g(x)\\\\
            &= f(x)g(x) - \\int g(x)\\mathrm{d}f(x)
            \\end{align}$$
            <hr>
            
            <h3>\\(\\sqrt{a^2 - x^2},\\sqrt{a^2 + x^2}, \\sqrt{x^2 - a^2}\\)型——三角代换法</h3>
            <hr>

            <h3>\\(\\sqrt{ax^2 + bx + c}\\)型</h3>
            <p>凑成\\(\\sqrt{a^2 - x^2},\\sqrt{a^2 + x^2}, \\sqrt{x^2 - a^2}\\)型.</p>
            <hr>

            <h3>\\(f(x)^2 + 1, f(x)^2 - 1\\)型</h3>
            <p>\\(f(x)^2 + 1 \\Rightarrow\\)令\\(f(x) = \\tan t\\)</p>
            <p>\\(f(x)^2 - 1 \\Rightarrow\\)令\\(f(x) = \\sec t\\)</p>
            <hr>
            
            <h3>\\(\\frac{1}{ax^2 + bx + c}\\)型</h3>
            $$\\begin{align}
            \\int \\frac{1}{ax^2 + bx + c} \\mathrm{d}x &= A\\int \\frac{1}{(x + m)^2 + n^2}\\mathrm{d}x\\\\
            &= \\frac{A}{n}\\arctan \\frac{x+m}{n}
            \\end{align}$$
            <hr>
            
            <h3>\\(\\frac{a'x + b'}{ax^2 + bx + c}\\)型</h3>
            $$\\int\\frac{a'x + b'}{ax^2 + bx + c}\\mathrm{d}x = A\\int\\frac{2ax + b}{ax^2 + bx + c}\\mathrm{d}x + B\\int\\frac{1}{ax^2 + bx + c}\\mathrm{d}x$$
            <hr>

            <h3>\\(\\frac{1}{x^m\\sqrt{a + x^n}}\\)型——倒代换</h3>
            <p>令\\(x = \\frac{1}{u}\\)</p>
            
            <h3>复杂分式</h3>
            
            <b>包括分母项数多或含根式导致不好化简的情况</b>
            <p>令分母为\\(t\\)，注意换\\(\\mathrm{d}x = x'(t)\\mathrm{d}t\\)并在计算完成后将\\(t\\)代换回\\(x\\).</p>

            <h3>三角函数</h3>
            <b>\\(\\sin x\\cdot f(\\cos x), \\cos x\\cdot f(\\sin x)\\)型</b>
            $$\\int \\sin x\\cdot f(\\cos x) \\mathrm{d}x = -\\int f(\\cos x)\\mathrm{d}(\\cos x) $$
            $$\\int \\cos x\\cdot f(\\sin x) \\mathrm{d}x = \\int f(\\sin x)\\mathrm{d}(\\sin x) $$

            <h3>分段函数</h3>
            <p>由于\\(可导\\Rightarrow 连续\\)，\\(F(x) = \\int f(x)\\mathrm{d}x\\)一定连续.</p>
            <p>故在分段点\\(x_0\\)处，由\\(\\lim\\limits_{x\\rightarrow x^-_0}F(x) = \\lim\\limits_{x\\rightarrow x^+_0}F(x)\\)求解出\\(C_1\\)与\\(C_2\\)间的关系. </p>
            
            <p><b>[注]求不定积分时，结果一定要带上常数\\(C\\).</b></p>
            
        </div>
    
        
        <ul class="navibar">
            <li class="catalog"><a href="/note/math/mathematic/catalog">目录</a></li>
            <li class="next"><a href="/note/math/mathematic/integral_definite">下一页</a></li>
        </ul>` },
  "note/math/mathematic/integral_upperlimitfunction": { title: "高等数学", content: `<h1>积分上限函数</h1>
        <p>变上限积分\\(\\int_a^x f(t)\\mathrm{d}t\\)是上限\\(x\\)的函数，称为积分上限函数。</p>
        $$\\int_a^x f(t)\\mathrm{d}t = F(t)|_a^x = F(x) - F(a)$$

        <b>性质</b>
        <p>若\\(f(x)\\)在\\([-l,l]\\)上连续：</p>
        <ul>
            <li>
                <div class="Formula">
                    \\(f(x)\\)为奇函数\\(\\Rightarrow \\int_a^xf(t)\\mathrm{d}t\\)为偶函数
                    <div class="Derivation">
                        <p>若\\(f(x)\\)为奇函数\\(\\Rightarrow F(x)\\)为偶函数</p>
                        $$\\int_a^xf(t)\\mathrm{d}t = F(x) - F(a)$$
                        $$\\therefore F(-x) - F(a) = F(x) - F(a)$$
                        <p>故\\(\\int_a^xf(t)\\mathrm{d}t\\)为偶函数</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="Formula">
                    \\(f(x)\\)为偶函数\\(\\Rightarrow \\int_0^xf(t)\\mathrm{d}t\\)为奇函数
                    <div class="Derivation">
                        <p>若\\(f(x)\\)为偶函数\\(\\Rightarrow F(x)\\)为奇函数</p>
                        $$\\int_0^xf(t)\\mathrm{d}t = F(x) - F(0) = F(x)$$
                        $$\\therefore F(-x)= -F(x)$$
                        <p>故\\(\\int_0^xf(t)\\mathrm{d}t\\)为奇函数</p>
                    </div>
                </div>
            </li>
        </ul>

        <b>积分上限函数的导数</b>
        $$\\begin{align}
        (\\int_{a(x)}^{b(x)} f(t)\\mathrm{d}t)' &= (F[b(x)] - F[a(x)])'\\\\
                                              &= f'[b(x)]b'(x) - f'[a(x)]a'(x)
        
        \\end{align}$$
        $$\\begin{align}
        (\\int_{a(x)}^{b(x)} f(t)g(x)\\mathrm{d}t)' &= (g(x)\\int_{a(x)}^{b(x)} f(t)\\mathrm{d}t)'\\\\
                                                  &= g'(x)\\int_{a(x)}^{b(x)} f(t)\\mathrm{d}t + g(x)(\\int_{a(x)}^{b(x)} f(t)\\mathrm{d}t)'
        \\end{align}$$
        $$\\int_{a(x)}^{b(x)}f[g(x,t)]\\mathrm{d}t \\overset{\\text{u=g(x,t)}}{=\\!=\\!=\\!=} \\int_{\\alpha(u)}^{\\beta(u)} f(u)\\mathrm{d}u $$
    
    
        <b>二重积分上限函数</b>
        $$g(x) = \\int_0^x \\int_0^u f(t) \\mathrm{d}t \\mathrm{d}u$$
        $$g'(x) = \\int_0^x f(t) \\mathrm{d}t$$
        $$g''(x) = f(x)$$

        <ul class="navibar">
            <li><a href="/note/math/mathematic/integral_improper">上一页</a></li>
            <li class="catalog"><a href="/note/math/mathematic/catalog">主页</a></li>
            <li class="next"><a href="/note/math/mathematic/integral_application">下一页</a></li>
        </ul>` },
  "note/math/mathematic/key5.1": { title: "高等数学", content: `<h1>定积分</h1>
        <hr>
        <h2>函数奇偶性</h2>
        <p>\\(\\int_{-a}^af(x)\\mathrm{d}x \\Rightarrow\\)考虑\\(f(x)\\)的奇偶性：</p>
        <ul>
            <li>若\\(f(x)\\)为奇函数：\\(\\int_{-a}^a f(x)\\mathrm{d}x = 0\\)</li>
            <li>若\\(f(x)\\)为偶函数：\\(\\int_{-a}^af(x)\\mathrm{d}x = 2\\int_0^af(x)\\mathrm{d}x\\)</li>
        </ul>

        <hr>
        <h2>几何意义（根号）</h2>
        <p>对于\\(\\int_a^{-a}\\sqrt{a^2 - x^2}\\mathrm{d}x\\)，令\\(y = \\sqrt{a^2 - x^2}\\)，故\\(\\int_a^{-a}\\sqrt{a^2 - x^2}\\mathrm{d}x\\)为\\(x^2 + y^2 = a^2\\)的上半圆与\\(x\\)轴为成的面积，即</p>
        $$\\int_a^{-a}\\sqrt{a^2 - x^2}\\mathrm{d}x = \\frac12 \\pi a^2$$
        <b>推论</b>
        <p>对于\\(\\int_a^b\\sqrt{A + Bx - x^2}\\mathrm{d}x\\)，令\\(y = \\sqrt{A + Bx - x^2}\\)，故\\(\\int_a^{-a}\\sqrt{A + Bx - x^2}\\mathrm{d}x\\)为\\((x - x_0)^2 + y^2 = r^2\\)的上半圆在\\([a,b]\\)上与\\(x\\)轴为成的面积。</p>

        <hr>
        <h2>已知\\(f'(x)\\)</h2>
        $$\\int_a^b f(x) \\mathrm{d}x = xf(x)|_a^b - \\int_a^bxf'(x)\\mathrm{d}x$$` },
  "note/math/mathematic/limit_function": { title: "高等数学", content: `<h1>函数极限</h1>

        <div class="PageCatalog">
            <ul>
                <li><a href="#ImportantFormula">重要极限</a></li>
                <li><a href="#Method">求极限方法总结</a></li>
            </ul>
        </div>
        <a class="BackToTop" href="#PageHead">Top</a>

        
        <b>（一）自变量趋于有限值时函数的极限</b>
        <p>设函数\\(f(x)\\)在点\\(x_0\\)的某去心邻域内有定义。若\\(\\exists\\)常数\\(A\\)，对于\\(\\forall\\epsilon \\gt 0\\)，总\\(\\exists \\delta \\gt 0\\)，使得当\\(|x - x_0|\\lt \\delta\\)时，\\(|f(x) - A| \\lt \\epsilon\\)</p>
        <p>常数\\(A\\)称为函数\\(f(x)\\)当\\(x\\rightarrow x_0\\)时的极限，记作\\(\\mathop{lim}\\limits_{x\\rightarrow x_0}f(x) = A\\)或\\(f(x)\\rightarrow A(x\\rightarrow x_0)\\)</p>
        <ul>
            <li>左极限：\\(\\lim\\limits_{x\\rightarrow x_{0^-}}f(x) = A \\Leftrightarrow \\forall \\epsilon\\gt 0, \\exists \\delta \\gt 0, 当x_0 - \\delta \\lt x \\lt x_0时，|f(x) - A|\\lt \\epsilon\\)</li>
            <li>右极限：\\(\\lim\\limits_{x\\rightarrow x_{0^+}}f(x) = A \\Leftrightarrow \\forall \\epsilon\\gt 0, \\exists \\delta \\gt 0, 当x_0 \\lt x \\lt x_0 + \\delta时，|f(x) - A|\\lt \\epsilon\\)</li>
        </ul>
        $$\\lim\\limits_{x\\rightarrow x_0}f(x) = A \\Leftrightarrow \\lim\\limits_{x\\rightarrow x_{0^-}}f(x) = \\lim\\limits_{x\\rightarrow x_{0^+}}f(x) = A$$

        <b>（二）自变量趋于无穷大时函数的极限</b>
        $$\\lim\\limits_{x\\rightarrow -\\infty}f(x) = A \\Leftrightarrow \\forall \\epsilon\\gt 0, \\exists X \\gt 0, 当x\\lt -X时，|f(x) - A|\\lt \\epsilon$$
        $$\\lim\\limits_{x\\rightarrow +\\infty}f(x) = A \\Leftrightarrow \\forall \\epsilon\\gt 0, \\exists X \\gt 0, 当x\\gt X时，|f(x) - A|\\lt \\epsilon$$
        $$\\lim\\limits_{x\\rightarrow \\infty}f(x) = A \\Leftrightarrow \\forall \\epsilon\\gt 0, \\exists X \\gt 0, 当|x|\\gt X时，|f(x) - A|\\lt \\epsilon \\Leftrightarrow \\lim\\limits_{x\\rightarrow -\\infty}f(x) = \\lim\\limits_{x\\rightarrow +\\infty}f(x) = A$$

        <b>常用函数的极限</b>


        <b>极限唯一性</b>
        <p>若\\(\\lim f(x)\\)存在，那么此极限唯一</p>
        <b>局部有界性</b>
        <p>若\\(\\lim\\limits_{x\\rightarrow x_0}f(x) = A\\)，则\\(\\exists M\\gt 0, \\delta \\gt 0\\)，使得当\\(0\\lt |x-x_0|\\lt \\delta\\)时，\\(|f(x)|\\leq M\\)</p>


        <b>函数极限与无穷小的关系</b>
        $$\\lim f(x) = A \\Leftrightarrow f(x) = A + \\alpha(x)$$
        其中\\(\\alpha(x)\\)为高阶无穷小，\\(\\lim \\alpha(x) = 0\\)
    
        <h2>第四节 极限存在准则</h2>
        <b>夹逼准则</b>
        <br><br>
        数列形式
        <p>若\\(\\exists N\\in\\mathbb{N}_+\\)，当\\(n \\geq N\\)时，\\(y_n\\leq x_n\\leq z_n\\)，且\\(\\lim\\limits_{n\\rightarrow \\infty}y_n = \\lim\\limits_{n\\rightarrow\\infty}z = a\\)</p>
        <p>\\(\\Rightarrow \\lim\\limits_{n\\rightarrow \\infty}x_n = a\\)</p>
        函数形式
        <p>当\\(0\\lt|x-x_0|\\lt \\delta\\)时，\\(g(x)\\leq f(x)\\leq h(x)\\)，且\\(\\lim g(x) = \\lim h(x) = A\\)</p>
        <p>\\(\\Rightarrow \\lim f(x) = A\\)</p>


        <b>单调有界原理</b>
        $$x_{n+1}\\geq x_n, x_n\\lt M\\Rightarrow \\exists \\lim\\limits_{n\\rightarrow \\infty}x_n$$
        $$x_{n+1}\\leq x_n, x_n\\gt M\\Rightarrow \\exists \\lim\\limits_{n\\rightarrow \\infty}x_n$$


        <h2>极限的四则运算法则</h2>
        设\\(\\lim f(x) = A, \\lim g(x) = B\\)
        <table>
            <tr>
                <td>$$\\lim[f(x) \\pm g(x)] = \\lim f(x) \\pm \\lim g(x) = A \\pm B$$</td>
            </tr>
            <tr>
                <td>$$\\lim[f(x)g(x)] = \\lim f(x) \\cdot \\lim g(x) = A \\cdot B$$</td>
            </tr>
            <tr>
                <td>$$\\lim \\frac{f(x)}{g(x)} = \\frac{\\lim f(x)}{\\lim g(x)} = \\frac AB, B\\neq 0$$</td>
            </tr>
        </table>

        <b>推论</b>
        $$极限存在+极限存在=极限存在$$
        $$极限存在+极限不存在=极限不存在$$
        $$极限不存在+极限不存在=未知情况$$
        $$极限存在\\cdot 极限不存在 = 未知$$
        $$极限不存在\\cdot 极限不存在 = 未知$$
        $$\\lim f(x) = A \\neq 0 \\Rightarrow \\lim f(x)g(x) = A\\lim g(x)$$
        $$\\lim f(x)g(x) = A, \\lim g(x) = \\infty \\Rightarrow \\lim f(x) = 0$$
        $$\\lim \\frac{f(x)}{g(x)} = A, \\lim g(x) = 0 \\Rightarrow \\lim f(x) = 0$$
        $$\\lim \\frac{f(x)}{g(x)} = B \\neq 0, \\lim f(x) =0 \\Rightarrow \\lim g(x) = 0$$


        <h2>函数极限的性质</h2>
        <b>保号性</b>
        <p>若\\(\\lim\\limits_{x\\rightarrow x_0}f(x) = A\\)，且\\(A\\gt 0\\)（或\\(A \\lt 0\\)），那么\\(\\exists \\delta\\gt 0\\)，使得当\\(0\\lt |x-x_0|\\lt \\delta\\)时，\\(|f(x)|\\gt 0\\)（或\\(f(x)\\lt 0\\)）</p>

        <div class="Card-Formula" id="ImportantFormula">
            <b>重要极限</b>
            $$\\lim\\limits_{x\\rightarrow 0^+}(1 + \\frac{1}{x})^x = \\lim\\limits_{x\\rightarrow +\\infty}(1 + x)^{\\frac{1}{x}} = 1$$
            $$\\lim\\limits_{x\\rightarrow\\infty}\\sqrt[n]{n} = 1$$
            <div class="Formula">
                $$\\lim\\limits_{n\\rightarrow \\infty}\\sqrt[n]{x_1^n + x_2^n + \\cdots + x_m^n} = \\max\\{x_1, x_2, \\cdots x_m\\}, x_i\\gt0$$
                <div class="Derivation">
                    <p>不妨设\\(0\\lt x_1 \\leq x_2 \\leq \\cdots \\leq x_m\\)</p>
                    $$x_m^n \\leq x_1^n + x_2^n +\\cdots + x_m^n \\leq mx_m^n$$
                    $$\\sqrt[n]{x_m^n} \\leq \\sqrt[n]{x_1^n + x_2^n +\\cdots + x_m^n} \\leq \\sqrt[n]{mx_m^n}$$
                    $$
                    \\begin{cases}
                    \\lim\\limits_{n\\rightarrow \\infty}\\sqrt[n]{x_m^n} = x_m\\\\
                    \\lim\\limits_{n\\rightarrow \\infty}\\sqrt[n]{mx_m^n} = x_m
                    \\end{cases}\\Rightarrow
                    \\lim\\limits_{n\\rightarrow \\infty}\\sqrt[n]{x_1^n + x_2^n + \\cdots + x_m^n} = x_m
                    $$
                </div>
            </div>

            <div class="Formula">
                $$\\lim\\limits_{x\\rightarrow +\\infty}(x-\\ln x) = +\\infty$$
                <div class="Derivation">
                    $$\\begin{align}
                    \\lim\\limits_{x\\rightarrow +\\infty}(x-\\ln x) &= \\lim\\limits_{x\\rightarrow +\\infty}(\\ln e^x-\\ln x)\\\\
                                                                &= \\lim\\limits_{x\\rightarrow +\\infty}\\ln\\frac{e^x}{x}\\\\
                                                                &= \\lim\\limits_{x\\rightarrow +\\infty}\\ln\\frac{e^x}{1}\\\\
                                                                &= +\\infty
                    \\end{align}$$
                </div>
            </div>

            <div class="Formula">
                $$\\lim\\limits_{x\\rightarrow +\\infty}(\\ln x - x) = -\\infty$$
                <div class="Derivation">
                    $$\\begin{align}
                    \\lim\\limits_{x\\rightarrow +\\infty}(\\ln x-x) &= \\lim\\limits_{x\\rightarrow +\\infty}(\\ln x-\\ln e^x)\\\\
                                                                &= \\lim\\limits_{x\\rightarrow +\\infty}\\ln\\frac{x}{e^x}\\\\
                                                                &= \\lim\\limits_{x\\rightarrow +\\infty}\\ln\\frac{1}{e^x}\\\\
                                                                &= -\\infty
                    \\end{align}$$
                </div>
            </div>
        </div>

        <div class="Card-Method" id="Method">
            <h2>求函数极限的方法</h2>
            <h3>直接代入法</h3>
            <p>若直接代入后极限的分子分母不同时为\\(0\\)，则可直接得出结果.</p>
            <p>反之参考以下方法:</p>

            <h3>有理函数-假分式</h3>
            <p>对于易于约分的假分式，将假分式化为真分式后直接代入.</p>
            $$\\lim\\limits_{x\\rightarrow \\infty}\\frac{a_0x^m + a_1x^{m-1} + \\cdots + a_m}{b_0x^n + b_1x^{n-1} + \\cdots + b_m} = \\begin{cases}0, n\\gt m\\\\\\frac{a_0}{b_0}, n=m\\\\\\infty, n\\lt m\\end{cases}$$
            <p>对于\\(\\lim\\limits_{x\\rightarrow \\infty}\\frac{P(x)}{Q(x)}\\)，分子分母同时除以最高次\\(x^n\\).</p>
            <p>\\(\\lim\\limits_{x\\rightarrow 0}\\frac{c}{x} = \\infty, \\lim\\limits_{x\\rightarrow 0}\\frac{x}{c} = 0\\).</p>
            <p>\\(\\lim\\limits_{x\\rightarrow \\infty}\\frac{c}{x} = 0, \\lim\\limits_{x\\rightarrow \\infty}\\frac{x}{c} = \\infty\\).</p>

            <h3>四则运算</h3>
            $$\\lim f(x)g(x) = \\lim f(x)\\lim g(x)$$
            $$\\lim [f(x) + g(x)] = \\lim f(x) + \\lim g(x)$$

            <h3><a href="./Infinty.html#sim">等价无穷小</a></h3>
            <h3><a href="/note/math/mathematic/taylorformula">泰勒展开</a></h3>
            <p>分子为多项式时，可以展开其中一项.</p>
            $$\\lim \\frac{o(x)}{x} = 0$$

            <h3>洛必达法则</h3>
            <p>\\(\\frac{0}{0}\\)型 \\(\\frac{\\infty}{\\infty}\\)型</p>        
            $$\\lim\\frac{f(x)}{g(x)} = \\lim\\frac{f'(x)}{g'(x)}$$
            <p>[注]洛必达法则求得极限不存在，说明洛必达法则不适用，不能说明原极限不存在.</p>

            <h3>\\(1^\\infty\\)型极限</h3>
            $$
            \\begin{cases}
            \\lim \\alpha(x) = 0\\\\
            \\lim \\beta(x) = \\infty\\\\
            \\end{cases}\\Rightarrow
            \\lim [1 + \\alpha(x)]^{\\beta(x)} = e^{\\lim \\alpha(x)\\beta(x)}
            $$

            <h3>\\(\\lim\\limits_{x\\rightarrow 0}a^{\\frac{1}{x}}\\)</h3>
            $$\\lim\\limits_{x\\rightarrow 0^+}a^{\\frac{1}{x}} = a^{+\\infty} = \\infty$$
            $$\\lim\\limits_{x\\rightarrow 0^-}a^{\\frac{1}{x}} = (\\frac{1}{a})^{+\\infty} = 0$$


            <h3>\\(\\sum f(n, k)\\)型</h3>

            <b>定积分定义</b>
            $$\\lim\\limits_{n\\rightarrow \\infty}\\sum\\limits_{k=1}^n f(\\frac kn)\\frac1n = \\int_0^1 f(x) \\mathrm{d}x$$
            <p>有时无法化成\\(\\frac{1}{n}f(\\frac{k}{n})\\)的形式，这时先将\\(\\frac{1}{n}\\)提出后使用<b>夹逼准则</b>.</p>
            <p>其中一边化为定积分定义的形式，另一边展开为\\(f(\\frac{k}{n})\\)与\\(g(\\frac{1}{n})\\)的多项式.</p>

            <b>夹逼准则</b>
            <p>放缩分母</p>

            <b>\\(\\sin(\\cos x),\\cos(\\sin x)\\)型</b>
            <p>一般使用和差化积公式化简.</p>

            <b>\\(\\lim\\limits_{x\\rightarrow 0}\\frac{A+B}{C}\\)，\\(A+B\\)中含根式的情况</b>
            <p>上下同乘\\(A-B\\)消去分子根式，分母中\\(A-B\\)一定不为零，可以直接计算.</p>

            <b>\\(\\lim \\sqrt[n]{f(x)}\\)型</b>
            <p>设\\(\\lim \\sqrt[n]{f(x)}\\)存在</p>
            $$\\lim \\sqrt[n]{f(x)} = \\sqrt[n]{\\lim f(x)}$$
        </div>


        <h2>求极限注意事项</h2>
        <ul>
            <li>指数形式转化为对数形式</li>
            <li>\\(\\ln(x)\\)转化为\\(\\ln(x-1 + 1)\\sim x-1\\)</li>
            <li>公式中的\\(x\\)是整体</li>
            <li>$$\\lim\\limits_{x\\rightarrow \\infty}a^x = \\begin{cases}
                0,|x|\\lt 1\\\\
                \\infty, |x|\\gt 1\\\\
                1, x=1\\\\
                (-1)^x, x= -1
                \\end{cases}$$</li>
        </ul>

        <b>从极限导出函数</b>
        $$\\lim g[f(x)] = a$$
        $$g[f(x)] = a + \\Delta a, \\lim \\Delta a = 0$$


        <div class="Card-Property">
            <table>
                <tr>
                    <td colspan="2"><h2>极限性质</h2></td>
                </tr>
                <tr>
                    <td><b>数列极限</b></td>
                    <td><b>函数极限</b></td>
                </tr>
                <tr>
                    <td colspan="2">有界性</td>
                </tr>
                <tr>
                    <td>\\(\\{x\\}\\)收敛\\(\\Rightarrow \\{x\\}\\)有界</td>
                    <td>\\(\\lim\\limits_{x\\rightarrow x_0} f(x)\\)存在\\(\\Rightarrow f(x)\\)在\\(x_0\\)某去心邻域内局部有界</td>
                </tr>
                <tr>
                    <td colspan="2">保号性</td>
                </tr>
                <tr>
                    <td class="tbtext">
                        <p>设\\(\\lim\\limits_{n\\rightarrow \\infty}x_n = A\\)</p>
                        <p>\\(A\\gt 0 \\Rightarrow \\exists N\\gt 0\\)，\\(n\\gt N\\)时，\\(x_n \\gt 0\\)</p>
                        <p>\\(A\\lt 0 \\Rightarrow \\exists N\\gt 0\\)，\\(n\\gt N\\)时，\\(x_n \\lt 0\\)</p>
                        <p>\\(\\exists N\\gt 0\\)，\\(n\\gt N\\)时，\\(x_n \\geq 0 \\Rightarrow A\\geq 0\\)</p>
                        <p>\\(\\exists N\\gt 0\\)，\\(n\\gt N\\)时，\\(x_n \\leq 0 \\Rightarrow A\\leq 0\\)</p>
                    </td>
                    <td>
                        
                    </td>
                </tr>
            </table>
        </div>

        <h2>函数连续性</h2>
        <b>连续</b>
        <p>设\\(f(x)\\)在\\(x_0\\)某个邻域内有定义，若\\(\\lim\\limits_{x\\rightarrow x_0}f(x) = f(x_0)\\)，称\\(f(x_0)\\)在\\(x_0\\)处连续。</p>
        <p>设\\(f(x)\\)在\\(x_0\\)某个邻域内有定义，若\\(\\lim\\limits_{\\Delta x\\rightarrow 0} y = \\lim\\limits_{\\Delta x\\rightarrow 0}[f(x_0 + \\Delta x) - f(x_0)] = 0\\)，称\\(f(x_0)\\)在\\(x_0\\)处连续。</p>
        <ul>
            <li>\\(f(x)\\)在\\(x_0\\)处左连续：\\(\\lim\\limits_{x\\rightarrow x_0^-}f(x) = f(x_0)\\)</li>
            <li>\\(f(x)\\)在\\(x_0\\)处右连续：\\(\\lim\\limits_{x\\rightarrow x_0^+}f(x) = f(x_0)\\)</li>
        </ul>
        $$\\lim\\limits_{x\\rightarrow x_0} \\Leftrightarrow \\lim\\limits_{x\\rightarrow x_0^-} = \\lim\\limits_{x\\rightarrow x_0^+} = f(x_0)$$

        <ul>
            <li>\\(f(x)\\)在\\((a,b)\\)内连续：\\(f(x)\\)在\\((a,b)\\)内每点都连续。</li>
            <li>\\(f(x)\\)在\\([a,b]\\)内连续：\\(f(x)\\)在\\((a,b)\\)内每点都连续，且在\\(x=a\\)处右连续，在\\(x=b\\)处左连续。</li>
        </ul>



        <h3>连续性的性质及运算</h3>
        <p>设函数\\(f(x)\\)和\\(g(x)\\)在\\(x_0\\)处连续，则\\(f(x) \\pm g(x), f(x)\\cdot g(x), \\frac{f(x)}{g(x)}(g(x)\\neq 0)\\)在\\(x_0\\)处连续。</p>
        <p>设\\(u = \\phi(x)\\)在\\(x_0\\)处连续，且\\(\\phi(x_0) = u_0\\)，而\\(y = f(u)\\)在点\\(u_0\\)处连续，则复合函数\\(y = f(\\phi(x))\\)在\\(x_0\\)处连续。</p>
        <p>初等函数在其定义域内均为连续的。</p>

        <b>闭区间上连续函数的性质</b>
        <p>最值定理：\\(f(x)\\)在\\([a,b]\\)上连续\\(\\Rightarrow\\)\\(f(x)\\)在\\([a,b]\\)上有最大值与最小值。</p>
        <p>有界定理：\\(f(x)\\)在\\([a,b]\\)上连续\\(\\Rightarrow\\)\\(f(x)\\)在\\([a,b]\\)上有界。</p>
        <p>介值定理：\\(f(x)\\)在\\([a,b]\\)上连续且\\(f(a)\\neq f(b)\\)，对于\\(\\forall f(a) \\leq c \\leq f(b)\\)，至少存在一点\\(\\xi \\in (a,b)\\)，使得\\(f(\\xi) = c\\)。</p>
        <p>介值定理推论：\\(f(x)\\)在\\([a,b]\\)上连续，有最大值\\(M\\)与最小值\\(m\\)，对于\\(\\forall m \\leq c \\leq M\\)，至少存在一点\\(\\xi \\in (a,b)\\)，使得\\(f(\\xi) = c\\)。</p>
        <p>零点定理：\\(f(x)\\)在\\([a,b]\\)上连续且\\(f(a)\\cdot f(b) \\lt 0\\)，至少存在一点\\(\\xi \\in (a,b)\\)，使得\\(f(\\xi) = 0\\)。</p>
        


        <ul class="navibar">
            <li class="catalog"><a href="/note/math/mathematic/mathematic">主页</a></li>
            <li class="next"><a href="/note/math/mathematic/chapter2">下一页</a></li>
        </ul>` },
  "note/math/mathematic/limit_sequence": { title: "高等数学", content: `<h1>数列极限</h1>
        <div class="Card-Definition">
            <b>数列的收敛与发散</b>
            <p>对于数列\\(\\{x_n\\}\\)：</p>
            <p>若\\(\\exists a \\in \\mathbb{R}\\)，对于\\(\\forall\\epsilon\\gt 0\\)，总\\(\\exists N \\in \\mathbb{N}_+\\)，使得当\\(n>N\\)时，\\(|x_n - a| \\lt \\epsilon\\)恒成立。</p>
            <p>则称\\(a\\)为数列\\(\\{x_n\\}\\)的极限，或称\\(\\{x_n\\}\\)<b>收敛</b>于极限\\(a\\)，记作\\(\\mathop{\\lim}\\limits_{n\\rightarrow \\infty}x_n = a\\)或\\(x_n \\rightarrow a(n\\rightarrow \\infty)\\)</p>
        </div>
        <p>[注]要使\\(n \\gt \\epsilon\\)，令\\(N = [\\epsilon]\\)，则当\\(n \\gt N = [\\epsilon]\\)时，\\(n \\geq [\\epsilon] + 1\\gt \\epsilon\\)</p>
        <p>[注]要使\\(\\frac{1}{kn + c}\\lt \\epsilon(c\\gt 0)\\)，当\\(\\frac{1}{kn} \\lt c\\)时，\\(\\frac{1}{kn + c}\\lt \\frac{1}{kn}\\lt c\\)</p>

        <p><b>题型1：判断数列\\(\\{x_n\\}\\)是否收敛，若收敛求出极限</b></p>
        注意：
        <ol>
            <li>若含\\((-1)^n\\)项，判断另一个因子是否趋于0</li>
        </ol>

        <p><b>题型2：证明数列\\(\\{x_n\\}\\)的极限为\\(a\\)</b>
        <ol>
            <li>由\\(|x_n - a| \\lt \\epsilon\\)推出\\(n > f(\\epsilon)\\)</li>
            <li>\\(\\forall\\)取一大于\\(f(\\epsilon)\\)的正整数\\(N\\)，当\\(n>N>f(\\epsilon)\\)时，\\(|x_n - a|< \\epsilon\\)一定成立</li>
        </ol>
        技巧：
        <ol>
            <li>可以设计一简单的\\(g(n) > |x_n - a|\\)，此时\\(g(n) \\lt \\epsilon\\)是\\(|x_n - a| < \\epsilon\\)的充分条件</li>
        </ol>
        </p>

        <b>定理</b>
        $$\\lim\\limits_{n\\rightarrow \\infty} x_n = a \\Leftrightarrow \\lim\\limits_{n\\rightarrow \\infty} x_{2n} = \\lim\\limits_{n\\rightarrow \\infty} x_{2n+1} = a  $$

        <div class="Card-Method">
            <h2>求数列极限的方法</h2>

            <h3>\\(x_{n+1} = f(x_n)\\)</h3>
            
            <table>
                <tr>
                    <td colspan="2"><b>1、利用数学归纳法得出有界性</b></td>
                </tr>
                <tr>
                    <td class="tbtext">
                        <p>当\\(n=1\\)时，\\(x_1\\lt M\\).</p>
                        <p>设\\(n=k\\)时\\(x_1\\lt M\\)，则\\(n=k+1\\)时\\(x_1\\lt M\\).</p>
                        <p>故\\(\\forall x_n\\lt M\\).</p>
                    </td>
                   <td class="tbtext">
                        <p>当\\(n=1\\)时，\\(x_1\\gt M\\).</p>
                        <p>设\\(n=k\\)时\\(x_1\\gt M\\)，则\\(n=k+1\\)时\\(x_1\\gt M\\).</p>
                        <p>故\\(\\forall x_n\\gt M\\).</p>
                    </td>
                </tr>
                <tr>
                    <td colspan="2"><b>2、证明数列单调性</b></td>
                </tr>
                <tr>
                    <td class="tbtext">
                        <p>\\(x_n\\)单调递增，\\(\\lim\\limits_{n\\rightarrow \\infty} x_n\\)存在.</p>
                    </td>
                                        <td class="tbtext">
                        <p>\\(x_n\\)单调递减，\\(\\lim\\limits_{n\\rightarrow \\infty} x_n\\)存在.</p>
                    </td>
                </tr>
            </table>

            <b>夹逼定理</b>
        </div>` },
  "note/math/mathematic/mathbasic": { title: "高等数学", content: `<h1>基础</h1>

        <p><b>扇形弧长公式</b>：\\(l = \\theta r\\)</p>
        <p><b>扇形面积公式</b>：\\(S = \\frac12l r = \\frac12\\theta r^2\\)</p>
        <p><b>圆锥体积公式</b>：\\(V = \\frac{1}{3}Sh\\)</p>
        <p><b>椭球体体积</b>：\\(V = \\frac{4}{3}\\pi ab^2\\)</p>
        <p><b>球体体积</b>：\\(V = \\frac{3}{4}\\pi r^3\\)</p>

        <h2>常见函数的图像</h2>
        <table>
            <tr>
                <td>\\(a^x(a \\gt 1)\\)</td>
                <td><img src="../img/functions/pic1.png" width="300"></td>
            </tr>
            <tr>
                <td>\\(a^x(a \\lt 1)\\)</td>
                <td><img src="../img/functions/pic2.png" width="300"></td>
            </tr>
        </table>

        <h2>一些集合的表示方式</h2>
        <table>
            <tr>
                <td>复数集</td>
                <td>$$\\mathbb{C}$$</td>
            </tr>
            <tr>
                <td>实数集</td>
                <td>$$\\mathbb{R}$$</td>
            </tr>
            <tr>
                <td>整数集</td>
                <td>$$\\mathbb{Z}$$</td>
            </tr>
            <tr>
                <td>正整数集</td>
                <td>\\(\\mathbb{N}_+\\)或\\(\\mathbb{N}^*\\)</td>
            </tr>
        </table>

        <h2>微积分</h2>
        <b>微分</b>：
        <p>
            描述函数的变化速率
        </p>
        <b>积分</b>：
        <p>
            描述函数的累计结果
        </p>

        <b>平面角</b>：
        <p>
            以角的顶点为圆心作单位圆，平面角截单位圆的长度即为其弧度值。
        </p>
        <p class="note">这也是为什么平面角取值为\\([0, 2\\pi]\\)</p>
    
        <b>立体角</b>：
        <p>
            以角的顶点为球心作单位球，立体角截单位球的面积即为其大小。
        </p>
        <p class="note">因此立体角取值为\\([0, 4\\pi]\\)</p>
    
        <b>笛卡尔坐标系</b>
        <ul>
            <li>二维笛卡尔坐标系：平面直角坐标系</li>
            <li>三维笛卡尔坐标系：空间直角坐标系</li>
        </ul>

        <h2>矩阵</h2>
        <b>哈达玛积</b>
        <p>表示两个同纬度的矩阵对应元素相乘，\\(A\\odot B\\) <span lang="en">or</span> \\(A\\circ B\\)</p>
    
        
        <b>长度单位换算</b>
        $$1~m = 10~dm = 100~cm = 1\\times 10^3~mm = 1\\times 10^6~\\mu m = 1\\times 10^9 nm$$

        $$e = 2.71828$$
        $$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$

        <b>\\(a^n - b^n\\)因式分解公式</b>
        $$a^n - b^n = (a-b)(a^{n-1} + a^{n-2}b + \\cdots + ab^{n-2} + b^{n-1})$$

        <b>穿针引线法</b>
        <p>从\\(x\\)轴\\(+\\infty\\)处开始.</p>
        <p>若\\(x\\)的最高次项为正数，则从上方穿入；若\\(x\\)的最高次项为负数，则从下方穿入.</p>
        <p>按照每一项的幂数，奇穿偶不穿.</p>
        <p><b>扇形弧长公式</b>：\\(l = \\theta r\\)
        </p>

        <h3>进制</h3>
        <b>对于一个<span lang="en">n</span>位二进制数而言，其对应的十进制数的大小\\(x \\leq 2^n - 1\\)。</b>
        <p>即：\\(\\sum\\limits_{i=0}^{n-1}2^i = 2^n-1\\)</p>
        <p>证明如下：</p>
        $$
        \\begin{align}
        2^n &= 2\\times 2^{n-1}\\\\
        &= 2^{n-1} + 2^{n-1}\\\\
        &= 2^{n-1} + 2^{n-2} + 2^{n-2}\\\\
        &= 2^{n-1} + 2^{n-2} + 2^{n-3} +\\cdots + 2^1 + 2^0 + 2^0\\\\
        &= \\sum\\limits_{i=0}^n2^i + 1
        \\end{align}$$

        <b>对于任意一个非负整数\\(n\\)，集合\\(\\{2^i\\}\\)共有\\(n+1\\)个子集的和小于\\(n\\)</b>
        <p>证明如下：</p>
        <p>当\\(n = 0\\)时，有：</p>
        <ul>
            <li>\\(0: \\{\\}\\)</li>
        </ul>
        <p>结论适用；</p>
        <p>当\\(2^0\\leq n&lt;2^1\\)时，有：</p>
        <ul>
            <li>\\(1: \\{1\\}, \\{\\}\\)</li>
        </ul>
        <p>结论适用；</p>
        <p>当\\(2^1\\leq n&lt;2^2\\)时，有：</p>
        <ul>
            <li>\\(2: \\{1\\}, \\{2\\}, \\{\\}\\)</li>
            <li>\\(3: \\{1\\}, \\{2\\}, \\{1, 2\\}, \\{\\}\\)</li>
        </ul>
        <p>结论适用；</p>
        <p>当\\(2^2\\leq n&lt;2^3\\)时，由于\\(\\sum\\limits_{i=0}^{n-1}2^i\\leq 2^n -1\\)，故\\(\\{2^0, 2^1\\}\\)的全部\\(2^2\\)个子集均满足条件，仅需考虑带\\(\\{2^2\\}\\)的子集。</p>
        <p>已知带\\(\\{2^2\\}\\)的条件下，只需考虑\\(\\{2^0, 2^1\\}\\)对于\\(n - 2^2\\)满足条件的子集数量。</p>
        <p>由于\\(0\\leq n - 2^2&lt;2^2\\)，故此时共有\\(n - 2^2 + 1\\)个子集满足条件。</p>
        <p>综上，当\\(2^1\\leq n&lt;2^2\\)时，满足条件的子集数有\\(n - 2^2 + 1 + 2^2 = n-1\\)个。</p>
        <p>以此类推，结论适用于全体非负整数。</p>

        <h3>集合</h3>

        <b>一个长度为<span lang="en">n</span>的集合，共有\\(2^n\\)个子集</b>
        <p>证明如下：</p>
        <p>考虑一个长度为<span lang="en">n</span>的子集</p>
        $$\\{x_1, x_2, \\cdots, x_n\\}$$
        <ul>
            <li>含\\(x_n\\)的子集：\\(\\{x_1, x_2, \\cdots, x_{n-1}\\}\\)的子集加上\\(x_n\\)</li>
            <li>不含\\(x_n\\)的子集：\\(\\{x_1, x_2, \\cdots, x_{n-1}\\}\\)的子集</li>
        </ul>
        <p>即为\\(2^1\\times\\{x_1, x_2, \\cdots, x_{n-1}\\}\\)的子集数量</p>
        <p>以此类推，为\\(2^{n-1}\\times\\{x_1\\}\\)的子集数量</p>
        <p>对于\\(\\{x_1\\}\\)的子集，有：</p>
        <ul>
            <li>含\\(x_1\\)的子集：\\(\\{x_1\\}\\)</li>
            <li>不含\\(x_1\\)的子集：\\(\\{\\}\\)</li>
        </ul>
        <p>故一个长度为<span lang="en">n</span>的集合，共有\\(2^n\\)个子集，得证。</p>
    
        <h3>逻辑学</h3>
        <b>原子变元</b>
        <p>一个不可再分的、没有内部逻辑结构的命题或变元。只有<span lang="en">True</span>或<span lang="en">False</span>两种值。</p>
        <b>联结词</b>
        <p>\\(p\\rightarrow q\\)：如果\\(p\\)为真时，\\(q\\)一定为真。</p>
        <p>\\(p\\rightleftarrows q\\)：\\(p\\)和\\(q\\)的值相同时为真</p>

        <table lang="en">
            <tr>
                <td class="tbtitle">\\(p\\)</td>
                <td class="tbtitle">\\(q\\)</td>
                <td class="tbtitle">\\(p\\rightarrow q\\)</td>
                <td class="tbtitle">\\(p\\rightleftarrows q\\)</td>
            </tr>
            <tr>
                <td>0</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
            </tr>
        </table>` },
  "note/math/mathematic/planegeometry": { title: "高等数学", content: `<h1>平面几何</h1>

        <div class="PageCatalog">
            <ul>
                <li><a href="#Cycloid">摆线</a></li>
            </ul>
        </div>

        <h2 id="Cycloid">摆线</h2>
        $$\\begin{cases}
        x = a(t - \\sin t)\\\\
        y = a(1 - \\cos t)
        \\end{cases}$$

        <img src="./Img/PlaneGeometry/Cycloid.png" width="600">

        <b>特点</b>
        <ul>
            <li>经过原点\\((0,0)\\)</li>
            <li>周期\\(T = 2a\\pi\\)</li>
            <li>最大值为\\(2a\\)</li>
        </ul>


        <hr>

        <b>直线方程</b>
        $$Ax + By + C = 0$$

        <b>点坐标</b>
        $$(x,y)$$

        <b>点到直线的距离</b>
        $$d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}$$

        <b>圆的斜率为\\(k\\)的切线方程</b>
        $$y = kx + (y_0 - kx_0 \\pm r\\sqrt{k^2 + 1})$$

        <div class="Prove">
            $$y = kx + b$$
            $$r = \\frac{|kx_0 - y_0 + b|}{\\sqrt{k^2 + 1}}$$
            $$b = y_0 - kx_0 \\pm r\\sqrt{k^2 + 1}$$

        </div>` },
  "note/math/mathematic/proposition": { title: "高等数学", content: `<h1>命题</h1>

        $$A \\Rightarrow B$$
        <p>\\(A\\)是\\(B\\)的充分条件</p>
        
        $$A \\Leftarrow B$$
        <p>\\(A\\)是\\(B\\)的必要条件</p>


        <p>逆命题不一定成立.</p>
        <p>逆否命题一定成立.</p>` },
  "note/math/mathematic/rationalfunction": { title: "高等数学", content: `<h1>有理函数</h1>
        <div class="Card-Definition">
            <b>有理函数（有理分式）</b>
            <p>两个多项式的商</p>
            $$\\frac{P(x)}{Q(x)}$$
            <p>[注]假定分子多项式\\(P(x)\\)与分母多项式\\(Q(x)\\)间无公因式.</p>
            <b>真分式</b>
            <p>分子多项式次数小于分母多项式次数的有理函数.</p>
            <b>假分式</b>
            <p>分子多项式次数大于分母多项式次数的有理函数.</p>
        </div>

        <p>利用多项式的除法，总可以将一个假分式化成一个多项式与真分式之和的形式.</p>

        <p>对于真分式\\(\\frac{P(x)}{Q(x)}\\)，若分母可分解为两个没有公因式的多项式的乘积</p>
        $$Q(x) = Q_1(x)Q_2(x)$$
        <p>那么可将真分式分解为两个真分式之和</p>
        $$\\frac{P(x)}{Q(x)} = \\frac{P_1(x)}{Q_1(x)} + \\frac{P_2(x)}{Q_2(x)}$$
        <p>\\(P(x)\\)可以用待定系数法求解.</p>

        <div class="Card-Method">
            <h2>待定系数法分解真分式</h2>
            $$Q(x) = Q_1(x)Q_2(x)\\cdots Q_n(x)$$
            $$\\frac{P(x)}{Q(x)} = \\frac{P_1(x)}{Q_1(x)} + \\frac{P_2(x)}{Q_2(x)} + \\cdots + \\frac{P_n(x)}{Q_n(x)}$$
            <p>假设\\(Q_i(x)\\)的最高次数为\\(k\\).</p>
            <p>设\\(P_i(x) = p_{i1}x^{(k-1)} + p_{i2}x^{k-2} + \\cdots + p_{i,k-1}x + p_{ik}\\)</p>
            <p>将\\(\\frac{P_1(x)}{Q_1(x)} + \\frac{P_2(x)}{Q_2(x)} + \\cdots + \\frac{P_n(x)}{Q_n(x)}\\)通分，其分子应等于\\(P(x)\\)，由此关系解得系数\\(p\\).</p>
        </div>` },
  "note/math/mathematic/sequence": { title: "高等数学", content: `<h1>数列</h1>

        <b>等差数列前\\(n\\)项和</b>
        $$S_n = \\frac{n(a_1 + a_n)}{2}$$

        <b>等比数列</b>
        $$a_n = a_1q^{n-1}$$

        <b>等比数列前\\(n\\)项和</b>
        $$S_n = \\begin{cases}
        na_1, q=1\\\\
        a_1\\frac{1-q^n}{1-q},q\\neq 1
        \\end{cases}$$` },
  "note/math/mathematic/taylorformula": { title: "高等数学", content: `<h1>泰勒公式</h1>

        <b>泰勒级数</b>
        $$\\sum\\limits_{n=0}^\\infty \\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           $$

        <h2>带有皮亚诺余项的\\(n\\)阶泰勒公式</h2>
        <p>\\(x\\rightarrow x_0\\)时：</p>
        $$f(x) = f(x_0) + \\frac{f'(x_0)}{1!}(x-x_0) + \\frac{f''(x_0)}{2!}(x-x_0)^2 + \\cdots + \\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n + o((x^{x-x_0})^n)$$
        其中，\\(o((x-x_0)^n)\\)称为皮亚诺余项.
        <p>[注]按\\((x-x_0)\\)的幂展开\\(f(x)\\)不一定有皮亚诺余项.</p>


        <b>麦克劳林级数</b>
        $$\\sum\\limits_{n=0}^\\infty \\frac{f^{(n)}(0)}{n!}x^n$$

        <h2>带有阶皮亚诺余项的\\(n\\)阶麦克劳林展开式</h2>
        <p>\\(x\\rightarrow 0\\)时：</p>
        $$f(x) = f(0) + \\frac{f'(0)}{1!}x + \\frac{f''(0)}{2!}x^2 + \\cdots + \\frac{f^{(n)}(0)}{n!}x^n + o(x^n)$$
        <p></p>
        <b>常用函数的麦克劳林公式及麦克劳林展开式</b>
        $$\\frac{1}{1-x} = 1 + x + x^2 + \\cdots + x^n + o(x^n) = \\sum\\limits_{n=0}^\\infty x^n (-1\\lt x\\lt 1)$$
        $$\\frac{1}{1+x} = 1 - x + x^2 + \\cdots + (-1)^nx^n + o(x^n) = \\sum\\limits_{n=0}^\\infty (-1)^nx^n (-1\\lt x\\lt 1)$$
        $$e^x = 1 + x + \\frac{x^2}{2} + \\cdots + \\frac{x^n}{n!} + o(x^n) = \\sum\\limits_{n=0}^\\infty\\frac{x^n}{n!}(-\\infty \\lt x\\lt +\\infty)$$
        $$\\ln(1 + x) = x -\\frac{x^2}{2} + \\frac{x^3}{3} + \\cdots + (-1)^{n-1}\\frac{x^n}{n} + o(x^n) = \\sum\\limits_{n=1}^\\infty(-1)^{n-1}\\frac{x^n}{n} (-1\\lt x\\leq 1)$$
        $$(1 + x)^\\alpha = 1 + \\alpha x + \\frac{\\alpha(\\alpha-1)}{2!}x^2 + \\cdots + \\frac{\\alpha(\\alpha-1)\\cdots(\\alpha-n+1)}{n!}x^n+o(x^n) = 1 + \\sum\\limits_{n=1}^\\infty \\frac{\\alpha(\\alpha-1)\\cdots(\\alpha-n+1)}{n!}x^n (-1\\lt x \\lt 1)$$
        $$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} + \\cdots + (-1)^n\\frac{x^{2n+1}}{(2n+1)!} + o(x^{2n+1}) = \\sum\\limits_{n=0}^\\infty (-1)^n\\frac{x^{2n+1}}{(2n+1)!}(-\\infty \\lt x \\lt +\\infty)$$
        $$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} + \\cdots + (-1)^n\\frac{x^{2n}}{(2n)!} + o(x^{2n}) = \\sum\\limits_{n=0}^\\infty (-1)^n\\frac{x^{2n}}{(2n)!}(-\\infty\\lt x \\lt +\\infty)$$` },
  "note/math/mathematic/tips": { title: "高等数学", content: `` },
  "note/math/probability/catalog": { title: "概率论", content: `<h1>概率论</h1>
        <h2>目录</h2>

        <a href="/note/math/probability/chapter1">第一章 概率事件及其概率</a>
        <br>
        <a href="/note/math/probability/chapter2">第二章 随机变量及其分布</a>
        <br>
        <a href="/note/math/probability/chapter3">第三章 多维随机变量及其分布</a>
        <br>
        <a href="/note/math/probability/temp">第四章 随机变量的数字特征</a>
        <br>
        <a href="/note/math/probability/chapter6">第六章 数理统计基础</a>
        <br>
        <a href="/note/math/probability/chapter7">第七章 参数估计</a>
        <br>
        <a href="/note/math/probability/chapter8">第八章 假设检验</a>
        <br>
        <a href="/note/math/probability/distribution">分布模型</a>` },
  "note/math/probability/chapter1": { title: "概率论", content: `<h1>第一章 随机事件及其概率</h1>

        <div class="PageCatalog">
            <ul>
                <li><a href="#TotalProbabilityFormula">全概率公式</a></li>
                <li><a href="#BayesianFormula">贝叶斯公式</a></li>
            </ul>
        </div>

        <h2>第一节 随机事件</h2>
        <b>随机试验的特点</b>
        <p>可重复性：试验可以在相同条件下重复进行.</p>
        <p>可观测性：每次试验结果具有多种可能性，并能事先明确试验的所有可能结果.</p>
        <p>随机性（不确定性）：试验前不能确定哪一个结果会出现.</p>

        <div class="Card-Definition">
            <b>随机试验（\\(E\\)）</b><br><br>
            <b>样本点（\\(\\omega\\)）</b>
            <p>随机试验\\(E\\)的每一种可能结果.</p>
            <b>样本空间\\(\\Omega, S\\)</b>
            <p>随机试验\\(E\\)所有样本点的集合.</p>
            <b>事件（随机事件）</b>
            <p>样本空间的子集，通常记为\\(A,B,C,\\cdots\\).</p>
            <p>事件\\(A\\)发生，即属于该事件的某一个样本点在随机事件中出现.</p>
            <b>基本事件</b>
            <p>由一个样本点组成的事件.</p>
        </div>

        <div class="Card-Definition">
            <table>
                <tr>
                    <td colspan="4">事件间的关系</td>
                </tr>
                <tr>
                    <td>名称</td>
                    <td>定义</td>
                    <td>符号</td>
                    <td>含义</td>
                </tr>
                <tr>
                    <td><b>子事件</b></td>
                    <td class="tbtext">若事件\\(A\\)的样本也属于事件\\(B\\)，则称\\(A\\)为\\(B\\)的子事件，也称事件\\(B\\)包含事件\\(A\\)或事件\\(A\\)包含于事件\\(B\\).</td>
                    <td>$$A \\subset B$$</td>
                    <td class="tbtext">事件\\(A\\)发生必然导致事件\\(B\\)发生.</td>
                </tr>
                <tr>
                    <td><b>相等事件</b></td>
                    <td class="tbtext">若事件\\(A\\)与事件\\(B\\)互为子事件，则称事件\\(A\\)与事件\\(B\\)相等.</td>
                    <td>$$A = B$$</td>
                    <td></td>
                </tr>
                <tr>
                    <td><b>和事件</b></td>
                    <td class="tbtext">事件\\(A\\)和\\(B\\)的全部样本点组成的集合称为事件\\(A\\)和\\(B\\)的和事件.</td>
                    <td>$$A \\cup B = \\{\\omega | \\omega \\in A~or~\\omega \\in B\\}$$</td>
                    <td class="tbtext">事件\\(A\\cup B\\)表示事件\\(A\\)和\\(B\\)至少有一个发生.</td>
                </tr>
                <tr>
                    <td><b>积事件</b></td>
                    <td class="tbtext">既属于事件\\(A\\)又属于事件\\(B\\)的样本点组成的集合称为事件\\(A\\)与事件\\(B\\)的积事件.</td>
                    <td>$$AB = A\\cap B = \\{\\omega | \\omega \\in A~and~\\omega \\in B\\}$$</td>
                    <td class="tbtext">事件\\(AB\\)表示事件\\(A\\)和\\(B\\)同时发生.</td>
                </tr>
                <tr>
                    <td><b>互斥事件<br>（互不相容事件）</b></td>
                    <td class="tbtext">若事件\\(A\\)与事件\\(B\\)没有公共的样本点，即\\(AB = \\emptyset\\)，称事件\\(A\\)与\\(B\\)为互斥事件.</td>
                    <td></td>
                    <td class="tbtext">事件\\(A\\)与\\(B\\)不可能同时发生.</td>
                </tr>
                <tr>
                    <td><b>对立事件<br>（逆事件）</b></td>
                    <td class="tbtext">若\\(AB = \\emptyset\\)且\\(A\\cup B = \\Omega\\)，称事件\\(A,B\\)互为对立事件.</td>
                    <td>\\(A\\)的对立事件记为\\(\\bar{A}\\)</td>
                    <td></td>
                </tr>
                <tr>
                    <td><b>差事件</b></td>
                    <td class="tbtext">属于事件\\(A\\)而不属于事件\\(B\\)的样本点组成的集合称为事件\\(A\\)与事件\\(B\\)的差事件.</td>
                    <td>$$A - B = A\\bar{B} = A - AB = \\{\\omega | \\omega \\in A~and~\\omega \\notin B\\}$$</td>
                    <td class="tbtext">事件\\(A\\)发生而事件\\(B\\)不发生.</td>
                </tr>
            </table>
        </div>

        <div class="Card-Property">
           
            <table>
                <tr>
                    <td colspan="2"><b>事件的运算规律</b></td>
                </tr>
                <tr>
                    <td><b>交换律</b></td>
                    <td>$$A\\cup B = B\\cup A, AB = BA$$</td>
                </tr>
                <tr>
                    <td><b>结合律</b></td>
                    <td>$$(A\\cup B)\\cup C = A\\cup (B\\cup C), (AB)C = A(BC)$$</td>
                </tr>
                <tr>
                    <td><b>分配律</b></td>
                    <td>$$(A\\cup B)C = AC\\cup BC, (AB)\\cup C = (A\\cup C)(B\\cup C)$$</td>
                </tr>
                <tr>
                    <td><b>德摩根定律（对偶律）</b></td>
                    <td>
                        $$\\overline{A\\cup B} = \\bar{A} \\cap \\bar{B}$$
                        $$\\overline{A\\cap B} = \\bar{A} \\cup \\bar{B}$$
                        $$\\overline{\\mathop{\\cup}\\limits_{i=1}^{n} A_i} = \\mathop{\\cap}\\limits_{i=1}^n \\bar{A_i}$$
                        $$\\overline{\\mathop{\\cap}\\limits_{i=1}^{n} A_i} = \\mathop{\\cup}\\limits_{i=1}^n \\bar{A_i}$$
                    </td>
                </tr>
                <tr>
                    <td><b>吸收率</b></td>
                    <td>\\(A \\subset B \\Rightarrow A\\cup B = B, AB = A\\)</td>
                </tr>
            </table>
        </div>

        <h2>第二节 随机事件的概率</h2>
        <h3>古典概型</h3>
        <div class="Card-Definition">
            <b>古典概型</b>
            <p>样本空间中的基本事件个数有限且具有等可能性的试验模型.</p>
        </div>

        <div class="Card-Definition">
            <b>古典概率</b>
            <p>设随机试验\\(E\\)的样本空间\\(\\Omega\\)由\\(n\\)个样本点组成，每个样本等可能发生.</p>
            <p>事件\\(A\\)由\\(m\\)个样本点组成，事件\\(A\\)发生的概率即为古典概率，记作\\(P(A)\\).</p>
            $$P(A) = \\frac{m}{n}$$
        </div>

        <div class="Card-Formula">
            <h2>排列组合公式</h2>
            <b>排列公式</b>
            <p>从\\(n\\)个不同元素中任取\\(k(1\\leq k \\leq n)\\)个的不同排列总数.</p>
            $$A_n^k = \\frac{n!}{(n-k)!} = n(n-1)\\cdots(n-k+1)$$
            <p>\\(k=n\\)时称为全排列.</p>
            <b>组合公式</b>
            <p>从\\(n\\)个不同元素中任取\\(k(1\\leq k \\leq n)\\)个的不同组合总数.</p>
            $$C_n^k = \\frac{A_n^k}{A_k^k} = \\frac{n!}{k!(n-k)!} = \\frac{n(n-1)\\cdots(n-k+1)}{k(k-1)\\cdots 1}$$
        </div>
        
        <div class="Card-Formula">
            <b>超几何分布概率公式</b>
            <p>设有\\(N\\)件产品，其中\\(D\\)件次品，从中任取\\(n\\)件，其中恰有\\(k(k\\leq D)\\)件次品的概率.</p>
            $$p = \\frac{C_D^k C_{N-D}^{n-k}}{C_N^n}$$
            <div class="Prove">
                <p>从\\(N\\)件产品中取出\\(n\\)件，所有可能的取法有\\(C_N^n\\)种.</p>
                <p>恰有\\(k\\)件次品，即从\\(D\\)件次品中取出\\(k\\)件，从\\(N-D\\)件合格品中取出\\(n-k\\)件，所有可能的取法有\\(C_D^kC_{N-D}^{n-k}\\)种.</p>
            </div>
        </div>

        <h3>几何概型</h3>
        <div class="Card-Definition">
            <b>几何概型</b>
            <p>若一个随机试验相当于从直线、平面或空间的某区域\\(\\Omega\\)内任取一点，而所取的点落在\\(\\Omega\\)中任意两个度量（长度、面积、体积）相等的子区域内是等可能的，则称此试验模型为几何概型.</p>
        </div>
        <div class="Card-Definition">
            <b>几何概率</b>
            <p>几何概型中，对任意有度量的子区域\\(A \\subset \\Omega\\)，定义事件“\\(\\Omega\\)内任取一点落在\\(A\\)上的概率”为几何概率，记为\\(P(A)\\).</p>
            $$P(A) = \\frac{A}{\\Omega}$$
        </div>


        <div class="Card-Formula">
            $$P(\\bar{A}) = 1 - P(A)$$
            $$A = \\emptyset \\Rightarrow P(A) = 0$$
            $$P(A) = 0 \\nRightarrow A = \\emptyset$$
            $$P(AB) \\leq \\min\\{P(A), P(B)\\}$$
            <b>加法公式</b>
            $$P(A\\cup B) = P(A) + P(B) - P(AB)$$
            $$P(A\\cup B\\cup C) = P(A) + P(B) + P(C) - P(AB) - P(AC) - P(BC) + P(ABC)$$
            <b>减法公式</b>
            $$P(A - B) = P(A\\bar{B}) = P(A) - P(AB)$$
        </div>


        <h2>第三节 条件概率</h2>
        <div class="Card-Definition">
            <b>条件概率</b>
            <p>在事件\\(A\\)发生的条件下，事件\\(B\\)发生的概率.</p>
            $$P(B|A) = \\frac{P(AB)}{P(A)}$$
            $$P(\\bar{B}|A) = 1 - P(B|A)$$
        </div>

        <div class="Card-Definition">
            <b>完备事件组</b>
            <p>设\\(\\Omega\\)为某一随机试验\\(E\\)的样本空间，\\(A_1, A_2, \\cdots, A_n\\)为\\(E\\)的一组事件，且满足：</p>
            <ul>
                <li>\\(A_iA_j = \\emptyset,~i,j=1,2,\\cdots,n,~i\\neq j\\)</li>
                <li>\\(A_1\\cup A_2\\cup\\cdots\\cup A_n = \\Omega\\)</li>
            </ul>
            <p>称\\(A_1, A_2, \\cdots, A_n\\)为\\(\\Omega\\)的一个划分，或称为\\(\\Omega\\)的一个完备事件组.</p>
        </div>

        <div class="Card-Definition" id="TotalProbabilityFormula">
            <b>全概率公式</b>
            <p>设\\(\\Omega\\)为某随机试验\\(E\\)的样本空间，\\(B\\)为\\(E\\)内的任意事件，\\(A_1, A_2, \\cdots, A_n\\)为\\(\\Omega\\)的一个完备事件组，且\\(P(A_i) \\gt 0,~i=1,2,\\cdots,n\\)，则：</p>
            <div class="Formula">
                $$P(B) = \\mathop{\\sum}\\limits_{i=1}^n P(A_i)P(B|A_i)$$
                <div class="Derivation">
                    $$B = A_1B \\cup A_2B \\cup \\cdots \\cup A_nB$$
                    $$\\begin{align}
                    P(B) &= P(A_1B) + P(A_2B) + \\cdots + P(A_nB)\\\\
                    &= \\mathop{\\sum}\\limits_{i=1}^n P(A_iB)\\\\
                    &= \\mathop{\\sum}\\limits_{i=1}^n P(A_i)P(B|A_i)
                    \\end{align}$$
                </div>
            </div>
            
            <b>理解</b>
            <p>在两步模型中，求第二步情况\\(B\\)发生的概率，对第一步不同情况\\(A_i\\)下第二步\\(B\\)发生的概率进行加权求和.</p>
        </div>

        <div class="Card-Definition" id="BayesianFormula">
            <b>贝叶斯公式</b>
            <p>设\\(\\Omega\\)为某随机试验\\(E\\)的样本空间，\\(B\\)为\\(E\\)内的任意事件，\\(P(B)\\gt0\\)，\\(A_1, A_2, \\cdots, A_n\\)为\\(\\Omega\\)的一个完备事件组，且\\(P(A_i) \\gt 0,~i=1,2,\\cdots,n\\)，则在事件\\(A\\)发生的条件下，事件\\(B\\)发生的概率为：</p>
            <div class="Formula">
                $$P(A_i|B) = \\frac{P(A_i)P(B|A_i)}{\\sum\\limits_{j=1}^n P(A_j)P(B|A_j)}$$
                <div class="Derivation">
                    $$\\begin{align}
                    P(A_i|B) &= \\frac{P(A_iB)}{P(B)}\\\\
                             &= \\frac{P(A_i)P(B|A_i)}{\\sum\\limits_{j=1}^n P(A_j)P(B|A_j)}
                    \\end{align}$$
                </div>
            </div>
            <b>理解</b>
            <p>在两步模型中，第二步情况\\(B\\)发生的条件下，第一步情况\\(A_i\\)发生的概率.</p>
        </div>   


        <h2>第四节 事件的独立性与伯努利检验</h2>
        <div class="Card-Definition">
            <b>事件的独立性</b>
            <p>若事件\\(A, B\\)满足</p>
            $$P(AB) = P(A)P(B)$$
            <p>则称事件\\(A\\)与事件\\(B\\)相互独立，简称为\\(A,B\\)独立.</p>
        </div>

        <div class="Card-Property">
            <div class="Formula">
                <p>\\(A,B\\)独立\\(\\Rightarrow\\)事件\\(A,\\bar{B}\\)，事件\\(\\bar{A}, B\\)，事件\\(\\bar{A}, \\bar{B}\\)独立.</p>
                <div class="Derivation">
                    <p>\\(A,B\\)独立\\(\\Rightarrow P(AB) = P(A)P(B)\\)</p>
                    $$\\begin{align}
                    P(A\\bar{B}) &= P(A-AB)\\\\
                                &= P(A) - P(A)P(B)\\\\
                                &= P(A)[1 - P(B)]\\\\
                                &= P(A)P(\\bar{B})
                    \\end{align}$$
                    $$\\begin{align}
                    P(\\bar{A}B) &= P(B-AB)\\\\
                                &= P(B) - P(A)P(B)\\\\
                                &= P(B)[1 - P(A)]\\\\
                                &= P(\\bar{A})P(B)
                    \\end{align}$$
                    $$\\begin{align}
                    P(\\bar{A}\\bar{B}) &= P(\\overline{A\\cup B})\\\\
                                      &= 1 - P(A\\cup B)\\\\
                                      &= 1 - [P(A) + P(B) - P(A)P(B)]\\\\
                                      &= 1 - P(A) - P(B)[1 - P(A)]\\\\
                                      &= P(\\bar{A}) - P(B)P(\\bar{A})\\\\
                                      &= P(\\bar{A})P(\\bar{B})
                    \\end{align}$$
                </div>
            </div>
            <div class="Formula">
                <p>必然事件\\(\\Omega\\)与任何事件\\(A\\)独立，不可能事件\\(\\emptyset\\)与任何事件\\(A\\)独立.</p>
                <div class="Derivation">
                    $$P(\\Omega) = 1, P(\\emptyset) = 0$$
                    $$P(A\\Omega) = P(A) = P(A)P(\\Omega)$$
                    $$P(A\\emptyset) = P(\\emptyset) = P(A)P(\\emptyset)$$
                </div>
            </div>
            <div class="Formula">
                <p>\\(P(A)\\gt 0, P(B)\\gt 0 \\Rightarrow A,B\\)互斥则不独立，独立则不互斥.</p>
                <div class="Derivation">
                    <p>\\(A,B\\)互斥\\(\\Rightarrow P(AB) = P(\\emptyset) = 0\\).</p>
                    <p>\\(A,B\\)独立\\(\\Rightarrow P(AB) = P(A)P(B) \\gt 0\\).</p>
                </div>
            </div>
        </div>

        <div class="Card-Definition">
            <b>多个事件的独立性</b>
            <p>若事件\\(A_1, A_2, A_3\\)满足</p>
            $$P(A_1A_2) = P(A_1)P(A_2)$$
            $$P(A_2A_3) = P(A_2)P(A_3)$$
            $$P(A_1A_3) = P(A_1)P(A_3)$$
            <p>则称事件\\(A_1,A_2,A_3\\)<b>两两相互独立</b>.</p>
            <p>若在此基础上还满足</p>
            $$P(A_1A_2A_3) = P(A_1)P(A_2)P(A_3)$$
            <p>则称事件\\(A_1A_2A_3\\)<b>相互独立</b>.</p>
        </div>
        <p>相互独立的事件一定是两两相互独立的，两两相互独立的事件不一定相互独立.</p>
        <p>若事件\\(A_1,A_2,\\cdots,A_n\\)相互独立，则其中任意\\(m(1\\leq m\\leq n)\\)个事件也相互独立.</p>
        <p>若事件\\(A_1,A_2,\\cdots,A_n\\)相互独立，则将其中任意\\(m\\)个事件换成它们的对立事件，所得的\\(n\\)个事件也相互独立.</p>

        <div class="Card-Definition">
            <b>伯努利试验</b>
            <p>在试验\\(E\\)中，可能的结果只有两个，记为事件\\(A\\)发生与事件\\(A\\)不发生.</p>
            <b>伯努利概型（\\(n\\)重伯努利试验）</b>
            <p>在相同条件下独立重复\\(n\\)次伯努利试验的模型.</p>

            <b>伯努利定理</b>
            <p>在一次伯努利试验中，事件\\(A\\)发生的概率为\\(p(0\\lt p \\lt 1)\\)，则在\\(n\\)重伯努利试验中，事件\\(A\\)恰好发生\\(k\\)次的概率为\\(P_n(k) = C_n^kp^k(1-p)^{n-k}(k=0,1,2,\\cdots,n)\\).</p>
        </div>


        <a class="BackToTop" href="#PageHead">Top</a>` },
  "note/math/probability/chapter2": { title: "概率论", content: `<h1>第二章 随机变量及其分布</h1>
        <h2>第一节 随机变量</h2>
        <div class="Card-Definition">
            <b>随机变量</b>
            <p>设随机试验\\(E\\)的样本空间为\\(\\Omega\\)，若对于每一个\\(\\omega \\in \\Omega\\)，都有一个实数\\(X(\\omega)\\)与之对应，则称\\(X(\\omega)\\)为随机变量，简记为\\(X\\).</p>
            <p>随机变量通常用大写字母\\(X,Y,Z,\\cdots\\)表示.</p>
        </div>


        <h2>第二节 离散型随机变量及其概率分布</h2>
        <h3>一、离散型随机变量及其概率分布</h3>
        <div class="Card-Definition">
            <b>离散型随机变量</b>
            <p>可能的取值只有有限个或可列无限多个的随机变量\\(X\\).</p>
        </div>
        <div class="Card-Definition">
            离散型随机变量\\(X\\)的<b>概率分布（概率函数、分布律、分布列）</b>
            <p>\\(X\\)取所有可能值的概率，即\\(P\\{X = x_k\\} = p_k,~k =1,2,\\cdots\\)</p>
            <p>也可以用表格表示</p>
            <img src="Img/DistributionTable.png" width="500">
        </div>

        <div class="Card-Property">
            <b>概率的性质</b>
            $$P\\{X = x_k\\} = p_k \\geq 0$$
            $$\\sum\\limits_{k=1}^\\infty P\\{X = x_k\\} = \\sum\\limits_{k=1}^\\infty p_k = 1$$
        </div>

        <p><b>二项分布的泊松近似</b>：当\\(n\\rightarrow \\infty\\)而\\(p\\rightarrow 0\\)时，\\(b(n,p)\\)可以近似看作\\(P(np)\\)</p>
        
        <b>帕斯卡分布</b>
        $$P\\{x = k\\} = C_{k-1}^np^n(1-p)^{k-n}$$



        <h2>第三节 随机变量的分布函数</h2>
        <h3>一、随机变量的分布函数</h3>

        <div class="Card-Definition">
            <b>随机变量\\(X\\)的分布函数</b>
            $$F(x) = P\\{X \\leq x\\}$$
            <p>对于任意实数\\(x_1 \\lt x_2\\)</p>
            $$P\\{x_1 \\lt X \\leq x_2\\} = P\\{X \\leq x_2\\} - P\\{X \\leq x_1\\} = F(x_2) - F(x_1)$$
        </div>
        
        <div class="Card-Property">
            <b>分布函数的性质</b>
            <ul>
                <li>非负性：\\(0\\leq F(x)\\leq 1,~x\\in (-\\infty, +\\infty)\\)</li>
                <li>单调不减性：当\\(x_1 \\lt x_2\\)时，有\\(F(x_1)\\leq F(x_2)\\)</li>
                <li>规范性：\\(F(+\\infty) = \\mathop{lim}\\limits_{x\\rightarrow +\\infty}F(x)=1\\)，\\(F(-\\infty) = \\mathop{lim}\\limits_{x\\rightarrow -\\infty}F(x)=0\\)</li>
                <li>对于连续型随机变量：\\(F(x) = F(x\\pm 0)\\)</li>
            </ul>
        </div>

        <h2>第四节 连续型随机变量及其概率密度</h2>
        <div class="Card-Definition">
            <b>连续型随机变量</b>
            <p>在连续区间上取值的随机变量\\(X\\).</p>

            <b>连续型随机变量的概率密度</b>
            <p>若对随机变量\\(X\\)的分布函数\\(F(x)\\)存在非负的可积函数\\(f(x)\\)，使得对于任意实数\\(x\\)有：</p>
            $$F(x) = \\int^x_{-\\infty}f(t)dt$$
            <p>则\\(X\\)为连续型随机变量.</p>
            <p>称\\(f(x)\\)为\\(X\\)的概率密度函数，简称为概率密度或密度函数.</p>
        
            <b>几何意义</b>
            <p>\\(F(x)\\)为\\((-\\infty, x)\\)区间上\\(f(x)\\)围成的面积.</p>
        </div>

        <div class="Card-Property">
            <b>概率密度的性质</b>
            <ul>
                <li>非负性：\\(f(x) \\geq 0, x\\in \\mathbb{R}\\)</li>
                <li>规范性：\\(\\int_{-\\infty}^{+\\infty}f(x)\\mathrm{d}x = 1\\)</li>
            </ul>
            $$f(x)为概率密度 \\Leftrightarrow 
            \\begin{cases}
            f(x) \\geq 0, x \\in \\mathbb{R}\\\\
            \\int_{-\\infty}^{+\\infty}f(x)dx = 1
            \\end{cases}$$
        </div>

        <div class="Card-Property">
            <p>设\\(X_1, X_2\\)为两个连续型随机变量，其密度函数分别为\\(f_1(x), f_2(x)\\)，分布函数为\\(F_1(x), F_2(x)\\)，有以下结论成立：</p>

            <div class="Formula">
                <p>\\(f_1(x)f_2(x)\\)不一定为某随机变量的密度函数.</p>
                <div class="Derivation">
                    <p>反例：</p>
                    $$X_1\\sim e(2) \\Rightarrow f_1(x) = \\begin{cases}2e^{-2x}, x\\gt 0\\\\ 0, others\\end{cases}$$
                    $$X_1\\sim e(3) \\Rightarrow f_1(x) = \\begin{cases}3e^{-3x}, x\\gt 0\\\\ 0, others\\end{cases}$$
                    $$\\int_{-\\infty}^{+\\infty}f_1(x)f_2(x)\\mathrm{d}x = \\int_0^{+\\infty}6e^{-5x}\\mathrm{d}x = -\\frac{6}{5}e^{-5x}|_0^{+\\infty} = \\frac{6}{5} \\gt 1$$
                    <p>故\\(f_1(x)f_2(x)\\)不为某随机变量的密度函数.</p>
                </div>
            </div>

            <div class="Formula">
                <p>\\(f_1(x)F_2(x) + f_2(x)F_1(x)\\)一定为某随机变量的密度函数.</p>
                <div class="Derivation">
                    $$f_1(x)\\geq 0, f_2(x)\\geq 0, F_1(x)\\geq 0, F_2(x)\\geq 0 \\Rightarrow f_1(x)F_2(x) + f_2(x)F_1(x) \\geq 0$$
                    $$\\int_{-\\infty}^{+\\infty}f_1(x)F_2(x) + f_2(x)F_1(x)\\mathrm{d}x = [F_1(x)F_2(x)]|_{-\\infty}^{+\\infty} = 1$$
                    <p>故\\(f_1(x)F_2(x) + f_2(x)F_1(x)\\)为某随机变量的密度函数.</p>
                </div>
            </div>
        </div>

        <h2>第五节 随机变量函数的分布</h2>
        <h3>连续型随机变量函数分布</h3>
        <p>设随机变量\\(X\\)具有概率密度\\(f_X(x), -\\infty \\lt x \\lt +\\infty\\)，且\\(g(x)\\)处处可导且单调，则\\(Y = g(X)\\)的概率密度为
            $$f_Y(y) = 
            \\begin{align}
            \\begin{cases}
            f_X[h(y)]|h'(y)|,~&\\alpha \\lt y \\lt \\beta\\\\
            0,~&others
            \\end{cases}
            \\end{align}$$
            其中，\\(h(y)\\)为\\(g(x)\\)的反函数，\\(\\alpha = min\\{g(-\\infty), g(+\\infty)\\}, \\beta = max\\{g(-\\infty), g(+\\infty)\\}\\)
        </p>` },
  "note/math/probability/chapter3": { title: "概率论", content: `</p>
        <p><b>边缘分布函数</b>：
        $$F_X(x) = F(x, +\\infty)$$
        $$F_Y(y) = F(+\\infty, y)$$
        </p>


        
        <h3>二、二维离散型随机变量及其概率分布</h3>
        <h3>三、二维连续型随机变量及其分布函数</h3>
        <p><b>边缘概率密度</b>：
        $$f_X(x) = \\int_{-\\infty}^{+\\infty}f(x,y)dy$$
        $$f_Y(x) = \\int_{-\\infty}^{+\\infty}f(x,y)dx$$</p>
        <h3>四、两个重要的连续型随机变量及其分布</h3>
        <h4>1.二维均匀分布</h4>
        <p>设\\(G\\)是平面上的有界区域，其面积为\\(A\\)，若二维随机变量\\((X,Y)\\)具有概率密度：
            $$ f(x,y) = \\begin{cases}\\frac1A, ~(x,y)\\in G\\\\ 0, ~others\\end{cases} $$
            则称二维随机变量\\((X,Y)\\)在\\(G\\)上的服从均匀分布，记为\\((X,Y)\\sim U(G)\\)
        </p>

        <h2>第二节 随机变量的独立性</h2>

        <h2>多维随机变量函数的分布</h2>
        <h3>连续型随机变量函数的分布</h3>
        <p>
            设\\(X\\)与\\(Y\\)为相互独立的连续型随机变量
            <br>
            \\(M = max\\{X,Y\\}\\)的分布：
            \\(\\begin{align}
            F_M(z) 
            &= P\\{M \\leq z\\}\\\\ 
            &= P\\{X\\leq z, Y\\leq z\\}\\\\
            &= P\\{X\\leq z\\}P\\{Y\\leq z\\}\\\\
            &= F_X(z)F_Y(z)
            \\end{align}
            \\)
            \\(\\begin{align}
            f_M(z)
            &= F_M'(z)\\\\
            &= f_X(z)F_Y(z) + F_X(z)f_Y(z)\\\\
            \\end{align}
            \\)
            <br><br>
            \\(N = min\\{X,Y\\}\\)的分布：
            \\(\\begin{align}
            F_N(z)
            &= P\\{N \\leq z\\}\\\\
            &= 1 - P\\{N > z\\}\\\\
            &= 1 - P\\{X>z\\}P\\{Y>z\\}\\\\
            &= 1 - [1-F_X(z)][1-F_Y(z)]
            \\end{align}    
            \\)
            \\(\\begin{align}
            f_N(z)
            &= F_N'(z)\\\\
            &= f_X(z)[1-F_Y(z)]+f_Y(z)[1-F_X(z)]
            \\end{align}
            \\)
        </p>` },
  "note/math/probability/chapter4": { title: "概率论", content: `
        <h1>第四章 随机变量的数字特征</h1>
        <h2>第一节 数学期望</h2>
        <h3>一、随机变量的数学期望</h3>
        <p><b>泊松分布</b>：\\(x\\sim P(\\lambda)\\)
        $$P\\{X = k\\} = \\frac{\\lambda^ke^{-\\lambda}}{k!}, k=0,1,\\cdots$$
        $$\\begin{align}
        E(X) &= \\mathop{\\sum}\\limits_{k=0}^\\infty k\\cdot\\frac{\\lambda^ke^{-\\lambda}}{k!}\\\\
        &= \\lambda e^{-\\lambda}\\mathop{\\sum}\\limits_{k=1}^\\infty\\frac{\\lambda^{k-1}}{(k-1)!}\\\\
        &= \\lambda e^{-\\lambda} e^{\\lambda}\\\\
        &= \\lambda
        \\end{align}$$

        </p>

        <hr>
        <p><b>连续型随机变量</b>：</p>
        <p></p>

        <p><b>均匀分布</b>：\\(x\\sim U(a,b)\\)
        $$f(x) = \\begin{align}\\begin{cases}
        \\frac{1}{b-a}, ~& a\\leq x\\leq b\\\\
        0,~&others
        \\end{cases}\\end{align}$$
        $$\\begin{align}
        E(X) &= \\int_{-\\infty}^{+\\infty}xf(x)dx\\\\
        &= \\int_a^b\\frac{x}{b-a}dx\\\\
        &= \\frac{a+b}{2}
        \\end{align}$$
        </p>



        <h2>第二节 方差</h2>
        <h3>一、方差的概念</h3>
        <p>

        <div class="Card-Formula">
            <b>方差</b>
            $$D(x) = E\\{[x - E(x)]^2\\} = E(x^2) - E^2(x)$$
        </div>

        <div class="Card-Formula">
            <b>标准差（均方差）</b>
            $$\\sigma(x) = \\sqrt{D(x)}$$
        </div>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;方差和标准差均用于刻画\\(X\\)的取值与数学期望\\(E(X)\\)的偏离程度。\\(D(X)\\)越小，\\(X\\)取值越集中。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;标准差的优点是其与数学期望具有相同的量纲。</p>
        <h3>二、方差的计算</h3>
        <p><b>离散型随机变量</b>：</p>
        <p></p>




        <h2>第三节 协方差与相关函数</h2>
        <h3>一、协方差的概念与性质</h3>
        <p><b>协方差</b></p>
        <h3>二、相关系数的概念与性质</h3>
        <h3>三、不相关</h3>
    ` },
  "note/math/probability/chapter6": { title: "概率论", content: `</p>

<p>
    <b>\\(\\chi^2\\)分布（卡方分布）</b>：
    <br>定义：
    <br>&nbsp;&nbsp;&nbsp;&nbsp;设\\(X_1, X_2, \\cdots, X_n\\)是来自正态总体\\(N(0,1))的样本，称统计量：
    $$\\chi^2 = X_1^2 + X_2^2 + \\cdots + X_n^2$$
    为服从自由度为\\(n\\)的\\(\\chi^2\\)分布，记作\\(\\chi^2\\sim \\chi^2(n)\\)
    <br>性质：
    <ul>
        <li>\\(E(\\chi^2) = n\\)</li>
        <li>\\(D(\\chi^2) = 2n\\)</li>
    </ul>
</p>

<p>
    <b>\\(t\\)分布</b>：
    <br>定义：
    <br>&nbsp;&nbsp;&nbsp;&nbsp;设\\(X\\sim N(0,1), Y\\sim \\chi^2(n)\\)，且\\(X\\)与\\(Y\\)相互独立，称\\(T = \\frac{X}{\\sqrt{Y/n}}\\)为服从自由度为\\(n\\)的\\(t\\)分布，记作\\(T\\sim t(n)\\)
</p>` },
  "note/math/probability/chapter7": { title: "概率论", content: `
<h1>第七章 参数估计</h1>
<h2>第一节 点估计</h2>
<h3>1、矩估计</h3>
<p>$$\\mu_k = E(x^k)\\Rightarrow \\begin{cases}
    \\hat{\\mu} = \\bar{X}\\\\
    \\hat{\\sigma^2} = B_2
    \\end{cases}$$
&nbsp;&nbsp;&nbsp;&nbsp;即样本均值等于总体均值；样本方差等于总体二阶中心矩
<br>&nbsp;&nbsp;&nbsp;&nbsp;证明如下：
$$\\begin{cases}
\\mu_1 = E(X) = \\mu\\\\
\\mu_2 = E(X^2) = D(X) + E^2(X) = \\sigma^2 + \\mu^2
\\end{cases}\\\\
$$
$$
\\therefore
\\begin{cases}
\\begin{align}
\\mu&= \\frac1n \\mathop{\\sum}\\limits_{i=1}^nX_i\\\\
\\sigma^2 + \\mu^2&= \\frac1n\\mathop{\\sum}\\limits_{i=1}^nX_i^2, 
\\end{align}\\end{cases}\\\\
$$
&nbsp;&nbsp;&nbsp;&nbsp;解得矩估计量为：
$$
\\\\

\\hat \\mu =  \\frac1n \\mathop{\\sum}\\limits_{i=1}^nX_i = \\bar X\\\\

\\begin{align}\\hat \\sigma^2 
&= \\frac1n\\mathop{\\sum}\\limits_{i=1}^nX_i^2 - \\mu\\\\
&= \\frac1n\\mathop{\\sum}\\limits_{i=1}^nX_i^2 - \\bar X^2\\\\
&= \\frac1n\\mathop{\\sum}\\limits_{i=1}^nX_i^2 - 2\\bar X^2 + \\bar X^2\\\\
&= \\frac1n\\mathop{\\sum}\\limits_{i=1}^nX_i^2 - \\frac1n\\mathop{\\sum}\\limits_{i=1}^n2\\bar XX_i + \\frac1n\\mathop{\\sum}\\limits_{i=1}^n\\bar X^2\\\\
&= \\frac1n\\mathop{\\sum}\\limits_{i=1}^n(X_i - \\bar X)^2\\\\
&= B_2

\\end{align}
$$
</p>

<hr>
<p>\\(X\\sim U(a,b)\\)：
$$E(X) = \\frac{a+b}{2} = \\bar X\\\\
D(X) = \\frac{(b-a)^2}{12} = B_2\\\\
\\therefore \\begin{cases}
\\hat a = \\bar X - \\sqrt{3B_2}\\\\
\\hat b = \\bar X + \\sqrt{3B_2}
\\end{cases}$$

</p>
<hr><hr>
<h3>2、最大似然估计</h3>
<p>离散型随机变量：


    <h2>第二节 估计量的评价标准</h2>
    <p>
        <b>无偏性</b>：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;对\\(\\forall\\theta\\)，满足\\(E(\\hat \\theta) = \\theta\\)，称\\(\\hat\\theta\\)为\\(\\theta\\)的无偏估计。
        <br>
        <br><b>有效性</b>：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;若\\(D(\\hat\\theta_1) < D(\\hat\\theta_2)\\)，则称\\(\\hat\\theta_1\\)比\\(\\hat\\theta_2\\)更有效。
    </p>
</p>

<h2>第三节 区间估计</h2>
<p>
<b>置信度为\\(1-\\alpha\\)的置信区间</b>：
<br>&nbsp;&nbsp;&nbsp;&nbsp;满足\\(P\\{\\hat{\\theta_1}<\\theta<\\hat{\\theta_2}\\} = 1-\\alpha\\)的区间\\((\\hat{\\theta_1}, \\hat{\\theta_2})\\)
<br>&nbsp;&nbsp;&nbsp;&nbsp;表明置信区间\\((\\hat{\\theta_1}, \\hat{\\theta_2})\\)内包含\\(\\theta\\)的概率为\\(1-\\alpha\\)

</p>

<h2>第四节 正态总体均值的区间估计</h2>
<p>
    1、\\(\\sigma\\)已知：
    $$\\bar X\\sim N(\\mu,\\sigma/\\sqrt n)$$
    $$\\frac{\\bar X-\\mu}{\\sigma/\\sqrt{n}}\\sim N(0,1)$$
    $$P\\{|\\frac{\\bar X-\\mu}{\\sigma/\\sqrt{n}}|\\leq z_{\\frac \\alpha 2}\\} = 1 - \\alpha$$
    置信区间：\\([\\bar X - \\frac{\\sigma}{\\sqrt n}z_{\\frac \\alpha 2}, \\bar X + \\frac{\\sigma}{\\sqrt n}z_{\\frac \\alpha 2}]\\)
    <br>2、\\(\\sigma\\)未知：
    $$P\\{|\\frac{\\bar X-\\mu}{S/\\sqrt{n}}|\\leq t_{\\frac \\alpha 2}(n-1)\\} = 1 - \\alpha$$
    置信区间：\\([\\bar X - \\frac{S}{\\sqrt n}t_{\\frac \\alpha 2}(n-1), \\bar X + \\frac{S}{\\sqrt n}t_{\\frac \\alpha 2}(n-1)]\\)
</p>

<h2>单侧置信区间</h2>
<p>
    \\(\\mu\\)置信度为\\(1-\\alpha\\)的单侧置信区间：
    $$[\\bar X - \\frac{S}{\\sqrt n}t_\\alpha(n-1),+\\infty)$$
</p>
` },
  "note/math/probability/chapter8": { title: "概率论", content: `&nbsp;&nbsp;&nbsp;&nbsp;若满足拒绝域，则假设\\(H_0\\)不成立；若不满足拒绝域，则假设\\(H_0\\)成立。
    </p>
    <hr>
    <h3>t检验法</h3>
    <p>
        &nbsp;&nbsp;&nbsp;&nbsp;当\\(\\mu_0\\)已知，\\(\\sigma_0\\)未知时，选用t检验法，步骤如下：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;检验统计量：
        $$T = \\frac{\\bar X - \\mu_0}{S/\\sqrt{n}}$$
        <ul>
            <li>检验假设：
                $$H_0: \\mu = \\mu_0, H_1:\\mu\\neq \\mu_0$$
                拒绝域为：
                $$W = \\{|T| > t_{\\frac{\\alpha}{2}}(n-1)\\}$$</li>
            <li>检验假设：
                $$H_0: \\mu = \\mu_0, H_1:\\mu > \\mu_0$$
                拒绝域为：
                $$W = \\{T > t_\\alpha(n-1)\\}$$</li>
            <li>检验假设：
                $$H_0: \\mu = \\mu_0, H_1:\\mu < \\mu_0$$
                拒绝域为：
                $$W = \\{T < t_\\alpha(n-1)\\}$$</li>
        </ul>
        &nbsp;&nbsp;&nbsp;&nbsp;若满足拒绝域，则假设\\(H_0\\)不成立；若不满足拒绝域，则假设\\(H_0\\)成立。
    </p>` },
  "note/math/probability/distribution": { title: "概率论", content: `<h1>分布</h1>

        <div class="PageCatalog">
            <ul>
                <li><a href="#Discrete">离散型随机变量</a></li>
                <li><a href="#Continuous">连续型随机变量</a></li>
            </ul>
        </div>

        <h2 id="Discrete">离散型随机变量</h2>
        <p>
            <b>数学期望</b>：
            $$E(X) = \\sum\\limits_{k=1}^{\\infty}x_kp_k$$

            <b>方差</b>：
            $$D(X) = \\mathop{\\sum}\\limits_{k=1}^{\\infty}[x_k - E(X)]^2p_k$$

            <b>独立性</b>：
            $$P\\{X = x_i, Y = y_i\\} = P\\{X = x_i\\}P\\{Y = y_i\\}$$

            <b>最大似然估计</b>：
            $$L(\\theta) = \\prod\\limits_{i=1}^nP\\{X=x_i\\}$$
        </p>


        <hr>

        <h3>二项分布</h3>
        <p>n重伯努利试验中，事件A发生的概率为\\(p\\)，\\(X\\)表示n重伯努利试验中事件A发生的次数，则称<b>\\(X\\)服从参数为\\(n,p\\)的二项分布</b>，记作\\(X\\sim b(n,p)\\)</p>
        <hr>

        <h3>（0-1）分布（两点分布）</h3>
        <p>二项分布\\(n = 1\\)时的特殊情况.</p>
        <hr>

        <h3>几何分布</h3>
            <p>若事件A发生的概率为\\(p\\)，\\(X\\)表示事件A首次发生时已进行的次数，则称<b>X服从参数为p的几何分布</b>，记作\\(X\\sim G(p)\\)</p>
        <hr>

        <h3>泊松分布</h3>
        <p>
            <b>最大似然估计</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;设\\(x_1, x_2,\\cdots, x_n\\)为样本\\(X_1, X_2, \\cdots,X_n\\)的观测值。
            $$\\begin{align}
            L(\\lambda) &= \\prod\\limits_{i=1}^n\\frac{\\lambda^{x_i} e^{-\\lambda}}{x_i!}\\\\
            &= e^{-n\\lambda}\\frac{\\lambda^{\\sum\\limits_{i=1}^nx_i}}{\\prod\\limits_{i=1}^nx_i!}\\\\
            \\therefore lnL(\\lambda) &= -n\\lambda + \\sum\\limits_{i=1}^nx_iln\\lambda - \\sum\\limits_{i=1}^nln(x_i!)\\\\
            令 \\frac{dlnL(\\lambda)}{d\\lambda} &= -n + \\frac 1\\lambda\\sum\\limits_{i=1}^nx_i = 0\\\\
            \\therefore 最大似然估计值：\\hat \\lambda &= \\frac1n\\sum\\limits_{i=1}^nx_i = \\bar x\\\\
            \\therefore 最大似然估计量：\\hat \\lambda &= \\bar X   
            \\end{align}$$
        </p>

        <table>
            <tr>
                <td>分布</td>
                <td>概率</td>
                <td>符号</td>
                <td>数学期望</td>
                <td>方差</td>
            </tr>
            <tr>
                <td>\\(X\\)服从<b>退化分布</b>（<b>单点分布</b>）</td>
                <td>$$P\\{X = C\\} = 1,~C\\in \\mathbb{R}$$</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>\\(X\\)服从参数为\\(n,p\\)的<b>二项分布</b></td>
                <td>$$ P\\{X = k\\} = C_n^kp^k(1-p)^{n-k},k=0,1,2,\\cdots,n $$</td>
                <td>$$X \\sim b(n,p)$$</td>
                <td>$$E(X) = np$$</td>
                <td>$$D(X) = np(1-p)$$</td>
            </tr>
            <tr>
                <td>\\(X\\)服从参数为\\(p\\)的<b>\\((0-1)\\)分布（<b>两点分布</b>）</b></td>
                <td>$$P\\{X = k\\} = p^k(1-p)^{1-k}, k=0,1$$</td>
                <td>$$X\\sim b(1,p)$$</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>\\(X\\)服从参数为\\(p\\)的<b>几何分布</b></td>
                <td>$$ P\\{X = k\\} = (1-p)^{k-1}p,~k=1,2,\\cdots $$</td>
                <td>$$X \\sim G(p)$$</td>
                <td>$$E(X) = p$$</td>
                <td></td>
            </tr>
            <tr>
                <td>\\(X\\)服从参数为\\(\\lambda\\)的<b>泊松分布</b></td>
                <td>$$P\\{X = k\\} = \\frac{\\lambda^k e^{-\\lambda}}{k!},~\\lambda \\gt 0,~k=0,1,2,\\cdots$$</td>
                <td>$$X \\sim P(\\lambda)$$</td>
                <td>
                    <div class="Formula">
                        $$E(X) = \\lambda$$
                        <div class="Derivation">
                            $$\\begin{align}
                            E(X) &= \\mathop{\\sum}\\limits_{k=0}^\\infty k\\cdot\\frac{\\lambda^ke^{-\\lambda}}{k!}\\\\
                            &= \\lambda e^{-\\lambda}\\mathop{\\sum}\\limits_{k=1}^\\infty\\frac{\\lambda^{k-1}}{(k-1)!}\\\\
                            &= \\lambda e^{-\\lambda} e^{\\lambda}\\\\
                            &= \\lambda
                            \\end{align}$$
                        </div>
                    </div>
                </td>
                <td>$$D(X) = \\lambda$$</td>
            </tr>
        </table>


        <hr>

        <h2 id="Continuous">连续型随机变量</h2>
        <p>
            <b>数学期望</b>:
            $$E(X) = \\int_{-\\infty}^{+\\infty}xf(x)dx$$

            <b>方差</b>：
            $$D(X) = \\int_{-\\infty}^{+\\infty}[x - E(X)]^2f(x)dx$$

            <b>独立性</b>：
            $$f(x,y) = f_X(x)f_Y(y)$$

            <b>最大似然估计</b>：
            $$L(\\theta) = \\prod\\limits_{i=1}^nf(x_i;\\theta)$$
        </p>
        <table id="ContinuousDistribution">
            <caption>连续型随机变量的分布</caption>
            <tr>
                <td>分布</td>
                <td>\\(X\\)在区间\\([a,b]\\)上服从<b>均匀分布</b></td>
                <td>\\(X\\)服从参数为\\(\\lambda\\)的<b>指数分布</b></td>
                <td>\\(X\\)服从参数为\\(\\mu,\\sigma\\)的<b>正态分布</b>（<b>高斯分布</b>）</td>
            </tr>
            <tr>
                <td>概率密度</td>
                <td>
                    $$f(x) = 
                    \\begin{align}\\begin{cases}
                    \\frac{1}{b-a},~&a\\leq x\\leq b\\\\
                    0,~&others
                    \\end{cases}\\end{align}$$
                </td>
                <td>
                    $$
                    f(x)=
                    \\begin{align}\\begin{cases}
                    0,~&x\\leq 0\\\\
                    \\lambda e^{-\\lambda x},~&x>0
                    \\end{cases}\\end{align},~\\lambda > 0
                    $$
                </td>
                <td>$$f(x) = \\frac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}},~-\\infty \\lt x \\lt +\\infty$$</td>
            </tr>
            <tr>
                <td>分布函数</td>
                <td>
                    $$F(x)=
                    \\begin{align}\\begin{cases}
                    0,~&x\\lt a\\\\
                    \\frac{x-a}{b-a},~&a\\leq x\\leq b\\\\
                    1,~&x\\gt b
                    \\end{cases}\\end{align}$$
                </td>
                <td>
                    $$
                    F(x)=
                    \\begin{align}\\begin{cases}
                    0,~&x\\leq 0\\\\
                    1-e^{-\\lambda x},~&x>0
                    \\end{cases}\\end{align}
                    $$
                </td>
                <td></td>
            </tr>
            <tr>
                <td>符号</td>
                <td>$$X\\sim U[a,b]$$</td>
                <td>$$X\\sim e(\\lambda)$$</td>
                <td>$$X\\sim N(\\mu, \\sigma^2)$$</td>
            </tr>
            <tr>
                <td>数学期望</td>
                <td>
                    <div class="Formula">
                        $$E(X) = \\frac{a + b}{2}$$
                        <div class="Derivation">
                            $$\\begin{align}
                            E(X) &= \\int_{a}^{b}\\frac{x}{b-a}dx\\\\
                                 &= \\frac{x^2}{2(b-a)}|_a^b\\\\
                                 &= \\frac{a+b}{2}
                            \\end{align}$$
                        </div>
                    </div>
                </td>
                <td>$$E(X) = \\frac 1\\lambda$$</td>
                <td>$$E(X) = \\mu$$</td>
            </tr>
            <tr>
                <td>方差</td>
                <td>$$D(X) = \\frac{(b-a)^2}{12}$$ </td>
                <td>$$D(X) = \\frac{1}{\\lambda^2}$$</td>
                <td>$$D(X) = \\sigma$$</td>
            </tr>
        </table>

        <h3>均匀分布</h3>
        <p>均匀分布也可表示为\\(U(a.b)\\)等，与\\(x\\)在\\(a,b\\)处是否取等号有关.</p>

        <h3>正态分布</h3>
        <b>标准正态分布</b>
        <table>
            <tr>
                <td>分布</td>
                <td>概率密度</td>
                <td>分布函数</td>
                <td>符号</td>
            </tr>
            <tr>
                <td>\\(X\\)服从标准正态分布</td>
                <td>$$\\phi(x) = \\frac{1}{\\sqrt{2\\pi}}e^{-\\frac{x^2}{2}},~-\\infty\\lt x\\lt +\\infty$$</td>
                <td>$$\\Phi(x) = \\frac{1}{\\sqrt{2\\pi}}\\int_{-\\infty}^x e^{-\\frac{t^2}{2}}\\mathrm{d}t,~-\\infty\\lt x\\lt +\\infty$$</td>
                <td>$$X\\sim N(0,1)$$</td>
            </tr>
        </table>

        <div class="Card-Formula">
            $$X\\sim N(\\mu, \\sigma^2) \\Rightarrow Y = \\frac{X - \\mu}{\\sigma} \\sim N(0,1)$$
            $$\\Phi(x) = 1 - \\Phi(-x)$$
            $$\\Phi(0) = 0.5$$
        </div>

        <h3>指数分布</h3>
        <div class="Card-Property">
            <b>指数分布的无记忆性</b>
            <div class="Formula">
                $$X\\sim e(\\lambda) \\Rightarrow P\\{x\\gt a+b|x\\gt a\\} = P\\{x\\gt b\\}$$
                <div class="Derivation">
                    <p>当\\(b\\lt 0\\)时：</p>
                    $$P\\{x\\gt a+b|x\\gt a\\} = \\frac{P\\{x\\gt a\\}}{P\\{x\\gt a\\}} = 1 = P\\{x\\gt b\\}$$
                    <p>当\\(b\\gt 0\\)时：</p>
                    $$\\begin{align}
                    P\\{x\\gt a+b|x\\gt a\\} &= \\frac{P\\{x\\gt a+b\\}}{P\\{x\\gt a\\}}\\\\
                                         &= \\frac{\\int_{a+b}^{+\\infty}f(x)\\mathrm{d}x}{\\int_a^{+\\infty}f(x)\\mathrm{d}x}\\\\
                                         &= \\frac{(1-e^{-\\lambda x})|_{a+b}^{+\\infty}}{(1-e^{-\\lambda x})|_{a}^{+\\infty}}\\\\
                                         &= \\frac{1- [1 - e^{-(a+b)}]}{1 - (1 - e^{-a})}\\\\
                                         &= \\frac{e^{-\\lambda(a+b)}}{e^{-\\lambda a}}\\\\
                                         &= e^{-\\lambda b}\\\\
                                         &= \\int_b^{+\\infty}f(x)\\mathrm{d}x\\\\
                                         &= P\\{x\\gt b\\}
                    \\end{align}$$
                </div>
            </div>
        </div>` },
  "note/math/probability/temp": { title: "概率论", content: `</p>

        <p>
            <b>方差（\\(\\sigma^2\\)）</b>：
            $$\\begin{align}
            D(X) = Var(X) &= E\\{[X-E(X)]^2\\}\\\\
            &= E[X^2-2XE(X)+E^2(X)]\\\\
            &= E(X^2) - 2E(X)E(X) + E^2(X)\\\\
            &= E(X^2) - E^2(X)
            \\end{align}$$
            性质：
            <ul>
                <li>\\(D(C) = 0\\)</li>
                <li>\\(D(aX+b) = a^2D(X)\\)</li>
                <li>\\(D(X\\pm Y) = D(X) + D(Y) \\pm 2Cov(X,Y)\\)
                    <br>若\\(X\\)与\\(Y\\)相互独立，则\\(D(X\\pm Y) = D(X) + D(Y)\\)
                </li>
            </ul>
        </p>

        <p>
            <b>标准差（均方差）(\\(\\sigma\\))</b>：
            $$\\sigma(X) = \\sqrt{D(X)}$$
            <br>&nbsp;&nbsp;&nbsp;&nbsp;方差和标准差均用于刻画\\(X\\)的取值与数学期望\\(E(X)\\)的偏离程度。\\(D(X)\\)越小，\\(X\\)取值越集中。
        <br>&nbsp;&nbsp;&nbsp;&nbsp;标准差的优点是其与数学期望具有相同的量纲。
        </p>

        <p>
            <b>协方差</b>：
            $$\\begin{align}
            Cov(X,Y) &= E\\{[X-E(X)][Y-E(Y)]\\}\\\\
            &= E(XY) - E(X)E(Y)
            \\end{align}$$
            性质：
            <ul>
                <li>\\(Cov(X,X) = D(X)\\)</li>
                <li>\\(Cov(X,Y) = Cov(Y,X)\\)</li>
                <li>\\(Cov(C,X) = Cov(X,C) = 0\\)</li>
                <li>\\(Cov(aX, bY) = abCov(X,Y)\\)</li>
                <li>\\(Cov(X_1+X_2, Y) = Cov(X_1,Y) + Cov(X_2, Y)\\)</li>
                <li>若\\(X\\)与\\(Y\\)相互独立，则\\(Cov(X,Y) = 0\\)</li>
            </ul>
        </p>

        <p>
            <b>相关系数</b>：
            $$\\rho_{XY} = \\frac{Cov(X,Y)}{\\sqrt{D(X)}\\sqrt{D(X)}}$$
            <br>&nbsp;&nbsp;&nbsp;&nbsp;若\\(\\rho_{XY} = 0\\)，此时\\(Cov(X,Y) = 0\\)称\\(X\\)与\\(Y\\)<b>不相关</b>
        </p>

        <p>
            <b>切比雪夫不等式</b>：
            $$P\\{|X-\\mu|\\geq\\epsilon\\}\\leq\\frac{\\sigma^2}{\\epsilon^2}$$
        </p>
        <hr>
        <hr>` },
  "note/math/tensoranalysis/catalog": { title: "张量分析", content: `<h1>张量分析</h1>
        <h2>目录</h2>

        <div class="Catalog">
            <ul>
                <li><a href="/note/math/tensoranalysis/vector">矢量</a></li>
                <li><a href="/note/math/tensoranalysis/vector_calculation">矢量运算</a></li>
                <li><a href="/note/math/tensoranalysis/coordinatesystem">坐标系</a></li>
                <li><a href="/note/math/tensoranalysis/dyad">并矢</a></li>
            </ul>
        </div>` },
  "note/math/tensoranalysis/coordinatesystem": { title: "张量分析", content: `<h1>坐标系</h1>
        
        <h2>平面斜角直线坐标系</h2>
        <p>平面内直线坐标系\\(x^1,x^2\\)，坐标线互不相交，夹角为\\(\\phi \\lt \\pi\\).</p>

        <div id="PageEnd"></div>` },
  "note/math/tensoranalysis/dyad": { title: "非线性光学", content: `<h1>并矢</h1>

        <div class="PageCatalog">
            <ul>
            </ul>
        </div>

        <div class="Card-Definition">
            <b>并矢</b>
            <p>任意两个矢量\\(\\mathbf{a}\\)和\\(\\mathbf{b}\\)并写在一起，称为并矢，也称为两个矢量的<b>张量积</b>.</p>
            <p>记为\\(\\mathbf{a}\\mathbf{b} = \\mathbf{a}\\otimes\\mathbf{b}\\).</p>
            <p>[注]对于一维或二维张量，实则是求矩阵乘法.</p>
        </div>

        <div class="Card-Definition">
            <b>多并矢（\\(n\\)阶并矢）</b>
            <p>多于两个矢量的并矢.</p>
        </div>

        <div class="Card-Definition" id="DoubleDotProduct">
            <b>双点积——并联式</b>
            $$\\mathbf{a}\\mathbf{b}:\\mathbf{c}\\mathbf{d} = (\\mathbf{a}\\cdot\\mathbf{c})(\\mathbf{b}\\cdot\\mathbf{d})$$
            <p>按照\\((前\\cdot前)(后\\cdot后)\\)的形式进行两两缩并.</p>

            <b>双点积——串联式</b>
            $$\\mathbf{a}\\mathbf{b}\\cdot\\cdot\\mathbf{c}\\mathbf{d} = (\\mathbf{b}\\cdot\\mathbf{c})(\\mathbf{a}\\cdot\\mathbf{d})$$
            <p>按照\\((内\\cdot内)(外\\cdot外)\\)的形式进行两两缩并.</p>
        </div>


        <div id="PageEnd"></div>` },
  "note/math/tensoranalysis/vector": { title: "张量分析", content: `<h1>矢量</h1>
        <div class="Card-Definition">
            <b>矢量</b>
            <p>在三维Euclidean空间中，矢量是具有大小与方向且满足一定规则的实体.</p>
            <p>通常用黑体字母表示.</p>
        </div>


        <div id="PageEnd"></div>` },
  "note/math/tensoranalysis/vector_calculation": { title: "张量分析", content: `<h1>矢量运算</h1>

        <h2>叉乘</h2>
        <div class="Card-Definition">
            <b>叉乘（叉积、矢积、外积）</b>
            $$\\begin{align}
            \\mathbf{w} &= \\mathbf{u}\\times\\mathbf{v} \\\\
                       &= \\left|\\begin{matrix}\\mathbf{i}&\\mathbf{j}&\\mathbf{k}\\\\u_x&u_y&u_z\\\\v_x&v_y&v_z\\end{matrix}\\right|
            \\end{align}$$

        </div>

        <div id="PageEnd"></div>` },
  "note/optics/appliedoptics/aberration": { title: "应用光学", content: `<h1>像差理论</h1>

        <table>
            <tr>
                <td rowspan="8">像差：<br>实际像与理想像之间的差异。</td>
                <td rowspan="7">几何像差</td>
                <td rowspan="5">单色像差：<br>单色光成像产生的像差。</td>
                <td><a href="#SphericalAberration">球差</a></td>
                <td>轴上点</td>
                <td>孔径</td>
            </tr>
            <tr>
                <td>彗差（正弦差）</td>
                <td>轴外点</td>
                <td>孔径和视场</td>
            </tr>
            <tr>
                <td>像散</td>
                <td></td>
                <td>视场</td>
            </tr>
            <tr>
                <td><a href="#FieldCurvature">场曲</a></td>
                <td>轴外点</td>
                <td>视场</td>
            </tr>
            <tr>
                <td><a href="#Distortion">畸变</a></td>
                <td></td>
                <td>视场</td>
            </tr>
            <tr>
                <td rowspan="2">色差：<br>不同色光成像位置和大小的差异。</td>
                <td>位置色差</td>
                <td>轴上点</td>
                <td>孔径</td>
            </tr>
            <tr>
                <td>倍率色差</td>
                <td></td>
                <td>视场</td>
            </tr>
            <tr>
                <td colspan="5"><a href="#WaveAberration">波像差（波差）</a>：<br>实际波面与理想球面的光程差。</td>
            </tr>
        </table>



        <h2 id="SphericalAberration">球差（<span lang="en">Spherical Aberration</span>）</h2>
        
        <b>定义</b>
        <p>球差又叫球面像差，是指轴上点发出的光束通过球面透镜时，透镜不同孔径区域的光束最后汇集在光轴的不同位置，在像面上形成圆形弥散斑。</p>


        <b>球差（轴向球差、\\(\\delta L'\\)）</b>
        <p>轴上点发出的同心光束经光学系统后，不再是同心光束。不同入射高度\\(h(U)\\)的光线经过光学系统后交光轴于不同位置，相对理想像点有不同程度的偏离，称这种偏离为轴向球差。</p>
        $$
        \\begin{cases}
        L' = (1 + \\frac{\\sin I'}{\\sin U'})r\\\\
        l' = (1 + \\frac{i'}{u'})r
        \\end{cases}
        \\Rightarrow
        \\delta L' = L' - l'
        $$
        $$(l' \\gt L')$$
        <p>球差与孔径的位置无关，与孔径的大小有关，一般随孔径的增大而增大。</p>
        <p>球差是轴上点成像存在的唯一一种单色像差。</p>
        
        <b>垂轴球差\\(\\delta T'\\)</b>
        <p>由于球差的存在，像在高斯像面上成一个圆形的弥散斑，弥散斑的半径即为垂轴球差\\(\\delta T'\\)。</p>
        $$\\delta T' = \\delta L' \\tan U'$$

        <b>球差展开式</b>
        $$\\begin{align}
        \\delta L' &= A_1h^2 + A_2h^4 + A_3h^6 + \\cdots\\\\
                  &= a_1U^2 + a_2U^4 + a_3U^6 + \\cdots
        \\end{align}$$
        <p>展开式中第一项为初级球差、第二项为二级球差、第三项为三级球差。</p>
        <p>二级以上球差被称为高级球差，大部分光学系统高级球差很小，可以忽略。</p>



        
        <b>球差的校正</b>
        <br><br>
        <span lang="en">(1)</span> 正负透镜组合<br><br>
        <span lang="en">(2)</span> 将球面更改为非球面<br><br>
        <span lang="en">(3)</span> 分裂透镜
        <p>通常对边缘光线校正球差。</p>
        $$\\delta L'_m = A_1h_m^2 + A_2h_m^4 = 0$$
        此时
        $$A_1 = -A_2h_m^2$$
        $$\\delta L' = -A_2h_m^2h^2 + A_2h^4$$
        校正边缘光球差后最大球差对应入射高度为
        $$-2A_2h_m^2h + 4A_2h^3 = 0$$
        $$h = 0.707h_m$$
        最大剩余球差为
        $$\\delta L' = -A_2h_m^2/4$$

        <b>球差曲线与初级球差曲线</b>
        <p>纵坐标为\\((h/h_m)^2\\)。</p>
        <p>初级球差曲线为一条直线，且与球差曲线相切于原点。</p>
        <p>单正透镜产生负球差、单负透镜产生正球差。</p>
        <p>对于共轴球面系统，单透镜本身不能校正球差，正负透镜相结合有可能校正球差

            
        <h3>齐明点</h3>
        <b>每个面上的球差分布系数</b>
        $$S_{-} = \\frac{niL\\sin U(\\sin I - \\sin I')(\\sin I' - \\sin U)}{\\cos\\frac{1}{2}(I-U)\\cos\\frac{1}{2}(I'+U)\\cos\\frac{1}{2}(I+I')}$$
        <p>由此可知，对于单个折射面，有三个特殊的物点位置，无论球面曲率半径如何，均不产生球差。</p>
        <span lang="en">(1)</span> \\(L = 0\\)
        <p>此时\\(L' = 0\\)，即物点与像点均与球面顶点重合。</p>
        $$\\beta = \\frac{L'-r}{L-r} = 1$$
        <span lang="en">(2)</span> \\(\\sin I = \\sin I'\\)
        $$
        \\begin{cases}
        \\sin I = \\sin I'\\\\
        \\sin I' = \\frac{n}{n'}\\sin I\\\\
        n \\neq n'
        \\end{cases}
        \\Rightarrow
        I = I' = 0
        $$
        $$
        \\begin{cases}
        \\sin I = \\frac{L-r}{r}\\sin U = 0\\Rightarrow L = r\\\\
        L' = (1 + \\frac{\\sin I'}{\\sin U'})r \\Rightarrow L' = r
        \\end{cases}
        $$
        $$\\beta = \\frac{nL'}{n'L} = \\frac{n}{n'}$$
        <p>即此时物点与像点均位于折射球面球心处。</p>
        <span>(3)</span> \\(\\sin I' = \\sin U\\)
        $$
        \\sin I' = \\frac{n}{n'}\\sin I = \\frac{n}{n'}\\frac{L-r}{r}\\sin U = \\sin U\\\\
        \\therefore \\frac{n}{n'}\\frac{L-r}{r} = 1\\Rightarrow L = \\frac{n + n'}{n}r\\\\
        \\sin I' = \\sin U \\Rightarrow I' = U\\\\
        U' = U + I - I' = I\\\\
        \\therefore L' = (1 + \\frac{\\sin I'}{\\sin U'})r = (1 + \\frac{n}{n'})r \\Rightarrow L' = \\frac{n + n'}{n'}r
        $$
        $$\\beta = \\frac{nL'}{n'L} = (\\frac{n}{n'})^2$$

        <b>齐明透镜</b>
        <p>利用齐明点特性制作而成的透镜。</p>
        <b>作用</b>
        <p>提高物镜孔径角。</p>



        
        <h2>彗差</h2>
        <b>正弦差</b>
        <p>小视场彗差。</p>

        <b>正弦条件</b>
        $$ny\\sin U = n'y'\\sin U'$$
        <b>彗差</b>
        <p>轴外点宽光束的像差，是孔径和视场的函数。</p>
        <p>表示轴外物点宽光束经光学系统成像后失对称的情况。</p>

        <b>彗差的级数展开式</b>
        $$K_S' = A_1yh^2 + A_2yh^4 + A_3y^3h^2 + \\cdots$$

        <b>初级子午彗差分布式</b>
        $$K_T' = -\\frac{3}{2n_k'u_k'}\\sum\\limits_{1}^k S_{II}$$
        <b>初级弧矢彗差分布式</b>
        $$K_S' = -\\frac{1}{2n_k'u_k'}\\sum\\limits_{1}^k S_{II}$$


        
        
        
        <h2 id="FieldCurvature">场曲</h2>
        <b>定义</b>
        <p>光束的交点沿光轴方向到高斯像面的距离。</p>
        <table>
            <tr>
                <td rowspan="2">子午场曲</td>
                <td>宽光束子午场曲\\(X_T'\\)</td>
            </tr>
            <tr>
                <td>细光束子午场曲\\(x_t'\\)</td>
            </tr>
            <tr>
                <td rowspan="2">弧矢场曲</td>
                <td>宽光束弧矢场曲\\(X_S'\\)</td>
            </tr>
            <tr>
                <td>细光束子午场曲\\(x_s'\\)</td>
            </tr>
        </table>
        
        <b>产生原因</b>
        <p>由球面本身的特性决定的，只要使用球面，就会存在场曲。</p>


        <b>校正</b>
        <ul>
            <li>利用弯月形厚透镜</li>
            <li>正负透镜组合</li>
            <li>将像面做成曲面</li>
        </ul>
        
        
        <h2>像散</h2>
        <b>定义</b>
        <p>细光束子午场曲与弧矢场曲之差。</p>
        $$x_{ts}' = x_t' - x_s'$$
        
        <h2 id="Distortion">畸变</h2>
        <b>定义</b>
        <p>不同视场的主光线通过光学系统后与高斯像面的交点高度\\(y_z'\\)与理想像高\\(y'\\)之间的差异。</p>
        $$\\delta y_z' = y_z' - y'$$
        <b>相对畸变</b>
        $$q' = \\frac{\\delta y_z'}{y'}\\times 100\\% = \\frac{\\bar{\\beta} - \\beta}{\\beta}\\times 100\\%$$
        <ul>
            <li>正畸变（枕形畸变）</li>
            <li>负畸变（桶形畸变）</li>
        </ul>
        <p>\\(\\beta = -1\\)的对称光学系统可自动消除畸变。</p>
        <ul>
            <li>孔径光阑位于透镜前：产生负畸变</li>
            <li>孔径光阑与透镜重合：不产生畸变</li>
            <li>孔径光阑位于透镜后：产生正畸变</li>
        </ul>
        <p>畸变不会影响成像清晰度。</p>
        <b>相对畸变曲线</b>
        <ul>
            <li>横坐标：相对畸变大小</li>
            <li>纵坐标：归一化视场</li>
        </ul>





        <h2>色差</h2>
        <b>产生原因</b>
        <p>光学材料对不同波长的色光有不同的折射率。</p>
        <p>由于反射定律适用于所有波长的光，反射镜不产生色差。</p>
        
        
        <h3>位置色差</h3>
        <b>位置色差（轴向色差）</b>：
        <p>轴上点两种色光成像的位置差异。</p>
        <p>对于目视光学系统，用\\(\\Delta L_{FC}'\\)表示，即系统对<span lang="en">F</span>光和<span lang="en">C</span>光消色差。</p>
        $$\\Delta L'_{FC} = L'_F - L'_C$$
        <p>近轴区表示为</p>
        $$\\Delta l'_{FC} = l'_F - l'_C$$

        $$\\sum\\limits_1^N C_I = \\sum\\limits_1^N h^2\\frac{\\Phi}{\\nu}$$
        <b>危害</b>
        <p>轴上点成像为一种彩色弥散斑，影响成像清晰度。</p>
        <b>校正</b>
        <p>单透镜不能校正色差，单正透镜具有负色差，单负透镜具有正色差。</p>
        
        
        <b>色球差\\(\\delta L'_{FC}\\)</b>
        <p>\\(0.707\\)带校正色差后，边缘带色差\\(\\Delta L'_{FC}\\)与近轴色差\\(\\Delta l'_{FC}\\)之差。</p>
        <p>数值上也等于<span lang="en">F</span>光球差\\(\\delta L'_F\\)与<span lang="en">C</span>光球差\\(\\delta L'_C\\)之差。</p>
        <p>色球差属于高级像差</p>
        $$\\delta L'_{FC} = \\Delta L'_{FC} - \\Delta l'_{FC} = \\delta L'_F - \\delta L'_C$$

        <b>二级光谱</b>
        <p>对\\(0.707\\)带<span lang="en">F</span>光和<span lang="en">C</span>光校正色差后，其球差曲线交点到<span lang="en">D</span>光球差曲线的轴向距离。</p>
        $$\\Delta L'_{FCD} = L'_{F0.707h} - L'_{D0.707h} \\approx 0.00052f'$$


        <b>双胶合薄透镜组消色差条件</b>
        $$h^2(\\Phi_1/\\nu_1 + \\Phi_2/\\nu_2)=0\\\\
        \\Phi_1 + \\Phi_2 = \\Phi$$
        <table>
            <tr>
                <td>\\(\\Phi\\)</td>
                <td>正透镜</td>
                <td>复透镜</td>
            </tr>
            <tr>
                <td>\\(\\Phi \\gt 0\\)</td>
                <td>冕牌玻璃</td>
                <td>火石玻璃</td>
            </tr>
            <tr>
                <td>\\(\\Phi \\lt 0\\)</td>
                <td>火石玻璃</td>
                <td>冕牌玻璃</td>
            </tr>
        </table>



        <p>满足总光焦度为\\(\\Phi\\)时，正负透镜的光焦度分配为</p>
        $$
        \\Phi_1 = \\frac{\\nu_1}{\\nu_1 - \\nu_2}\\Phi\\\\
        \\Phi_2 = -\\frac{\\nu_2}{\\nu_1 - \\nu_2}\\Phi
        $$

        <b>消色差系统</b>
        <p>校正了色差的系统。</p>
        <table>
            <tr>
                <td colspan="3">\\(\\Delta l_{FC}'\\)</td>
            </tr>
            <tr>
                <td>\\(\\lt 0\\)</td>
                <td>\\(= 0\\)</td>
                <td>\\(\\gt 0\\)</td>
            </tr>
            <tr>
                <td>校正不足</td>
                <td>消色差</td>
                <td>校正过度</td>
            </tr>
        </table>

        <br>&nbsp;&nbsp;&nbsp;&nbsp;轴上点白光成像，形成按色光波长由短到长，像点离透镜由近及远地排列在光轴上的现象。
    
    
        <h3>倍率色差</h3>
        <b>倍率色差（垂轴色差）</b>
        <p>对轴外物点，系统对不同色光的垂轴放大率不同。</p>
        <p>轴外点发出的两色光主光线在消单色光像差普贤的高斯像面上的交点高度之差，以长波长色光的交点高为基准，体现了光学系统对不同色光的放大率差异。</p>
        $$\\sum\\limits_1^N C_{II} = \\sum\\limits_1^N hh_z\\frac{\\Phi}{\\nu}$$
        <p>\\(\\beta = -1\\)的对称光学系统可自动消除倍率色差。</p>
        <p>孔径光阑与透镜重合时，不产生倍率色差。</p>
        <p>对密接薄透镜组，校正位置色差则同时校正倍率色差。</p>
        <p>对由具有一定间隔的多个薄透镜组组成的系统，只有对各个薄透镜组分别校正了位置色差，系统的倍率色差才会被同时校正。</p>




        <h2 id="WaveAberration">波像差</h2>
        <b>小像差系统</b>
        <ul>
            <li>望远系统</li>
            <li>显微物镜</li>
        </ul>

        <b>瑞利判据</b>
        <p>小像差系统的成像标准。</p>
        <p>当光学系统的最大波像差小于1/4波长时，成像质量好（无缺陷）；小于1/10波长时，成完善像。</p>

        <b>焦深</b>
        <p>实际焦点向前或向后移动\\(\\Delta l'\\)，波像差都不会超过\\(\\frac 14 \\lambda\\)，将\\(2\\Delta l'\\)定义为焦深。</p>
        


        <h2>正弦差</h2>
        <p>
            <ul>
                <li>大视场大孔径的光学系统：五种单色像差同时存在。</li>
                <li>小视场光学系统：像散、场曲、畸变很小，只需考虑球差、彗差、位置色差。</li>
                <li>小视场光学系统比较简单，一般用正弦差表示。</li>
            </ul> 
        </p>
        
        <p><b>正弦条件</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;轴上点及其垂轴平面内的邻近点成完善像的条件。
            $$\\beta = \\frac{n\\sin U}{n' \\sin U'}或f' = \\frac{h}{\\sin U'}$$
            &nbsp;&nbsp;&nbsp;&nbsp;满足正弦条件的成像被称为<b>不晕成像</b>。
        </p>
        
        <b>齐明点（不晕点、无球差点）</b>：
        <p>轴上校正了球差并满足正弦条件的一对共轭点。</p>
        
        <p><b>正弦条件的偏离程度</b>：
            $$\\delta \\beta = \\frac{n\\sin U}{n'\\sin U'}或\\delta f' = \\frac{h}{\\sin U} - f'$$
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<i>即使校正了球差，也会因存在彗差而不满足正弦条件。</i>
        </p>
        
        <p><b>赫歇尔条件</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;轴上点及其沿光轴方向的邻近点成完善像的条件。
            $$n'y'\\sin \\frac12 U' = ny\\sin \\frac12U$$
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<i>正弦条件与赫歇尔条件无法满足，即<b>任何光学系统都不可能对空间物体成完善像</b>。</i>
        </p>
        
        
        <p><b>等晕条件</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;轴外近轴点与轴上点具有相同的球差，且轴外光束不失对称性（即无彗差）。
            <br><b>等晕成像</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;轴外点与轴上点具有相同成像缺陷的现象。
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<i>轴上点即使校正了球差，也还有剩余球差存在。</i>
        </p>
        
        <p><b>正弦差（相对弧矢彗差）</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;若系统存在彗差，则不满足等晕条件，前后弧矢光线交点不交于主光线上。用
            $$SC' = \\frac{K_S'}{A'B'}\\approx \\frac{K_S'}{y'}$$表示系统对等晕条件的偏离程度。
            <br>&nbsp;&nbsp;&nbsp;&nbsp;正弦差不是七种基本像差之一，通常用于表示小视场光学系统的彗差。
            
            $$SC' = \\frac1\\beta\\frac{n\\sin U}{n'\\sin U'}- \\frac{\\delta L'}{L'-l_z'}-1 = \\frac{h}{f'\\sin U'}-\\frac{\\delta L'}{L'-l_z'}-1$$
            <table>
                <tr>
                    <td colspan="2">\\(SC' = 0\\)</td>
                </tr>
                <tr>
                    <td>\\(\\delta L' \\neq 0\\)</td>
                    <td>\\(\\delta L' = 0\\)</td>
                </tr>
                <tr>
                    <td>等晕条件</td>
                    <td>正弦条件</td>
                </tr>
            </table>
        </p>
        
        
        <p><b>像散</b>
            <br>产生原因：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;轴外点波面到达球面后，上下前后发生折射有时间差
            <br>
            <br>&nbsp;&nbsp;&nbsp;&nbsp;像散与视场大小和光阑位置有关，光阑位于球心时，像散为0
        </p>
    



        <table>
            <tr>
                <td><span lang="en">F</span>光</td>
                <td>\\(\\lambda = 486.1nm\\)</td>
            </tr>
            <tr>
                <td><span lang="en">C</span>光</td>
                <td>\\(\\lambda = 656.3nm\\)</td>
            </tr>
        </table>

        <p><b>像差校正的谱线选择</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;谱线选择主要取决于光能接收器的光谱特性
            <br>
            <br>基本原则：
            <ul>
                <li>对光能接收器的最灵敏的谱线校正单色像差</li>
                <li>对接收器所能接收的波段范围两边缘附近的谱线校正色差</li>
                <li>接收器的光谱特性直接受光源和光学系统的材料限制，设计时应使三者的性能匹配好，尽可能使光源辐射的波段与最强谱线、光学系统透过的波段与最强谱线和接收器所能接收的波段与灵敏谱线三者对应一致。</li>
            </ul>
        </p>

        <p>几种光学系统的像差校正：
            <ul>
                <li>目视光学系统：
                    <ul>
                        <li>接收器：人眼</li>
                        <li>最灵敏波长：\\(\\lambda=555nm\\)</li>
                        <li>单色像差校正：靠近灵敏波长的D光（589.3nm）或e光（546.1nm）</li>
                        <li>校正色差：靠近可见区两端的F光（486.1nm）和C光（656.3m'm）</li>
                        <li>阿贝数：\\(\\nu_D = (n_D -1)/(n_F - n_C)\\)</li>
                    </ul>
                </li>
                <li>普通照相系统</li>
                <li>近红外和近紫外的光学系统</li>
                <li>其他光学系统</li>
            </ul>
        </p>







        
        <div class="ScrollButton">
            <button onclick="ToTop()"></button>
            <button onclick="ToBottom()"></button>
        </div>` },
  "note/optics/appliedoptics/basiclaws": { title: "应用光学", content: `<h1>几何光学的基本定律</h1>

        <h2>光沿直线传播定律</h2>

        <b>内容</b>：
        <p>在各项同性均匀介质中，光沿直线传播。</p>

        <b>现象</b>：
        <p>影子的形成，日蚀、月蚀。</p>

        <b>应用</b>：
        <p>小孔成像、精密测量</p>

        <b>局限性</b>：
        <p>光经过小孔或狭缝时，发生衍射现象，光将不再沿直线方向传播。</p>
        <p>光经过各项异性晶体介质时，发生双折射现象。</p>
        <p>光在非均匀介质中传播时，传播路径为曲线。</p>` },
  "note/optics/appliedoptics/catalog": { title: "应用光学", content: `<h1>应用光学</h1>
        <h2>目录</h2>
        <ul>
            <li><a href="/note/optics/appliedoptics/chapter1">第一章 几何光学基本定律与成像概念</a></li>
            <li><a href="/note/optics/appliedoptics/chapter2">第二章 理想光学系统</a></li>
            <li><a href="/note/optics/appliedoptics/chapter3">第三章 平面与平面系统</a></li>
            <li><a href="/note/optics/appliedoptics/chapter6">第六章 光线的光路计算</a></li>
            <li><a href="/note/optics/appliedoptics/basiclaws">基本定律</a></li>
            <li><a href="/note/optics/appliedoptics/aberration">像差理论</a></li>
            <li><a href="/note/optics/appliedoptics/stop">光阑</a></li>
            
        </ul>` },
  "note/optics/appliedoptics/chapter1": { title: "应用光学", content: `<h1>第一章 几何光学基本定律与成像概念</h1>

        <div class="PageCatalog">
            <ul>
                <li><a href="#FundamentalLaw">几何光学基本定律</a></li>
                <li><a href="#Rule">符号规则</a></li>
                <li><a href="#Actual">实际光线光路计算</a></li>
            </ul>
        </div>

        <div class="Card-Analysis" id="FundamentalLaw">
            <h2>几何光学的基本定律</h2>

            <div class="Card-Definition">
                <b>光的直线传播定律</b>
                <p>各向同性均匀介质中，光沿直线传播.</p>
            </div>

            <div class="Card-Definition">
                <b>光的独立传播定律</b>
                <p>不同光源发出的光在空间某点相遇时，彼此互不影响，各光束独立传播.</p>
            </div>

            <b>折射定律（斯涅尔定律）</b>
            $$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$$

            <b>反射定律</b>
            $$\\theta' = -\\theta$$
            
            <div class="Card-Definition">
                <b>费马原理</b>
                <p>光线从一点到另一点，沿光程为极值的路径传播.</p>

                <p>利用费马原理可以导出光的直线传播定律：</p>
                <p>在各项同性均匀介质中，\\(n\\)为定值，\\(s = nl\\)最短的路径即为直线路径.</p>
            </div>

            <div class="Card-Definition">
                <b>马吕斯定律</b>
                <p>垂直于入射波面的入射光束，经任意次反射和折射后，出射光束仍垂直于出射波面，且入射波面与出射波面对应点间的光程相等.</p>
                <p>光在各向同性均匀介质中传播时，始终保持着与波面的正交性，且入射波面与出射波面对应点间的光程相等.</p>
            </div>
            <i>折反射定律、费马原理、马吕斯定律中的任意一个，均可视作几何光学的一个基本定律，而另外两个视为该定律的推论。</i>

        </div>

        <h2>第二节 成像的基本概念与完善成像条件</h2>
        <h3>一、光学系统与成像概念</h3>
        <div class="Card-Definition">
            <b>光学系统</b>
            <p>由若干（球面、平面或非球面）光学元件（透镜、棱镜、反射镜和分划板等）组成的系统.</p>
            <i>现代光学元件还有光栅、光纤、干涉/衍射元件、二元光学元件等。</i>
            <table>
                <tr>
                    <td rowspan="4" width="2">光学系统</td>
                    <td rowspan="2"></td>
                    <td><b>共轴光学系统</b></td>
                    <td class="tbtext">组成光学系统的各个光学元件表面曲率中心都在同一个直线上.</td>
                </tr>
                <tr>
                    <td><b>非共轴光学系统</b></td>
                    <td></td>
                </tr>
                <tr>
                    <td rowspan="2"></td>
                    <td><b>球面光学系统</b></td>
                    <td class="tbtext">光学元件全为球面的光学系统.</td>
                </tr>
                <tr>
                    <td><b>非球面光学系统</b></td>
                    <td class="tbtext">含有非球面元件的光学系统.</td>
                </tr>
            </table>
            <p>光学系统的主要用途之一就是对物体成像.</p>
        </div>
        
        <div class="Card-Definition">
            <table>
                <tr>
                    <td width="16"><b>物</b></td>
                    <td class="tbtext">
                        <p>发出入射光的物质.</p>
                        <p>可以是光源、被光源照明的物体或其他光学系统的像.</p>
                    </td>
                </tr>
                <tr>
                    <td width="16"><b>像</b></td>
                    <td class="tbtext">由出射光形成的物质.</td>
                </tr>
            </table>
            <p>[注]物像的概念不是绝对的.</p>

            <table>
                <tr>
                    <td width="48"><b>物空间</b></td>
                    <td class="tbtext">物所在的空间，即光学系统成像前的整个空间.</td>
                </tr>
                <tr>
                    <td width="48"><b>像空间</b></td>
                    <td class="tbtext">像所在的空间，即光学系统成像后的整个空间.</td>
                </tr>
            </table>
            <p>[注]物空间和像空间没有严格的位置界限，其范围均为\\((-\\infty, +\\infty)\\)</p>

            <table>
                <tr>
                    <td width="96"><b>实物（像）点</b></td>
                    <td class="tbtext">由实际光线相交所形成的点。既能被人眼观察，又能用屏幕、胶片或光电成像器件（数码相机中的CCD、CMOS等）记录.</td>
                </tr>
                <tr>
                    <td width="96"><b>虚物（像）点</b></td>
                    <td class="tbtext">由光线延长线相交所形成的点。只能被人眼观察，不能被记录.</td>
                </tr>
            </table>
        </div>

        <p><b>完善像点</b>：如果一球面波经过一光学系统以后仍为一球面波，那么对应的光束仍为同心光束，则称该同心光束的中心为物点经过光学系统所成的完善像点。</p>
        <p><b>完善像</b>：物体上每个点经过光学系统后所成完善像的集合。</p>
        <h3>二、完善成像条件</h3>
        <p><b>完善成像的条件</b>：入射波面为球面波时，出射球面也为球面波。</p>


        <h2>第三节 光路计算与近轴光学系统</h2>
        
        <div class="Card-Analysis" id="Rule">
            <h2>符号规则（GB/T 1224-1999）</h2>
            <img src="./img/RayTracing.png" width="350">

            <h3>参数符号</h3>
            <p>
            <ul>
                <li><b>折射球面</b>：nn'两种介质的分界面</li>
                <li><b>折射面球心（C）</b></li>
                <li><b>光轴</b>：通过C的直线</li>
                <li><b>顶点（O）</b>：光轴与折射球面的交点</li>
                <li><b>球面曲率半径（r）</b>：\\(r=OC\\)</li>
                <br>
                <li><b>子午面</b>：通过物点和光轴的截面<br>
                <i>轴上A的子午面有无数多个，轴外A的子午面只有一个</i>
                </li>
                <br>
    
                <li><b>光线在折射面上的投射高度（h）</b></li>
                <li><b>光轴转向法线的夹角（φ）</b></li>
            </ul></p>
            <i>注：作图中的物理量均为绝对值</i>
            <table>
                <thead>
                    <tr>
                      <td>参数</td>
                      <td>符号</td>
                      <td>定义</td>
                    </tr>
                </thead>
                <tr>
                    <td>物点/像点</td>
                    <td>A/A'</td>
                    <td>入射光线/出射光线与光轴的交点</td>
                </tr>
                <tr>
                  <td>物高/像高</td>
                  <td>\\(y\\)/\\(y'\\)</td>
                  <td></td>
                </tr>
                <tr>
                    <td>物方截距（物距）/像方截距（像距）</td>
                    <td>L/L'</td>
                    <td>
                        $$L = OA$$
                        $$L' = OA'$$
                    </td>
                </tr>
                <tr>
                    <td>物方/像方孔径角</td>
                    <td>\\(u\\)/\\(u'\\)</td>
                    <td>光轴转向入射光线/出射光线的夹角</td>
                </tr>
                <tr>
                    <td>物方/像方半视场角</td>
                    <td>\\(\\omega\\)/\\(\\omega'\\)</td>
                    <td>光轴转向物/像边缘与入瞳/出瞳中心连线的夹角</td>
                </tr>
                <tr>
                    <td>入射/反射/折射角</td>
                    <td>\\(I\\)/\\(I'\\)/\\(I''\\)</td>
                    <td>入射/反射/折射光线转向法线的夹角</td>
                </tr>
            </table>

            <h3>正方向的规定</h3>
            <b>线量</b>
            <table>
                <tr>
                    <td rowspan="2">线量</td>
                    <td>轴线线量（沿光轴方向的线量）</td>
                </tr>
                <tr>
                    <td>垂轴线量（垂直光轴方向的线量）</td>
                </tr>
            </table>
            <p>沿轴线量：以球面顶点为参考点，参考点以右的点相对参考点的沿轴线度为正；参考点以左的点相对参考点沿轴线度为负.</p>
            <p>垂轴线量：光轴以上的点到光轴的垂轴线度为正；光轴以下的点到光轴的垂轴线度为负.</p>

            <b>角量</b>
            <p>几何光学中直线有三种，即光轴、光线与界面的法线，它们两两间可以夹角.</p>
            <p>光轴-光线：光轴按锐角转向光线，顺时针为正、逆时针为负.</p>
            <p>光轴-法线：光轴按锐角转向法线，顺时针为正、逆时针为负.</p>
            <p>光线-法线：光线按锐角转向法线，顺时针为正、逆时针为负.</p>

        </div>

        <div class="Card-Analysis" id="Actual">
            <h2>实际光线光路计算</h2>
            <img src="./img/RayTracing.png" width="350">
            <p>光线经单个折射球面的光路计算，是指在给定单个折射球面的结构参量\\(n,n',r\\)时，由已知入射光线参数\\(L\\)与\\(U\\)计算其他参数的过程.</p>
            <b>入射角\\(I\\)</b>
            <div class="Formula">
                $$\\sin I = \\frac{L-r}{r}\\sin U$$
                <div class="Derivation">
                    <p>在\\(\\triangle AEC\\)中，由正弦定理：</p>
                    $$\\frac{\\sin(-U)}{r} = \\frac{\\sin(\\pi - I)}{r - L}$$
                    $$\\frac{-\\sin U}{r} = \\frac{\\sin I}{r-L}$$
                    $$\\sin I = \\frac{L-r}{r}\\sin U$$
                </div>
            </div>

            <b>折射角\\(I'\\)</b>
            <div class="Formula">
                $$\\sin I' = \\frac{n}{n'}\\sin I$$
                <div class="Derivation">
                    <p>由折射定律：</p>
                    $$n\\sin I = n'\\sin I'$$
                    $$\\sin I' = \\frac{n}{n'}\\sin I$$
                </div>
            </div>

            <b>像方孔径角\\(U'\\)</b>
            <div class="Formula">
                $$U' = U + I - I'$$
                <div class="Derivation">
                    <p>在\\(\\triangle AEC\\)中：</p>
                    $$I = -U + \\phi$$
                    <p>在\\(\\triangle A'EC\\)中：</p>
                    $$\\phi = U' + I'$$
                    $$\\therefore U' = \\phi - I' = U + I - I'$$
                </div>
            </div>

            <b>像方截距\\(L'\\)</b>
            <div class="Formula">
                $$L' = r(1 + \\frac{\\sin I'}{\\sin U'})$$
                <div class="Derivation">
                    <p>在\\(\\triangle A'EC\\)中，由正弦定理：</p>
                    $$\\frac{\\sin U'}{r} = \\frac{\\sin I'}{L' - r}$$
                    $$L' = r(1 + \\frac{\\sin I'}{\\sin U'})$$
                </div>
            </div>
        </div>

        <div class="Card-Analysis">
            <h2>单个折射球面近轴区光路计算公式</h2>
            $$\\begin{cases}
            i = \\frac{l-r}{r}u\\\\
            i' = \\frac{n}{n'}i\\\\
            u' = u + i - i'\\\\
            l' = r(1 + \\frac{i'}{u'})
            \\end{cases}$$

            <p><b>近轴区</b>：当U很小时，I、I'、U'都很小。光线在光轴附近很小的区域内，这个区域即为近轴区。近轴区内的光线即为近轴光线。
            <br>此时有：\\(\\sin\\theta=\\theta-\\frac{\\theta^3}{3!}+\\frac{\\theta^5}{5!}-\\frac{\\theta^7}{7!}+\\dots\\)，
            <br>故\\(sin\\theta\\approx b\\)</p>
            <i>近轴区的划定：所谓近轴区并没有明确的界限，其受所允许的相对误差大小制约，误差不同近轴区的界定值也不同。
            $$ \\frac{\\sin U-U}{\\sin U} \\leq \\pm 0.001 \\Rightarrow U\\leq \\pm 5^\\circ $$
            $$ \\frac{\\sin U-U}{\\sin U} \\leq \\pm 0.0001 \\Rightarrow U\\leq \\pm 1.5^\\circ $$
            </i>

        </div>

        <div class="Card-Analysis">
            <h2>单个折射球面近轴区成像</h2>
            <h3>物像公式</h3>
            $$\\frac{n'}{l'} - \\frac{n}{l} = \\frac{n'-n}{r}$$

            <div class="Card-Definition">
                <b>阿贝不变量\\(Q\\)</b>
                $$Q = n'(\\frac{1}{r}-\\frac{1}{l'}) = n(\\frac{1}{r}-\\frac{1}{l})$$
            </div>
        </div>



        <h2>第四节 球面光学成像系统</h2>
        <p><b>单个折射面成像</b>：</p>

        <div class="Card-Definition">
            <b>垂轴放大率（横向放大率）\\(\\beta\\)</b>
            <p>像的大小与物的大小之比.</p>
            <div class="Formula">
                $$\\beta = \\frac{y'}{y} = \\frac{nl'}{n'l}$$
                <div class="Derivation">
                    $$\\because\\triangle ABC \\sim \\triangle A'B'C$$
                    $$\\therefore\\frac{-y'}{y} = \\frac{l'-r}{r-l}$$
                    $$\\because Q  = n'(\\frac{1}{r}-\\frac{1}{l'}) = n(\\frac{1}{r}-\\frac{1}{l})$$
                    $$\\frac{n'(l'-r)}{l'} = \\frac{n(l-r)}{l}$$
                    $$\\frac{l'-r}{l-r} = \\frac{nl'}{n'l}$$
                    $$\\beta = \\frac{y'}{y} = \\frac{l'-r}{l-r} = \\frac{nl'}{n'l}$$
                </div>
            </div>
            <table>
                <tr>
                  <td></td>
                  <td>$$\\beta\\gt0$$</td>
                  <td>$$\\beta\\lt0$$</td>
                </tr>
                <tr>
                  <td>成像正倒</td>
                  <td>正像</td>
                  <td>倒像</td>
                </tr>
                <tr>
                    <td>成像虚实</td>
                    <td>物像虚实相反</td>
                    <td>物像虚实相同</td>
                </tr>
            </table>
            <br>
            <table>
                <tr>
                    <td></td>
                    <td>$$\\beta|\\gt1$$</td>
                    <td>$$|\\beta|=1$$</td>
                    <td>$$|\\beta|\\lt1$$</td>
                </tr>
                <tr>
                    <td>成像大小</td>
                    <td>成放大β倍的像</td>
                    <td>成等大的像</td>
                    <td>成缩小1/β倍的像</td>
                </tr>
            </table>
        </div>

        <div class="Card-Definition">
            <b>轴向放大率\\(\\alpha\\)</b>
            <p>物点沿光轴做微小移动\\(\\mathrm{d}l\\)时，所引起的像点移动量\\(\\mathrm{d}l'\\)与物点移动量\\(\\mathrm{d}l\\)之比.</p>
            $$\\alpha = \\frac{\\mathrm{d}l'}{\\mathrm{d}l}$$

        </div>


        <p>引入阿贝不变量Q，有：
            $$ Q  = n'(\\frac{1}{r}-\\frac{1}{l'}) = n(\\frac{1}{r}-\\frac{1}{l}) $$
            两边求微分，有：
            $$ \\frac{n'}{l'^2}dl' = \\frac{n}{l^2}dl $$
            $$ \\alpha = \\frac{dl'}{dl} = \\frac{nl'^2}{n'l^2} = \\frac{n'}{n}\\beta^2 $$
        </p>
        <p>
            <ol>
                <li>\\(\\alpha\\propto\\beta^2\\)，表明\\(\\alpha\\)恒为正值，即物像移动方向相同</li>
                <li>由于\\(\\alpha\\)通常不等于\\(\\beta\\)，故立体的物体经过系统成像后往往不能得到立体的像</li>
                <li>此公式仅适用于\\(dl\\)很小的情况</li>
            </ol>
        </p>
        <p><b>角放大率\\(\\gamma\\)</b>：一对共轭光线的像方孔径角与物方孔径角的正切值之比</p>
        <p>$$ \\gamma = \\frac{u'}{u} $$</p>
        <p>近轴区内：
            $$\\begin{cases}
            \\tan u \\approx u = \\frac{h}{l}\\\\
            \\tan u' \\approx u' = \\frac{h}{l'}
            \\end{cases}\\Rightarrow ul = u'l'
            $$
            $$ \\gamma = \\frac{u'}{u} = \\frac{l}{l'} = \\frac{n}{n'} \\frac{1}{\\beta} $$
        </p>
        <p>
            <ol>
                <li>表征了折射球面将光束变宽或变细的能力。</li>
                <li>仅适用于物体尺寸或角度较小的情况；当物体较大时，角放大率将随物点偏离光轴的程度而产生一定变化。</li>
                <li>仅与共轭点位置有关，而与光线孔径角无关。</li>
            </ol>
        </p>
        <p>垂轴放大率、轴向放大率与角放大率之间的关系：\\(\\alpha \\gamma = \\beta\\)</p>
        <div class="Card-Definition">
            <b>拉赫不变量（拉格朗日-赫姆霍兹不变量）\\(J\\)</b>
            $$J = nuy = n'u'y'$$
            $$\\because \\begin{cases}
            \\beta = \\frac{y'}{y} = \\frac{nl'}{n'l}\\\\
            \\gamma = \\frac{u'}{u} = \\frac{l}{l'}
            \\end{cases}$$
            $$\\therefore \\frac{y'}{y} = \\frac{nl'}{n'l} = \\frac{nu}{n'u'}$$
            $$\\therefore nuy = n'u'y'$$
            <p>上式称为拉格朗日-赫姆霍兹恒等式.</p>
        </div>
        <p>
        <br>由$$ \\beta = \\frac{y'}{y} = \\frac{nu}{nu'y'} $$
            得
            <i>拉赫不变量仅适用于光学系统在近轴区成像时</i>
        </p>
        <h2>补充知识点</h2>
        <b>子午平面</b>
        <p>主光线与光轴确定的平面。</p>


        <h2>球面反射镜成像</h2>
        <p>反射定律在数学上可以看作是折射定律在\\(n = -n\\)时的情形.</p>
        <b>光焦度\\(\\phi\\)</b>
        $$\\phi = -\\frac{2n}{r}$$
        <b>焦距</b>
        $$f' = f = \\frac{r}{2}$$
        <b>物象公式</b>
        $$\\frac{1}{l'} + \\frac{1}{l} = \\frac{2}{r}$$
        <b>高斯公式</b>
        $$\\frac{1}{l'} + \\frac{1}{l} = \\frac{1}{f'}$$
        <table>
            <tr>
                <td rowspan="3">放大率</td>
                <td>垂轴放大率\\(\\beta\\)</td>
                <td>$$\\beta = -\\frac{l}{l'}$$</td>
            </tr>
            <tr>
                <td>轴向放大率\\(\\alpha\\)</td>
                <td>$$\\alpha = -\\frac{l'^2}{l^2} = -\\beta^2$$</td>
            </tr>
            <tr>
                <td>角放大率\\(\\gamma\\)</td>
                <td>$$\\gamma = \\frac{l}{l'} = -\\frac{1}{\\beta}$$</td>
            </tr>
        </table>


        <h2>共轴球面光学系统</h2>

        <b>拉赫不变量</b>
        $$n_1u_1y_1 = n_2u_2y_2 = \\cdots = n_ku_ky_k = n_k'u_k'y_k' = J$$


        <h2>薄透镜成像</h2>
        <table>
            <tr>
                <td rowspan="7">透镜按结构分类</td>
                <td>透镜类别</td>
                <td width="64">曲率半径关系</td>
            </tr>
            <tr>
                <td>双凸透镜</td>
                <td>$$r_1\\gt0\\\\r_2\\lt0$$</td>
            </tr>
            <tr>
                <td>双凹透镜</td>
                <td>$$r_1\\lt0\\\\r_2\\gt0$$</td>
            </tr>
            <tr>
                <td>平凸透镜</td>
                <td>$$r_1\\gt0\\\\r_2=\\infty$$</td>
            </tr>
            <tr>
                <td>平凹透镜</td>
                <td>$$r_1\\lt0\\\\r_2=\\infty$$</td>
            </tr>
            <tr>
                <td>正弯月透镜</td>
                <td>$$r_1r_2\\gt0\\\\r_1\\lt r_2$$</td>
            </tr>
            <tr>
                <td>负弯月透镜</td>
                <td>$$r_1r_2\\gt0\\\\r_1\\gt r_2$$</td>
            </tr>
        </table>

        
        <ul class="navibar">
            <li class="next"><a href="/note/optics/appliedoptics/chapter2">下一页</a></li>
        </ul>` },
  "note/optics/appliedoptics/chapter2": { title: "应用光学", content: `<h1>第二章 理想光学系统</h1>
        <h2>第一节 理想光学系统与共线成像理论</h2>
        <p><b>理想光学系统（高斯光学系统）</b>：在任意大的空间中以任意宽的光束都成完善像的理想模型
            <br>意义：作为衡量实际光学系统成像质量的标准，评估和比较实际光学系统的不完善程度。</p>
        <h2>第二节 理想光学系统的基点与基面</h2>
        
        <p>基点：
            <ul>
                <li>焦点
                    <ul>
                        <li>物方焦点（前焦点、第一焦点）（F）：
                            <br>&nbsp;&nbsp;&nbsp;&nbsp;轴上无限远处像点的共轭点</li>
                        <li>像方焦点（后焦点、第二焦点）（F'）：
                            <br>&nbsp;&nbsp;&nbsp;&nbsp;轴上无限远处物点的共轭点</li>
                    </ul></li>
                <li>主点
                <ul>
                    <li>物方主点（\\(H\\)）：
                        <br>&nbsp;&nbsp;&nbsp;&nbsp;物方主面与光轴的交点
                    </li>
                    <li>像方主点（\\(H'\\)）：
                        <br>&nbsp;&nbsp;&nbsp;&nbsp;像方主面与光轴的交点
                    </li>
                </ul></li>
                <li>节点
                    <br>定义：
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;\\(\\gamma = +1\\)的一对共轭点
                    <ul>
                        <li>物方节点（\\(J\\)）
                        </li>
                        <li>像方节点（\\(J'\\)）
                        </li>
                    </ul>
                    性质：
                    <ul>
                        <li>通过节点的光线，传播方向不变</li>
                        <li>当\\(n = n'\\)时，节点与主点重合。</li>
                    </ul>
                    <img src="./img/2.J.png" width="450">
                </li>
            </ul>

           <br><br> <b>焦平面</b>：</p>
        <ul>
            <li><b>物方焦平面</b>：过F且垂直于光轴的平面，与无限远处垂直于光轴的像平面共轭。
            <br>
            <i>物方焦平面上任何一点发出的光线，通过理想光学系统后是一组相互平行的光线，它们与光轴的夹角大小反映了轴外点离开轴上点的距离。</i></li>
            <li><b>像方焦平面</b>：过F'且垂直于光轴的平面，与无限远处垂直于光轴的物平面共轭。
            <br>
            <i>以一束相互平行的光线经过共轴理想光学系统后，一定相交于像方焦平面上的某点，此点就是无限远轴外物点的共轭像点。</i></li>
        </ul>
        <b>焦距</b>：
        <ul>
            <li><b>物方焦距（前焦距、第一焦距）（f）</b>：物方主点与物方焦点之间的距离</li>
            <li><b>像方焦距（后焦距、第二焦距）（f'）</b>：像方主点与像方焦点之间的距离</li>
        </ul>
        <i>\\(f'>0\\)的光学系统被称为正光组；\\(f' < 0\\)的光学系统被称为负光组
            <br>
            人眼的f约为-17mm，f'约为23mm</i>
        
        <h2>第三节 理想光学系统的物像关系</h2>
        
        <h3>一、图解法求像</h3>
        <h3>二、解析法求像</h3>
        <p><b>牛顿公式</b>：以焦点为原点的物像关系式。</p>
        <p><b>高斯公式</b>：以主点为原点的物像关系式。</p>

        <h2>第四节 理想光学系统的放大率</h2>
        <h2>第五节 理想光学系统的组合</h2>
        <p><b>光学间隔（\\(\\Delta\\)）</b>：第一个光组像方焦点\\(F_1'F_2\\)</p>
        <p><b>光组间隔（\\(d\\)）</b>：两光组主平面间的距离\\(H_1'H_2\\)</p>
        <p><b>折合距离</b>：一线段其长度与所在介质折射率相除所得的值\\(x/n\\)</p>
        <p><b>光焦度（\\(\\Phi\\)）</b>：折合焦距的倒数\\(\\Phi = n'/f' = -n/f\\)
        <ul>
            <li>\\(\\Phi > 0\\)：会聚</li>
            <li>\\(\\Phi = 0\\)：既不会聚也不发散</li>
            <li>\\(\\Phi > 0\\)：发散</li>
        </ul>
        单位：<b>折光度（屈光度）</b>：空气中焦距为1m的系统其光焦度为1个折光度
        </p>

        <h3>一、两个光组组合分析</h3>
        <p>解释：
            <ul>
                <li>平行入射光组的光：必经过光组Ⅰ和光组Ⅱ的像方焦点（整个光组出射面）</li>
                <li>平行出射光组的光：必经过光组Ⅰ（整个光组入射面）和光组Ⅱ的物方焦点</li>
            </ul>
        </p>
        <p>分析：
            <ul>
                <li>对于光组Ⅰ：\\(F\\)与\\(F_2\\)共轭
                    $$x_F\\cdot\\Delta = f_1f_1' \\Rightarrow x_F = \\frac{f_1f_1'}{\\Delta}$$
                </li>
                <li>对于光组Ⅱ：\\(F_1'\\)与\\(F'\\)共轭
                    $$-\\Delta\\cdot x_F' = f_2f_2' \\Rightarrow x_F' = -\\frac{f_2f_2'}{\\Delta}$$
                </li>
            </ul>
        </p>


        <h3>二、经典理想光组</h3>
        <p><ul>
            <li>远摄型光组</li>
            <li>反远距型光组</li>
            <li>望远系统</li>
            <li>显微系统</li>
        </ul></p>
        <h2>第六节 透镜</h2>
        <p><b>透镜</b>：透镜是构成光学系统的最基本单元，是由两个折射面包围一种透明介质所形成的光学零件。</p>
        <p>按功能分：
            <ul>
                <li><b>会聚透镜（正透镜，凸透镜）</b>：对光线有会聚作用，光焦度为正值。</li>
                <li><b>发散透镜（负透镜，凹透镜）</b>：对光线有发散作用，光焦度为负值。</li>
            </ul>
            按形状分：
            <ul>
                <li>双凸、平凸、月凸</li>
                <li>双凹、平凹、月凹</li>
            </ul>
        </p>
        <p>成像分析：</p>
        <p>对于单个折射球面$$\\frac{n'}{l'} - \\frac{n}{l} = \\frac{n'-n}{r}$$
            当\\(l \\rightarrow -\\infty\\)时，\\(l'\\rightarrow f'\\)；当\\(l'\\rightarrow \\infty\\)时，\\(l\\rightarrow f\\)
            $$\\begin{cases}
            f' = \\frac{n'r}{n'-n}\\\\
            f = -\\frac{nr}{n'-n}
            \\end{cases}\\Rightarrow \\frac{f'}{n'} = -\\frac{f}{n}$$
            对于透镜：设透镜放在空气中，有\\(n_1 = n_2' = 1, n_1' = n_2 = n\\)
            $$\\begin{cases}
            f_1 = -\\frac{n_1r}{n_1'-n_1} = \\frac{r}{1-n}\\\\
            f_1' = \\frac{n_1'r}{n_1'-n_1} = \\frac{nr}{n-1}
            \\end{cases}
            ~~~~~\\begin{cases}
            f_2 = -\\frac{n_2r}{n_2'-n_2} = \\frac{nr}{n-1}\\\\
            f_2' = \\frac{n_2'r}{n_2'-n_2} = \\frac{r}{1-n}
            \\end{cases}$$
            $$f' = -f = -\\frac{f_1'f_2'}{\\Delta} = \\frac{nr_1r_2}{(n-1)[n(r_2-r_1)+(n-1)d]}$$
        </p>
        <p><b>薄透镜</b>：厚度很小（\\(d\\rightarrow 0\\)）的透镜</p>
        <p><b>薄透镜焦距公式</b>：\\(\\Phi_{thin} = \\frac{1}{f_{thin}} = (n-1)(\\rho_1 - \\rho_2)\\)</p>
        
        
        <ul class="navibar">
            <li><a href="/note/optics/appliedoptics/chapter1">上一页</a></li>
            <li class="next"><a href="/note/optics/appliedoptics/chapter3">下一页</a></li>
        </ul>` },
  "note/optics/appliedoptics/chapter3": { title: "应用光学", content: `<h1>第三章 平面与平面系统</h1>

        <h2>第一节 平面镜成像</h2>
        <h3>一、平面镜成像原理</h3>
        <p><b>平面镜（平面反射镜）</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;唯一能成完善像的最简单光学元件。
            <br>
        
        <br><b>成像特点</b>：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;正立的像与物等距分布在镜面的两侧，大小相等，虚实相反，坐标系改变。又将这种像称为<b>镜像</b>。
        <br>&nbsp;&nbsp;&nbsp;&nbsp;奇数次反射成镜像，偶数次反射成一致像。</p>
        
        <h3>二、平面镜旋转特性</h3>
        <p>单平面镜旋转特性：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;当反射镜转动\\(\\theta\\)角后，入射角增加\\(\\theta\\)角，导致反射角也增大\\(\\theta\\)角，最终出射光线将同向偏移\\(2\\theta\\)角度。
            <br>&nbsp;&nbsp;&nbsp;&nbsp;（平面镜向上转\\(\\theta\\)角度，入射光线相对向下转\\(\\theta\\)角度，法线相对向上转\\(\\theta\\)角度。）
            <br>
            <img src="./img/4.1.2.1.png" width="450">
        </p>
        <p>光学杠杆：
            <br>
            <br>微小角度测量：
            $$\\theta \\approx \\tan\\theta = x/a$$
            <br>微小位移测量：
            $$y = f'\\tan2\\theta \\approx 2f'\\theta$$
            $$y = (2f'/a)x = Kx$$
            其中\\(K\\)为光学杠杆的放大倍数
        </p>
        <h3>双平面镜成像</h3>
        <p>成像特点：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;设两个平面镜夹角为\\(\\alpha\\)，出射光线与入射光线延长线夹角为\\(\\beta\\)，有：
            $$\\beta = 2\\alpha$$
            即出射光线与入射光线的夹角与入射角无关，仅取决于双面镜夹角\\(\\alpha\\)。
            <br>
            <br>旋转特性：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;当入射光线的方向一定时，若双面镜夹角不变，其绕棱边旋转时出射光线方向始终不变。

        </p>
    
        <h2>第二节 平行平板</h2>
        <h3>一、平行平板成像特性</h3>
        <p><b>平行平板</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;由两个相互平行的折射平面构成的光学元件。
            <br>&nbsp;&nbsp;&nbsp;&nbsp;如分划板、测微平板、保护玻璃、载玻片、盖玻片、滤光片等。
            <br>
            <br><b>平行平板成像特点</b>：
        <br>1、光线经平行平板折射后传播方向不变。
        $$ \\begin{cases}
            n_1\\sin I_1 = n_1' \\sin I_1'\\\\
            n_2\\sin I_2 = n_2' \\sin I_2' 
           \\end{cases}
        $$
        $$ \\because n_1=n_2' = 1, n_1' = n_2 = n, I_1' = I_2$$
        $$ \\therefore I_2' = I_1, U_2' = U_1 $$
        <br>2、平行平板是个无光焦度的光学元件，不会使物体放大或缩小，在光学系统中对总光焦度无贡献。
        $$ \\gamma = \\frac{\\tan U_2'}{\\tan U_1} = 1 $$
        $$ \\beta = \\frac{n'}{n}\\gamma = 1 $$
        $$ \\alpha = \\frac{\\beta}{\\gamma} = 1 $$
        </p>
        <p>
            出射光线与入射光线不重合，产生<b>侧向位移\\(\\Delta T = DG\\)</b>和<b>轴向位移\\(\\Delta L' = AA'\\)</b>
            $$ \\begin{align}
                \\Delta T &= DG\\\\
                         &= DE\\sin(I_1 - I_2)\\\\
                         &= \\frac{d}{\\cos I_1'}sin(I_1-I_1')\\\\
                         &= d\\sin I_1(1-\\frac{\\tan I_1'}{\\tan I_1})\\\\

                \\Delta L' &= \\frac{\\Delta T}{\\sin I_1}\\\\
                          &= d(1-\\frac{\\tan I_1'}{\\tan I_1})
               \\end{align}
            $$
        </p>
        <h3>二、平行平板的等效光学系统</h3>
        <p>平行平板近轴区内细光束成像是完善的</p>
        <p>此时\\(I_1、I_1'\\)余弦值都很小，其余弦值都可近似为1。
        <br>轴向位移：
        $$ \\begin{align}
            \\Delta l' &= d(1-\\frac{\\tan I_1'}{\\tan I_1})\\\\
                      &= d(1-\\frac{\\cos I_1}{n\\cos I_1'})\\\\
                      &= d(1-\\frac{1}{n})
            \\end{align}$$
        </p>

        <h2>第三节 反射棱镜</h2>
        <h3>一、反射棱镜的类型</h3>
        <p><b>反射棱镜</b>：将一个或多个反射面磨制在同一块玻璃上形成的光学元件</p>
        <p>作用：
            <ul>
                <li>折转、折叠光路</li>
                <li>改变光轴方向</li>
                <li>改变出射像的坐标（转像）</li>
                <li>扫描</li>
            </ul>
            原理：反射或全反射原理
        </p>
        <p>结构：
            <ul>
                <li>工作面：</li>
                <ul>
                    <li>折射面：<ul><li>入射面：光线射入棱镜的平面</li>
                        <li>出射面：光线射出棱镜的平面</li>
                        </ul></li>
                    <li>反射面：光线发生反射的平面</li>
                </ul>
                <li>棱：工作面的交线</li>
                <li>光轴：光学系统的光轴在棱镜中的部分</li>
                <li>主截面（光轴截面）：垂直于棱且与光轴重合的平面</li>
            </ul>
        </p>
        <p>类型：
            <ul>
                <li>简单棱镜：所有的工作面均与工作面相垂直的棱镜，它只含有一个主截面且由一块玻璃磨制而成</li>
                <ul>
                    <li>一次反射简单棱镜：光在棱镜中只历经一次反射，成镜像</li>
                    <ul>
                        <li>一次反射式等腰直角棱镜DI-90°</li>
                        <li><b>道威棱镜</b></li>
                        <li>等腰棱镜DI-45°</li>
                    </ul>
                    <li>二次反射简单棱镜：光在棱镜中先后历经两次反射，成一致像</li>
                    <ul>
                        <li>斜方棱镜</li>
                        <li>半五角棱镜</li>
                        <li>五角棱镜</li>
                        <li>二次反射式简单棱镜</li>
                    </ul>
                    <li>三次反射简单棱镜</li>
                    <ul>
                        <li>列曼棱镜</li>
                        <li>等腰棱镜DIII-180°</li>
                        <li>斯密特棱镜</li>
                    </ul>
                </ul>
                <li>屋脊棱镜：把简单棱镜的一个反射面用两个互相垂直的反射面来替代的棱镜。互相垂直的两反射面交线应平行于反射面且在主截面内。</li>
                <i>屋脊面作用：在不改变光轴方向和主截面内成像方向的条件下，增加一次反射，从而达到物像相似的目的</i>
                <ul>
                    <li>屋脊五棱镜</li>
                    <li>列曼屋脊棱镜</li>
                    <li>斯密特屋脊棱镜</li>
                </ul>
                <i>当用平面图表示屋脊棱镜时，其屋脊面常用两条平行线加以表示</i>
                <li>立方角锥棱镜</li>
                <ul>
                    <li>空心角锥棱镜：将三个等腰直角三角形的金属反射镜胶合在一起，且反射面向内。</li>
                </ul>
                <li>复合棱镜：两块及两块以上棱镜组合而成的棱镜系统。</li>
                <ul>
                    <li>析光棱镜</li>
                    <li>普罗Ⅰ型棱镜</li>
                    <li>普罗Ⅱ型棱镜</li>
                    <li>别汉屋脊棱镜</li>
                </ul>
            </ul>
        </p>

        <p><b>道威棱镜</b>：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;由直角棱镜去掉多余的直角部分而成。
        <br>
        <br>特点：
        <ul>
            <li>出射光轴与入射光轴方向不变</li>
            <li>当其绕光轴旋转\\(\\alpha\\)角度时，反射像同方向旋转\\(2\\alpha\\)角度。</li>
            <li>由于道威棱镜入射面和出射面与光轴均不垂直，故道威棱镜仅适用于平行光路中。</li>
        </ul>
        应用：
        <ul>
            <li>周视瞄准仪光学系统</li>
        </ul>
        </p>
        <hr>
        <p id="cube"><b>立方角锥棱镜</b>：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;由立方体切下一角形成
        <br>结构特点：
        <ul>
            <li>反射面：三个相互垂直的等腰直角三角形。</li>
            <li>入射面与出射面：等边三角形底面</li>
        </ul>
        作用特点：
        <ul>
            <li>从底面以任何方向射入棱镜的光线依次经过三个反射面反射后，出射光线仍以与入射光线相平行的方向射出。</li>
            <li>立方角锥棱镜绕其顶点旋转时，出射光线方向不变，仅产生平行位移</li>
        </ul>
        应用：
        <ul>
            <li>用于激光谐振腔中，构成免调谐激光器。</li>
        </ul>
        </p>
        <hr><hr>
        <h3>二、棱镜系统的成像方向判断</h3>
        <p>物体经过带有棱镜或棱镜系统的像坐标结果可通过坐标判断原则加以分析判断。</p>
        <p>设物坐标为右手坐标：
            <ul>
                <b>o'z'方向</b>
                <li>沿光轴方向不变</li>
            </ul>
            <ul>
                <b>o'y'方向（判断屋脊面个数）</b>
                <li>屋脊面个数为奇数：o'y'与oy反向</li>
                <li>屋脊面个数为偶数：o'y'与oy同向</li>
            </ul>
            <ul>
                <b>o'x'方向（判断反射次数）</b>
                <li>反射次数为奇数：o'x'方向由左手坐标系确定</li>
                <li>反射次数为偶数：o'x'方向由右手坐标系确定</li>
                <i>若系统中存在屋脊面，在统计反射次数时每一个屋脊面应按两次反射进行计数。</i>
            </ul>
        </p>
        <hr>
        <h3>三、反射棱镜的等效作用与展开</h3>
        <p>反射棱镜展开：用一块平行平板取代棱镜的过程，当光线垂直入射到棱镜时，将以直线而不是折线经过平行平板玻璃。</p>
        <p>反射棱镜展开的方法：在棱镜的主截面内按照反射面的顺序，以反射面与主截面的交线为轴，依次使主截面翻转180°，从而得到棱镜的等效平行平板。</p>
        <i>理论上所有反射棱镜均可展开成入射面与出射面严格平行的等效玻璃平板，但实际上由于棱镜本身存在着一定的加工误差，实际棱镜展开后入射面与出射面间并不严格平行。</i>
        <P><b>反射棱镜的光学不平行度</b>：光线在出射前与出射面的法线方向之间存在的夹角。</P>
        <p>反射棱镜的光轴长度计算：等效平行平板的厚度即为棱镜的展开长度L，设棱镜的通光口径为D，L=KD。其中，K为棱镜的结构参数，其只与棱镜的类型有关，而与棱镜的尺寸无关。</p>
    
        <ul class="navibar">
            <li><a href="/note/optics/appliedoptics/chapter2">上一页</a></li>
            <li class="next"><a href="/note/optics/appliedoptics/chapter4">下一页</a></li>
        </ul>` },
  "note/optics/appliedoptics/chapter7": { title: "应用光学", content: `<h1>第七章 典型光学系统</h1>
    <h2>第一节 人眼</h2>

    <p>眼睛：由内至外折射率逐渐减小
        <br>光线经角膜折射后进入虹彩（瞳孔），由水晶体聚焦在视网膜上，形成倒立实像，经大脑神经处理后给人正立的感官
    </p>
    <p>人眼的入瞳为眼瞳</p>
    <p>瞳孔是人眼的可变光阑，在2-8mm范围内进行大小的改变</p>
    <p>平均折射率为1.4的水晶体受周围肌肉调节，能改变水晶体的曲率半径，从而改变人眼的焦距，使不同距离物体分别成像在视网膜上</p>
    <p>由于虹彩的存在，具有自适应能力，根据物体的亮暗，瞳孔直径自动调节可以实现2到8mm的变化，以调节进入人眼光能，起到自我保护的作用。</p>
    <p>人眼是一个广角镜头，可以从6至8°变化到150°，人在观察物体时眼睛会自动旋转进行目标的定位与跟踪</p>
    <p>人眼具有有限的分辨能力，受视网膜视神经细胞（\\(3\\mu m\\)）和人眼瞳孔尺寸（\\(2\\sim 8 mm\\)）的限制 </p>

    <p>小视场（焦距为\\(23mm\\)）情况下，分辨率为\\(1'\\)。光线越暗、瞳孔越大、像差越大、分辨率越低。设计时要求物体细节经目视光学系统放大后应大于或等于人眼分辨率</p>

    <p>人眼的时间分辨率一般为25帧，所以运动目标的速度大于50帧时，人眼即感觉其是连续的</p>

    <hr>
    <p></p>
<hr>

<p>
    正常眼：
    <br>&nbsp;&nbsp;&nbsp;&nbsp;眼睛的远点在无限远，眼睛光学系统的后焦点在视网膜上
    <br>
    <br>反常眼：
    <ul>
        <li>近视眼：
        </li>
        <br>
        <li>远视眼


        </li>
        <br>
        <li>老花眼
            <br>
            <br>校正：利用凸透镜的会聚作用，将近点物体发出的光线会聚，经水晶体后成像在视网膜上。

        </li>
        <br>
        <li>散光眼
            <br>
            <br>检验：用两正交的黑白线图案
            <br>校正：圆柱面或双心圆柱面透镜
        </li>
        <br>
        <li>弱视</li>
        <br>
        <li>斜视</li>
    </ul>
</p>

<p>
    <b>双目立体视觉</b>：
    <br>
    <br><b>眼睛的视觉基线\\(b\\)</b>：
    <br>&nbsp;&nbsp;&nbsp;&nbsp;两眼节点\\(J_1\\)与\\(J_2\\)的连线。
    <br>&nbsp;&nbsp;&nbsp;&nbsp;人眼两瞳孔间平均距离\\(b = 62mm\\)
    <br>
    <br><b>双目视差角\\(\\theta\\)</b>：
    <br>&nbsp;&nbsp;&nbsp;&nbsp;观察点对双目节点的张角。

    <br>&nbsp;&nbsp;&nbsp;&nbsp;若观察点到视觉基线的距离为\\(L\\)，则\\(\\theta_A = b/L\\)
    <br>
    <br><b>视差（立体视差）\\(\\Delta \\theta\\)</b>：
    <br>&nbsp;&nbsp;&nbsp;&nbsp;不同距离物体所对应的不同视差角间的差异。
    <br>
    <br><b>体视锐度\\(\\Delta \\theta_{min}\\)</b>：
    <br>&nbsp;&nbsp;&nbsp;&nbsp;人眼能感觉到的视差最小值。
    <br>&nbsp;&nbsp;&nbsp;&nbsp;\\(\\Delta \\theta_{min}\\)约为\\(10''\\)，经训练可达\\(5''\\)或\\(3''\\)。
    <br>
    <br><b>立体视觉半径\\(L_{max}\\)</b>：
    <br>&nbsp;&nbsp;&nbsp;&nbsp;立体视觉半径以外的物体，人眼不能分辨其远近。
    
</p>


<h2>目视光学系统</h2>
<b>组成</b>
<ul>
    <li>目镜：放大镜</li>
    <li>物镜</li>
</ul>

<b>参数</b>
<ul>
    <li>出瞳距（\\(l_z'\\)）：
        <br><p>目镜像方主面与系统出瞳间的距离</p></li>
    <li>镜目距（\\(p'\\)）：
        <br><p>目镜最后一面顶点到出瞳的距离。</p>
    <ul>
        <li>一般系统：\\(p'\\leq 6mm\\)</li>
        <li>军用系统：\\(p'\\approx 6mm\\)</li>
        <li>枪瞄系统：\\(p'\\approx 40mm\\)</li>
    </ul></li>
</ul>
<img src="./img/7.1.png" width="450"><br>

<ul>
    <li>光瞳衔接原则：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;两个光学系统连用时，前面系统的出瞳与后面系统的入瞳需重合，否则会产生光束切割，即前面系统的部分成像光束将被后面系统拦截而不参与于成像。</li>
    <br><li>目视系统与人眼连用，为满足光瞳衔接原则，目视系统的出瞳应在目镜后且与人眼的瞳孔重合。</li>
</ul>

<hr>

<p>目镜：
    <ul>
        <li>参数：
            <ul>
                <li>焦距：
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;焦距与目镜视觉放大倍率成反比。
                </li>
                <li>视场角
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;目镜视场选择源于系统物方视场角，需满足
                    $$\\tan \\omega' = \\Gamma\\tan\\omega$$
                    &nbsp;&nbsp;&nbsp;&nbsp;视场角越大，像差越难校正，结构越复杂。一般目镜视场角在\\(40°\\sim 50°\\)
                </li>
                <li>相对镜目距：
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;镜目距（\\(P'\\)）是出瞳到目镜后表面的距离，相对镜目距是镜目距与目镜焦距的比值
                </li>
                <li>工作距离：
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;目镜第一个面的顶点到其物方焦平面的距离
                </li>
            </ul>
        </li>

        <li>视度调节：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;通过调节目镜与前焦平面上分划板的相对位置，实现视度调节
            <br>&nbsp;&nbsp;&nbsp;&nbsp;视度由出射光束汇聚点距离的倒数计算
            <br>&nbsp;&nbsp;&nbsp;&nbsp;未调节时，分划板准确位于目镜前焦平面上，出射视度为0D。
        </li>
    </ul>
</p>



<p>摄影物镜：
    <ul>
        <li>光学特性：
            <ul>
                <li>焦距：
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;焦距与成像尺寸成正比
                </li>
                <li>相对孔径：
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;决定摄影物镜的分辨率和像面照度
                </li>
                <li>视场角
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;视场角决定成像范围：
                    <ul>
                        <li>广角物镜：焦距短、视场角大</li>
                        <li>远摄物镜：焦距长、视场角小</li>
                    </ul>
                    &nbsp;&nbsp;&nbsp;&nbsp;物方最大视场角：
                    $$tan \\omega_{max} = y'_{max}/2f'$$
                    其中\\(y'_{max}\\)为感光元的对角线长度
                </li>
            </ul>
        </li>
    </ul>
摄影系统的分辨率：
<br>&nbsp;&nbsp;&nbsp;&nbsp;单位长度内所能分辨的黑白相间的线对数N，亦即能分辨的两点间最小距离的倒数。取决于物镜分辨率\\(N_L\\)与底片分辨率\\(N_r\\)
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;根据瑞利判据，摄影物镜的理论分辨率(\\lambda = 550nm)为\\(N_L = 1475\\frac{D}{f'}\\)
<br>&nbsp;&nbsp;&nbsp;&nbsp;像面照度与相对孔径的平方成正比
<br>&nbsp;&nbsp;&nbsp;&nbsp;为改变像面照度，一般照相物镜都利用可变光阑控制孔径光阑的大小以改变相对孔径，从而改进F数
</p>


<p>投影系统：
    <ul>
        <li>光学参数</li>
        <ul>
            <li>垂轴放大率：由银幕尺寸对图片尺寸之比</li>
            <li>视场：</li>
            <li>焦距：</li>
            <li>相对孔径：</li>
        </ul>
    </ul>
    <br>&nbsp;&nbsp;&nbsp;&nbsp;普通摄影物镜倒置使用，可用作投影系统
    照明系统：
    <br>&nbsp;&nbsp;&nbsp;&nbsp;用大孔径角和适当光源，在投影屏上获得均匀充足的照度。照度大小与光源发光强度和光源尺寸以及聚光系统的光学特性等有光
    <br>按结构形式分：
    <ul>
        <li>透射</li>
        <li>反射</li>
        <li>折反照明系统</li>
    </ul>
    按照明方式分：
    <ul>
        <li>临界照明</li>
        <li>柯勒照明</li>
    </ul>
    <br>&nbsp;&nbsp;&nbsp;&nbsp;照明系统的拉赫不变量需要大于投影成像系统的拉赫不变量
</p>


<p>显微系统：
    物镜：一次实放大
    目镜：
</p>` },
  "note/optics/appliedoptics/radiometryphotometry": { title: "应用光学", content: `<h1>辐射度学与光度学</h1>

    <table>
        <tr>
            <td></td>
            <td>辐射度学</td>
            <td>光度学</td>
        </tr>
        <tr>
            <td>研究对象</td>
            <td>电磁辐射</td>
            <td>可见光</td>
        </tr>
    </table>
    <h2>第一节 辐射量与光学量及其单位</h2>

    <h3>一、辐射量</h3>
    <table>
        <tr>
            <td class="tbgrid">名称</td>
            <td class="tbgrid">符号</td>
            <td class="tbgrid">定义</td>
            <td class="tbgrid">公式</td>
            <td class="tbgrid">单位</td>
        </tr>
        <tr>
            <td>辐射能</td>
            <td>\\(Q_e\\)</td>
            <td>以电磁辐射形式发射、传输或接收的能量</td>
            <td></td>
            <td>焦[耳]（\\(J\\)）</td>
        </tr>
        <tr>
            <td>辐[射能]通量<br>/<br>辐射功率</td>
            <td>\\(\\Phi_e\\)<br>/<br>\\(P_e\\)</td>
            <td>单位时间内发射、传输或接收的辐射能</td>
            <td>\\(\\Phi_e = \\frac{dQ}{dt}\\)</td>
            <td>瓦[特]（\\(W\\)）<br>/<br>焦[耳]/秒（\\(J/s\\)）</td>
        </tr>
        <tr>
            <td>辐[射]出[射]度</td>
            <td>\\(M_e\\)</td>
            <td>单位面积辐射源发出的辐通量</td>
            <td>\\(M_e = \\frac{d\\Phi_e}{dA}\\)</td>
            <td>瓦[特]每平方米（\\(W/m^2\\)）</td>
        </tr>
        <tr>
            <td>辐[射]照度</td>
            <td>\\(E_e\\)</td>
            <td>单位受照面上接受的辐通量</td>
            <td>\\(E_e = \\frac{d\\Phi_e}{dA}\\)</td>
            <td>瓦[特]每平方米（\\(W/m^2\\)）</td>
        </tr>
        <tr>
            <td>辐[射]强度</td>
            <td>\\(I_e\\)</td>
            <td>点辐射源在给定方向上通过单位立体角内的辐射通量</td>
            <td>\\(I_e = \\frac{d\\Phi_e}{d\\Omega}\\)</td>
            <td>瓦[特]每球面度（\\(W/sr\\)）</td>
        </tr>
        <tr>
            <td>辐[射]亮度</td>
            <td>\\(L_e\\)</td>
            <td></td>
            <td>\\(I_e = \\frac{d\\Phi_e}{d\\Omega}\\)</td>
            <td>瓦[特]每平方米（\\(W/(sr\\cdot m^2)\\)）</td>
        </tr>
    </table>

    <h3>二、光通量</h3>
    <table>
        <tr>
            <td class="tbgrid">名称</td>
            <td class="tbgrid">符号</td>
            <td class="tbgrid">定义</td>
            <td class="tbgrid">公式</td>
            <td class="tbgrid">单位</td>
        </tr>
        <tr>
            <td>光通量</td>
            <td>\\(\\Phi_V\\)</td>
            <td>标度可见光对人眼视觉刺激程度的量</td>
            <td></td>
            <td>流[明]（\\(lm\\)）</td>
        </tr>
        <tr>
            <td>光出射度</td>
            <td>\\(M_V\\)</td>
            <td>单位面积光源发出的光通量</td>
            <td>\\(M_V = \\frac{d\\Phi_V}{dA}\\)</td>
            <td>流[明]/平方米（\\(lm/m^2\\)）</td>
        </tr>
        <tr>
            <td>光照度</td>
            <td>\\(E_V\\)</td>
            <td>单位受照面积接受的光通量</td>
            <td>\\(E_V = \\frac{d\\Phi_V}{dA}\\)</td>
            <td>勒[克斯]（\\(lx\\)）</td>
        </tr>
        <tr>
            <td>发光强度</td>
            <td>\\(I_V\\)</td>
            <td>点光源在单位立体角内发出的光通量</td>
            <td>\\(I_V = \\frac{d\\Phi_V}{d\\Omega}\\)</td>
            <td>坎[德拉]（\\(cd\\)）</td>
        </tr>
        <tr>
            <td>光亮度</td>
            <td>\\(L_V\\)</td>
            <td>描述有限尺寸发光体发出的可见光在空间分布的情况</td>
            <td>\\(\\)</td>
            <td>坎[德拉]（\\(cd\\)）</td>
        </tr>
        
        
    </table>
    <ul class="navibar">
        <li><a href="/note/optics/appliedoptics/chapter4">上一页</a></li>
        <li class="next"><a href="/note/optics/appliedoptics/chapter6">下一页</a></li>
    </ul>` },
  "note/optics/appliedoptics/raytracing": { title: "应用光学", content: `<h1>光线追迹</h1>
    <img src="./img/RayTracing.png" width="400">

    <h2>实际光线</h2>
    <details>
        <summary>
            $$
            \\begin{cases}
            \\sin I = \\frac{L-r}{r}\\sin U\\\\
            \\sin I' = \\frac{n}{n'}\\sin I\\\\
            U' = U + I - I'\\\\
            L' = (1 + \\frac{\\sin I'}{\\sin U'})r
            \\end{cases}
            $$
        </summary>
            $$
            \\frac{\\sin(\\pi - I)}{-L + r} = \\frac{\\sin(-U)}{r} \\Rightarrow
            \\sin I = \\frac{L-r}{r}\\sin U
            $$
        
            $$
            n\\sin I = n'\\sin I' \\Rightarrow
            \\sin I' = \\frac{n}{n'}\\sin I
            $$
        
            $$
            \\begin{cases}
            I = -U + \\phi\\\\
            \\phi = I' + U'
            \\end{cases}\\Rightarrow
            U' = U + I - I'
            $$
        
            $$
            \\frac{\\sin I'}{L' - r} = \\frac{\\sin U'}{r} \\Rightarrow
            L' = (1 + \\frac{\\sin I'}{\\sin U'})r
            $$
    </details>


    <h2>近轴光线</h2>
    $$
    \\begin{cases}
    i = \\frac{L-r}{r}u\\\\
    i' = \\frac{n}{n'}i\\\\
    u' = u + i - i'\\\\
    l' = (1 + \\frac{i'}{u'})r
    \\end{cases}
    $$` },
  "note/optics/appliedoptics/stop": { title: "应用光学", content: `<h1>第四章 光学系统中的光阑与光束限制</h1>
<h2>第一节 光阑</h2>

<div class="Card-Definition">
    <b>光阑</b>
    <p>光学系统中，限制光束的光学元件边框、或特制的带孔金属薄片.</p>

    <table>
        <tr>
            <td rowspan="3"><b>光阑</b></td>
            <td>孔径光阑</td>
        </tr>
        <tr><td>视场光阑</td></tr>
        <tr><td>消杂光光阑</td></tr>
    </table>
</div>

<p>
<b>光学系统的成像要求</b>：
<ol>
<li>对给定的物体在给定的共轭距离上按要求的倍率成像</li>
<li>具有给定的成像范围：决定于系统的视场</li>
<li>具有一定的光度水准（有一定亮度）</li>
<li>具有一定的分辨本领，反映物体的一定细节</li>
</ol>
要求解析：
<ul>
    <li>要求1决定了系统的轴向尺寸</li>
    <li>要求2决定于系统的视场</li>
    <li>要求3、4决定于成像光束的立体角或孔径角</li>
    <li>要求2、3、4说明光学系统应对成像范围以内的物点以要求孔径角的光束成像。</li>
</ul>
</p>

<b>人眼的分辨率</b>
<p>人眼能分辨两个邻近点的能力。</p>

<b>人眼的极限分辨角（\\(\\epsilon\\)）</b>
<p>恰能分开的两个点对人眼物方节点的张角，单位为\\(rad\\)</p>
<p>分辨率与极限分辨角成反比。</p>
<ul>
    <li>\\(\\eta'\\)：视觉细胞的直径，\\(\\eta'\\approx 0.006mm\\)</li>
    <li>\\(x_j'\\)：像方节点到视网膜间的距离，\\(x_j' = f\\)，当眼睛处于放松状态时\\(f = -17.1mm\\)</li>
</ul>
$$\\eta' = x_j' \\cdot \\tan \\epsilon \\Rightarrow \\epsilon \\approx 70''$$

<b>光学系统的光束限制</b>
<p>进入系统光线的多少取决于构成光学系统的各种元件通光口径的大小及各元件的相对位置。</p>

<b>光阑</b>
<p>限制成像光束和成像范围的光学元件，不具备成像特性。</p>
<h3>一、孔径光阑</h3>
<div class="Card-Definition">
    <b>孔径光阑</b>
    <p>限制轴上物点成像光束立体角的光阑.</p>
</div>

<b>定义</b>
<p>光学系统中限制轴上物点成像光束大小的光阑。</p>

<b>孔径</b>：
<p>光学系统中描述成像光束大小的参量，物体在有限远时用孔径角\\(U\\)表示，在无穷远时用孔径高度\\(h\\)表示。</p>
<p>孔径光阑实际上限制的是成像光束立体角的大小，如果在子午面内进行分析，孔径光阑决定了轴上点发出的最大孔径角的大小，多为圆形。</p>

<br>特点：
<ul>
    <li>参与成像的光束的孔径角大小既与光阑的大小有关又与光阑的位置有关。</li>
    <li>通过适当选择光阑的位置，就能对轴外物点的成像光束进行选择，从而把偏离于理想成像的、质量较差的部分光拦截掉，最终改善成像质量。</li>
    <li>在保证成像质量的前提下，合理选取光阑的位置，能够减小系统的横向尺寸，使结构匀称。</li>
</ul>

<b>入射光瞳（入瞳）</b>：
<p>孔径光阑经过其前面的镜组在系统物空间所成的像。限制了轴上物点最大物方孔径角大小，且入瞳越大，进入系统参与成像的能量越多。</p>

<b>出射光瞳（出瞳）</b>
<p>孔径光阑经过其后面的镜组在系统像空间所成的像。限制了轴上像点最大像方孔径角大小。</p>

<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>孔径光阑既与入瞳相共轭，又与出瞳相共轭</b>，我们常<b>将出瞳看作是入瞳经过整个系统所成的像</b>。
<br>&nbsp;&nbsp;&nbsp;&nbsp;通过入瞳中心的光线必通过孔径光阑，也必通过出瞳，这条光线被称为<b>主光线</b>。
<br>&nbsp;&nbsp;&nbsp;&nbsp;入瞳、出瞳、孔径光阑对光束的限制作用是等价的。
<br>&nbsp;&nbsp;&nbsp;&nbsp;光学元件通常由许多光学元件构成，每个光学元件的外框都有可能起到限制光束的作用。
孔径光阑的判断方法：
    <ul>
    <li>当物在有限远时：将光学系统中所有光学元件的通光口径分别通过其前面的镜组成像到整个系统的物空间中，根据各像的位置和大小求出对轴上物点的张角，对轴上物点张角最小的像为光学系统的入瞳。与入瞳相共轭的元件即为孔径光阑。</li>
    <li>当物在无限远时：将光学系统中所有光学元件的通光口径分别通过其前面的镜组成像到整个系统的物空间中，则直径最小的像就是系统的入瞳。与入瞳相共轭的元件即为孔径光阑</li>
    </ul>

<hr>

<h3>二、视场光阑</h3>

<div class="Card-Definition">
    <b>视场光阑</b>
    <p>限制物平面或物空间中成像范围的光阑.</p>
    
</div>
<p>定义：
    <br>&nbsp;&nbsp;&nbsp;&nbsp;安置在物平面或像平面用以限制成像范围的光阑。
    <br>&nbsp;&nbsp;&nbsp;&nbsp;光学系统只能有一个视场光阑，视场光阑的位置与孔径将直接决定物面与像面上的成像范围。很多光学系统都是在最终的实像平面或中间过程的实像平面上专门设置视场光阑。
    <br>
    <br><b>视场</b>：
    <br>&nbsp;&nbsp;&nbsp;&nbsp;描述成像光学系统物、像平面（或空间）上的成像范围大小。
    <br>
<b>度量视场的方法</b>：
<ul>
<li><b>线视场</b>：系统对近距离物体成像时，用长度来度量视场
    <ul>
    <li>物方（全）线视场：\\(2y\\)</li>
    <li>像方（全）线视场：\\(2y'\\)</li>
    </ul>
</li>

<li><b>视场角</b>：系统对远距离物体成像时，用角度来度量视场
    <ul>
    <li>物方（全）视场角：\\(2\\omega\\)</li>
    <li>像方（全）视场角：\\(2\\omega'\\)</li>
    </ul>
    <i>半视场角\\(\\omega\\)：由光轴转向光线的夹角。</i>
</ul>
</p>
<p>
<b>入射窗</b>：
<br>&nbsp;&nbsp;&nbsp;&nbsp;视场光阑经过前面的镜组在物空间所成的像。入射窗将限制物面的成像范围（像方视场的大小），入射窗与视场光阑相共轭。
<br><b>出射窗</b>：
<br>&nbsp;&nbsp;&nbsp;&nbsp;视场光阑经过后面的镜组在像空间所成的像。出射窗将限制像面的成像范围（像方视场的大小），出射窗与视场光阑相共轭。
<br><i>可以把出射窗看作是入射窗经过整个系统所成的像。</i>
</p>

<p>判断视场光阑的方法：将光学系统中所有光学元件的通光口径分别通过其前面的镜组成像到整个系统的物空间中，根据各像的位置和大小求出对入瞳中心的张角，张角最小的像即为光学系统的入射窗。与入射窗相共轭的元件即为视场光阑。</p>
<hr>

<h3>三、渐晕光阑</h3>
<p>
定义：
<br>&nbsp;&nbsp;&nbsp;&nbsp;能产生渐晕现象的光阑
<br>
<b>渐晕</b>
<p>轴外点发出的充满入瞳的光束受到透镜通光孔径的限制而部分被遮拦，随视场增大像逐渐变暗的现象。</p>

<hr>

<h3>四、消杂光光阑</h3>
<p>定义：
    <br>&nbsp;&nbsp;&nbsp;&nbsp;能够消除因系统反射或散射产生的杂光的光阑
</p>
<hr>






<h2>第三节 望远系统中成像光束的选择</h2>


<p>
<ul>
<li>望远系统的孔径光阑大致在物镜左右，具体位置可根据尽量减少光学零件的尺寸和体积的考虑去设定。</li>
</ul>
</p>






<h2>第四节 显微系统中的光束限制与分析</h2>
<b>显微系统</b>
<ul>
    <li>孔径光阑：系统中成像光束的口径往往由<b>物镜框</b>限制。</li>
    <li>视场光阑：位于目镜物方焦平面上的<b>圆孔光阑</b>或<b>分划板框</b>限制了系统的成像范围。</li>
</ul>


<b>远心光路</b>
<p>常应用于测量显微镜中，解决调焦不准会产生精度误差的问题.</p>
<table>
    <tr>
        <td><b>物方远心光路</b></td>
        <td class="tbtext">孔径光阑位于系统像方焦平面处.</td>
        <td class="tbtext">物方主光线平行于系统光轴，主光线的会聚中心位于物方无限远处.</td>
    </tr>
    <tr>
        <td><b>像方远心光路</b></td>
        <td class="tbtext">孔径光阑位于系统物方焦平面处.</td>
        <td class="tbtext"></td>
    </tr>
</table>

<p><i>主光线是弥散斑的中心</i></p>
<ul>
    <li>：
        <br>现象：
        <p>像方主光线平行于系统光轴，主光线的会聚中心位于像方无限远处。</p>
        解决方法：
        <p>将孔径光阑放置在系统的物方焦平面处</p>
    </li>
</ul>
<p>由于系统中存在景深，使得仪器在测量过程无法确保物体像平面与分划板的刻尺面完全相重合，即存在<b>视差</b>（像平面与刻尺面不重合的现象），由于视差的存在，将产生一定的测量误差。</p>
<p>测量精度在很大程度上取决于像平面与刻尺面的不重合度，不重合程度越大其测量精度越低。</p>


<p><b>场镜：</b>
    <br>
<br>定义：
    <br>&nbsp;&nbsp;&nbsp;&nbsp;位于像面或像面附近的透镜（通常为正透镜），以改变斜光束方向，但不影响成像性质。
<br>作用：
<ul>
    <li>减少后续光学系统口径</li>
    <li>增大出瞳距</li>
</ul>
</p>




<h2>第五节 光学系统的景深</h2>

<p><b>景深\\(\\Delta\\)</b>：
<br>&nbsp;&nbsp;&nbsp;&nbsp;能在景像平面上获得清晰像的物空间深度。
<br>&nbsp;&nbsp;&nbsp;&nbsp;产生原因：像面处接收器本身不完善。
</p>
<p><b>景像平面</b>共轭平面为<b>对准平面</b></p>
<p>按照理想光学系统的共线成像理论，景像平面上的空间像，严格来讲除了对准平面上的物点能成清晰像外，其他位置的空间点在景像平面上只能成一个<b>弥散斑</b>。</p>
<p>当弥散斑对人眼的张角小于人眼的极限分辨角（约为1'）时，则人眼对图像将无不清晰的感觉，即在一定空间范围内的空间点在景像平面上可成清晰像。</p>
<p>弥散斑的大小与光学系统入瞳大小、空间点距对准平面的距离有关。</p>
<p><ul>
<li><b>远景平面</b>：能成清晰像的最远物平面</li>
<li><b>近景平面</b>：能成清晰像的最近物平面</li>
</ul></p>
<p><ul>
<li>远景深度\\(\\Delta_1\\)：远景平面与对准平面间的距离</li>
<li>近景深度\\(\\Delta_2\\)：近景平面与对准平面间的距离</li>
</ul>
$$\\Delta = \\Delta_1 + \\Delta_2$$
</p>
<p>远景平面、对准平面、近景平面到入瞳的距离分别以\\(p_1、p、p_2\\)表示，以入瞳中心点P为坐标原点。像空间对应的共轭面到出射光瞳的距离分别以\\(p_1'、p'、p_2'\\)，以出射光瞳中心P'为坐标原点。</p>


<b>相对孔径</b>：
<p>入瞳直径与系统焦距之比，\\(\\frac{D_{入}}{f'}\\)</p>

<b id="F#">光圈数（光圈系数、F数、\\( F^{\\#} \\)）</b>：
<p>相对孔径的倒数，\\(F^{\\#} = \\frac{f'}{D_{入}}\\)。中国国家标准中要求用\\(f/F^{\\#}\\)表示。</p>
<p>光圈数值越大，光圈孔径越小，镜头通光量越小。</p>

<ul class="navibar">
    <li><a href="/note/optics/appliedoptics/chapter3">上一页</a></li>
    <li class="next"><a href="/note/optics/appliedoptics/chapter5">下一页</a></li>
</ul>` },
  "note/optics/appliedoptics/temp": { title: "note/optics/appliedoptics/temp", content: `` },
  "note/optics/appliedoptics/typicalopticalsystem": { title: "应用光学", content: `<h1>典型光学系统</h1>
        <h2>人眼</h2>
        <b>分类</b>
        <table>
            <tr>
                <td colspan="2">正常眼</td>
            </tr>
            <tr>
                <td rowspan="6">反常眼</td>
                <td class="tbcontext">
                    <p>近视眼：远点位于有限距离处，在视网膜前形成焦点</p>
                    <p>度量：100度 = 1屈光度</p>
                    <p>校正：在近视眼前放一\\(f' = lr\\)的负透镜（光焦度为\\(-\\frac{度数}{100}D\\)）</p>
                </td>
            </tr>
            <tr>
                <td class="tbcontext">
                    <p>远视眼：远点位于眼后有限距离</p>
                    <p>校正：在远视眼前放一\\(f' = lr\\)的正透镜</p>
                </td>
            </tr>
            <tr>
                <td>老花眼</td>
            </tr>
            <tr>
                <td>散光眼</td>
            </tr>
            <tr>
                <td>弱视</td>
            </tr>
            <tr>
                <td>斜视</td>
            </tr>
        </table>

        <b>眼睛的调节</b>
        <p>眼睛对任意距离物体自动调焦的过程。</p>

        <b>眼睛能清晰调焦的距离</b>
        <ul>
            <li>远点距离（\\(lr\\)）</li>
            <li>近点距离（\\(lp\\)）</li>
        </ul>
        发散度（会聚度）：单位为屈光度\\(D\\)，\\(1D = 1m^{-1}\\)
        <ul>
            <li>远点发散度（视度）：\\(R = 1/lr\\)</li>
            <li>近点发散度：\\(P = 1/lp\\)</li>
        </ul>
        眼睛的调节范围（\\(\\bar A\\)）:
        $$\\bar A = R - P$$
        眼睛的明视距离：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;正常照明条件下（光照度为\\(50lx\\)），正常人眼最习惯的观察距离为\\(250mm\\)

            
        <hr>
        <hr>

        <h2>照相系统</h2>
        <b>组成</b>
        <ul>
            <li>照相镜头：对物体成像</li>
            <li>可变光阑（光圈）：改变成像光束的宽度，调节光能量以适应不同的照明条件</li>
            <li>接收器件：记录物体的像</li>
        </ul>
        
        <b>光阑设置</b>
        <ul>
            <li>孔径光阑：专设可变光阑，通常设置在镜头中间，可以认为与镜头重合</li>
            <li>视场光阑：与底片重合，感光底片边框为视场光阑</li>
        </ul>
        </p>

        <hr>
        <hr>
        <h2 id="MicroSystem">显微系统</h2>
        <b>分类</b>
        <ul>
            <li>低倍显微镜</li>
            <li>高倍显微镜</li>
            <li>测量显微镜</li>
        </ul>
        <b>组成</b>
        <ul>
            <li>物镜：一次实放大</li>
            <li>目镜：二次虚放大</li>
        </ul>
        <b>目镜放大倍率</b>
        $$\\Gamma = 250/f_e'$$
        <b>出瞳直径</b>
        $$D' = \\frac{500NA}{\\Gamma}$$
        <b>数值孔径</b>
        $$NA = n\\sin u$$
            参数：
            <ul>
                <li>视觉放大倍率：
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;人眼借助光学仪器观察物体时视网膜上的像高与用人眼直接观察物体时视网膜上的像高之比。
                    $$\\Gamma = \\frac{y_i'}{y_e'}$$
                </li>
            </ul>
            光阑设置：
            <ul>
                <li>孔径光阑：
                    <ul>
                        <li>低倍率显微镜：物镜组简单，孔径光阑为物镜框</li>
                        <li>高倍率显微镜：物镜组复杂，孔径光阑为最后一组的镜框，或特设一个光阑</li>
                        <li>测量显微镜：孔径光阑在物镜像方焦平面上</li>
                    </ul>
                </li>
                <li>视场光阑：分划板框</li>
            </ul>
            参数：
            <ul>
                <li>
                    <b>共轭距</b>
                    <p>显微物镜从物平面到像平面之间的距离。</p>
                </li>
                <li>
                    <b>机械筒长</b>
                    <p>把显微镜物镜和目镜取下后所剩的镜筒长度。</p>
                </li>
                <li>
                    <b>光学筒长</b>
                    <p>物镜像方焦点到目镜像方焦点间的距离。</p>
                </li>
            </ul>

            <b>显微镜物镜</b>
            <ul>
                <li>消色差物镜</li>
                <li>复消色差物镜</li>
                <li>平像场物镜</li>
                <li>反射式物镜</li>
                <li>折反射物镜</li>
            </ul>

            <h3>显微镜照明方式</h3>
            <ul>
                <li>透射光亮视场照明</li>
                <ul>
                    <li>临界照明</li>
                    <li>柯勒照明</li>
                </ul>
                <li>反射光亮视场照明</li>
                <li>透射光暗视场照片</li>
                <li>反射光暗视场照明</li>
            </ul>

            <b>临界照明</b>
            <p>将光源的像成在物平面上，故光源表面亮度的不均匀性会影响显微镜的观察效果。</p>
            
            
            
            
            <hr>

            <hr>
            <h2 id="TeleSystem">望远系统</h2>
            <p>
                分类：
                <ul>
                    <li>开普勒望远系统</li>
                    <li>伽利略望远系统</li>
    
                </ul>
    
                <b>开普勒望远系统</b>：
                <br>
                特点：
                <ul>
                    <li>物镜与目镜均为正透镜光组</li>
                    <li>成倒立虚像</li>
                    <li>有一个中间实像面，可以设置分划板</li>
                </ul>
                光阑设置：
                <ul>
                    <li>孔径光阑</li>
                    <li>视场光阑：分划板框</li>
                </ul>
                <hr>
                <b>伽利略望远系统</b>：
                <br>
                特点：
                <ul>
                    <li>物镜为正透镜光组，目镜为负透镜光组</li>
                    <li>成正立虚像</li>
                    <li>系统无中间实像面，不能设置分化板测量</li>
                </ul></li>
                光阑设置：
                <ul>
                    <li>孔径光阑：人眼瞳孔，同时也是出瞳</li>
                    <li>视场光阑：物镜框，同时也是入窗</li>
                </ul>
                参数：
                <br>
                1.分辨率：
                <br>&nbsp;&nbsp;&nbsp;&nbsp;望远系统的分辨率用极限分辨角\\(\\phi\\)表示，对于\\(Lm\\)远处相距\\(lm\\)的两点：
                $$\\phi = \\frac lL$$
                2.视觉放大倍率：
                $$\\Gamma = \\frac{\\tan \\omega'}{\\tan \\omega} = \\gamma = -f_o'/f_e' = -D/D' = 1/\\beta$$
                &nbsp;&nbsp;&nbsp;&nbsp;满足分辨要求的最小视觉放大率为<b>有效放大率（正常放大率）</b>
                $$\\Gamma = 1'/\\phi = D/2.3$$
                &nbsp;&nbsp;&nbsp;&nbsp;眼睛处于分辨极限条件下观察物像时会使眼睛感到疲劳，故在设计望远镜时，<b>工作放大率</b>一般取视觉放大率的2.3倍
                $$\\Gamma = D$$
                3.机械筒长：
                $$L = f_o' + f_e'$$
            </p>` },
  "note/optics/catalog": { title: "几何光学", content: `<h1>几何光学</h1>

        <h2>目录</h2>
        <div class="Catalog">
            <ul>
                <li><a href="/note/optics/electromagnetism/catalog">电磁学</a></li>
                <li><a href="/note/optics/physicaloptics/catalog">物理光学</a></li>
                <li><a href="/note/optics/appliedoptics/catalog">应用光学</a></li>
                <li><a href="/note/optics/opticalthinfilm/catalog">薄膜光学</a></li>
                <li><a href="/note/optics/laser/catalog">激光</a></li>
                <li><a href="/note/optics/optoelectronictech/catalog">光电子学</a></li>
                <li><a href="/note/optics/opticalmeasurement/catalog">光学测量</a></li>
            </ul>
        </div>` },
  "note/optics/electromagnetism/catalog": { title: "几何光学", content: `<h1>电磁学</h1>

        <h2>目录</h2>

        <div class="Catalog">
            <ul>
                <li><a href="/note/optics/electromagnetism/chapter1">电学</a></li>
                <li><a href="/note/optics/electromagnetism/chapter2">电磁感应</a></li>
                <li><a href="Gauss's Law.html" lang="en">Gauss's Law</a></li>
                <li><a href="Gauss's Law for Magnetism.html" lang="en">Gauss' Law for Megnetsim</a></li>
                <li><a href="/note/optics/electromagnetism/opticalbasis">光学基础</a></li>
            </ul>
        </div>` },
  "note/optics/electromagnetism/chapter1": { title: "电磁学", content: `<h1>电</h1>

        <h2>电荷</h2>
        <div class="Card-Property">
            <b>电荷的性质</b>
            <ul>
                <li><b>电荷守恒定律</b>：孤立系统内电荷的代数和保持不变。</li>
                <li><b>电荷量子化</b>：任何带电体所带电量都是基本电量\\(e=1.602\\times 10^{-19}\\)<span lang="en">C</span>的整数倍。</li>
                <li><b>相对论不变性</b>：电荷的电量与其运动状态无关</li>
            </ul>
        </div>

        <h2>库伦定律</h2>
        <p>真空中，两个静止的点电荷\\(Q_1\\)与\\(Q_2\\)间的相互作用力大小由同\\(Q_1\\)与\\(Q_2\\)的乘积成正比，同它们间的距离\\(r\\)的平方成反比.</p>
        <p>作用力方向沿它们的连线，同号电荷相互排斥、异号电荷相互吸引.</p>
        $$\\mathbf{F}_{12} = k\\frac{Q_1Q_2}{r^2}\\mathbf{r}_{12}$$
        $$k = \\frac{1}{4\\pi\\epsilon_0} \\approx 8.99\\times 10^9 N\\cdot m^2/C^2$$

        <div class="Card-Definition" id="epsilon">
            <table>
                <tr>
                    <td colspan="2"><b>介电常数（电容率）\\(\\epsilon\\)</b></td>
                </tr>
                <tr>
                    <td>真空中</td>
                    <td>$$\\epsilon_0 \\approx 8.8542\\times 10^{-12} C^2/N\\cdot m^2$$</td>
                </tr>
                <tr>
                    <td>各向同性均匀介质中</td>
                    <td>\\(\\epsilon\\)为常数</td>
                </tr>
                <tr>
                    <td>相对介电常数</td>
                    <td>$$\\epsilon_r = \\epsilon/\\epsilon_0$$</td>
                </tr>
            </table>
            <p>用于描述介质电学性质的量.</p>
        </div>

        <div class="Card-Definition">
            <table id="mu">
                <tr><td colspan="2"><b>磁导率</b></td></tr>
                <tr>
                    <td>真空中</td>
                    <td>$$\\mu_0$$</td>
                </tr>
                <tr>
                    <td>介质中</td>
                    <td>$\\mu$</td>
                </tr>
                <tr>
                    <td>相对磁导率</td>
                    <td>$$\\mu_r = \\mu/\\mu_0$$</td>
                </tr>
            </table>
            <p>用于描述介质磁学性质的量.</p>
        </div>


        <p>\\(\\mathbf{F}_{12}\\)表示\\(Q_1\\)给\\(Q_2\\)的力，\\(\\mathbf{r}_{12}\\)表示由\\(Q_1\\)指向\\(Q_2\\)的单位矢量.</p>
        适用条件：
        <ul>
            <li>真空（非必要）</li>
            <li>静止</li>
            <li>点电荷</li>
        </ul>
        
        
        
        静止条件的推广：
        <ul>
            <li>适用于静止电荷对运动电荷的作用</li>
            <li>不适用于运动电荷对静止电荷的作用</li>
        </ul>
        <p>这一情况说明电力不遵循牛顿第三定律（动量守恒），但系统遵循动量守恒，说明有一动量变化的第三者介入（场）</p>
        
        
        
        <h2>电场</h2>
        
        <div class="Card-Definition">
            <b>电场强度（场强）</b>
            <p>场强是一个矢量，其大小等于单位电荷在该处所受电场力的大小，方向与正电荷在该处所受电场力的方向一致.</p>
            $$\\mathbf{E} = \\frac{\\mathbf{F}}{Q_0}$$
            <p>单位：\\(V/m\\)或\\(N/C\\)</p>
            <p>一般来说，电场中空间各点的场强，其大小与方向均能不同.</p>

            <p>点电荷\\(Q\\)产生的电场中各点的场强：</p>
            $$E = k\\frac{Q}{r^2}$$
        </div>

        <div class="Card-Definition">
            <b>均匀电场</b>
            <p>电场中空间各点的场强，其大小和方向都相同.</p>
        </div>

        <div class="Card-Analysis">
            <b>电场强度叠加原理</b>
            <p>点电荷组所产生的电场在某点的场强等于各点电荷单独存在时所产生的电场在该点处场强的矢量叠加.</p>
            <div class="Formula">
                $$\\mathbf{E} = \\mathbf{E}_1 + \\mathbf{E}_2 + \\cdots + \\mathbf{E}_n$$
                <div class="Derivation">
                    <p>电场力是矢量，服从矢量叠加原理.</p>
                    <p>以\\(\\mathbf{F}_1, \\mathbf{F}_2, \\cdots, \\mathbf{F}_n\\)分别表示点电荷\\(q_1, q_2, \\cdots, q_n\\)单独存在时电场施加在空间中同一点上试探点电荷\\(q_0\\)的力.</p>
                    <p>\\(q_1, q_2, \\cdots, q_n\\)同时存在时，电场施加在试探点电荷\\(q_0\\)上的力\\(\\mathbf{F}\\)为\\(\\mathbf{F}_1, \\mathbf{F}_2, \\cdots, \\mathbf{F}_n\\)的矢量和，即：</p>
                    $$\\mathbf{F} = \\mathbf{F}_1 + \\mathbf{F}_2 + \\cdots + \\mathbf{F}_n$$
                    $$\\mathbf{E} = \\frac{\\mathbf{F}}{q_0} = \\mathbf{E}_1 + \\mathbf{E}_2 + \\cdots + \\mathbf{E}_n$$
                </div>
            </div>

        </div>

        <b>非接触作用力</b>
        <ul>
            <li>近距作用：需要媒介物且需要时间传递。媒介物即为<b>场</b></li>
            <li>超距作用：不需要媒介物且无需时间传递。</li>
        </ul>
        
        
        <b>场</b>
        <p>在一定的空间范围内，连续分布的客体。</p>
        <ul>
            <li>矢量场</li>
            <li>标量场</li>
        </ul>


        <h2>流体力学贡献</h2>
        <b>源</b>
        <p>发出场</p>

        <b>汇</b>
        <p>宣泄场，相当于负源</p>

        <b>旋</b>
        <p>矢量首尾相接构成闭合曲线</p>

        <b>通量</b>
        <p>流量，有源-正数，有汇-负数</p>


        <b>静电场的环路定理</b>
        $$\\oint_l\\mathbf{E}\\cdot\\mathrm{d}\\mathbf{l} = 0$$

        <h2>静电场中的电介质</h2>
        <b>电偶极子</b>
        <p>两个等值异号的点电荷\\(+q\\)和\\(-q\\)组成的一对点电荷系，它们之间的距离\\(l\\)比所讨论问题中涉及的距离\\(r\\)小得多。</p>
        
        <b>电偶极子的轴\\(\\mathbf{l}\\)</b>
        <p>由负电荷\\(-q\\)指向正电荷\\(+q\\)的矢径\\(\\mathbf{l}\\)</p>

        <b>电偶极矩\\(\\mathbf{p}\\)</b>
        $$\\mathbf{p} = q\\mathbf{l}$$
        
        <img src="./img/ElectricDiploe.png" width="400"><br>


        <b id="Dielectric">电介质</b>
        <p>不导电的绝缘介质，内部无可以自由移动的电荷（自由电子）。</p>

        <b>电介质的极化</b>
        <p>在外电场的作用下，电介质内的正、负电荷仍可作微观的相对移动，从而使电介质内部或表面出现带电现象。</p>
        <p>此时，总电场\\(\\mathbf{E}\\)是自由电荷电场强度\\(\\mathbf{E}_0\\)和极化电荷电场强度\\(\\mathbf{E}'\\)的叠加。</p>

        <b>极化电荷\\(q'\\)（束缚电荷）</b>
        <p>电介质极化出现的电荷。</p>

        <b>介质极化率\\(\\chi\\)</b>
        <p>对于同一点，\\(\\chi\\)为一个常数，但不同点的\\(\\chi\\)可以不同。若电介质中各点的\\(\\chi\\)相同，则该电介质为均匀电介质。</p>

        <div class="Card-Definition" id="Polarization">
            <b>极化强度\\(\\mathbf{P}\\)</b>
            <p>各向同性介质中：</p>
            $$\\mathbf{P} = \\epsilon_0\\chi\\mathbf{E}$$
        </div>

        <b>极化强度与极化电荷的关系式</b>
        $$\\oint_S\\mathbf{P}\\mathrm{d}\\mathbf{S} = -\\sum q_i'$$


        <b>电介质的击穿</b>
        <p>当外电场不太强时，只是引起电介质的极化，不会破坏电解质的绝缘性能。</p>
        <p>当外电场过强时，电介质分子中的正负电荷有可能被拉开而形成可自由移动的电荷，由于大量自由电荷的产生，电介质的绝缘性能就会遭到明显破坏而变成导体，这种现象就叫做电介质的击穿。</p>


        <b>击穿电场强度</b>
        <p>一种电介质材料能承受的不被击穿的最大电场强度。</p>


        <b>电位移矢量\\(\\mathbf{D}\\)</b>
        $$\\mathbf{D} = \\epsilon_0\\mathbf{E} + \\mathbf{P}$$
        <span class="tip">各向同性介质<span class="tiptext">$$\\mathbf{P} = \\epsilon_0\\chi\\mathbf{E}$$</span></span>中：令\\(\\epsilon_r = 1 + \\chi\\)为<b>介质的相对介电常数</b>有：
        $$\\mathbf{D} = \\epsilon_0(1 + \\chi)\\mathbf{E} = \\epsilon_0\\epsilon_r\\mathbf{E} = \\epsilon\\mathbf{E}$$



        <h2>尚不理解</h2>
        <ul>
            <li>电力可屏蔽</li>
            <li>P2 20min-22min</li>
        </ul>` },
  "note/optics/electromagnetism/chapter2": { title: "电磁学", content: `<h1>电磁感应</h1>

        <b>电磁感应现象</b>
        <p>闭合回路包围面积的磁通量发生变化时，回路中会有电流产生。</p>

        <b>感应电流</b>
        <p>电磁感应现象产生的电流，其方向由楞次定律判断。</p>

        <b>楞次定律</b>
        <p>感应电流激发的磁场，总是阻止引起感应电流的磁通量的变化。</p>

        <b>电源</b>
        <p>任何闭合回路中的电流都会消耗电能，给闭合回路中的电流提供电能的装置叫做电源。</p>
        <table>
            <tr>
                <td rowspan="2">电源</td>
                <td>正极：电势较高的一极</td>
            </tr>
            <tr>
                <td>负极：电势较低的一极</td>
            </tr>
        </table><br>

        <table>
            <tr>
                <td rowspan="2">闭合电路</td>
                <td>内电路：电源内的电路</td>
            </tr>
            <tr>
                <td>外电路：电源外的电路</td>
            </tr>
        </table>

        <b>电源电动势\\(\\epsilon\\)</b>
        <p>把单位正电荷从电源负极移动到正极时，电源中的非静电力所做的功。</p>` },
  "note/optics/electromagnetism/gauss's law for magnetism": { title: "电磁学", content: `<h1 lang="en">Gauss's Law for Magnetism</h1>


        <table>
            <tr>
                <td class="tbtitle" rowspan="2">公式</td>
                <td rowspan="2">$$\\oint_S\\mathbf{B}\\mathrm{d}\\mathbf{S} = 0$$</td>
                <td>\\(\\mathbf{B}\\)</td>
                <td>磁感强度</td>
            </tr>
            <tr>
                <td>\\(\\mathbf{S}\\)</td>
                <td>闭合曲面</td>
            </tr>

            <tr>
                <td class="tbtitle">描述</td>
                <td class="tbtext" colspan="3"><b>通过任意闭合曲面的总磁通量为0。</b></td>
            </tr>
        </table>

        <h1>证明</h1>
        <p>由于磁感线是闭合曲线，有：</p>
        <div style="text-align: center;"><img src="./img/GaussM1.png" width="200"></div>
        磁场无源有旋，磁感线穿入必穿出，穿出必穿入，故：
        $$\\oint_S\\mathbf{B}\\mathrm{d}\\mathbf{S} = 0$$

        <div class="Ending">Ending...</div>` },
  "note/optics/electromagnetism/gauss's law": { title: "电磁学", content: `<h1 lang="en">Gauss's Law</h1>


        <table>
            <tr>
                <td class="tbtitle" rowspan="3">公式</td>
                <td rowspan="3">$$\\oint_S\\mathbf{D}\\mathrm{d}\\mathbf{S} = Q$$</td>
                <td>\\(\\mathbf{D}\\)</td>
                <td>电位移矢量</td>
            </tr>
            <tr>
                <td>\\(\\mathbf{S}\\)</td>
                <td>闭合曲面</td>
            </tr>
            <tr>
                <td>\\(Q\\)</td>
                <td>闭合面内自由电荷代数和</td>
            </tr>
            <tr>
                <td class="tbtitle">描述</td>
                <td class="tbtext" colspan="3"><b>静电场中，通过任意闭合曲面的电位移通量等于闭合面内自由电荷的代数和。</b></td>
            </tr>
        </table>

        <h1>证明</h1>
        <h2>球面内点电荷</h2>
        <div style="text-align: center;"><img src="./img/Gauss1.png" width="200"></div>
        <br><br>
        <p>以点电荷\\(q\\)为中心，取任意长度\\(r\\)为半径做闭合球面\\(S\\)。在\\(S\\)上求面元d\\(S\\)，其法线\\(\\mathbf{n}\\)与面元处的电场强度\\(\\mathbf{E}\\)方向相同，故通过\\(\\mathrm{d}S\\)的电通量为：</p>
        $$\\mathrm{d}\\Phi_e = \\mathbf{E}\\mathrm{d}\\mathbf{S} = E\\cos0\\mathrm{d}S = \\frac{1}{4\\pi\\epsilon_0}\\frac{q}{r^2}\\mathrm{d}S$$
        <p>通过整个闭合球面\\(S\\)的电通量为：</p>
        $$\\Phi_e = \\oint_S\\mathrm{d}\\Phi_e = \\oint_S \\frac{1}{4\\pi\\epsilon_0}\\frac{q}{r^2}\\mathrm{d}S = \\frac{1}{4\\pi\\epsilon_0}\\frac{q}{r^2}\\cdot 4\\pi r^2 = \\frac{q}{\\epsilon_0}$$
        
        <h2>任意闭合曲面内点电荷</h2>
        <div style="text-align: center;"><img src="./img/Gauss2.png" width="200"></div>
        <p>作一任意闭合曲面\\(S'\\)包围点电荷，易知穿过\\(S'\\)的电场线根数与穿过\\(S\\)的电场线根数相等，即：</p>
        $$\\Phi_e = \\frac{q}{\\epsilon_0}$$

        <h2>任意闭合曲面外点电荷</h2>
        <div style="text-align: center;"><img src="./img/Gauss3.png" width="200"></div>
        <p>在点电荷外作一任意闭合曲面\\(S''\\)，其外部的电荷发出的电场线进入该闭合曲面的根数与穿过闭合曲面的根数相等，故闭合曲面外的点电荷对该闭合曲面上的电场强度无贡献，即：</p>
        $$\\Phi_e = \\frac{q}{\\epsilon_0} = 0$$
        <h2>任意带电系统的电场</h2>
        <p>根据场强叠加原理，有：</p>
        $$\\Phi_e = \\oint_S\\mathbf{E}\\cdot\\mathrm{d}\\mathbf{S} = \\sum\\limits_{i=1}^n\\oint_S\\mathbf{E}_i\\cdot\\mathrm{d}\\mathbf{S} = \\frac{\\sum q_i}{\\epsilon_0}$$

        <h2><a href="chapter1.html#Dielectric" class="goto">电介质</a>中</h2>
        <p>电介质中，总电场\\(\\mathbf{E}\\)是自由电荷电场强度\\(\\mathbf{E}_0\\)和极化电荷电场强度\\(\\mathbf{E}'\\)的叠加。</p>
        $$\\oint_S\\mathbf{E}\\mathrm{d}\\mathbf{S} = \\frac{1}{\\epsilon_0}(\\sum q_i + \\sum q_i')$$
        <span class="tip">$$\\because \\oint_S\\mathbf{P}\\mathrm{d}\\mathbf{S} = -\\sum q_i'$$<span class="tiptext">极化强度与极化电荷的关系式</span></span>
        $$\\therefore \\oint_S\\mathbf{D}\\mathrm{d}\\mathbf{S} = \\oint_S \\epsilon_0\\mathbf{E} + \\mathbf{P}\\mathrm{d}\\mathbf{S} = \\sum q_i = Q$$
        <p>没有介质存在时，\\(\\mathbf{D} = \\epsilon_0\\mathbf{E_0}\\)，公式依然成立。</p>
        

        <div class="Ending">Ending...</div>` },
  "note/optics/electromagnetism/maxwell": { title: "应用光学", content: `<h1><span lang="en">Maxwell</span>方程组</h1>
    <p><span lang="en">Maxwell</span>方程组由以下四个定律组成：</p>
    <ul>
        <li lang="en"><a href="Gauss's Law.html" class="goto">Gauss's Law</a></li>
        <li lang="en"><a href="Gauss's Law for Magnetism.html" class="goto">Gauss's Law for Magnetism</a></li>
        <li>法拉第电磁感应定律</li>
        <li>安培全电流定律</li>
    </ul> 
    积分形式
    $$
    \\begin{cases}
    \\iint\\limits_{闭}\\mathbf{D}\\cdot \\mathrm{d}\\mathbf{\\sigma} = Q\\\\
    \\iint\\limits_{闭}\\mathbf{B}\\cdot \\mathrm{d}\\mathbf{\\sigma} = 0\\\\
    \\oint \\mathbf{E}\\cdot \\mathrm{d}\\mathbf{l} = -\\iint \\frac{\\partial \\mathbf{B}}{\\partial t}\\mathrm{d}\\mathbf{\\sigma}\\\\
    \\oint \\mathbf{H}\\cdot \\mathrm{d}\\mathbf{l} = I + \\iint \\frac{\\partial \\mathbf{D}}{\\partial t}\\mathrm{d}\\mathbf{\\sigma}
    \\end{cases}
    $$

    参数说明
    <ul>
        <li>\\(\\mathbf{D}\\)：电感强度（电位移矢量）</li>
        <li>\\(Q\\)：闭合曲面内包含的总电荷量</li>
        <li>\\(\\mathbf{B}\\)：磁感强度</li>
        <li>\\(\\mathbf{E}\\)：电场强度</li>
        <li>\\(\\mathbf{H}\\)：磁场强度</li>
        <li>\\(I\\)：传导电流</li>
        <li>\\(\\frac{\\partial\\mathbf{B}}{\\partial t}\\)：磁场随时间的变化率</li>
        <li>\\(\\frac{\\partial \\mathbf{D}}{\\partial t}\\)：位移电流密度</li>
        <li>\\(\\iint\\frac{\\partial \\mathbf{D}}{\\partial t}\\mathrm{d}\\sigma\\)：位移电流</li>
    </ul>

    <div class="Card-Formula" id="DifferentialForm">
        <b>Maxwell方程组的微分形式</b>
        $$
        \\begin{cases}
        \\nabla\\cdot\\mathbf{D} = \\rho\\\\
        \\nabla\\cdot\\mathbf{B} = 0\\\\
        \\nabla\\times\\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial{t}}\\\\
        \\nabla\\times\\mathbf{H} = \\mathbf{j} + \\frac{\\partial \\mathbf{D}}{\\partial t}
        \\end{cases}
        $$
    </div>

    <div class="Card-Formula">
        <b>物质方程</b>
        <p>静止的各向同性（物质每一点的物理性质不随方向而改变）介质中，有：</p>
        $$\\begin{cases}
        \\mathbf{j} = \\sigma\\mathbf{E}\\\\
        \\mathbf{D} = \\epsilon\\mathbf{E}\\\\
        \\mathbf{B} = \\mu\\mathbf{H}
        \\end{cases}$$

        <ul>
            <li>\\(\\sigma\\)：电导率，各向同性均匀介质中\\(\\sigma = 0\\)</li>
            <li>\\(\\epsilon\\)：介电常数</li>
            <li>\\(\\mu\\)：磁导率，各项同性均匀介质中为常数。\\(\\mu_0 = 4\\pi\\times 10^{-7}N\\cdot s^2/C^2\\)。非磁性物质\\(\\mu = \\mu_0\\)</li>
        </ul>
    </div>

    <div class="Card-Formula">
        <b>简化Maxwell方程组</b>
        $$\\begin{cases}
        \\nabla\\cdot E  =\\frac{\\rho}{\\epsilon_0}\\\\
        \\nabla\\times E = -\\frac{\\partial B}{\\partial t}\\\\
        \\nabla\\cdot B = 0\\\\
        \\nabla\\times B = \\mu_0j_0+\\epsilon_0\\mu_0\\frac{\\partial E}{\\partial t}
        \\end{cases}$$
    </div>` },
  "note/optics/electromagnetism/opticalbasis": { title: "光学基础", content: `<h1>光学基础</h1>

        <h2>光的波粒二象性</h2>
        
        <p>光既是电磁波（波动性），又是粒子流（粒子性）。</p>
        <ul>
            <li>光在传播过程中主要表现为波动性。</li>
            <li>光与物质发生能量交换时表现为粒子性。</li>
        </ul>

        <h2>光的电磁波性质</h2>
        <b>电磁波</b>
        <p>变化的电磁场。</p>
        <p>电磁矢量以速度\\(v\\)按波动形式在介质中传播。</p>
        $$v = 1/\\sqrt{\\mu\\epsilon}$$
        <p>光本质上是一种电磁波。</p>

        <div class="Card-Definition">
            
        </div>

        <div class="Card-Definition">
            <b>光在真空中的传播速度\\(c\\)</b>
            <p>真空中电磁波的传播速度</p>
            $$c = 1/\\sqrt{\\mu_0\\epsilon_0}\\approx2.9979\\times 10^8m/s$$
            式中，\\(\\mu_0\\)为真空中的磁导率,\\(\\epsilon_0\\)为真空中的介电常数
            <p>光在介质中的传播速度都小于\\(c\\)。</p>
        </div>
    
        <div class="Card-Definition">
            <b>介质的折射率\\(n\\)</b>
            <p>电磁波在真空中的速度\\(c\\)与在不导电的均匀介质中的速度\\(v\\)之比</p>
            $$n = \\frac{c}{v}=\\frac{\\sqrt{\\mu\\epsilon}}{\\sqrt{\\mu_0\\epsilon_0}} = \\sqrt{\\mu_r\\epsilon_r}$$
            式中，相对磁导率\\(\\mu_r = \\mu/\\mu_0\\)，相对介电常数\\(\\epsilon_r = \\epsilon/\\epsilon_0\\).
        </div>
        
        <div class="Card-Definition">
            <b>光程\\(s\\)</b>
            <p>光在介质中传播的几何路径\\(l\\)与所在介质折射率\\(n\\)的乘积.</p>
            $$s = nl$$
        </div>

        <h2>光波的分类</h2>

        <table>
            <tr>
                <td></td>
                <td>紫外光</td>
                <td>可见光</td>
                <td>红外光</td>
            </tr>
            <tr>
                <td>波段</td>
                <td>\\(\\lambda\\lt 380nm\\)</td>
                <td>\\(380nm \\lt \\lambda \\lt 780nm\\)</td>
                <td>\\(\\lambda \\gt 780nm\\)</td>
            </tr>
        </table>
        <p>可见光随波长不同而引起人眼不同的颜色感觉，人眼最敏感的波段为\\(550nm\\).</p>
        <p>紫光波长短、频率大、能量高.</p>
        <p>红光波长长、频率小、能量低.</p>


        <table>
            <tr>
                <td>单色光</td>
                <td class="tbtext">具有单一波长的光，理想光源，现实中不存在。</td>
                <td class="tbtext">激光单色性良好，可近似看作单色光。</td>
            </tr>
            <tr>
                <td>复色光</td>
                <td class="tbtext">由不同单色光混合而成的光。</td>
                <td class="tbtext">太阳光由无限多种单色光组成，可见光范围内可分解为红、橙、黄、绿、青、蓝、紫七种颜色的光。</td>
            </tr>
        </table>

        <h2>光线</h2>
        <div class="Card-Definition">
            <b>光源（发光体）</b>
            <p>能够辐射光能量的物体。</p>
        </div>

        
        
        <div class="Card-Definition">
            <b>波阵面（波面）</b>
            <p>发光点发出的光波向四周传播时，某一时刻振动位相相同的点构成的等相面.</p>
        </div>

        <div class="Card-Definition">
            <b>光线</b>
            <p>各向同性均匀介质中，光线为光波的法线.</p>
        </div>

        <div class="Card-Definition">
            <b>光束</b>
            <p>与波面对应的所有光束的集合，亦即波面的法线束.</p>
        </div>

        <b>光束分类</b>
        <ul>
            <li><b>平面光束</b>：与<b>平面波</b>对应的相互平行的光束。</li>
            <li><b>同心光束</b>：与<b>球面波</b>对应的相交于球面波球心的光束</li>
            <ul>
                <li><b>会聚光束</b>：会聚于同一点的光束。</li>
                <li><b>发散光束</b>：由同一点发出的光束。</li>
            </ul>
            
            <li><b>像散光束</b>：由<b>像差</b>引起的与<b>非球面波（任意曲面波）</b>对应的光束。</li>
        </ul>` },
  "note/optics/fourieroptics/catalog": { title: "傅里叶光学", content: `<h1>傅里叶光学</h1>

        <h2>目录</h2>
        <a href="/note/optics/fourieroptics/chapter5">第五章 光学系统的频率特性</a>` },
  "note/optics/fourieroptics/chapter5": { title: "傅里叶光学", content: `<h1>第五章 光学成像系统的频率特性</h1>
        <p>光学成像系统是信息传递的系统.</p>
        <p>传统光学系统像质评价方法有<b>星点法</b>和<b>鉴别率法</b>.</p>

        <div class="Card-Definition">
            <b>CTF</b>
            <p>描述一个成像系统采用相干照明时的传递函数.</p>
            $$H_c(f_x, f_y) = \\mathcal{F}|\\widetilde{h}|$$
        </div>


        <div class="Card-Definition">
            <b>OTF</b>
            <p>描述一个成像系统采用非相干照明时的传递函数.</p>
            $$\\mathcal{H} = \\frac{\\mathcal{F}\\{h_I\\}}{\\mathcal{F}\\{h_I\\}_{f_x = f_y = 0}}$$
            $$\\mathcal{H}(f_x,f_y) = m(f_x, f_y)\\exp[j\\phi(f_x,f_y)]$$
        </div>

        <div class="Card-Definition">
            <b>MTF</b>
            <p>调制传递函数.</p>
            <p>描述系统对各频率分量对比度的传递特性.</p>
            $$m(f_x, f_y) = \\frac{|H_I(f_x,f_y)|}{H_I(0,0)}$$
        </div>

        <div class="Card-Definition">
            <b>PTF</b>
            <p>相位传递函数.</p>
            <p>描述系统对各频率分量施加的相移.</p>
        </div>

        <b>像差对CTF的影响</b>
        <p>在通频带内引入与频率有关的相位畸变，使像质变坏.</p>

        <b>像差对OTF的影响</b>
        <p>有像差的系统不仅影响输入各频率成分的对比度，也对相位产生影响.</p>
        $$\\because|\\mathcal{H}(f_x,f_y)|_{有像差}\\leq |\\mathcal{H}(f_x,f_y)|_{无像差}$$
        <p>像差会进一步降低成像质量.</p>` },
  "note/optics/laser/atomictheory": { title: "激光原理", content: `<h1>原子理论</h1>

        <p>原子系统：包括原子、离子和分子.</p>
        <p>原子系统只存在分立的能态.</p>
        <p>物质由原子、分子或离子组成.</p>
        
        <div class="Card-Definition">
            <b>原子</b>
            <p>原子由带正电的原子核及带负电的绕核运动电子组成.</p>
            <p>原子核的正电量与核外电子的负电量相等.</p>
        </div>

        <div class="Card-Definition">
            <b>电子</b>
            <p>电子一方面绕核做轨道运动，一方面本身做自旋运动.</p>
            <p>原子中电子的状态由下列四个量子数决定：</p>
            <ul>
                <li>主量子数\\(n\\)</li>
                <li>辅量子数</li>
                <li>磁量子数</li>
                <li>自旋量子数\\(s\\)</li>
            </ul>

            <p>核外电子的量子数不同，表示其运动状态不同.</p>
        </div>

        <div class="Card-Definition">
            <b>能级</b>
            <p>电子在原子系统中运动时，可以处在一系列不同的壳层状态或不同的轨道状态.</p>
            <p>电子在一系列确定的分立状态运动时，相应地有一系列分立的能量值，这些能量值通常称为电子（或原子系统）的能级，依次用\\(E_1,E_2,\\cdots,E_n\\)表示.</p>
        </div>

        <div class="Card-Definition">
            <b>基态</b>
            <p>原子处于最低的能级状态.</p>
        </div>

        <div class="Card-Definition">
            <b>激发态</b>
            <p>能量高于基态的其他能级状态.</p>
        </div>

        <div class="Card-Definition">
            <b>跃迁</b>
            <p>从一个能态到另一个能态的变化.</p>
            <p>跃迁伴随着光子的发射与吸收.</p>
        </div>

        <div class="Card-Definition">
            <b>波尔频率关系式</b>
            $$E_2 - E_1 = h\\nu_{21}$$
            <p>给出了吸收或发射辐射的波长.</p>
            <p>\\(E_2,E_1\\)是两个离散的能级，\\(\\nu_{21}\\)为频率，\\(h\\)为普朗克常量.</p>
            <p>与这一原子系统能隙相对应的是频率为\\(\\nu_{21}\\)的电磁波，该电磁波能与原子系统相互作用.</p>
        </div>` },
  "note/optics/laser/catalog": { title: "激光", content: `<h1>激光</h1>

        <h2>目录</h2>

        <div class="Catalog">
            <ul>
                <li><a href="/note/optics/laser/laserintroduction">激光概论</a></li>
                <li><a href="/note/optics/laser/lightmatterinteraction">光与物质的相互作用过程</a></li>
                <li><a href="/note/optics/laser/lightamplificationcondition">光放大条件</a></li>
                <li><a href="/note/optics/laser/chapter2">第二章 激光的物理学基础</a></li>
                <li><a href="/note/optics/laser/chapter3">第三章 激光器的工作原理</a></li>
                <li><a href="/note/optics/laser/laserproperties">激光性质</a></li>
                <li><a href="/note/optics/laser/stabilitycondition">共轴球面腔的稳定性条件</a></li>
                <li><a href="/note/optics/laser/gaussbeam">高斯光束</a></li>
                <li><a href="/note/optics/laser/resonator">光学谐振腔</a></li>
                <li><a href="/note/optics/laser/chapter4">第四章 光学谐振腔的模式</a></li>
                <li><a href="/note/optics/laser/chapter5">第五章 光场与物质的相互作用</a></li>
                <li><a href="/note/optics/laser/chapter6">光谱线增宽</a></li>
                <li><a href="/note/optics/laser/chapter7">激光技术</a></li>
                <li><a href="/note/optics/laser/chapter8">第八章 激光调制技术</a></li>
                <li><a href="/note/optics/laser/q-swicthing">调Q技术</a></li>
                <li><a href="/note/optics/laser/rateequation">速率方程理论</a></li>
                <li><a href="/note/optics/laser/atomictheory">原子理论</a></li>
                <li><a href="/note/optics/laser/solidlaser">固体激光器</a></li>
                <li><a href="/note/optics/laser/solidlasermaterial">固体激光材料</a></li>
                <li><a href="/note/optics/laser/ld">LD</a></li>
            </ul>
            
        </div>` },
  "note/optics/laser/chapter0": { title: "激光原理", content: `<h1>第一章 激光概论</h1>

        <div class="PageCatalog">
            <ul>
                <li><a href="#Laser">激光的概念</a></li>
                <li><a href="#LaserProperty">激光的性质</a></li>
            </ul>
        </div>

        <table>
            <thead><tr>
                <td class="tbtitle" colspan="4"><b>激光特性</b></td>
            </tr></thead>
            <tr>
                <td rowspan="7">高光子简并度</td>
                <td colspan="3"><b>高方向性</b></td>
            </tr>
            <tr>
                <td colspan="3"><b>高亮度</b></td>
            </tr>
            <tr>
                <td rowspan="5">窄线宽</td>
                <td colspan="2"><b>高单色性</b></td>
            </tr>
            <tr>
                <td rowspan="3"><b>高相干性</b></td>
                <td>空间相干性</td>
            </tr>
            <tr>
                <td>时间相干性</td>
            </tr>
            <tr>
                <td>相干光强</td>
            </tr>
            </table>

        <h3>激光的空间相关性与方向性</h3>
        <p>理想平面波是完全空间相干光，其发散角为0.</p>
        <p>将光波场的空间分布分解为沿传播方向（腔轴方向）的分布\\(E(z)\\)与在垂直于传播方向的横截面上的分布\\(E(x,y)\\).</p>

        <b>光腔模式</b>
        <ul>
            <li>纵模：光腔模式的纵向（腔轴方向）光场分布.</li>
            <li>横模：光腔模式的横向光场分布.</li>
        </ul>
        <p>用TEM\\(_{mn}\\)标志不同横模的光场分布.</p>
        <ul>
            <li>TEM：表示光波是横电磁波.</li>
        </ul>

        激光原理：
        <p>光和物质相互作用产生激光的过程。</p>
        激光技术：
        <p>光和物质相互作用光特性变化的过程。</p>


        <table>
            <tr>
                <td>光电效应——光的粒子性</td>
                <td rowspan="2">光具有波粒二象性</td>
            </tr>
            <tr>
                <td>电子衍射——光的波动性</td>
            </tr>
        </table>

        <h2>激光的特性</h2>

        <p>对于中心波长为\\(\\lambda\\)（中心频率为\\(\\nu\\)）的激光器，发出谱线的线宽为\\(\\Delta\\lambda\\)（或\\(\\Delta\\nu\\)）</p>

        <h3>高单色性</h3>
        单色性表征方式：
        $$\\Delta \\nu/\\nu = \\Delta \\lambda/\\lambda$$
        $$$$
        线宽\\(\\Delta \\nu\\)和\\(\\Delta \\lambda\\)越窄，激光单色性越好。
        
        <h3>高相干性</h3>
        <b>光的相干性</b>
        <p>不同时刻、不同空间点上两个光波场的相关程度。</p>
        <p>不同空间点上、不同时刻的光波场某些特性的相关性</p>
        <table>
 
            <tr>
                <td rowspan="2">相干性</td>
                <td>空间相干性：描述垂直于光束传播方向上各点的相位关系。</td>
            </tr>
            <tr>
                <td>时间相干性：描述光束传播方向上各点的相位关系。</td>
            </tr>
        </table><br><br>
        <table>
            <tr>
                <td><b>相干体积\\(V_c\\)</b></td>
                <td>光波场都具有明显相干性的空间体积。</td>
                <td>$$V_c = A_c L_c = A_c \\tau_c c$$</td>
            </tr>
            <tr>
                <td><b>相干面积\\(A_c\\)</b></td>
                <td>垂直于光传播方向的截面。</td>
                <td></td>
            </tr>
            <tr>
                <td><b>相干长度\\(L_c\\)</b></td>
                <td>沿光的传播方向。</td>
                <td>$$L = \\lambda^2/\\Delta\\lambda$$</td>
            </tr>
            <tr>
                <td><b>相干时间\\(\\tau_c\\)</b></td>
                <td>光沿传播方向通过相干长度\\(L_c\\)所需的时间。</td>
                <td></td>
            </tr>
        </table>

        <b>横模\\(TEM_{mn}\\)</b>
        <p>用于表示激光器的横向光场分布。</p>
        <ul>
            <li>只有一个基膜\\(TEM_{00}\\)时，激光的相干性非常好。</li>
            <li>存在多个横膜（不同横膜间非相干时），相干性会降低。</li>
        </ul>
    
        <b lang="en">Conclusion</b>
        <p>相格空间体积以及一个光波模或光子态占有的空间体积都等于相干体积。</p>
        <p>属于同一状态的光子或同一模式的光波是相干的，不同状态的光子或不同模式的光波是不相干的。</p>
        

        <h3>高方向性</h3>
        <p>光束发散角越小，方向性越高。</p>
        <p>激光束的发散角主要由激光器受激辐射的机理和光学谐振腔对输出光束方向的限制所决定。</p>
        <p>激光束所能达到的最小光束发散角不能小于激光通过输出孔径的衍射极限。光腔的输出孔径为\\(D\\)时，衍射极限角度为：</p>
        $$\\theta_m\\approx \\lambda/D$$


        <h3>高亮度</h3>
        <b>光源亮度</b>
        <p>单位截面积单位立体角内包络的光功率，用于表征光源定向发光能力强弱。</p>
        $$B = \\frac{\\Delta P}{\\Delta S\\Delta \\Omega}$$
        <ul>
            <li>\\(\\Delta P\\)：光功率</li>
            <li>\\(\\Delta S\\)：光束的截面积</li>
            <li>\\(\\Delta \\Omega\\)：光束的立体角</li>
            <li>单位：\\(W/(cm^2\\cdot Sr)\\)</li>
        </ul>


        <h2>第三节 激光产生的条件</h2>

        <table>
            <tr>
                <td class="tbtitle">条件</td>
                <td class="tbtitle">解释</td>
            </tr>
            <tr>
                <td><b>增益介质（工作物质、激光介质、激活介质）</b></td>
                <td class="tbtext">为激光提供增益放大的作用，是激光产生的<b>核心条件</b>。</td>
            </tr>
            <tr>
                <td><b>外界激励（抽运或泵浦）源</b></td>
                <td class="tbtext">向增益介质提供激励（抽运或泵浦）的能量，用于破坏增益介质内部的热平衡态，使增益介质内部的激光上能级和下能级粒子数出现反转分布。</td>
            </tr>
            <tr>
                <td><b>光学谐振（共振）腔</b></td>
                <td></td>
            </tr>
        </table>


        <h3>第四节 激光器的分类</h3>
        <table>
            <tr>
                <td rowspan="7">按工作物质的物态分类</td>
                <td rowspan="4">气体激光器</td>
            </tr>
            <tr>
                <td>原子气体激光器</td>
                
            </tr>
            <tr>
                <td>分子气体激光器</td>
            </tr>
            <tr>
                <td>离子气体激光器</td>
            </tr>
            <tr>
                <td>液体激光器</td>
            </tr>
            <tr>
                <td>半导体激光器</td>
            </tr>
            <tr>
                <td>固体激光器</td>
            </tr>
        </table>` },
  "note/optics/laser/chapter2": { title: "激光原理", content: `<h1>第二章 激光的物理学基础</h1>

        <h2>第一节 光波的模式和光子的量子状态</h2>
        

        <h3>二、光波模式和光子状态</h3>
        <p>任意电磁场可看作是一系列单色平面电磁波（以<span class="tip">\\(\\mathbf{k}\\)<span class="tiptext">波矢</span></span>为标志）的线性叠加，或一系列电磁波的本征模式（或本征状态）的叠加。</p>
        <p>每个本征模式所具有的能量是量子化的，是基元能量的整数倍\\(h\\nu_l\\)；本征模式的动量是量子化的，是基元动量\\(\\hbar \\mathbf{k}\\)的整数倍。</p>
        <p>具有基元能量和基元动量的物质单元称为属于第\\(l\\)个本征模式（或状态）的光子。具有相同能量和动量的光子彼此间不可区分，因而处于同一模式（或状态）。每个模式内的光子数目是没有限制的。</p>
        <p>按量子电动力学概念，光波的模式与光子的状态是等价的.</p>


        <div class="Card-Definition">
            <b>光子简并度\\(\\bar n\\)</b>
            <ul>
                <li>处于同一相格中的光子数</li>
                <li>处于同一模式中的光子数</li>
                <li>处于同一光子态的光子数</li>
                <li>处于相干体积内的光子数</li>
            </ul>
        </div>


        <h2>第二节 光的受激辐射理论</h2>
        <h3>一、黑体辐射的普朗克公式</h3>

        <p>处于某一温度\\(T\\)下的物体能够发出和吸收电磁辐射，发出的辐射称为热辐射或温度辐射。</p>

        <b>黑体（绝对黑体）</b>
        <p>能够完全吸收任何波长电磁辐射的物质。</p>
        <p>典型的理想黑体为带有小孔的空腔。</p>

        <b>黑体辐射（平衡辐射）</b>
        <p>当黑体处于某一温度的热平衡状态下时，其吸收的辐射能量应该等于其发出的辐射能量，即黑体与辐射场之间应该处于能量（热）平衡状态。这种平衡状态导致空腔内存在完全确定的辐射场，即黑体辐射。</p>
        <p>黑体辐射是黑体温度\\(T\\)和辐射场频率\\(\\nu\\)的函数，并用单色能量密度\\(\\rho_\\nu\\)表示。</p>

        <b>单色能量密度\\(\\rho_\\nu\\)</b>
        <p>单位体积内，频率处于\\(\\nu\\)附近的单位频率间隔中的电磁辐射能量。</p>
        <p>单位\\(J\\cdot m^{-3}\\cdot s\\)</p>

        <b>玻尔兹曼统计分布</b>
        <p>描述了在温度为\\(T\\)的热平衡状态下，粒子在不同能级上的分布情况</p>
        $$n_i = n\\frac{e^{-E_i/k_bT}}{Z}$$

        <table>符号解释
            <tr>
                <td class="tbtitle">符号</td>
                <td class="tbtitle">解释</td>
            </tr>
            <tr>
                <td>$$n_i$$</td>
                <td>某能级上的粒子数</td>
            </tr>
            <tr>
                <td>$$n$$</td>
                <td>总粒子数</td>
            </tr>
        </table>


        <b>黑体辐射的普朗克公式</b>
        $$\\rho_\\nu = \\frac{8\\pi h\\nu^3}{c^3}\\frac{1}{e^{\\frac{h\\nu}{k_bT}}-1}$$
        <p>式中，玻尔兹曼常数\\(k_b = 1.38062\\times 10^{-23}\\)<span lang="en">J/K</span></p>

        <h3>二、光（辐射）与物质（原子）的相互作用</h3>
        
        <p>这三种物理过程是同时存在的.</p>
        <p>sp表示自发跃迁，st表示辐射跃迁.</p>
        <ul>
            <li>\\(n\\)：能级上单位体积内的原子总数</li>
            <li>\\(\\mathrm{d}n\\)：\\(\\mathrm{d}t\\)时间内单位体积中发生跃迁的原子总数</li>
        </ul>

        <hr>

        <div class="Card-Analysis">
            <b>能级</b>
            <p>处于不同状态的原子具有分立的能量</p>
    
            <b>基态</b>
            <p>原子处于最低能级的状态</p>
    
            <b>激发态</b>
            <p>比基态能量高的状态</p>
    
            <br>
            <p>热平衡状态下，绝大多数原子都处于基态；处于基态的原子从外界吸收能量后，将跃迁至能量较高的激发态。</p>
    
    
            <p>当原子被激发到高能级时，其在高能级上是不稳定的，将迅速跃迁至低能级；处于高能级上的原子，即使在没有任何外界作用的情况下，也可能从高能级跃迁至低能级。</p>
            <p>原子从高能级跃迁至低能级时会释放能量，在没有外界作用的情况下原子从高能级向低能级跃迁的方式有<b>自发辐射跃迁</b>和<b>无辐射跃迁</b>。</p>
    
            <b>无辐射跃迁</b>
            <p>跃迁过程中，能量以热量的形式放出。</p>
    
            <b>自发辐射跃迁</b>
            <p>跃迁过程中，能量以光辐射的形式放出，辐射出的光子能量为\\(h\\nu_{21}\\)，且满足玻尔条件。</p>
            $$h\\nu_{21} = E_2 - E_1$$        
    
            <b>激发能级的平均寿命\\(\\tau_{21}\\)</b>
            $$\\tau_{21} = \\frac{1}{A_{21}}$$

        </div>

        <h3>\\(A_{21}\\)、\\(B_{21}\\)、\\(B_{12}\\)的相互关系</h3>
        <p>在温度为\\(T\\)的热平衡态下，忽略无辐射跃迁，黑体吸收的辐射能量应等于发出的辐射能量，才能保持能量密度不变。</p>
        $$n_{2}A_{21} + n_2B_{21}\\rho_\\nu = n_1B_{12}\\rho_\\nu$$

        <p>腔内黑体辐射场与物质原子相互作用的结果应维持黑体处于温度为\\(T\\)的热平衡状态，这种热平衡状态的标志是：</p>
        <p>1、腔内存在由黑体的普朗克公式表示的热平衡黑体辐射.</p>
        <p>2、腔内物质原子数按能级分布应服从热平衡状态下的波尔兹曼分布：</p>
        $$\\frac{n_2}{n_1} = \\frac{f_2}{f_1}e^{-\\frac{E_2 - E_1}{k_bT}}$$
        <p>其中\\(f_2\\)与\\(f_1\\)分别为能级\\(E_2\\)和\\(E_1\\)的统计权重.</p>

        <h2>光子的相干性</h2>
        <p>相格空间体积\\(=\\)一个光波模式占有的空间体积\\(=\\)一个光子态占有的空间体积\\(=\\)相干体积.</p>
        <p>同态光子相干，不同态光子不相干.</p>

        <h2>受激辐射的相干性</h2>
        <p>受激辐射与自发辐射最重要的区别——相干性.</p>
        <p>自发辐射是原子在不受外界场控制情况下的自发过程，因此大量原子自发辐射场的相位呈无规则分布，因而是不相干的.</p>
        <p>受激辐射是在外界辐射场控制下的发光过程，因而各原子的受激辐射与外界辐射场具有相同的相位.</p>
        <p>激光是一种受激辐射相干光.</p>` },
  "note/optics/laser/chapter3": { title: "激光原理", content: `<h1>第三章 激光器的工作原理</h1>
        <p>普通光源在红外和可见光波段是非相干光源.</p>
        
        <h2>第一节 粒子数反转分布</h2>
        <b>二能级系统</b>
        <ul>
            <li>\\(E_1\\)：低能级（基态）</li>
            <li>\\(E_2\\)：高能级（激发态）</li>
        </ul>
        <p>假设两个原子分别处在简化而能及系统的低能级与高能级，若一个能量恰等于这两个能级能量差的光子\\(h\\nu = E_2 - E_1\\)趋近于这两个原子，即光子的频率与原子系统的两个能级共振。</p>
        <p>考虑受激辐射爱因斯坦系数与受激吸收爱因斯坦系数间的关系式</p>
        $$\\frac{g_2}{g_1}\\frac{B_{12}}{B_{21}} = 1$$
        <p>当\\(g_2 = g_1\\)时，有\\(B_{12} = B_{21}\\)，即发生受激辐射和受激吸收的概率是相同的。</p>
        <p>当物质处于热平衡状态时，各能级上的粒子数（集居数）服从玻尔兹曼统计分布</p>
        $$\\frac{n_2}{n_1} = \\frac{g_2}{g_1}e^{\\frac{-(E_2-E_1)}{KT}}$$
        <p>\\(g_2 = g_1\\)时，因\\(E_2 > E_1\\)，故\\(n_2\\lt n_1\\).</p>
        <p>即热平衡状态下，高能级集居数恒小于低能级集居数.</p>
        <p>当物质处于热平衡状态（物质与外界处于能量平衡状态）时，集居数反转是不可能的，只有当外界向物质供给能量（激励/泵浦/抽运），从而使物质处于非热平衡状态时，才可能实现集居数反转.</p>
        <p>泵浦是光放大的必要条件.</p>

        <div class="Card-Definition">
            <b>工作物质/激活物质/激光介质/增益介质</b>
            <p>处于集居数反转状态的物质.</p>
            <p>一段工作物质就是一个光放大器.</p>
        </div>

        <div class="Card-Definition">
            <b>增益系数（\\(g\\)）</b>
            <p>光通过单位长度的工作物质后光强增长的百分数.</p>
            $$g = \\frac{\\mathrm{d}I(z)}{\\mathrm{d}z}\\frac{1}{I(z)}$$
        </div>

        <div class="Card-Definition">
            <b>损耗系数（\\(\\alpha\\)）</b>
            $$\\alpha = -\\frac{\\mathrm{d}I(z)}{\\mathrm{d}z}\\frac{1}{I(z)}$$
            <p>光通过单位距离后光强衰减的百分数.</p>
        </div>
        
        <div class="Card-Definition">
            <b>激光器的振荡条件</b>
            $$g^0 \\geq \\alpha$$
        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        <h2>第二节 速率方程理论</h2>
        <h3>一、四能级系统速率方程</h3>
        <b>四能级系统</b>
        <ul>
            <li>基态\\(E_1\\)</li>
            <li>激光跃迁的下能级\\(E_2\\)</li>
            <li>激光跃迁的上能级\\(E_3\\)</li>
            <li>泵浦带（泵浦能级）\\(E_4\\)</li>
        </ul>

        符号说明
        <table>
            <tr>
                <td class="tbtitle">符号</td>
                <td class="tbtitle">解释</td>
            </tr>
            <tr>
                <td>\\(W_p\\)</td>
                <td>单位时间内基态\\(E_1\\)上的原子被泵浦抽运到泵浦带\\(E_4\\)上的概率</td>
            </tr>
            <tr>
                <td>\\(A_{41}\\)、\\(A_{32}\\)</td>
                <td>自发辐射概率</td>
            </tr>
            <tr>
                <td>\\(S_{41}\\)</td>
                <td>原子从\\(E_4\\)到\\(E_1\\)的无辐射跃迁概率</td>
            </tr>
            <tr>
                <td>\\(S_{43}\\)、\\(S_{21}\\)</td>
                <td>弛豫概率</td>
            </tr>
        </table><br>

        <b>弛豫</b>
        <p>原子从一个激发态向一个较低能级转变的过程。</p>

        <b>原子速率方程</b>
        $$
        \\begin{cases}
        \\frac{\\mathrm{d}n_1}{\\mathrm{d}t} = n_2S_{21} + 

        \\end{cases}
        $$` },
  "note/optics/laser/chapter4": { title: "激光原理", content: `<h1>光学谐振腔的模式</h1>

        <div class="Card-Analysis">
            <h2>平行平面镜腔中的驻波</h2>
            <p>激光技术中应用的谐振腔，其尺度一般大于工作波长，特别是腔的横向尺寸.</p>
            <p>如，圆形反射镜盘的半径\\(a\\gg \\lambda\\).</p>
            <p>这种情况下，对F-P腔而言，可以假设<b>均匀平面波是腔内电磁场的本征态</b>.</p>

            <div class="Card-Question">
                <p>什么叫电磁场的本征态？</p>
                <p>为什么是F-P腔？</p>
                <p>为什么均匀平面波不能作为有源F-P腔的本征模存在？</p>
                <p>什么叫有源F-P腔？</p>

                <div class="Card-AI">
                    <p>有源腔就是包含增益介质的腔，无源腔就是不包含增益介质的腔.</p>
                </div>
            </div>



            <p>严格的光腔模式理论表明：均匀平面波不能作为有源F-P腔的本征模存在.</p>
            <p>但若满足条件：</p>
            $$a \\gg \\lambda$$
            <p>更确切地说满足条件：</p>
            $$\\frac{a^2}{L\\lambda} \\gg 1$$
            <ul>
                <li>\\(a\\)：圆形反射镜片半径.</li>
                <li>\\(L\\)：腔长.</li>
                <li>\\(\\lambda\\)：激光波长.</li>
                <li>\\(\\frac{a^2}{L\\lambda}\\)：F-P腔的菲涅尔系数.</li>
            </ul>
            <p>则腔内的最低损耗模式仍可以近似为平面波.</p>

            <p>考虑均匀平面波在F-P腔中沿轴线方向往返传播的情形：</p>
            <p>当光波在腔镜上反射时，入射光波场与反射光波场将会发生干涉，多次往复反射就会发生多光束干涉.</p>
            <p>为了能在腔内形成稳定振荡，要求光场能因干涉而加强.</p>
            <p>多光束相长干涉条件：</p>
            <p>光波从某一点出发，经腔内往返一周再回到原来位置时，与初始出发光波的相位差为\\(2\\pi\\)的整数倍.</p>
            <p>若设均匀平面波在腔内往返一周时的相位滞后为\\(\\Delta\\phi\\)，则相长干涉条件可表示为：</p>
            <div class="Card-Definition">
                <b>光腔的驻波条件</b>
                $$\\Delta\\phi = \\frac{2\\pi}{\\lambda_0}2L' = q2\\pi,~q\\in\\mathbb{N}_+$$
                <ul>
                    <li>\\(\\lambda_0\\)：真空中的光波长.</li>
                    <li>\\(L'\\)：腔的光学长度.</li>
                </ul>
            </div>
            <p>当光波长与腔的光学长度满足上式时，将在腔内形成驻波.</p>
            <p>\\(L'\\)一定的情况下，有：</p>
            <div class="Card-Definition">
                <b>腔的谐振波长</b>
                $$\\lambda_{0q} = \\frac{2L'}{q}$$
            </div>
            $$L' = q\\frac{\\lambda_{0q}}{2}$$
            <p>腔内驻波的特征：达到谐振时，腔的光学长度应为半波长的整数倍.</p>
            <div class="Card-Definition">
                <b>腔的谐振频率</b>
                $$\\nu_q = \\frac{c}{\\lambda_{0q}} = q\\frac{c}{2L'}$$
            </div>
            <p>上两式即为F-P腔中沿轴向传播的平面波谐振条件.</p>
            <p>\\(L'\\)一定的谐振腔只对满足上式的光子才提供正反馈，使之达到谐振.</p>
            <p>平行平面镜腔中的谐振频率只能随正整数\\(q\\)的不同取值而取一系列分立值.</p>
        </div>

        <div class="Card-Analysis">
            <h2>平行平面镜腔中的纵模</h2>
            <p>在平行平面镜腔中，满足腔的谐振频率的沿轴线方向（纵向）形成的驻波场构成腔内电磁场的本征模式.</p>
            <b>特点</b>
            <p>在腔的横截面内，场的振幅是均匀分布的，而沿腔的轴线方向（纵向）形成驻波，驻波的波节数由\\(q\\)决定.</p>

            <div class="Card-Definition">
                <b>纵模间隔\\(\\Delta\\nu_q\\)</b>
                <p>腔内相邻两纵模的频率之差.</p>
                $$\\Delta\\nu_q = \\nu_{q+1} - \\nu_q = \\frac{c}{2L'}$$
            </div>

            <img src="Img/Delta_nu_q.jpg" alt="" width="400">


            <h3>腔的多纵模振荡</h3>

            <div class="Card-Formula">
                <b>振荡阈值条件</b>
                $$G^0 \\geq \\frac{\\delta}{l}$$

                <ul>
                    <li>\\(G^0\\)：激活介质的小信号增益系数.</li>
                    <li>\\(\\delta\\)：腔内的单程损耗.</li>
                    <li>\\(l\\)：激活介质长度.</li>
                </ul>
            </div>

            <p>既满足腔的谐振频率，又满足振荡阈值条件的模，才可能在腔内实际存在.</p>
            
            <img src="Img/Delta_nu_T.jpg" alt="" width="400">

            <p>若以\\(\\Delta\\nu_T\\)表示增益曲线高于阈值部分的频带宽度，则可能同时振荡的纵模数为：</p>
            $$N = \\left[\\frac{\\Delta\\nu_T}{\\Delta\\nu_q}\\right] + 1$$
            <p>物质的激发程度越高，\\(\\Delta\\nu_T\\)越大，能够同时振荡的纵模数越多.</p>
            <p>腔越长，\\(\\Delta\\nu_q\\)越小，能够同时振荡的纵模数越多.</p>
            <p>在利用锁模技术获得超短脉冲时，希望同时振荡的纵模数越多越好.</p>
        </div>

        <div class="Card-Analysis">
            <h2>孔阑传输线模型</h2>
            <p>使光波沿一系列同轴圆孔单向传播，以模拟在平面开腔中的往复反射.</p>
            <p>圆孔孔径等于腔镜直径.</p>
            <p>相邻圆孔距离等于腔长.</p>
        </div>
        
        <div class="Ending" id="PageEnd"></div>
        <a class="GoToBottom" href="#PageEnd">Bottom</a>` },
  "note/optics/laser/chapter5": { title: "激光原理", content: `<h1>光场与物质的相互作用</h1>

        <div class="Card-Analysis">
            <h2>光场与物质的相互作用的理论体系</h2>

            <h3>经典理论</h3>
            <p>解释物质对光的吸收、色散；以及原子自发辐射及其谱线展宽等现象.</p>

            <h3>半经典理论（兰姆理论）</h3>
            <p>对光场：采用经典理论体系的Maxwell方程组描述.</p>
            <p>对原子体系：采用量子力学描述.</p>

            <h3>量子理论</h3>
            <p>在半经典理论的基础上，将光场也量子化.</p>

            <h3>速率方程理论</h3>
        </div>

        <div class="Card-Analysis">
            <h2>谱线加宽与线型函数</h2>
            <h3>均匀加宽</h3>
            <h3>非均匀加宽</h3>
            <h3>综合加宽</h3>
        </div>

        
        <div class="Ending" id="PageEnd"></div>
        <a class="GoToBottom" href="#PageEnd">Bottom</a>` },
  "note/optics/laser/chapter6": { title: "激光原理", content: `<h1>光谱线增宽</h1>

        <div class="Card-Definition">
            <b>光谱线</b>
            <p>用于描述相对光强在不同频率上的分布.</p>

            <img src="Img/SpectralLine.jpg" alt="" width="400">

            <p>设某条光谱线总光强为\\(I_0\\)，频率\\(\\nu\\)附近单位频率间隔\\(\\mathrm{d}\\nu\\)内的光强为\\(I(\\nu)\\).</p>
            <p>则在频率\\(\\nu\\)附近单位频率间隔\\(\\mathrm{d}\\nu\\)内的相对光强为：</p>
            $$f(\\nu) = I(\\nu)/I_0$$

            <p>\\(f(\\nu)\\)表示某一谱线在单位频率间隔内的相对光强分布，称为<b>光谱线的线型函数</b>.</p>
        </div>

        <p>光谱的线型和宽度与光的时间相干性直接相关.</p>
        <p>光谱的线型和宽度对许多激光器的输出特性（激光的增益、模式、功率等）都有影响.</p>

        <p>原子发光是有限波列的单频光，因此仍有一定的频带宽度.</p>
        <div class="Card-AI">
            <p>有限波列\\(\\Rightarrow\\)有一定带宽</p>
        </div>

        <p>这意味着原子发射的不是恰好为某一频率\\(\\nu_0\\)（满足\\(h\\nu_0 = E_2 - E_1\\)）的光，而是发射频率在\\(\\nu_0\\)附近某段范围内的光.</p>

        <div class="Card-AI">
            <p>判定同一条谱线：</p>
            <p>同一对能级上发生的辐射跃迁辐射出的光对应同一条谱线</p>
            <p>e.g.从\\(E_x\\)自发辐射与受激辐射到\\(E_n\\)所发出的光对应同一谱线.</p>
        </div>

        <p>不同谱线的带宽不一定相同.</p>

        <p>对于同一个谱线而言，不同频率对应的光强相对强度不一样.</p>

        <div class="Card-Analysis">
            <h2>光谱线的性质</h2>
            <b>线型函数的归一化条件</b>
            $$\\int_{0}^{+\\infty}I(\\nu)\\mathrm{d}\\nu = I_0$$
            $$\\int_{0}^{+\\infty}f(\\nu)\\mathrm{d}\\nu = 1$$

            <b>光谱线宽度（光谱线半宽度、光谱线半值宽度）</b>
            <p>线型函数在\\(\\nu_0\\)处达到最大值，而在\\(\\nu_1\\)及\\(\\nu_2\\)处，有：</p>
            $$f(\\nu_1) = f(\\nu_2) = \\frac{1}{2}f(\\nu_0)$$
            <p>定义\\(\\Delta\\nu = \\nu_2 - \\nu_1\\)，即相对光强为最大值\\(1/2\\)处的频率间隔，为光谱线半宽度.</p>
        </div>

        
        <div class="Ending" id="PageEnd"></div>
        <a class="GoToBottom" href="#PageEnd">Bottom</a>` },
  "note/optics/laser/chapter7": { title: "激光原理", content: `<h1>激光技术</h1>

        <p>直接对激光器谐振腔的输出特性产生作用的技术：</p>
        <p>选模技术、稳频技术、调Q技术、锁模技术.</p>

        <p>独立应用于谐振腔外的技术：</p>
        <p>光束变换技术、调制技术、偏转技术.</p>

        <div class="Card-Analysis">
            <h2>激光器输出的选模</h2>
            <p>激光器输出的选模技术就是激光器选频技术.</p>

            <p>激光器输出的选模（选频）技术分为两个部分：</p>
            <ul>
                <li>对激光纵模的选取：对激光的输出频率影响较大，能够大大提高激光的相干性，称为激光的选频技术.</li>
                <li>对激光横模的选取：主要影响激光输出的光强均匀性，提高激光的亮度，一般称为选模技术.</li>
            </ul>
        </div>
        
        <div class="Ending" id="PageEnd"></div>
        <a class="GoToBottom" href="#PageEnd">Bottom</a>` },
  "note/optics/laser/chapter8": { title: "激光原理", content: `<h1>激光调制技术</h1>

        <div class="Card-Definition">
            <b>调制</b>
            <p>将信息加载于激光的过程.</p>
        </div>

        <div class="Card-Definition">
            <b>调制器</b>
            <p>用于调制激光的装置.</p>
        </div>

        <div class="Card-Definition">
            <b>载波</b>
            <p>被调制的激光</p>
        </div>

        <b>分类</b>
        <p>依据调制器与激光器的相对位置关系分：</p>
        <ul>
            <li>内调制</li>
            <li>外调制</li>
        </ul>

        <p>依据调制的性质分：</p>
        <ul>
            <li>调幅</li>
            <li>调相</li>
            <li>强度调制</li>
        </ul>

        <div class="Card-Analysis">
            <h2>振幅调制</h2>
            <div class="Card-Definition">
                <b>调幅（振幅调制，AM）</b>
            </div>

            <p>激光载波的电场强度：</p>
            $$E_c(t) = A_c\\cos(\\omega_c t + \\phi_c)$$
        </div>

        <div class="Card-Analysis">
            <h2>电光调制</h2>
            <div class="Card-Definition">
                <b>电光效应</b>
                <p>某些晶体或液体在外加电场作用下，其折射率将发生改变.</p>
            </div>
        </div>


        
        <div class="Ending" id="PageEnd"></div>
        <a class="GoToBottom" href="#PageEnd">Bottom</a>` },
  "note/optics/laser/gaussbeam": { title: "激光原理", content: `<h1>高斯光束</h1>

    <div class="PageCatalog">
        <ul>
            <li><a href="#Flag1">波动方程</a></li>
            <li><a href="#Flag2">波动方程在类透镜介质中的解</a></li>
            <li><a href="#Flag3">均匀介质中的高斯光束</a></li>
            <li><a href="#GaussBeamProperty">高斯光束基本特性</a></li>
            <li><a href="#Flag4">高斯光束通过薄透镜的传输</a></li>
        </ul>
    </div>


    <div class="Card-Analysis" id="Flag1">
        <h2>波动方程</h2>

        <p>各向同性（物质方程适用）、无电荷分布（\\(\\rho=0\\)）的介质中，<a
                href="../Electromagnetism/Maxwell.html#DifferentialForm">Maxwell方程组的微分形式</a>为：</p>
        $$\\begin{cases}
        \\nabla\\cdot(\\epsilon \\mathbf{E}) = 0\\\\
        \\nabla\\times\\mathbf{E} = -\\mu\\frac{\\partial\\mathbf{H}}{\\partial t}\\\\
        \\nabla\\times\\mathbf{H} = \\epsilon \\frac{\\partial \\mathbf{E}}{\\partial t}
        \\end{cases}$$
        <p>此处只考虑电场与物质相互作用的情况，不考虑磁场与物质相互作用（非常微弱、忽略不计）的情况.</p>
        <p>由此可得<b>波动方程（亥姆霍兹方程）</b>：</p>
        $$\\mu\\epsilon \\frac{\\partial^2\\mathbf{E}}{\\partial t^2} = \\nabla^2\\mathbf{E}$$

        <div class="Card-Question">
            <p>怎么推导的？（旋度）</p>
        </div>
    </div>

    <div class="Card-Analysis">
        <h2 id="Flag2">波动方程在类透镜介质中的解</h2>

        <p>考虑波数表示为：\\(k^2(r) = k_0^2 - k_0k_2r^2,~k_0,k_2\\in\\mathbb{Z}\\)</p>
        <ul>
            <li>\\(k_0\\)：轴线上的波数.</li>
            <li>\\(k_2\\)：与介质性质、工作条件、泵浦特性相关的常数.</li>
            <li>\\(r\\)：离轴距离.</li>
        </ul>
        <p>类透镜介质的折射率公式：</p>
        <div class="Formula">
            $$n(r) = n_0(1 - \\frac{k_2}{2k_0}r^2)$$
            <div class="Derivation">
                $$\\because k(r) = \\frac{2\\pi}{\\lambda}n(r)$$
                $$\\begin{align}
                \\therefore n(r) &= \\frac{\\lambda}{2\\pi}k(r)\\\\
                &= \\frac{\\lambda}{2\\pi}k_0\\sqrt{1 - \\frac{k_2}{k_0}r^2}
                \\end{align}$$
                $$\\because(1-x)^\\alpha = 1 - \\alpha x + o(x)$$
                $$\\therefore \\sqrt{1-\\frac{k_2}{k_0}r^2} \\approx 1 - \\frac{k_2}{2k_0}r^2$$
                $$\\therefore n(r) = \\frac{\\lambda}{2\\pi}k_0(1 - \\frac{k_2}{2k_0}r^2)$$
                <p>令\\(n_0 = \\frac{\\lambda}{2\\pi}k_0\\)，表示轴线上介质的折射率.</p>
                $$\\therefore n(r) = n_0(1 - \\frac{k_2}{2k_0}r^2)$$
            </div>
        </div>

        $$\\because r=\\sqrt{x^2 + y^2}$$
        $$\\therefore \\nabla^2 = \\nabla_r^2 +\\frac{\\partial^2}{\\partial z^2} = \\frac{\\partial^2}{\\partial r^2} +
        \\frac{1}{r}\\frac{\\partial}{\\partial r} + \\frac{\\partial^2}{\\partial z^2}$$

        <p>类透镜介质中传播的是一种近似平面波.</p>
        <p>近似平面波的表达式为：</p>
        $$E = \\phi(x,y,z)e^{-ikz}$$
        <p>其中\\(\\phi(x,y,z)\\)为修正因子，包含了相位修正与振幅修正两部分，并满足慢变近似.</p>
        <p>代入波动方程得：</p>
        $$\\nabla^2\\phi - 2ik\\phi' -kk_2\\phi r^2 = 0$$
        <p>令</p>
        $$\\phi = E_0\\exp\\left\\{-i\\left[p(z) + \\frac{k}{2q(z)}r^2\\right]\\right\\}$$
        <p>代入波动方程得：</p>
        $$-\\left[\\frac{k}{q(z)}\\right]^2r^2 - 2i\\left[\\frac{k}{q(z)}\\right] - k^2\\left[\\frac{1}{q(z)}\\right]'r^2 - 2kp'
        -kk_2r^2 = 0$$
        <p>由于方程对任意\\(r\\)均成立，因此\\(r\\)的不同次幂的系数均为\\(0\\)，则：</p>
        $$\\left\\{\\left[\\frac{k}{q(z)}\\right]^2 + k^2\\left[\\frac{1}{q(z)}\\right]' + kk_2\\right\\}r^2 +
        2i\\left[\\frac{k}{q(z)}\\right] + 2kp' = 0$$
        <p>对于\\(r^2\\)项：</p>
        $$\\left[\\frac{k}{q(z)}\\right]^2 + k^2\\left[\\frac{1}{q(z)}\\right]' + kk_2 = 0 \\Rightarrow
        \\left[\\frac{1}{q(z)}\\right]^2 + \\left[\\frac{1}{q(z)}\\right]' + \\frac{k_2}{k} = 0$$
        <p>对于\\(r^0\\)项：</p>
        $$2i\\left[\\frac{k}{q(z)}\\right] + 2kp' = 0 \\Rightarrow \\therefore p'(z) = -\\frac{i}{q(z)}$$
        <b>类透镜介质中的简化波动方程：</b>
        $$\\begin{cases}
        \\left[\\frac{1}{q(z)}\\right]^2 + \\left[\\frac{1}{q(z)}\\right]' + \\frac{k_2}{k} = 0\\\\
        p'(z) = -\\frac{i}{q(z)}
        \\end{cases}$$
        <p>第一个方程可以求出\\(q(z)\\).</p>
        <p>第二个方程可以求出\\(p(z)\\).</p>
        <p>由\\(q(z)\\)与\\(p(z)\\)可以求出\\(\\phi\\).</p>
    </div>

    <div class="Card-Analysis">
        <h2 id="Flag3">均匀介质中的高斯光束</h2>
        <p>均匀介质可以视为\\(k_2 = 0\\)时的类透镜介质.</p>

        <p>因此，均匀介质中求解简化波动方程，得：</p>
        <div class="Formula">
            $$\\begin{cases}
            q(z) = z + q_0\\\\
            p(z) = -i\\ln(1+\\frac{z}{q_0})
            \\end{cases},~q_0\\in\\mathbb{Z}$$
            <div class="Derivation">
                $$\\because k_2 = 0$$
                $$\\therefore [\\frac{1}{q(z)}]^2 + [\\frac{1}{q(z)}]' + \\frac{k_2}{k} = 0 \\Rightarrow [\\frac{1}{q(z)}]^2 +
                [\\frac{1}{q(z)}]' = 0$$
                $$令\\frac{1}{q(z)} = \\frac{S'(z)}{S(z)},~S(z)\\neq0$$
                $$\\frac{S'^2(z)}{S^2(z)} + \\frac{S''(z)S(z) - S'^2(z)}{S^2(z)} = 0$$
                $$\\therefore S''(z)S(z) = 0$$
                $$\\because S(z) \\neq 0$$
                $$\\therefore S''(z) = 0$$
                $$\\therefore S(z) = az + b,~a,b\\in\\mathbb{Z}$$
                $$\\therefore \\frac{1}{q(z)} = \\frac{a}{az + b}$$
                $$\\therefore q(z) = \\frac{az + b}{a} = z + \\frac{b}{a} = z + q_0,~q_0\\in\\mathbb{Z}$$
                $$\\because p'(z) = -\\frac{i}{q(z)} = -\\frac{i}{z+q_0}$$
                $$\\therefore p(z) = -i\\ln(1 + \\frac{z}{q_0}) + C_1, ~ C_1\\in \\mathbb{Z}$$
                <p>\\(C_1\\)不影响振幅与相位的分布，不妨设\\(C_1 = 0\\).</p>
                $$\\therefore p(z) = -i\\ln(1 + \\frac{z}{q_0})$$
            </div>
        </div>

        <p>带入\\(\\phi\\)，得：</p>
        $$\\begin{align}
        \\phi &= E_0\\exp\\left\\{-i\\left[p(z) + \\frac{k}{2q(z)}r^2\\right]\\right\\}\\\\
        &= E_0\\exp\\left\\{-i\\left[-i\\ln(1 + \\frac{z}{q_0}) + \\frac{k}{2(z+q_0)}r^2\\right]\\right\\}
        \\end{align}$$


    </div>

    <p>设：</p>
    $$q_0 = i\\frac{\\pi\\omega_0^2\\eta}{\\lambda}$$
    <p>人为定义以下参数：</p>
    $$\\omega^2(z) = \\omega_0^2\\left[1+\\left(\\frac{\\lambda z}{\\pi\\omega_0^2\\eta}\\right)^2\\right] = \\omega_0^2(1 +
    \\frac{z^2}{z_0^2})$$
    $$\\kappa(z) = \\tan^{-1}\\left(\\frac{\\lambda z}{\\pi\\omega_0^2\\eta}\\right) = \\tan^{-1}\\left(\\frac{z}{z_0}\\right)$$

    <div class="Card-Definition">
        <b>准直距离（瑞利长度）</b>
        $$z_0 = \\frac{\\pi\\omega_0^2\\eta}{\\lambda}$$
        <p>在准直距离内，高斯光束可以近似认为是平行的.</p>
    </div>

    <div class="Card-Definition" id="Gauss_R">
        <b>高斯光束等相位面的曲率半径</b>
        $$R(z) = z\\left[1 + \\left(\\frac{\\pi\\omega_0^2\\eta}{\\lambda z}\\right)^2\\right] = z\\left(1 +
        \\frac{z_0^2}{z^2}\\right)$$
    </div>

    <div class="Card-Definition">
        <b>基本高斯光束解</b>
        <p>均匀介质中波动方程的一个解.</p>
        $$\\begin{align}
        E(x,y,z) &= \\phi(x,y,z)e^{-ikz}\\\\
        &=
        \\left\\{E_0\\frac{\\omega_0}{\\omega(z)}\\exp\\left[-\\frac{r^2}{\\omega^2(z)}\\right]\\right\\}\\exp\\left\\{-i\\left[kz-\\kappa(z)+\\frac{kr^2}{2R(z)}\\right]\\right\\}
        \\end{align}$$
        <p>前一项为振幅项，后一项为相位项.</p>
    </div>

    <div class="Card-Analysis" id="GaussBeamProperty">
        <h2>均匀介质中高斯光束的基本特性</h2>
        <h3>振幅分布特性</h3>
        <p>基本高斯光束的振幅为：</p>
        $$|\\mathbf{E}| = E_0\\frac{\\omega_0}{\\omega(z)}\\exp\\left[-\\frac{r^2}{\\omega^2(z)}\\right]$$
        <p>\\(z\\)为定值时，振幅随\\(r\\)按\\(\\mu = 0\\)的<a
                href="../../Math/Probability/Distribution.html#ContinuousDistribution">高斯函数</a>规律变化.</p>

        <b>最大振幅</b>
        <p>由高斯函数，在光轴上具有最大的振幅.</p>
        $$|\\mathbf{E}|_{max} = E_0\\frac{\\omega_0}{\\omega(z)}$$

        <b>光斑半径</b>
        <p>\\(z\\)截面内，振幅下降到最大值的\\(1/e\\)时的离轴距离\\(r\\).</p>
        $$r=\\omega(z)$$
        $$\\because \\omega^2(z) = \\omega_0^2(1 + \\frac{z^2}{z_0^2})$$
        $$\\therefore \\frac{\\omega^2(z)}{\\omega_0^2} - \\frac{z^2}{z_0^2} = 1$$
        <p>即光斑半径随传播距离的变化规律为双曲线.</p>
        <p>\\(z=0\\)时\\(\\omega(z)\\)有最小值\\(\\omega_0\\)，\\(z=0\\)的位置称为高斯光束的<b>束腰位置</b>，\\(\\omega_0\\)称为高斯光束的<b>束腰半径</b>.</p>

        <hr>

        <h3 id="Gauss_R_Property">相移特性</h3>
        <p>基本高斯光束的相移特性由相位因子决定：</p>
        $$\\Phi(r,z) = k\\left[z + \\frac{r^2}{2R(z)}\\right] - \\tan^{-1}\\kappa (z)$$

        <p>将高斯光束在传输过程中的总相移与标准球面波的总相移比较.</p>
        <p>均匀球面波的等相位面曲率中心是一个固定的点，故等相位面是一系列同心球面.</p>
        <p>高斯光束的等相位面曲率中心不是固定点，随光束传播而移动.</p>

        $$R(z) = z\\left[1 + \\left(\\frac{\\pi\\omega_0^2\\eta}{\\lambda z}\\right)^2\\right] = z\\left(1 +
        \\frac{z_0^2}{z^2}\\right)$$

        <table>
            <thead>
                <td>$$z$$</td>
                <td>$$R(z)$$</td>
                <td>描述</td>
            </thead>
            <tr>
                <td>$$z=0$$</td>
                <td>$$R(z)\\rightarrow \\infty$$</td>
                <td class="tbtext">束腰处，等相位面为平面.</td>
            </tr>
            <tr>
                <td>$$z\\rightarrow \\infty$$</td>
                <td>$$R(z)\\approx z \\rightarrow \\infty$$</td>
                <td class="tbtext">离束腰无限远处，等相位面为平面，且曲率半径中心位于束腰处.</td>
            </tr>
            <tr>
                <td>$$z = \\pm z_0$$</td>
                <td>$$R_{\\min}(z) = 2z_0$$</td>
                <td class="tbtext">\\(z=z_0\\)处，等相位面曲率半径最小.</td>
            </tr>
            <tr>
                <td>$$z\\gg z_0$$</td>
                <td>$$R(z) \\approx z$$</td>
                <td class="tbtext">远场处的高斯光束可以看作为一个由\\(z=0\\)发出，半径为\\(z\\)的球面波.</td>
            </tr>
        </table>

        <hr>

        <h3>高斯光束的孔径</h3>
        <p>考虑开孔半径为\\(a\\)的圆孔，高斯光束通过半径为\\(a\\)的圆孔的功率\\(P_a\\)与总功率\\(P_\\infty\\)之比为：</p>
        $$T = \\frac{\\int_{0}^a\\int_0^{2\\pi}I(r)2\\pi r\\mathrm{d}r\\mathrm{d}\\theta}{\\int_{0}^\\infty\\int_0^{2\\pi}I(r)2\\pi
        r\\mathrm{d}r\\mathrm{d}\\theta} = 1 - \\exp\\left(-\\frac{2a^2}{\\omega^2}\\right)$$

        <div class="Card-Question">
            <p>功率的公式为什么是这个</p>
        </div>

        <table>
            <tr>
                <td>孔径半径\\(a\\)</td>
                <td>\\(1.5\\omega\\)</td>
                <td>\\(2\\omega\\)</td>
            </tr>
            <tr>
                <td>功率透过比\\(\\%\\)</td>
                <td>\\(98.89\\)</td>
                <td>\\(99.99\\)</td>
            </tr>
        </table>

        <hr>

        <h3 id="Gauss_theta">远场发散角</h3>
        <p>瑞利范围外，高斯光束迅速发散，用<b>远场发散角</b>表征这一特性.</p>
        <p>高斯光束远场发散角\\(\\theta\\)（半角）一般定义为：\\(z\\rightarrow\\infty\\)（远场时）高斯光束振幅减小到中心最大值的\\(1/e\\)处与\\(z\\)轴的夹角.</p>
        <p>实际上就是双曲线过原点的渐近线与\\(z\\)轴的夹角.</p>
        $$\\theta_{1/e} = \\lim{\\frac{\\omega(z)}{z}} = \\frac{\\lambda}{\\pi \\omega_0} = \\sqrt{\\frac{\\lambda}{\\pi f}}$$
        <p>包含在发散全角\\(2\\theta_{1/e}\\)范围内的功率占高斯光束基模光束总功率的\\(86.5\\%\\).</p>
    </div>

    <div class="Card-Analysis">
        <h2>均匀介质中的高阶高斯光束</h2>
        <p>考虑方位角的变化，即\\(\\frac{\\partial}{\\partial \\phi}\\neq 0\\)，则：</p>
        $$\\nabla^2 = \\left[\\left(\\frac{\\partial^2}{\\partial r^2} + \\frac{1}{r}\\frac{\\partial}{\\partial
        \\phi}\\right)\\right] + \\frac{\\partial^2}{\\partial z^2}$$
        <p>设波动方程的特解为：</p>
        $$E(x,y,z) =
        \\alpha\\left(\\frac{\\sqrt{2}x}{\\omega}\\right)\\beta\\left(\\frac{\\sqrt{2}y}{\\omega}\\right)\\phi(x,y,z)e^{-ikz}$$
        <p>解得：</p>
        $$\\begin{cases}
        \\alpha\\left(\\frac{\\sqrt{2}x}{\\omega}\\right) = H_m\\left(\\frac{x}{\\omega}\\right)\\\\
        \\beta\\left(\\frac{\\sqrt{2}y}{\\omega}\\right) = H_n\\left(\\frac{y}{\\omega}\\right)\\\\
        \\end{cases}$$
        <p>其中，\\(H_m\\)与\\(H_n\\)分别是\\(m\\)次与\\(n\\)次的厄米多项式.</p>
        <p>最初几项厄米多项式为：</p>
        $$\\begin{cases}
        H_0(x) = 1\\\\
        H_1(x) = 2x\\\\
        H_2(x) = 4x^2 - 2\\\\
        H_3(x) = 8x^3 - 12x
        \\end{cases}$$
        <p>最终求得：</p>
        $$E_{m,n}(x,y,z) =
        E_0\\frac{\\omega_0}{\\omega(z)}H_m\\left[\\sqrt{2}\\frac{x}{\\omega(z)}\\right]H_n\\left[\\sqrt{2}\\frac{y}{\\omega(z)}\\right]\\exp\\left\\{-\\frac{x^2+y^2}{\\omega^2(z)}
        - i\\left[\\frac{k(x^2+y^2)}{2R(z)} + kz + (m+n+1)\\kappa(z)\\right]\\right\\}$$

        <div class="Card-Question">
            <p>为什么这里的\\(\\kappa(z)\\)前是正号，我觉得应该是负号，这样\\(m=n=0\\)的时候才符合基模高斯光束解的情况.</p>
        </div>
    </div>


    <div class="Card-Analysis">
        <h2>类透镜介质中的高斯光束</h2>
        $$q(z) = \\frac{q_0\\cos\\left(\\sqrt{\\frac{k_2}{k}}z\\right) +
        \\sqrt{\\frac{k}{k_2}}\\sin\\left(\\sqrt{\\frac{k_2}{k}}z\\right)}{-q_0\\sqrt{\\frac{k_2}{k}}\\sin\\left(\\sqrt{\\frac{k_2}{k}}z\\right)+\\cos\\left(\\sqrt{\\frac{k_2}{k}}z\\right)}$$

        <div class="Card-Question">
            <p>这个东西不知道有什么意义，没写完.</p>
        </div>
    </div>

    <div class="Card-Analysis">
        <h2>高斯光束的特征参数</h2>
        <p>1、用参数\\(\\omega_0\\)（或\\(z_0\\)）及束腰位置表征高斯光束.</p>
        <p>2、用参数\\(\\omega(z)\\)与\\(R(z)\\)表征高斯光束.</p>
        <p>3、\\(q\\)参数</p>

        <div class="Card-Definition" id="Gauss_q">
            <b>\\(q\\)参数</b>
            $$\\frac{1}{q(z)} = \\frac{1}{R(z)} - i\\frac{\\lambda}{\\pi\\omega^2(z)}$$
        </div>

        $$\\begin{cases}
        \\frac{1}{R(z)} = \\mathrm{Re}\\{\\frac{1}{q(z)}\\}\\\\
        \\frac{1}{\\omega^2(z)} = -\\frac{\\pi}{\\lambda}\\mathrm{Im}\\{\\frac{1}{q(z)}\\}
        \\end{cases}$$
    </div>

    <div class="Card-Analysis">
        <h2>光束传播的ABCD定律</h2>
        <p>高斯光束在一段类透镜介质中传输一段距离后的光束参数\\(q_2\\)与入射介质处的参数\\(q_1\\)存在以下关系：</p>
        $$q_2 = \\frac{Aq_1 + B}{Cq_1 + D}$$

        <p>对于长度为\\(L\\)的一段均匀介质：</p>
        $$q_2 = \\frac{1\\cdot q_1 + L}{0\\cdot q_1 + 1} = q_1 + L$$

        <p>薄透镜：</p>
        $$q_2 = \\frac{1\\cdot q_1 + 0}{-\\frac{1}{f}\\cdot q_1 + 1} = \\frac{fq_1}{f-q_1}$$
    </div>

    <div class="Card-Analysis" id="Flag4">
        <h2>高斯光束通过薄透镜的传输</h2>
        <p>已知：入射高斯光束腰斑半径为\\(\\omega_0\\)，束腰与透镜的距离为\\(l\\)，透镜的焦距为\\(F\\).</p>
        <p>求：通过透镜后在与透镜相距\\(l_c\\)处的高斯光束参数\\(\\omega\\)和\\(R\\).</p>

        <img src="Img/GaussBeamTran.png" width="400">

        <table>
            <tr><td colspan="2"><a href="#Gauss_q" class="goto">\\(q\\)参数</a></td></tr>
            <tr>
                <td>入射高斯光束束腰处</td>
                <td>$$q_0 = i\\frac{\\pi \\omega_0^2}{\\lambda}$$</td>
            </tr>
            <tr>
                <td>出射高斯光束\\(c\\)处</td>
                <td>$$\\frac{1}{q_c} = \\frac{1}{R_c} - i\\frac{\\lambda}{\\pi\\omega_c^2}$$</td>
            </tr>
        </table>
        
        <p>从\\(q_0\\)到\\(q_c\\)经历了三个过程：</p>
        <ul>
            <li>在自由空间中传输距离为\\(l\\).</li>
            <li>通过焦距为\\(F\\)的单透镜.</li>
            <li>在自由空间中传输距离为\\(l_c\\).</li>
        </ul>
        
        <p>光学变换矩阵：</p>
        <div class="Formula">
            $$\\begin{align}
            \\mathbf{T} &= \\left[\\begin{matrix}1&l_c\\\\0&1\\end{matrix}\\right]\\left[\\begin{matrix}1&0\\\\-\\frac{1}{F}&1\\end{matrix}\\right]\\left[\\begin{matrix}1&l\\\\0&1\\end{matrix}\\right]\\\\
                       &= \\left[\\begin{matrix}1-\\frac{l_c}{F} & \\frac{Fl + Fl_c - ll_c}{F}\\\\-\\frac{1}{F}&1 - \\frac{l}{F}\\end{matrix}\\right]
            \\end{align}$$
            <div class="Derivation">
                $$\\begin{align}
                \\mathbf{T} &= \\left[\\begin{matrix}1&l_c\\\\0&1\\end{matrix}\\right]\\left[\\begin{matrix}1&0\\\\-\\frac{1}{F}&1\\end{matrix}\\right]\\left[\\begin{matrix}1&l\\\\0&1\\end{matrix}\\right]\\\\
                           &= \\left[\\begin{matrix}1 - \\frac{l_c}{F}&l_c\\\\-\\frac{1}{F}&1\\end{matrix}\\right]\\left[\\begin{matrix}1&l\\\\0&1\\end{matrix}\\right]\\\\
                           &= \\left[\\begin{matrix}1-\\frac{l_c}{F} & \\frac{Fl + Fl_c - ll_c}{F}\\\\-\\frac{1}{F}&1 - \\frac{l}{F}\\end{matrix}\\right]
                \\end{align}$$
            </div>
        </div>

        <div class="Formula">
            $$q_c = l_c - F + \\frac{F^2(F-l)}{(F-l^2) + \\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)^2} + i\\frac{F^2\\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)}{(F-l)^2 + \\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)^2}$$
            <div class="Derivation">
                $$\\begin{align}
                q_c &= \\frac{Aq_0 + B}{Cq_0 + D}\\\\
                    & = \\frac{\\left(1 - \\frac{l_c}{F}\\right)\\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)i + \\frac{Fl + Fl_c - ll_c}{F}}{-\\frac{1}{F}\\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)i + 1 - \\frac{l}{F}}
                \\end{align}$$
                $$\\because (F-l)(F-l_c) = F^2 - Fl - Fl_c + ll_c$$
                $$\\therefore Fl + Fl_c - ll_c = F^2 - (F-l)(F-l_c)$$
                <p>上下同乘\\(F\\)，得：</p>
                $$q_c = \\frac{\\left(F - l_c\\right)\\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)i + F^2 - (F-l)(F-l_c)}{-\\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)i + F - l}$$
                <p>上下同乘\\((F-l) + \\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)i\\)，得：</p>
                $$\\begin{align}
                q_c &= \\frac{-(F-l_c)\\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right) + (F-l)[F^2 - (F-l)(F-l_c)]}{(F-l)^2 + \\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)^2} + \\frac{(F-l)(F-l_c)\\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)i + [F^2 - (F-l)(F-l_c)]\\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)i}{(F-l)^2 + \\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)^2}\\\\
                    &= \\frac{-(F-l_c)\\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right) + F^2(F-l) - (F-l_c)(F-l)^2}{(F-l)^2 + \\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)^2} + i\\frac{F^2\\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)}{(F-l)^2 + \\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)^2}\\\\
                    &= l_c - F + \\frac{F^2(F-l)}{(F-l^2) + \\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)^2} + i\\frac{F^2\\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)}{(F-l)^2 + \\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)^2}
                \\end{align}$$
            </div>
        </div>

        <h3 id="Gauss_omega0_trans">高斯光束束腰传播规律</h3>
        <p>此时令\\(c\\)点取在像方束腰上，则：</p>
        $$\\begin{cases}
        l_c = l'\\\\
        \\omega_c = \\omega'
        \\end{cases}$$
        <p>由<a href="#Gauss_R_Property" class="goto">高斯光束的束腰特点</a>，有：</p>
        $$R_c\\rightarrow\\infty$$
        <div class="Formula">
            $$l_c = F - \\frac{F^2(F-l)}{(F-l)^2 + \\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)^2}$$
            <div class="Derivation">
                $$\\because \\frac{1}{R_c} = \\mathrm{Re}\\{\\frac{1}{q_c}\\} = 0$$
                $$\\therefore \\mathrm{Re}\\{q_c\\} = l_c - F + \\frac{F^2(F-l)}{(F-l)^2 + \\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)^2} = 0$$
                $$\\therefore l_c = F - \\frac{F^2(F-l)}{(F-l)^2 + \\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)^2}$$
            </div>
        </div>
        <div class="Formula">
            $$\\frac{1}{\\omega_c^2} = \\frac{1}{\\omega_0^2}\\left(1 - \\frac{l}{F}\\right)^2 + \\frac{1}{F^2}\\left(\\frac{\\pi\\omega_0}{\\lambda}\\right)^2$$
            <div class="Derivation">
                $$\\because \\frac{1}{q_c} = \\frac{1}{R_c} - i\\frac{\\lambda}{\\pi\\omega_c^2} = -i\\frac{\\lambda}{\\pi\\omega_c^2}$$
                $$\\therefore \\frac{1}{\\omega_c^2} = -\\frac{\\pi}{\\lambda}\\mathrm{Im}\\{\\frac{1}{q_c}\\}$$
                $$\\because q_c = i\\frac{F^2\\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)}{(F-l)^2 + \\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)^2}$$
                $$\\therefore \\frac{1}{q_c} = -i\\frac{(F-l)^2 + \\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)^2}{F^2\\cdot\\frac{\\pi\\omega_0^2}{\\lambda}}$$
                $$\\begin{align}\\therefore \\frac{1}{\\omega_c^2} &= \\frac{\\pi}{\\lambda}\\cdot\\frac{(F-l)^2 + \\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)^2}{F^2\\cdot\\frac{\\pi\\omega_0^2}{\\lambda}}\\\\
                                                               &= \\frac{(F-l)^2 + \\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)^2}{F^2\\cdot\\omega_0^2}\\\\
                                                               &= \\frac{1}{\\omega_0^2}\\left(1 - \\frac{l}{F}\\right)^2 + \\frac{1}{F^2}\\left(\\frac{\\pi\\omega_0}{\\lambda}\\right)^2
                \\end{align}$$
            </div>
        </div>
    </div>

    <div>
        <h2>高斯光束的聚焦</h2>
        <b>聚焦的目的</b>
        <p>缩小光斑半径，将激光束聚焦成极小的光斑，从而得到极高的功率密度与空间分辨率.</p>
    </div>

    <div class="Card-Analysis">
        <h2>高斯光束的匹配</h2>
        <b>问题的导出</b>
        <p>实践过程中，通常需要把一个激光器谐振腔所产生的高斯光束，注入到另一个谐振腔或其他光学系统中.这就涉及到了高斯光束匹配的问题.</p>

        <p>一般来讲，高斯光束注入的光学系统相当于一个稳定腔，具有确定的本征模式.</p>

        <b>不匹配的缺点</b>
        <ul>
            <li>耦合效率的降低</li>
            <li>能量的损失</li>
        </ul>

        <b>利用单透镜实现模式匹配</b>
        <p>当一个谐振腔产生的单模高斯光束入射到另一个谐振腔内时，在两腔之间适当位置插入一个适当焦距的单透镜.</p>

        <div class="Card-Question">
            <p>为什么插一个透镜就能光束匹配了？</p>
            <p>高斯光束的模的概念是什么？</p>
            <p>怎么判断两个高斯光束的模一致？</p>
        </div>

        $$l' = F + \\frac{F^2(l-F)}{(F-l)^2 + \\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)^2}$$
        $$\\therefore \\frac{l' - F}{l - F} = \\frac{F^2}{(F - l)^2 + \\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)^2}$$
        $$\\frac{1}{\\omega_0'^2} = \\frac{1}{\\omega_0^2}\\left(1 - \\frac{l}{F}\\right)^2 + \\frac{1}{F^2}\\left(\\frac{\\pi\\omega_0}{\\lambda}\\right)^2$$
        $$\\therefore \\frac{\\omega_0^2}{\\omega_0'^2} = \\frac{(F-l)^2 + \\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)^2}{F^2}$$
        $$\\therefore \\frac{\\omega_0'^2}{\\omega_0^2} = \\frac{F^2}{(F-l)^2 + \\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)^2}$$
        $$\\therefore \\frac{\\omega_0'^2}{\\omega_0^2} = \\frac{l'-F}{l - F}$$
        $$又\\because \\frac{1}{\\omega_0'^2} = \\frac{1}{\\omega_0^2}\\left(1 - \\frac{l}{F}\\right)^2 + \\frac{1}{F^2}\\left(\\frac{\\pi\\omega_0}{\\lambda}\\right)^2$$
        <p>两边同乘\\(\\omega_0'\\)，得：</p>
        $$1 = \\frac{l'-F}{l-F}\\cdot\\frac{(F-l)^2}{F^2} + \\frac{1}{F^2}\\left(\\frac{\\pi\\omega_0\\omega_0'}{\\lambda}\\right)^2$$
        $$F^2 = (l'-F)(l-F) + \\left(\\frac{\\pi\\omega_0\\omega_0'}{\\lambda}\\right)^2$$
        <p>令\\(f_0 = \\left(\\frac{\\pi\\omega_0\\omega_0'}{\\lambda}\\right)^2\\)，则：</p>
        $$F^2 - f_0^2 = (l'-F)(l-F)$$
        $$又\\because \\frac{\\omega_0'^2}{\\omega_0^2} = \\frac{l'-F}{l - F}$$
        $$\\therefore\\begin{cases}
        l'-F = \\pm\\frac{\\omega_0'}{\\omega_0}\\sqrt{F^2 - f_0^2}\\\\
        l-F = \\pm\\frac{\\omega_0}{\\omega_0'}\\sqrt{F^2 - f_0^2}
        \\end{cases}$$

        <b>case 1</b>
        <p>给定一个焦距为\\(F\\)的透镜：</p>
        <p>此时可以解出一组\\(l,l'\\).</p>
        <p>求出实数解的条件为：</p>
        $$F\\geq f_0$$

        <b>case 2</b>
        <p>两个腔的相对位置固定：</p>
        $$l_0 = l + l'$$
        <p>两式相加即可解出\\(F\\).</p>
        <p>再代回两式即可解出\\(l,l'\\).</p>
    </div>

    <div class="Card-Analysis">
        <h2>高斯光束的自再现变换</h2>
        
        <div class="Card-Definition">
            <b>高斯光束的自再现变换</b>
            <p>高斯光束通过透镜后，参数\\(\\omega_0\\)或\\(f\\)不发生改变.</p>
            <p>即高斯光束的结构不发生改变，仅光束束腰位置沿光轴平移一段距离.</p>
            $$\\begin{cases}
            \\omega_0' = \\omega_0\\\\
            l'=l
            \\end{cases}$$
        </div>

        <h3>利用薄透镜实现自再现变换</h3>
        <p>由<a href="#Gauss_omega0_trans" class="goto">高斯光束束腰传播规律</a>，有：</p>
        $$\\frac{1}{\\omega_0'^2} = \\frac{1}{\\omega_0^2}\\left(1 - \\frac{l}{F}\\right)^2 + \\frac{1}{F^2}\\left(\\frac{\\pi\\omega_0}{\\lambda}\\right)^2$$
        $$\\because \\omega_0' = \\omega_0$$
        $$\\therefore \\frac{1}{\\omega_0^2}\\left[1 - \\left(1 - \\frac{l}{F}\\right)^2\\right] = \\frac{1}{F^2}\\left(\\frac{\\pi\\omega_0}{\\lambda}\\right)^2$$
        $$\\therefore \\frac{1}{\\omega_0^2}\\frac{l}{F}\\left(2 - \\frac{l}{F}\\right) = \\frac{1}{F^2}\\left(\\frac{\\pi\\omega_0}{\\lambda}\\right)^2$$
        $$\\therefore \\frac{1}{\\omega_0^2}\\left(2Fl - l^2\\right) = \\left(\\frac{\\pi\\omega_0}{\\lambda}\\right)^2$$
        $$2Fl = \\left(\\frac{\\pi\\omega_0^2}{\\lambda}\\right)^2 + l^2$$
        $$\\begin{align}
        F &= \\frac{1}{2l}\\cdot l^2\\left[1 + \\left(\\frac{\\pi\\omega_0^2}{\\lambda l}\\right)^2\\right]\\\\
          &= \\frac{1}{2}l\\left[1 + \\left(\\frac{\\pi\\omega_0^2}{\\lambda l}\\right)^2\\right]
        \\end{align}$$

        <p><a href="#Gauss_R" class="goto">高斯光束等相位面的曲率半径</a>为：</p>
        $$R(z) = z\\left[1 + \\left(\\frac{\\pi\\omega_0^2\\eta}{\\lambda z}\\right)^2\\right]$$
        $$\\begin{align}\\because
        z &= l\\\\
        \\eta &= 1
        \\end{align}$$
        $$\\therefore R(l) = l\\left[1 + \\left(\\frac{\\pi\\omega_0^2}{\\lambda l}\\right)^2\\right]$$
        $$\\therefore F = \\frac{1}{2}R$$
        <p>当透镜焦距为入射高斯光束再透镜表面的波面曲率半径的一半时，透镜对高斯光束做自再现变换.</p>

        <h3>球面反射镜对高斯光束的自再现变换</h3>
        <p>曲率半径为\\(R\\)的球面反射镜对近轴光线的反射变换与焦距为\\(R/2\\)的薄透镜对统一近轴光电的变换等效.</p>
        <div class="Card-Definition">
            <b>波前相匹配</b>
            <p>当入射在球面镜的高斯光束波前曲率半径正好等于球面镜曲率半径时，反射后高斯光束将不发生任何变化，即物方高斯光束与像方高斯光束完全重合.</p>
        </div>
    </div>

    <div class="Card-Analysis">
        <h2>光束质量因子</h2>
        <div class="Card-Definition">
            <b>\\(M^2\\)因子（光束质量因子，光束衍射倍率因子）</b>
            $$M^2 = \\frac{\\omega_{R0}\\theta_R}{\\omega_0\\theta}$$
            <ul>
                <li>\\(\\omega_{R0}\\)：实际高斯光束的束腰半径.</li>
                <li>\\(\\theta_R\\)：实际远场发散角.</li>
                <li>\\(\\omega_0\\)：理想基模高斯光束的束腰半径.</li>
                <li>\\(\\theta\\)：理想基模高斯光束的<a href="#Gauss_theta">远场发散角</a>.</li>
            </ul>
            <p>用于描述实际光束偏离基模高斯光束的程度.</p>
        </div>

        <p>通常情况下，有：</p>
        $$M^2 \\geq 1$$
        <p>[注]也存在\\(M^2 \\lt 1\\)的情况.</p>
        
        <p>对于基模高斯光束：</p>
        $$\\omega_0\\theta = \\frac{\\lambda}{\\pi}$$
        $$\\therefore M^2 = \\frac{\\pi\\omega_{R0}\\theta_R}{\\lambda}$$
    </div>

    <div id="PageEnd"></div>
    <a class="GoToBottom" href="#PageEnd">Bottom</a>` },
  "note/optics/laser/laserintroduction": { title: "激光原理", content: `` },
  "note/optics/laser/ld": { title: "激光原理", content: `` },
  "note/optics/laser/lightamplificationcondition": { title: "激光原理", content: `` },
  "note/optics/laser/lightmatterinteraction": { title: "激光原理", content: `` },
  "note/optics/laser/q-swicthing": { title: "激光原理", content: `<h1>调Q技术</h1>

        <div class="Card-Definition">
            <b>Q值（品质因数）</b>
            $$Q = 2\\pi\\frac{W}{\\Delta W}$$
            <ul>
                <li>\\(W\\)：谐振腔内储存的能量</li>
                <li>\\(\\Delta W\\)：每振荡周期损耗的能量</li>
            </ul>
        </div>
        <p>Q值越高，腔内损耗越小；Q值越低，腔内损耗越大.</p>

        <div class="Card-Definition">
            <b>调Q原理</b>
            <p>采用某种办法使谐振腔在泵浦开始时处于高损耗低Q值的状态，此时激光振荡的阈值很高，粒子密度反转数即使积累到很高水平也不会产生振荡；</p>
            <p>当粒子密度反转数达到其峰值时，突然使腔的Q值增大，导致激光介质的增益大大超过阈值，及其快速地产生振荡；</p>
            <p>此时储存在亚稳态上的粒子所具有的能量会很快转换为光子的能量，光子像雪崩一样以极高的速率增长，激光器便可输出一个峰值功率高、宽度窄的激光巨脉冲.</p>
        </div>

        <div class="Card-Definition">
            <b>激光调Q技术</b>
            <p>用调节谐振腔的Q值获得激光巨脉冲的技术.</p>
        </div>

        <table>
            <tr>
                <td rowspan="2">控制反射损耗</td>
                <td>机械转镜调Q</td>
            </tr>
            <tr>
                <td>电光调Q</td>
            </tr>
            <tr>
                <td>控制吸收损耗</td>
                <td>可饱和吸收染料调Q</td>
            </tr>
            <tr>
                <td>控制衍射损耗</td>
                <td>声光调Q</td>
            </tr>
        </table>

        <div class="Card-Analysis">
            <h2>电光调Q</h2>
            <p>利用晶体的电光效应作为Q开关的元件.</p>

            <p>在激光谐振腔中插入起振片作为Q开关的KD*P晶体.</p>

            <div class="Card-Question">
                <p>什么是晶体的电光效应？</p>
                <div class="Card-AI">
                    <p>当向晶体施加电场时，其折射率椭球的形状与方位会发生改变，导致沿特定方向传播的光的折射率n发生变化.</p>
                </div>
                <p>什么是Q开关？</p>
                <div class="Card-AI">
                    <p>通常情况下与调Q等同，但是侧重于“用于调Q的器件”.</p>
                </div>
                <p>什么是起振片？</p>
                <div class="Card-AI">
                    <p>一种只允许特定振动方向的光通过的光学元件.</p>
                </div>
                <p>什么是KD*P晶体？</p>
                <div class="Card-AI">
                    <p>磷酸二氚钾.</p>
                </div>
            </div>

            <p>当在晶体上加半波电压后，往返通过晶体的线偏振光，其振动方向相对改变90°.</p>
            <p>对于未加电压的晶体，往返通过晶体的线偏振光振动方向不变.</p>
            <p>当晶体在z轴方向加电压后，由于感应双折射，沿x方向振动的偏振光进入晶体后将分解为沿x'方向和y'方向振动的二线偏振光.</p>
            <p>适当调整电压大小，使通过晶体后的两者相位差为\\(\\pi/2\\)（相应电压大小为\\(V_{\\pi/2}\\)），因而合成光为圆偏振光.</p>
            <p>再次经过反射镜反射，圆偏振光再次通过晶体，相位差再次增加\\(\\pi/2\\)，则出射光又成一线偏振光，但其振动方向为y方向，恰遇原入射偏振光的振动方向x垂直.</p>

            <div class="Card-Question">
                <p>晶体的感应双折射？</p>
                <p>光的偏振？</p>
            </div>

            


        </div>


        <div id="PageEnd"></div>
        <a href="#PageEnd" class="GoToBottom">Bottom</a>` },
  "note/optics/laser/rateequation": { title: "激光原理", content: `<h1>速率方程理论</h1>

        <p>通过泵浦实现能级间粒子数反转所采用的能级结构可以归结为两种：</p>
        <ul>
            <li>三能级系统</li>
            <li>四能级系统</li>
        </ul>
        <div class="Card-Analysis">
            <h2>三能级系统</h2>
            <p>参与激光产生过程的有三个能级.</p>
            <ul>
                <li>产生激光的下能级\\(E_1\\)是基态能级.</li>
                <li>激光的上能级\\(E_2\\)是亚稳态能级.</li>
                <li>\\(E_3\\)为抽运高能级.</li>
            </ul>

            <p>\\(E_3\\)实际上通常不是单一的能级，而是比\\(E_2\\)高的一些激发态能级.</p>
            <p>在激励源的作用下，将下能级的粒子抽运到\\(E_3\\)能级，\\(E_3\\)能级上的粒子寿命很短，会通过非辐射跃迁转移到激光的上能级\\(E_2\\).</p>
            <p>处于\\(E_2\\)能级的粒子比较稳定，寿命较长.</p>
            <p>当下能级\\(E_1\\)的粒子多于一半被抽运到上能级\\(E_2\\)后，就在\\(E_2,E_1\\)之间产生粒子数反转.</p>
        </div>

        <div class="Card-Analysis">
            <h2>四能级系统</h2>
            <img src="Img/RateEquation/Img1.jpg" alt="四能级系统" width="200">
            <ul>
                <li>基态能级\\(E_0\\)</li>
                <li>激光下能级\\(E_1\\)</li>
                <li>激光上能级\\(E_2\\)</li>
                <li>\\(E_3\\)</li>
            </ul>
            <p>粒子从基态\\(E_0\\)抽运到吸收带\\(E_3\\)上后，由于非辐射跃迁转移到亚稳态的激光上能级\\(E_2\\)上.</p>
            <p>激光的下能级\\(E_1\\)是一个激发态能级，在常温下基本是空的，粒子在能级\\(E_1\\)上寿命极短，很容易在\\(E_2,E_1\\)之间产生粒子数反转.</p>
            <p>四能级系统（常用）所需的激励能量比三能级系统小得多，产生激光比三能级系统容易得多.</p>
        </div>

        <div class="Card-Analysis">
            <h2>四能级系统速率方程组</h2>
            $$\\begin{cases}
            n = n_0 + n_1 + n_2\\\\
            \\frac{\\mathrm{d}n_2}{\\mathrm{d}t} = R_2 - n_2A_2 - (n_2B_{21} - n_1B_{12})\\rho f(\\nu)\\\\
            \\frac{\\mathrm{d}n_1}{\\mathrm{d}t} = R_1 + n_2A_{21} - n_1A_1 + (n_2B_21 - n_1B_{12})\\rho f(\\nu)
            \\end{cases}$$

            <p>该微分方程组用于描述四能级系统上粒子数密度随时间变化的速率方程组.</p>
            <p>原则上可以由此计算出任意时刻各个能级上的粒子数，因而可以用于研究上下能级间粒子数反转的问题.</p>
            <table>
                <tr>
                    <td>能级</td>
                    <td>粒子数密度</td>
                </tr>
                <tr>
                    <td>基态\\(E_0\\)</td>
                    <td>$$n_0$$</td>
                </tr>
                <tr>
                    <td>下能级\\(E_1\\)</td>
                    <td>$$n_1$$</td>
                </tr>
                <tr>
                    <td>上能级\\(E_2\\)</td>
                    <td>$$n_2$$</td>
                </tr>
            </table>

            <ul>
                <li>\\(n = n_0 + n_1 + n_2\\)：单位体积内增益介质的总粒子数.</li>
                <li>\\(\\rho\\)：在谐振腔中传播的准单色光能总密度.</li>
            </ul>

            <img src="Img/RateEquation/Img2.jpg" alt="四能级系统速率方程组" width="400">

            <p>当激励能源开始工作后，以速率\\(R_2\\)将粒子由基态\\(E_0\\)抽运到\\(E_2\\)能级上，使\\(E_2\\)能级的粒子数密度以\\(R_2\\)速率增加.</p>
            <p>同时它也以速率\\(R_1\\)将粒子由基态\\(E_0\\)抽运到\\(E_1\\)能级上.</p>
            <p>[注]对\\(E_1\\)能级的抽运是不希望却无法避免的.</p>

            <p>\\(E_2\\)能级在单位时间内粒子数密度的增加可由下式表示：</p>
            $$\\frac{\\mathrm{d}n_2}{\\mathrm{d}t} = R_2 - n_2A_2 - (n_2B_{21} - n_1B_{12})\\rho f(\\nu)$$
            <p>\\(E_1\\)能级在单位时间内粒子数密度的增加可由下式表示：</p>
            $$\\frac{\\mathrm{d}n_1}{\\mathrm{d}t} = R_1 + n_2A_{21} - n_1A_1 + (n_2B_21 - n_1B_{12})\\rho f(\\nu)$$
        </div>

        <div id="PageEnd"></div>
        <a href="#PageEnd" class="GoToBottom">Bottom</a>` },
  "note/optics/laser/resonator": { title: "激光原理", content: `<h1>光学谐振腔（光腔）</h1>

        <div class="Card-Definition">
            <b>开放式光学谐振腔（开腔）</b>
            <p>侧面没有光学边界，且其轴向尺寸（腔长）远大于产生振荡的光波波长，一般也远大于光腔的横向尺寸（反射镜的尺度）.</p>
        </div>

        <table>
            <tr>
                <td rowspan="8">光腔分类</td>
                <td rowspan="5">开腔</td>
                <td rowspan="3">根据几何偏折损耗的高低分</td>
                <td>稳定腔</td>
            </tr>
            <tr><td>非稳腔</td></tr>
            <tr><td>临界腔</td></tr>
            <tr>
                <td rowspan="2">根据结构分</td>
                <td>共轴腔</td>
            </tr>
            <tr><td>非共轴腔</td></tr>
            <tr>
                <td colspan="3">半封闭腔</td>
            </tr>
        </table>

        <div class="Card-Definition">
            <b>平行平面腔（法布里-珀罗干涉仪，<span lang="en">F-P</span>腔）</b>
            <p>由两块平行平面反射镜组成.</p>
        </div>

        <div class="Card-Definition">
            <b>共轴球面腔</b>
            <p>由两块具有公共轴线的球面反射镜组成.</p>
        </div>

        <div class="Card-Analysis">
            <h2>光学谐振腔的稳定性判别方法</h2>

            <h3>稳区图</h3>
            <ul>
                <li>阴影部分表示稳定腔</li>
                <li>坐标轴与曲线\\(g_1g_2 = 1\\)上表示临界腔</li>
                <li>其他区域表示非稳腔</li>
            </ul>
            <img src="Img/StableRegionDiagram.jpg" alt="稳区图" width="400">
            
            <h3>\\(\\sigma\\)圆法</h3>
            
    
        </div>
        
        <div class="Card-Analysis">
            <h2>光腔的损耗</h2>
            <table>
                <tr>
                    <td rowspan="2">选择损耗</td>
                    <td>几何偏折损耗</td>
                </tr>
                <tr>
                    <td>衍射损耗</td>
                </tr>
                <tr>
                    <td rowspan="2">非选择损耗</td>
                    <td>腔镜反射不完全引起的损耗</td>
                </tr>
                <tr>
                    <td>材料中的非激活吸收、散射；腔内插入物（布儒斯特窗、调Q元件、调制器等）引起的损耗；其他损耗</td>
                </tr>
            </table>
    
            <div class="Card-Definition">
                <b>选择损耗</b>
                <p>随腔内自再现模式的横模特性变化的损耗.</p>
            </div>

            <div class="Card-Definition">
                <b>非选择性损耗</b>
                <p>与光波模式无关的损耗.</p>
            </div>

            <div class="Card-Definition">
                <b>平均单程损耗因子\\(\\delta\\)</b>
                <p>设初始光强为\\(I_0\\)，在腔内往返一周后，光强衰减为：</p>
                $$I = I_0e^{-2\\delta}$$
                <p>则平均单程损耗因子为：</p>
                $$\\delta = \\frac{1}{2}\\ln\\frac{I_0}{I}$$

                <p>若损耗是由多种因素引起的，每一种损耗可用相应的损耗因子\\(\\delta_i\\)描述，则总损耗因子：</p>
                $$\\delta = \\sum\\delta_i$$
            </div>
        </div>


        <div class="Card-Analysis">
            <h2>光学谐振腔的作用</h2>
            <b>1、提供光学正反馈</b>
            <p></p>
            <b>2、控制腔内振荡光束的特性</b>
            <p>控制腔内光束的纵向分布特性，使大量光子集结在谐振腔所限制的少数几个模式中，从而提高光子的简并度，获得单色性好，方向性腔的相干光。</p>
            <p>控制激光束的横向分布特性，影响光束的光斑尺寸，横模及光束的发散角等。</p>
            <p>改变腔内光束的损耗（不同的腔镜几何结构还能改变腔内的几何偏折损耗），在增益一定的情况下通过改变输出耦合率来实现对激光器的控制。</p>
        </div>

        <div class="Card-Analysis">
            <h2>谐振腔的评价标准</h2>
            <p>1、谐振腔应该具有较小的能量损耗，能够提供足够的正反馈，使激光器能够达到预期的能量输出.</p>
            <p>2、谐振腔应该具有好的模式鉴别能力，能够提供单色性、相干性和方向性均能达到预期要求的激光束，并能通过调整腔的几何参数有效控制光束特性.</p>
        </div>

        <div class="Card-Analysis">
            <h2>谐振腔的选择</h2>
            <p>对于增益较低的中、小功率激光器：为了易于产生振荡，选择低损耗的稳定腔.</p>
            <p>对于高增益、高功率激光器：为了实现有效的能量提取和获得高质量的输出光束，选择非稳腔.</p>
        </div>
    
        <h2>第四节 光学谐振腔的几何光学分析</h2>
        <h3>一、光线传播矩阵</h3>

        <b>自由空间的光线矩阵</b>

        
        
        
        <b>光腔的自行闭合</b>
        <p>指的是光在光学谐振腔内传播时，由于谐振腔结构和反射镜的配置，光束能够在腔内沿特定路径反射多次后回到初始位置，形成一个闭合的路径。这一现象确保了光能够在谐振腔内来回反射，并不断与增益介质相互作用，从而维持激光振荡。</p>
        
        <div class="Card-Analysis">
            <h2>光学谐振腔的模式</h2>
            <p>电磁场理论表明，当存在一定边界条件约束时，电磁场只能稳定存在于一系列分立的本征态中，这些本征态的振荡频率、空间频率各不相同.</p>
            <p>光腔的模式，可以分为纵向模式（纵模）与横向模式（横模）两种.</p>
            <p>纵模描述：本征态模式在光腔纵向方向（光轴方向）上的分布，以不同的振荡频率来区分不同的纵模.</p>
            <p>横模描述：本征态模式在横向平面（垂直于光轴的平面）上的分布，以电磁场不同的空间分布特性来区分不同的横模.</p>
            
        </div>` },
  "note/optics/laser/solidlaser": { title: "激光原理", content: `<h1>固体激光器</h1>
        <p>固体激光器运转的基本概念</p>
        <p>激光物理学</p>
        <p>激光器如何运转：辐射与物质相互作用的有关原理</p>



        <h2>第四节 粒子数反转的建立</h2>
        <p>研究的问题：固体激光器中如何获得激光作用所需的反转粒子数？</p>
        <p>通过一些简单且实用的模型，可以理解激光器件如何泵浦、粒子数密度如何反转.</p>


        <div class="Card-Analysis">
            <h2>钕离子激光器</h2>
            <h3>Nd:YAG激光器</h3>
            <b>Nd:YAG——掺钕钇铝石榴石</b>
            <p>将一定比例的Al<sub>2</sub>O<sub>3</sub>、Y<sub>2</sub>O<sub>3</sub>和Nd<sub>2</sub>O<sub>3</sub>在单晶炉中熔化并结晶而成的，呈淡紫色.</p>
            <p>Nd:YAG激光器是目前最常用的一类固体激光器.</p>
            <p>优点：阈值低、热学性质优良，这使得其适于连续和高重复率工作.</p>
        </div>

        <div class="Card-Analysis">
            <h2>固体激光器的泵浦系统</h2>
            <p>由于固体激光工作物质是绝缘晶体，所以一般采用光泵浦激励.</p>
            <p>泵浦光源应满足两个基本条件：</p>
            <ul>
                <li>具有很高的发光效率</li>
                <li>辐射光的光谱特性与激光工作物质的吸收光谱相匹配</li>
            </ul>
        </div>` },
  "note/optics/laser/solidlasermaterial": { title: "激光原理", content: `<h1>固体激光材料</h1>

        <p>激光器的工作物质必须具有<b>尖锐的荧光线、强吸收带和针对所需荧光跃迁的相当高的量子效率</b>.</p>

        <div class="Card-Question">
            <p>尖锐的荧光线、强吸收带和针对所需荧光跃迁的相当高的量子效率——都是什么？为什么要有这些性质？</p>
        </div>

        <p>三价钕离子Nd<sup>3+</sup>特别有利于激光作用的特性.</p>

        <b>固体基质材料</b>
        <ul>
            <li>晶体</li>
            <li>玻璃</li>
        </ul>
        <p>只有具有良好光学、机械和热特性的固体材料，才能实际经受激光器恶劣的工作条件.</p>
        <p>所需的参量有硬度、化学稳定性、无内部应变、无折射率变化、抵御因辐射引起色心的能力，以及便于生产.</p>` },
  "note/optics/laser/stabilitycondition": { title: "激光原理", content: `<h1>共轴球面腔的稳定性条件</h1>

        <h2>腔内光线往返传播的矩阵表示</h2>
        <p>分析傍轴光线在共轴球面腔内往返传播的情况.</p>
        <p>腔内任一傍轴光线在某一给定横截面内都可以用两个坐标参数来表征：</p>
        <ul>
            <li>\\(r\\)：光线离轴线的距离.</li>
            <li>\\(\\theta\\)：光线与轴线的夹角.</li>
        </ul>

        <img src="Img/PropagationMatrix.png" width="500">

        <h3>光线在介质中传播</h3>
        <p>\\((r_1, \\theta_1)\\)：光线自球面镜1出发时的初始坐标.</p>
        <p>\\((r_2, \\theta_2)\\)：光线入射到球面镜2上的坐标.</p>
        $$\\begin{cases}
        r_2 = r_1 + L\\theta_1\\\\
        \\theta_2 = \\theta_1 
        \\end{cases}\\Rightarrow
        \\left[\\begin{matrix}r_2\\\\\\theta_2\\end{matrix}\\right] = \\left[\\begin{matrix}1 & L\\\\0 & 1\\end{matrix}\\right]\\left[\\begin{matrix}r_1\\\\\\theta_1\\end{matrix}\\right]$$

        $$\\left[\\begin{matrix}r_2\\\\\\theta_2\\end{matrix}\\right] = \\left[\\begin{matrix}A&B\\\\C&D\\end{matrix}\\right]\\left[\\begin{matrix}r_1\\\\\\theta_1\\end{matrix}\\right]$$

        <h3>光线在球面镜表面发生反射</h3>
        <p>\\((r_i, \\theta_i)\\)：光线入射到球面镜上的坐标.</p>
        <p>\\((r_o, \\theta_o)\\)：光线在球面镜上发生反射后的坐标.</p>
        <div class="Formula">
            <img src="Img/theta_o.png" width="500">
            $$\\begin{cases}
            r_o = r_i\\\\
            \\theta_o = -\\frac{2}{R}r_i + \\theta_i       
            \\end{cases}\\Rightarrow
            \\left[\\begin{matrix}r_o\\\\\\theta_o\\end{matrix}\\right] = \\left[\\begin{matrix}1&0\\\\-\\frac{2}{R}&1\\end{matrix}\\right]$$
            <div class="Derivation">
                $$\\theta_o = -(\\theta_i + 2\\alpha)$$
                $$\\beta = \\theta_i + \\alpha \\Rightarrow \\alpha = \\beta - \\theta_i$$
                $$\\because \\beta \\approx \\tan\\beta \\approx \\frac{r_i}{R}$$
                $$\\therefore \\theta_o = -[\\theta_i + 2(\\frac{r_i}{R} - \\theta_i)] = -\\frac{2}{R}r_i + \\theta_i$$
            </div>
        </div>

        <h3>光线在腔内完成一次往返，总的坐标变换为：</h3>
        $$\\begin{align}
        \\left[\\begin{matrix}r_5\\\\\\theta_5\\end{matrix}\\right] &= \\left[\\begin{matrix}1&0\\\\-\\frac{2}{R_1}&1\\end{matrix}\\right]\\left[\\begin{matrix}1&L\\\\0&1\\end{matrix}\\right]\\left[\\begin{matrix}1&0\\\\-\\frac{2}{R_1}&1\\end{matrix}\\right]\\left[\\begin{matrix}1&L\\\\0&1\\end{matrix}\\right]\\left[\\begin{matrix}r_1\\\\\\theta_1\\end{matrix}\\right]\\\\
                                                             &= \\mathbf{T}\\left[\\begin{matrix}r_1\\\\\\theta_1\\end{matrix}\\right]
        \\end{align}$$
        <p>\\(\\mathbf{T}\\)为傍轴光线在腔内往返一次的总变换矩阵，称为<b>往返矩阵</b>.</p>
        $$\\begin{align}
        \\mathbf{T} &= \\left[\\begin{matrix}A&B\\\\C&D\\end{matrix}\\right]\\\\
                   &= \\left[\\begin{matrix}1&0\\\\-\\frac{2}{R_1}&1\\end{matrix}\\right]\\left[\\begin{matrix}1&L\\\\0&1\\end{matrix}\\right]\\left[\\begin{matrix}1&0\\\\-\\frac{2}{R_1}&1\\end{matrix}\\right]\\left[\\begin{matrix}1&L\\\\0&1\\end{matrix}\\right]\\\\
                   &= \\left[\\begin{matrix}1&L\\\\-\\frac{2}{R_1}&-\\frac{2L}{R_1}+1\\end{matrix}\\right]\\left[\\begin{matrix}1&L\\\\-\\frac{2}{R_2}&-\\frac{2L}{R_2} + 1\\end{matrix}\\right]\\\\
                   &= \\left[\\begin{matrix}1-\\frac{2L}{R_2} & 2L(1-\\frac{L}{R_2})\\\\\\frac{2}{R_2}(\\frac{2L}{R_1}-1)-\\frac{2}{R_1} & (\\frac{2L}{R_1}-1)(\\frac{2L}{R_2}-1) - \\frac{2L}{R_1}\\end{matrix}\\right]
        \\end{align}$$

        <h3>光线在腔内完成\\(n\\)次往返，总的坐标矩阵：</h3>
        $$\\begin{align}
        \\mathbf{T}_n &= \\left[\\begin{matrix}A_n&B_n\\\\C_n&D_n\\end{matrix}\\right]\\\\
                     &= \\left[\\begin{matrix}A&B\\\\C&D\\end{matrix}\\right]^n\\\\
                     &= \\frac{1}{\\sin\\phi}\\left[\\begin{matrix}A\\sin n\\phi-\\sin(n-1)\\phi & B\\sin n\\phi \\\\ C\\sin n\\phi & D\\sin n\\phi - \\sin(n-1)\\phi\\end{matrix}\\right]
        \\end{align}$$
        <p>其中，\\(\\phi = \\arccos\\frac{1}{2}(A+D)\\)</p>
        $$\\begin{cases}
        r_n = A_nr_1 + B_n\\theta_1\\\\
        \\theta_n = C_nr_1 + D_n\\theta_1
        \\end{cases}$$

        <h2>共轴球面腔的稳定性条件</h2>
        <p>要求\\(\\phi \\in \\mathbb{R}\\)且\\(\\phi \\neq k\\pi,~k\\in \\mathbb{Z}(\\sin \\phi \\neq 0)\\)，即：</p>
        $$|\\frac{1}{2}(A + D)| \\lt 1$$
        <div class="Formula">
            $$0 \\lt (1 - \\frac{L}{R_1})(1 - \\frac{L}{R_2}) \\lt 1$$
            <div class="Derivation">
                $$-1 \\lt \\frac{1}{2}[1 - \\frac{2L}{R_2} + (\\frac{2L}{R_1}-1)(\\frac{2L}{R_2}-1) - \\frac{2L}{R_1}] \\lt 1$$
                $$-1 \\lt \\frac{1}{2}(1 - \\frac{2L}{R_1} - \\frac{2L}{R_2} + \\frac{4L^2}{R_1R_2} - \\frac{2L}{R_1} - \\frac{2L}{R_2} + 1) \\lt 1$$
                $$-1 \\lt 1 + \\frac{2L^2}{R_1R_2} - \\frac{2L}{R_1} - \\frac{2L}{R_2} \\lt 1$$
                $$-\\frac{1}{2} - \\frac{1}{2} + 1 \\lt 1 + \\frac{L^2}{R_1R_2} - \\frac{L}{R_1} - \\frac{L}{R_2} \\lt \\frac{1}{2} - \\frac{1}{2} + 1$$
                $$0 \\lt (1 - \\frac{L}{R_1})(1 - \\frac{L}{R_2}) \\lt 1$$
            </div>
        </div>
        <p>引入\\(g\\)参数：</p>
        $$\\begin{cases}
        g_1 = 1 - \\frac{L}{R_1}\\\\
        g_2 = 1 - \\frac{L}{R_2}
        \\end{cases} \\Rightarrow
        0 \\lt g_1g_2 \\lt 1$$

        <h2>谐振腔的分类</h2>

        <div class="Card-Definition">
            <h2>非稳腔</h2>
            <b>条件</b>
            $$g_1g_2 \\lt 0~or~g_1g_2\\gt 1$$

            <b>特点</b>
            <p>傍轴光线在腔内经有限次往返后必从侧面逸出腔外，具有较高的几何损耗.</p>
        </div>

        <div class="Card-Definition">
            <h2>临界腔</h2>
            <b>条件</b>
            $$g_1g_2 = 0~or~g_1g_2 = 1$$

            <h3>平行平面腔</h3>
            $$R_1 = R_2 = \\infty \\Rightarrow g_1g_2 = 1$$

            <h3>共心腔</h3>
            $$R_1 + R_2 = L \\Rightarrow g_1g_2 = 1$$
            <p>腔的两个镜面曲率半径相互重合.</p>
        </div>

        <div class="Card-Definition">
            <h2>稳定腔</h2>
            <b>条件</b>
            $$0\\lt g_1g_2 \\lt 1$$
            
            <h3>对称共焦腔（特例）</h3>
            <b>条件</b>
            $$R_1 = R_2 = L$$
        </div>` },
  "note/optics/laser/supplement": { title: "激光原理", content: `<h1>补充</h1>
        <p>场包含动态场与静态场.</p>
        <p>波是场的一种运动形式.</p>` },
  "note/optics/nonlinearoptics/catalog": { title: "非线性光学", content: `<h1>非线性光学</h1>

        <h2>目录</h2>
        <div class="Catalog">
            <ul>
                <li><a href="/note/optics/nonlinearoptics/chapter1">第一章 非线性介质响应特性的经典描述</a></li>
                <li><a href="/note/optics/nonlinearoptics/chapter2">第二章 非线性介质响应特性的量子力学描述</a></li>
                <li><a href="/note/optics/nonlinearoptics/chapter4">第四章 二阶非线性光学效应</a></li>
                <li><a href="/note/optics/nonlinearoptics/einsteinsummationconvention">补充知识 爱因斯坦求和约定</a></li>
            </ul>
        </div>
        
        <br>` },
  "note/optics/nonlinearoptics/chapter1": { title: "非线性光学", content: `<h1>第一章 非线性介质响应特性的经典描述</h1>

        <div class="PageCatalog">
            <ul>
                <li><a href="#Flag1">因果性原理</a></li>
            </ul>
        </div>

        <h2>第一节 极化率的色散特性</h2>

        <p>光在介质中传播时，由于光电场的作用，将产生极化强度.</p>
        <div class="Card-AI">
            <p>这里是介质被光电场极化.</p>
        </div>
        <p>一般情况下，<a href="../Electromagnetism/Chapter1.html#Polarization" class="goto">极化强度</a>包含线性极化强度与非线性极化强度.</p>
        $$\\mathbf{P} = \\mathbf{P}_{L} + \\mathbf{P}_{NL}$$

        <p>光电场强度很弱时：可以忽略\\(\\mathbf{P}_{NL}\\)，此时\\(\\mathbf{P} = \\mathbf{P}_{L}\\)，即为线性光学问题.</p>
        <p>光电场强度较强时：不可忽略\\(\\mathbf{P}_{NL}\\)，且：</p>
        $$\\begin{align}
        &\\mathbf{P}_{L} = \\mathbf{P}^{(1)}\\\\
        &\\mathbf{P}_{NL} = \\mathbf{P}^{(2)} + \\mathbf{P}^{(3)} + \\cdots + \\mathbf{P}^{(r)} + \\cdots
        \\end{align}$$
        <ul>
            <li>\\(\\mathbf{P}^{(r)}\\)：\\(r\\)阶非线性极化强度，与光电场\\(\\mathbf{E}\\)的\\(r\\)次方有关的非线性极化强度.</li>
        </ul>
        <p>[注]光电场过强时，上述非极化强度的级数形式将不再适用.</p>
        
        <div class="Card-AI">
            $$\\mathbf{P}^{(r)} \\propto \\mathbf{E}^r$$
        </div>

        <div class="Card-Question">
            <p>什么叫“电偶极矩近似”，什么叫“电四极矩及多极矩”？</p>
        </div>


        <div class="Card-Analysis" id="Flag1">
            <h2>因果性原理</h2>
            <h3>线性响应函数</h3>
            <p>光在介质中传播时，\\(t\\)时刻介质所感应的线性极化强度\\(\\mathbf{P}(t)\\)不仅与\\(t\\)时刻的光电场\\(\\mathbf{E}(t)\\)有关，还与\\(t\\)时刻前所有的光电场有关.</p>
            <div class="Formula">
                $$\\mathbf{P}(t) = \\int_{-\\infty}^t \\epsilon_0\\mathbf{R}(t-\\tau)\\mathbf{E}(\\tau)\\mathrm{d}\\tau$$
                <div class="Derivation">
                    <p>设时刻\\(t\\)前任一时刻\\(\\tau\\)的光电场强度为\\(\\mathbf{E}(\\tau)\\)，它对\\(t\\)时刻时的极化强度的贡献为\\(\\mathrm{d}\\mathbf{P}(t)\\)，且：</p>
                    $$\\mathrm{d}\\mathbf{P}(t) = \\epsilon_0\\mathbf{R}(t-\\tau)\\mathbf{E}(\\tau)\\mathrm{d}\\tau$$
                    $$\\begin{align}\\therefore 
                    \\mathbf{P}(t) &= \\int_{-\\infty}^t \\mathrm{d}\\mathbf{P}\\\\
                                  &= \\int_{-\\infty}^t \\epsilon_0\\mathbf{R}(t-\\tau)\\mathbf{E}(\\tau)\\mathrm{d}\\tau
                    \\end{align}$$
                    $$令\\tau' = t - \\tau \\Rightarrow \\tau = t - \\tau'$$
                    $$\\tau = -\\infty时\\rightarrow \\tau' = +\\infty$$
                    $$\\tau = t时\\rightarrow \\tau'=0$$
                    $$\\begin{align}\\therefore
                    \\mathbf{P}(t) &= \\int_{+\\infty}^0\\epsilon_0\\mathbf{R}(\\tau')\\mathbf{E}(t-\\tau')\\mathrm{d}(t-\\tau')\\\\
                                  &= \\int_0^{+\\infty}\\epsilon_0\\mathbf{R}(\\tau)\\mathbf{E}(t-\\tau)\\mathrm{d}\\mathbf{\\tau}
                    \\end{align}$$
                </div>
            </div>
            <ul>
                <li>\\(\\mathbf{R}(t-\\tau)\\)：介质的线性响应函数，是一个二阶张量.</li>
            </ul>

            <p>此外，\\(t'\\gt t\\)时的光电场\\(\\mathbf{E}(t')\\)对\\(\\mathbf{P}(t)\\)是没有贡献的，即：</p>
            $$\\mathbf{R}(t-\\tau) = 0,~\\tau\\gt t$$

            <b>响应函数所满足的真实性条件</b>
            <p>由于\\(\\mathbf{E}(t)\\)与\\(\\mathbf{P}(t)\\)均为实函数，故\\(\\mathbf{R}(\\tau)\\)也必须是实函数，才能保证上式成立.</p>

            <h3>非线性响应函数</h3>
        </div>

        <div class="Card-Question">
            <p>学到目前为止没明白为什么这节是“介质的色散特性”，“色散”到底是什么？</p>
        </div>


        <div class="Card-Definition">
            <b>线性极化率</b>
            $$\\begin{align}
            \\chi^{(1)}(\\omega) &= \\int_{-\\infty}^{+\\infty}\\mathbf{R}^{(1)}(\\tau)e^{i\\omega\\tau}\\mathrm{d}\\tau\\\\
                               &= \\chi'(\\omega) + i\\chi''(\\omega)
            \\end{align}$$
        </div>

        <div class="Card-Definition">
            <b>克雷默斯-克朗尼（Kramers-Kroning）函数</b>
            <p>给出了\\(\\chi^{(1)}(\\omega)\\)实部与虚部之间的关系.</p>
        </div>

        <h2>第二节 非线性光学极化率的经典描述</h2>
        <p>振子的非线性响应可以用于描述非线性光学现象.</p>
        <b>频率为\\(\\omega\\)的光电场：</b>
        $$E = E(\\omega)e^{-i\\omega t} + E^*(\\omega)e^{i\\omega t}$$

        <b>包含多个频率分量光电场</b>
        <p>设光电场包含多个频率分量，用复数表示时，可以写成以下形式：</p>
        $$E = \\sum_nE(\\omega_n)e^{-i\\omega_n t}$$
        <ul>
            <li>\\(E(\\omega_n)\\)：频率为\\(\\omega_n\\)的光场的复振幅.</li>
        </ul>
        <p>考虑到光场的真实性，有：</p>
        $$E(-\\omega_n) = E^*(\\omega_n)$$
        <div id="SecondOrderP">
            $$P^{(2)}(t) = \\epsilon_0\\sum_{m,n}\\chi^{(2)}(\\omega_m,\\omega_n)E(\\omega_m)E(\\omega_n)e^{-i(\\omega_m + \\omega_n)t}$$
        </div>
        <p>设光电场包含\\(t\\)个频率，则：</p>
        $$\\omega_m, \\omega_n \\in \\{\\pm\\omega_1, \\pm\\omega_2, \\cdots, \\pm\\omega_t\\}$$

        <h2>第三节 极化率的一般性质</h2>
        <div class="Card-Definition">
            <b>极化率张量的真实性条件</b>
            $$[\\chi^{(r)}(\\omega_1 , \\omega_2, \\cdots, \\omega_r)]^* = \\chi^{(r)}(-\\omega_1^*, -\\omega_2^*, \\cdots, -\\omega_r^*)$$
        </div>
        
        <div class="Card-Definition" id="Properties1">
            <b>本征对易对称性</b>
            $$\\chi^{(2)}(\\omega_1, \\omega_2) = \\chi^{(2)}(\\omega_2, \\omega_1)$$
        </div>
        
        <b>完全对易对称性</b>
        <b>空间对称性</b>` },
  "note/optics/nonlinearoptics/chapter2": { title: "非线性光学", content: `<h1>第二章 非线性介质响应特性的量子力学描述</h1>

        <div class="PageCatalog">
            <ul>
            </ul>
        </div>

        <h2>第一节 密度算符及其运动方程</h2>
        <b>密度算符</b>
        $$\\hat\\rho = \\sum\\limits_{n}p_n\\hat P(\\phi_n)$$` },
  "note/optics/nonlinearoptics/chapter4": { title: "非线性光学", content: `<h1>第四章 二阶非线性光学效应</h1>

        <div class="PageCatalog">
            <ul>
                <li><a href="#SHG">二次谐波产生（SHG）</a></li>
            </ul>
        </div>


        <h2>第一节 线性电光效应</h2>
        <div class="Card-Definition">
            <b>线性电光效应（Pockler效应）</b>
            <p>当没有反演中心的晶体受到直流电场或低频电场作用时，其折射率发生与外加电场成线性关系的变化.</p>
            <p>[注]此处所指“低频电场”是相较于光频而言，故微波频率也包含在内.</p>
        </div>

        <div class="Card-AI">
            <b>反演中心</b>
            <p>反演中心是晶体中的一种对称中心.</p>
        </div>
        
        <p>介质在光电场、低频电场或直流电场 两个电场的作用下，产生二阶非线性极化.</p>

        <div class="Card-AI">
            <p>低频电场或直流电场引起介质折射率的线性变化，进而影响光电场的传播.</p>
        </div>

        <p>设直流电场为\\(\\mathbf{E}_0\\)，光电场为\\(\\mathbf{E}\\exp{(-i\\omega)t} + c.c.\\)，则根据极化强度的一般表示式，有：</p>
        $$\\mathbf{P}^{(1)}(t) = \\epsilon_0 \\chi^{(1)}(0)\\cdot \\mathbf{E}_0 + \\epsilon_0[\\chi^{(1)}(\\omega)\\cdot \\mathbf{E}e^{-i\\omega t} + c.c.]$$

        <h2>第二节 光整流效应</h2>
        <div class="Card-Definition">
            <b>光整流效应</b>
            <p>一个高强度单色激光通过非线性介质，由于二阶非线性差频过程产生一个直流极化场\\(\\mathbf{P}_0\\)，并在介质中建立一个直流电场的现象.</p>
        </div>

        <h2>第三节 三波混频</h2>
        <div class="Card-Definition">
            <b>三波混频</b>
            <p>两个频率不同的单色光同时入射到非线性介质中，产生和频与差频的效应.</p>
        </div>

        <div class="Card-AI">
            <p>当两个频率的光同时入射到非线性介质中时，会同时发生四种二阶非线性过程，包括：二次谐波、和频、差频以及光学整流.</p>
            <p>当我们讨论某一个过程时，需要抑制其他三个过程.</p>
        </div>

        <div class="Card-AI">
            <p>在非线性介质中，同时入射两束强光电场，由于介质存在二阶非线性极化，介质内部会产生一个随时间振荡的新的极化源.</p>
            <p>介质中的极化，本质上是正负电荷发生相对位移，当极化随时间振荡时，意味着电荷在加速运动.</p>
            <p>加速运动的电荷会辐射出电磁波.</p>
        </div>

        <p>由<a class="goto" href="./Chapter1.html#SecondOrderP">二阶非线性极化强度的一般表示式</a>，可以得到三波混频中任何一对光波所感应的非线性极化强度复振幅：</p>
        $$\\mathbf{P}^{(2)}(\\omega_1) = 2\\epsilon_0\\chi^{(2)}(\\omega_3, -\\omega_2):\\mathbf{E}(\\omega_3, z)\\mathbf{E}^*(\\omega_2, z)$$
        $$\\mathbf{P}^{(2)}(\\omega_2) = 2\\epsilon_0\\chi^{(2)}(\\omega_3, -\\omega_1):\\mathbf{E}(\\omega_3, z)\\mathbf{E}^*(\\omega_1, z)$$
        $$\\mathbf{P}^{(2)}(\\omega_3) = 2\\epsilon_0\\chi^{(2)}(\\omega_1, \\omega_2):\\mathbf{E}(\\omega_1, z)\\mathbf{E}(\\omega_2, z)$$
        <div class="Prove">
            <p>考虑到\\(\\omega_3 = \\omega_1 + \\omega_2\\)，因此仅计算：</p>
            $$\\begin{cases}
            \\omega_m, \\omega_n = \\omega_1, \\omega_2\\\\
            \\omega_m, \\omega_n = \\omega_2, \\omega_1\\\\
            \\end{cases}$$
            <p>两项.</p>
            $$\\begin{align}
            P^{(2)}(t) &= \\epsilon_0\\sum_{m,n}\\chi^{(2)}(\\omega_m,\\omega_n)E(\\omega_m)E(\\omega_n)e^{-i(\\omega_m + \\omega_n)t}\\\\
                       &= \\epsilon_0\\chi^{(2)}(\\omega_1,\\omega_2)E(\\omega_1)E(\\omega_2)e^{-i\\omega_3t} + \\epsilon_0\\chi^{(2)}(\\omega_2,\\omega_1)E(\\omega_2)E(\\omega_1)e^{-i\\omega_3t}
            \\end{align}$$
            <p>考虑到二阶极化率的<a class="goto" href="./Chapter1.html#Properties1">本征对易对称性</a>，有：</p>
            $$\\chi^{(2)}(\\omega_1, \\omega_2) = \\chi^{(2)}(\\omega_2, \\omega_1)$$
            $$\\therefore P^{(2)}(t) = 2\\epsilon_0\\chi^{(2)}(\\omega_1,\\omega_2)E(\\omega_1)E(\\omega_2)e^{-i\\omega_3t}$$
            <p>省略时间相位因子，得到非线性极化强度复振幅为：</p>
            $$P^{(2)}(\\omega_3) = 2\\epsilon_0\\chi^{(2)}(\\omega_1,\\omega_2)E(\\omega_1)E(\\omega_2)$$
            <p>考虑张量形式，才会引入<a class="goto" href="../../Math/TensorAnalysis/Dyad.html#DoubleDotProduct">并联式双点积</a>，得到：</p>
            $$\\mathbf{P}^{(2)}(\\omega_3) = 2\\epsilon_0\\chi^{(2)}(\\omega_1, \\omega_2):\\mathbf{E}(\\omega_1, z)\\mathbf{E}(\\omega_2, z)$$
        </div>

        <div class="Card-AI">
            <p>光波的角频率由时间相位因子的\\(\\omega\\)决定，当只关注频率为\\(\\omega_n\\)的光波时，就只用计算能构成\\(\\omega_n\\)的频率的排列组合即可.</p>
        </div>

        <div class="Card-AI">
            <p>在推导特定频率（如ω₁）的耦合方程时，只考虑能产生该频率极化的频率组合项。对于ω₁ = ω₃ - ω₂的过程，仅此项满足频率匹配条件并对P⁽²⁾(ω₁)有贡献，其他项不参与该相互作用，故忽略.</p>
        </div>

        <p>非线性介质中，三波（\\(\\omega_1, \\omega_2, \\omega_3 = \\omega_1 + \\omega_2\\)）混频的基本耦合波方程组：</p>
        $$\\frac{\\mathrm{d}E(\\omega_1, z)}{\\mathrm{d}z} = \\frac{i\\omega_1^2}{k_1c^2}\\chi_{eff}^{(2)}E(\\omega_3, z)E^*(\\omega_2, z)e^{-i\\Delta kz}$$
        $$\\frac{\\mathrm{d}E(\\omega_2, z)}{\\mathrm{d}z} = \\frac{i\\omega_2^2}{k_2c^2}\\chi_{eff}^{(2)}E(\\omega_3, z)E^*(\\omega_1, z)e^{-i\\Delta kz}$$
        $$\\frac{\\mathrm{d}E(\\omega_3, z)}{\\mathrm{d}z} = \\frac{i\\omega_3^2}{k_3c^2}\\chi_{eff}^{(2)}E(\\omega_1, z)E^*(\\omega_2, z)e^{i\\Delta kz}$$
        <ul>
            <li>\\(\\chi_{eff}^{(2)}\\in \\mathbb{R}\\)：有效非线性极化率，标量.</li>
        </ul>

        <div class="Card-AI">
            <b>仿真</b>
            $$y = u + iv$$
            $$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{\\mathrm{d}u}{\\mathrm{d}x} + i\\frac{\\mathrm{d}v}{\\mathrm{d}x}$$
            $$\\frac{\\mathrm{d} \\Re(y)}{\\mathrm{d}x} = \\frac{\\mathrm{d}u}{\\mathrm{d}x} = \\Re(\\frac{\\mathrm{d}y}{\\mathrm{d}x})$$
            $$\\frac{\\mathrm{d} \\Im(y)}{\\mathrm{d}x} = \\frac{\\mathrm{d}v}{\\mathrm{d}x} = \\Im(\\frac{\\mathrm{d}y}{\\mathrm{d}x})$$

            <p>求解该方程组，代入的数值是\\(E_n(\\omega_n, 0)\\)，求解的是\\(E_n(\\omega_n, z)\\)</p>
        </div>

        <div class="Card-AI">
            <p>这三个方程描述的是同一个非线性过程的不同投影.</p>
            <p>方程左边指复振幅随z的变化.</p>
            <p>方程右边如果都是复振幅，那就是正比于；如果存在复振幅的复共轭，类似于反比的味道，比如说w_1 = w_3 - w_2，复共轭体现的就是那个“-”.</p>
        </div>

        <div class="Card-Question">
            <p>1、什么是SVEA（慢变近似包络）？</p>
            <p>2、什么是归一化包络？</p>
        </div>

        <h3>曼利-罗关系</h3>
        <p>进行三波混频的光波所携带的总能量通量在介质内处处相等，光场与介质间无能量交换.</p>
        $$S_{\\omega_1} + S_{\\omega_2} + S_{\\omega_3} = C$$
        <div class="Prove">
            $$\\begin{align}
            &\\frac{k_1}{\\omega_1}E^*_1\\frac{\\mathrm{d}E_1}{\\mathrm{d}z} + \\frac{k_2}{\\omega_2}E^*_2\\frac{\\mathrm{d}E_2}{\\mathrm{d}z} + \\frac{k_3}{\\omega_3}E_3\\frac{\\mathrm{d}E^*_3}{\\mathrm{d}z}\\\\
            =& \\frac{i}{c^2}\\chi_{eff}^{(2)}(\\omega_1E_1^*E_2^*E_3e^{-i\\Delta kz} + \\omega_2 E_1^*E_2^*E_3e^{-i\\Delta kz} - \\omega_3E_1^*E_2^*E_3e^{-i\\Delta kz})\\\\
            =& 0
            \\end{align}$$
            <p>对上式取复共轭并相加，因为：</p>
            $$x^*\\frac{\\mathrm{d}x}{\\mathrm{d}t} + x\\frac{\\mathrm{d}x^*}{\\mathrm{d}t} = \\frac{\\mathrm{d}}{\\mathrm{d}t}(x\\cdot x^*) = \\frac{\\mathrm{d}|x|^2}{\\mathrm{d}t}$$
            <p>故有：</p>
            $$\\frac{k_1}{\\omega_1}\\frac{\\mathrm{d}|E_1|^2}{\\mathrm{d}z} + \\frac{k_2}{\\omega_2}\\frac{\\mathrm{d}|E_2|^2}{\\mathrm{d}z} + \\frac{k_3}{\\omega_3}\\frac{\\mathrm{d}|E_3|^2}{\\mathrm{d}z} = 0$$
            <p>积分得：</p>
            $$\\frac{k_1}{\\omega_1}|E_1|^2 + \\frac{k_2}{\\omega_2}|E_2|^2 + \\frac{k_3}{\\omega_3}|E_3|^2 = C$$
            <p>由<a class="goto" href="../PhysicalOptics/ReflectionAndTransmission.html#PoyntingVector">能流密度</a>表达式：</p>
            $$S = \\frac{1}{2}\\epsilon|2E|^2v = \\frac{2}{\\mu_0}\\frac{k}{\\omega}|E|^2$$
            <p>故：</p>
            $$S_{\\omega_1} + S_{\\omega_2} + S_{\\omega_3} = C$$
        </div>

        <div class="Card-Definition">
            <b>曼利-罗关系</b>
            $$\\frac{S_{\\omega_1}}{\\omega_1} - \\frac{S_{\\omega_2}}{\\omega_2} = C_1$$
            $$\\frac{S_{\\omega_1}}{\\omega_1} + \\frac{S_{\\omega_3}}{\\omega_3} = C_2$$
            $$\\frac{S_{\\omega_2}}{\\omega_3} + \\frac{S_{\\omega_3}}{\\omega_3} = C_3$$
        </div>

        <h3>和频产生</h3>
        <p>假设非线性介质中，开始时并无频率为\\(\\omega_3\\)的光波分量，该分量是由入射频率为\\(\\omega_1\\)和\\(\\omega_2\\)的光波混合产生的.</p>
        <p>因此，称\\(\\omega_1\\)和\\(\\omega_2\\)光波为泵浦光，称\\(\\omega_3\\)为信号光.</p>
        <p>为确定所产生的频率为\\(\\omega_3\\)的信号光波电场的变化规律，需要在给定入射光电场\\(E(\\omega_1, 0)\\)和\\(E(\\omega_2, 0)\\)的条件下，求解基本耦合波方程组.</p>
        <p>有两种可供选择的求解方法：<b>小信号近似理论</b>与<b>大信号理论</b>.</p>

        <b>小信号近似理论</b>
        <p>认为在光混频过程中，频率\\(\\omega_1\\)和\\(\\omega_2\\)的泵浦光波强度改变很小，故可认为其强度在光波耦合过程中是不变的，此时将基本耦合波方程组中的\\(E(\\omega_1, z)\\)与\\(E(\\omega_2, z)\\)视为常数，只需求解\\(E(\\omega_3, z)\\)式.</p>

        <p>在满足相位匹配的条件下，即\\(\\Delta k=0\\)时，方程</p>
        $$\\frac{\\mathrm{d}E(\\omega_3, z)}{\\mathrm{d}z} = \\frac{i\\omega_3^2}{k_3c^2}\\chi_{eff}^{(2)}E(\\omega_1, z)E^*(\\omega_2, z)e^{i\\Delta kz}$$
        <p>的解为：</p>
        $$E(\\omega_3, z) = \\frac{i\\omega_3^2}{k_3c^2}\\chi_{eff}^{(2)}E(\\omega_1,0)E(\\omega_2,0)z$$

        <div class="Card-Question">
            <p>什么是相位匹配，什么是相位匹配条件，为什么要相位匹配？</p>
        </div>

        <b>大信号理论</b>
        <p>认为在光混频过程中，需考虑泵浦抽空效应，\\(\\omega_1\\)、\\(\\omega_2\\)和\\(\\omega_3\\)的光波强度都在变化，需要同时求解基本耦合波方程组中的三个方程.</p>

        <div class="Card-AI">
            <b>泵浦抽空效应</b>
            <p>在三波混频（或二阶非线性）过程中，泵浦光因强度向信号光与闲置光转换能量而显著减弱的现象.</p>
        </div>

        <h2>谐波的产生</h2>
        <p>一个频率为\\(\\omega_1\\)的入射波产生谐波的过程：</p>
        <p>1、产生频率为\\(2\\omega_1\\)的二次谐波的极化波.</p>
        <p>2、能量从极化波转移到频率为\\(2\\nu_1\\)的电磁波.</p>

        <h2 id="SHG">二次谐波产生（SHG）</h2>
        <p>二次谐波产生是和频产生的特殊情况.</p>


        <div id="PageEnd"></div>` },
  "note/optics/nonlinearoptics/einsteinsummationconvention": { title: "非线性光学", content: `<h1>Einstein求和约定</h1>
        
        <div class="Card-Definition">
            <b>哑标（dummy index）</b>
            <p>出现且仅出现两次的下标.</p>
            <p>哑标可以省略求和符号.</p>
        </div>

        <div class="Card-Definition">
            <b>自由标（free index）</b>
            <p>仅出现一次的下标.</p>
        </div>

        <div class="Card-Example">
            $$\\begin{align}
            &x_1y_1 + x_2y_2 + \\cdots + x_ny_n\\\\
            =& \\sum_{i=1}^n x_iy_i\\\\
            =& x_iy_i
            \\end{align}$$
            <p>其中\\(i\\)为哑标，可以省略求和符号.</p>
        </div>

        <div class="Card-Example">
            $$\\begin{align}
            &x_{11}y_n + x_{22}y_n + \\cdots + x_{kk}y_n\\\\
            =& \\sum_{m=1}^k x_{mm}y_n\\\\
            =& x_{mm}y_n
            \\end{align}$$
            <p>其中\\(m\\)为哑标，可以省略求和符号；\\(n\\)为自由标，保持不变.</p>
        </div>

        <div class="Card-Example">
            $$\\begin{align}
            &x_1y_1z_1 + x_2y_2z_2 + \\cdots + x_ny_nz_n\\\\
            =& \\sum_{i=1}^n x_iy_iz_i\\\\
            \\end{align}$$
            <p>不存在哑标，不可省略求和符号.</p>
        </div>

        <div class="Card-Example">
            $$\\begin{align}
            &x_{ij}y_i\\\\
            =& \\sum_{i=1}^n x_{ij}y_i\\\\
            =& x_{1j}y_1 + x_{2j}y_2 + \\cdots + x_{nj}y_n
            \\end{align}$$
            <p>其中\\(i\\)为哑标，需要加上求和符号；\\(j\\)为自由标，保持不变.</p>
        </div>


        
        <div id="PageEnd"></div>` },
  "note/optics/opticalfabrication/chapter10": { title: "应用光学", content: `<h1>第十章</h1>
        <h2>第三节 平面光学零件的加工技术</h2>
        <h3>分离器法加工高精度平面零件</h3>
        $$\\frac{N_1}{N_2} = \\frac{D_1^2}{D_2^2}$$
        <p>\\(N_1\\)——直径为\\(D_1\\)的平面镜表面光圈数.</p>
        <p>\\(N_2\\)——直径为\\(D_2\\)的分离器表面光圈数.</p>

        <h2>第四节 平面光学零件的检测</h2>
        <b>平行差测量方法</b>
        <ul>
            <li>平面干涉仪</li>
            <li>泰曼干涉仪</li>
        </ul>

        <b>三块互检法检验面形</b>

        <br>
        <b>棱镜上盘方法</b>
        <ul>
            <li>刚性上盘法</li>
            <li>弹性上盘法</li>
            <li>石膏上盘法</li>
        </ul>


        <ul class="navibar">
            <li><a href="/note/optics/opticalfabrication/chapter9">上一页</a></li>
            <li class="next"><a href="/note/optics/opticalfabrication/chapter12">下一页</a></li>
        </ul>` },
  "note/optics/opticalfabrication/chapter12": { title: "应用光学", content: `<h1>第十二章 非球面光学零件加工技术</h1>

        <h2>第一节 概述</h2>
        <b>非球面的优点</b>
        <ul>
            <li>具有优良的光学性能</li>
            <li>改善了成像质量</li>
            <li>简化了光学系统</li>
            <li>减轻了仪器的质量</li>
        </ul>

        <table>
            <tr>
                <td colspan="2">非球面零件的分类</td>
            </tr>
            <tr>
                <td rowspan="2">安非球面对称轴的数量分</td>
                <td>单轴对称非球面</td>
            </tr>
            <tr>
                <td>二轴对称非球面</td>
            </tr>
            <tr>
                <td rowspan="3">按外形尺寸分</td>
                <td>大型非球面</td>
            </tr>
            <tr>
                <td>中型非球面</td>
            </tr>
            <tr>
                <td>微型非球面</td>
            </tr>
            <tr>
                <td rowspan="3">按制造精度分</td>
                <td>高精度非球面</td>
            </tr>
            <tr>
                <td>中等精度非球面</td>
            </tr>
            <tr>
                <td>低精度非球面</td>
            </tr>
        </table>

        <b>面形精度的要求</b>
        <p>P-V值，面形误差从峰到谷的值</p>
        <p>RMS，均方根误差</p>


        <ul class="navibar">
            <li></li>
            <li class="next"><a href="/note/optics/opticalfabrication/chapter2">下一页</a></li>
        </ul>` },
  "note/optics/opticalfabrication/chapter13": { title: "应用光学", content: `<h1>第十三章 超光滑表面加工技术</h1>
        <b>超光滑表面</b>
        <p>粗糙度为纳米级的表面.</p>

        <b>加工方法</b>
        <ul>
            <li>浴法抛光</li>
            <li>浮法抛光</li>
            <li>聚四氟乙烯抛光（Teflon抛光）</li>
            <li>离子束抛光</li>
            <li>等离子体辅助抛光</li>
            <li>磨粒弹性抛光</li>
            <li>磁流变抛光</li>
        </ul>


        <ul class="navibar">
            <li></li>
            <li class="next"><a href="/note/optics/opticalfabrication/chapter2">下一页</a></li>
        </ul>` },
  "note/optics/opticalfabrication/chapter14": { title: "应用光学", content: `<h1>第十四章 塑料光学零件成型技术</h1>

        <h2>第二节 光学塑料零件的注射成型技术</h2>
        <b>注塑成型过程</b>
        <p>原料预热干燥、加入塑料，使其达到一定粘度、通过喷嘴射入闭合的模腔、冷却固化定型、开模取出成品。</p>



        <ul class="navibar">
            <li></li>
            <li class="next"><a href="/note/optics/opticalfabrication/chapter2">下一页</a></li>
        </ul>` },
  "note/optics/opticalfabrication/chapter2": { title: "应用光学", content: `<h1>第一章 光学零件加工的技术条件及工艺系统</h1>

        <h2>光学零件图</h2>

        <b>对透镜光学零件的要求</b>
        <ul>
            <li>光圈数\\(N\\)</li>
            <li>局部光圈数\\(\\Delta N\\)</li>
            <li>中心偏差\\(C\\)</li>
            <li>样板精度\\(\\Delta R\\)</li>
            <li>表面疵病等级\\(B\\)</li>
            <li>光学零件的气泡度\\(q\\)</li>
        </ul>

        <b>加工余量</b>
        <p>为获得所需的零件形状、尺寸和表面质量，在加工过程中，必须从玻璃毛坯上磨去一定的玻璃层，此玻璃层（或其他材料层）称为加工余量.</p>

        <ul class="navibar">
            <li class="next"><a href="/note/optics/opticalfabrication/chapter3">下一页</a></li>
        </ul>` },
  "note/optics/opticalfabrication/chapter3": { title: "应用光学", content: `<h1>第三章 光学零件毛坯的生产</h1>

        <h2>光学零件的毛坯加工</h2>
        <b>光学玻璃生产环节</b>
        <p>玻璃熔炼\\(\\rightarrow\\)玻璃成型</p>
        <b>玻璃成型方法</b>
        <ul>
            <li>浇筑法成型玻璃块</li>
            <li>滚压法成型玻璃板</li>
            <li>玻璃砖的成型</li>
        </ul>

        <b>退火的目的</b>
        <p>消除玻璃内应力和各部分光学不均匀性.</p>
        
        <h2>第二节 块料毛坯的生产</h2>
        <b>工艺流程</b>
        <p>切割、整平、划刻、磨外圈、开球面</p>

        <h2>第三节 毛坯的热加工方法</h2>
        <b>型料毛坯工艺</b>
        <ul>
            <li>热压成型法</li>
            <li>槽沉法</li>
        </ul>

        <b>热压成型法</b>
        <ul>
            <li>二次压型</li>
            <li>一次压型</li>
        </ul>

        <b>二次压型</b>
        <br><br>
        <b>退火</b>
        <p>消除玻璃在热压成型过程中产生的内应力和光学常数的不均匀性.</p>
        <p>粗退火\\(\\rightarrow\\)精密退火</p>
        <b>粗退火</b>
        <p>防止刚脱模的压型毛坯因急冷而变形炸裂.</p>
        <ul>
            <li>电炉退火</li>
            <li>草灰退火</li>
        </ul>

        <h3>槽沉法</h3>
        <p>利用玻璃坯料在塑性变形状态下，依靠自重变形（自由槽沉）或真空热吸（强制槽沉），使其充满一定形状和尺寸的模具。</p>




        <ul class="navibar">
            <li></li>
            <li class="next"><a href="/note/optics/opticalfabrication/chapter2">下一页</a></li>
        </ul>` },
  "note/optics/opticalfabrication/chapter4": { title: "应用光学", content: `<h1>第四章 粗磨</h1>

        <h2>第二节 铣削加工原理</h2>

        <b>范成法加工（粗磨的铣削加工）</b>
        <p>在铣磨机上，采用金刚石磨具成形加工玻璃的工序.</p>
        <p>范成法即利用磨轮刃口轨迹包络面成形球面的方法.</p>

        <img src="./Img/4.2.1.jpg" width="400"><br>
        <b>条件</b>
        <ul>
            <li>金刚石磨轮刃口通过工件顶点.</li>
            <li>磨轮轴线与工件轴线相交于点\\(O\\)，且两轴线夹角为\\(\\alpha\\).</li>
            <li>磨具绕自身轴线高速旋转，工件绕自身轴线低速旋转.</li>
        </ul>
        <p>这种运动轨迹的包络面就形成球面.</p>
        <p>当磨具选定时，中径\\(D_m\\)和端面圆弧半径\\(r\\)为定值，调节不同\\(\\alpha\\)角，即可加工不同曲率半径\\(R\\)的球面.</p>

        <table>
            <tr>
                <td>凸透镜</td>
                <td>凹透镜</td>
            </tr>
            <tr>
                <td><img src="./Img/4.2.2.png" width="250"></td>
                <td><img src="./Img/4.2.3.png" width="250"></td>
            </tr>
            <tr>
                <td>$$\\sin \\alpha = \\frac{D_m/2}{R+r}\\rightarrow R = \\frac{D_m}{2\\sin\\alpha}-r$$</td>
                <td>$$\\sin \\alpha = \\frac{D_m/2}{R-r}\\rightarrow R = \\frac{D_m}{2\\sin\\alpha}+r$$</td>
            </tr>
        </table>
          
        <h2>第三节 磨料和磨具</h2>
        <h3>磨料</h3>
        <p>研磨光学玻璃的磨料分为<b>天然磨料</b>和<b>人造磨料</b>两大类.</p>

        <b>粒度</b>
        <table>
            <tr>
                <td>方法</td>
                <td>粒度号</td>
                <td>含义</td>
            </tr>
            <tr>
                <td>筛选法</td>
                <td>\\(n^\\#\\)</td>
                <td>一英寸长度上有\\(n\\)个筛孔</td>
            </tr>
            <tr>
                <td>水选法</td>
                <td>\\(Wn\\)</td>
                <td>该号微粉主要组成的粒度上限尺寸为\\(n\\mu m\\)</td>
            </tr>
        </table>





        <h3>磨具</h3>
        <ul>
            <li>普通磨料制成的砂轮</li>
            <li>用结合剂固着的金刚石磨具（主要磨具：使用寿命长、生产效率高）</li>
        </ul>

        <b>常用结合剂</b>
        <ul>
            <li>青铜结合剂</li>
            <li>电镀结合剂</li>
            <li>树脂结合剂</li>
            <li>陶瓷结合剂</li>
        </ul>

        <b>磨具的硬度</b>
        <p>磨具表面的磨粒在外力作用下脱落的难易程度.</p>
        <p>磨具越硬则磨粒越难脱落.</p>

        <b>金刚石磨具的浓度</b>
        <p>在磨具金刚石层内，每立方厘米体积内含有金刚石的质量.</p>
        <p>规定每立方厘米中含有\\(4.4\\)克拉金刚石作为\\(100\\%\\)浓度.</p>

        <h2>第四节 铣磨加工中工艺参数的选择</h2>
        <b>铣磨深度</b>
        <p>工件转动一周的吃刀量.</p>

        <b>冷却液作用</b>
        <p>冷却、清洗、润滑.</p>


        <h2>第六节 铣磨球面产生的表面疵病</h2>

        <table>
            <tr><td colspan="2"><b>常见表面疵病</b></td></tr>
            <tr>
                <td>类型</td>
                <td>产生原因</td>
            </tr>
            <tr>
                <td>菊花纹（细密振纹）</td>
                <td>磨头误差与振动影响.</td>
            </tr>
            <tr>
                <td>宽疏菊花纹</td>
                <td>工件主轴的轴向窜动.</td>
            </tr>
            <tr>
                <td>麻点</td>
                <td>磨轮线速度选择不当、进刀速度与工件转速配合不好.</td>
            </tr>
            <tr>
                <td>擦贴环带有缺口</td>
                <td>光刀时间不够、密封垫圈过厚.</td>
            </tr>
            <tr>
                <td>擦贴环带脱空</td>
                <td>机床工件主轴轴线与磨头轴线不相交.</td>
            </tr>
            <tr>
                <td>球面偏心</td>
                <td>夹具定位面的偏心.</td>
            </tr>
        </table>

        <ul class="navibar">
            <li></li>
            <li class="next"><a href="/note/optics/opticalfabrication/chapter5">下一页</a></li>
        </ul>` },
  "note/optics/opticalfabrication/chapter5": { title: "应用光学", content: `<h1>第五章 精磨</h1>

        <h2>第二节 球面金刚石磨具的余弦磨耗规律</h2>
        <b>余弦磨耗（理想磨耗） </b>
        <br><img src="./Img/5.2.1.jpg" width="200"><br>
        <p>磨具磨损后的表面与磨损前的表面具有相同的曲率半径.</p>
        <p>磨具上任意点\\(i\\)的磨耗量\\(\\Delta h_i\\)与磨具顶点的磨耗量\\(\\Delta h\\)之间的近似关系为：</p>
        $$\\Delta h_i = \\Delta h\\cos\\theta$$

        <h2>球面金刚石高速精磨工艺</h2>
        <b>覆盖比</b>
        <p>排列在磨具上的精磨片表面积之和与磨盘整个球缺表面积的比.</p>

        <h2>第六节 金刚石精磨的冷却液</h2>
        <b>作用</b>
        <ul>
            <li>冷却</li>
            <li>润滑</li>
            <li>清洗</li>
            <li>化学作用</li>
        </ul>



        <ul class="navibar">
            <li><a href="/note/optics/opticalfabrication/chapter4">上一页</a></li>
            <li class="next"><a href="/note/optics/opticalfabrication/chapter6">下一页</a></li>
        </ul>` },
  "note/optics/opticalfabrication/chapter6": { title: "应用光学", content: `<h1>第六章 抛光</h1>

        <h2>第一节 抛光机理</h2>
        <b>抛光的目的</b>
        <ul>
            <li>去除精磨的破坏层，达到规定的表面质量要求.</li>
            <li>精修面形，达到图纸要求的光圈和局部光圈，最后形成透明规则的表面.</li>
        </ul>

        <b>关于抛光本质的三种学说</b>
        <ul>
            <li>机械磨削理论</li>
            <li>化学作用理论</li>
            <li>热的表面流动理论</li>
        </ul>

        <h2>第二节 样板检验原理</h2>
        <h3>一、样板检验原理</h3>
        <b>面形偏差</b>
        <p>被检验光学表面相对于参考光学表面的偏差.</p>

        <b>原理</b>
        <p>当光学零件的面形与样板参考表面的面形不一致时，二者间形成一个楔形空气隙，产生薄膜干涉现象，形成牛顿环.</p>

        <b>最大空气隙厚度</b>
        $$k = \\lambda/\\Delta \\lambda$$
        <p>\\(\\lambda\\)取白光照射平均波长\\(0.5 \\mu m\\)</p>
        <p>\\(\\Delta \\lambda\\)为人眼所能分辨的波长范围，一般取\\(10nm\\)</p>
        <p>故\\(k=50\\)，\\(\\Delta h = k\\frac{\\lambda}{2} = 12.5\\mu m\\)</p>

        <h3>二、光圈的识别与度量</h3>
        <b>高低光圈</b>
        <p>用样板检验工件时，若两者在边缘接触，当空气隙缩小时，条纹从边缘向中间移动，则称低光圈；若两者在中间接触，当空气隙缩小时，条纹从中心向边缘移动，则称高光圈.</p>

        <b>高低光圈的识别方法</b>
        <ul>
            <li>周边加压法</li>
            <li>边缘点力法</li>
            <li>色序法</li>
        </ul>
        
        <table>
            <tr>
                <td colspan="3"><b>周边加压法光圈识别与绘制</b></td>
            </tr>
            <tr>
                <td rowspan="2">高低光圈</td>
                <td>高光圈</td>
                <td>整体包围压点</td>
            </tr>
            <tr>
                <td>低光圈</td>
                <td>整体背离压点</td>
            </tr>
            <tr>
                <td rowspan="2">中心</td>
                <td>中心高</td>
                <td>条纹中心背离压点</td>
            </tr>
            <tr>
                <td>中心低</td>
                <td>条纹中心凸向压点</td>
            </tr>
            <tr>
                <td rowspan="2">边缘</td>
                <td>蹋边</td>
                <td>边缘蹋向压点</td>
            </tr>
            <tr>
                <td>翘边</td>
                <td>边缘翘起背离压点</td>
            </tr>
        </table>
        <img src="./Img/6.2.1.png">
        <img src="./Img/6.2.2.png"><br>

        <b>光圈数的度量</b>
        <ul>
            <li>\\(N\\gt 1\\)时：直径方向上最多条纹数的一半</li>
            <li>\\(N\\lt 1\\)时：直径方向上干涉条纹的弯曲量\\(h\\)相对于条纹间距\\(H\\)的比值\\(h/H\\)</li>
        </ul>

        <b>小样板检测大零件</b>
        $$N_2 = N_1(D_2/D_1)^2$$
        <p>\\(N_2\\)——小样板检验允许的光圈数</p>
        <p>\\(N_1\\)——图纸上提出的光圈要求</p>
        <p>\\(D_2\\)——样板直径</p>
        <p>\\(D_1\\)——零件直径</p>

        <h2>第五节 抛光膜层材料及抛光粉</h2>
        <b>晶体抛光粉的选择要求</b>
        <p>硬度和熔点应高于加工材料，接近为好，粒度均匀.</p>

        <ul class="navibar">
            <li><a href="/note/optics/opticalfabrication/chapter5">下一页</a></li>
            <li class="next"><a href="/note/optics/opticalfabrication/chapter7">下一页</a></li>
        </ul>` },
  "note/optics/opticalfabrication/chapter7": { title: "应用光学", content: `<h1>第七章 透镜的定心磨边</h1>

        <h2>第一节 定义及术语</h2>

        <b>中心误差</b>
        <p>光学表面定心顶点处的法线对基准轴的偏移量.</p>

        <b>定心</b>
        <p>校正中心误差的过程.</p>

        <b>边厚差</b>
        <p>透镜边缘区域厚度与中心区域厚度的差异.</p>
        $$\\Delta t \\approx \\frac{CD}{R}$$
        <p>\\(\\Delta t\\)——透镜的边厚差</p>
        <p>\\(C\\)——透镜中心偏差</p>
        <p>\\(D\\)——透镜外圆直径</p>
        <p>\\(R\\)——球面曲率半径</p>

        <h2>第二节 光学定心的原理及方法</h2>
        <ul>
            <li>透镜表面直接反射像定心</li>
            <li>球心自准反射像定心</li>
            <li>球心自准透射像定心</li>
        </ul>

        <h2>第三节 机械定心的原理及方法</h2>
        <b>机械定心条件</b>

        <ul class="navibar">
            <li><a href="/note/optics/opticalfabrication/chapter6">下一页</a></li>
            <li class="next"><a href="/note/optics/opticalfabrication/chapter8">下一页</a></li>
        </ul>` },
  "note/optics/opticalfabrication/chapter8": { title: "应用光学", content: `<h1>第八章 光学零件的胶合</h1>

        <h2>第一节 概述</h2>
        <b>胶合</b>
        <p>把两块或多块单个零件，用胶粘剂或光胶等方法，按一定技术要求连接在一起的工艺过程.</p>

        <b>胶合的目的</b>
        <ul>
            <li>改善像质</li>
            <li>减少反射光能损失</li>
            <li>简化复杂零件的加工</li>
            <li>保护刻划面</li>
        </ul>

        <b>胶合方式</b>
        <ul>
            <li>树脂胶合法</li>
            <li>光胶法</li>
        </ul>

        <h2>第二节 树脂胶合法</h2>
        <b>粘结剂的种类</b>
        <ul>
            <li>天然冷杉树脂胶</li>
            <li>甲醇胶</li>
            <li>光学环氧胶</li>
            <li>光学光敏胶</li>
        </ul>

        <h2>第三节 光胶法</h2>
        <b>光胶法（光胶接触法）</b>
        <p>依靠分子间的吸引力，使两个光学零件的抛光表面紧密贴合在一起.</p>




        <ul class="navibar">
            <li></li>
            <li class="next"><a href="/note/optics/opticalfabrication/chapter9">下一页</a></li>
        </ul>` },
  "note/optics/opticalfabrication/chapter9": { title: "应用光学", content: `<h1>第九章 球面光学样板的加工</h1>

        <b>光学样板（样板）</b>
        <p>按用途分</p>
        <ul>
            <li>标准样板：复制工作样板</li>
            <li>加工样板：检验光学零件</li>
        </ul>

        <p>按形状分</p>
        <ul>
            <li>球面样板</li>
            <li>平面样板</li>
            <li>柱面样板</li>
        </ul>


        <ul class="navibar">
            <li><a href="/note/optics/opticalfabrication/chapter8">上一页</a></li>
            <li class="next"><a href="/note/optics/opticalfabrication/chapter10">下一页</a></li>
        </ul>` },
  "note/optics/opticalfabrication/opticalmaterial": { title: "应用光学", content: `<h1>第一章 光学材料</h1>

        <h2>概述</h2>
        <b>光学元件</b>
        <p>光学元件是光学系统的基本组成单元.</p>
        <p>大部分光学元件起成像作用，如透镜、棱镜、反射镜等.</p>
        <p>还有一些起特殊作用（如分光、传像、滤波等）的光学元件，如分划板、滤光片、光栅用以光学纤维件等.</p>
        <p>新型光学零件：全息透镜、梯度折射率透镜、二元光学元件等.</p>


        <b>光学材料</b>
        <p>包括光学玻璃、光学陶瓷、光学晶体、光学塑料等.</p>


        <h2>光学玻璃</h2>
        <b>光学玻璃和普通玻璃（工业玻璃）之间的主要区别</b>
        <p>光学玻璃具有高度的透明性、物理及化学上的高度均匀性及特定和精确的光学常数（折射率、阿贝数）.</p>

        <b>光学玻璃的主要成分</b>
        <p>二氧化硅（石英砂，<span lang="en">SiO<sub>2</sub></span>）</p>

        <b>组成玻璃的氧化物分类</b>
        <ul>
            <li><span lang="en">AO<sub>2</sub>、A<sub>2</sub>O<sub>3</sub>、A<sub>2</sub>O<sub>5</sub></span>型氧化物：玻璃形成体，构成玻璃网络体，生成玻璃.</li>
            <li><span lang="en">A<sub>2</sub>O、AO</span>型氧化物：不能生成玻璃的网络体，只是插入玻璃的网络结构中，构成网络外体，但能改变玻璃的性质.</li>
        </ul>
        <p>构成玻璃网络体的氧化物含量越高，化学稳定性越好；相反，构成网络外体的氧化物含量越高，化学稳定性越差.</p>

        <b>物质的玻璃态</b>
        <p>严格来讲玻璃不是固体。玻璃熔融体再冷却过程中虽不像固体那样具有确定的固化温度，但随着粘度的增加，玻璃具有固体的机械性质。但由于熔融体迅速冷却，内部分子来不及规则排列就凝成固态，因此玻璃保留了液态分子无规则排列的结构，即低温的固态保留了高温液态的无定性结构，称为玻璃态.</p>

        <h3>玻璃的物理特性</h3>
        <ul>
            <li>固体的机械性质</li>
            <li>光学性能</li>
            <li><b>各项同性</b>
                <p>玻璃的性质在各向测得的数值相等.</p>
            </li>
            <li><b>介稳状态</b>
            <p>在一定条件下，物质可能处于相对稳定状态，但不是能量最低储存状态，称为介稳状态.</p>
            </li>
            <li>玻璃从熔融态向固态转化的过程是连续可逆的.</li>
        </ul>

        <h2>无色光学玻璃</h2>
        <h3>光学玻璃的命名</h3>
        <b>分类和命名依据</b>
        <p>折射率、色散系数（阿贝数）.</p>

        <b>分类</b>
        <ul>
            <li>冕牌玻璃（<span lang="en">K</span>）</li>
            <li>火石玻璃（<span lang="en">F</span>）</li>
        </ul>
        <ul>
            <li>低折射率玻璃：轻（<span lang="en">Q</span>）</li>
            <li>高折射率玻璃：重（<span lang="en">Z</span>）</li>
        </ul>


        <h3>无色光学玻璃的质量指标</h3>
        <b>折射率、色散系数的允差及一致性</b>
        <p>折射率、色散系数与标准值所允许的误差，规定为<span lang="en">0、1、2、3、4</span>五类.</p>
        <p>同一批光学玻璃中，折射率、色散系数的不一致性，规定为<span lang="en">A、B、C、D</span>四个等级.</p>

        <b>光学均匀性</b>
        <p>同一块玻璃中，各部分折射率变化的不均匀程度.</p>
        <p>产生原因：退火温度不均匀或内部残余应力使玻璃各部分折射率产生差异.</p>
        <p>依据玻璃最小鉴别角\\(\\Phi\\)与平行光管理论鉴别角\\(\\Phi_0\\)的比值\\(\\Phi/\\Phi_0\\)，分为<span lang="en">1、2、3、4</span>.</p>

        <b id="StressBirefringence">应力双折射</b>
        <p>一束光通过有内应力的玻璃，将分成两束传播速度不同的光线.</p>
        <p>其中一束光遵守折射定律，称为寻常光线<span lang="en">"o"</span>光线；另一束光线不按折射定律传播，称为非常光线或<span lang="en">"e"</span>光线.</p>
        <p>按<span lang="en">o</span>光和<span lang="en">e</span>光通过每\\(1\\)<span lang="en">cm</span>厚玻璃产生的光程差大小，将应力双折射由高到低分为<span lang="en">1、1a、2、3、4</span>五类.</p>

        <b>光吸收系数<span lang="en">E</span></b>
        <p>白光通过\\(1\\)<span lang="en">cm</span>厚的玻璃所吸收的光通量与进入该玻璃的光通量之比.</p>
        <p>分为<span lang="en">00、0、1、2、3、4、5、6</span>八类.</p>
        <b>条纹度、气泡度</b>


        <h2>有色光学玻璃（光学滤光玻璃）</h2>
        <b>作用</b>
        <p>有色光学玻璃能够选择透过特定波长的光线，或透过连续光谱中一定宽度光谱范围的光线，或均匀减弱白光的光谱等。</p>

        <b>分类</b>
        <ul>
            <li>离子着色的选择吸收玻璃（窄带滤光片）</li>
            <li>中性玻璃（衰减片）</li>
            <li>硒镉玻璃（带通滤光片</li>
        </ul>

        <b>离子着色的选择吸收玻璃</b>
        <p>包括透紫外线玻璃（ZWB）等</p>

        <h2>特种光学玻璃</h2>
        <h3>光学石英玻璃</h3>
        <table>
            <tr>
                <td colspan="3"><b>国产光学石英玻璃</b></td>
            </tr>
            <tr>
                <td>牌号</td>
                <td>类型</td>
                <td>光谱透过范围</td>
            </tr>
            <tr>
                <td lang="en">JS<sub>1</sub></td>
                <td>远紫外光学石英玻璃</td>
                <td>\\(0.185\\sim 2.5\\mu m\\)</td>
            </tr>
            <tr>
                <td lang="en">JS<sub>2</sub></td>
                <td>紫外光学玻璃</td>
                <td>\\(0.24\\sim 2.5\\mu m\\)</td>
            </tr>
            <tr>
                <td lang="en">JS<sub>3</sub></td>
                <td>红外光学石英玻璃</td>
                <td>\\(0.24\\sim 3.6\\mu m\\)</td>
            </tr>
        </table>

        <h2>微晶玻璃</h2>
        <b>性能</b>
        <p>微晶玻璃在很宽的温度范围内（\\(-160\\sim 160 ℃\\)）热膨胀系数均很小，在室温下膨胀系数接近于\\(0\\).</p>

        <h2 id="Crystal">光学晶体</h2>
        <div class="Card-Definition">
            <b>晶体</b>
            <p>具有格子结构的固体.</p>
        </div>
        
        <b>晶胞</b>
        <p>组成实际晶体的最小单位.</p>
        
        <b>晶轴</b>
        <p>晶胞三个棱的方向称为晶轴.</p>

        <b>晶体的基本性质</b>
        <ul>
            <li>均匀性</li>
            <li>各向异性：物质的性质随测量方向的不同而不同.</li>
            <li>对称性</li>
            <li>自范性：晶体具有自发形成封闭几何多面体外形的性质.</li>
            <li>最小内能性</li>
            <li>稳定性
                <p>晶体的稳定性是最小内能性的必然结果.</p>
                <p></p>
            </li>
        </ul>

        <h3>晶体的力学性质</h3>
        <b>解理</b>
        <p>晶体在外界定向机械力作用下，按着一定的方向分裂成光滑平面的能力.</p>
        <p>因解理而成的平面称为<b>解理面</b>.</p>

        <b>硬度</b>
        <p>硬度表示物体对外来机械侵入锁表现的抵抗能力.</p>

        <h3>晶体的溶解度</h3>
        <p>在一定温度下，该晶体在\\(100\\)<span lang="en">g</span>水中所能溶解的克数.</p>


        <h2>光学塑料</h2>
        <ul>
            <li>聚甲基丙烯酸甲酯（<span lang="en">PMMA</span>）</li>
            <li>聚苯乙烯</li>
            <li>环氧光学材料</li>
            <li><span lang="en">CR39</span></li>
        </ul>

        <ul class="navibar">
            <li class="next"><a href="/note/optics/opticalfabrication/chapter2">下一页</a></li>
        </ul>` },
  "note/optics/opticalmeasurement/catalog": { title: "光学测量", content: `<h1>光学测量</h1>

        <h2>目录</h2>
        <a href="/note/optics/opticalmeasurement/chapter1">第一章</a>` },
  "note/optics/opticalmeasurement/chapter1": { title: "应用光学", content: `<h1>第一章 光学测量基础</h1>
        <h2>第二节 目视光学仪器的对准误差和调焦误差</h2>
        <b>对准（横向对准）</b>
        <p>目标和比较标记在垂直于瞄准轴方向上重合或置中的过程.</p>
        <b>调焦（纵向对准）</b>
        <p>目标和比较标记沿瞄准轴方向重合或置中的过程.</p>


        <table>
            <tr>
                <td colspan="6"><b>人眼的对准误差\\(\\delta\\)</b></td>
            </tr>
            <tr>
                <td>压线对准</td>
                <td>游标对准</td>
                <td>夹线对准</td>
                <td>叉丝对准</td>
                <td>狭缝夹线对准</td>
                <td>狭缝叉丝对准</td>
            </tr>
            <tr>
                <td>$$60''$$</td>
                <td>$$15''$$</td>
                <td>$$10''$$</td>
                <td>$$10''$$</td>
                <td>$$10''$$</td>
                <td>$$10''$$</td>
            </tr>
        </table>

        <table>
            <tr>
                <td rowspan="2"></td>
                <td rowspan="2">对准误差</td>
                <td colspan="2">调焦误差</td>
            </tr>
            <tr>
                <td>清晰度法</td>
                <td>消视差法</td>
            </tr>
            <tr>
                <td><a href="../AppliedOptics/TypicalOpticalSystem.html#TeleSystem">望远系统</a></td>
                <td>$$\\gamma = \\frac{\\delta}{\\Gamma}(')$$</td>
                <td>$$\\frac{1}{\\sqrt3}(\\frac{0.29\\alpha_e}{\\Gamma D} + \\frac{4\\lambda}{3D^2})(m^{-1})$$</td>
                <td>$$\\sigma = \\frac{1}{\\sqrt3}\\frac{0.58\\delta}{\\Gamma^2(D' - D_e/2)}(m^{-1})$$</td>
            </tr>
            <tr>
                <td><a href="../AppliedOptics/TypicalOpticalSystem.html#MicroSystem">显微系统</a></td>
                <td>$$\\Delta y = \\frac{0.073}{\\Gamma_M}\\delta(mm)$$</td>
                <td>$$\\sigma = \\frac{1}{\\sqrt3}(\\frac{0.073n\\alpha_e}{2\\Gamma NA} + \\frac{n\\lambda}{3NA^2})(mm)$$</td>
                <td>$$\\sigma = \\frac{1}{\\sqrt3}(\\frac{0.073n\\delta}{\\Gamma NA}\\frac{D'}{D'-D_e/2})(mm)$$</td>
            </tr>
        </table>
        <p>[注]\\(n\\)通常取\\(1\\)</p>
        <p>[注]求显微系统对准误差时，\\(\\delta\\)的单位为分（\\('\\)）.</p>

        <b>光电对准装置</b>
        <ul>
            <li>光电望远镜</li>
            <li>光电显微镜</li>
        </ul>


        <h2>第三节 光学测量仪器的基本部件</h2>

        <h3>平行光管的调校</h3>
        <b>可调前置镜法</b>
        <p>调校标准不确定度计算：</p>
        <p>清晰度法</p>
        $$\\sigma_{TP_1} = \\frac{1}{\\sqrt3}(\\frac{0.29\\alpha_e}{\\Gamma_T D} + \\frac{4\\lambda}{3D^2})$$
        <p>消视差法</p>
        $$\\sigma_{TP_1} = \\frac{1}{\\sqrt3}\\frac{0.58\\delta}{\\Gamma_T^2(D' - D_e/2)}$$
        
        <b>自准直法</b>
        <p>清晰度法</p>
        $$\\sigma_{TP_1} = \\frac{1}{2\\sqrt3}(\\frac{0.29\\alpha_e}{\\Gamma D_{有效}}+ \\frac{4\\lambda}{3D_{有效}^2})$$
        
        <p>消视差法</p>
        $$\\sigma_{TP} = \\frac{1}{2\\sqrt3}[\\frac{0.58\\delta}{\\Gamma^2(D'-D_e/2)}]$$


        <p>平面反射镜面形偏差（系统误差）</p>
        $$SD_0 = \\frac{4N\\lambda}{D_0^2}$$

        <b>五棱镜法</b>
        $$\\sigma_{TP} = \\frac{1}{\\sqrt3}\\frac{0.29\\delta}{\\Gamma(D - D_p)}$$

        <p>[注]消视差法需满足条件\\(D' \\gt D_e/2\\)，否则不可使用.</p>
        <p>[注]单位均为\\(m^{-1}\\)</p>

        <b>参数表</b>
        <table>
            <tr>
                <td colspan="7">通用</td>
            </tr>
            <tr>
                <td>人眼极限分辨角</td>
                <td>人眼瞳孔直径</td>
                <td>人眼对准误差</td>
                <td>入射光波长</td>
                <td>平行光管物镜口径</td>
                <td>系统出瞳直径</td>
                <td>有效通光口径</td>
            </tr>
            <tr>
                <td>$$\\alpha_e = 2'$$</td>
                <td>$$D_e = 2mm$$</td>
                <td>$$\\delta(')$$</td>
                <td>$$\\lambda(\\mu m)$$</td>
                <td>$$D$$</td>
                <td>$$D' = D/\\Gamma$$</td>
                <td>$$D_{有效} = \\Gamma\\min\\{D',D_e\\}$$</td>
            </tr>
        </table>
        <br>
        <table>
            <tr>
                <td>前置镜法</td>
                <td colspan="3">自准直法</td>
            </tr>
            <tr>
                <td>前置镜放大倍率</td>
                <td>光圈数</td>
                <td>平面反射镜口径</td>
                <td>自准直目镜放大倍率</td>
            </tr>
            <tr>
                <td>$$\\Gamma_T = f_o/f_e \\gt 1$$</td>
                <td>$$N$$</td>
                <td>$$D_0$$</td>
                <td>$$\\Gamma = f'/f_m'$$</td>
            </tr>
        </table>

        <b>自准直目镜</b>
        <p>带<b>分划板</b>和<b>分划板照明装置</b>的目镜.</p>

        <table>
            <tr>
                <td colspan="4">三种自准直目镜比较</td>
            </tr>
            <tr>
                <td></td>
                <td>高斯式自准直目镜</td>
                <td>阿贝式自准直目镜</td>
                <td>双分划板式自准直目镜</td>
            </tr>
            <tr>
                <td>反射像亮度</td>
                <td>暗</td>
                <td>亮</td>
                <td>暗</td>
            </tr>
            <tr>
                <td>反射像衬度</td>
                <td>差</td>
                <td>好</td>
                <td>好</td>
            </tr>
            <tr>
                <td>视放大率</td>
                <td>小</td>
                <td>大</td>
                <td>大</td>
            </tr>
            <tr>
                <td>视场</td>
                <td>大</td>
                <td>小</td>
                <td>大</td>
            </tr>
            <tr>
                <td>失调</td>
                <td>无</td>
                <td>无</td>
                <td>有</td>
            </tr>
        </table>


        <ul class="navibar">
            <li class="next"><a href="/note/optics/opticalmeasurement/chapter2">下一页</a></li>
        </ul>` },
  "note/optics/opticalmeasurement/chapter2": { title: "应用光学", content: `<h1>第二章 光学玻璃主要光学性能测量</h1>
        <h2>光学玻璃折射率与色散的测量</h2>
        <b>测量光学玻璃折射率的方法</b>

        <table>
            <tr>
                <td></td>
                <td><span lang="en">V</span>棱镜法</td>
                <td>最小偏向角法</td>
                <td>全反射临界角法</td>
            </tr>
            <tr>
                <td>装置</td>
                <td><span lang="en">V</span>棱镜</td>
                <td>精密测角仪</td>
                <td>阿贝折光仪</td>
            </tr>
            <tr>
                <td>优点</td>
                <td>
                    精度高<br>
                    测量范围广<br>
                    被测件无需抛光
                </td>
                <td>
                    精度高<br>
                    测量范围广<br>
                    无需标准液和标准块
                </td>
                <td>
                    仪器价格低<br>
                    可测液体
                </td>
            </tr>
            <tr>
                <td>缺点</td>
                <td>
                    折射液要求高<br>
                    配置周期长<br>
                    仪器贵
                </td>
                <td>
                    仪器贵<br>
                    需抛光<br>
                    难操作
                </td>
                <td>
                    精度低<br>
                    测量范围窄<br>
                </td>
            </tr>
        </table>

        <h3><span lang="en">V</span>棱镜法</h3>
        $$n = (n_0^2 \\pm \\sin\\sqrt{n_0^2  - \\sin^2\\theta})^{1/2}$$
        <ul>
            <li>\\(n \\gt n_0\\)时，光线向上偏折，取“\\(+\\)”号.</li>
            <li>\\(n \\lt n_0\\)时，光线向下偏折，取“\\(-\\)”号.</li>
        </ul>

        <b>注意事项</b>
        <p>1、对被测样的要求</p>
        <p>看不到条纹和气泡，边长为15mm的立方体</p>
        <p>90°角误差小于1'</p>

        <p>2、折射液与待测棱镜折射率之差\\(\\Delta n \\lt 0.015\\)</p>
        <p>3、V棱镜角度要求\\(\\Delta 45° = \\pm 1', \\Delta 90° = \\pm 10''\\)</p>
        <p>4、平行光管光束高于V棱镜槽下尖端，广州通过度盘转轴.</p>

        <p class="Prove"><b>读数</b></p>


        <h2>第二节 光学玻璃<a href="../OpticalFabrication/OpticalMaterial.html#StressBirefringence">双折射</a>的测量</h2>
        <b>测量方法</b>
        <ul>
            <li>干涉色法：利用线偏振光干涉，由干涉色的识别确定光程差的大小.</li>
            <li>全波片法</li>
            <li>\\(1/4\\)波片法</li>
        </ul>

        <h3>\\(1/4\\)波片法</h3>
        <p>白光经过起偏器形成线偏振光，再通过具有双折射的玻璃形成椭圆偏振光.</p>

        <b>全波片法、1/4波片法的定义，二者的波片作用机理有何不同</b>
        <p>全波片：将仪器的测量基点移到最敏感区域，使微小光程差变化能引起干涉色的显著改变，提高测量精度.</p>
        <p>1/4波片：改变偏振态</p>
        <p class="Prove"><b>书后习题1356</b></p>

        <ul class="navibar">
            <li><a href="/note/optics/opticalmeasurement/chapter1">上一页</a></li>
            <li class="next"><a href="/note/optics/opticalmeasurement/chapter3">下一页</a></li>
        </ul>` },
  "note/optics/opticalmeasurement/chapter3": { title: "应用光学", content: `<h1>第三章 光学零部件的基本量测量</h1>
        <h2>第一节 光学面形偏差的检测</h2>
        <ul>
            <li>斐索平面干涉仪</li>
            <li>斐索球面干涉仪</li>
            <li>刀口阴影法</li>
            <li>玻璃样板法</li>
        </ul>
        <p class="Prove"><b>斐索干涉仪检测面形偏差的优缺点</b></p>
        <p class="Prove"><b>刀口阴影法判断面形偏差/曲率半径</b></p>
        
        <h2>第二节 球面曲率半径的测量</h2>
        <b>仪器</b>
        <p>环形球径仪</p>
        
        <b>环形球径仪选取原则</b>
        <p>尽量选择半径大的测量环，有利于减小测量标准不确定度.</p>

        <h2>第三节 焦距和顶焦距的测量</h2>
        <b>方法</b>
        <table>
            <tr>
                <td>方法</td>
                <td>适用范围</td>
            </tr>
            <tr>
                <td>放大倍率法</td>
                <td>正、负透镜</td>
            </tr>
            <tr>
                <td>附加透镜法</td>
                <td>负透镜</td>
            </tr>
            <tr>
                <td>附加接筒法</td>
                <td>显微物镜或其他短焦正透镜</td>
            </tr>
            <tr>
                <td>精密测角法</td>
                <td>长焦距平行光管物镜</td>
            </tr>
        </table>
        
        <h3>放大倍率法</h3>
        <b>要求（保证显微镜调焦精度）</b>
        <ul>
            <li>平行光管口径应大于待测透镜孔径.</li>
            <li>测量显微镜的数值孔径\\(NA\\)大于或等于待测透镜的像方孔径角\\(\\sin u'\\approx D/2f'\\).</li>
        </ul>


        <b>最小焦距</b>
        <p>光路中理想的平面光学元件应为零光焦度，实际的平面光学元件因存在工作面的面形偏差、玻璃材料的光学不均匀性以及装配应力变形等，所产生的很小的残余光焦度.</p>

        <h2>第四节 平面光学零件不平行度的测量</h2>

        <b>第一光学不平行度\\(\\theta_1\\)</b>
        <p>入射光轴截面内的分量.</p>        
        
        <b>第二光学不平行度\\(\\theta_2\\)</b>
        <p>垂直光轴截面内的分量.</p>

        <h3>直角棱镜<span lang="en">DⅠ-90°</span>的检测</h3>
        <b>像的区分</b>
        <p>哈气法：向竖直一面哈气，变模糊的像即为竖直面自准直像②.</p>

        <b>判断棱镜角度大小</b>
        <p>当像②位于水平面自准直像①左侧时，竖直面一侧角度小于45度，大端方向垂直纸面向内.</p>
        <p>当像②位于水平面自准直像①右侧时，竖水平一侧角度小于45度，大端方向垂直纸面向外.</p>

        <b>不平行度</b>
        $$\\theta_1 = \\phi_1/n$$
        $$\\theta_2 = \\phi_2/n$$
        <p>\\(\\phi_1\\)——像①与像②在水平方向上的距离.</p>
        <p>\\(\\phi_2\\)——像①与像②在竖直方向上的距离.</p>
        

        <h3>直角棱镜<span lang="en">DⅡ-180°</span>的检测</h3>
        <b>求\\(\\Delta 90°\\)</b>
        $$\\Delta 90° = \\frac{\\theta_1}{2} = \\frac{\\phi_1}{2n}$$
        <p>\\(\\phi_1\\)——像①与像⑤在水平方向上的距离.</p>

        <b>判断\\(\\Delta 90°\\)的正负</b>
        <p>黑屏从右移入光路</p>
        <p>若像④和像⑤右边先消失，\\(\\Delta 90° \\gt 0\\)</p>
        <p>若像④和像⑤左边先消失，\\(\\Delta 90° \\lt 0\\)</p>
        <b>\\(\\gamma_a\\)的值</b>
        $$\\gamma_A  = \\frac{\\theta_2}{2} = \\frac{\\phi_2}{2n}$$

        <b>棱镜大端方向</b>
        <p>若像④⑤均位于像①上方，则棱差大端方向垂直纸面向外.</p>
        <p>若像④⑤均位于像①下方，则棱差大端方向垂直纸面向内.</p>
        

        <ul class="navibar">
            <li><a href="/note/optics/opticalmeasurement/chapter2">上一页</a></li>
            <li class="next"><a href="/note/optics/opticalmeasurement/chapter4">下一页</a></li>
        </ul>` },
  "note/optics/opticalmeasurement/chapter4": { title: "应用光学", content: `<h1>第四章 光学系统特性参数检测</h1>

        <h2>显微系统光学特性参数检测</h2>
        <b>放大倍率</b>
        <b>数值孔径</b>

        <h2>望远系统光学特性参数检测</h2>

        <b>视度（<span lang="en">SD</span>）</b>
        <p>目视光学仪器出射光束的会聚或发散程度.</p>

        <b>视差</b>
        <p>通过目镜观察时，物像和标记相对于人眼不在同一深度.</p>
        <p>视差以<b>视差角</b>或<b>视度差</b>表示.</p>

        <ul class="navibar">
            <li><a href="/note/optics/opticalmeasurement/chapter3">上一页</a></li>
            <li class="next"><a href="/note/optics/opticalmeasurement/chapter5">下一页</a></li>
        </ul>` },
  "note/optics/opticalmeasurement/chapter5": { title: "应用光学", content: `<h1>第五章 光学系统像质检验与评价</h1>
        <h2>第一节 星点检验</h2>

        <p>星点检验无法检测场曲和畸变.</p>

        <h3>星孔直径的选择</h3>
        <b>星孔最大角直径</b>
        $$\\alpha_{max} = \\frac{0.61\\lambda}{D}$$
        <p>\\(\\lambda\\)——照射光源波长，白光照明取平均波长\\(0.56\\mu m\\).</p>
        <p>\\(D\\)——待测物镜的入瞳直径.</p>

        <b>最大星孔直径</b>
        $$d_{max} = \\alpha_{max} l$$

        <p>当使用平行光管时，\\(l = f_c'\\)，即为平行光管物镜焦距</p>
        <p>不使用平行光管时，通常将星点置于物镜前节点的距离\\(l = 20f'\\)处</p>

        <h3>观测显微镜放大倍率的选择</h3>
        <b>显微物镜数值孔径及放大倍率</b>
        <table>
            <tr>
                <td>待测物镜\\(D/f'\\)</td>
                <td lang="en">NA</td>
                <td>消色差显微物镜倍率</td>
            </tr>
            <tr>
                <td>$$\\lt 1/5$$</td>
                <td>$$0.1$$</td>
                <td>$$4^{\\times}$$</td>
            </tr>
            <tr>
                <td>$$1/5 \\sim 1/2.5$$</td>
                <td>$$0.25$$</td>
                <td>$$10^{\\times}$$</td>
            </tr>
            <tr>
                <td>$$1/2.5 \\sim 1/1.4$$</td>
                <td>$$0.40$$</td>
                <td>$$25^{\\times}$$</td>
            </tr>
            <tr>
                <td>$$1/1.4\\sim 1/0.8$$</td>
                <td>$$0.65$$</td>
                <td>$$40^{\\times}$$</td>
            </tr>
        </table>

        <b>显微镜总放大率</b>
        $$\\Gamma \\geq 125\\frac{D}{f'}\\alpha$$
        <p>一般取\\(\\alpha = 2' \\sim 4'\\)</p>
        $$\\Gamma = (250 \\sim 500) D/f'$$
        <p>对望远系统或其他平面光学元件做星点检验，应采用前置镜（望远镜）进行放大观测.</p>        
        $$\\Gamma = \\frac{D'}{2}\\alpha$$


        <h2>第二节 分辨率检测</h2>
        <b>栅格状分辨率图案（<span lang="en">WT-1005-62</span>型标准图案）</b>
        <ul>
            <li>每块\\(25\\)组，每组线条宽度由粗到细以几何级数递减.</li>
            <li>测量迅速可靠.</li>
            <li>空间频率不连续.</li>
        </ul>

        <b>照相物镜分辨率</b>
        $$N = N_0\\frac{f_c'}{f'} = \\frac{1000}{2b}\\frac{f_c'}{f'}(mm^{-1})$$
        <p>\\(b(\\mu m)\\)——依据刚能分辨的单元号和板号查表得.</p>
        <p>\\(f_c'\\)——平行光管焦距.</p>
        <p>\\(f'\\)——待测物镜焦距.</p>


        <h2>第三节 哈特曼法检测像差</h2>
        <b>可以检测</b>
        <p>球差、位置色差、像散、轴外球差、场曲、彗差</p>

        <b>不可检测</b>
        <p>畸变、倍率色差</p>
        <p>原因：无法确定主光线像高</p>


        <ul class="navibar">
            <li><a href="/note/optics/opticalmeasurement/chapter4">上一页</a></li>
            <li class="next"><a href="/note/optics/opticalmeasurement/chapter6">下一页</a></li>
        </ul>` },
  "note/optics/opticalmeasurement/chapter6": { title: "应用光学", content: `<h1>第六章 光学系统杂光与透射比检测</h1>
        <h2>第一节 光学系统的杂光</h2>
        <b>光学系统的杂光</b>
        <p>叠加到像面处的不参与直接成像的有害光.</p>

        <b>光学系统杂光的成因</b>
        <ul>
            <li>光学元件反射与散射</li>
            <li>机械部件的反射与散射</li>
            <li>相机内部各受光面的反射、散射与感光乳剂层的散射等</li>
        </ul>

        <h2>第二节 光学系统的透射比</h2>
        <b>光学系统的透射比</b>
        <ul>
            <li>光谱透射比</li>
            <li>白光透射比</li>
        </ul>

        <table>
            <tr>
                <td colspan="2"><b>积分球的作用</b></td>
            </tr>
            <tr>
                <td>光学系统杂光系数检测</td>
                <td>提供一个亮度均匀的拓展面源以及一个小的黑体目标</td>
            </tr>
            <tr>
                <td>光学系统透射比检测</td>
                <td>测量光通量</td>
            </tr>
        </table>


        <ul class="navibar">
            <li><a href="/note/optics/opticalmeasurement/chapter5">上一页</a></li>
            <li class="next"><a href="/note/optics/opticalmeasurement/chapter7">下一页</a></li>
        </ul>` },
  "note/optics/opticalmeasurement/chapter7": { title: "应用光学", content: `<h1>第七章 光学传递函数的测量</h1>

        <h2>光学传递函数的定义</h2>
        <b>以光曈传递函数表示光学传递函数<span lang="en">OTF</span></b>
        $$OTF(f_x, f_y) = c\\iint_GP(x,y)P^*(x-\\bar x, y-\\bar y)\\mathrm{d}x\\mathrm{d}y$$

        <h2>光学传递函数的测量方法</h2>
        <b>干涉法</b>
        <p>利用光学传递函数与光曈函数间的转换关系，以干涉仪测出镜头波像差，即可确定光曈函数\\(P(x,y)\\)，从而间接求得光学传递函数.</p>

        <b><span lang="en">OTF</span>与星点检验的关系</b>
        <ul>
            <li>星点像的光强分布以点扩散函数<span lang="en">PSF</span>表示.</li>
            <li>光学传递函数与星点像的光强分布构成一对傅里叶变换关系，两者包含有完全等价的信息.</li>
            <li><span lang="en">OTF</span>测量同星点检验一样，对小像差系统的像质鉴定很灵敏.</li>
        </ul>





        <ul class="navibar">
            <li><a href="/note/optics/opticalmeasurement/chapter6">上一页</a></li>
        </ul>` },
  "note/optics/opticalthinfilm/catalog": { title: "几何光学", content: `<h1>薄膜光学目录</h1>

        <a href="/note/optics/opticalthinfilm/chapter1">第一章 光学薄膜特性的理论计算</a>
        <br>
        <a href="/note/optics/opticalthinfilm/chapter2">第二章 光学薄膜特性的理论计算</a>
        <br>
        <a href="/note/optics/opticalthinfilm/chapter3">第三章 光学薄膜系统的设计</a>` },
  "note/optics/opticalthinfilm/chapter1": { title: "应用光学", content: `<h1>第一章 光学薄膜特性的理论计算</h1>

        <h2>概述</h2>

        <b>光学薄膜的类型与符号</b>
        <table>
            <tr>
                <td>类型</td>
                <td>减反膜</td>
                <td>滤光膜</td>
                <td>保护膜</td>
                <td>内反射</td>
                <td>外反膜</td>
            </tr>
            <tr>
                <td>符号</td>
                <td><img src=".\\img\\Film1.png" width="50"></td>
                <td><img src=".\\img\\Film2.png" width="50"></td>
                <td><img src=".\\img\\Film3.png" width="50"></td>
                <td><img src=".\\img\\Film4.png" width="50"></td>
                <td><img src=".\\img\\Film5.png" width="50"></td>
            </tr>
            <tr>
                <td>类型</td>
                <td>高反膜</td>
                <td>分束膜</td>
                <td>分色膜</td>
                <td>偏振膜</td>
                <td>导电膜</td>
            </tr>
            <tr>
                <td>符号</td>
                <td><img src=".\\img\\Film6.png" width="50"></td>
                <td><img src=".\\img\\Film7.png" width="50"></td>
                <td><img src=".\\img\\Film8.png" width="50"></td>
                <td><img src=".\\img\\Film9.png" width="50"></td>
                <td><img src=".\\img\\Film10.png" width="50"></td>
            </tr>
        </table>

        <h2>第一节 单色平面电磁波</h2>

        <b>复折射率</b>
        $$N = c/v = n - ik$$
        其中，\\(n\\)为介质的折射率，\\(k\\)为消光系数。
        <br><br>

        <b>沿给定方向余弦\\((\\alpha,\\beta,\\gamma)\\)传播的平面波</b>
        $$\\begin{align}
        \\mathbf{E} &= \\mathbf{E}_0\\exp\\{i[\\omega t - \\frac{2\\pi N}{\\lambda}(\\alpha x + \\beta y + \\gamma z)]\\}\\\\
                   &= \\mathbf{E}_0\\exp\\{i[\\omega t - \\frac{2\\pi N}{\\lambda}\\mathbf{S_0}\\cdot \\mathbf{r}]\\}
        \\end{align}$$
        其中，\\(\\mathbf{S_0} = (\\alpha, \\beta, \\gamma)\\)为方向余弦，\\(\\mathbf{r} = (x, y, z)\\)为坐标矢径。

        $$
        \\begin{align}
        &\\begin{cases}
        \\nabla\\times\\mathbf{H} = \\mathbf{j} + \\frac{\\partial \\mathbf{D}}{\\partial t}\\\\
        \\frac{\\partial \\mathbf{E}}{\\partial t} = i\\omega\\mathbf{E}\\\\
        \\mathbf{D} = \\epsilon \\mathbf{E}\\\\
        \\mathbf{j} = \\sigma \\mathbf{E}
        \\end{cases}
        \\Rightarrow
        \\nabla\\times\\mathbf{H} = (\\sigma + i\\omega\\epsilon)\\mathbf{E}\\\\

        &\\because N^2 = (\\epsilon\\mu - i\\frac{\\sigma\\mu}{\\omega})/\\epsilon_0\\mu_0\\\\
        &\\therefore \\sigma+i\\omega\\epsilon = i\\frac{\\omega\\epsilon_0\\mu_0N^2}{\\mu} = i\\frac{\\omega N^2}{\\mu c^2}\\\\
        &\\therefore \\nabla \\times \\mathbf{H} = \\frac{\\omega N^2}{\\mu c^2}\\mathbf{E}
        \\end{align}
        $$

        <b>介质的光学导纳</b>
        <p>磁场强度\\(\\mathbf{H}\\)与电场强度\\(\\mathbf{E}\\)绝对值之比。</p>
        $$Y = \\frac{|\\mathbf{H}|}{|\\mathbf{S}_0 \\times \\mathbf{E}|} = \\frac{|\\mathbf{H}|}{|\\mathbf{E}|} = \\frac{N\\sqrt{\\epsilon_0/\\mu_0}}{\\mu_r}$$
        \\(\\mathbf{S_0}\\)：平面波传播方向的单位矢量。

        <b>自由空间导纳</b>
        $$y_0 = \\sqrt{\\epsilon_0/\\mu_0}$$
        国际单位制中值为\\(1/377\\)西门子。
        <p>在光波段，\\(\\mu_r\\rightarrow 1\\)，有</p>
        $$Y = N\\cdot y_0$$
        <p>若以\\(y_0\\)为单位，光学导纳也可表示为：</p>
        $$Y = N$$


        <b>反射率\\(R\\)</b>
        <p>反射光强度与入射光强度之比。</p>

        <b>透射率\\(T\\)</b>
        <p>透射光强度与入射光强度之比。</p>

        <b>有效导纳\\(\\eta\\)</b>
        <p>磁场强度的切向分量与电场方向的切向分量之比。</p>
        $$\\eta = \\mathbf{H}_t^+/(\\mathbf{S}_0\\times \\mathbf{E}_t^+) = -\\mathbf{H}_t^-/(\\mathbf{S}_0\\times \\mathbf{E}_t^-) $$

        <table>
            <tr>
                <td class="tbtext">
                    <p>对于<span lang="en">TM</span>波，引入<a href="../PhysicalOptics/ReflectionAndTransmission.html#BoundaryCondition">边界条件</a>，有：</p>
                    $$\\mathbf{H}_t = \\mathbf{H}$$
                    $$\\mathbf{E}_t = \\mathbf{E}\\cos\\theta$$
                    其中，\\(\\theta\\)为\\(\\mathbf{E}\\)与界面的夹角。
                    $$\\mathbf{H}_t = \\mathbf{H} = N(\\mathbf{S}_0\\times \\mathbf{E}) = N(\\mathbf{r}_0\\times\\mathbf{E}_t/\\cos\\theta) = \\frac{N}{\\cos\\theta}(\\mathbf{r}_0\\times\\mathbf{E}_t)$$
                    $$\\eta_p = \\mathbf{H}_t/(\\mathbf{S}_0\\times \\mathbf{E}_t) = \\frac{N}{\\cos\\theta}$$
                </td>
                <td class="tbtext">
                    <p>对于<span lang="en">TE</span>波，引入边界条件，有：</p>
                    $$
                        \\mathbf{E}_t = \\mathbf{E}\\\\
                        \\mathbf{H}_t = \\mathbf{H}\\cos\\theta
                    $$
                    其中，\\(\\theta\\)为\\(\\mathbf{H}\\)与界面的夹角。
                    $$\\mathbf{S}_0\\times \\mathbf{E}_t = \\mathbf{S}_0\\times\\mathbf{E} = \\mathbf{H}/N = \\frac{1}{N\\cos\\theta}\\mathbf{H}$$
                    $$\\eta_p = \\frac{\\mathbf{H}}{(\\mathbf{S}_0\\times\\mathbf{E})} = N\\cos\\theta$$
                </td>
            </tr>
        </table>


 



        <h2>第二节 平面电磁波在单一界面上的反射与折射</h2>
        <h3>一、反射定律与折射定律</h3>

        <p>讨论光在两种各项同性均匀介质的分界面上发生的反射与折射</p>


        <h2>对电场矢量正方向的规定</h2>
        <img src="./img/PDitectE.png" width="400">
        <p>应用<span class="tip">边界条件<span class="tiptext">$$E_{1t} = E_{2t}\\\\H_{1t} = H_{2t}$$</span></span>，得：</p>
        $$\\mathbf{E_1} = \\mathbf{E}_1^+ = \\mathbf{E}_0^- + \\mathbf{E}_0^-$$
        $$\\mathbf{H_1} = \\mathbf{H}_1^+ = \\mathbf{H}_0^- + \\mathbf{H}_0^-$$
        注：此处为矢量和。

        <h2>单层介质薄膜的反射率</h2>
        <p>单层膜的反射系数：</p>
        $$r = \\frac{\\eta_0 - Y}{\\eta_0 + Y}$$
        $$R = r^2 = (\\frac{\\eta_0 - Y}{\\eta_0 + Y})^2$$

        <p>设\\(\\mathbf{E_{1t}}\\)为在界面\\(t\\)上的\\(\\mathbf{E_1}\\)。</p>
        $$\\begin{cases}
        E_0 = E_0^+ + E_0^- = E_{11}^+ + E_{11}^-\\\\
        H_0 = H_0^+ + H_0^- = \\eta_1E_{11}^+ - \\eta_1E_{11}^-
        \\end{cases}$$
        $$\\because\\begin{cases}
        E_{12}^+ = e^{-i\\delta_1}E_{11}^+\\\\
        E_{12}^- = e^{i\\delta_1}E_{11}^-
        \\end{cases}$$
        $$\\therefore\\begin{cases}
        E_0 = e^{i\\delta_1}E_{12}^+ + e^{-i\\delta_1}E_{12}^-\\\\
        H_0 = \\eta_1e^{i\\delta_1}E_{12}^+ + \\eta_1e^{-i\\delta_1}E_{12}^-  
        \\end{cases}$$
        $$\\begin{bmatrix}
        E_0\\\\
        H_0
        \\end{bmatrix}=
        \\begin{bmatrix}
        e^{i\\delta_1} & e^{-i\\delta_1}\\\\
        \\eta_1e^{i\\delta_1} & -\\eta_1e^{-i\\delta_1}
        \\end{bmatrix}
        \\begin{bmatrix}
        E_{12}^+\\\\
        E_{12}^-
        \\end{bmatrix}
        $$


        $$\\begin{align}
        \\begin{bmatrix}E_0\\\\H_0\\end{bmatrix}
        &=\\begin{bmatrix}
        e^{i\\delta_1} & e^{-i\\delta_1}\\\\
        \\eta_1e^{i\\delta_1} & -\\eta_1e^{-i\\delta_1}
        \\end{bmatrix} 
        \\begin{bmatrix}
        \\frac{1}{2} & \\frac{1}{2\\eta_1}\\\\
        \\frac{1}{2} & -\\frac{1}{2\\eta_1}
        \\end{bmatrix}
        \\begin{bmatrix}E_2\\\\H_2\\end{bmatrix}\\\\
        &=\\begin{bmatrix}
        \\cos\\delta_1 & \\frac{i}{\\eta_1}\\sin\\delta_1\\\\
        i\\eta_1\\sin\\delta_1 & \\cos\\delta_1
        \\end{bmatrix}
        \\begin{bmatrix}E_2\\\\H_2\\end{bmatrix}
        \\end{align}$$

        $$\\because \\begin{cases}
        H_0 = YE_0\\\\
        H_2 = \\eta_2E_2
        \\end{cases}$$
        $$\\therefore E_0\\begin{bmatrix}1\\\\Y\\end{bmatrix}=\\begin{bmatrix}
        \\cos\\delta_1 & \\frac{i}{\\eta_1}\\sin\\delta_1\\\\
        i\\eta_1\\sin\\delta_1 & \\cos\\delta_1
        \\end{bmatrix}
        \\begin{bmatrix}1\\\\\\eta_2\\end{bmatrix}E_2$$

        令
        $$\\begin{bmatrix}1\\\\Y\\end{bmatrix}=
        \\begin{bmatrix}B\\\\C\\end{bmatrix} = 
        \\begin{bmatrix}
        \\cos\\delta_1 & \\frac{i}{\\eta_1}\\sin\\delta_1\\\\
        i\\eta_1\\sin\\delta_1 & \\cos\\delta_1
        \\end{bmatrix}
        \\begin{bmatrix}1\\\\\\eta_2\\end{bmatrix}$$

        $$\\therefore Y = C/B = \\frac{\\eta_2\\cos\\delta_1+i\\eta_1\\cos\\delta_1}{\\cos\\delta_1+i(\\eta_2/\\eta_1)\\sin\\delta_1}$$

        <b>薄膜的特征矩阵</b>
        $$\\begin{bmatrix}
        \\cos\\delta_1 & \\frac{i}{\\eta_1}\\sin\\delta_1\\\\
        i\\eta_1\\sin\\delta_1 & \\cos\\delta_1
        \\end{bmatrix}$$

        <p>当薄膜的<b>有效光学厚度</b>为\\(1/4\\)波长的整数倍时，即</p>
        $$nd\\cos\\theta = m\\frac{\\lambda_0}{4}$$
        <p>其<b>相位厚度</b>为\\(\\frac\\pi2\\)的整数倍，即</p>
        $$\\delta = \\frac{2\\pi}{\\lambda}nd\\cos\\theta = \\frac{m}{2}\\pi$$

        <div class="HBox">
            <div class="left">
                <p>\\(m\\)为奇数时：\\(\\begin{cases}\\cos\\delta_1 = 0\\\\\\sin\\delta_1 = 1~or~-1\\end{cases}\\)</p>
                $$\\begin{align}
                \\therefore \\begin{bmatrix}1\\\\Y\\end{bmatrix} &= \\begin{bmatrix}0&\\pm i/\\eta_1\\\\\\pm i\\eta_1&0\\end{bmatrix}
                \\begin{bmatrix}1\\\\\\eta_s\\end{bmatrix}\\\\
                &= \\begin{bmatrix}\\pm i\\frac{\\eta_s}{\\eta_1}\\\\\\pm i\\eta_1\\end{bmatrix}
                \\end{align}$$
                $$\\therefore Y = \\eta_1^2/\\eta_s$$
                （四分之一波长法则）
                $$R = (\\frac{\\eta_0 - \\eta_1^2/\\eta_s}{\\eta_0 + \\eta_1^2/\\eta_s})^2$$
            </div>
            <div class="divider"></div>
            <div class="right">                
                <p>\\(m\\)为偶数时：\\(\\begin{cases}\\cos\\delta_1 = 1~or~-1\\\\\\sin\\delta_1 = 0\\end{cases}\\)</p>
                $$\\begin{align}
                \\therefore \\begin{bmatrix}1\\\\Y\\end{bmatrix} &= \\begin{bmatrix}\\pm 1&0\\\\0&\\pm 1\\end{bmatrix}
                \\begin{bmatrix}1\\\\\\eta_s\\end{bmatrix}\\\\
                &= \\begin{bmatrix}\\pm1\\\\\\pm\\eta_s\\end{bmatrix}
                \\end{align}$$
                $$\\therefore Y = \\eta_s$$
                $$R = (\\frac{\\eta_0 - \\eta_s}{\\eta_0 + \\eta_s})^2$$
                <p>此时，对于参考波长\\(\\lambda_0\\)，该膜层对膜系的反射或透射特性无任何影响，故称为<b>虚设层</b>。</p>
                <p>在其他波长上，薄膜的特征矩阵不再是单位矩阵，对膜系的特征是有影响的，故半波长厚度的虚设层常用于平滑膜系的分光特性。</p>
            </div>
        </div>

        <p>当\\(nd\\cos\\theta\\)为\\(\\frac{\\lambda}{4}\\)的整数倍时，反射率将达到极值。</p>
        <ul>
            <li>\\(\\eta_1 &gt; \\eta_s\\)时，\\(\\frac{\\lambda}{4}\\)奇数倍波长\\(R\\)达到极大值，偶数倍波长\\(R\\)达到极小值。</li>
            <li>\\(\\eta_1 = \\eta_s\\)时，\\(R\\)恒为定值。</li>
            <li>\\(\\eta_1 &lt; \\eta_s\\)时，\\(\\frac{\\lambda}{4}\\)奇数倍波长\\(R\\)达到最小值，偶数倍波长\\(R\\)达到极大值。</li>
        </ul>
        $$
        (\\frac{\\eta_0 - \\eta_1^2/\\eta_s}{\\eta_0 + \\eta_1^2/\\eta_s})^2 - (\\frac{\\eta_0 - \\eta_s}{\\eta_0 + \\eta_s})^2 = (\\frac{\\eta_0 - \\eta_1^2/\\eta_s}{\\eta_0 + \\eta_1^2/\\eta_s} + \\frac{\\eta_0 - \\eta_s}{\\eta_0 + \\eta_s})(\\frac{\\eta_0 - \\eta_1^2/\\eta_s}{\\eta_0 + \\eta_1^2/\\eta_s} - \\frac{\\eta_0 - \\eta_s}{\\eta_0 + \\eta_s})\\\\
        \\because (\\eta_0+\\eta_1^2/\\eta_s)(\\eta_0+\\eta_s) > 0\\\\
        \\begin{align}
        \\therefore &[(\\eta_0 - \\eta_1^2/\\eta_s)(\\eta_0 + \\eta_s) + (\\eta_0 + \\eta_1^2/\\eta_s)(\\eta_0 - \\eta_s)][(\\eta_0 - \\eta_1^2/\\eta_s)(\\eta_0 + \\eta_s) - (\\eta_0 + \\eta_1^2/\\eta_s)(\\eta_0 - \\eta_s)]\\\\
        &=4(\\eta_0^2 - \\eta_1^2)(\\eta_0\\eta_s - \\eta_0\\eta_1^2/\\eta_s)
        \\end{align}\\\\
        \\because \\eta_0 &lt; \\eta_1\\\\
        R_1 &gt; R_2:\\eta_0\\eta_s - \\eta_0\\eta_1^2/\\eta_s &lt; 0\\Rightarrow \\eta_1 &gt; \\eta_s\\\\
        R_1 &lt; R_2:\\eta_0\\eta_s - \\eta_0\\eta_1^2/\\eta_s &gt; 0\\Rightarrow \\eta_1 &lt; \\eta_s

        $$

        <b>速写符号</b>
        <table>
            <tr>
                <td lang="en">H</td>
                <td>高折射率的\\(1/4\\)波长膜层</td>
            </tr>
            <tr>
                <td lang="en">L</td>
                <td>低折射率的\\(1/4\\)波长膜层</td>
            </tr>
            <tr>
                <td lang="en">M</td>
                <td>中间折射率的\\(1/4\\)波长膜层</td>
            </tr>
        </table>

        <h2>多层薄膜的特性计算</h2>
        <b>膜系的特征矩阵</b>
        $$
        \\begin{bmatrix}1\\\\Y\\end{bmatrix} = \\begin{bmatrix}B\\\\C\\end{bmatrix} = \\left\\{\\prod_\\limits{j=1}^K\\begin{bmatrix}\\cos\\delta_j & \\frac{i}{\\eta_j}\\sin\\delta_j\\\\i\\eta_j\\sin\\delta_j& \\cos\\delta_j \\end{bmatrix}\\right\\}\\begin{bmatrix}1\\\\\\eta_{K+1}\\end{bmatrix}
        $$
        

        <ul class="navibar">
            <li class="next"><a href="/note/optics/opticalthinfilm/chapter2">下一页</a></li>
        </ul>` },
  "note/optics/opticalthinfilm/chapter2": { title: "应用光学", content: `<h1>第二章 光学薄膜特性的理论计算</h1>


        <h2>第一节 特征矩阵法</h2>
        $$\\begin{bmatrix}1\\\\Y\\end{bmatrix}=
        \\begin{bmatrix}B\\\\C\\end{bmatrix} = 
        \\begin{bmatrix}
        \\cos\\delta_1 & \\frac{i}{n_1}\\sin\\delta_1\\\\
        in_1\\sin\\delta_1 & \\cos\\delta_1
        \\end{bmatrix}\\cdots
        \\begin{bmatrix}
        \\cos\\delta_t & \\frac{i}{n_t}\\sin\\delta_t\\\\
        in_t\\sin\\delta_t & \\cos\\delta_t
        \\end{bmatrix}
        \\begin{bmatrix}1\\\\n_g\\end{bmatrix}$$
        注：\\(1\\rightarrow t\\)为从空气到基底的膜层。

        $$Y = C/B$$
        $$R = (\\frac{n_0 - Y}{n_0 + Y})^2$$
        $$T = 1 - R$$
        <b>优点</b>：计算严格、精确。<br><br>
        <b>缺点</b>：计算复杂。



        <h2>第二节 矢量作图法</h2>
        <b>适用于</b>：层数较少的减反膜<br><br>
        <b>适用条件</b>：
        <p>膜层无吸收</p>
        <p>只考虑入射波在每个界面的单次反射</p>
        <b>缺点</b>：
        <p>忽略了膜层内的多次反射，对于其他类型的膜系，往往误差太大而不能应用。</p>
        矢量计算如下：<br><br>
        （1）计算出各分界面上的振幅反射系数：
        $$r_i = \\frac{n_i - n_{i+1}}{n_i + n_{i+1}}$$
        （2）计算各层薄膜位相厚度：
        $$\\delta_i = \\frac{2\\pi}{\\lambda}n_id_i$$
        （3）计算两相继矢量间的夹角：
        $$\\delta_{ii+1} = 2\\delta_i$$
        绘图原则如下：<br><br>
        （1）以\\(r_i\\)为模，\\(\\delta_{ii+1}\\)为夹角将矢量绘制在极坐标系中。<br><br>
        （2）\\(r_i > 0\\)时指向原点，\\(r_i \\lt 0\\)时背离原点。<br><br>
        结果分析如下：<br><br>
        （1）合矢量为所求。<br><br>
        （2）合矢量的模为膜系的振幅反射系数。<br><br>




        <h2>第三节 有效界面法（史密斯方法）</h2>

        $$T = \\frac{T_1T_2}{(1-\\sqrt{R_1R_2})^2}\\cdot\\frac{1}{1+\\frac{4R_1R_2}{()}}$$

        $$T = \\frac{T_0}{1 + F\\sin^2\\theta}$$




        <b>无吸收介质单层膜特征矩阵</b>
        $$M = \\begin{bmatrix}\\cos \\delta & \\frac{i}{\\eta}\\sin\\delta\\\\i\\eta\\sin\\delta& \\cos\\delta\\end{bmatrix} = \\begin{bmatrix}m_{11}&m_{12}\\\\m_{21}&m_{22}\\end{bmatrix}$$
        特点
        <ul>
            <li>\\(m_{11}\\)、\\(m_{22}\\)为纯实数，\\(m_{12}\\)、\\(m_{21}\\)为纯虚数。</li>
            <li>\\(m_{11}m_{22} - m_{12}m_{21} = \\cos^2\\delta + \\sin^2 \\delta = 1\\)</li>
            <li>\\(m_{11} = m_{22}\\)</li>
        </ul>
        
        
        
        <b>多层膜特征矩阵</b>
        $$M = M_1M_2\\cdots M_k = \\begin{bmatrix}M_{11} & M_{12}\\\\M_{21} & M_{22}\\end{bmatrix}$$
        其中\\(M_{11}\\)、\\(M_{22}\\)为纯实数，\\(M_{12}\\)、\\(M_{21}\\)为纯虚数。
        $$M_{11}M_{22} - M_{12}M_{21} = 1$$
        <p>一般来说\\(M_{11} \\neq M_{22}\\)，因此不能和一个单层膜等效。</p>
        <p>但对于以一层为中心，两边对称安置的多层膜，具有单层膜矩阵的所有特点，可以等效为一个单层膜。</p>




        <h2>第四节 导纳图解法</h2>
        <b>整个过程中多层膜导纳的变化轨迹</b>
        <p>从基片开始，通过每一层膜直到多层膜的前表面，把平行于基片的任意平面处的光学导纳画在一复平面内。</p>
        <p>对于每层介质膜，导纳轨迹是圆心位于实轴上的圆弧。</p>

        <p>假设基片导纳为\\(\\alpha + i\\beta\\)，其上有一导纳为\\(n\\)的单层膜：</p>
        $$\\begin{bmatrix}1 \\\\ Y\\end{bmatrix} = \\begin{bmatrix}B\\\\C\\end{bmatrix} 
        = \\begin{bmatrix}\\cos\\delta & \\frac{i}{n}\\sin\\delta\\\\in\\sin\\delta & \\cos\\delta\\end{bmatrix}
        \\begin{bmatrix}1 \\\\ \\alpha + i\\beta\\end{bmatrix}$$
        $$\\begin{align}
        Y &= C/B\\\\
          &= x+iy\\\\
          &= \\frac{in\\sin\\delta + (\\alpha + i\\beta)\\cos\\delta}{\\cos\\delta + (\\alpha + i\\beta)\\frac{i}{n}\\sin\\delta}\\\\
          &= \\frac{\\alpha\\cos\\delta + i(n\\sin\\delta + \\beta\\cos\\delta)}{(\\cos\\delta - \\frac{\\beta}{n}\\sin\\delta) + i\\frac{\\alpha}{n}\\sin\\delta}
        \\end{align}$$

        $$\\begin{cases}
        (\\frac{x\\beta}{n} + \\frac{y\\alpha}{n})\\sin\\delta + (a - x)\\cos\\delta = 0\\\\
        (n - \\frac{x\\alpha}{n} + \\frac{y\\beta}{n})\\sin\\delta + (\\beta - y)\\cos\\delta = 0
        \\end{cases}$$

        光学导纳的轨迹方程：
        $$x^2 + y^2 - \\frac{\\alpha^2 + \\beta^2 + n^2}{\\alpha}x = -n^2$$
        这是圆心坐标位于\\((\\frac{\\alpha^2 + \\beta^2 + n^2}{2\\alpha}, 0)\\)且经过\\((\\alpha, \\beta)\\)的圆弧。

        <b>作图方法</b>
        <p>将每层的导纳\\(n_0, Y_1, Y_2, \\cdots\\)标注在复平面内，用顺时针的圆弧连接。</p>
        <ul class="navibar">
            <li><a href="/note/optics/opticalthinfilm/chapter1">上一页</a></li>
            <li class="next"><a href="/note/optics/opticalthinfilm/chapter3">下一页</a></li>
        </ul>` },
  "note/optics/opticalthinfilm/chapter3": { title: "应用光学", content: `<h1>第三章 光学薄膜系统的设计</h1>
        <h2>第一节 减反射膜</h2>
        <p>当光线从折射率为\\(n_0\\)的介质射入折射率为\\(n_1\\)的另一介质时，在两介质表面会发生光的反射。若介质无吸收，分界面为一光学表面且光线垂直入射，则反射率\\(R\\)为：</p>
        $$R = (\\frac{n_0-n_1}{n_0+n_1})^2$$
        <p>透射率\\(T\\)为：</p>
        $$T = 1 - R$$

        表面反射造成的危害：
        <ul>
            <li>光能量损失使像的亮度降低。</li>
            <li>表面反射光经过多次反射或漫射，有一部分成为杂散光，最后也达到像平面，使像的衬度降低，从而影响成像的质量。</li>
        </ul>

        <h3>理想单层减反膜</h3>
        $$R = (\\frac{n_0 - Y}{n_0 + Y})^2$$
        当\\(Y = n_0\\)时，\\(R = 0\\)
        $$\\begin{align}
        \\begin{bmatrix}1\\\\Y\\end{bmatrix} 
        &= \\begin{bmatrix}B\\\\C\\end{bmatrix}\\\\
        &= \\begin{bmatrix}\\cos\\delta_1 & \\frac{i}{\\eta_1}\\sin\\delta_1\\\\i\\eta_1\\sin\\delta_1 & \\cos\\delta_1\\end{bmatrix}\\begin{bmatrix}1\\\\\\eta_g\\end{bmatrix}\\\\
        &= \\begin{bmatrix}0 & i/n_1\\\\in_1 & 0\\end{bmatrix}\\begin{bmatrix}1\\\\n_g\\end{bmatrix}\\\\
        &= \\begin{bmatrix}\\frac{in_g}{n_1}\\\\in_1\\end{bmatrix}
        \\end{align}$$
        $$Y = C/B = \\frac{n_1^2}{n_g}$$
        $$Y = n_0 \\\\ \\frac{n_1^2}{n_g} = n_0 \\\\ n_1 = \\sqrt{n_0n_g}$$

        <b>单层减反膜的缺陷</b>
        <ul>
            <li>对于大多数应用来说剩余反射还是太高。</li>
            <li>从未镀膜表面反射的光线，在色彩上保持中性；从镀膜表面反射的光线，破坏了色的平衡。</li>
        </ul>

        <b>提高单层减反膜性能的途径</b>
        <ul>
            <li>采用变折射率的非均匀膜，其折射率随厚度呈连续型变化。</li>
            <li>采用几种折射率不同的均匀膜构成多层减反膜。</li>
        </ul>

        <p>可见区使用最普遍的材料是\\(n = 1.52\\)左右的冕牌玻璃，理想的减反射模材料为\\(\\sqrt{1.52}\\approx 1.23\\)，但至今能用的最理想薄膜材料为氟化镁\\(n = 1.38\\)</p>

        <h3>\\(\\lambda_0/4-\\lambda_0/4\\)双层减反膜（<span lang="en">V</span>形膜）</h3>

        <h3>超宽带减反射膜</h3>
        <b><span lang="en">Willey</span>经验公式</b>        
        $$R_{AVE}(B,L,T,D) = (4.378/D)(1/T)^{0.31}[e^{(B-1.4)} - 1](L-1)^{3.5}$$
        <ul>
            <li>\\(L\\)：最外层薄膜的折射率。\\(L\\)越小、\\(R_{ave}\\)越低，薄膜透射率越好。</li>
        </ul>


        <h2>第二节 分束镜</h2>
        <b>中性分束镜</b>
        <p>把一束光分成光谱成分相同的两束光，也即它在一定的波长区域内，对各波长具有相同的透射率和反射率比，因而反射光和透射光成中性。</p>
        
        <h3>金属膜分束镜</h3>
        <p>一般场合要求分束膜吸收小，因而在使用金属作为分束膜时，应选择\\(k/n\\)值大一些的材料。</p>
        <p>银膜、铝膜、铬膜……</p>
        <b>缺点</b>
        <p>吸收损失较大、分光效率较低。</p>

        <h3>介质膜分束镜</h3>
        <b>优点</b>
        <p>由于介质膜的吸收小到可以忽略的程度，所以分束效率高。</p>
        <b>缺点</b>
        <p>对波长敏感，给中性分束带来困难。</p>
        <p>一般介质膜分束镜的偏振效应较大。</p>


        <b>常用分光膜结构</b>
        <ul>
            <li>平板分光膜</li>
            <li>立方棱镜分光膜</li>
        </ul>

        <b>立方体偏振分光镜设计原则</b>
        <p>在偏振分束镜的每个界面上，入射角均满足布儒斯特定律。</p>



        <h2>第三节 高反射膜</h2>
        <b>常用材料</b>
        <p lang="en">Al、Ag、Au</p>
        <table>
            <tr>
                <td><b lang="en">Al</b></td>
                <td class="tbcontext">
                    <p>从紫外区到红外区都具有很高反射率的唯一材料，同时铝模表面在大气中能生成一层薄的<span lang="en">Al<sub>2</sub>O<sub>3</sub></span>薄膜，所以膜层较为牢固、稳定。</p>
                </td>
            </tr>
            <tr>
                <td><b lang="en">Ag</b></td>
                <td class="tbcontext">
                    <p>银膜在可见光区和红外区都有很高的反射率，且在倾斜使用时引入的偏振效应最小。</p>
                    缺点：
                    <ul>
                        <li>与玻璃基片的黏附性差。</li>
                        <li>易受硫化物影响失去光泽。</li>
                    </ul>
                    保护膜
                    <p>一种组合的氧化铝及氧化硅镀层。</p>
                    <p><span lang="en">Al<sub>2</sub>O<sub>3</sub></span>与银膜的黏附性好，但对潮气侵蚀的保护性差。</p>
                    <p><span lang="en">SiO<sub>x</sub></span>对潮气侵蚀的保护性好，但与银膜的黏附性差。</p>
                </td>
            </tr>
            <tr>
                <td><b lang="en">Au</b></td>
                <td class="tbcontext">
                    <p>在红外区的反射率很高，常用作红外反射镜。</p>
                    <p>金膜与玻璃基片附着性差，常用铬膜作为衬底层；在金膜的淀积过程中，辅以离子束轰击，可显著提高金膜与基片的附着力。</p>
                </td>
            </tr>
        </table>

        

        


        

        <b>紫外区反射镜</b>
        <p><b>材料</b>：铝模</p>
        <p><b>保护膜</b>：氟化镁（镀层很牢固）或氟化锂（镀层强度较差）</p>
        不使用<span lang="en">Al<sub>2</sub>O<sub>3</sub></span>或<span lang="en">SiO</span>做保护膜的原因：
        <p>其在紫外区有显著的吸收。</p>

        <h3>多层介质高反射膜</h3>
        <b>膜系</b>
        <p>\\((HL)^sH\\)</p>
        <b>影响多层介质高反射膜反射率的因素</b>
        <ul>
            <li>\\(n_H/n_L\\)的值</li>
            <li>层数</li>
        </ul>
        <p>对于中心波长\\(\\lambda_0\\)，\\(Y = (\\frac{n_H}{n_L})^{2s}\\frac{n_H^2}{n_g}\\)</p>
        <p>\\(R = (\\frac{1 - Y}{1 + Y})^2\\)，\\(Y\\)越大，反射率越高。</p>
        <p>实际上由于膜层中存在<b>吸收</b>和<b>散射损失</b>，当膜系达到一定层数时，继续加镀可能由于吸收、散射损失的增加而使反射率下降。</p>
        <p>散射损耗主要由薄膜的<b>体内缺陷</b>（如微粒尘埃、细微裂痕等）和<b>表面粗糙度</b>引起。</p>
        <b>表面散射损耗（<span lang="en">SSL</span>）</b>
        <p>由表面粗糙度引起的散射损耗，在散射损耗中占主体地位。</p>
        
        
        
        <h3>高反射带的宽度计算方法</h3>
        <p>若多层膜由\\(s\\)个重复的基本周期构成，则其特征矩阵为：</p>
        $$\\mu = M^s$$
        其中\\(M\\)是重复周期的矩阵，可以写为：
        $$\\begin{bmatrix}m_{11} & m_{12} \\\\m_{21} & m_{22}\\end{bmatrix}$$
        <p>满足条件\\(|\\frac{1}{2}(m_{11} + m_{22})|\\gt1\\)的波长位于膜系的反射带内，反射率将随周期数目的增加而稳定增大。</p>
        <p>满足条件\\(|\\frac{1}{2}(m_{11} + m_{22})|\\lt1\\)的波长位于膜系的透射带内，反射率随膜层的增加而起伏。</p>
        <p>反射带的边界由|\\(\\frac{1}{2}(m_{11} + m_{22})|=1\\)决定。</p>


        <p>对于膜系\\((HL)^sH\\)，每个周期的特征矩阵为：</p>
        $$M = \\begin{bmatrix}\\cos\\delta & \\frac{i}{n_L}\\sin\\delta\\\\ in_L\\sin\\delta & \\cos\\delta\\end{bmatrix}\\begin{bmatrix}\\cos\\delta & \\frac{i}{n_H}\\sin\\delta\\\\in_H\\sin\\delta & \\cos\\delta\\end{bmatrix}$$
        $$\\begin{align}
        \\therefore |\\frac{1}{2}(m_{11} + m_{22})| &= |\\frac{1}{2}(\\cos^2\\delta - \\frac{n_H}{n_L}\\sin^2\\delta - \\frac{n_L}{n_H}\\sin^2\\delta + \\cos^2\\delta)|\\\\
                                                  &= |\\cos^2\\delta - \\frac{1}{2}(\\frac{n_H}{n_L} + \\frac{n_L}{n_H})\\sin^2\\delta|
        \\end{align}$$
        $$\\because \\cos^2\\delta - \\frac{1}{2}(\\frac{n_H}{n_L} + \\frac{n_L}{n_H})\\sin^2\\delta \\lt 1$$
        故边界：
        $$
        \\cos^2\\delta - \\frac{1}{2}(\\frac{n_H}{n_L} + \\frac{n_L}{n_H})\\sin^2\\delta = -1\\\\
        \\cos^2\\delta - \\frac{1}{2}(\\frac{n_H}{n_L} + \\frac{n_L}{n_H}) + \\frac{1}{2}(\\frac{n_H}{n_L} + \\frac{n_L}{n_H})\\cos^2\\delta = -1\\\\
        [\\frac{1}{2}(\\frac{n_H}{n_L} + \\frac{n_L}{n_H}) + 1]\\cos^2\\delta = \\frac{1}{2}(\\frac{n_H}{n_L} + \\frac{n_L}{n_H}) - 1\\\\
        \\begin{align}
        \\cos^2\\delta &= \\frac{\\frac{1}{2}(\\frac{n_H}{n_L} + \\frac{n_L}{n_H}) - 1}{\\frac{1}{2}(\\frac{n_H}{n_L} + \\frac{n_L}{n_H}) + 1}\\\\
                     &= \\frac{n_H^2 + n_L^2 - 2n_Hn_L}{n_H^2 + n_L^2 + 2n_Hn_L}\\\\
                     &= (\\frac{n_H - n_L}{n_H + n_L})^2
        \\end{align}
        $$
        $$\\begin{align}
        \\because \\delta &= \\frac{2\\pi}{\\lambda}\\frac{\\lambda_0}{4}\\\\
                        &= \\frac{\\pi}{2}\\frac{\\lambda_0}{\\lambda}\\\\
                        &= \\frac{\\pi}{2}g
        \\end{align}$$
        令高反射带边界值为：
        $$\\delta_e = \\frac{\\pi}{2}g_e = \\frac{\\pi}{2}(1\\pm \\delta g)$$
        $$\\Delta g = \\frac{2}{\\pi}\\arcsin(\\frac{n_H - n_L}{n_H + n_L})$$
        用\\(g\\)表示的高反射区域为：
        $$1-\\Delta g \\sim 1 + \\Delta g$$
        对应\\(\\lambda\\)范围为：
        $$\\lambda_{min} = \\lambda_0/(1+\\Delta g)$$
        $$\\lambda_{max} = \\lambda_0/(1-\\Delta g)$$
        高反射带的波长宽度：
        $$\\Delta \\lambda = \\lambda_{max} - \\lambda_{min} \\approx 2\\Delta g\\lambda_0$$
        三级次波长宽度：
        $$(\\Delta\\lambda)_3 = \\lambda_0/(3 - \\Delta g) - \\lambda_0/(3 + \\Delta g) \\approx \\frac{2}{9}\\Delta g\\lambda_0$$




        <h2>第四节 干涉截止滤光片</h2>
        <p>要求某一波长范围的光束高透射，而偏离这一波长区域的光束骤然变化为高反射（或称抑制）。</p>
        
        <table>
            <tr class="tbtitle">
                <td>分类</td>
                <td>作用</td>
                <td>膜系</td>
            </tr>
            <tr>
                <td><b>长波通滤光片</b></td>
                <td>抑制短波区，透射长波区。</td>
                <td>$$[\\frac{H}{2} ~ L ~ \\frac{H}{2}]^s$$</td>
            </tr>
            <tr>
                <td><b>短波通滤光片</b></td>
                <td>抑制长波区，透射短波区。</td>
                <td>$$[\\frac{L}{2} ~ H ~ \\frac{L}{2}]^2$$</td>
            </tr>
        </table>


        <h2>第五节 带通滤光片</h2>
        <h3>法布里-珀珞滤光片</h3>
        <b>表征滤光片特性的主要参数</b>
        <ul>
            <li>\\(\\lambda_0\\)：中心波长（峰值波长）</li>
            <li>\\(T_{max}\\)：中心波长的透射率（峰值透射率）</li>
            <li>\\(2\\Delta\\lambda\\)：透射率为峰值透射率一半的波长宽度，也即通带半宽度</li>
            <li>\\(2\\Delta\\lambda/\\lambda_0\\)：相对半宽度</li>
        </ul>



        <ul class="navibar">
            <li><a href="/note/optics/opticalthinfilm/chapter2">上一页</a></li>
        </ul>` },
  "note/optics/opticalthinfilm/chapter4": { title: "薄膜光学", content: `<h1>第四章 薄膜制备工艺</h1>

        <h2>第一节 真空淀积工艺</h2>
        
        
        <b>真空</b>
        <p>压力低于一个大气压的任何气态空间。</p>
        <p>现代薄膜一般都是在真空条件下制备的，真空是镀膜的必要条件。</p>


        <b>真空度</b>
        <p>一般用真空度来表征真空，而真空度的高低又是用压强的大小表示的。</p>

        单位换算
        <table>
            <tr>
                <td>帕[斯卡]（<span lang="en">Pa</span>）</td>
                <td>国际单位制（<span lang="en">SI</span>）</td>
            </tr>
            <tr>
                <td>毫米汞柱（<span lang="en">mmHg</span>）</td>
                <td>$$1mmHg = 133.3Pa$$</td>
            </tr>
            <tr>
                <td>托（<span lang="en">Torr</span>）</td>
                <td>$$1Torr = \\frac{1}{760}atm = 133.3Pa$$</td>
            </tr>
            <tr>
                <td>毫巴（<span lang="en">mbar</span>）</td>
                <td>$$1mbar = 0.75 Torr = 100 Pa$$</td>
            </tr>
        </table>

        <b>分区</b>
        <table>
            <tr>
                <td>粗真空</td>
                <td>$$\\gt 10^3Pa$$</td>
            </tr>
            <tr>
                <td>低真空</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </table>

        <b>作用</b>
        <p>减少蒸发分子与残余气体分子的碰撞以及抑制它们之间的反应。</p>
        <p>提供洁净的基底表面。</p>

        <b>自由程</b>
        <p>气体分子之间相邻两次碰撞的距离。</p>

        <b>真空泵</b>
        <ul>
            <li>机械泵</li>
            <li>罗茨泵</li>
            <li>扩散泵</li>
        </ul>


        <b>真空计</b>
        <ul>
            <li>热电偶真空计：\\(5\\times 10^2Pa \\sim 1\\times 10^5Pas\\)</li>
            <li>热阴极电离真空计：\\(1\\times10^{-6}Pa \\sim 1\\times 10^{-1}Pa\\)</li>
        </ul>







        <h2>第二节 光学薄膜材料</h2>

        <h3>金属薄膜</h3>

        <table>
            <tr>
                <td>常用材料</td>
                <td lang="en">Al、Ag、Au</td>
            </tr>
            <tr>
                <td>优点</td>
                <td>反射率高、截止带宽、中性好、偏振效应好</td>
            </tr>
            <tr>
                <td>缺点</td>
                <td>吸收大、机械强度低</td>
            </tr>
        </table>

        <h3>介质和半导体薄膜</h3>
        <p>考虑<b>透明度、折射率、机械牢固度、化学稳定性、抗高能辐射</b>。</p>
        


        <h2>第三节 薄膜厚度监控</h2>

        <table>
            <tr>
                <td>几何厚度</td>
                <td>膜层的物理厚度或实际厚度。</td>
            </tr>
            <tr>
                <td>光学厚度</td>
                <td>几何厚度与膜层折射率的乘积。</td>
            </tr>
            <tr>
                <td>质量厚度</td>
                <td>单位面积上的质量。</td>
            </tr>
        </table>


        <table>
            <tr class="tbtitle">
                <td>方法</td>
                <td>优点</td>
                <td>缺点</td>
            </tr>
            <tr>
                <td>目视法</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>光电极值法</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>石英晶体控制法</td>
                <td class="tbcontext">
                    <ul>
                        <li>装置简单，无需通光口。</li>
                        <li>信号易判读，可实时记录速率。</li>
                        <li>对于厚度小于\\(\\lambda/8\\)的薄膜有较高精度。</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>直接测量质量，间接得出厚度。</li>
                        <li>灵敏度随沉积厚度增加而降低。</li>
                    </ul>
                </td>
            </tr>
        </table>

        <ul class="navibar">
            <li><a href="/note/optics/opticalthinfilm/chapter3">上一页</a></li>
        </ul>` },
  "note/optics/opticalthinfilm/chapter5": { title: "薄膜光学", content: `<h1>第五章 制备条件对薄膜微观结构和成分的影响</h1>

        <ul>
            <li>吸附过程</li>
            <li>成核过程</li>
            <li>薄膜生长</li>
        </ul>



        <ul class="navibar">
            <li><a href="/note/optics/opticalthinfilm/chapter4">上一页</a></li>
        </ul>` },
  "note/optics/optoelectronictech/catalog": { title: "光电子技术", content: `<h1>光电子技术</h1>
        <h2>目录</h2>
        <ul>
            <li><a href="/note/optics/optoelectronictech/semiconductor">半导体</a></li>
            <li><a href="/note/optics/optoelectronictech/photoelectriceffect">光电效应</a></li>
            <li><a href="/note/optics/optoelectronictech/chapter3">光电检测器件</a></li>
            <ul>
                <li><a href="/note/optics/optoelectronictech/ldr">光敏电阻</a></li>
                <li><a href="/note/optics/optoelectronictech/led">发光二级管 </a></li>
            </ul>
            <li><a href="/note/optics/optoelectronictech/chapter2">第二章 光的度量与热辐射定律</a></li>
            <li><a href="/note/optics/optoelectronictech/chapter3">第三章 光源</a></li>
            <li><a href="/note/optics/optoelectronictech/chapter4">第四章 光电探测器概述</a></li>
            
        </ul>` },
  "note/optics/optoelectronictech/chapter3": { title: "应用光学", content: `<h1>第三章 光电检测器件</h1>

        <h2>光电导器件</h2>
        <h3><a href="/note/optics/optoelectronictech/ldr">光敏电阻</a></h3>
        

        <h2>光生伏特器件</h2>
        <p>利用光生伏特效应制造的光电器件</p>
        <b>特点</b>
        <p>暗电流小、噪声低、响应速度快、光电特性线性好、受温度影响较小等（优于光电导器件）。</p>
        <h3>PN结硅光敏二极管（光电二极管）</h3>
        <b>分类</b>
        <ul>
            <li>以P型硅为衬底的2DU型</li>
            <li>以N型硅为衬底的2CU型</li>
        </ul>
        <b>基本特性</b>
        <ul>
            <li>灵敏度</li>
            <li>光谱响应</li>
            <li>时间响应</li>
        </ul>
        <p>光谱响应长波限受硅材料禁带宽度的限制.</p>
        <p>光谱响应短波限受材料PN结厚度对光吸收的影响，减薄PN结的厚度可提高短波限的光谱响应.</p>
        
        <p><b>PIN型光敏二极管</b>：提高硅光敏二极管的时间响应.</p>
        <p><b>雪崩光敏二极管</b>：提高硅光敏二极管的光电灵敏度.</p>

        <h3>硅光电池</h3>
        <p>一种不需加偏置电压就能将光能直接转换为电能的PN结光电器件.</p>
        <b>按功能分类</b>
        <ul>
            <li>太阳能硅光电池</li>
            <li>测量硅光电池</li>
        </ul>

        <h2>光电发射器件</h2>
        <p>基于外光电效应.</p>

        <h3>光电倍增管</h3>
        <p>光电倍增管（<span lang="en">Photo-Multiple Tube, PMT</span>）是一种真空光电发射器件.</p>
        <p>主要由光入射窗、光电阴极、电子光学系统、倍增极和阳极等部分组成.</p>



        <h2>热释电器件</h2>
        <p>利用热释电效应制成的热探测器件. </p>
        <p>电介质虽然不含自由载流子，但也是由带电粒子组成的（价电子和原子核），在外电场的作用下，带电粒子也受电场力的作用，发生微小位移，这就是电介质的极化现象.</p>
        <p>从电场加入导电极化状态建立起的这段时间内，电介质内部的电荷沿电场方向微小移动，产生<b>位移电流</b>，该电流在极化完成时停止.</p>
        <p>一般的电介质在撤去电场后，极化状态立即消失，带电粒子又恢复到原来的状态.</p>
        <p>有一类称为<b>铁电体</b>的电介质，在外加电场撤去后仍能保持极化状态，称其为<b>自发极化</b>.</p>
        <p>铁电体的自发极化强度\\(P_S\\)用单位面积上的电荷量来表征.</p>
        <p>温度越高，自发极化强度越低，当温度升高到一定值时，自发极化突然消失，这个温度被称为<b>居里温度</b>或<b>居里点</b>.</p>
        <p>在居里点以下，自发极化强度\\(P_S\\)为温度\\(T\\)的函数.</p>


        <h2>光耦合器件</h2>
        <p>将发光器件与光电接收器件组合成一体，制成的具有信号传输功能的器件.</p>
        <p>发光器件：LED发光二级管、LD半导体激光器、微型钨丝灯.</p>
        <p>光电接收器件：光敏二极管、光敏晶体管、光电池、光敏电阻.</p>
        <p>作用：具有脉冲变压器、继电器、开关电器的功能.</p>
        <b>特点</b>
        <ul>
            <li>具有电隔离功能</li>
            <li>信号传输时单向的，脉冲、直流信号都可以传输.</li>
        </ul>

        <h2>电荷耦合器件</h2>
        <h3>线阵<span lang="en">CCD</span>图像传感器</h3>


        <h2>图像变换器件</h2>
        <b>图像的增强</b>
        <p>把强度低于视觉阈值的图像增强到可以观察程度的过程.</p>
        <b>像增强器</b>
        <p>用于实现图像增强的光电器件.</p>

        <b>图像的变像</b>
        <p>把各种不可见图像（如红外图像、紫外图像、<span lang="en">X</span>射线图像）转换为可见图像的过程.</p>
        <b>变像器</b>
        <p>用于实现图像变像的光电器件</p>

        <b>像增强器与变像器的不同点</b>
        <p>光电阴极面的光谱响应不同.</p>

        <h2>CMOS图像传感器</h2>` },
  "note/optics/optoelectronictech/chapter4": { title: "光电子技术", content: `<h1>第四章 光电探测器概述</h1>
        <h2>第一节 光电探测器的物理效应</h2>
        <p><b>光电探测器</b>：在光辐射作用下，将光辐射能转换为电信号的一类器件。</p>
        <p><ul>
            <li><b>光电子探测器</b>：利用<b>光电效应</b>制成的器件。
            <ul>
                <li>光电倍增管</li>
                <li>光电导探测器</li>
                <li>光伏探测器</li>
            </ul>
            </li>
        </ul></p>` },
  "note/optics/optoelectronictech/ldr": { title: "光电子技术", content: `<h1>光敏电阻</h1>
        <p>利用具有光电导效应的材料，制成电导率随入射光度量变化的器件。</p>
        <b>工作原理</b>
        <p>光照增强时，电阻减小，电流增大</p>

        <b>光敏电阻分类（按材料分）</b>
        <ul>
            <li>本征半导体光敏电阻</li>
            <li>杂质半导体光敏电阻</li>
        </ul>
        <p>光敏电阻在辐射作用下的光电导灵敏度与两电极间距离的平方成反比.</p>
        <p>光敏电阻的长波限是指其能有效响应的最大入射光波长.</p>
        <p>本征半导体光敏电阻的长波限小于杂质半导体光敏电阻的长波限，因此，本征半导体光敏电阻常用于可见光波段，杂质半导体光敏电阻常用于红外波段甚至远红外波段.</p>

        <b>噪声特性</b>
        <ul>
            <li>热噪声</li>
            <li>产生-复合噪声</li>
            <li>低频噪声</li>
        </ul>` },
  "note/optics/optoelectronictech/led": { title: "光电子技术", content: `<h1>发光二级管（LED）</h1>
        <p>发光二极管在正向偏置下发光.</p>
        <p>常用作数码显示器和图像显示器.</p>
        <p>LED是一种注入式电致发光器件，由P型半导体和N型半导体组成，发光机理分为PN结注入发光与异质结注入发光两种.</p>

        <b>PN结注入发光</b>
        <p>向LED加上正向偏置电压时，促进了N区电子与P区空穴的复合，复合的过程实质上就是电子从高能级跃迁到低能级的过程，多余的能量以光辐射的形式放出.</p>

        <h2>LED的特性参数</h2>
        <h3>发光光谱和发光效率</h3>
        <b>发光光谱</b>
        <p>LED发出光的相对强度（或能量）随波长（或频率）变化的分布曲线.</p>
        <p>直接决定着LED的发光颜色和发光效率.</p>
        <p>与材料的种类、性质以及发光中心的结构有关.</p>
        <p>描述光谱分布的两个参量是峰值波长和发光强度的半宽度.</p>

        <h3>时间响应特性与温度特性</h3>
        <p>时间响应快，为ns量级.</p>` },
  "note/optics/optoelectronictech/photoelectriceffect": { title: "光电子技术", content: `<h1>光电效应</h1>
        <table>
            <tr>
                <td rowspan="5">光电效应</td>
                <td rowspan="5">内光电效应</td>
                <td rowspan="2">光电导效应</td>
                <td>本征光电导效应</td>
            </tr>
            <tr>
                <td>杂质光电导效应</td>
            </tr>
            <tr>
                <td rowspan="3">光生伏特效应</td>
                <td>丹倍效应</td>
            </tr>
            <tr>
                <td>光磁电效应</td>
            </tr>
            <tr>
                <td>光子牵引效应</td>
            </tr>
            <tr>
                <td colspan="4">外光电效应</td>
            </tr>
        </table>
        

        <b>光电效应</b>
        <p>光线在投射到某些金属表面时，使金属表面释放电子的现象。</p>
        <p>光电子的发射率，与照射到金属表面的光线强度成正比。</p>


        <b>内光电效应</b>
        <p>物质受到光照后所产生的光电子只在物质内部运动而不会逸出物质外部。</p>

        <b>光电导效应</b>
        <p>半导体受光照射后，其内部产生光生载流子，使半导体中载流子数显著增加而电阻减小。</p>
        <ul>
            <li>本征光电导：由本征光吸收所引起的光电导效应。</li>
            <li>杂质光电导：由杂质吸收产生的杂质光电导效应。</li>
        </ul>

        <b>光生伏特效应</b>
        <p>光照在半导体<span lang="en">PN</span>结或金属—半导体接触面上时，会使<span lang="en">PN</span>结或金属半导体接触面的两侧产生光生电动势。</p>

        <h2>外光电效应（光电发射效应）</h2>
        <p>物质受到光照后，其中的电子吸收足够高的光子能量，电子逸出物质表面成为真空中的自由电子。</p>
        <b>光电能量转换公式</b>
        $$h\\nu = \\frac12 mv_0^2 + E_{th}$$` },
  "note/optics/optoelectronictech/photosource": { title: "光电子技术", content: `<h1>光源</h1>

        <h2>光源的分类</h2>
        <table>
            <tr>
                <td rowspan="17">光源</td>
                <td rowspan="6">相干光源</td>
                <td rowspan="5">激光</td>
                <td>气体激光器</td>
            </tr>
            <tr>
                <td>固体激光器</td>
            </tr>
            <tr>
                <td>染料激光器</td>
            </tr>
            <tr>
                <td>半导体激光器</td>
            </tr>
            <tr>
                <td>等离子激光器</td>
            </tr>
            <tr>
                <td colspan="2">非线性光学器件</td>
            </tr>
            <tr>
                <td rowspan="3">低相干光源</td>
                <td colspan="2">发光二极管</td>
            </tr>
            <tr>
                <td colspan="2">超辐射发光二极管</td>
            </tr>
            <tr>
                <td colspan="2">掺杂光纤超荧光宽带光源</td>
            </tr>
            <tr>
                <td rowspan="8">非相干光源</td>
                <td rowspan="4">照明光源</td>
                <td>太阳</td>
            </tr>
            <tr>
                <td>气体放电灯</td>
            </tr>
            <tr>
                <td>荧光灯</td>
            </tr>
            <tr>
                <td>白炽灯</td>
            </tr>
            <tr>
                <td rowspan="4">显示光源</td>
                <td>阴极射线管</td>
            </tr>
            <tr>
                <td>等离子体管</td>
            </tr>
            <tr>
                <td>荧光显示器</td>
            </tr>
            <tr>
                <td>液晶显示器</td>
            </tr>
        </table>

        <h2>第一节 光源的基本特性参数</h2>
        <h3>一、光源的分类</h3>
        <h3>二、辐射效率和发光效率</h3>
        <p><b>光源在规定光谱范围内的辐射效率\\(\\eta\\)</b>：给定\\(\\lambda_1\\sim\\lambda_2\\) 波长范围内，某一光源发出的辐射通量与产生这些辐射通量所需的电功率之比。
        $$ \\eta = \\frac{\\Phi}{P} = \\frac{\\int_{\\lambda_1}^{\\lambda_2}\\Phi(\\lambda)d\\lambda}{P} $$</p>
        <p><b>光源在可见光范围内的发光效率\\(\\eta_v\\)</b>：可见光波长范围内，某一光源发出的光通量与这些产生这些通量所需要的电功率之比。
        $$ \\eta_v = \\frac{\\Phi_V}{P} = K_m\\frac{\\int_{380}^{780}\\Phi_V(\\lambda)V(\\lambda)d\\lambda}{P} $$
        其中，\\(V(\\lambda)\\)为明视觉光谱光视效率，\\(K_m\\)为明视觉最大光谱光视效能。
        </p>
        <h3>三、光谱功率分布</h3>
        <p>光源光谱功率分布：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;描述不同光源在不同光谱上辐射出的不同光谱功率
            <br>
            <br>光源相对光谱功率分布：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;归一化处理后的光谱功率分布
            <ul>
                <li><b>线状光谱</b>
                <br>&nbsp;&nbsp;&nbsp;&nbsp;由若干条明显分隔的细线组成
                <br>&nbsp;&nbsp;&nbsp;&nbsp;例：低压汞灯
                <br><img src="./img/3.3.1.png" width="250"></li>
                <li><b>带状光谱</b>
                <br>&nbsp;&nbsp;&nbsp;&nbsp;由若干条分开的谱带组成，每一谱带中又包含许多条细谱线
                <br>&nbsp;&nbsp;&nbsp;&nbsp;例：高压汞灯、高压钠灯
                <br><img src="./img/3.3.2.png" width="250"></li>
                <li><b>连续光谱</b>
                <br>&nbsp;&nbsp;&nbsp;&nbsp;例：所有热辐射光源
                <br><img src="./img/3.3.3.png" width="250"></li>
                <li><b>混合光谱</b>
                <br>&nbsp;&nbsp;&nbsp;&nbsp;由连续光谱与线、带谱混合而成
                <br>&nbsp;&nbsp;&nbsp;&nbsp;例：一般荧光灯
                <br><img src="./img/3.3.4.png" width="250"></li>
            </ul>
        </p>

        <h2>第五节 常用非相干光源</h2>
        <p><b>发光二极管</b>：
            <ul>
                <li>基本结构：PN结</li>
                <li>发光原理：
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;当导带中的电子与价带中的空穴复合时，电子由高能态跃迁到低能态，电子将多余的能量以发射光子的形式释放出来，产生电致发光现象。</li>
                <li>量子效率：
                    <ul>
                        <li>内量子效率：
                            <br>&nbsp;&nbsp;&nbsp;&nbsp;产生的光子数与注入的电子空穴对数之比
                            $$n_{qi} = \\frac{N_r}{G}$$
                        </li>
                        <li>外量子效率：
                            <br>&nbsp;&nbsp;&nbsp;&nbsp;射出的光子数与注入的电子空穴对数之比
                            $$n_{qe} = \\frac{N_T}{G}$$
                        </li>
                    </ul>
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;由于半导体材料折射率很高，临界角很小，大部分光在材料表面都被全反射回去，因而发光二极管内量子效率很高而外料子效率很低。
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;解决方案是将PN结封装在圆球形透明高折射率塑料球心处。
                </li>
            </ul>
        </p>` },
  "note/optics/optoelectronictech/semiconductor": { title: "光电子技术", content: `<h1>半导体</h1>

        <h2>能级理论</h2>
        <p>原子由一个带正电的原子核与一些带负电的电子组成.</p>
        <b>原子能级</b>
        <p>电子在原子周围形成轨道，由内向外分别为K层（n=1）、L层（n=2）、M层（n=3）、N层（n=4）、O层（n=5）、P层（n=6）。每层电子数量为\\(2n^2\\)。</p>
        <p>电子在这些分立的轨道上具有分立的能量，这些分立的能量级在能量坐标上称为<b>能级</b>。</p>
        <p>越靠近原子核能级越低。</p>
        <br><img src="./img/Semi1.png" width = "250"><br>

        <b>价电子</b>
        <p>最外层电子</p>

        <b>电子共有化</b>
        <p>多个原子集合成分子时，离原子核较远的壳层常发生彼此间的交叠，此时价电子已不再属于某个原子，而是若干个原子所共有。</p>

        <b>禁带</b>
        <p>介于导带和价带之间的区域.</p>

        <hr>



        <h2>材料学导论</h2>
        <table>
            <tr>
                <td colspan="2">材料按导电性分类</td>
            </tr>
            <tr>
                <td><b>导体</b></td>
                <td class="tbtext">铁、铝、铜等低价金属元素，其最外层电子在外电场作用下容易产生定向移动，形成电流。</td>
            </tr>
            <tr>
                <td><b>绝缘体</b></td>
                <td class="tbtext">惰性气体、橡胶等，其原子最外层电子受原子核的束缚很强，只有在外电场强到一定程度时才可能导电。</td>
            </tr>
            <tr>
                <td><b>半导体</b></td>
                <td class="tbtext">导电性可受控制，导电性能介于导体与绝缘体之间的材料。</td>
            </tr>
        </table><br>

        <h3>材料学补充概念</h3>
        <b>电介质</b>
        <p>可以发生极化现象的一种绝缘体，大多数绝缘体都是电介质.</p>
        <p>电介质中不含自由载流子，没有导电能力（原子核束缚能力强）.</p>

        <hr>



        <h2>半导体</h2>
        <b>常用半导体材料</b>
        <table>
            <tr>
                <td>元素半导体</td>
                <td>硅（Si）、锗（Ge）……</td>
            </tr>
            <tr>
                <td>化合物半导体</td>
                <td>砷化镓（GaAs）、磷化铝铟镓（AlGaInP）……</td>
            </tr>
            <tr>
                <td>合金半导体</td>
                <td>硅锗（SiGe）、砷化镓铝（AlGaAs）……</td>
            </tr>
        </table>
        <p>
            <ul>
                <li>本征半导体：费米能级\\(E_{fi}\\)位于禁带中线\\(E_i\\)处</li>
                <li>N型半导体：费米能级\\(E_{fn}\\)位于禁带中线以上</li>
                <li>P型半导体：费米能级\\(E_{fp}\\)位于禁带中线以下</li>
            </ul>
            &nbsp;&nbsp;&nbsp;&nbsp;对于杂质半导体，掺杂浓度越高，费米能级离禁带中线越远
        </p>
        

        <table>
            <tr>
                <td colspan="2"><b>半导体分类</b></td>
            </tr>
            <tr>
                <td>本征半导体</td>
                <td><span lang="en">I</span>型半导体</td>
            </tr>
            <tr>
                <td rowspan="2">掺杂半导体</td>
                <td><span lang="en">N</span>型半导体</td>
            </tr>
            <tr>
                <td><span lang="en">P</span>型半导体</td>
            </tr>
        </table>

        <b>本征半导体</b>
        <p>完全纯净的、结构完整的半导体晶体.</p>
        <p>在绝对零度且无外界其他能量激发时，由于所有原子的价电子被共价键束缚，不能自由移动，此时本征半导体无法导电.</p>


        <b>P型半导体</b>
        <p>在硅晶体中掺入<b>三价</b>受主原子。受主原子只有3个价电子，在晶体中它与相邻4个硅原子形成共价键时，因缺少一个电子而产生一个空穴.</p>
        <b>受主能级（\\(E_a\\)）</b>：由于受主原子的存在而产生的附加的受主获取电子的能量状态，位于禁带中靠近价带顶附近。
        <p>受主能级表明：三价原子很容易从硅晶体中获取一个电子而形成稳定结构</p>
        
        <b>N型半导体</b>
        <p>在硅晶体中掺入<b>五价</b>施主原子。施主原子有5个价电子，在晶体中它与相邻4个硅原子形成共价键时，会多出一个自由电子.</p>

        <table>
            <tr>
                <td></td>
                <td>多子（多数载流子）：<br>半导体中数量较多的载流子</td>
                <td>少子（少数载流子）：<br>半导体中数量较少的载流子</td>
            </tr>
            <tr>
                <td><span lang="en">P</span>型半导体</td>
                <td>空穴</td>
                <td>电子</td>
            </tr>
            <tr>
                <td><span lang="en">N</span>型半导体</td>
                <td>电子</td>
                <td>空穴</td>
            </tr>
        </table>
        
        <b>半导体特点</b>：
        <ul>
            <li>半导体受到外界光和热的激励时，导电性能发生显著变化。</li>
            <li>在纯净半导体中加入微量杂质，导电性能显著提升。</li>
        </ul>

            <br><b>本征激发</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;半导体中共价键对价电子的束缚不如绝缘体中那么牢固，当温度升高时，部分价电子会获得足够的随机热振动能量，越过禁带到达导带，从而形成自由电子，并在价带中留下等量的空穴。
            <br>&nbsp;&nbsp;&nbsp;&nbsp;在外加电流作用下，这些由本征激发产生的自由电子将在本征硅晶体内形成电流。
            <br>
            <br><b>空穴</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;当电子挣脱共价键束缚成为自由电子后，共价键中留下的空位。
            <br>&nbsp;&nbsp;&nbsp;&nbsp;空穴的出现是半导体区别于导体的一个重要特征。
            <br>
            <br><b>载流子</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;半导体中能够自由移动的带电粒子。
            <br>&nbsp;&nbsp;&nbsp;&nbsp;在本征半导体中，自由电子与空穴总是成对出现，因此在任何时候，本征半导体中的自由电子浓度与空穴浓度总是相等的。可以将空穴视为带电量与电子相等、但电极性为正的粒子，用空穴移动产生的电流来代表价电子移动产生的电流，此时空穴也就成为半导体中的一种载流子了。
            <br>
            <br><b>载流子的产生与复合</b>：</p>
            <ul>
                <li>产生：
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;在热能或其他能量的激励下，晶体中的共价键结构被打破、以一定的速率成对地产生自由电子和空穴。
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;当温度升高时，将产生更多的自由电子和空穴，意味着载流子浓度的升高，晶体的导电能力也会加强。
                <li>复合：
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;当一个自由电子与一个空穴相遇，自由电子落入空穴中时，二者同时消失。
            </ul>

            <b>受主原子</b>：硼、铟、铝等能在硅晶体中接受电子的原子。
            <br><b>施主原子</b>：磷、砷、锑等能在硅晶体中贡献电子的原子。
        </p>

        <b>载流子的运动形式</b>
        <ul>
            <li>扩散运动</li>
            <li>漂移运动</li>
            <li>扩散运动与漂移运动同时存在</li>
        </ul>

        <p>半导体的电学性质很大程度上取决于所含杂质的种类与数量.</p>
        

        <h2>第二节 PN结的形成及特性</h2>
        <b><span lang="en">PN</span>结的形成</b>
        <p>向半导体材料两个不同区域掺入三价或五价杂质，形成P型区和N型区.</p>
        <p>由于P区中空穴为多子，N区中自由电子为多子，于是在交界面处形成浓度差.</p>
        <p>高浓度物质向低浓度区域扩散，导致大部分自由电子和空穴在交界处复合，形成<b>PN结（耗尽层、空间电荷区、阻挡层、离子区）</b>.</p>
        <p>由于耗尽层中载流子很少，因此具有高阻抗，PN结越宽电阻率越高</p>
        <p>此时半导体整体正负电荷量仍是相等的，但P区由于失去空穴而留下带负电的杂质离子，N区由于失去自由电子留下带正电的杂质离子.</p>


        
        <p>空间电荷区中会产生一个<b>内电场</b>，方向由带正电的N区指向带负电的P区。这个内电场会阻碍多子的扩散，但是会促进少子的漂移。</p>
        <p>PN结中的<b>扩散运动</b>：由浓度差导致的多子的运动，会使空间电荷区变宽</p>    
        <p>PN结中的<b>漂移运动</b>：由电场作用导致的少子的运动，会使空间电荷区变窄</p>

        <p>当漂移运动和扩散运动相等时，空间电荷区便处于动态平衡状态，形成平衡PN结</p>

        <p><b>PN结的单向导电性</b>：PN结外加正向电压时，电阻率很小，PN结导通；外加反向电压时，电阻值很大，PN结截止</p>
        <ul>
            <li><b>外加正向电压（PN结正向偏置）</b>：当PN结接入电路中，P区电位高于N区电位的情况。</li>
            <p>此时外加电压形成的外加电场会使P区和N区的多子移动向PN结移动。P区的空穴进入PN结后，会中和一部分负离子；N区的自由电子进入PN结后，会中和一部分正离子。这会使PN结变窄，电阻率减小</p>
            <li><b>外加反向电压</b>：当PN结接入电路中，P区电位低于N区电位的情况。</li>
            <p>此时外加电压形成的外加电场会使P区和N区的多子进一步远离PN结。这会使PN结变宽，电阻率增大</p>
        </ul>
        <p><b>PN结的反向击穿（电击穿）</b>：PN结两端反向电压增大到一定数值时，反向电流突然增加的现象。</p>
        <p><b>反向击穿电压（V_BR）</b>：发生反向击穿所需要的电压</p>
        <p>PN结的击穿：
            <ul><li>可逆击穿：电击穿</li>
            <ul>
                <li>雪崩击穿</li>
                <li>齐纳击穿</li>
            </ul>
            <li>不可逆击穿：热击穿</li>
            </ul>
        </p>


        <h2>半导体对光的吸收</h2>
        <p>半导体受光照射时，一部分光被反射，一部分光被吸收。</p>
        <b>半导体对光的吸收</b>
        <ul>
            <li>本征吸收</li>
            <li>杂质吸收</li>
            <li>激子吸收</li>
            <li>自由载流子吸收</li>
            <li>晶格吸收</li>
        </ul>` },
  "note/optics/paper": { title: "高等数学", content: `<b>高光谱图像</b>：
        <p>
            基于电磁反射或辐射的真实场景组成的三维空间光谱数据立方体，每个光谱图像对应一个波长。
        </p>
        <p>
            与RGB图像和灰度图像相比，高光谱图像具有光谱维度信息优势
        </p>

        <b>CASSI系统</b>
        <ul>
            <li>空间编码：
                <p>
                    在空间维度对场景信息进行调制。
                </p>
            </li>
            <li>色散</li>
        </ul>
        分类
        <ul>
            <li>单色散（SD-CASSI，Single-Disperser-CASSI）</li>
            <li>双色散（DD-CASSI，Dual-Disperser-CASSI）</li>
        </ul>

        参数：
        <ul>
            <li>场景的三维数据立方体：\\(\\mathbf{X}\\in \\mathbb{R}^{H\\times W\\times C}\\)</li>
            <li>编码孔径（编码掩膜）：\\(\\mathbf{M}\\in \\mathbb{R}^{H\\times W}\\)
                <br>编码孔径是二进制的二维数据，0表示透明区域，1表示不透明区域
            </li>
        </ul>

        SD-CASSI流程：
        <ol>
            <li>空间调制：\\(\\mathbf{X}'(\\lambda) = \\mathbf{X}(\\lambda)\\odot \\mathbf{M}\\)
                <br>\\(\\mathbf{X}(\\lambda)\\)为\\(\\mathbf{X}\\)中波长为\\(\\lambda\\)的单色图像
            </li>
        </ol>

        <hr>
        <h3>以下是GPT内容</h3>
        <b>CASSI系统全流程</b>：
        数据采集
        <p>CASSI系统通过编码孔径对进入系统的光进行编码，经过色散元件将光谱信息展并投射到传感器上</p>
        数据处理
        <p>去除噪声和背景，接着利用压缩感知算法对编码图像进行解码</p>
        <p>色散过程：将不同波长的光分离开来</p>` },
  "note/optics/photoelectricdetection/chapter1": { title: "应用光学", content: `<h1>第一章</h1>
        <h2>第一节 光电检测技术</h2>

        <b>定义</b>
        <p>基于光电技术对不同手段和方法获得的各类信息进行检验和处理，从而实现各种几何量和物理量的测量。</p>
        <p>常应用于信息与信号提取和分析。</p>

        <b>特点</b>
        <ul>
            <li>数字化、智能化</li>
            <li>高精度、高速度</li>
            <li>远距离、大量程</li>
            <li>非接触</li>
        </ul>

        <h2>第二节 光电检测系统</h2>

        <b>组成</b>
        <p>辐射源（光源）、光学系统、光电系统（光电传感器）、电子学系统、计算机系统</p>
        <p>主要利用光电传感器将被测量量转换为光通量，再转换为电量，并综合利用信息传递和处理技术完成在线和自动测量。</p>

        <b>辐射源（光源）</b>
        <p>一般由发光器件及其电源组成，是将电能转换为光能的系统，用以得到符合光学系统所要求的波段范围和光强度（光通量）。</p>

        <b>光学系统</b>
        <p>一般由物镜、目镜、滤光镜等组成。</p>
        <p>将辐射源发出的光进行光学色散、几何成像、分束和改变辐射流的传送方向等，以使光信号携带有待测物体信息的同时还便于后续进行光电转换。</p>
    
        <b>光电系统</b>
        <p>将光信号转换为电信号的系统。</p>

        <b>电子学系统</b>
        <p>对光电系统传输过来的电信号进行放大，使之满足<span lang="en">A/D</span>系统和计算机系统的要求，从而保证计算机系统能够进行数据处理、计算和控制。</p>

        <b>计算机系统</b>
        <p>自动控制、数据处理、显示输出等。</p>` },
  "note/optics/photoelectricdetection/chapter2": { title: "应用光学", content: `<h1>第二章</h1>

        <h2>光电器件基本参数</h2>
        <table>
            <tr>
                <td rowspan="6">光电器件基本参数</td>
                <td rowspan="3">响应特性参数</td>
                <td>响应度（灵敏度）</td>
            </tr>
            <tr>
                <td>响应时间</td>
            </tr>
            <tr>
                <td>频率响应</td>
            </tr>
            <tr>
                <td rowspan="2">噪声特性参数</td>
                <td>噪声（热噪声、散粒噪声、产生-复合噪声、低频噪声（\\(1/f\\)噪声、闪烁噪声））</td>
            </tr>
            <tr>
                <td>衡量噪声参数（信噪比、噪声等效功率、探测率、暗电流、归一化探测率）</td>
            </tr>
            <tr>
                <td>其他参数</td>
                <td>量子效率、线性度、工作温度</td>
            </tr>
        </table>

        <b>响应度</b>
        <p>光电探测器输出信号（输出电压或输出电流）与输入辐射功率或光通量之比。</p>
        <ul>
            <li>电压响应度：\\(S_V = \\frac{U}{P_0}\\)</li>
            <li>电流响应度：\\(S_I = \\frac{I}{P_0}\\)</li>
        </ul>` },
  "note/optics/photoelectricdetection/chapter7": { title: "应用光学", content: `<h1>第七章</h1>

        <h2>锁相放大器</h2>
        <p>锁相放大器是一种基于互相关接收理论的微弱信号检测仪器。其利用相敏检波器压缩等效噪声带宽，从而有效抑制噪声，并检测出周期信号的幅值和相位。其起到极窄的带通滤波器的作用，其原理也是基于信号和噪声在相关特性的差别来实验信号检测目的。</p>

        <ul>
            <li>模拟锁相放大器</li>
            <li>数字锁相放大器</li>
        </ul>` },
  "note/optics/physicaloptics/catalog": { title: "物理光学", content: `<h1>物理光学</h1>

        <h2>目录</h2>

        <div class="Catalog">
            <ul>
                <li><a href="/note/optics/physicaloptics/photon">光子</a></li>
                <li><a href="/note/optics/physicaloptics/chapter1">第一章 电磁基础</a></li>
                <ul>
                    <li><a href="/note/optics/physicaloptics/reflectionandtransmission">光在介质表面的反射与折射</a>
                        <ul>
                            <li><a href="/note/optics/physicaloptics/fresnel">菲涅尔公式</a></li>
                        </ul>
                    </li>
                </ul>
                <li><a href="/note/optics/physicaloptics/polarization">光的偏振</a></li>
                <li><a href="/note/optics/physicaloptics/lightsuperposition">光波叠加</a></li>
                <li><a href="/note/optics/physicaloptics/chapter2">第二章</a></li>
                <li><a href="/note/optics/physicaloptics/diffraction">衍射</a></li>
                <li><a href="/note/optics/physicaloptics/grating">光栅</a></li>
                <li><a href="/note/optics/physicaloptics/chapter4">光在各向异性介质中的传播特性</a></li>
            </ul>
        </div>` },
  "note/optics/physicaloptics/chapter1": { title: "物理光学", content: `<h1>第一章 光的电磁理论基础</h1>

        <div class="PageCatalog">
            <ul>
                <li><a href="#PlaneWave">平面电磁波</a></li>
                <li><a href="#SpatialFrequency">光波场的空间频率域表示</a></li>
            </ul>
        </div>

        <h2><a href="/note/optics/electromagnetism/maxwell"><span lang="en">Maxwell</span>方程组</a></h2>
        <h2><a href="/note/optics/electromagnetism/opticalbasis">光的电磁理论基础<a></a></h2>

        <div class="Card-Definition">
            <b>光波电磁场的波动方程</b>
            $$\\begin{cases}
            \\nabla^2\\mathbf{E} - \\frac{1}{v^2}\\frac{\\partial^2 \\mathbf{E}}{\\partial t^2} = 0\\\\
            \\nabla^2\\mathbf{H} - \\frac{1}{v^2}\\frac{\\partial^2 \\mathbf{H}}{\\partial t^2} = 0
            \\end{cases}$$
        </div>

        <br><br>
        <div class="Card-Definition">
            <b>等相面（等相位面，波面）</b>
            <p>某一时刻相位相同的点的空间位置.</p>
            <p>等相面的法线方向即为波的传播方向.</p>
            <p>相邻等相面间的相位差为\\(2\\pi\\).</p>
        </div>

        <div class="Card-Definition" id="k">
            <b>波矢量\\(\\mathbf{k}\\)</b>
            $$\\mathbf{k} = k\\mathbf{k_0}$$
            <p>\\(\\mathbf{k}_0\\)为单位矢量，沿波的传播方向.</p>
            <p>\\(k =  2\\pi/\\lambda = \\sqrt{k_x^2 + k_y^2 + k_z^2}\\)为<b>空间角频率</b>或<b>波数</b>.</p>
            <p>\\(k_r = 0 \\Leftrightarrow\\)沿\\(r\\)方向相位不发生改变.</p>
        </div>

        <div class="Card-Formula">
            <b>基本公式</b>
            $$c = 1/\\sqrt{\\mu_0\\epsilon_0}\\approx2.9979\\times 10^8m/s$$
            $$n = c/v$$
            $$\\mu_r = \\mu/\\mu_0$$
            $$\\epsilon_r = \\epsilon/\\epsilon_0$$
            $$\\omega = 2\\pi\\nu = 2\\pi/T$$
            $$\\lambda = vT$$
            $$k = 2\\pi/\\lambda$$
            $$f = \\frac{1}{\\lambda}$$

            <b>衍生公式</b>
            $$\\nu = 1/T$$
             <div class="Formula">
                $$n = \\frac{\\sqrt{\\mu\\epsilon}}{\\sqrt{\\mu_0\\epsilon_0}} = \\sqrt{\\mu_r\\epsilon_r}$$
                <div class="Derivation">
                    $$n = \\frac{c}{v} = \\frac{\\sqrt{\\mu\\epsilon}}{\\sqrt{\\mu_0\\epsilon_0}} = \\sqrt{\\mu_r\\epsilon_r}$$
                </div>
            </div>

            $$k = \\frac{2\\pi}{\\lambda} = \\frac{2\\pi}{vT} = \\frac{2\\pi\\nu}{v} = \\frac{\\omega}{v}$$

            <div class="Formula">
                $$\\lambda = \\lambda_0/n$$
                <div class="Derivation">
                    $$\\lambda = vT = cT/n = \\lambda_0/n$$
                </div>
            </div>
            <div class="Formula">
                $$f = \\frac{k}{2\\pi}$$
                <div class="Derivation">
                    $$f = \\frac{1}{\\lambda}$$
                    $$k = \\frac{2\\pi}{\\lambda} \\Rightarrow \\lambda = \\frac{2\\pi}{k}$$
                    $$f = \\frac{k}{2\\pi}$$
                </div>
            </div>

            <table>
                <tr class="tbtitle">
                    <td>参数</td>
                    <td>符号</td>
                </tr>
                <tr>
                    <td>光在真空中的传播速度</td>
                    <td>$$c$$</td>
                </tr>
                <tr>
                    <td>光在介质中的传播速度</td>
                    <td>$$v$$</td>
                </tr>
                <tr>
                    <td>介质的折射率</td>
                    <td>$$n$$</td>
                </tr>
                <tr>
                    <td>磁导率</td>
                    <td>$$\\mu$$</td>
                </tr>
                <tr>
                    <td>真空中的磁导率</td>
                    <td>$$\\mu_0$$</td>
                </tr>
                <tr>
                    <td>振动频率</td>
                    <td>$$\\nu$$</td>
                </tr>
                <tr>
                    <td>振动周期</td>
                    <td>$$T$$</td>
                </tr>
                <tr>
                    <td>介质中的光波长</td>
                    <td>$$\\lambda$$</td>
                </tr>
                <tr>
                    <td>真空中的光波长</td>
                    <td>$$\\lambda_0$$</td>
                </tr>
            </table>
        </div>


        <p>球面波、平面波都是波动方程的基本解.</p>
        <p>由波动方程的线性性质，任何复杂的波都能用球面波或平面波的线性组合表示.</p>
        <h2 id="PlaneWave">单色平面电磁波</h2>
        <h3>表达式</h3>
        $$\\mathbf{E} = \\mathbf{E_0}\\exp[i\\omega(t - \\frac{r}{v})] = \\mathbf{E_0}\\exp[i(\\omega t + \\alpha)]$$
        其中，\\(\\alpha\\)可以看作是\\(\\mathbf{E}\\)的初相。

        <p>[注]光波中包含电场矢量\\(\\mathbf{E}\\)与磁场矢量\\(\\mathbf{H}\\)，从波的传播特性来看，其具有相同的地位；但从光与介质的相互作用来看，磁场的作用远比电场弱，甚至不起作用.因此，在讨论光的波动特性时，常常只考虑电场矢量\\(\\mathbf{E}\\).通常称\\(\\mathbf{E}\\)为光矢量，\\(\\mathbf{E}\\)的振动称为光振动.</p>
        <b>三角函数表示</b>
        <div class="Formula">
            $$\\mathbf{E} = \\mathbf{E}_0\\cos(\\omega t - kr) = \\mathbf{E}_0\\cos[\\omega(t - \\frac{r}{v})] = \\mathbf{E}_0\\cos[2\\pi(\\frac{t}{T} - \\frac{r}{\\lambda})]$$
            <div class="Derivation">
                $$
                \\begin{align}
                \\mathbf{E} &= \\mathbf{E}_0\\cos(\\omega t - kr)\\\\
                           &= \\mathbf{E}_0\\cos[\\omega(t - \\frac{k}{w}r)]\\\\
                           &\\because k = \\omega/v\\\\
                \\therefore \\mathbf{E} &= \\mathbf{E}_0\\cos[\\omega(t-\\frac{r}{v})]\\\\\\\\
                \\mathbf{E} &= \\mathbf{E}_0\\cos(\\omega t - kr)\\\\
                           &= \\mathbf{E}_0\\cos[2\\pi(\\frac{\\omega}{2\\pi}t - \\frac{k}{2\\pi}r)]\\\\
                           &\\because k=2\\pi/\\lambda,~\\omega = 2\\pi/T\\\\
                \\therefore \\mathbf{E} &= \\mathbf{E}_0\\cos[2\\pi(\\frac{t}{T} - \\frac{r}{\\lambda})]
                \\end{align}
                $$
            </div>
        </div>

        <b>复数形式</b>
        <p>复数的虚部无物理意义，为了便于计算，引入单色平面波的复数形式.</p>
        <div class="Formula">
            $$\\mathbf{E} = \\mathbf{E}_0 e^{-i(\\omega t - kz)}$$
            <div class="Derivation">
                <p>由欧拉方程</p>
                $$\\begin{align}
                \\mathbf{E} &= \\mathbf{E}_0 e^{-i(\\omega t - kz)}\\\\
                &= \\mathbf{E}_0 [\\cos(\\omega t - kz) - i\\sin(\\omega t - kz)]
                \\end{align}$$
                <p>由于虚部无物理意义，故</p>
                $$\\mathbf{E} = \\mathbf{E}_0 \\cos(\\omega t - kz)$$
            </div>
        </div>

        <div class="Card-Definition">
            <b>时间相位因子</b>
            $$e^{-i\\omega t}$$

            <b>空间相位因子</b>
            $$e^{i\\mathbf{k}\\cdot\\mathbf{r}}$$
        </div>

        
        <div class="Card-Definition">
            <b>复振幅</b>
            <p>复振幅反映了光场振动的振幅和相位随空间的变化.</p>
            $$\\mathbf{E} = \\mathbf{E}_0 e^{-i(\\omega t - \\mathbf{k}\\cdot\\mathbf{r} + \\phi_0)} = \\mathbf{E}_0 e^{i(\\mathbf{k}\\cdot\\mathbf{r} - \\phi_0)}e^{-i\\omega t}$$
            <p>\\(\\tilde{E} = \\mathbf{E}_0 e^{i(\\mathbf{k}\\cdot\\mathbf{r} - \\phi_0)}\\)称为复振幅.</p>            
        </div>

        
        <b>沿任意波矢量\\(\\mathbf{k}\\)方向传播的平面简谐波</b>
        $$\\mathbf{E} = \\mathbf{E}_0\\cos(\\omega t - \\mathbf{k}\\cdot \\mathbf{r} + \\phi_0) = \\mathbf{E}_0 e^{-i(\\omega t - \\mathbf{k}\\cdot \\mathbf{r} + \\phi_0)}$$
        <p>复振幅为</p>
        $$\\tilde{\\mathbf{E}} =\\mathbf{E}_0 e^{i(\\mathbf{k}\\cdot \\mathbf{r} - \\phi_0)}$$

        <h3>性质</h3>
        <b>平面电磁波是横波</b>
        $$\\mathbf{k}\\mathbf{E} = 0$$
        $$\\mathbf{k}\\mathbf{B} = 0$$
        <p>电矢量与磁矢量方向均垂直于波传播方向，平面电磁波为横波</p>

        <b>\\(\\mathbf{E}, \\mathbf{B}, \\mathbf{k}_0\\)互成右手螺旋系</b>
        <p></p>
        <b>\\(\\mathbf{E}, \\mathbf{B}\\)同相位</b>
        
        <div class="Card-Formula">
            <h2>单色平面电磁波的一般方程</h2>
            <b>三角函数形式</b>
            $$\\mathbf{E} = \\mathbf{E}_0\\cos(\\omega t - \\mathbf{k}\\mathbf{r} + \\phi_0)$$

            <b>复数形式</b>
            $$\\mathbf{E} = \\mathbf{E}_0e^{-i(\\omega t - \\mathbf{k}\\mathbf{r}+ + \\phi_0)}$$
            <ul>
                <li>振动方向：\\(\\mathbf{E}_0\\)的方向</li>
                <li>传播方向：\\(\\mathbf{k}_0\\)的方向</li>
                <li>相位速度：\\(v = \\frac{\\omega}{k}\\)，单位为\\(m/s\\)，方向沿\\(\\mathbf{k}_0\\)</li>
                <li>振幅：\\(E_0\\)，单位为\\(V/m\\)</li>
                <li>频率：\\(\\nu = \\omega/2\\pi\\)，单位为\\(Hz\\)</li>
                <li>波长：\\(\\lambda = 2\\pi/k\\)，单位为\\(m\\)</li>
            </ul>
            <p>[注]复数形式是为了简便计算而取的，虚部无物理意义.此处取\\(\\mathbf{E} = \\mathbf{E}_0e^{-i(\\omega t - kr + \\phi_0)}\\)与\\(\\mathbf{E} = \\mathbf{E}_0e^{i(\\omega t - kr + \\phi_0)}\\)都是可行的，取其实部均为\\(\\mathbf{E}_0\\cos(\\omega t - kr + \\phi_0)\\)，约定取\\(-i\\)形式.</p>
        </div>


        <h2>球面波</h2>
        <b>最简单的简谐球面光波——单色球面光波的波函数</b>
        $$E = \\frac{A_1}{r}\\cos(\\omega t - kr)$$
        <p>复数形式</p>
        $$E = \\frac{A_1}{r}e^{-i(\\omega t - kr)}$$
        <p>复振幅</p>
        $$\\tilde{E} = \\frac{A_1}{r}e^{ikr}$$
        <p>\\(A_1\\)为离开点光源单位距离外的振幅值.</p>


        <div class="Card-Analysis">
            <h2 id="SpatialFrequency">光波场的空间频率域表示</h2>
            <p>在空间域内，波数\\(k\\)可称为<b>空间圆频率</b>，波长\\(\\lambda\\)可称为<b>光波场的空间周期</b>.</p>
            <div class="Card-Definition">
                <b>光波场在光波传播方向上的空间频率\\(f_k\\)</b>
                <p>表示光波场沿波矢\\(\\mathbf{k}\\)方向每增加单位长度，光波场增加的周期数.</p>
                $$f_k = \\frac{1}{\\lambda}$$
            </div>
            <p>[注]光波场的空间周期与空间频率随观察方向不同而不同.</p>

            <div class="Card-Definition">
                <b>三维空间表示式</b>
                $$E = E_0  e^{i(k_xx + k_yy + k_zz + \\phi_0)}$$
                <p>[注]三维空间表示式即为省略时间相位因子的表示式.</p>
            </div>
        </div> 


        <h2>光波的速度</h2>
        <div class="Card-Definition" id="vp">
            <b>相速度</b>
            <p>光波等相位面的传播速度.</p>
        </div>

        <div class="Card-Definition">
            <b>群速度（包络速度）</b>
            <p>等振幅面的传播速度.</p>
        </div>
        <h3>单色光波的速度</h3>
        <b>单色光波的能量传播速度（能流速度）</b>
        $$v = \\omega/k = c/n$$

        <b>单色光波的相速度</b>
        <p>单色光波的相速度等于单色光波的能量传播速度.</p>


        <h3>复色光波的速度</h3>
        <p>简单起见，以二色光波为例：</p>
        $$E = E_{01}\\cos(\\omega_1t - k_1z) + E_{02}\\cos(\\omega_2t - k_2z)$$
        <p>设\\(E_{0} = E_{01} = E_{02}\\)，由<a href="../../Math/Mathematic/Function_Tri.html#SumToProduct">和差化积公式</a></p>
        $$\\begin{align}
        E &= E_0[\\cos(\\omega_1t - k_1z) + \\cos(\\omega_2t - k_2z)]\\\\
          &= 2E_0\\cos\\frac{\\omega_1t-k_1z + \\omega_2t - k_2z}{2}\\cos\\frac{\\omega_1t-k_1z - \\omega_2t + k_2z}{2}\\\\
          &= 2E_0\\cos(\\frac{\\omega_1 + \\omega_2}{2}t - \\frac{k_1+k_2}{2}z)\\cos(\\frac{\\omega_1 - \\omega_2}{2}t - \\frac{k_1 - k_2}{2}z)\\\\
          &= 2E_0\\cos(\\omega_mt - k_mz)\\cos(\\bar{\\omega}t - \\bar{k}z)
        \\end{align}$$
        $$\\begin{align}
        &\\omega_m = \\frac{1}{2}(\\omega_1 - \\omega_2) = \\frac{1}{2}\\Delta\\omega\\\\\\\\
        &k_m = \\frac{1}{2}(k_1 - k_2) = \\frac{1}{2}\\Delta k\\\\\\\\
        &\\bar{\\omega} = \\frac{1}{2}(\\omega_1 + \\omega_2)\\\\\\\\
        &\\bar{k} = \\frac{1}{2}(k_1 + k_2)
        \\end{align}$$

        <b>复色光波的相速度</b>
        $$v = \\frac{\\bar{\\omega}}{\\bar{k}}$$

        <b>复色光波的群速度</b>
        $$v_g = \\frac{\\omega_m}{k_m} = \\frac{\\Delta \\omega}{\\Delta k}$$
        <p>当\\(\\Delta \\omega\\)很小时</p>
        <div class="Formula">
            $$v_g = \\frac{\\mathrm{d}\\omega}{\\mathrm{d}k} =  = v(1 + \\frac{\\lambda}{n}\\frac{\\mathrm{d}n}{\\mathrm{d}\\lambda})$$
            <div class="Derivation">
                $$\\because \\omega = kv$$
                $$v_g = \\frac{\\mathrm{d}\\omega}{\\mathrm{d}k} = \\frac{\\mathrm{d}(kv)}{\\mathrm{d}k} = \\frac{k\\mathrm{d}v + v\\mathrm{d}k}{\\mathrm{d}k} = v + k\\frac{\\mathrm{d}v}{\\mathrm{d}k}$$
                $$\\because v = c/n, k = 2\\pi/\\lambda$$
                $$\\therefore \\mathrm{d}v = -\\frac{c}{n^2}\\mathrm{d}n, \\mathrm{d}k = -\\frac{2\\pi}{\\lambda^2}\\mathrm{d}\\lambda$$
                $$v_g = v + \\frac{2\\pi}{\\lambda}\\frac{-\\frac{c}{n^2}\\mathrm{d}n}{-\\frac{2\\pi}{\\lambda^2}\\mathrm{d}\\lambda} = v + v\\frac{\\lambda}{n}\\frac{\\mathrm{d}n}{\\mathrm{d}\\lambda} = v(1 + \\frac{\\lambda}{n}\\frac{\\mathrm{d}n}{\\mathrm{d}\\lambda})$$
            </div>
        </div>
        <p>在折射率\\(n\\)随波长\\(\\lambda\\)变化的色散介质中，复色光波的相速度不等于群速度：</p>
        <ul>
            <li>正常色散介质（\\(\\mathrm{d}n/\\mathrm{d}\\lambda \\lt 0\\)）：\\(v \\gt v_g\\)</li>
            <li>反常色散介质（\\(\\mathrm{d}n/\\mathrm{d}\\lambda \\gt 0\\)）：\\(v \\lt v_g\\)</li>
        </ul>
        <p>无色散介质（\\(\\mathrm{d}n/\\mathrm{d}\\lambda = 0\\)）中，复色光波的群速度等于相速度，实际上只有真空才属于这种情况.</p>



        <h2>平面光波的偏振特性</h2>
        <p>光波的偏振特性是横波区别于纵波的最明显标志.</p>
        <p>设光波沿\\(z\\)方向传播，电场矢量为</p>
        $$\\mathbf{E} = \\mathbf{E}_0 \\cos(\\omega t - kz + \\phi_0)$$
        <p>为表征光波的偏振特性，将其表示为沿\\(x, y\\)方向上振动的两个独立分量的线性组合</p>
        $$\\mathbf{E} = \\mathbf{i}\\mathbf{E}_x + \\mathbf{j}\\mathbf{E}_y$$
        $$E_x = E_{0x}\\cos(\\omega t - kz + \\phi_x) = E_{0x}e^{-i(\\omega t - kz + \\phi_x)}$$
        $$E_y = E_{0y}\\cos(\\omega t - kz + \\phi_y) = E_{0y}e^{-i(\\omega t - kz + \\phi_y)}$$

        <div class="Formula">
            $$(\\frac{E_x}{E_{0x}})^2 + (\\frac{E_y}{E_{0y}})^2 - 2(\\frac{E_x}{E_{0x}})(\\frac{E_y}{E_{0y}})\\cos \\phi = \\sin^2 \\phi(\\phi = \\phi_y - \\phi_x)$$
            <div class="Derivation">
                <p>令\\(\\phi = \\phi_y - \\phi_x, \\omega t - kz + \\phi_x = \\theta\\)</p>
                $$E_x = E_{0x}\\cos\\theta \\Rightarrow \\cos\\theta = \\frac{E_x}{E_{0x}}$$
                $$\\sin\\theta = \\sqrt{1 - (\\frac{E_x}{E_{0x}})^2}$$
                $$E_y = E_{0y}\\cos(\\theta + \\phi) = E_{0y}(\\cos\\theta\\cos\\phi - \\sin\\theta\\sin\\phi)$$
                $$(\\frac{E_y}{E_{0y}}) = \\frac{E_x}{E_{0x}}\\cos\\phi - \\sqrt{1 - (\\frac{E_x}{E_{0x}})^2}\\sin \\phi$$
                $$[1 - (\\frac{E_x}{E_{0x}})]\\sin^2\\phi = (\\frac{E_x}{E_{0x}})^2\\cos^2\\phi - 2(\\frac{E_x}{E_{0x}})(\\frac{E_y}{E_{0y}})\\cos\\phi + (\\frac{E_y}{E_{0y}})^2$$
                $$\\sin^2\\phi = (\\frac{E_x}{E_{0x}})^2 - 2(\\frac{E_x}{E_{0x}})(\\frac{E_y}{E_{0y}})\\cos\\phi + (\\frac{E_y}{E_{0y}})^2$$
            </div>
        </div>

        <b>线偏振光</b>
        <p>条件：\\(\\phi = m\\pi(m = 0, \\pm 1, \\pm 2, \\cdots)\\)</p>
        <div class="Formula">
            $$\\frac{1}{E_{0x}}E_x \\pm \\frac{1}{E_{0y}}E_y = 0$$
            <div class="Derivation">
                $$\\phi = m\\pi(m = 0, \\pm 1, \\pm 2, \\cdots) \\Rightarrow \\begin{cases}\\sin \\phi = 0\\\\ \\cos\\phi = \\pm 1\\end{cases}$$
                $$(\\frac{E_x}{E_{0x}})^2 + (\\frac{E_y}{E_{0y}})^2 - 2(\\frac{E_x}{E_{0x}})(\\frac{E_y}{E_{0y}})\\cos \\phi = \\sin^2 \\phi$$
                $$(\\frac{E_x}{E_{0x}})^2 \\pm 2(\\frac{E_x}{E_{0x}})(\\frac{E_y}{E_{0y}}) + (\\frac{E_y}{E_{0y}})^2 = 0$$
                $$(\\frac{E_x}{E_{0x}} \\pm \\frac{E_y}{E_{0y}})^2 = 0$$
                $$\\frac{1}{E_{0x}}E_x \\pm \\frac{1}{E_{0y}}E_y = 0$$                
            </div>
        </div>
        $$\\frac{E_y}{E_x} = \\frac{E_{0y}}{E_{0x}}e^{-i\\phi} = \\frac{E_{0y}}{E_{0x}}e^{-im\\pi}$$

        <p>当\\(m\\)为偶数时，光场在\\(Ⅰ,Ⅲ\\)象限内振动.</p>
        <p>当\\(m\\)为奇数时，光场在\\(Ⅱ,Ⅳ\\)象限内振动.</p>

        <b>圆偏振光</b>
        <p>条件：\\(E_{0x} = E_{0y} = E'_0, \\phi = m\\pi/2(m = \\pm 1, \\pm 3, \\pm 5\\cdots)\\)</p>
        <div class="Formula">
            $$E^2_x + E^2_y = E'^2_0$$
            <div class="Derivation">
                $$\\phi = m\\pi/2(m = \\pm 1, \\pm 3, \\pm 5\\cdots) Rightarrow \\begin{cases}\\sin \\phi = \\pm 1 \\\\ \\cos\\phi = 0\\end{cases}$$
                $$E_{0x} = E_{0y} = E'_0$$
                $$(\\frac{E_x}{E_{0x}})^2 + (\\frac{E_y}{E_{0y}})^2 - 2(\\frac{E_x}{E_{0x}})(\\frac{E_y}{E_{0y}})\\cos \\phi = \\sin^2 \\phi$$
                $$(\\frac{E_x}{E'_0})^2 + (\\frac{E_y}{E'_0})^2 = 1$$
                $$E^2_x + E^2_y = E'^2_0$$                
            </div>
        </div>
        $$\\frac{E_y}{E_x} = \\frac{E_{0y}}{E_{0x}}e^{-i\\phi} = e^{\\mp i\\frac{\\pi}{2}} = \\mp i$$
        <p>规定：逆着光传播方向看，\\(\\mathbf{E}\\)顺时针旋转，称为<b>右旋</b>偏振光；\\(\\mathbf{E}\\)逆时针旋转，称为<b>左旋</b>偏振光.</p>        
        <p>\\(\\phi = \\frac{\\pi}{2}\\)时，为右旋偏振光；\\(\\phi=-\\frac{\\pi}{2}\\)时，为左旋偏振光.</p>

        <b>椭圆偏振光</b>
        <p>\\(2m\\pi \\lt \\phi \\lt (2m+1)\\pi\\)：右旋椭圆偏振光.</p>
        <p>\\((2m-1)\\pi \\lt \\phi \\lt 2m\\pi\\)：左旋椭圆偏振光.</p>
        

        <h3>琼斯矩阵法表示偏振态</h3>
        <b>琼斯矩阵</b>
        $$\\left[\\begin{matrix}E_x\\\\E_y\\end{matrix}\\right] = \\left[\\begin{matrix}E_{0x}e^{-i\\phi_x}\\\\E_{0y}e^{-i\\phi_y}\\end{matrix}\\right]$$

        <b>\\(Ⅰ，Ⅲ\\)象限内的线偏振光</b>
        <p>此时\\(\\phi_x = \\phi_y = \\phi_0\\)</p>
        $$\\left[\\begin{matrix}E_x\\\\E_y\\end{matrix}\\right] = \\left[\\begin{matrix}E_{0x}\\\\E_{0y}\\end{matrix}\\right]e^{-i\\phi_0}$$

        <b>右旋、左旋圆偏振光</b>
        <p>此时\\(\\phi_y - \\phi_x = \\pm \\frac{\\pi}{2}, E_{0x} = E_{0y} = E_0\\)</p>
        $$\\left[\\begin{matrix}E_x\\\\E_y\\end{matrix}\\right] = \\left[\\begin{matrix}1\\\\\\mp i\\end{matrix}\\right]E_0e^{-i\\phi_x}$$` },
  "note/optics/physicaloptics/chapter11": { title: "应用光学", content: `<h1>第十一章 光的电磁理论基础</h1>
    <h2>第一节 光的电磁波性质</h2>
    

    <b>波函数</b>：\\(\\mathbf{E} = \\mathbf{A} \\cos(kz-\\omega t)\\)


    <h2>第二节 光在介质界面上的反射和折射</h2>
    <p>当电磁波由一种介质传播到另一种介质中时，由于介质的物理性质不同，即\\(n\\)不同，故电磁场在界面上是不连续的。</p>
    <b>电磁场的连续条件</b>：
    <p>在没有传导电流和自由电荷的介质中，磁感强度\\(\\mathbf{B}\\)和电感强度\\(\\mathbf{D}\\)的法向分量在界面上连续，而电场强度\\(\\mathbf{E}\\)和磁场强度\\(\\mathbf{H}\\)的切向分量在界面上连续。</p>
    $$
    \\begin{cases}
    B_{1n} = B_{2n}\\\\
    D_{1n} = D_{2n}\\\\
    H_{1\\tau} = H_{2\\tau}\\\\
    E_{1\\tau} = H_{2\\tau}
    \\end{cases}
    $$

    <b>入射面</b>
    <p>界面法线与入射光线组成的平面。</p>` },
  "note/optics/physicaloptics/chapter2": { title: "物理光学", content: `<h1>光的干涉</h1>

        <div class="Card-Definition">
            <b>干涉</b>
            <p>两束或多束光在空间相遇时，在重叠区内形成稳定的强弱分布的现象.</p>
        </div>

        <div class="Card-Analysis">
            <h3>干涉光光强</h3>
            <div class="Formula">
                $$I = I_1 + I_2 + 2\\sqrt{I_1I_2}\\cos\\theta\\cos\\phi$$
                $$\\phi = (\\omega_1 - \\omega_2)t - (\\mathbf{k}_1 - \\mathbf{k}_2)\\mathbf{r} + (\\phi_{01}-\\phi_{02})$$
                <p>\\(I_1, I_2\\)分别为两束光的光强，\\(\\theta\\)为两束光的振动方向夹角，\\(\\phi\\)为两束光的相位差.</p>
                <p>\\(I_{12} = \\sqrt{I_1I_2}\\cos\\theta\\cos\\phi\\)称为干涉项.</p>
                <div class="Derivation">
                    <p>设两列单色平面线偏振光在空间P点相遇，其振动方向夹角为\\(\\theta\\)：</p>
                    $$\\mathbf{E_1} = \\mathbf{E_{01}}e^{-i(\\omega_1 t - \\mathbf{k_1}\\mathbf{r} + \\phi_{01})}$$
                    $$\\mathbf{E_2} = \\mathbf{E_{02}}e^{-i(\\omega_2 t - \\mathbf{k_2}\\mathbf{r} + \\phi_{02})}$$
                    <img src="Img/E1E2.jpg">
                    $$\\mathbf{E_1} = \\mathbf{i}E_1\\cos\\theta + \\mathbf{j}E_1\\sin\\theta$$
                    $$\\mathbf{E_2} = \\mathbf{i}E_2$$
                    $$\\begin{align}
                    I &= \\mathbf{E}\\cdot \\mathbf{E}^*\\\\
                      &= (\\mathbf{E}_1 + \\mathbf{E}_2)\\cdot(\\mathbf{E}_1  + \\mathbf{E}_2)^*\\\\
                      &= (\\mathbf{E}_1 + \\mathbf{E}_2)\\cdot(\\mathbf{E}^*_1  + \\mathbf{E}^*_2)\\\\
                      &= I_1 + \\mathbf{E}_2\\mathbf{E}^*_1 + \\mathbf{E}_1\\mathbf{E}^*_2 + I_2\\\\
                      &= I_1 + I_2 + \\mathbf{i}E_2(\\mathbf{i}E^*_1\\cos\\theta + \\mathbf{j}E^*_2\\cos\\theta) + (\\mathbf{i}E_1\\cos\\theta + \\mathbf{j}E_2\\sin\\theta)\\mathbf{i}E^*_2\\\\
                      &= I_1 + I_2 + E_2E^*_1\\cos\\theta + E_1E^*_2\\cos\\theta\\\\
                      &= I_1 + I_2 + E_{02}e^{-i(\\omega_2t - \\mathbf{k_2}\\mathbf{r} + \\phi_{02})}\\cdot E_{01}e^{i(\\omega_1t - \\mathbf{k_1}\\mathbf{r} + \\phi_{01})}\\cos\\theta + E_{01}e^{-i(\\omega_1t - \\mathbf{k_1}\\mathbf{r} + \\phi_{01})}\\cdot E_{02}e^{i(\\omega_2t - \\mathbf{k_2}\\mathbf{r} + \\phi_{02})}\\cos\\theta\\\\
                      &= I_1 + I_2 + E_{01}E_{02}\\cos\\theta\\{e^{i[(\\omega_1 - \\omega_2)t - (\\mathbf{k_1} - \\mathbf{k_2})\\mathbf{r} + (\\phi_{01}-\\phi_{02})]} + e^{-i[(\\omega_1 - \\omega_2)t - (\\mathbf{k_1} - \\mathbf{k_2})\\mathbf{r} + (\\phi_{01}-\\phi_{02})]}\\}\\\\
                      &= I_1 + I_2 + 2\\sqrt{I_1I_2}\\cos\\theta\\cos\\phi
                    \\end{align}$$
                    $$\\phi = (\\omega_1 - \\omega_2)t - (\\mathbf{k_1} - \\mathbf{k_2})\\mathbf{r} + (\\phi_{01}-\\phi_{02})$$
                </div>
            </div>

            <p>当\\(\\cos\\phi = 1\\)时，光强最大；当\\(\\cos\\phi = -1\\)时，光强最小.</p>
            <table>
                <tr>
                    <td>$$\\phi$$</td>
                    <td>$$I$$</td>
                </tr>
                <tr>
                    <td>$$\\phi = 2m\\pi~m = 0, \\pm1, \\pm2, \\cdots$$</td>
                    <td>$$I_{max} = I_1 + I_2 + 2\\sqrt{I_1I_2}\\cos\\theta$$</td>
                </tr>
                <tr>
                    <td>$$\\phi = 2(m+1)\\pi~m=0,\\pm1 , \\pm2, \\cdots$$</td>
                    <td>$$I_{min} = I_1 + I_2 - 2\\sqrt{I_1I_2}\\cos\\theta$$</td>
                </tr>
            </table>
            <p>\\(m\\)称为<b>干涉级次</b>.</p>
        </div>

        <div class="Card-Definition">
            <b>干涉条纹可见度</b>
            <p>用于表征干涉效应程度的量.</p>
            $$V = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}}$$

            <p>\\(I_{min} = 0\\)时，\\(V = 1\\)，两束光完全相干，条纹最清晰.</p>
            <p>\\(I_{max} = I_{min}\\)时，\\(V = 0\\)，两束光完全不相干，无干涉条纹.</p>
            <p>\\(0\\lt V\\lt 1\\)时，两束光部分相干，条纹清晰度一般.</p>
        </div>

        <div class="Card-Analysis">
            <h3>相干条件分析</h3>
            <p>1、两光束频率相同（\\(\\omega_1 = \\omega_2\\)）</p>
            <p>为了得到稳定的干涉条纹分布，干涉光强不应随时间变化，即\\(\\omega_1 - \\omega_2 = 0\\).</p>
            <p>2、两光束振动方向相同（\\(\\theta = 0\\)）</p>
            <p>$$V = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}} = \\frac{4\\sqrt{I_1I_2}\\cos\\theta}{2I_1 + 2I_2}$$</p>
            <p>\\(I\\)一定时，\\(\\theta\\)越大，干涉条纹越清晰，当\\(\\theta = 0\\)时，干涉条纹最清晰.</p>
            <p>3、两光束初相位差恒定（\\(\\phi_2 - \\phi_1\\)恒定）</p>
            <p>为了保证光强\\(I\\)不发生变化.</p>
        </div>

        <div class="Card-Definition">
            <b>相干光波</b>
            <p>满足相干条件的光波.</p>

            <b>相干光源</b>
            <p>能够产生相干光波的光源.</p>
            <p>普通光源是非相干光源.</p>
            <p>激光器是相干光源.</p>
        </div>

        <div class="Card-Analysis">
            <h3>相干光的获得方法</h3>
            <ul>
                <li>分波面法</li>
                <li>分振幅法</li>
            </ul>
        </div>

        <div class="Card-Analysis">
            <h3>杨氏双缝干涉</h3>
            <img src="Img/Yang.jpg" width="400">
            <b>光程差</b>
            <p>\\(d\\ll D, R_1 = R_2\\)时：</p>
            <div class="Formula">
                $$\\Delta = \\frac{dy}{D}$$
                <div class="Derivation">
                    $$\\Delta = d\\sin\\beta$$
                    $$\\sin \\beta \\approx \\tan \\beta = \\frac{y + \\frac{d}{2}}{D} \\approx \\frac{y}{D}$$
                    $$\\Delta = \\frac{dy}{D}$$
                </div>
            </div>
            <b>相位差</b>
            $$\\phi = kr = \\frac{2\\pi}{\\lambda}\\Delta = \\frac{2\\pi}{\\lambda}\\frac{dy}{D}$$
            <table>
                <tr>
                    <td></td>
                    <td>$$\\phi$$</td>
                    <td>$$y$$</td>
                </tr>
                <tr>
                    <td>亮条纹</td>
                    <td>$$\\phi = 2m\\pi(m=0,\\pm1,\\pm2,\\cdots)$$</td>
                    <td>$$y = m\\frac{D\\lambda}{d}(m=0,\\pm1,\\pm2,\\cdots)$$</td>
                </tr>
                <tr>
                    <td>暗条纹</td>
                    <td>$$\\phi=(2m + 1)\\pi(m=0,\\pm1,\\pm2,\\cdots)$$</td>
                    <td>$$y = (m+1)\\frac{D\\lambda}{d}(m=0,\\pm1,\\pm2,\\cdots)$$</td>
                </tr>
            </table>

            <b>光束汇聚角</b>
            $$w = \\frac{d}{D}$$

            <b>条纹间距\\(\\epsilon\\)</b>
            $$\\epsilon = y_{m+1} - y_m = \\frac{D\\lambda}{d} = \\frac{\\lambda}{w}$$
        </div>

        <div class="Card-Definition">
            <b>非定域干涉</b>
            <p>在整个光波叠加区内随处可见干涉条纹的干涉.</p>

            <b>定域干涉</b>
            <p>在整个光波叠加区内干涉条纹不随处可见的干涉.</p>
        </div>

        <div class="Card-Supplement">
            <b>补充</b>
            <p>当用白光进行干涉实验时，除\\(m=0\\)的条纹仍是白光外，其他级次的干涉条纹均为不同颜色分离的彩色条纹.</p>
            $$\\phi = \\frac{2\\pi}{\\lambda}\\frac{dy}{D} = 2m\\pi$$
            <p>当\\(m=0\\)时，\\(\\phi=0\\)与\\(\\lambda\\)无关.</p>
            <p>当\\(m\\neq 0\\)时，由于\\(\\phi=2m\\pi\\)一定，\\(y\\)越大的位置\\(\\lambda\\)越大.</p>

        </div>

        <div class="Card-Analysis">
            <h2>平行平板干涉（薄膜干涉）分析</h2>
            <img src="Img/Interference_Plate.jpg" width="300">

            <b>半波损失分析</b>
            <p>设平行平板上方介质折射率为\\(n_1\\)，下方介质折射率为\\(n_2\\).</p>
            <table>
                <tr>
                    <td>情况</td>
                    <td>分析</td>
                    <td>结论</td>
                    <td>$$\\Delta$$</td>
                </tr>
                <tr>
                    <td>$$n_1 \\lt n \\gt n_2$$</td>
                    <td rowspan="2" class="tbtext">两束反射光中总有一支发生<a href="ReflectionAndTransmission.html#HalfWaveLoss">半波损失</a>.</td>
                    <td rowspan="2" class="tbtext">存在半波损失，即存在附件光程差.</td>
                    <td rowspan="2">$$\\Delta = 2nh\\cos\\theta_2 + \\frac{\\lambda}{2}$$</td>
                </tr>
                <tr>
                    <td>$$n_1 \\gt n \\lt n_2$$</td>
                </tr>
                <tr>
                    <td>$$n_1 \\lt n \\lt n_2$$</td>
                    <td rowspan="2" class="tbtext">两束反射光均不发生半波损失.</td>
                    <td rowspan="2" class="tbtext">不存在半波损失，即不存在附加光程差.</td>
                    <td rowspan="2">$$\\Delta = 2nh\\cos\\theta_2$$</td>
                </tr>
                <tr>
                    <td>$$n_1 \\gt n \\gt n_2$$</td>
                </tr>
            </table>

            <b>光程差</b>
            <p>考虑常见的\\(n_0 \\lt n \\gt n_0\\)模型</p>

            <div class="Formula">
                $$\\Delta = n(AB + BC) - n_0AN + \\frac{\\pi}{2} = 2nh\\cos\\theta_2 + \\frac{\\pi}{2}$$
                <div class="Derivation">
                    $$AB = BC = \\frac{h}{\\cos\\theta_2}$$
                    $$AN = AC\\sin\\theta_1 = 2h\\tan\\theta_2\\sin\\theta_1$$
                    $$\\begin{align}
                    \\Delta &= \\frac{2nh}{\\cos\\theta_2} - 2n_0h\\tan\\theta_2\\sin\\theta_1\\\\
                           &= 2h(\\frac{n}{\\cos\\theta_2} - \\frac{n_0\\sin\\theta_1\\sin\\theta_2}{\\cos\\theta_2})
                    \\end{align}$$
                    $$\\because n_0\\sin\\theta_1 = n\\sin\\theta_2$$
                    $$\\begin{align}
                    \\Delta &= 2h(\\frac{n - n\\sin^2\\theta_2}{\\cos\\theta_2})\\\\
                           &= 2nh\\cos\\theta_2
                    \\end{align}$$
                    <p>考虑附加光程差：</p>
                    $$\\Delta = 2nh\\cos\\theta_2 + \\frac{\\pi}{2}$$
                </div>
            </div>
            

            <b>相位差</b>
            $$\\phi = kr = \\frac{2\\pi}{\\lambda}\\Delta = \\frac{2\\pi}{\\lambda}(2nh\\cos\\theta_2 + \\frac{\\lambda}{2})$$

            <table>
                <tr>
                    <td></td>
                    <td>$$\\phi$$</td>
                    <td>$$\\Delta$$</td>
                </tr>
                <tr>
                    <td>亮条纹</td>
                    <td>$$\\phi = 2m\\pi(m = 0, \\pm1, \\pm2, \\cdots)$$</td>
                    <td>$$\\Delta = m\\lambda(m = 0, \\pm1, \\pm2, \\cdots)$$</td>
                </tr>
                <tr>
                    <td>暗条纹</td>
                    <td>$$\\phi = 2(m + 1)\\pi(m = 0, \\pm1, \\pm2, \\cdots)$$</td>
                    <td>$$\\Delta = (m + 1)\\lambda(m = 0, \\pm1, \\pm2, \\cdots)$$</td>
                </tr>
            </table>

            <p>一般情况下，平行平板的折射率\\(n\\)与厚度\\(h\\)以及光波长\\(\\lambda\\)均为常数，故光程差仅取决于折射角\\(\\theta_2\\)，而其又由入射角\\(\\theta_1\\)所决定，故：</p>
            <p>具有相同入射角的光经平板两表面反射所形成的反射光在其相遇点处具有相同的光程差，即位于同一条纹上，为等倾干涉条纹.</p>

        </div>

        <div class="Card-Definition">
            <b>等倾干涉</b>
            <p>凡入射角相同的光处于同一干涉条纹上，称这种干涉为等倾干涉，对应的干涉条纹为等倾干涉条纹.</p>
        </div>

        <div class="Card-Analysis">
            <h2>反射光的等倾干涉圆条纹</h2>
            <h3>实验装置</h3>
            <img src="Img/EqualInclinationInterference_Reflection.jpg" width="600">
            <p>透镜光轴垂直于平行平板G，S为一扩展光源，其发出的光线经半反射镜M后，以各种角度入射到平行平板G上.</p>

            <h3>等倾圆环的特点</h3>
            <b>等倾圆环的干涉级数</b>
            <p>愈接近等倾圆环中心的条纹，其对应的入射角越小，从而对应的折射角\\(\\theta_2\\)越小，由平行平板干涉的光程差公式：\\(\\Delta = 2nh\\cos\\theta_2 (+ \\frac{\\lambda}{2})\\)，相对应的光程差\\(\\Delta\\)越大，干涉条纹级数也越高；距离圆环中心越远的条纹，干涉级数越小.</p>
            <p>设中心点的干涉级数为\\(m_0\\)：</p>
            $$\\Delta_0 = 2nh(+\\frac{\\lambda}{2}) = m_0\\lambda$$
            $$m_0 = \\frac{2nh}{\\lambda}(+\\frac{1}{2})$$
            <p>\\(m_0\\)不一定为整数，即中心未必时是最亮点，故常将\\(m_0\\)写作：</p>
            $$m_0 = m_1 + \\epsilon(0\\lt \\epsilon\\lt 1)$$

            <b>等倾亮圆环对应的入射角及半径</b>
            <p>第\\(N\\)个亮环对应的入射角\\(\\theta_{1N}\\)为：</p>
            <div class="Formula">
                $$\\theta_{1N} = \\frac{1}{n_0}\\sqrt{\\frac{n\\lambda}{h}}\\sqrt{N - 1 + \\epsilon}$$
                <div class="Derivation">
                    <p>由中心向外计算，第\\(N\\)个亮环的干涉级数\\(m_N = m_1 - (N-1)\\)，该亮环的张角为\\(\\theta_{1N}\\)</p>
                    $$\\begin{cases}
                    2nh\\cos\\theta_{2N}  + \\frac{\\lambda}{2} = [m_1 - (N - 1)]\\lambda\\\\
                    2nh + \\frac{\\lambda}{2} = m_0\\lambda = (m_1 + \\epsilon)\\lambda
                    \\end{cases}\\Rightarrow
                    2nh(1 - \\cos\\theta_{2N}) = (N - 1 + \\epsilon)\\lambda$$
                    <p>通常\\(\\theta_1,\\theta_2 \\rightarrow 0\\)</p>
                    $$1 - \\cos\\theta_{2N} \\approx \\frac{1}{2}\\theta^2_{2N}\\approx \\frac{1}{2}\\sin^2\\theta_{2N}$$
                    $$\\because n_0\\sin\\theta_{1N} = n\\sin\\theta_{2N}$$
                    $$\\therefore \\sin^2\\theta_{2N} = \\frac{n_0^2}{n^2}\\sin^2\\theta_{1N} \\approx \\frac{n_0^2}{n^2}\\theta_{1N}^2$$
                    $$1 - \\cos\\theta_{2N} \\approx \\frac{1}{2}\\frac{n_0^2}{n^2}\\theta_{1N}^2$$
                    $$\\therefore 2nh\\cdot \\frac{1}{2}\\frac{n_0^2}{n^2}\\theta_{1N}^2 \\approx (N - 1 + \\epsilon)\\lambda$$
                    $$\\theta_{1N} \\approx \\frac{1}{n_0}\\sqrt{\\frac{n\\lambda}{h}}\\sqrt{N - 1 + \\epsilon}$$                    
                </div>
            </div>

            <p>由中心向外计算，第\\(N\\)个亮环的半径为：</p>
            <div class="Formula">
                $$r_N = f\\frac{1}{n_0}\\sqrt{\\frac{n\\lambda}{h}}\\sqrt{N - 1 + \\epsilon}$$
                <div class="Derivation">
                    <img src="Img/EqualInclinationInterference_Reflection_01.jpg" width="200">
                    $$r_N = f\\tan\\theta_{1N} \\approx f\\theta_{1N} \\approx \\frac{f}{n_0}\\sqrt{\\frac{n\\lambda}{h}}\\sqrt{N-1+\\epsilon}$$
                </div>
            </div>
            <p>该式说明，平行平板越厚，等面积内的圆环数量越多.</p>

            <b>等倾圆环相邻亮条纹的间距</b>
            $$e_N = \\frac{f}{2n_0}\\sqrt{\\frac{n\\lambda}{h(N-1+\\epsilon)}}$$
            $$\\begin{align}
            e_N &= r_{N+1} - r_N\\\\
            \\end{align}$$
            <p>该式说明，越靠近边缘（即\\(N\\)越大），条纹越密集（间距越小）.</p>
        </div>

        <div class="Card-Analysis">
            <h2>透射光的等倾干涉圆条纹</h2>
            <div class="Formula">
                $$\\Delta = 2nh\\cos\\theta_2$$
                <div class="Derivation">
                    $$\\begin{align}
                    \\Delta &= \\frac{2nh}{\\cos\\theta_2} - 2n_0h\\tan\\theta_2\\sin\\theta_1\\\\
                            &= 2h(\\frac{n}{\\cos\\theta_2} - \\frac{n_0\\sin\\theta_1\\sin\\theta_2}{\\cos\\theta_2})
                    \\end{align}$$
                    $$\\because n_0\\sin\\theta_1 = n\\sin\\theta_2$$
                    $$\\begin{align}
                    \\Delta &= 2h(\\frac{n - n\\sin^2\\theta_2}{\\cos\\theta_2})\\\\
                            &= 2nh\\cos\\theta_2
                    \\end{align}$$
                </div>
            </div>
            <p>透射光的等倾干涉不存在半波损失.</p>
        </div>

        <div class="Card-Definition">
            <b>楔形平板</b>
            <p>上下平面具有微小夹角的平板.</p>

            <b>劈尖</b>
            <p>一种特殊的楔形平板，厚度可以在某处为0.</p>
        </div>

        <div class="Card-Definition">
            <b>等厚干涉</b>
            <p>干涉条纹与楔形平板厚度一一对应的干涉，相应的干涉条纹称为等厚条纹.</p>
        </div>

        <div class="Card-Analysis">
            <h2>等厚干涉（楔形平板干涉）</h2>
            <p>楔形平板的光程差精确值一般很难计算，通常来说，楔形平板厚度不大，楔角也很小，因此可以近似利用平行平板光程差公式表示：</p>
            $$\\Delta = 2nh\\cos\\theta_2$$
            <p>考虑常见的\\(n_0-n-n_0\\)情况，光束在楔形平板表面产生半波损失，两表面反射光光程差为：</p>
            $$\\Delta = 2nh\\cos\\theta_2 + \\frac{\\lambda}{2}$$

            <b>条纹亮度分析</b>
            $$\\phi = kr = \\frac{2\\pi}{\\lambda}\\Delta$$
            <table>
                <tr>
                    <td></td>
                    <td>$$\\phi$$</td>
                </tr>
                <tr>
                    <td>亮条纹</td>
                    <td>$$\\phi = 2m\\pi(m = 0,\\pm1, \\pm2, \\cdots)$$</td>
                </tr>
                <tr>
                    <td>暗条纹</td>
                    <td>$$\\phi = 2(m+1)\\pi(m=0,\\pm1,\\pm2,\\cdots)$$</td>
                </tr>
            </table>

            <h3>垂直入射楔形板产生干涉的系统</h3>
            <b>相邻亮条纹间厚度差</b>
            <div class="Formula">
                $$\\Delta h = \\frac{\\lambda}{2n}$$
                <div class="Derivation">
                    <p>光线垂直入射\\(\\Rightarrow \\theta_2 = \\theta_1 = 0\\)</p>
                    <p>对于亮条纹：</p>
                    $$\\begin{cases}
                    2nh + \\frac{\\lambda}{2} = m\\lambda\\\\
                    2nh' + \\frac{\\lambda}{2} = (m+1)\\lambda
                    \\end{cases}\\Rightarrow
                    \\Delta h = \\frac{\\lambda}{2n}$$
                </div>
            </div>

            <h3>垂直入射劈尖形成的干涉</h3>
            <p>垂直入射\\(Rightarrow \\theta_2 = \\theta_1 = 0\\)</p>
            <b>亮线位置：</b>
            $$2nh + \\frac{\\lambda}{2} = m\\lambda(m=1,2,\\cdots)$$
            <b>暗线位置：</b>
            $$2nh + \\frac{\\lambda}{2} = (m + \\frac{1}{2})\\lambda(m=0,1,2,\\cdots)$$
            <p>棱线总位于暗条纹的位置.</p>
            <p>若劈尖上有\\(N\\)个条纹，则对应的总厚度为：</p>
            $$d = N\\frac{\\lambda}{2n}$$
            <p>其中，\\(N\\)可以为整数，也可以为小数.</p>
            <p>劈尖表面上的亮条纹是等距离的，条纹间距\\(\\Delta L\\)为：</p>
            $$\\Delta L = \\frac{\\Delta h}{\\sin\\alpha} = \\frac{\\lambda}{2n\\sin\\alpha}$$
        </div>

        <div class="Card-Analysis">
            <h2>牛顿环</h2>
            <img src="./Img/NewtonRing.png"><br>

            <b>形状特点</b>
            <p>在空气层上形成一组以接触点O为中心的中间疏、边缘密的圆环条纹.</p>
            <p>内圈干涉级数小、外圈干涉级数大.</p>

            <b>相干条件</b>
            $$2d + \\frac{\\lambda}{2} = \\begin{cases}k\\lambda, k=1,2,\\cdots 明条纹\\\\(2k + 1)\\frac{\\lambda}{2},k=0,1,2,\\cdots 暗条纹\\end{cases}$$
            $$r^2 = R^2 - (R-d)^2 = 2dR - d^2$$
            $$\\because R \\gg d$$
            $$\\therefore r^2 = 2dR \\Rightarrow d = \\frac{r^2}{2R}$$
            明条纹半径：
            $$2\\cdot\\frac{r^2}{2R} + \\frac{\\lambda}{2} = k\\lambda \\Rightarrow r = \\sqrt{\\frac{(2k-1)R\\lambda}{2}}, k=1,2,\\cdots$$
            暗条纹半径： 
            $$2\\cdot\\frac{r^2}{2R} + \\frac{\\lambda}{2} = (2k + 1)\\frac{\\lambda}{2} \\Rightarrow r = \\sqrt{kR\\lambda}, k=0,1,2,\\cdots$$
    
            <b>相邻明条纹厚度差</b>
            $$2d + \\frac{\\lambda}{2} = k\\lambda \\Rightarrow d_k = \\frac{1}{2}(k\\lambda - \\frac{\\lambda}{2})$$
            $$\\Delta d = d_{k+1} - d{k} = \\frac{\\lambda}{2}$$
        </div>

        <div class="Card-Analysis">
            <h2>光学薄膜</h2>
            <b>单层膜的反射率</b>
            $$R = \\left|\\frac{E_{0r}}{E_{0i}}\\right|^2 = \\frac{r_1^2 + r_2^2 + 2r_1r_2\\cos\\phi}{1 + r_1^2r_2^2 + 2r_1r_2\\cos\\phi}$$
            <p>其中\\(r_1\\)为薄膜上表面反射系数，\\(r_2\\)为薄膜下表面反射系数，\\(\\phi\\)为相邻两个出射光束间的相位差.</p>
            $$\\phi = \\frac{4\\pi}{\\lambda}n_1h\\cos\\theta_1$$

            <p>当光正入射到薄膜上时，薄膜两表面的反射系数分别为：</p>
            $$r_1 = \\frac{n_0 - n_1}{n_0 + n_1}$$
            $$r_2 = \\frac{n_1 + n_2}{n_1 - n_2}$$

            <p>对于给定的基片和介质膜，\\(n_0, n_2\\)为常数，因此可以得到\\(R\\)随\\(\\phi\\)即随\\(n_1h\\)变化的规律.</p>
            <p>\\(n_1 = n_0\\)或\\(n_1 = n_2\\)时，\\(R\\)与未镀膜时的反射率\\(R_0\\)一致.</p>
            <p>\\(n_1\\gt n_2\\)时：</p>
            $$r_1 = \\frac{n_0 - n_1}{n_0 + n_1} \\lt 0$$
            $$r_2 = \\frac{n_1 - n_2}{n_1 + n_2} \\gt 0$$
            <p>由分式的浓度不等式：</p>
            $$R = \\frac{r_1^2 + r_2^2 + 2r_1r_2\\cos\\phi}{1 + r_1^2r_2^2 + 2r_1r_2\\cos\\phi}$$
            <p>\\(\\cos\\phi = -1\\)时，R有最大值.</p>
            $$\\phi = \\frac{4\\pi}{\\lambda}n_1h\\cos\\theta_1 = (2m+1)\\pi$$
            $$n_1h = \\frac{(2m+1)}{4}\\lambda$$
            <p>\\(\\cos\\phi = 1\\)时，\\(R\\)有最小值：</p>
            $$\\phi = \\frac{4\\pi}{\\lambda}n_1h\\cos\\theta_1 = 2m\\pi$$
            $$n_1h = \\frac{m}{2}\\lambda$$

        </div>
 
        

        <div id="PageEnd"></div>
        <a class="GoToBottom" href="#PageEnd">Bottom</a>` },
  "note/optics/physicaloptics/chapter4": { title: "物理光学", content: `<h1>第四章 光在各向异性介质中的传播特性</h1>

        <div class="PageCatalog">
            <ul>
                <li><a href="#WavePlate">波片</a></li>
            </ul>
        </div>

        <p>光在各向同性介质中的传播特性是光在各向异性介质中传播特性的特殊情况.</p>
        <p><b><a href="../OpticalFabrication/OpticalMaterial.html#Crystal">晶体</a></b>是典型的光学各向异性介质.</p>

        <p>各向异性介质中：</p>
        $$\\mathbf{D} = \\epsilon_0\\boldsymbol{\\epsilon}_r\\mathbf{E}$$
        <p>介电张量\\(\\boldsymbol{\\epsilon} = \\epsilon_0\\boldsymbol{\\epsilon}_r\\)为二阶张量，\\(\\epsilon_0\\)为标量.</p>
        <p>由光的电磁理论，晶体的介电张量\\(\\mathbf{\\epsilon}\\)为一个对称矩阵.</p>

        <p>晶体的介电张量为对称张量，经主轴变换后的介电张量为对角张量.</p>
        $$\\epsilon_0\\left[\\begin{matrix}\\epsilon_{11}&0&0\\\\0&\\epsilon_{22}&0\\\\0&0&\\epsilon_{33}\\end{matrix}\\right]$$
        <p>\\(\\epsilon_{11},\\epsilon_{22},\\epsilon_{33}\\)常表示为\\(\\epsilon_1,\\epsilon_2,\\epsilon_3\\)，称为主相对介电常数.</p>
        <p>由Maxwell关系式：</p>
        $$n = \\sqrt{\\epsilon_r}$$
        <p>可相应定义主折射率：\\(n_1,n_2,n_3\\).</p>

        <b>晶体的分类</b>
        <p>自然界中存在的晶体按其空间对称性的不同，可分为七大晶系：</p>
        <table>
            <tr>
                <td>七大晶系</td>
                <td>主轴坐标系介电张量</td>
                <td>非主轴坐标系介电张量</td>
                <td>光学分类</td>
            </tr>
            <tr>
                <td>立方晶系</td>
                <td>$$\\left[\\begin{matrix}\\epsilon_{11}&0&0\\\\0&\\epsilon_{11}&0\\\\0&0&\\epsilon_{11}\\end{matrix}\\right]$$</td>
                <td>$$\\left[\\begin{matrix}\\epsilon_{11}&0&0\\\\0&\\epsilon_{11}&0\\\\0&0&\\epsilon_{11}\\end{matrix}\\right]$$</td>
                <td>各向同性</td>
            </tr>
            <tr>
                <td>三方晶系</td>
                <td rowspan="3">$$\\left[\\begin{matrix}\\epsilon_{11}&0&0\\\\0&\\epsilon_{11}&0\\\\0&0&\\epsilon_{33}\\end{matrix}\\right]$$</td>
                <td rowspan="3">$$\\left[\\begin{matrix}\\epsilon_{11}&0&0\\\\0&\\epsilon_{11}&0\\\\0&0&\\epsilon_{33}\\end{matrix}\\right]$$</td>
                <td rowspan="3">单轴晶体<br>（各向异性）</td>
            </tr>
            <tr><td>四方晶系</td></tr>
            <tr><td>六方晶系</td></tr>
            <tr>
                <td>正交晶系</td>
                <td rowspan="3">$$\\left[\\begin{matrix}\\epsilon_{11}&0&0\\\\0&\\epsilon_{22}&0\\\\0&0&\\epsilon_{33}\\end{matrix}\\right]$$</td>
                <td>$$\\left[\\begin{matrix}\\epsilon_{11}&\\epsilon_{12}&\\epsilon_{13}\\\\\\epsilon_{12}&\\epsilon_{22}&\\epsilon_{23}\\\\\\epsilon_{13}&\\epsilon_{23}&\\epsilon_{33}\\end{matrix}\\right]$$</td>
                <td rowspan="3">双轴晶体<br>（各向异性）</td>
            </tr>
            <tr>
                <td>单斜晶系</td>
                <td>$$\\left[\\begin{matrix}\\epsilon_{11}&0&\\epsilon_{31}\\\\0&\\epsilon_{22}&0\\\\\\epsilon_{31}&0&\\epsilon_{33}\\end{matrix}\\right]$$</td>
            </tr>
            <tr>
                <td>三斜晶系</td>
                <td>$$\\left[\\begin{matrix}\\epsilon_{11}&0&0\\\\0&\\epsilon_{22}&0\\\\0&0&\\epsilon_{33}\\end{matrix}\\right]$$</td>
            </tr>
        </table>

        <br>

        <div class="Card-Analysis">
            <h2>光在晶体中传播特性的解析法描述</h2>
            <p>光在晶体中的传播特性由Maxwell方程组描述.</p>

            <p>在均匀、不导电、非磁性的各向异性介质中，若无自由电荷存在，Maxwell方程组表示为：</p>
            $$\\begin{cases}
            \\nabla\\times\\mathbf{H} = \\frac{\\partial\\mathbf{D}}{\\partial t}\\\\
            \\nabla\\times\\mathbf{E} = -\\mu_0\\frac{\\partial\\mathbf{H}}{\\partial t}\\\\
            \\nabla\\cdot\\mathbf{B} = 0\\\\
            \\nabla\\cdot\\mathbf{D} = 0
            \\end{cases}$$

            <p>物质方程为：</p>
            $$\\begin{cases}
            \\mathbf{B} = \\mu_0\\mathbf{H}\\\\
            \\mathbf{D} = \\boldsymbol{\\epsilon}\\cdot\\mathbf{E}
            \\end{cases}$$

            <p>这里只讨论单色平面光波在晶体中的传播特性，这样可以不考虑介质的色散特性.</p>
            <p>同时，对于任意复杂的光波，因光场可以通过傅里叶变换分解为不同频率的单色平面光波叠加，因此也不失普遍性.</p>

            $$\\begin{cases}
            \\mathbf{D}\\perp\\mathbf{H}\\\\
            \\mathbf{D}\\perp\\mathbf{k}\\\\
            \\mathbf{H}\\perp\\mathbf{E}\\\\
            \\mathbf{H}\\perp\\mathbf{k}
            \\end{cases}\\Rightarrow
            \\mathbf{H}\\perp\\mathbf{D},\\mathbf{E},\\mathbf{k}
            $$
            <p>故\\(\\mathbf{E},\\mathbf{D},\\mathbf{k}\\)在垂直于\\(\\mathbf{H}\\)的同一平面内.</p>
            <p>且\\(\\mathbf{E}\\)与\\(\\mathbf{D}\\)通常不在同一方向上.</p>


            <p>各向异性介质中，光的能量传播方向通常与光波法线方向不同.</p>


            <p>一般情况下，光在晶体中的<a href="Chapter1.html#vp" class="goto">相速度</a>和光线速度的大小和方向均不相同.</p>

            <p>相速度：</p>
            $$\\mathbf{v}_p = v_p\\mathbf{k}$$

            <div class="Card-Definition">
                <b>光线速度\\(\\mathbf{v}_r\\)</b>
                <p>单色光波能量的传播速度</p>
                $$\\mathbf{v}_r = v_r\\mathbf{S}$$
            </div>

            <p>晶体中，有：</p>
            $$v_p = v_r\\cos\\alpha$$


            <p>一般情况下，对应于晶体中每一给定的波法线方向\\(\\mathbf{k}\\)，只允许有两个特定振动方向的线偏振光传播，它们的\\(\\mathbf{D}\\)矢量相互垂直（因而振动面相互垂直），具有不同的折射率和相速度.</p>

        </div>


        <div class="Card-Analysis">
            <h2>光波在具体晶体中的光学性质</h2>

            <h3>各向同性介质（立方晶体）</h3>

            <h3>单轴晶体</h3>
            <p>单轴晶体的主相对介电常数为：</p>
            $$\\begin{cases}
            \\epsilon_1=\\epsilon_2=n_o^2\\\\
            \\epsilon_3=n_e^2\\neq n_o^2
            \\end{cases}$$
            <p>\\(n_e\\gt n_o\\)的晶体，称为正单轴晶体.</p>
            <p>\\(n_e\\lt n_o\\)的晶体，称为负单轴晶体.</p>

            <h3>双轴晶体</h3>
        </div>

        <div class="Card-Analysis">
            <h2>光在晶体中传播特性的几何描述</h2>

            <h3>折射率椭球</h3>
            <p>主轴坐标系中，晶体的电场储能密度为：</p>
            $$\\omega_e = \\frac{1}{2}\\mathbf{E}\\cdot\\mathbf{D} = \\frac{1}{2\\epsilon_0}\\left(\\frac{D_1^2}{\\epsilon_1} + \\frac{D_2^2}{\\epsilon_2} + \\frac{D_3^2}{\\epsilon_3}\\right)$$
            $$\\therefore \\frac{D_1^2}{\\epsilon_1} + \\frac{D_2^2}{\\epsilon_2} + \\frac{D_3^2}{\\epsilon_3} = 2\\epsilon_0\\omega_e$$

            <p>令</p>
            $$x_1 = \\frac{D_1}{\\sqrt{2\\epsilon_0\\omega_e}},~x_2 = \\frac{D_2}{\\sqrt{2\\epsilon_0\\omega_e}},~x_3 = \\frac{D_3}{\\sqrt{2\\epsilon_0\\omega_e}}$$
            <p>则有</p>
            $$\\frac{x_1^2}{\\epsilon_1} + \\frac{x_2^2}{\\epsilon_2} + \\frac{x_3^2}{\\epsilon^3} = 1$$
            <p>或</p>
            $$\\frac{x_1^2}{n_1^2} + \\frac{x_2^2}{n_2^2} + \\frac{x_3^2}{n_3^2} = 1$$

            <b>单轴晶体折射率椭球方程为：</b>
            $$\\frac{x_1^2}{n_o^2} + \\frac{x_2^2}{n_o^2} + \\frac{x_3^2}{n_e^2} = 1$$
        </div>

        <div class="Card-Analysis" id="WavePlate">
            <h2>波片</h2>
            <div class="Card-Definition">
                <b>波片</b>
                <p>波片是一种对二垂直振动分量（光波场的两个独立振动方向）提供固定相位差的元件.</p>
            </div>
        </div>

        <div id="PageEnd"></div>
        <a href="#PageEnd" class="GoToBottom">Bottom</a>` },
  "note/optics/physicaloptics/diffraction": { title: "物理光学", content: `<h1>衍射</h1>

        <div class="Card-Definition">
            <b>光的衍射（光的绕射）</b>
            <p>光波在传播过程中遇到障碍物时偏离直线传播的现象.</p>
        </div>

        <div class="Card-Analysis">
            <b>光的衍射现象</b>
            <p>使一个足够亮的点光源S发出的光透过一个圆孔\\(\\Sigma\\)，照射到屏幕K上，逐渐改变圆孔的大小.</p>
            <img src="Img/Diffraction/Phenomenon.jpg" width="300">
            <p>圆孔足够大时，可以在屏幕上观察到一均匀光斑，光斑大小即为圆孔的几何投影.</p>
            <p>随着圆孔逐渐减小，起初光斑也相应变小，而后光斑开始模糊，并在圆斑外面产生若干围绕圆斑的同心圆环.</p>
            <p>使用单色光源时，是一组明暗相间的同心环带.</p>
            <p>使用白色光源时，是一组色彩相间的彩色环带.</p>
            <p>此后再使圆孔变小，光斑及圆环不仅不跟着变小，反而会增大.</p>
        </div>

        <div class="Card-Analysis">
            <h2>惠更斯原理</h2>
            <p>对于波源S，在某一时刻所产生波的波阵面为\\(\\Sigma\\)，则\\(\\Sigma\\)面上的每一点都可以看作是次波源，它们发出球面次波.</p>
            <p>其后某一时刻的波阵面\\(\\Sigma'\\)，即是该时刻这些球面次波的包迹面.</p>
            <img src="Img/Diffraction/HuyghensPrinciple.jpg" width="200">
        </div>

        <div class="Card-Analysis">
            <h2>惠更斯-菲涅尔原理</h2>
            <p>某一时刻\\(t'\\)的波阵面\\(\\Sigma'\\)上每一点的光振动，应为任意\\(t\\lt t'\\)时刻的波阵面\\(\\Sigma\\)上各点发出的次波场叠加的结果.</p>
        </div>

        <div class="Card-Definition">
            <b>亥姆霍兹互易定理（可逆定理）</b>
            <p>菲涅尔-基尔霍夫衍射公式对于光源与观测点是对称的，即S电源在P点产生的效果，与在P点放置相同强度的点源时在S点处产生的效果相同.</p>
        </div>


        <div class="Card-Definition">
            <b>互补屏</b>
            <p>所谓互补屏是这样的两个屏：其中一个屏的通光部分正好对应另一个屏的遮挡部分.</p>
        </div>

        <div class="Card-Definition">
            <b>Babinet原理</b>
            <p>两个互补屏在衍射场中某点单独产生的光场复振幅之和等于无衍射屏、光波自由传播时在该点产生的光场复振幅.</p>
            $$\\tilde{E}_0(P) = \\tilde{E}_1(P) + \\tilde{E}_2(P)$$
            <ul>
                <li>\\(\\tilde{E}_1(P) = 0\\Rightarrow \\tilde{E}_0(P) = \\tilde{E}_2(P) = 0\\)：放置一个屏时光场为0的点，在换上互补屏时，光场与没有屏时一样.</li>
                <li>\\(\\tilde{E}_0(P) = 0\\Rightarrow \\tilde{E}_1(P) = -\\tilde{E}_2(P)\\)：没有屏时光场为0的那些点，\\(\\tilde{E}_1(P)\\)与\\(\\tilde{E}_2(P)\\)的相位相差\\(\\pi\\)，而光强度\\(I_1(P) = |\\tilde{E}_1(P)|^2\\)与\\(I_2(P) = |\\tilde{E}_2(P)|^2\\)相等.</li>
            </ul>
        </div>

        <div class="Card-Analysis">
            <h2>基尔霍夫衍射公式的近似</h2>
            <p>离衍射孔不同距离处，衍射图样是不同的.</p>
            <p>对于一个单色平面光波垂直照射圆孔\\(\\Sigma\\)的情况：</p>
            <p>1、在距离\\(\\Sigma\\)很近的K<sub>1</sub>处观察透过的光，将看到边缘清晰的光斑，光斑的形状与大小和圆孔基本相同，可以看作是圆孔的投影，此时光的传播可以大致视为直线传播.</p>
            <p>2、在稍远距离K<sub>2</sub>上观察时，将看到一个边缘模糊的稍大光斑，光斑内有一圈圈的亮暗环，此时不能将其视为圆孔的投影.</p>
            <p>3、距离从K<sub>2</sub>增加到K<sub>3</sub>时，光斑范围不断扩大，但光斑中圆环数逐渐减少，且环纹中心表现出从亮到暗，又从暗到亮的变化.</p>
            <p>4、当观察平面位于距离很远的K<sub>4</sub>位置时，将看到一个较大的中间亮、边缘暗，且在边缘外有较弱的亮、暗圆环的光斑。此后，观察距离再增大，只是光斑扩大，但光斑形状不变<div class=""></div></p>

            <b>近似方法1</b>
            <p>将衍射区划分为：</p>
            <ul>
                <li>衍射效应可以忽略的几何投影区.</li>
                <li>衍射效应不能忽略的近场衍射区：衍射图样形状随距离变化，如K<sub>2</sub>、K<sub>3</sub>及其前后范围.</li>
                <li>衍射效应不能忽略的远场衍射区：衍射图样基本形状保持不变，如K<sub>4</sub>面所在区域.</li>
            </ul>

            <b>近似方法2</b>
            <ul>
                <li>衍射效应可以忽略的几何投影区.</li>
                <li>衍射效应不能忽略的菲涅尔投影区：包括几何投影区以后的所有区域.</li>
                <li>衍射图样基本形状保持不变的夫琅禾费区：夫琅禾费衍射为菲涅尔衍射的特殊情况.</li>
            </ul>

            <b>菲涅尔近似</b>
            $$\\frac{k}{8}\\frac{[(x-x_1)^2 + (y-y_1)^2]^2_{\\max}}{z_1^3}\\ll \\pi$$

            <b>夫琅禾费近似</b>
            $$k\\frac{(x_1^2 + y_1^2)_{\\max}}{2z_1}\\ll \\pi$$
        </div>

        <div class="Card-Analysis">
            <h2>夫琅禾费衍射</h2>
            <p>观察屏必须放置在远离衍射屏的地方.</p>

            <h3>夫琅禾费矩形孔衍射</h3>
            $$\\tilde{E}(x,y) = \\tilde{E}_0\\frac{\\sin\\alpha}{\\alpha}\\frac{\\sin\\beta}{\\beta}$$
            <ul>
                <li>\\(\\tilde{E}_0 = \\tilde{E}(0,0) = Cab\\)：观察屏中心点\\(P_0\\)处的光场复振幅.</li>
                <li>\\(a,b\\)：分别为矩形孔沿\\(x_1,y_1\\)轴方向的宽度.</li>
                <li>\\(\\alpha = \\frac{kax}{2f}\\)</li>
                <li>\\(\\beta = \\frac{kby}{2f}\\)</li>
            </ul>
            $$I(x,y) = I_0\\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2\\left(\\frac{\\sin\\beta}{\\beta}\\right)^2$$
            <ul>
                <li>\\(I_0 = |Cab|^2\\)：\\(P_0\\)点的光强度.</li>
            </ul>

            <b>衍射光强沿\\(x\\)轴分布</b>
            $$\\because y = 0$$
            $$\\therefore I = I_0\\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2$$

            <h3>夫琅禾费圆孔衍射</h3>
            <b>实用性</b> 
            <p>光学仪器的光曈通常都是圆形的，因此讨论圆孔衍射现象对于光学仪器的应有，具有重要的实际意义.</p>

            <b>分析</b>
            <p>在极坐标下分析夫琅禾费圆孔衍射.</p>
            <p>设圆孔半径为\\(a\\)，圆孔中心\\(O_1\\)位于光轴上.</p>
            <p>则圆孔上任意一点\\(Q\\)的位置坐标\\((\\rho_1,\\phi_1)\\)与相应的直角坐标\\((x_1,y_1)\\)的关系为：</p>
            $$x_1 = \\rho_1\\cos\\phi_1$$
            $$y_1 = \\rho_1\\sin+\\phi_1$$

            <div class="Card-Definition">
                <b>艾里斑</b>
                <p>圆孔夫琅禾费衍射的中心亮斑.</p>
                <p>艾里斑集中了入射在圆孔上能量的83.78%.</p>

                <b>半径</b>
                <p>艾里斑的半径\\(\\rho_0\\)由第一光强极小值处的\\(\\Phi\\)值决定：</p>
                $$\\Phi_{10} = \\frac{ka\\rho_0}{f} = 1.22\\pi$$
                $$\\therefore \\rho_0 = 0.61f\\frac{\\lambda}{a}$$

                <b>角半径</b>
                $$\\theta_0 = \\frac{\\rho_0}{f} = 0.61\\frac{\\lambda}{a}$$

                <b>面积</b>
                <div class="Formula">
                    $$S_0 = \\frac{(0.61\\pi f\\lambda)^2}{S}$$
                    <div class="Derivation">
                        $$\\begin{align}
                        S_0 &= \\pi\\rho_0^2\\\\
                            &= \\pi\\cdot\\left(0.61f\\frac{\\lambda}{a}\\right)^2
                        \\end{align}$$
                        $$\\because S = \\pi a^2$$
                        $$\\begin{align}\\therefore
                        S_0 &= \\frac{(0.61\\pi f\\lambda)^2}{\\pi a^2}\\\\
                            &= \\frac{(0.61\\pi f\\lambda)^2}{S}
                        \\end{align}$$
                    </div>
                </div>
                <ul>
                    <li>\\(S\\)：圆孔面积.</li>
                </ul>
                <p>圆孔面积越小，艾里斑面积越大，衍射现象越明显.</p>
            </div>
        </div>

        <div class="Card-Definition">
            <b>光学成像系统的分辨本领</b>
            <p>能够分辨开两个靠近的点物或物体细节的能力.</p>
        </div>

        <div class="Card-Analysis">
            <h2>瑞利判据</h2>
            <div class="Card-Definition" id="RayleighCriterion">
                <b>瑞利判据</b>
                <p>将一个点物衍射图样的中央极大位置，与另一个点物衍射图样的第一个极小位置恰好重合的状态，作为光学成像系统的分辨极限.</p>
                <p>认为此时光学系统恰好能分辨开这两个点物.</p>
            </div>

            <img src="Img/Diffraction/RayleighCriterion.jpg" alt="RayleighCriterion" width="400">
            <p>设有\\(S_1\\)和\\(S_2\\)两个非相干点光源，间距为\\(\\epsilon\\)，它们到直径为\\(D\\)的圆孔距离为\\(R\\)，则\\(S_1, S_2\\)对圆孔的张角\\(\\alpha\\)为：</p>
            $$\\alpha = \\frac{\\epsilon}{R}$$
            <p>由于圆孔的衍射效应，\\(S_1,S_2\\)将分别在观察屏上形成各自的衍射图样，设其艾里斑关于圆孔张角为\\(\\theta_0\\)，则：</p>
            $$\\theta_0 = 1.22\\frac{\\lambda}{D}$$
            <ul>
                <li>\\(\\alpha \\gt \\theta_0\\)时：两个艾里斑能完全分开，即\\(S_1\\)与\\(S_2\\)可以分辨.</li>
                <li>\\(\\alpha \\lt \\theta_0\\)时：两个艾里斑分不开，即\\(S_1\\)与\\(S_2\\)不可分辨.</li>
                <li>\\(\\alpha \\approx \\theta_0\\)时：不同系统对艾里斑重叠之分辨有不同的感觉.</li>
            </ul>

        </div>

        <div class="Card-Analysis">
            <h2>单缝夫琅禾费衍射</h2>
            <img src="Img/Diffraction/SingleSlitFD.jpg" alt="单缝夫琅禾费衍射" width="400">
            <p>P点光强为：</p>
            $$I = I_0\\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2$$
            <p>称\\(\\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2\\)为单缝衍射因子.</p>
            <p>因此，矩孔夫琅禾费颜色和的相对强度分布是两个单缝衍射因子的乘积.</p>

            <b>单色光照明时的衍射光强分布</b>
            $$\\alpha = \\frac{kax}{2f} = \\frac{\\pi a}{\\lambda}\\frac{x}{f} \\approx \\frac{\\pi a\\sin\\theta}{\\lambda}$$
            <p>\\(\\alpha = 0\\)时：对应于\\(\\theta = 0\\)的衍射位置，为光强中央主极大值（亮条纹）.</p>
            <p>\\(\\alpha = m\\pi\\)时：对应于满足：</p>
            $$\\sin\\theta = m\\frac{\\lambda}{a},~m=\\pm1,\\pm2,\\cdots$$
            <p>的衍射角方向为光强极小值（暗条纹方向）.</p>
            <p>相邻暗条纹角宽度为：</p>
            <div class="Formula">
                $$\\Delta \\theta = \\frac{\\lambda}{a\\cos\\theta}$$
                <div class="Derivation">
                    $$\\because \\sin\\theta = m\\frac{\\lambda}{a}$$
                    $$\\therefore \\cos\\theta\\mathrm{d}\\theta = \\frac{\\lambda}{a}\\mathrm{d}m$$
                    $$\\therefore \\cos\\theta\\Delta\\theta = \\frac{\\lambda}{a}\\Delta m$$
                    $$\\because \\Delta m = 1$$
                    $$\\therefore \\Delta\\theta = \\frac{\\lambda}{a\\cos\\theta}$$
                </div>
            </div>
            <p>衍射角很小时，相邻暗条纹的角宽度为：</p>
            $$\\Delta\\theta \\approx \\frac{\\lambda}{a}$$
            <p>对于中央亮条纹，其角宽度\\(\\Delta\\theta_0\\)为：</p>
            $$\\Delta\\theta_0 = 2\\Delta\\theta = \\frac{2\\lambda}{a}$$

        </div>

        <div class="Card-Analysis">
            <h2>多缝夫琅禾费衍射</h2>
            <b>多缝</b>
            <p>在一块不透光的屏上，刻有\\(N\\)条等间距、等宽度的通光狭缝.</p>
            <p>其每条狭缝均平行于\\(y_1\\)方向，沿\\(x_1\\)方向缝宽为\\(a\\)，相邻狭缝间距为\\(d\\).</p>
            $$\\begin{align}
            \\phi &= k\\cdot\\Delta\\\\
                 &= \\frac{2\\pi}{\\lambda}d\\sin\\theta
            \\end{align}$$
            <p>P点的光强度为：</p>
            $$I(P) = I_0\\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2\\left(\\frac{\\sin\\frac{N\\phi}{2}}{\\sin\\frac{\\phi}{2}}\\right)^2$$
            <ul>
                <li>\\(I_0\\)：单缝衍射下P<sub>0</sub>点的光强.</li>
            </ul>

        </div>

        <div class="Card-Analysis">
            <h2>夫琅禾费衍射与菲涅尔衍射的应用</h2>
            <ul>
                <li>光栅</li>
                <li>波带片</li>
            </ul>
        </div>

        
        <ul>
            <li><b>菲涅尔衍射</b>：光源和接收屏（或其中之一）与衍射屏距离为有限远时的衍射。</li>
            <li><b>夫琅禾费衍射</b>：</li>
        </ul>` },
  "note/optics/physicaloptics/fresnel": { title: "物理光学", content: `<h1>菲涅尔公式</h1>
        表示反射波、折射波与入射波的振幅和相位关系。
        <br><br>
        <table>
            <tr>
                <td colspan="2"></td>
                <td>一般式</td>
                <td>两种介质都是电介质时，考虑一般的非磁性物质，即\\(\\mu_1 = \\mu_2\\)</td>
                <td>斜入射时，考虑折射定律\\(n_1\\sin\\theta_1 = n_2\\sin\\theta_2\\)</td>
            </tr>
            <tr>
                <td rowspan="2"><span lang="en">s</span>波</td>
                <td>振幅反射系数\\(r_s\\)</td>
                <td>$$r_s = \\frac{E_{0rs}}{E_{0is}} = \\frac{\\frac{n_1}{\\mu_1}\\cos\\theta_1 - \\frac{n_2}{\\mu_2}\\cos\\theta_2}{\\frac{n_1}{\\mu_1}\\cos\\theta_1 + \\frac{n_2}{\\mu_2}\\cos\\theta_2}$$</td>
                <td>$$r_s = \\frac{n_1\\cos\\theta_1 - n_2\\cos\\theta_2}{n_1\\cos\\theta_1 + n_2\\cos\\theta_2}$$</td>
                <td>
                    <div class="Formula">
                        $$r_s = \\frac{\\tan\\theta_2 - \\tan\\theta_1}{\\tan\\theta_2 + \\tan\\theta_1} = \\frac{\\sin(\\theta_2 - \\theta_1)}{\\sin(\\theta_2 + \\theta_1)}$$
                        <div class="Derivation">
                            $$n_1\\sin\\theta_1 = n_2\\sin\\theta_2\\Rightarrow n = \\frac{n_2}{n_1} = \\frac{\\sin\\theta_1}{\\sin\\theta_2}$$
                            $$\\begin{align}
                            r_s &= \\frac{n_1\\cos\\theta_1 - n_2\\cos\\theta_2}{n_1\\cos\\theta_1 + n_2\\cos\\theta_2}\\\\
                                &= \\frac{\\cos\\theta_1 - \\frac{\\sin\\theta_1}{\\sin\\theta_2}\\cos\\theta_2}{\\cos\\theta_1 + \\cos\\theta_2}\\\\
                                &= \\frac{\\sin\\theta_2\\cos\\theta_1 - \\sin\\theta_1\\cos\\theta_2}{\\sin\\theta_2\\cos\\theta_1 + \\sin\\theta_1\\cos\\theta_2}\\\\
                                &= \\frac{\\tan\\theta_2 - \\tan\\theta_1}{\\tan\\theta_2 + \\tan\\theta_1}\\\\
                                &= \\frac{\\sin(\\theta_2 - \\theta_1)}{\\sin(\\theta_2 + \\theta_1)}
                            \\end{align}$$
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>振幅透射系数\\(t_s\\)</td>   
                <td>$$t_s = \\frac{E_{0ts}}{E_{0is}} = \\frac{2\\frac{n_1}{\\mu_1}\\cos\\theta_1}{\\frac{n_1}{\\mu_1}\\cos\\theta_1 + \\frac{n_2}{\\mu_2}\\cos\\theta_2}$$</td>
                <td>$$t_s = \\frac{2n_1\\cos\\theta_1}{n_1\\cos\\theta_1 + n_2\\cos\\theta_2}$$</td>
                <td>$$t_s = \\frac{2\\cos\\theta_1\\sin\\theta_2}{\\sin(\\theta_1 + \\theta_2)}$$</td>
            </tr>
            <tr>
                <td rowspan="2"><span lang="en">p</span>波</td>
                <td>振幅反射系数\\(r_p\\)</td>
                <td>$$r_p = \\frac{E_{0rp}}{E_{0ip}} = \\frac{\\frac{n_2}{\\mu_2}\\cos\\theta_1 - \\frac{n_1}{\\mu_1}\\cos\\theta_2}{\\frac{n_2}{\\mu_2}\\cos\\theta_1 + \\frac{n_1}{\\mu_1}\\cos\\theta_2}$$</td>
                <td>$$r_p = \\frac{n_2\\cos\\theta_1 - n_1\\cos\\theta_2}{n_2\\cos\\theta_1 + n_1\\cos\\theta_2}$$</td>
                <td>
                    <div class="Formula">
                        $$r_p = \\frac{\\sin 2\\theta_1 - \\sin 2\\theta_2}{\\sin 2\\theta_1 + \\sin 2\\theta_2} = \\frac{\\tan(\\theta_1-\\theta_2)}{\\tan(\\theta_1 + \\theta_2)}$$
                        <div class="Derivation">
                            $$n_1\\sin\\theta_1 = n_2\\sin\\theta_2\\Rightarrow n = \\frac{n_2}{n_1} = \\frac{\\sin\\theta_1}{\\sin\\theta_2}$$
                            $$\\begin{align}
                            r_p &= \\frac{n_2\\cos\\theta_1 - n_1\\cos\\theta_2}{n_2\\cos\\theta_1 + n_1\\cos\\theta_2}\\\\
                                &= \\frac{\\frac{\\sin\\theta_1}{\\sin\\theta_2}\\cos\\theta_1 - \\cos\\theta_2}{\\frac{\\sin\\theta_1}{\\sin\\theta_2}\\cos\\theta_1 + \\cos\\theta_2}\\\\
                                &= \\frac{\\sin\\theta_1 \\cos\\theta_1 - \\sin\\theta_2 \\cos\\theta_2}{\\sin\\theta_1\\cos\\theta_1 + \\sin\\theta_2\\cos\\theta_2}\\\\
                                &= \\frac{\\sin2\\theta_1 - \\sin2\\theta_2}{\\sin2\\theta_1 + \\sin2\\theta_2}
                            \\end{align}$$
                            <p>由和差化积公式</p>
                            $$\\begin{align}
                            r_p &= \\frac{\\sin2\\theta_1 - \\sin2\\theta_2}{\\sin2\\theta_1 + \\sin2\\theta_2}\\\\
                                &= \\frac{2\\cos\\frac{2\\theta_1 + 2\\theta_2}{2}\\sin\\frac{2\\theta_1 - 2\\theta_2}{2}}{2\\sin\\frac{2\\theta_1 + \\theta_2}{2}\\cos\\frac{2\\theta_1 - 2\\theta_2}{2}}\\\\
                                &= \\frac{\\cos(\\theta_1 + \\theta_2)\\sin(\\theta_1 - \\theta_2)}{\\sin(\\theta_1+\\theta_2) \\cos(\\theta_1-\\theta_2)}\\\\
                                &= \\frac{\\tan(\\theta_1 - \\theta_2)}{\\tan(\\theta_1 + \\theta_2)}
                            \\end{align}$$
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>振幅透射系数\\(t_p\\)</td>
                <td>$$t_p = \\frac{E_{0tp}}{E_{0ip}} = \\frac{2\\frac{n_1}{\\mu_1}\\cos\\theta_1}{\\frac{n_2}{\\mu_2}\\cos\\theta_2+\\frac{n_1}{\\mu_1}\\cos\\theta_2}$$</td>
                <td>$$t_p = \\frac{2n_1\\cos\\theta_1}{n_2\\cos\\theta_1 + n_1\\cos\\theta_2}$$</td>
                <td>$$t_p = \\frac{2\\cos\\theta_1\\sin\\theta_2}{\\sin(\\theta_1 + \\theta_2)\\cos(\\theta_1 - \\theta_2)}$$</td>
            </tr>
        </table><br>

        <h2>由菲涅尔公式得出的结论</h2>
        <h3>光从光疏介质入射到光密介质</h3>
        $$ n_1 \\lt n_2 \\Rightarrow n = n_2/n_1 \\gt 1 $$
        
        <table>
            <tr>
                <td colspan="2">垂直入射</td>
                <td>略入射</td>
            </tr>
            <tr>
                <td>$$r_s = \\frac{n_1\\cos\\theta_1 - n_2\\cos\\theta_2}{n_1\\cos\\theta_1 + n_2\\cos\\theta_2} = \\frac{1 - n}{1 + n}$$</td>
                <td>$$-1 \\lt r_s \\lt 0$$</td>
                <td>$$r_s = \\frac{n_1\\cos\\theta_1 - n_2\\cos\\theta_2}{n_1\\cos\\theta_1 + n_2\\cos\\theta_2} = -\\frac{n_2\\cos\\theta_2}{n_2\\cos\\theta_2} = -1$$</td>
            </tr>
            <tr>
                <td>$$t_s = \\frac{2n_1\\cos\\theta_1}{n_1\\cos\\theta_1 + n_2\\cos\\theta_2} = \\frac{2}{1+n}$$</td>
                <td>$$0 \\lt t_s \\lt 1$$</td>
                <td>$$t_s = \\frac{2n_1\\cos\\theta_1}{n_1\\cos\\theta_1 + n_2\\cos\\theta_2} = 0$$</td>
            </tr>
            <tr>
                <td>$$r_p = \\frac{n_2\\cos\\theta_1 - n_1\\cos\\theta_2}{n_2\\cos\\theta_1 + n_1\\cos\\theta_2} = \\frac{n-1}{n+1}$$</td>
                <td>$$0 \\lt r_p \\lt 1$$</td>
                <td>$$r_p = \\frac{n_2\\cos\\theta_1 - n_1\\cos\\theta_2}{n_2\\cos\\theta_1 + n_1\\cos\\theta_2} = -\\frac{n_1\\cos\\theta_2}{n_1\\cos\\theta_2} = -1$$</td>
            </tr>
            <tr>
                <td>$$t_p = \\frac{2n_1\\cos\\theta_1}{n_2\\cos\\theta_1 + n_1\\cos\\theta_2} = \\frac{2}{n+1}$$</td>
                <td>$$0 \\lt t_p \\lt 1$$</td>
                <td>$$t_p = \\frac{2n_1\\cos\\theta_1}{n_2\\cos\\theta_1 + n_1\\cos\\theta_2} = 0$$</td>
            </tr>
        </table>


        <h3>光从光密介质入射到光疏介质</h3>
        $$ n_1 \\gt n_2 \\Rightarrow n = n_2/n_1 \\lt 1 $$
        <table>
            <tr>
                <td colspan="2">垂直入射</td>
            </tr>
            <tr>
                <td>$$r_s = \\frac{n_1\\cos\\theta_1 - n_2\\cos\\theta_2}{n_1\\cos\\theta_1 + n_2\\cos\\theta_2} = \\frac{1 - n}{1 + n}$$</td>
                <td>$$0 \\lt r_s \\lt 1$$</td>
            </tr>
            <tr>
                <td>$$t_s = \\frac{2n_1\\cos\\theta_1}{n_1\\cos\\theta_1 + n_2\\cos\\theta_2} = \\frac{2}{1+n}$$</td>
                <td>$$1 \\lt t_s \\lt 2$$</td>
            </tr>
            <tr>
                <td>$$r_p = \\frac{n_2\\cos\\theta_1 - n_1\\cos\\theta_2}{n_2\\cos\\theta_1 + n_1\\cos\\theta_2} = \\frac{n-1}{n+1}$$</td>
                <td>$$-1 \\lt r_p \\lt 0$$</td>
            </tr>
            <tr>
                <td>$$t_p = \\frac{2n_1\\cos\\theta_1}{n_2\\cos\\theta_1 + n_1\\cos\\theta_2} = \\frac{2}{n+1}$$</td>
                <td>$$1 \\lt t_p \\lt 2$$</td>
            </tr>
        </table>




        <h2>关于菲涅尔公式单调性的讨论</h2>
        <p>\\(n \\gt 1\\)：\\(r_s, r_p, t_s, t_p\\)单调递减.</p>
        <p>\\(n \\lt 1\\)：\\(r_s, r_p, t_s, t_p\\)单调递增.</p>
        由折射定律：
        $$
        n_1\\sin\\theta_1 = n_2\\sin\\theta_2(0\\leq \\theta_1 \\leq \\frac{\\pi}{2})\\\\
        \\sin\\theta_2 = \\frac1n\\sin\\theta_1\\\\
        \\cos\\theta_2 = \\sqrt{1 - \\frac{1}{n^2}\\sin^2\\theta_1}
        $$


        <details>
            <summary>对于\\(r_s\\)：</summary>
            $$
            \\begin{align}
                r_s &= \\frac{n_1\\cos\\theta_1 - n_2\\cos\\theta_2}{n_1\\cos\\theta_1 + n_2\\cos\\theta_2}\\\\
                    &= 1 - \\frac{2n_2\\cos\\theta_2}{n_1\\cos\\theta_1 + n_2\\cos\\theta_2}\\\\
                    &= 1 - \\frac{2}{\\frac{1}{n}\\frac{\\cos\\theta_1}{\\cos\\theta_2} + 1}
            \\end{align}
            $$
            $$
            \\begin{align}
                \\frac{\\cos\\theta_1}{\\cos\\theta_2} &= \\sqrt{\\frac{\\cos^2\\theta_1}{1 - \\frac{1}{n^2}\\sin^2\\theta_1}}\\\\
                                                  &= \\sqrt{\\frac{n^2\\cos^2\\theta_1}{(n^2 - 1) + \\cos^2\\theta_1}}\\\\
                                                  &= \\sqrt{\\frac{n^2}{(n^2-1)\\frac{1}{\\cos^2\\theta_1}+1}}
            \\end{align}
            $$
    
            <li><span class="tip">\\(n\\gt 1\\)<span class="tiptext">光疏入光密</span></span>时：\\(r_s\\downarrow\\)</li>
            <li><span class="tip">\\(n\\lt 1\\)<span class="tiptext">光密入光疏</span></span>时：\\(r_s\\uparrow\\)</li>
        </details>` },
  "note/optics/physicaloptics/grating": { title: "物理光学", content: `<h1>光栅</h1>

        <div class="Card-Analysis">
            <h2>光栅</h2>
            <div class="Card-Definition">
                <b>光栅（衍射光栅）</b>
                <p>由大量等宽、等间隔的平行狭缝构成的光学元件.</p>
                
                <b>原理</b>
                <p>多缝夫琅禾费衍射.</p>
            </div>

            <p>根据工作方式分：</p>
            <ul>
                <li><b>透射光栅</b>：用于透射光衍射的光栅。</li>
                <li><b>反射光栅</b>：用于反射光衍射的光栅。</li>
            </ul>

            <p>根据对入射光的调制作用分</p>
            <ul>
                <li>振幅光栅</li>
                <li>相位光栅</li>
            </ul>
    
            <p><b>缝</b>是光栅的透光部分，宽度为\\(a\\)；<b>刻痕</b>是光栅的不透光部分，宽度为\\(b\\)。</p>
            <p>\\(a+b\\)称为<b>光栅常数</b>。</p>
    
    
            <b>光栅公式</b>
            $$(a+b)\\sin\\phi = k\\lambda, ~~ k = 0,\\pm1,\\pm2,\\cdots$$
            <p>此为光栅衍射明条纹位置满足的公式。</p>
        </div>` },
  "note/optics/physicaloptics/interference_interferometer": { title: "物理光学", content: `<h1>干涉仪</h1>
        <div class="Card-Definition">
            <b>干涉仪</b>
            <p>利用光波的干涉效应制成的精密仪器.</p>
        </div>

        <div class="Card-Analysis">
            <h2>迈克尔逊干涉仪</h2>
            <img src="Img/MichelsonInterferometer.jpg" width="200">
            <p>G<sub>1</sub>和G<sub>2</sub>为两块相互平行的、折射率与厚度都相同的平行平面玻璃板，分别称为分光板和补偿板.</p>
            <p>G<sub>1</sub>背面有镀银或镀铝的半反射面A.</p>
            <p>M<sub>1</sub>与M<sub>2</sub>为两块平面反射镜，它们与G<sub>1</sub>和G<sub>2</sub>成45°角放置.</p>
            <p>从拓展光源S发出的光，在G<sub>1</sub>的半反射面A上进行反射和折射，分为两束强度相等的光Ⅰ和Ⅱ.</p>
            <p>光束Ⅰ射向M<sub>1</sub>，经M<sub>1</sub>反射后折回，并透过A进入观察系统L.</p>
            <p>光束Ⅱ通过G<sub>2</sub>并经过M<sub>2</sub>反射后折回到A，再经过A的反射后也进入观察系统L.</p>

            <p>迈克尔逊干涉仪既可以产生平行平板干涉（M<sub>1</sub>与M'<sub>2</sub>）平行，又可以产生楔形平板干涉（M<sub>1</sub>与M'<sub>2</sub>有微小夹角）.</p>
        </div>

        <div id="PageEnd"></div>
        <a class="GoToBottom" href="#PageEnd">Bottom</a>` },
  "note/optics/physicaloptics/interference_parallelplatemutibeam": { title: "物理光学", content: `<h1>平行平板的多光束干涉</h1>

        <h3>平行平板多光束干涉的强度分布</h3>
        <b>光程差</b>
        <p>相邻两反射光或透射光间的光程差为：</p>
        $$\\Delta = 2nh\\cos\\theta$$
        <p>其中\\(\\theta\\)为光线从空气到平板的折射角.</p>

        <b>相位差</b>
        $$\\phi = kr = \\frac{2\\pi}{\\lambda}\\Delta = \\frac{4\\pi}{\\lambda}nh\\cos\\theta$$


        <b>爱里公式</b>
        $$F = \\frac{4R}{(1-R)^2} \\propto R$$
        $$I_r = \\frac{F\\sin^2\\frac{\\phi}{2}}{1 + F\\sin^2\\frac{\\phi}{2}}I_i$$
        $$I_t = \\frac{1}{1 + F\\sin^2\\frac{\\phi}{2}}I_i$$

        <h3>平行平板多光束干涉图样的特点</h3>
        <b>互补性</b>
        <p>不考虑吸收和其他损耗的情况下，由于能量守恒定律：</p>
        $$I_r + I_t = I_i$$
        <b>等倾性</b>
        <p>平行平板在透镜焦平面上产生的多光束干涉条纹是等倾干涉条纹.</p>
        <b>光强分布</b>
        <table>
            <tr>
                <td rowspan="2"></td>
                <td colspan="2">反射光</td>
                <td colspan="2">折射光</td>
            </tr>
            <tr>
                <td>$$\\phi$$</td>
                <td>$$I$$</td>
                <td>$$\\phi$$</td>
                <td>$$I$$</td>
            </tr>
            <tr>
                <td>亮条纹</td>
                <td>
                    <div class="Formula">
                        $$\\phi = (2m+1)\\pi,~m = 0,1,2,\\cdots$$
                        <div class="Derivation">
                            $$I_r = \\frac{F\\sin^2\\frac{\\phi}{2}}{1 + F\\sin^2\\frac{\\phi}{2}}I_i$$
                            <p>由<a href="../../Math/Mathematic/Inequation.html#Concentration" class="goto">分数的浓度不等式</a>：</p>
                            <p>当\\(F\\sin^2\\frac{\\phi}{2}\\)最大时，\\(I_r\\)最大.</p>
                            $$\\sin^2\\frac{\\phi}{2} = 1\\Rightarrow \\frac{\\phi}{2} = (m+\\frac{1}{2})\\pi \\Rightarrow \\phi = (2m+1)\\pi(m=0,1,2,\\cdots)$$
                        </div>
                    </div>
                </td>
                <td>
                    <div class="Formula">
                        $$I_r = \\frac{F}{1+F}I_i$$
                        <div class="Derivation">
                            $$I_r = \\frac{F\\sin^2\\frac{\\phi}{2}}{1+F\\sin^2\\frac{\\phi}{2}}I_i$$
                            $$\\phi = 2m\\pi(m=0,\\pm1,\\pm2,\\cdots)$$
                            $$I_r = \\frac{F}{1+F}I_i$$
                        </div>
                    </div>
                </td>
                <td>$$\\phi = 2m\\pi,~m=0,1,2,\\cdots$$</td>
                <td>$$I_t = I_i$$</td>
            </tr>
            <tr>
                <td>暗条纹</td>
                <td>$$\\phi = 2m\\pi,~m=0,1,2,\\cdots$$</td>
                <td>$$I_r = 0$$</td>
                <td>$$\\phi = (2m+1)\\pi,~m=0,1,2,\\cdots$$</td>
                <td>$$I_t = \\frac{1}{1+F}I_i$$</td>
            </tr>
        </table>


        <h3>透射光的特点</h3>
        <ul>
            <li><b>光强分布与反射率\\(R\\)有关</b></li>
            <li><b>条纹锐度与反射率\\(R\\)有关</b></li>
        </ul>

        <h3>锐度</h3>
        <p>用条纹的半峰值全宽度\\(\\epsilon = \\Delta\\phi\\)表征干涉条纹的锐度.</p>
        <img src="Img/StripeHalfWidth.jpg" width="300">
        <p>\\(\\phi = 2m\\pi\\pm\\frac{\\Delta\\phi}{2}\\)时：</p>
        $$I = \\frac{1}{1 + F\\sin^2(m\\pi \\pm \\frac{\\Delta\\phi}{4})}I_i = \\frac{1}{2}I_i$$
        $$F\\sin^2\\frac{\\phi}{4} = F\\sin^2\\frac{\\epsilon}{4} = 1$$
        <p>当\\(F\\)很大（即\\(R\\)很大）时，\\(\\epsilon\\)一定很小，有\\(\\sin\\frac{\\epsilon}{4} \\approx \\frac{\\epsilon}{4}\\).</p>
        $$F\\frac{\\epsilon^2}{16} = 1$$
        $$\\epsilon = \\frac{4}{\\sqrt{F}} = \\frac{2(1-R)}{\\sqrt{R}}$$
        <p>\\(R\\)越大，\\(\\epsilon\\)越小，条纹越尖锐.</p>

        <h3>条纹精细度</h3>
        <p>用相邻两条纹间的相位差\\(2\\pi\\)与条纹半宽度\\(\\epsilon\\)之比\\(N\\)表征条纹的锐度.</p>
        $$N = \\frac{2\\pi}{\\epsilon} = \\frac{\\pi\\sqrt{F}}{2} = \\frac{\\pi\\sqrt{R}}{1-R}$$
        <p>\\(R\\)越大，\\(N\\)越大，条纹越尖锐.</p>

        <h2>频率特性</h2>
        $$\\phi = \\frac{4\\pi}{\\lambda}nh\\cos\\theta$$
        <b>平行平板的滤波特性</b>
        <p>在平行平板的结构\\((n,h)\\)确定，入射光方向一定的情况下，相位差\\(\\phi\\)仅与波长\\(\\lambda\\)有关，只有使\\(\\phi = 2m\\pi\\)的光波长才能最大地透过该平行平板.</p>

        $$\\phi = \\frac{4\\pi}{c}nh\\nu\\cos\\theta$$
        <b>滤波带宽</b>
        <p>相应于条纹半宽度\\(\\Delta\\phi\\)的频率范围\\(\\Delta \\nu_{1/2}\\)称为滤波带宽：</p>
        $$\\Delta\\nu_{1/2} = \\frac{\\Delta\\phi}{\\frac{4\\pi}{c}nh\\cos\\theta} = \\frac{c(1-R)}{2\\pi nh\\sqrt{R}\\cos\\theta}$$
        $$\\nu_m = c/\\lambda_m$$
        $$\\mathrm{d}\\nu_m = -\\frac{c}{\\lambda^2_m}\\mathrm{d}\\lambda_m$$
        $$|\\Delta \\nu_m| = \\frac{c}{\\lambda^2_m}\\Delta\\lambda_m$$
        $$m\\lambda_m = 2nh\\cos\\theta$$
        $$\\lambda_m = \\frac{2nh\\cos\\theta}{m}$$

        <b>透射带的波长宽度</b>
        $$(\\Delta\\lambda_m)_{1/2} = \\frac{2(1-R)nh\\cos\\theta}{m^2\\pi\\sqrt{R}} = \\frac{\\Delta}{m^2N} = \\frac{\\lambda_m}{mN}$$
        <p>\\(R\\)越大，\\(N\\)越大，\\((\\Delta \\lambda_{1/2})\\)越小.</p>
        

        <div id="PageEnd"></div>
        <a class="GoToBottom" href="#PageEnd">Bottom</a>` },
  "note/optics/physicaloptics/lightsuperposition": { title: "物理光学", content: `<h1>光波的叠加</h1>
        

        <div class="Card-Analysis">
            <h2>驻波</h2>
            <p>两个频率相同，振动方向相同而传播方向相反的单色光波叠加形成驻波.</p>
            <p>e.g.垂直入射到两种介质分界面的单色光波和反射波的叠加.</p>

            <p>设界面反射比很高，即入射波与出射波振幅相等.</p>
            <p>入射波：</p>
            $$E_1 = E_0\\cos(\\omega t - kr + \\phi_{1})$$
            <p>出射波：</p>
            $$E_2 = E_0\\cos(\\omega t + kr + \\phi_{2})$$
            <p>由<a href="../../Math/Mathematic/Function_Tri.html#SumToProduct" class="goto">和差化积公式</a>，有：</p>
            $$\\begin{align}
            E &= E_1 + E_2\\\\
              &= 2E_0\\cos\\left(\\omega t + \\frac{\\phi_1 + \\phi_2}{2}\\right)\\cos\\left(-kr + \\frac{\\phi_1 - \\phi_2}{2}\\right)\\\\
              &= 2E_0\\cos\\left(kr + \\frac{\\phi_2 - \\phi_1}{2}\\right)\\cos\\left(\\omega t + \\frac{\\phi_1 + \\phi_2}{2}\\right)
            \\end{align}$$
            $$\\therefore |E| = \\left|2E_0\\cos\\left(kr + \\frac{\\phi_2 - \\phi_1}{2}\\right)\\right|$$

            <div class="Card-Definition">
                <b>波腹</b>
                <p>振幅最大的位置.</p>
                $$kr + \\frac{\\Delta\\phi}{2} = n\\pi,~n = 1,2,\\cdots$$
                $$|E|_{\\max} = 2E_0$$
            </div>

            <div class="Card-Definition">
                <b>波节</b>
                <p>振幅最小的位置.</p>
                $$kr + \\frac{\\Delta\\phi}{2} = \\left(n - \\frac{1}{2}\\right)\\pi,~n = 1,2,\\cdots$$
                $$|E|_{\\min} = 0$$
            </div>

            

        </div>` },
  "note/optics/physicaloptics/photon": { title: "物理光学", content: `<h1>光子</h1>

        <p>光的量子学说（光子说）认为，光是一种以光速\\(c\\)运动的光子流.</p>

        <h2>光子的粒子属性</h2>
        <div class="Card-Definition">
            <b>光子的能量\\(\\epsilon\\)</b>
            $$\\epsilon = h\\nu$$
            <ul>
                <li>\\(h = 6.626\\times 10^{-34}\\mathrm{J}\\cdot \\mathrm{s}\\)：普朗克常数</li>
                <li>\\(\\nu\\)：光波频率</li>
                <p>光的能量就是所有光子的能量的总和.</p>
            </ul>
        </div>

        <div class="Card-Definition">
            <b>光子的运动质量\\(m\\)</b>
            $$m = \\frac{\\epsilon}{c^2} = \\frac{h\\nu}{c^2}$$
            <p>光子的静止质量为\\(0\\).</p>
        </div>

        <div class="Card-Definition">
            <b>光子的动量\\(\\mathbf{P}\\)</b>
            <p>光子运动方向即平面光波传播方向.</p>
            <div class="Formula">
                $$\\mathbf{P} = mc\\mathbf{k}_0 = \\hbar \\mathbf{k}$$
                <div class="Derivation">
                    $$\\mathbf{P} = mc\\mathbf{k}_0$$
                    $$\\because m = \\frac{h\\nu}{c^2}$$
                    $$\\mathbf{P} = \\frac{h\\nu}{c}\\mathbf{k}_0$$
                    $$\\because \\begin{cases}
                    \\nu = \\frac{1}{T}\\\\
                    c = \\frac{\\lambda}{T}
                    \\end{cases}$$
                    $$\\begin{align}
                    \\mathbf{P} &= \\frac{h}{\\lambda}\\mathbf{k}_0\\\\
                               &= \\frac{h}{2\\pi}\\frac{2\\pi}{\\lambda}\\mathbf{k}_0\\\\
                               &= \\hbar\\mathbf{k}
                    \\end{align}$$
                </div>
            </div>
            <ul>
                <li>\\(\\hbar = \\frac{h}{2\\pi}\\)：约化普朗克常数</li>
                <li>\\(\\mathbf{k}\\)为<a href="Chapter1.html#k" class="goto">波矢量</a></li>
            </ul>
        </div>
        
        <div class="Card-Definition">
            <b>光子的偏振</b>
            <p>光子具有两种可能的独立偏振状态，对应于光波场的两个独立偏振方向。</p>
        </div>

        <p>光子属于<a href="#Boson" class="goto">玻色子</a>，处于同一状态的光子数目是没有限制的。</p>

        <table>
            <tr>
                <td>粒子属性</td>
                <td>表达公式</td>
                <td>波动属性</td>
            </tr>
            <tr>
                <td>能量</td>
                <td>$$\\epsilon = h \\nu$$</td>
                <td>频率</td>
            </tr>
            <tr>
                <td>动量</td>
                <td>$$\\mathbf{P} = \\hbar \\mathbf{k}$$</td>
                <td>波矢</td>
            </tr>
        </table>
        <p>量子电动力学从理论上将光的电磁（波动）理论和光子（微粒）理论在电磁场量子化描述的基础上统一起来，在理论上阐明了光的波粒二象性。</p>

        <b id="Boson">玻色子</b>
        <p>自旋为整数的粒子</p>
        <p>玻色子服从玻色-爱因斯坦统计规律</p>` },
  "note/optics/physicaloptics/polarization": { title: "物理光学", content: `<h1>光的偏振</h1>

        <h2>平面光波的偏振特性</h2>

        <p>平面电磁波是横电磁波，其光场矢量的振动方向与光波传播方向垂直.</p>

        <div class="Card-Definition" id="Polarization">
            <b>光波的偏振特性</b>
            <p>光振动方向相对光传播方向不对称的性质.</p>
        </div>

        <p>光波的偏振特性是横波区别于纵波的最明显标志.</p>

        <div class="Card-AI">
            <p>单色平面波必是偏振光.</p>
        </div>

        <p>设光波沿\\(z\\)方向传播，电场矢量为</p>
        $$\\mathbf{E} = \\mathbf{E}_0 \\cos(\\omega t - kz + \\phi_0)$$
        <p>为表征光波的偏振特性，将其表示为沿\\(x, y\\)方向上振动的两个独立分量的线性组合</p>
        $$\\mathbf{E} = \\mathbf{i}\\mathbf{E}_x + \\mathbf{j}\\mathbf{E}_y$$
        $$E_x = E_{0x}\\cos(\\omega t - kz + \\phi_x) = E_{0x}e^{-i(\\omega t - kz + \\phi_x)}$$
        $$E_y = E_{0y}\\cos(\\omega t - kz + \\phi_y) = E_{0y}e^{-i(\\omega t - kz + \\phi_y)}$$

        <div class="Formula">
            $$(\\frac{E_x}{E_{0x}})^2 + (\\frac{E_y}{E_{0y}})^2 - 2(\\frac{E_x}{E_{0x}})(\\frac{E_y}{E_{0y}})\\cos \\phi = \\sin^2 \\phi(\\phi = \\phi_y - \\phi_x)$$
            <div class="Derivation">
                <p>令\\(\\phi = \\phi_y - \\phi_x, \\omega t - kz + \\phi_x = \\theta\\)</p>
                $$E_x = E_{0x}\\cos\\theta \\Rightarrow \\cos\\theta = \\frac{E_x}{E_{0x}}$$
                $$\\sin\\theta = \\sqrt{1 - (\\frac{E_x}{E_{0x}})^2}$$
                $$E_y = E_{0y}\\cos(\\theta + \\phi) = E_{0y}(\\cos\\theta\\cos\\phi - \\sin\\theta\\sin\\phi)$$
                $$(\\frac{E_y}{E_{0y}}) = \\frac{E_x}{E_{0x}}\\cos\\phi - \\sqrt{1 - (\\frac{E_x}{E_{0x}})^2}\\sin \\phi$$
                $$[1 - (\\frac{E_x}{E_{0x}})]\\sin^2\\phi = (\\frac{E_x}{E_{0x}})^2\\cos^2\\phi - 2(\\frac{E_x}{E_{0x}})(\\frac{E_y}{E_{0y}})\\cos\\phi + (\\frac{E_y}{E_{0y}})^2$$
                $$\\sin^2\\phi = (\\frac{E_x}{E_{0x}})^2 - 2(\\frac{E_x}{E_{0x}})(\\frac{E_y}{E_{0y}})\\cos\\phi + (\\frac{E_y}{E_{0y}})^2$$
            </div>
        </div>

        <div class="Card-Definition">
            <b>旋向</b>
            <p>迎着光传播方向看：</p>
            <p>\\(\\mathbf{E}\\)顺时针旋转，称为<b>右旋</b>偏振光.</p>
            <p>\\(\\mathbf{E}\\)逆时针旋转，称为<b>左旋</b>偏振光.</p>
        </div>

        <b>线偏振光</b>
        <p>条件：\\(\\phi = m\\pi(m = 0, \\pm 1, \\pm 2, \\cdots)\\)</p>
        <div class="Formula">
            $$\\frac{1}{E_{0x}}E_x \\pm \\frac{1}{E_{0y}}E_y = 0$$
            <div class="Derivation">
                $$\\phi = m\\pi(m = 0, \\pm 1, \\pm 2, \\cdots) \\Rightarrow \\begin{cases}\\sin \\phi = 0\\\\ \\cos\\phi = \\pm 1\\end{cases}$$
                $$(\\frac{E_x}{E_{0x}})^2 + (\\frac{E_y}{E_{0y}})^2 - 2(\\frac{E_x}{E_{0x}})(\\frac{E_y}{E_{0y}})\\cos \\phi = \\sin^2 \\phi$$
                $$(\\frac{E_x}{E_{0x}})^2 \\pm 2(\\frac{E_x}{E_{0x}})(\\frac{E_y}{E_{0y}}) + (\\frac{E_y}{E_{0y}})^2 = 0$$
                $$(\\frac{E_x}{E_{0x}} \\pm \\frac{E_y}{E_{0y}})^2 = 0$$
                $$\\frac{1}{E_{0x}}E_x \\pm \\frac{1}{E_{0y}}E_y = 0$$                
            </div>
        </div>
        $$\\frac{E_y}{E_x} = \\frac{E_{0y}}{E_{0x}}e^{-i\\phi} = \\frac{E_{0y}}{E_{0x}}e^{-im\\pi}$$

        <p>当\\(m\\)为偶数时，光场在\\(Ⅰ,Ⅲ\\)象限内振动.</p>
        <p>当\\(m\\)为奇数时，光场在\\(Ⅱ,Ⅳ\\)象限内振动.</p>

        <b>圆偏振光</b>
        <p>条件：\\(E_{0x} = E_{0y} = E'_0, \\phi = m\\pi/2(m = \\pm 1, \\pm 3, \\pm 5\\cdots)\\)</p>
        <div class="Formula">
            $$E^2_x + E^2_y = E'^2_0$$
            <div class="Derivation">
                $$\\phi = m\\pi/2(m = \\pm 1, \\pm 3, \\pm 5\\cdots) Rightarrow \\begin{cases}\\sin \\phi = \\pm 1 \\\\ \\cos\\phi = 0\\end{cases}$$
                $$E_{0x} = E_{0y} = E'_0$$
                $$(\\frac{E_x}{E_{0x}})^2 + (\\frac{E_y}{E_{0y}})^2 - 2(\\frac{E_x}{E_{0x}})(\\frac{E_y}{E_{0y}})\\cos \\phi = \\sin^2 \\phi$$
                $$(\\frac{E_x}{E'_0})^2 + (\\frac{E_y}{E'_0})^2 = 1$$
                $$E^2_x + E^2_y = E'^2_0$$                
            </div>
        </div>
        $$\\frac{E_y}{E_x} = \\frac{E_{0y}}{E_{0x}}e^{-i\\phi} = e^{\\mp i\\frac{\\pi}{2}} = \\mp i$$
        <div class="Formula">
            <p>\\(\\phi = \\frac{\\pi}{2}\\)时，为右旋偏振光.</p>
            <div class="Derivation">
                <p>取：</p>
                $$\\begin{cases}
                x = \\cos\\theta \\gt 0\\\\
                y = \\cos(\\theta + \\phi) \\gt 0 
                \\end{cases}$$
                <p>当\\(\\phi = \\frac{\\pi}{2} + 2k\\pi,~k = \\pm1,\\pm2,\\cdots\\)时，令：</p>
                $$\\theta \\in (-\\frac{\\pi}{2},0)$$
                $$\\therefore \\theta + \\phi \\in (0,\\frac{\\pi}{2})$$
                <p>故：</p>
                $$\\begin{cases}
                x' = \\cos(\\theta + \\omega\\Delta t) \\gt x\\\\
                y' = \\cos(\\theta + \\phi + \\omega\\Delta t) \\lt y
                \\end{cases}$$
            </div>
        </div>
        <p>\\(\\phi=-\\frac{\\pi}{2}\\)时，为左旋偏振光.</p>

        <b>椭圆偏振光</b>
        <p>\\(2m\\pi \\lt \\phi \\lt (2m+1)\\pi\\)：右旋椭圆偏振光.</p>
        <p>\\((2m-1)\\pi \\lt \\phi \\lt 2m\\pi\\)：左旋椭圆偏振光.</p>
        

        <h3>琼斯矩阵法表示偏振态</h3>
        <b>琼斯矩阵</b>
        $$\\left[\\begin{matrix}E_x\\\\E_y\\end{matrix}\\right] = \\left[\\begin{matrix}E_{0x}e^{-i\\phi_x}\\\\E_{0y}e^{-i\\phi_y}\\end{matrix}\\right]$$

        <b>\\(Ⅰ，Ⅲ\\)象限内的线偏振光</b>
        <p>此时\\(\\phi_x = \\phi_y = \\phi_0\\)</p>
        $$\\left[\\begin{matrix}E_x\\\\E_y\\end{matrix}\\right] = \\left[\\begin{matrix}E_{0x}\\\\E_{0y}\\end{matrix}\\right]e^{-i\\phi_0}$$

        <b>右旋、左旋圆偏振光</b>
        <p>此时\\(\\phi_y - \\phi_x = \\pm \\frac{\\pi}{2}, E_{0x} = E_{0y} = E_0\\)</p>
        $$\\left[\\begin{matrix}E_x\\\\E_y\\end{matrix}\\right] = \\left[\\begin{matrix}1\\\\\\mp i\\end{matrix}\\right]E_0e^{-i\\phi_x}$$` },
  "note/optics/physicaloptics/reflectionandtransmission": { title: "物理光学", content: `<h1>光在电介质面上的反射与折射</h1>
        <div class="PageCatalog">
            <ul>
                <li><a href="#Fresnel">菲涅尔公式</a></li>
                <li><a href="#TotalPolarization">全偏振</a></li>
                <li><a href="#TotalReflection">全反射</a></li>
                <li><a href="#HalfWaveLoss">半波损失</a></li>
            </ul>
        </div>
       
        
        <div class="Card-Definition">
            <b>垂直入射</b>
            <p>入射角\\(\\theta_1 = 0\\).</p>

            <b>略入射</b>
            <p>入射角\\(\\theta_1 \\rightarrow 90°\\).</p>
        </div>

        <b id="BoundaryCondition">电磁场的连续条件</b>
        <p>在没有传导电流和自由电荷的介质中，磁感强度\\(\\mathbf{B}\\)与电感强度\\(\\mathbf{D}\\)的法向分量在界面上连续；电场强度\\(\\mathbf{E}\\)和磁场强度\\(\\mathbf{H}\\)的切向分量在界面上连续。</p>
        $$
        \\begin{align}
        \\begin{cases}
        B_{1n} = B_{2n}\\\\
        D_{1n} = D_{2n}\\\\
        H_{1t} = H_{2t}\\\\
        E_{1t} = E_{2t}
        \\end{cases}
        \\end{align}
        $$

        <div class="Card-Definition">
            <b>\\(p\\)分量与\\(s\\)分量</b>
            <p>任一方位振动的光矢量\\(\\mathbf{E}\\)，都可分解为互相垂直的两个分量：</p>
            <ul>
                <li>\\(p\\)偏振波（\\(E_p\\)）：\\(\\mathbf{E}\\)平行于入射面振动的分量，又称<span lang="en">TM</span>波（<span class="tip">横磁波<span class="tiptext">\\(\\mathbf{H}\\)沿界面切线方向</span></span>）</li>
                <li>\\(s\\)偏振波（\\(E_s\\)）：\\(\\mathbf{E}\\)垂直于入射面振动的分量，又称<span lang="en">TE</span>波（<span class="tip">横电波<span class="tiptext">\\(\\mathbf{E}\\)沿界面切线方向</span></span>）</li>
            </ul>
        </div>

        <div class="Card-Property">
            <div class="Formula">
                <p>\\(p\\)分量与\\(s\\)分量均与波矢量\\(\\mathbf{k}\\)垂直.</p>
                <div class="Derivation">
                    $$\\begin{cases}s\\perp Plane_i\\\\\\mathbf{k} \\subset Plane_i\\end{cases} \\Rightarrow \\mathbf{k}\\perp s$$
                    $$\\begin{cases}\\mathbf{k} \\perp \\mathbf{E}\\\\ \\mathbf{k} \\perp s\\end{cases}\\Rightarrow k\\perp Plane_{\\mathbf{E},s}$$
                    <p>由于\\(p\\)分量与\\(s\\)分量合成\\(\\mathbf{E}\\)，故\\(p, s, \\mathbf{E}\\)共面.</p>
                    $$\\therefore \\mathbf{k}\\perp p$$
                </div>
            </div>
        </div>

        
        <h2><a href="/note/optics/physicaloptics/fresnel" id="Fresnel">菲涅尔公式</a></h2>

        <div class="Card-Definition" id="PoyntingVector">
            <b>Poynting矢量（辐射强度矢量、能流密度）\\(\\mathbf{S}\\)</b>
            $$\\mathbf{S} = \\mathbf{E} \\times \\mathbf{H}$$
            <p>用于描述电磁能量的传播。</p>
            <p>其方向表示能量流动的方向。各向同性介质中，亦为波的传播方向。</p>
            <p>其大小等于单位时间内垂直通过传播方向上单位面积的能量。</p>
        </div>

        <div class="Card-Definition">
            <b>光强度\\(I\\)</b>
            <p>介质中某点坡印廷矢量的瞬时值是忽大忽小的，但在一个周期内其平均值是一个定值，将其定义为光强度。</p>
            $$I = \\frac{1}{T}\\int_0^TS\\mathrm{d}t = \\frac{1}{2}\\sqrt{\\frac{\\epsilon}{\\mu}}A^2(W/m^2)$$
            <p>考虑同种介质内的光强时，只关心光强的相对值，比例系数可以省略：</p>
            $$I = E^2_0$$
            <p>对于复数形式：</p>
            $$I = \\mathbf{E} \\cdot \\mathbf{E}^* = E \\cdot E^*$$
            $$\\begin{align}
            I &= \\mathbf{E}_0e^{-i(\\omega t -kr + \\phi)} \\cdot \\mathbf{E}_0e^{i(\\omega t -kr + \\phi)}\\\\
              &= \\mathbf{E}^2_0\\\\
              &= E^2_0
            \\end{align}$$
        </div>

        <p>取\\(\\mathbf{E}\\)与\\(\\mathbf{H}\\)的实数部分，有：</p>
        $$\\mathbf{E} = \\mathbf{E_0}\\cos(\\omega t + \\alpha)$$
        $$\\mathbf{H} = \\mathbf{H_0}\\cos(\\omega t + \\beta)$$
        $$\\begin{align}
        I &= \\frac{1}{T}\\int_0^{T}S\\mathrm{d}t\\\\
          &= \\frac{1}{T}\\int_0^{T}|\\mathbf{E}||\\mathbf{H}|\\sin\\frac{\\pi}{2}\\mathrm{d}t\\\\
          &= \\frac{1}{T}\\int_{0}^TE_0H_0\\cos(\\omega t + \\alpha)\\cos(\\omega t + \\beta)\\mathrm{d}t\\\\
          &= \\frac{1}{2}E_0H_0\\cos(\\alpha - \\beta)
        \\end{align}$$
        $$\\begin{align}
        \\because Re(EH^*) &= Re\\{E_0\\exp[{i(\\omega t + \\alpha)}]\\cdot H_0\\exp[{-i(\\omega t + \\beta)}]\\}\\\\
                 &= E_0H_0\\cos(\\alpha - \\beta)
        \\end{align}$$
        $$\\therefore I = \\frac{1}{2} Re(EH^*)$$


        <h2>入射波、反射波与透射波的能量关系</h2>
        <img src="./Img/W.png" width="400"><br>
        通过单位面积的光能为：<br><br>
        入射波：\\(W_i = I_i\\cos\\theta_1 = \\frac{1}{2}\\sqrt{\\frac{\\epsilon_1}{\\mu_1}}E_{0i}^2\\cos\\theta_1\\)<br><br>
        反射波：\\(W_r = I_r\\cos\\theta_1 = \\frac{1}{2}\\sqrt{\\frac{\\epsilon_1}{\\mu_1}}E_{0r}^2\\cos\\theta_1\\)<br><br>
        透射波：\\(W_t = I_t\\cos\\theta_2 = \\frac{1}{2}\\sqrt{\\frac{\\epsilon_2}{\\mu_2}}E_{0t}^2\\cos\\theta_2\\)

        <table>
            <tr>
                <td></td>
                <td class="tbtitle">定义</td>
                <td class="tbtitle">公式</td>
            </tr>
            <tr>
                <td>反射率\\(R\\)（反射比\\(\\rho\\)）</td>
                <td>反射波与入射波能量之比</td>
                <td>$$R = \\rho = \\frac{W_r}{W_i} = \\frac{E_{0r}^2}{E_{0i}^2} = r^2$$</td>
            </tr>
            <tr>
                <td>透射率\\(T\\)（透射比\\(\\tau\\)）</td>
                <td>透射波与入射波能量之比</td>
                <td>
                    $$T = \\tau = \\frac{W_t}{W_i} = \\frac{\\sqrt{\\epsilon_2\\mu_1}\\cos\\theta_2}{\\sqrt{\\epsilon_1\\mu_2}\\cos\\theta_1}\\frac{A_2^2}{A_1^2} = \\frac{n_2\\cos\\theta_2}{n_1\\cos\\theta_1}\\frac{A_2^2}{A_1^2} = \\frac{n_2\\cos\\theta_2}{n_1\\cos\\theta_1}t^2$$
                    （<span class="tip">非磁性物质<span class="tiptext">\\(\\mu_1 = \\mu_2\\)</span></span>）
                </td>
            </tr>
        </table>
        $$R_s + T_s = 1$$
        $$R_p + T_p = 1$$


        <h2>全偏振现象与<span lang="en">Brewster</span>角</h2>
        
        <h3>偏振</h3>
        <p>光斜入射时，反射光中的\\(p\\)分量与\\(s\\)分量不等，反射光变为部分偏振光。</p>
        <p>光从光疏介质入射到光密介质时，由菲涅尔公式：</p>
        <ul>
            <li>\\(\\theta_1 = 0°\\)即垂直入射时，\\(r_p \\gt 0 \\gt r_s\\)、\\(t_s\\gt 0\\)、\\(t_p\\gt 0\\)，此时存在反射波与折射波。</li>
            <li>\\(\\theta_1 = 90°\\)即掠入射时，\\(r_s = r_p = -1\\)，\\(t_s = t_p = 0\\)，此时仅有反射光。</li>
        </ul>

        <div class="Card-Definition" id="TotalPolarization">
            <b>全偏振</b>
            <p>反射光的振动方向只沿一个平面内的现象.</p>

            <p>由\\(r_s, r_p, t_s, t_p\\)的取值可知，仅有\\(r_p\\)的值可能为\\(0\\).</p>
            <p>\\(r_p = 0\\)时，反射光中只有\\(s\\)方向偏振的电场，即反射光为全偏振光.</p>
            <p>\\(r_p = \\frac{\\tan(\\theta_1 - \\theta_2)}{\\tan(\\theta_1 + \\theta_2)} = 0\\)，由于\\(\\theta_1 \\neq \\theta_2\\)，故\\(\\tan(\\theta_1 - \\theta_2)\\neq 0\\)，只能是\\(\\tan(\\theta_1 + \\theta_2) = \\infty\\)即\\(\\theta_1 + \\theta_2 = \\pi/2\\)。称此时的入射角为<b>起偏振角</b>或<b><span lang="en">Brewster</span>角（\\(\\theta_B\\)）</b>。</p>
            $$\\tan\\theta_B = n$$
        </div>


        <div class="Card-Definition" id="TotalReflection">
            <b>全反射</b>
            <p>当光从光密介质入射到光疏介质、入射角大于临界角\\(\\theta_c\\)时，光全部返回原介质中的现象.</p>
            $$\\sin\\theta_c = n$$

            <div class="Prove">
                <p>光全部返回原介质\\(\\Rightarrow\\)只有反射光，不存在折射光.</p>
                $$\\sin\\theta_2 = \\frac{n_1}{n_2}\\sin\\theta_1 \\gt 1 \\Rightarrow \\frac{n_1}{n_2} \\gt 1$$
                <p>故条件1为：从光密介质入射到光疏介质.</p>
                <p>设临界角为\\(\\theta_c\\)，当\\(\\theta_1 = \\theta_c\\)时，\\(\\sin\\theta_2\\)恰好等于\\(1\\).</p>
                $$\\sin\\theta_2 = \\frac{n_1}{n_2}\\sin\\theta_c = 1$$
                $$\\sin\\theta_c = \\frac{n_1}{n_1} = n$$
                <p>由于\\(\\sin\\theta_2\\)为关于\\(\\theta_1\\)的单调递增函数，所以\\(\\theta_1 \\gt \\theta_c\\)时，\\(\\sin\\theta_2 \\gt 1\\).</p>
                <p>故条件2为\\(\\theta_1 \\gt \\theta_c\\).</p>
            </div>
            <p>全反射时发生相位的变化。</p>
        </div>

        <div class="Card-Analysis" id="HalfWaveLoss">
            <h2>由菲涅尔系数推断相位变化（半波损失）</h2>
    
            $$E_{i} = E_{0i}\\cos(\\omega t - kr + \\phi_0)$$
    
            <p>对于折射波，在\\(0\\sim\\frac{\\pi}{2}\\)范围内</p>
            $$t_s = \\frac{2n_1\\cos\\theta_1}{n_1\\cos\\theta_1 + n_2\\cos\\theta_2} \\gt 0$$
            $$t_p = \\frac{2n_1\\cos\\theta_1}{n_2\\cos\\theta_1 + n_1\\cos\\theta_2} \\gt 0$$
            $$t = \\frac{E_{0t}}{E_{0i}} \\gt 0 \\Rightarrow E_t = E_{0t}\\cos(\\omega t - kr + \\phi_0)$$
            <p>这表明折射波与入射波的相位总是相同的.</p>
            <hr>
            <p>对于反射波，在\\(0\\sim\\frac{\\pi}{2}\\)范围内，\\(r_s, r_t\\)有正有负.</p>
            <p>\\(r = \\frac{E_{0r}}{E_{0i}} \\gt 0 \\Rightarrow E_r = E_{0r}\\cos(\\omega t - kz + \\phi_0)\\)：相位不发生改变.</p>
            <p>\\(r = \\frac{E_{0r}}{E_{0i}} \\lt 0 \\Rightarrow E_r = -E_{0r}\\cos(\\omega t - kz + \\phi_0) = E_{0r}\\cos(\\omega t - kz + \\phi_0 + \\pi)\\)：相位改变\\(\\pi\\).</p>
    
            <table>
                <tr>
                    <td rowspan="2">$$n_1 \\lt n_2$$</td>
                    <td>$$\\theta_i \\lt \\theta_B:r_p \\gt 0, r_s \\lt 0$$</td>
                </tr>
                <tr>
                    <td>$$\\theta_i \\gt \\theta_B:r_p \\lt 0, r_s \\lt 0$$</td>
                </tr>
                <tr>
                    <td rowspan="2">$$n_1 \\gt n_2$$</td>
                    <td>$$\\theta_i \\lt \\theta_B:r_s\\gt 0, r_p \\lt 0$$</td>
                </tr>
                <tr>
                    <td>$$\\theta_i \\gt \\theta_B:r_s\\gt 0, r_p \\gt 0$$</td>
                </tr>
            </table>

            <b>正入射时的相位变化</b>
            <p>$$n_1 \\lt n_2$$</p>
            <img src="Img/HalfWaveLoss1.jpg" width="300">
            <p>$$n_1 \\gt n_2$$</p>
            <img src="Img/HalfWaveLoss2.jpg" width="300">

            <b>略入射时的相位变化</b>
            <p>$$n_1\\lt n_2$$</p>
            <img src="Img/HalfWaveLoss3.jpg" width="300">


            <p>相位改变\\(\\pi\\)的物理意义是光的振动方向反向，表现在图上时均以迎着光传播的方向观察.</p>

            <b>三层介质情况的半波损失：</b>
            <p>设光线\\(n_1\\rightarrow n_2\\rightarrow n_3\\)</p>
            <table>
                <tr>
                    <td>$$n_1 \\gt n_2 \\gt n_3$$</td>
                    <td rowspan="2">无半波损失</td>
                </tr>
                <tr>
                    <td>$$n_1 \\lt n_2 \\lt n_3$$</td>
                </tr>
                <tr>
                    <td>$$n_1 \\gt n_2 \\lt n_3$$</td>
                    <td rowspan="2">有半波损失</td>
                </tr>
                <tr>
                    <td>$$n_1 \\lt n_2 \\gt n_3$$</td>
                </tr>
            </table>
        </div>



        <h2>反射光和折射光的偏振特性</h2>
        <ul>
            <li>完全非偏振光</li>
            <li>部分偏振光</li>
            <li>完全偏振光</li>
        </ul>

        <div class="Card-Definition">
            <b>偏振度</b>
            $$P = \\frac{I_M - I_m}{I_M + I_m}$$
            <p>\\(I_M, I_m\\)分别为两个特殊（正交）方向上所对应的最大和最小光强.</p>
            <p>完全非偏振光\\(P=0\\)，完全偏振光\\(P=1\\)，部分偏振光\\(0\\lt P\\lt 1\\)，\\(P\\)值越接近\\(1\\)，光的偏振程度越高.</p>
        </div>

        <b>自然光的反射、折射特性</b>
        <p>自然光的反射率</p>
        $$R_n = \\frac{W_r}{W_i} = \\frac{W_{rs} + W_{rp}}{W_{is} + W_{ip}}$$
        <p>\\(\\because\\)入射的自然光能量\\(W_{is} = W_{ip}\\)</p>
        $$R_n = \\frac{W_{rs}}{2W_{is}} + \\frac{W_{rp}}{2W_{ip}} = \\frac{1}{2}(R_s + R_p)$$

        <p>反射光偏振度为</p>
        $$P_r = \\left|\\frac{I_{rp} - I_{rs}}{I_{rp} + I_{rs}}\\right| = \\left|\\frac{R_p - R_s}{R_p + R_s}\\right|$$

        <p>折射光偏振度为</p>
        $$P_t = \\left|\\frac{I_{tp} - I_{ts}}{I_{tp} + I_{ts}}\\right| = \\left|\\frac{T_p - T_s}{T_p + T_s}\\right|$$

        <p>自然光正入射和略入射界面时，\\(R_s = R_p, T_s = T_p \\Rightarrow P_s = P_t = 0\\)，反射光与折射光仍为自然光.</p>
        <p>自然光斜入射界面时，\\(R_s\\neq R_p, T_s\\neq T_p\\)，反射光和折射光均为部分偏振光.</p>
        <p>自然光垂直入射时：</p>
        <div class="Formula">
            $$R_n = (\\frac{n_1 - n_2}{n_1 + n_2})^2$$
            <div class="Derivation">
                $$\\begin{align}
                R_n &= \\frac{1}{2}(R_s + R_p)\\\\
                    &= \\frac{1}{2}(r_s^2 + r_p^2)\\\\
                    &= \\frac{1}{2}[(\\frac{n_1\\cos\\theta_1 - n_2\\cos\\theta_2}{n_1\\cos\\theta_1 + n_2\\cos\\theta_2})^2 + (\\frac{n_2\\cos\\theta_1 - n_1\\cos\\theta_2}{n_2\\cos\\theta_1 + n_1\\cos\\theta_2})^2]
                \\end{align}$$
                $$\\because \\theta_1 = \\theta_2 = 0 \\Rightarrow \\cos\\theta_1 = \\cos\\theta_2 = 1$$
                $$R_n = (\\frac{n_1 - n_2}{n_1 + n_2})^2$$
            </div>
        </div>
        <p>自然光斜入射时：</p>
        $$R_n = \\frac{1}{2}[\\frac{\\sin^2(\\theta_2 - \\theta_1)}{\\sin^2(\\theta_2 + \\theta_1)} + \\frac{\\tan^2(\\theta_1 - \\theta_2)}{\\tan^2(\\theta_1 + \\theta_2)}]$$


        <b>振动方位角</b>
        <p>波的方向与\\(p\\)波方向的夹角.</p>
        $$\\alpha = \\arctan \\frac{E_{0s}}{E_{0p}}$$

        $$|\\tan \\alpha_r| \\geq |\\tan \\alpha_i|$$
        <p>对于反射光，\\(\\theta_1 = 0\\)或\\(\\theta_1 = \\pi/2\\)时，等号成立；一般入射角时，振动面远离入射面.</p>
        $$|\\tan \\alpha_t| \\leq |\\tan \\alpha_i|$$
        <p>对于折射光，\\(\\theta_1 = 0\\)时等号成立；一般入射角时，振动面转向入射面.</p>


        <b>全反射下\\(s\\)分量与\\(p\\)分量的相位差</b>
        $$\\Delta \\phi = \\phi_{rs} - \\phi_{rp} = 2\\arctan\\frac{\\cos\\theta_1 \\sqrt{\\sin^2\\theta_1 - n^2}}{\\sin^2\\theta_1}$$






        <div class="Card-Definition">
            <b>衰逝波（倏逝波）</b>
            <p>全反射时，光波场将透入第二个介质中很薄的一层（约为\\(\\lambda\\)）范围内，并沿界面传播一段距离，再返回第一个介质.</p>
            <p>这个透入到第二个介质表面层的波叫做衰逝波.</p>
        </div>



        <h2>全反射的应用</h2>
        <h3>光纤传光</h3>
        <img src="Img/OpticalFiber.jpg">
        <b>工作条件</b>
        <div class="Formula">
            $$\\sin\\phi \\gt \\frac{1}{n_0}\\sqrt{n^2_1 - n_2^2}$$
            <div class="Derivation">
                <p>发生全反射的条件为：</p>
                $$\\sin\\theta \\gt n_2/n_1$$
                $$\\sin(\\frac{\\pi}{2} - \\theta_1) \\gt n_2/n_1$$
                $$\\cos\\theta_1 \\gt n_2/n_1$$
                $$\\sin\\theta_1 \\lt \\sqrt{1 - \\frac{n^2_2}{n^2_1}}$$
                $$\\because n_0\\sin\\phi = n_1\\sin\\theta_1 \\lt \\sqrt{n^2_1 - n^2_2}$$
                $$\\therefore \\sin\\phi \\lt \\frac{1}{n_0}\\sqrt{n^2_1 - n^2_2}$$
            </div>
        </div>

        <div class="Card-Definition">
            <b>纤芯与包层的相对折射率差\\(\\Delta\\)</b>
            $$\\Delta = \\frac{n_1 - n_2}{n_1}$$
        </div>

        <div class="Card-Definition">
            <b>光纤的数值孔径<span lang="en">NA</span></b>
            $$NA = n_0\\phi_{max} = \\sqrt{n^2_1 - n^2_2} \\approx n_1\\sqrt{2\\Delta}$$
        </div>
        

        <div id="PageEnd"></div>
        <a class="GoToBottom" href="#PageEnd">Bottom</a>` },
  "note/optics/quantummechanics/catalog": { title: "量子力学", content: `<h1>非线性光学</h1>

        <h2>目录</h2>
        <a href="/note/optics/quantummechanics/chapter1">第一章 波函数</a>` },
  "note/optics/quantummechanics/chapter1": { title: "量子力学", content: `<h1>第一章 波函数</h1>

        <div class="PageCatalog">
            <ul>
                <li><a href="#Time-Dependent Schrödinger Equation">含时Schrödinger方程</a></li>
            </ul>
        </div>

        <p>一个动力学体系的状态可以用一个归一化的波函数\\(\\Psi\\)描述.</p>

        <p>求解Schrödinger方程可以得到粒子的波函数\\(\\Psi(x,t)\\).</p>
        <p>给定适当的初始条件，Schrödinger方程可以决定以后所有时刻的波函数.</p>

        <div class="Card-Formula" id="Time-Dependent Schrödinger Equation">
            <b>含时Schrödinger方程</b>
            $$i\\hbar\\frac{\\partial \\Psi}{\\partial t} = -\\frac{\\hbar^2}{2m}\\frac{\\partial^2\\Psi}{\\partial x^2}+V\\Psi$$
        </div>
        $$\\hbar = \\frac{h}{2\\pi} = 1.054572\\times 10^{-34}J\\cdot s$$

        <div class="Card-Definition">
            <b>Born定则</b>
            <p>在\\(t\\)时刻发现粒子在\\(x\\)处的概率为\\(|\\Psi(x,t)|^2\\).</p>
        </div>

        $$\\int_{-\\infty}^{+\\infty}|\\Psi(x,t)|^2\\mathrm{d}x = 1$$


        <div class="Formula">
            $$\\int_{-\\infty}^{+\\infty}|\\Psi(x,0)|^2\\mathrm{d}x = 1 \\Rightarrow \\int_{-\\infty}^{+\\infty}|\\Psi(x,t)|^2\\mathrm{d}x = 1$$
            <p>要证：</p>
            $$\\int_{-\\infty}^{+\\infty}|\\Psi(x,0)|^2\\mathrm{d}x = 1 \\Rightarrow \\int_{-\\infty}^{+\\infty}|\\Psi(x,t)|^2\\mathrm{d}x = 1$$
            <p>即证：</p>
            <p>\\(\\int_{-\\infty}^{+\\infty}|\\Psi(x,0)|^2\\mathrm{d}x\\)是一个不随时间变化的常数.</p>
            <p>即：</p>
            $$\\frac{\\mathrm{d}}{\\mathrm{d}t}\\int_{-\\infty}^{+\\infty}|\\Psi(x,t)|^2\\mathrm{d}x = 0$$
            $$\\begin{align}
            \\frac{\\mathrm{d}}{\\mathrm{d}t}\\int_{-\\infty}^{+\\infty}|\\Psi(x,t)|^2\\mathrm{d}x &= \\int_{-\\infty}^{+\\infty}\\frac{\\partial}{\\partial t}|\\Psi(x,t)|^2\\mathrm{d}x\\\\
                                                                                           &= \\int_{-\\infty}^{+\\infty}\\frac{\\partial}{\\partial t}(\\Psi\\cdot\\Psi^*)\\mathrm{d}x\\\\
                                                                                           &= \\int_{-\\infty}^{+\\infty}\\frac{\\partial \\Psi}{\\partial t}\\Psi^* + \\frac{\\partial \\Psi^*}{\\partial t}\\Psi\\mathrm{d}x
            \\end{align}$$
            <p>由Schrödinger方程：</p>
            $$i\\hbar \\frac{\\partial \\Psi}{\\partial t} = -\\frac{\\hbar^2}{2m}\\frac{\\partial^2 \\Psi}{\\partial x^2} + V\\Psi$$
            <p>得：</p>
            $$\\frac{\\partial \\Psi}{\\partial t} = \\frac{i\\hbar}{2m}\\frac{\\partial^2 \\Psi}{\\partial x^2} - \\frac{i}{h}V\\Psi$$
            $$\\frac{\\partial \\Psi^*}{\\partial t} = -\\frac{i\\hbar}{2m}\\frac{\\partial^2 \\Psi^*}{\\partial x^2} + \\frac{i}{h}V\\Psi^*$$
            $$\\therefore \\int_{-\\infty}^{+\\infty} |\\Psi(x,t)|^2 \\mathrm{d}x = 0$$
            $$\\because \\int_{-\\infty}^{+\\infty}|\\Psi(x,0)|^2\\mathrm{d}x = 1$$
            $$\\therefore \\int_{-\\infty}^{+\\infty}|\\Psi(x,t)|^2\\mathrm{d}x = 1$$
            <div class="Derivation">
            </div>
        </div>

        <b>\\(t\\)时刻粒子位置的期望\\(\\left\\lt x\\right\\gt\\)</b>
        $$\\left\\lt  x\\right \\gt = \\int_{-\\infty}^{+\\infty}x|\\Psi(x,t)|^2\\mathrm{d}x$$
        <p>量子力学中，期望不是对同一个体系重复测量的平均值，而是对含有相同体系的一个系综中不同体系的重复测量的平均值.</p>

        <b>粒子速度的期望\\(\\left\\lt  v\\right\\gt\\)</b>

        <div class="Formula">
            $$\\left\\lt  v\\right\\gt = \\frac{\\mathrm{d}\\left\\lt  x\\right\\gt}{\\mathrm{d}t} = -\\frac{i\\hbar}{m}\\int_{-\\infty}^{+\\infty}\\frac{\\partial \\Psi}{\\partial x}\\Psi^*\\mathrm{d}x$$
            <div class="Derivation">
                $$\\begin{align}
                \\left\\lt  v\\right\\gt &= \\frac{\\mathrm{d}\\left\\lt  x\\right\\gt}{\\mathrm{d}t}\\\\
                                      &= \\frac{\\mathrm{d}}{\\mathrm{d}t}\\int_{-\\infty}^{+\\infty}x|\\Psi|^2\\mathrm{d}x\\\\
                                      &= \\int_{-\\infty}^{+\\infty}x\\frac{\\partial}{\\partial t}(\\Psi\\cdot\\Psi^*)\\mathrm{d}x\\\\
                                      &= \\int_{-\\infty}^{+\\infty}x(\\frac{\\partial \\Psi}{\\partial t}\\Psi^* + \\frac{\\partial \\Psi^*}{\\partial t}\\Psi)\\mathrm{d}x
                \\end{align}$$
                $$\\because\\begin{cases}
                \\frac{\\partial \\Psi}{\\partial t} = \\frac{i\\hbar}{2m}\\frac{\\partial^2 \\Psi}{\\partial x^2} - \\frac{i}{\\hbar}V\\Psi\\\\
                \\frac{\\partial \\Psi^*}{\\partial t} = -\\frac{i\\hbar}{2m}\\frac{\\partial^2 \\Psi^*}{\\partial x^2} + \\frac{i}{\\hbar}V\\Psi^*
                \\end{cases}$$
                $$\\begin{align}\\therefore
                \\left\\lt v\\right\\gt &= \\int_{-\\infty}^{+\\infty}x\\cdot\\frac{i\\hbar}{2m}(\\frac{\\partial^2 \\Psi}{\\partial x^2}\\Psi^* - \\frac{\\partial^2 \\Psi^*}{\\partial x^2}\\Psi)\\mathrm{d}x\\\\
                                     &= \\frac{i\\hbar}{2m}\\int_{-\\infty}^{+\\infty}x\\cdot\\frac{\\partial}{\\partial x}(\\frac{\\partial \\Psi}{\\partial x}\\Psi^* - \\frac{\\partial \\Psi^*}{\\partial x}\\Psi)\\mathrm{d}x
                \\end{align}$$
                <p>由分部积分法：</p>
                $$\\left\\lt v \\right\\gt = \\frac{i\\hbar}{2m}\\left[x(\\frac{\\partial \\Psi}{\\partial x}\\Psi^* - \\frac{\\partial \\Psi^*}{\\partial x}\\Psi)\\Big|_{-\\infty}^{+\\infty} - \\int_{-\\infty}^{+\\infty}\\frac{\\partial \\Psi}{\\partial x}\\Psi^* - \\frac{\\partial \\Psi^*}{\\partial x}\\Psi\\mathrm{d}x\\right]$$
                $$\\because \\lim\\limits_{x\\rightarrow\\infty}\\Psi(x,t) = 0$$
                $$\\therefore \\left\\lt v\\right\\gt = -\\frac{i\\hbar}{2m}\\int_{-\\infty}^{+\\infty}\\frac{\\partial \\Psi}{\\partial x}\\Psi^* - \\frac{\\partial \\Psi^*}{\\partial x}\\Psi\\mathrm{d}x$$
                <p>由分部积分法：</p>
                $$\\begin{align}
                \\int_{-\\infty}^{+\\infty}\\frac{\\partial\\Psi^*}{\\partial x}\\Psi\\mathrm{d}x &= \\Psi\\Psi^*\\Big|_{-\\infty}^{+\\infty} - \\int_{-\\infty}^{+\\infty}\\frac{\\partial \\Psi}{\\partial t}\\Psi^*\\mathrm{d}x\\\\
                                                                                         &= -\\int_{-\\infty}^{+\\infty}\\frac{\\partial \\Psi}{\\partial t}\\Psi^*\\mathrm{d}x
                \\end{align}$$
                $$\\therefore \\left\\lt v\\right\\gt = \\frac{-i\\hbar}{m}\\int_{-\\infty}^{+\\infty}\\frac{\\partial \\Psi}{\\partial t}\\Psi^*\\mathrm{d}x$$
            </div>
        </div>

        <b>粒子动量的期望\\(\\left\\lt p\\right\\gt\\)</b>
        $$\\left\\lt p\\right\\gt = m\\left\\lt v\\right\\gt = -i\\hbar\\int_{-\\infty}^{+\\infty}\\frac{\\partial \\Psi}{\\partial x}\\Psi^*\\mathrm{d}x$$


        <h2>算符</h2>
        <table>
            <tr>
                <td>公式</td>
                <td>算符</td>
                <td>物理意义</td>
            </tr>
            <tr>
                <td>$$\\left\\lt x\\right\\gt = \\int_{-\\infty}^{+\\infty} \\Psi^*\\cdot (x)\\cdot \\Psi\\mathrm{d}x$$</td>
                <td>$$x$$</td>
                <td>位置</td>
            </tr>
            <tr>
                <td>$$\\left\\lt p\\right\\gt = \\int_{-\\infty}^{+\\infty} \\Psi^* \\cdot (\\frac{\\hbar}{i}\\frac{\\partial}{\\partial x}) \\cdot \\Psi\\mathrm{d}x$$</td>
                <td>$$\\frac{\\hbar}{i}\\frac{\\partial}{\\partial x}$$</td>
                <td>动量</td>
            </tr>
        </table>

        <div class="Card-Definition">
            <b>de Broglie公式</b>
            $$p = \\frac{h}{\\lambda} = \\frac{2\\pi\\hbar}{\\lambda}$$
            <p>给出了粒子动量与\\(\\Psi\\)波长的联系.</p>
        </div>

        <div class="Card-Definition">
            <b>Heisenberg不确定原理</b>
            <p>粒子位置确定得越精确，其动量就越不精确.</p>
            $$\\sigma_x\\sigma_p \\geq \\frac{\\hbar}{2}$$
        </div>

        <ul class="navibar">
            <li class="catalog"><a href="/note/optics/quantummechanics/catalog">主页</a></li>
            <li class="next"><a href="/note/optics/quantummechanics/chapter2">下一页</a></li>
        </ul>


        <div id="PageEnd"></div>
        <a class="GoToBottom" href="#PageEnd">Bottom</a>` },
  "note/optics/quantummechanics/chapter2": { title: "量子力学", content: `<h1>第二章 定态Schrödinger方程</h1>

        <div class="PageCatalog">
            <ul>
            </ul>
        </div>

        <p>给定特定的势函数\\(V(x,t)\\)，可以通过Schrödinger方程求解出波函数\\(\\Psi(x,t)\\).</p>


        <div class="Card-Analysis">
            <h2>含时Schrödinger方程的分离变量解</h2>
            <p>含时Schrödinger方程:</p>
            $$i\\hbar\\frac{\\partial \\Psi}{\\partial t} = -\\frac{\\hbar}{2m}\\frac{\\partial^2 \\Psi}{\\partial x^2} + V\\Psi$$

            <p>假设：</p>
            <p>1、势函数不依赖时间，即\\(V(x,t) = V(x)\\).</p>
            <p>2、\\(\\Psi(x,t) = \\psi(x)\\phi(t)\\)</p>
            
            $$\\begin{align}
            \\therefore&\\frac{\\partial \\Psi}{\\partial t} = \\psi\\frac{\\mathrm{d} \\phi}{\\mathrm{d} t}\\\\
                      &\\frac{\\partial^2 \\Psi}{\\partial x^2} = \\frac{\\mathrm{d}^2 \\psi}{\\mathrm{d} x^2}\\phi
            \\end{align}$$

            <p>代入<a href="Chapter1.html#Time-Dependent Schrödinger Equation" class="goto">含时Schrödinger方程</a>，得：</p>
            $$i\\hbar\\psi\\frac{\\mathrm{d} \\phi}{\\mathrm{d} t} = -\\frac{\\hbar}{2m}\\frac{\\mathrm{d}^2 \\psi}{\\mathrm{d} x^2}\\phi + V\\psi\\phi$$
            
            <p>两边同时除以\\(\\psi\\phi\\)，得：</p>
            $$i\\hbar\\frac{1}{\\phi}\\frac{\\mathrm{d} \\phi}{\\mathrm{d} t} = -\\frac{\\hbar}{2m}\\frac{1}{\\psi}\\frac{\\mathrm{d}^2\\psi}{\\mathrm{d} x^2} + V$$

            <p>此时，方程左边仅为\\(t\\)的常数，方程右边仅为\\(x\\)的常数.</p>
            <p>方程成立的唯一条件为左右两边均为同一常数.</p>
            <p>设此常数为\\(E\\)，则：</p>
            $$i\\hbar\\frac{1}{\\phi}\\frac{\\mathrm{d} \\phi}{\\mathrm{d} t} = E$$
            $$-\\frac{\\hbar}{2m}\\frac{1}{\\psi}\\frac{\\mathrm{d}^2 \\psi}{\\mathrm{d} x^2} + V = E$$

            <b>方程\\(i\\hbar\\frac{1}{\\phi}\\frac{\\mathrm{d} \\phi}{\\mathrm{d} t} = E\\)</b>
            <p>求解此<a href="/note/math/mathematic/differentialequation" class="goto">微分方程</a>，得：</p>
            <div class="Formula">
                $$\\phi = Ce^{-iEt/\\hbar}$$
                <div class="Derivation">
                    $$i\\hbar\\frac{1}{\\phi}\\frac{\\mathrm{d} \\phi}{\\mathrm{d} t} = E$$
                    $$\\int\\frac{1}{\\phi}\\mathrm{d}\\phi = \\int -\\frac{iE}{\\hbar}\\mathrm{d}t$$
                    $$\\ln|\\phi| = -\\frac{iE}{\\hbar}t + C$$
                    $$\\begin{align}
                    \\phi &= e^{-iEt/\\hbar + C}\\\\
                         &= Ce^{iEt/\\hbar}
                    \\end{align}$$
                </div>
            </div>

            <p>将常数\\(C\\)合并到\\(\\psi\\)中，得：</p>
            $$\\phi = e^{-iEt/\\hbar}$$

            <b>方程\\(-\\frac{\\hbar}{2m}\\frac{1}{\\psi}\\frac{\\mathrm{d}^2 \\psi}{\\mathrm{d} x^2} + V = E\\)</b>
            <p>由于\\(V(x)\\)未知，此方程无法求解.</p>
            <p>记此方程为<b>定态Schrödinger方程</b>.</p>
        </div>

        <div class="Card-Formula">
            <b>定态Schrödinger方程</b>
            $$-\\frac{\\hbar^2}{2m}\\frac{\\mathrm{d}^2\\psi}{\\mathrm{d}x^2} + V\\psi = E\\psi$$

            <p>只有给出特定的势函数\\(V(x)\\)才能求解定态Schrödinger方程.</p>
        </div>


        <p>概率密度\\(|\\Psi(x,t)|^2\\)与时间无关</p>
        $$|\\Psi(x,t)|^2 = \\Psi\\cdot\\Psi^* = \\psi e^{-iEt/\\hbar}\\cdot \\psi^*e^{iEt/\\hbar} = |\\psi(x)|^2$$


        <b>补充知识点</b>
        <br>
        <b>Hamiltonian</b>
        <p>经典力学中，总能量动能加势能称为Hamiltionian.</p>
        $$H(x,p) = \\frac{p^2}{2m} + V$$

        <b>Hamiltonian算符</b>
        <p>将动量算符\\(\\hat p = \\frac{\\hbar}{i}\\frac{\\partial}{\\partial x}\\)代入Hamiltonian公式，得：</p>
        $$\\hat H = -\\frac{\\hbar^2}{2m}\\frac{\\partial^2}{\\partial x^2} + V$$

        <div class="Card-Formula">
            <b>含时Schrödinger方程（\\(\\hat H\\)形式）</b>
            $$i\\hbar\\frac{\\partial \\Psi}{\\partial t} = \\hat H\\Psi$$
        </div>

        <div class="Card-Formula">
            <b>定态Schrödinger方程（\\(\\hat H\\)形式）</b>
            $$\\hat H \\Psi = E\\Psi$$
        </div>

        <div class="Card-Analysis">
            <h2>分离变量解的总能量</h2>

            <p>总能量的期望为：</p>
            $$\\begin{align}
            \\lt H\\gt &= \\int_{-\\infty}^{+\\infty} \\Psi^* \\hat H \\Psi\\mathrm{d}x\\\\
                    &= \\int_{-\\infty}^{+\\infty} \\Psi^* E\\Psi\\mathrm{d}x\\\\
                    &= E
            \\end{align}$$
            $\${\\hat H}^2 \\Psi = \\hat H(\\hat H\\Psi) = \\hat H(E\\Psi) = E(\\hat H\\Psi) = E^2\\Psi$$
            $$\\lt H^2\\gt =\\int_{-\\infty}^{+\\infty} \\Psi^* {\\hat H}^2\\Psi\\mathrm{d}x = E^2 $$
            $$\\sigma_H = \\lt H^2\\gt - \\lt H\\gt = 0$$
            <p>总能量每次测量的结果都是\\(E\\).</p>
        </div>



        <h2>一维无限深方势阱</h2>
        $$V(x) = \\begin{cases}
        0, 0\\leq x\\leq a\\\\
        \\infty, others
        \\end{cases}$$

        <p>势阱内，\\(V=0\\)，定态Schrödinger方程为：</p>
        $$-\\frac{\\hbar^2}{2m}\\frac{\\partial^2 \\psi}{\\partial x^2} = E\\psi$$
        <p>整理得</p>
        $$\\frac{\\partial^2 \\psi}{\\partial x^2} = -k^2\\psi,~k=\\frac{\\sqrt{2mE}}{\\hbar}$$
        <p>解此<a href="..\\..\\Math\\Mathematic\\DifferentialEquation.html#2LinearHomo">二阶线性齐次微分方程</a>得：</p>
        $$\\psi(x) = A\\sin kx + B\\cos kx,~A,B\\in \\mathbb{R}$$
        $$\\because \\psi(0) = \\psi(a) = 0$$
        $$\\psi(0) = A\\sin 0 + B\\cos 0 = 0$$
        $$\\therefore B = 0$$
        $$\\psi(a) = A\\sin ka = 0$$
        <p>若\\(A = 0\\)或\\(k = 0\\)：</p>
        $$\\psi(x) \\equiv 0$$
        <p>这没有研究价值.</p>

        <p>若\\(\\sin ka = 0\\)，即：</p>
        $$ka = 0, \\pm\\pi, \\pm2\\pi,\\cdots$$
        <p>将负号合并至\\(A\\)中，于是\\(k\\)可能的取值为：</p>
        $$k_n = \\frac{n\\pi}{a},~n=1,2,\\cdots$$

        <p>因此\\(E\\)可能的取值为：</p>
        $$E_n = \\frac{k_n^2\\hbar^2}{2m} = \\frac{n^2\\pi^2\\hbar^2}{2ma^2},~n=1,2,\\cdots$$

        <p>这也就是说，一个粒子在一维无限深方势阱中的能量只能取某些特定的值.</p>

        $$\\because \\int_{-\\infty}^{+\\infty}|\\psi(x)|^2\\mathrm{d}x = 1$$
        $$\\therefore \\int_{0}^{a} |A\\sin kx|^2\\mathrm{d}x = 1$$
        $$\\frac{|A|^2}{2}\\int_{0}^{a}1-\\cos 2k\\mathrm{d}x = 1$$
        $$\\frac{|A|^2}{2}(x - \\frac{1}{2k}\\sin 2kx)|_0^a = 1$$
        $$\\because \\psi(a) = A\\sin ka = 0$$
        $$\\therefore \\sin ka = 0$$
        $$\\therefore \\frac{|A|^2}{2}a = 1$$
        <p>简单取其正实根：</p>
        $$A = \\sqrt{\\frac{2}{a}}$$
        <p>故势阱内的解为：</p>
        $$\\psi_n(x) = \\sqrt{\\frac{2}{a}}\\sin(\\frac{n\\pi}{a}x)$$

        <p>\\(\\psi_1\\)具有最低的能量，称为<b>基态</b>.</p>
        <p>其他态能量均高于\\(\\psi_1\\)，称为<b>激发态</b>.</p>

        <h2>谐振子</h2>
        <b>弹簧振子模型</b>
        <p>一个质量为\\(m\\)的物体挂在一个力常数为\\(k\\)的弹簧上，其运动由<b>胡克定律</b>决定：</p>
        $$F = -kx = m\\frac{\\mathrm{d}^2 x}{\\mathrm{d} t^2}$$
        <p>其解为：</p>
        $$x = A\\sin(\\omega t) + B\\cos(\\omega t)$$
        <p>其中：</p>
        $$\\omega = \\sqrt{\\frac{k}{m}}$$



        <div class="Card-Definition">
            <b>算符\\(A\\)和\\(B\\)的对易子：</b>
            $$[\\hat A,\\hat B] = \\hat A \\hat B - \\hat B \\hat A$$
        </div>

        <div class="Card-Formula">
            <b>正则对易关系</b>
            <div class="Formula">
                $$[\\hat x,\\hat p] = i\\hbar$$
                <div class="Derivation">
                    $$\\begin{align}
                    [\\hat x,\\hat p]f &= [x\\cdot \\frac{\\hbar}{i}\\frac{\\mathrm{d}}{\\mathrm{d}x}(f) - \\frac{\\hbar}{i}\\frac{\\mathrm{d}}{\\mathrm{d}x}(xf)]\\\\
                           &= \\frac{\\hbar}{i}[x\\frac{\\mathrm{d}f}{\\mathrm{d}x} - f - x\\frac{\\mathrm{d}f}{\\mathrm{d}x}]\\\\
                           &= i\\hbar f
                    \\end{align}$$
                    $$\\therefore [\\hat x,\\hat p] = i\\hbar$$
                </div>
            </div>
        </div>

        <h2>求解势能为\\(V(x) = \\frac{1}{2}m\\omega^2 x^2\\)时的Schrödinger方程</h2>

        <p>将势函数</p>
        $$V(x) = \\frac{1}{2}m\\omega^2 x^2$$
        <p>代入Hamiltonian算符，得：</p>

        <div class="Formula">
            $$\\hat H = \\frac{1}{2m}[{\\hat p}^2 + (m\\omega x)^2]$$
            <div class="Derivation">
                $$\\begin{align}
                \\hat H &= \\frac{{\\hat p}^2}{2m} + V\\\\
                       &= \\frac{{\\hat p}^2}{2m} + \\frac{1}{2}m\\omega^2x^2\\\\
                       &= \\frac{1}{2m}[{\\hat p}^2 + (m\\omega x)^2]
                \\end{align}$$
            </div>
        </div>
        <p>代入定态Schrödinger方程</p>
        $$\\hat H \\psi = E\\psi$$
        <p>得：</p>
        $$\\frac{1}{2m}[p^2 + (m\\omega x)^2]\\psi = E\\psi$$
        <p>设：</p>
        $$a_\\pm = \\frac{1}{\\sqrt{2\\hbar m\\omega}}(\\mp i\\hat p + m\\omega \\hat x)$$
        $$\\begin{align}
        a_-a_+ &= \\frac{1}{2\\hbar m\\omega}(i\\hat p + m\\omega \\hat x)(-i\\hat p + m\\omega \\hat x)\\\\
               &= \\frac{1}{2\\hbar m\\omega}[{\\hat p}^2 + im\\omega\\hat p\\hat x - im\\omega \\hat x\\hat p + (m\\omega\\hat x)^2]\\\\
               &= \\frac{1}{2\\hbar m\\omega}[{\\hat p}^2 + (m\\omega\\hat x)^2 - im\\omega(\\hat x\\hat p - \\hat p\\hat x)]\\\\
               &= \\frac{1}{2\\hbar m\\omega}[{\\hat p}^2 + (m\\omega\\hat x)^2] - \\frac{i}{2\\hbar}[\\hat x\\hat p - \\hat p\\hat x]\\\\
        \\end{align}$$
        $$\\begin{align}
        \\because &\\hat H = \\frac{1}{2m}[{\\hat p}^2 + (m\\omega\\hat x)^2]
        \\end{align}$$


        <ul class="navibar">
            <li><a href="/note/optics/quantummechanics/chapter1">上一页</a></li>
            <li class="catalog"><a href="/note/optics/quantummechanics/catalog">主页</a></li>
            <li class="next"><a href="/note/optics/quantummechanics/chapter2">下一页</a></li>
        </ul>

        <div id="PageEnd"></div>
        <a class="GoToBottom" href="#PageEnd">Bottom</a>` },
  "note/optics/zemax/catalog": { title: "几何光学", content: `<h1>几何光学</h1>

        <h2>目录</h2>
        <a href="/note/optics/zemax/systemexplorer">系统选项</a>
        <br>
        <a href="/note/optics/zemax/chapter1"><span lang="en">Zemax</span>概述</a>
        <br>
        <a href="/note/optics/zemax/chapter2">像质评价方法</a>
        <br>
        <a href="/note/optics/zemax/chapter3">光学材料</a>
        <br>` },
  "note/optics/zemax/chapter1": { title: "激光原理", content: `<h1 lang="en">Zemax</h1>

        <h2>快捷键</h2>
        <table>
            <tr>
                <td lang="en">Insert</td>
                <td>插入表面</td>
            </tr>
            <tr>
                <td lang="en">Ctrl+Insert</td>
                <td>插入后续面</td>
            </tr>
            <tr>
                <td lang="en">Delete</td>
                <td>删除表面</td>
            </tr>
        </table>

        <h2>初始条件设置</h2>
        <b></b>


        <h2>窗口布局</h2>
        <button class="opt">设置</button>\\(\\rightarrow\\)<button class="opt">窗口布局</button>
        <ul>
            <li>布局所有窗口</li>
            <li>布局窗口到排列组</li>
            <li>浮动所有窗口</li>
            <li>平铺所有窗口</li>
            <li>层叠所有窗口</li>
        </ul>
        右击窗口浮标也可对窗口进行布局




        <h2 lang="en">Lens Data</h2>
        <h3>数据栏</h3>
        <table>
            <tr>
                <td lang="en">Thickness<br>(Solve Type)</td>
                <td lang="en">M</td>
                <td lang="en">Marginal Rays Height</td>
            </tr>
            <tr>
                <td lang="en">Comment</td>
                <td colspan="2">注释</td>
            </tr>
        </table>

        <h3>更新</h3>
        <b>工具栏第一项</b>
        <ul>
            <li>更新：从不</li>
            <li>更新：仅编辑器</li>
            <li>更新：所有窗口</li>
            <li>更新：布局窗口</li>
        </ul>

        <b>表面属性</b>
        <table>
            <tr>
                <td>类型</td>
                <td>行颜色</td>
                <td>对行颜色进行标记</td>
            </tr>
            <tr>
                <td rowspan="3">绘图</td>
                <td>隐藏这个表面的光线</td>
                <td></td>
            </tr>
            <tr>
                <td>不显示此表面</td>
                <td></td>
            </tr>
            <tr>
                <td>不显示此表面的边缘</td>
                <td></td>
            </tr>
        </table>

        <h3>启动经典绘图</h3>
        <button class="opten">Setup</button>\\(\\rightarrow\\)<button class="opten">OpticalStudio Preferences</button>\\(\\rightarrow\\)<button class="opten">Graphics</button>\\(\\rightarrow\\)<button class="opten">Enable Classic View</button>

        <h2 lang="en">Cross-Section</h2>
        <h3 lang="en">Settings</h3>
        <table>
            <tr>
                <td lang="en">Color Rays By</td>
                <td lang="en">Field#</td>
                <td>图中每种颜色的光线对应一个不同的视场。</td>
            </tr>
        </table>

        <h2>页面最下方数据</h2>
        <table>
            <tr>
                <td lang="en">EFFL</td>
                <td>有效焦距</td>
            </tr>
            <tr>
                <td lang="en">WFNO</td>
                <td></td>
            </tr>
            <tr>
                <td lang="en">ENPD</td>
                <td></td>
            </tr>
            <tr>
                <td lang="en">TOTR</td>
                <td>光学系统第一面到像面的距离，亦即所有厚度之和</td>
            </tr>
        </table>

        <h2>操作数</h2>
        <table>
            <tr>
                <td lang="en">EFFL</td>
                <td>有效焦距</td>
            </tr>
            <tr>
                <td lang="en">TOTR</td>
                <td>系统总长</td>
            </tr>
            <tr>
                <td lang="en">OPGT</td>
                <td>控制<span lang="en">Op#</span>的<span lang="en">Target</span>大于某值</td>
            </tr>
            <tr>
                <td lang="en">OPLT</td>
                <td>控制<span lang="en">Op#</span>的<span lang="en">Target</span>小于某值</td>
            </tr>
            <tr>
                <td lang="en">TTHI</td>
                <td><span lang="en">Surf1</span>到<span lang="en">Surf2</span>间的厚度和（包括<span lang="en">Surf1</span>和<span lang="en">Surf2</span>）</td>
            </tr>
            <tr>
                <td lang="en">EFLX</td>
                <td>弧矢方向焦距</td>
            </tr>
            <tr>
                <td lang="en">EFLY</td>
                <td>子午方向焦距</td>
            </tr>
            <tr>
                <td>DMVA</td>
                <td>镜面直径</td>
            </tr>
            <tr>
                <td colspan="2">计算相关</td>
            </tr>
            <tr>
                <td lang="en">CONS</td>
                <td>提供一个常数值</td>
            </tr>
            <tr>
                <td lang="en">DIVI</td>
                <td>控制<span lang="en">Opt1/Opt2</span>的值等于目标值</td>
            </tr>
        </table>
        

        <h2>一些经验之谈</h2>
        <p>由于红外系统艾里斑较大，很容易设计到衍射极限，直接用波前做优化函数即可。</p>
        <p>想要去掉一块透镜，选择去掉承担光线偏折最小的一块，即光焦度最小、焦距最大的一块。</p>
        <p>一般控制垂轴色差，轴向色差随之减小</p>` },
  "note/optics/zemax/chapter2": { title: "光学设计", content: `<h1>光学系统像质评价</h1>

        <h2>像差分析</h2>
        <p>通常在分析某种像差特性时，均假定其他像差不存在，这样不但简化了数学模型，也排除了其他像差的干扰。</p>

        <p>完全消除像差是没有可能且没有必要的。</p>
        <b>像质评价</b>
        <p>确保光学系统满足预期性能的核心环节。</p>

        <table>
            <tr>
                <td rowspan="7">光学系统像质评价方法</td>
                <td rowspan="3">能量系统</td>
                <td>点列图</td>
            </tr>
            <tr>
                <td>包围圆能量曲线</td>
            </tr>
            <tr>
                <td>点扩散函数</td>
            </tr>
            <tr>
                <td rowspan="4">成像系统</td>
                <td>点列图</td>
            </tr>
            <tr>
                <td>光学传递函数（<span lang="en">MTF</span>曲线）</td>
            </tr>
            <tr>
                <td>畸变曲线</td>
            </tr>
            <tr>
                <td>波像差</td>
            </tr>
        </table>` },
  "note/optics/zemax/chapter3": { title: "激光原理", content: `` },
  "note/optics/zemax/chapter4": { title: "激光原理", content: `` },
  "note/optics/zemax/microscope": { title: "激光原理", content: `` },
  "note/optics/zemax/qaa": { title: "激光原理", content: `` },
  "note/optics/zemax/systemexplorer": { title: "激光原理", content: `` },
  "note/others.py/program": { title: "拉曼光谱", content: `<p><b>高光谱图像（hyperspectral image, HSI）</b>：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;由一系列波段图像组成的具有大量数据的三维图像，提供了非常丰富的空间和光谱信息。
        <br>
        <br>缺点：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;庞大的数据量给HSI的的存储与传输带来了沉重的负担。
        <br>
        <br>高光谱成像的目的：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;对场景的光谱反射率进行采样，收集具有两个空间维度(h, w)和一个光谱维度λ的3-D数据集，称为数据立方体(h, w， λ)
        <br>
        <br>重构的目的：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;根据测量值重构三维高光谱图像
        </p>


        <p><b>感知压缩（compression sensing, CS）理论</b>：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;一种超越传统Nyquist-Shannon采样定理的信号采集与重构框架。
        </p>

        <p><b>传统的扫描成像方法</b>：
        <br>
        <br>方法：
        <ul>
            <li>掸扫</li>
            <li>推扫</li>
            <li>光谱扫描</li>
        </ul>
        <br>缺点：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;扫描过程中可能出现运动伪影和照明效率不足，最终导致成像质量下降
        </p>

        <p><b>编码孔径快照光谱成像（Coded Aperture Snapshot Spectral Imaging, CASSI）</b>：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;一种高光谱快照成像系统，利用CS理论，通过随机线性投影将三维HSI形成二维快照测量。
        <br>&nbsp;&nbsp;&nbsp;&nbsp;CASSI能从单次曝光中快读获取动态场景的光谱图像，其所需的样品数量要远远少于基于扫描方法的光谱仪。相应地，需要一种优化算法来重建光谱场景。
        <br>&nbsp;&nbsp;&nbsp;&nbsp;CASSI系统的痛点在于如何提高从二维压缩测量中重建三维HSI的优化算法质量，这是一个不适定问题。
        <br>
        <br>方法：
        <ul>
            <li>基于模型驱动的方法</li>
            <li>基于数据驱动的方法</li>
        </ul>
        步骤：
            <ol><li>对高维光谱图像进行<b>编码降维采集</b></li>
                <li>对低维观测图像进行<b>解码升维重构</b></li></ol>
        </p>

        <hr>
        <p><b>编码降维压缩</b></p>
        <p>编码模板设计：在标准前向模型的基础上，对传统随机编码方式进行优化，以减少调制过程中的信息损失</p>
        <p>压缩感知理论</p>
        <p>奈奎斯特-香农采样定理</p>


        <hr>
        <p><b>解码升维重构</b></p>` },
  "note/others.py/raman": { title: "拉曼光谱", content: `<h1>拉曼光谱</h1>
        <h2>拉曼效应</h2>
        <p>当样本暴露到可见单色光下时，样本会吸收光线，大部分光线会透过样本，有一小部分光会被样本散射到各个方向。从垂直于入射光的方向观察散射光，如果散射光的频率与入射光一样，这种散射称为瑞利散射；总散射光中大约有百分之一频率不同与入射光，这部分被称为拉曼散射。</p>
        <p>拉曼散射可以看作双光子过程</p>

        <h2>光谱性质</h2>
        <p>拉曼光谱是一种无损的分析技术，是基于光和材料内化学键的相互作用而产生的，可以提供样品化学结构、相和状态、结晶度以及分子相互作用的详细信息。</p>
        <p>拉曼散射是一种光散射技术。激光光源的高强度入射光被分子散射时，大多数散射光与入射激光具有相同的波长，不能提供有用的信息这种散射称为<b>瑞利散射</b>。还有极小一部分散射光波长与入射光不同，其波长的改变由测试样品（所谓散射物质）的化学结构所决定，这部分散射光被称为<b>拉曼散射</b>。</p>
        <p><ul>
            <li>Rayleigh散射：弹性碰撞，无能量交换，只改变方向</li>
            <li>Raman散射：非弹性碰撞，能量交换且改变方向</li>
        </ul></p>
        <p>拉曼光谱属于<b>分子振动和旋转光谱</b>。</p>
        <p>影响拉曼光谱质量的主要因素又有：<b>噪音、荧光背景、光谱仪杂散光</b>等。</p>
        
        
        
        <h3>基线</h3>
        <p>拉曼光谱的背景基线主要由荧光和杂散光等构成</p>
        <p><b>特点</b>：在一定波长范围内连续平滑</p>


        <h2>数据处理</h2>
        <h3>去噪</h3>
        <h3>基线校正</h3>
        <p>基线校正算法主要包括<b>函数拟合、小波变换、经验模态分解（EMD）、偏最小二乘法</b>等。</p>
        <p><b>自适应迭代重加权最小二乘（airPLS）</b>：将最小二乘平滑与基线估计中的非平滑惩罚相结合，被认为是最广泛使用的基线校正算法。</p>
        <h3>寻峰</h3>

        <h2>光谱数据处理方法及多变量解析</h2>

        <h2>思路</h2>
        <p>1.4.1 光谱数据预处理
            采用基线校正（Basline，BL）
            高斯滤波（Gaussian Filter，GF）
            归一化（Normalization，NL）
            标准正态量变换（Standard Normal Variate，SNV）
            卷积平滑（Savitzky-Golay Smthooing，SG）
            去趋势化（Detrending，DFA）方法对拉曼光谱进行预处理。
            <br>
            1.4.2 拉曼光谱特征波数优选方法
            回归系数法（Regression Coefficient，RC），又称PLS-β系数法，是应用较为广泛的一种特征波长提取方法[24]，来源于偏最小二乘法建模过程。
            <br>
            1.4.3 模型建立方法
            主成分回归（Principal Components Regression，PCR），通过提取大量光谱信息中最主要的变量，降低信息维度，从而减少信息重叠[25]，并且能在一定程度上滤除噪声，可以较好地解决多元线性回归中的多重共线性问题。
            <br>
            偏最小二乘回归（Partial least squares regression，PLSR），一种多自变量X对单因变量或多因变量Y的回归建模方法，通过对数据矩阵进行降维处理，将原变量转换为相互正交的主因子，尽量提取自变量和因变量中的主成分，使二者相关性最大。PLSR融合了主成分分析和典型相关分析等的特点，可以简化光谱信息、解决变量的多重相关性问题[26]，建立鲁棒性较好的定量分析模型。本研究以光谱数据作为X变量，理化值数据作为Y变量。
            <br>
            1.4.4 模型评价指标
            以校正集相关系数（Correlation coefficient of calibration set，Rc）、校正集均方根误差（Rootmean square error of calibration set，RMSEC）、预测集相关系数（Correlation coefficient of prediction set，Rp）、预测集均方根误差（Rootmean square error of prediction set，RMSEP）和剩余预测偏差（Residual predictive deviation，RPD）来评价模型建立的效果。</p>` },
  "note/politics/cpc/chapter1": { title: "党", content: `<h1>中国共产党</h1>

        <b>两会</b>
        <ul>
            <li>中华人民共和国全国代表大会</li>
            <li>中国人民政治协商会议</li>
        </ul>
        
        <b>四个自信</b>
        <ul>
            <li>道路自信</li>
            <li>理论自信</li>
            <li>制度自信</li>
            <li>文化自信</li>
        </ul>

        <b>党的成立日期</b>
        <p>1921年7月23日</p>


        <b>入党誓词</b>
        <p>我志愿加入中国共产党，拥护党的纲领，遵守党的章程，履行党员义务，执行党的决定，严守党的纪律，保守党的秘密，对党忠诚，积极工作，为共产主义奋斗终身，随时准备为党和人民牺牲一切，永不叛党。</p>` },
  "note/politics/cpc/chapter7": { title: "党", content: `<h1>第七章 党的纪律</h1>
        <p>党的纪律是党的各级组织和全体党员必须遵守的行为规则，是维护党的团结统一、完成党的任务的保证。党组织必须严格执行和维护党的纪律，共产党员必须自觉接受党的纪律的约束。</p>` },
  "note/politics/maozedongthought/chapter1": { title: "毛泽东思想", content: `<h1>毛泽东思想及其历史地位</h1>
        <h2>第一节 毛泽东思想的形成和发展</h2>
        <h3>一、毛泽东思想形成发展的历史条件</h3>
        <p><b>毛泽东思想形成和发展的</b>
            <ul>
                <li><b>实践基础</b>：中国共产党领导人民进行革命和建设的成功实践。</li>
                <li><b>思想基础</b>：马列主义在中国的广泛传播</li>
            </ul>

        </p>
        <h3>二、毛泽东思想形成发展的过程</h3>
        <p>
            <ul>
                <li><b>萌芽时期</b>：
                    <ul>
                        <li>时间：<b>第一次国内革命战争（国民革命或大革命）</b>时期</li>
                        <li>代表作：<b>《中国社会各阶级的分析》、《湖南农民运动考察报告》</b></li>
                    </ul></li>
                <li><b>初步形成时期</b>：
                <ul>
                    <li>标志：提出并深入阐述的农村包围城市、武装夺取政权思想</li>
                    <li>代表作<b>《中国的红色政权为什么能够存在？》、《井冈山的斗争》、《星星之火，可以燎原》、《反对本本主义》</b></li></ul>
                </li>
                <li><b>得到多方面展开而区域成熟</b>
                <ul>
                    <li>时间：遵义会议之后</li>
                </ul></li>
                <li><b>毛泽东思想确立为党必须长期坚持的指导思想</b>：
                <ul>
                    <li>1945年中共七大通过的《中国共产党党章》</li>
                </ul></li>
            </ul>
        </p>


        <p></p>
    
        <h2>第二节 毛泽东思想的主要内容和活的灵魂</h2>
        <h3>一、毛泽东思想的主要内容</h3>
        <p><b>毛泽东思想的主要内容</b>：
        <ul>
            <li>新民主主义革命理论</li>
            <li>社会主义革命和社会主义建设理论</li>
            <li><b>革命军队建设和军事战略的理论</b>：
            </li>
            <li>政策和策略的理论</li>
            <li>思想政治工作和文化工作的理论</li>
            <li>党的建设理论</li>
        </ul>
        </p>

        <h3>二、毛泽东思想的活的灵魂</h3>
        <p><b>毛泽东思想的活的灵魂</b>：
        <ul>
            <li><b>实事求是</b>：毛泽东思想的<b>基本点</b>和<b>精髓</b>
            <ul>
                <li>“实事”：客观存在的一切事物</li>
                <li>“求”：研究</li>
                <li>“是”：客观事物的内部联系，即规律性</li>
            </ul></li>
            <li><b>群众路线</b>：党的生命线和根本工作路线</li>
            <li><b>独立自主</b></li>
        </ul>


        <p>
            <ul>
                <li><b>《矛盾论》与《实践论》</b>：深刻阐述了理论对于实践的依赖关系，以及矛盾的普遍性和特殊性的关系，对党的思想路线做了系统的哲学论证。</li>
                <li><b>《反对本本主义》（独立自主）</b>：党内第一篇反对教条主义的文章</li>
            </ul>
        </p>



        <h2>第三节 毛泽东思想的历史地位</h2>
        <h3>一、马克思主义中国化时代化的第一个重大成果理论</h3>
        <p>毛泽东思想是<b>马克思主义中国化时代化第一次历史性飞跃的理论成果</b>。</p>` },
  "note/politics/maozedongthought/chapter2": { title: "毛泽东思想", content: `<h1>第二章 新民主主义革命理论</h1>
        
        <h2>第一节 新民主主义革命理论形成的依据</h2>
        <h3>一、近代中国国情和中国革命的时代特征</h3>
        <p><b>近代中国社会的基本国情和社会性质</b>：半殖民地半封建社会</p>
        <p><b>近代中国的主要社会矛盾</b>：帝国主义和中华民族的矛盾（最主要）、封建主义和人民大众的矛盾</p>
        <p><b>近代中国的社会性质和主要矛盾</b>决定了新民主主义革命仍然是<b>资产阶级民主革命</b>的性质</p>
        
        <p><b>中国资产阶级民主革命时代背景发生根本转换的标志</b>：俄国十月革命</p>
        <p><b>中国新民主主义革命的开端</b>：五四运动</p>
        
        
        <h3>二、新民主主义革命理论的实践基础</h3>
        <p>党成立初期，首先把工作重心放在<b>城市</b></p>
        <p>秋收起义失败后，毛泽东建立了井冈山革命根据地
            <ul><li>提出<b>工农武装割据思想</b></li>
            <li>初步形成了农村包围城市，武装夺取政权的革命道路理论</li></ul>
        </p>
        <p><b>抗日战争时期</b>：我党对中国革命的规律性认识逐渐趋于成熟，逐步形成系统化的适合中国国情的新民主主义革命理论</p>
        <p>1949年，毛泽东在<b>《论人民民主专政》</b>中队新民主主义革命的基本经验作了集中概括，丰富和发展了马克思主义关于无产阶级领导人民革命的理论</p>


        <h2>第二节 新民主主义革命的总路线和基本纲领</h2>
        <h3>一、新民主主义革命的总路线</h3>
        <p><b>革命的首要问题</b>：分清敌友</p>
        <p><b>革命的首要对象</b>：帝国主义</p>
        <p><b>近代中国贫困落后和一切灾祸的总根源</b>：帝国主义发动的一系列侵略战争</p>
        <p><b>革命的对象</b>：三座大山，即帝国主义、封建主义、官僚资本主义</p>
        <p><b>新民主主义革命的动力</b>：无产阶级（工人阶级）、农民阶级、城市小资产阶级和名族资产阶级</p>
        <p><b>中国革命最基本的动力</b>：无产阶级（工人阶级）</p>
        <p><b>中国革命的主力军</b>：农民</p>

        <p><b>中国革命的中心问题/新民主主义革命理论的核心问题</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;无产阶级的领导权
        <br>&nbsp;&nbsp;&nbsp;&nbsp;无产阶级及其政党对中国革命的领导权不是自然而然得来的，而是在与资产阶级争夺领导权的斗争中实现的。</p>
        
        <p><b>区分新民主主义革命和旧民主主义革命的根本标志</b>：革命的领导权是无产阶级的还是资产阶级的</p>
        <p><b>新民主主义革命比之旧民主主义革命的新的内容与特点</b>：
        <ul>
            <li>处于世界无产阶级社会主义革命的时代，是世界无产阶级社会主义革命的一部分</li>
            <li>革命的领导力量：中国无产阶级及其先锋队——中国共产党</li>
            <li>革命的指导思想：马克思列宁主义</li>
            <li>革命的前途是社会主义而非资本主义</li>
        </ul>
        </p>




        <h3>二、新民主主义的基本纲领</h3>
        <p><b>政治纲领</b>：
            <ul>
                <li>推翻帝国主义和封建主义的统治，建立一个无产阶级领导的、以工农联盟为基础的、各革命阶级联合专政的新民主主义的共和国</li>
            </ul></p>
        <p><b>经济纲领</b>：
        <ul>
            <li>没收封建地主阶级的土地归农民所有</li>
            <li>没收官僚资产阶级的垄断资本主义归新民主主义国家所有</li>
            <li>保护农民工商业（极具特色）</li>
        </ul>
        </p>

        <h2>第三节 新民主主义革命的道路和基本经验</h2>
        <h3>一、新民主主义革命的道路</h3>
        <h3>二、新民主主义革命的三大法宝</h3>
        <p><b>新民主主义革命的三大法宝</b>：<b>武装斗争</b>、<b>统一战线</b>、<b>党的建设</b>，为毛泽东于<b>《〈共产党人〉发刊词》</b>提出</p>
       
        <p><b>武装斗争</b>：
        <ul>
            <li>建设新型军队的根本原则（保持人民军队无产阶级性质和建军宗旨的根本前提，毛泽东建军思想的核心）：<b>坚持党对军队的绝对领导</b></li>
            <li>人民军队的唯一宗旨（建设新型人民军队的基本前提）：<b>全心全意为人民服务</b></li>
        </ul></p>

        <p>新民主主义革命时期，党领导的统一战线先后经历了<b>第一次国共合作的统一战线、工农民主统一战线、抗日民族统一战线、人民民主统一战线</b>等几个时期</p>
        <p>党领导的革命统一战线包含两个联盟：
            <ul>
                <li>工人阶级同农民阶级、广大知识分子及其他劳动者的联盟，主要是<b>工农联盟</b>，<b>是统一战线的基础，是基本的、主要的</b>。</li>
                <li>工人阶级和非劳动人民的联盟，主要是与民族资产阶级的联盟。</li>
            </ul>
        </p>

        <p>党建立、巩固和发展统一战线的实践经验：
            <ul>
                <li>对待资产阶级尤其是民族资产阶级的策略是：<b>既联合又斗争</b></li>
                <li>方针：区别对待</li>
                <li>原则：独立自主</li>
            </ul>
        </p>` },
  "note/politics/maozedongthought/chapter3": { title: "毛泽东思想", content: `<h1>第三章 社会主义改造理论</h1>

        <h2>第一节 从新民主主义到社会主义的转变</h2>
        <h3>一、新民主主义社会是一个过渡性的社会</h3>
        <p>新民主主义社会不是一个独立的社会形态，而是由新民主主义向社会主义转变的<b>过渡性社会形态</b>。</p>
        <p>新民主主义社会存在五种经济成分
            <ul>
                <li><b>社会主义性质的国营经济</b></li>
                <li><b>半社会主义性质的合作社经济</b></li>
                <li><b>农民和手工业者的个体经济</b></li>
                <li><b>私人资本主义经济</b></li>
                <li><b>国家资本主义经济</b></li>
            </ul>
        </p>
        <p>社会主义因素与资本主义因素之间的关系：限制与反限制、改造与反改造</p>



        <h3>二、党在过渡时期的总路线及其依据</h3>
        <h4>1.党在过渡时期的总路线的提出</h4>
        <p>中国实现内部工业化只能依靠<b>内部积累</b></p>


        <p><ul>
            <li>1949年3月，<b>党的七届二中全会</b>提出了使中国“稳步地由农业国转变为工业国，由新民主主义国家转变为社会主义国家”即“两个转变”同时并举的思想。</li>
            <li>1953年12月，毛泽东《为动员一切力量把我国建设成为一个伟大的社会主义国家而斗争——关于党在过渡时期总路线的学习和宣传提纲》对过渡时期的总路线作出了完整而准确的表述</li>
        </ul></p>

        <p><b>党在过渡时期总路线</b></p>
        <p>主要内容：<b>一化三改</b>
        <br>&nbsp;&nbsp;&nbsp;&nbsp;一化（主体）：<b>社会主义工业化</b>
        <br>&nbsp;&nbsp;&nbsp;&nbsp;三改（三大改造）：<ul>
            <li>对农业的社会主义改造</li>
            <li>对手工业的社会主义改造</li>
            <li>对资本主义工商业的社会主义改造</li>
        </ul>
        </p>
        <p>特征：社会主义建设和社会主义改造并举</p>
        


        <h2>第二节 社会主义改造道路和历史经验</h2>
        <h3>一、适合中国特点的社会主义改造道路</h3>
        <h4>1.农业的社会主义改造</h4>
        <p>
            <ul><li>原则：<b>自愿互利、典型示范、国家帮助</b></li>
                <li>方针：<b>坚持积极领导、稳步前进</b></li>
                <li>发展阶段：
                    <ul>
                        <li>互助社：<b>社会主义萌芽性质</b></li>
                        <li>初级社：在互助组的基础上，以个体农民自愿组织起来的<b>半社会主义性质</b>的集体经济组织。</li>
                        <li>高级社：我国农业合作化过程中由初级社发展而成的<b>社会主义性质</b>的集体经济组织。</li>
                    </ul></li>
            </ul>
        </p>

        <h4>2.对手工业的社会主义改造</h4>
        <p>
            <ul>
                <li>方针：积极领导、稳步前进</li>
                <li>步骤：
                    <ol>
                        <li>办手工业供销小组（没有改变生产资料的私有制，具有社会主义萌芽性质）</li>
                        <li>办手工供销合作社（半社会主义性质）</li>
                        <li>建立手工业生产合作社（民主管理和按劳分配原则，社会主义）</li>
                    </ol>
                </li>
            </ul>
        </p>
        <h4>3.对资本主义工商业的社会主义改造</h4>
        <p>
            <ul>
                <li>方针：和平赎买</li>
                <li>步骤：
                    <ol>
                        <li>实行初级形式的国家资本主义</li>
                        <li>实行个别企业的公司合营（半社会主义性质）</li>
                        <li>实行全行业的公私合营（社会主义国营性质）</li>
                    </ol>
                </li>
            </ul>
        </p>
        <p>民族资产阶级的两面性：
            <ul>
                <li>既有剥削工人取得利润的一面</li>
                <li>又有拥护中国共产党的领导、拥护宪法、愿意接受社会主义改造的一面</li>
            </ul>
        </p>
        
        <p>
            <ul>
                <li>初级形式的国家资本主义：委托加工、计划订货、统购包销、经销代销</li>
                <li>高级形式的国家资本主义：公私合营
                    <ul>
                        <li>个别企业的公私合营</li>
                        <li>全行业的公私合营</li>
                    </ul>
                </li>
            </ul>
        </p>

        <p><b>四马分肥</b>：企业的利润按<b>国家所得税、企业公积金、工人福利费、资方红利</b>四个方面进行分配。</p>
    
    <ul>
        <li>1956年，三大改造基本完成，<b>标志着阶级剥削制度的结束和社会主义基本制度的确立。</b></li>
        <li>1949年9月，第一届全国人大：
            <ul>
                <li><b>《中华人民共和国宪法》</b>制定及颁布实施
                <ul>
                    <li>根本政治制度：<b>人民代表大会制度</li>
                </ul></li>
            </ul>
        </li>
    </ul>` },
  "note/politics/maozedongthought/chapter4": { title: "毛泽东思想", content: `<h1>第四章 社会主义建设道路初步探索的理论成果</h1>

        <h2>第一节 初步探索的重要理论成果</h2>
        <h3>一、调动国内外一切积极因素为社会主义事业服务</h3>
        <p>标志着党探索中国社会主义建设道路的良好开端的文章：<b>《论十大关系》</b></p>
        <p>建设社会主义的根本思想：<b>根据本国情况走自己的道路</b></p>
        <p>建设社会主义的基本方针：<b>调动国内外一切积极因素为社会主义事业服务</b></p>
        <p><b>十大关系</b>：
        <ul>
            <li>重工业和轻工业、农业的关系</li>
            <li>沿海工业和内地工业的关系</li>
            <li>经济建设和国防建设的关系</li>
            <li>国家、生产单位和生产者个人的关系</li>
            <li>中央和地方的关系</li>
            <li>汉族和少数民族的关系</li>
            <li>党和非党的关系</li>
            <li>革命和反革命的关系</li>
            <li>是非关系</li>
            <li>中国和外国的关系</li>
        </ul></p>

        <h3>二、正确认识和处理社会主义社会矛盾的思想</h3>


        <p>社会主义国家政治生活的主题：<b>正确处理人民内部矛盾的问题</b></p>
        <p>
            <ul>
                <li>土地改革基本完成后的主要矛盾：工人阶级和资产阶级的矛盾</li>
                <li>社会主义改造完成后的主要矛盾：人民队经济文虎哈迅速发展的需要同当前经济文化不能满足人民需要之间的矛盾（中共八大）</li>
            </ul>
        </p>

        <p><b>社会主义的基本矛盾</b>：
        <ul>
            <li>生产关系和生产力之间的矛盾、上层建筑和经济基础之间的矛盾</li>
            <li>是在人民根本利益一致基础上的矛盾，是非对抗性的。</li>
            <li>具有“又相矛盾又相适应”的特点</li>
        </ul></p>

        <p><b>社会矛盾</b>：
        <ul>
            <li><b>敌我矛盾</b>：对抗性矛盾，解决方法是分清敌我的问题</li>
            <li><b>人民内部矛盾</b>：非对抗性矛盾，解决方法是分清是非的问题</li>
        </ul>
        </p>

        <p>正确处理敌我矛盾的方法：<b>专政</b></p>

        <p>正确处理人民内部矛盾：
            <ul>
                <li><b>总方针</b>：<b>用民主的方法解决人民内部矛盾</b></li>
                <li>政治思想领域：<b>“团结——批评——团结”方针</b></li>
                <li>物质利益分配方面：<b>统筹兼顾、适当安排方针</b></li>
                <li>人民群众和政府机关的矛盾：<b>民主集中制原则</b></li>
                <li>科学文化领域的矛盾：<b>“百花齐放、百家争鸣”方针</b></li>
                <li>共产党和民主党派的矛盾：<b>在坚持社会主义道路和共产党领导的前提下“长期共存、互相监督”的方针</b></li>
            </ul>
        </p>

        <h3>三、走中国工业化道路的思想</h3>
        <p>
            <ul>
                <li><b>三个主体，三个补充思想（陈云）</b></li>
                <li><b>两参一改三结合（毛泽东）</b>
                <ul>
                    <li>一改：改革不合理的规章制度</li>
                </ul></li>
            </ul>
        </p>

        <h3>四、初步探索的其他理论成果</h3>
        <p>两种劳动制度、两种教育制度（刘少奇）</p>` },
  "note/politics/maozedongthought/chapter5": { title: "毛泽东思想", content: `<h1>第五章 中国特色社会主义理论体系的形成发展</h1>
        <h2>第一节 中国特色社会主义理论体系形成发展的社会主义历史条件</h2>
        <p>20世纪70年代，时代主题是<b>和平与发展</b></p>


        <p>以胡锦涛同志为主要代表的中国共产党人，创造性地回答了<b>“实现什么样的发展、怎样发展”</b>这一重大问他</p>

        <p><ul>
            <b>邓小平理论（开篇之作）</b>
            <li>1978年12月，党的十一届三中全会
                <ul>
                    <li>重新确立了<b>实事求是</b>的思想路线</li>
                    <li>彻底否定了“以阶级斗争为纲”的错误理论和实践</li>
                    <li>确定把全党工作的着重点转移到社会主义现代化建设上来</li>
                    <li>做出改革开放的重大决策</li>
                </ul>
            </li>
            <li>1982年，党的十二大
                <ul>
                    <li>走自己的道路，建设有中国特色的社会主义社会</li>
                </ul>
            </li>
            <li>1987年，党的十三大
                <ul>
                    <li>第一次比较系统的论述了我国<b>社会主义初级阶段理论</b></li>
                    <li>明确概括和全面阐发了党的<b>“一个中心，两个基本点”</b>的基本路线</li>
                </ul>
            </li>
            <li>1992年初，南方谈话：
                <ul>
                    <li>对社会主义本质做出了总结性的理论概括</li>
                </ul>
            </li>
            <li>1992年，党的十四大
                <ul>
                    <li>明确把建立社会主义市场经济体制作为我国经济体制改革的目标</li>
                </ul>
            </li>
            <li>1997年，党的十五大
                <ul>
                    <li>正式提出“邓小平理论”这一概念</li>
                    <li>深刻阐述了邓小平理论的历史地位和指导意义</li>
                    <li>进一步论述了邓小平对这一理论的创立做出的独创性贡献</li>
                    <li>将邓小平理论<b>确立为党的指导思想并写入党章</b></li>
                </ul>
            </li>
            <li>1999年
                <ul><li>宪法修正案将邓小平理论载入宪法</li></ul>
            </li>
            <hr>
            <b>三个代表（江泽民）（跨世纪发展）</b>
            <li>2000年2月15日
                <ul><li>江泽民<b>在广东考察工作</b>时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，<b>首次对“三个代表”进行了比较全面的阐述</b></li></ul>
            </li>
            <li>2000年10月，十五届五中全会
                <ul><li>就“改进党的作风”发表重要讲话</li></ul>
            </li>
            <li>2002年11月，党的十六大
                <ul><li>全面阐述了“三个代表”重要思想形成的时代背景、历史地位、精神实质和指导意义</li>
                <li>将“三个代表”重要思想同马克思主义、毛泽东思想和邓小平理论一道确立为党必须长期坚持的指导思想，并<b>写入党章</b>，实现了我们党指导思想的又一次与时俱进</li></ul>
            </li>
            <hr>
            <b>科学发展观（胡锦涛）（新世纪新阶段的新发展）</b>
            <li>2003年10月，党的十六届三中全会
                <ul>
                    <li>第一次提出科学发展观</li>
                </ul>
            </li>
            <li>2007年，党的十七大
                <ul>
                    <li>把科学发展观<b>写入党章</b>，科学发展观进一步走向成熟</li>
                </ul>
            </li>
            <hr>
            <b>习近平新时代特色社会主义理论</b>
            <li>2017年，党的十九大
                <ul>
                    <li>将习近平新时代特色社会主义理论<b>确立为党的指导思想并写入党章</b></li>
                </ul>
            </li>
            <li>2018年，十三届全国人大一次会议
                <ul>
                    <li>将习近平新时代特色社会主义思想<b>写入宪法</b></li>
                </ul>
            </li>
        </ul></p>


        <p><b>习近平新时代特色社会主义理论</b>：
        <ul>
            <li>是全党全国人民为实现中华民族伟大复兴而奋斗的<b>行动指南</b></li>
        </ul></p>` },
  "note/politics/maozedongthought/chapter6": { title: "毛泽东思想", content: `<h1>第六章 邓小平理论</h1>
        <h2>第一节 邓小平理论首要的基本的理论问题与精髓</h2>
        <p><b>首要的基本的理论问题</b>：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;在中国这个经济文化比较落后的国家建设什么样的社会主义、怎样建设社会主义
            <br>搞清楚这个问题的关键是：要在坚持社会主义基本制度的基础上进一步认清社会主义的本质</p>
    
        <p>党在社会主义初级阶段的基本路线：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;领导和团结全国各族人民，以经济建设为中心，坚持四项基本原则，坚持改革开放，自力更生，艰苦创业，为把我国建设成为富强、民主、文明的社会主义现代化国家而奋斗
            <ul>
                <li>以经济建设为中心：回答了<b>社会主义的根本任务问题</b></li>
                <li>坚持四项基本原则：回答了<b>解放和发展生产力的政治保证问题</b></li>
                <li>坚持改革开放：回答了<b>社会主义的发展动力和外部条件问题</b></li>
            </ul>
        </p>

        <p>三步走：
            <ol><li>到1990年</li>
            <li>到20世纪末，使国民生产总值再增长一倍，人民生活达到<b>小康</b>水平</li>
        <li>到21世纪中叶</li></ol>
        </p>
        <p>为了更好实现“三步走”现代化发展战略，邓小平提出了<b>以重点带动全局的思想</b>，三个战略重点：
        <ul>
            <li>农业</li>
            <li>能源和交通</li>
            <li>教育和科学</li>
        </ul></p>` },
  "note/politics/maozedongthought/maothought": { title: "毛泽东思想", content: `<h1>几何光学</h1>

        <h2>目录</h2>
        <a href="/note/politics/maozedongthought/chapter1">第一章</a>
        <br>
        <a href="/note/politics/maozedongthought/chapter2">第二章</a>
        <br>
        <a href="/note/politics/maozedongthought/chapter3">第三章</a>
        <br>
        <a href="/note/politics/maozedongthought/chapter4">第四章</a>
        <br>
        <a href="/note/politics/maozedongthought/chapter5">第五章</a>` },
  "note/politics/marxism/chapter1": { title: "马克思主义", content: `<h1>马克思主义哲学</h1>

        <b>哲学的基本问题</b>
        <p>恩格斯：“全部哲学，特别是近代哲学的重大的基本问题，是<b>思维（精神）和存在（物质）的关系</b>问题.”</p>

        <p>哲学的基本问题主要包括两方面的内容：</p>
        <ul>
            <li>存在和思维、物质和意识谁为本原的问题，即何者为<b>第一性</b>的问题.</li>
            <li>存在和思维、物质和意识是否具有<b>同一性</b>的问题，即思维能否正确反映存在，人能否认知或彻底认识世界的问题.</li>
        </ul>

        <b>哲学流派</b>
        <p>按照物质和意识何者为第一性，分为唯物主义和唯心主义.</p>
        <table>
            <tr>
                <td>唯物主义：物质具有第一性.</td>
            </tr>
            <tr>
                <td>唯心主义：意识具有第一性.</td>
            </tr>
        </table>

        <p>关于什么是物质，唯物主义继续划分：</p>
        <table>
            <tr>
                <td rowspan="2">旧唯物主义/半截子的唯物/不彻底的唯物</td>
                <td>古代朴素唯物主义/古典唯物主义</td>
                <td>具体的物质形态</td>
            </tr>
            <tr>
                <td>近代形而上学唯物主义\\(\\gt\\)机械唯物主义</td>
                <td>物质的微观结构层次</td>
            </tr>
            <tr>
                <td colspan="2">辩证唯物主义/马克思主义的唯物主义</td>
                <td>一切客观实在</td>
            </tr>
        </table>
        <p>旧唯物主义的“半截子”与“不彻底”，是指其在自然观上唯物，但是在历史观上唯心.</p>
        <p>辩证唯物主义认为的物质包括旧唯物主义包括的物质，但是它认可的“人类社会历史”不被其他两派认可.</p>
        <p>辩证唯物主义是第一个将“人类社会历史”纳入物质范畴的学派.</p>
        <p>唯物史观就是将历史当成物质去研究而得出的结论.</p>

        <b>马克思在哲学上的两大历史贡献</b>
        <ul>
            <li>创立了唯物史观</li>
            <li>形成了辩证唯物主义</li>
        </ul>

        <p>关于什么是精神，唯心主义分为两派：</p>
        <table>
            <tr>
                <td>主观唯心</td>
                <td>本我的意识</td>
                <td>王阳明、慧能</td>
            </tr>
            <tr>
                <td>客观唯心</td>
                <td>独立于人之外的精神</td>
                <td></td>
            </tr>
        </table>

        <p>关于物质和意识是否具有同一性，哲学家又分为了两派：</p>
        <table>
            <tr>
                <td>可知论（唯物主义，唯心主义）</td>
                <td>有统一性</td>
            </tr>
            <tr>
                <td>不可知论（二元论，又称不彻底的唯心）</td>
                <td>没有同一性</td>
            </tr>
        </table>


        <h3>哲学的重要问题——世界是怎样存在的</h3>
        <table>
            <tr>
                <td>形而上学</td>
                <td>世界是孤立的、片面的、静止的、无矛盾的</td>
            </tr>
            <tr>
                <td>辩证法</td>
                <td>世界是联系的、全面的、发展的、有矛盾的</td>
            </tr>
        </table>

        <div class="Card-Definition">
            <b>哲学范畴间的关系</b>
            <ul>
                <li>不可分割</li>
                <li>对立统一、辩证统一、斗争同一、矛盾关系</li>
            </ul>
        </div>


        <h2>唯物论</h2>
        <h3>物质的范畴</h3>
        <p>恩格斯：“物、物质无非是各种物的总和，而这个概念就是从这一总和中抽象出来的.”</p>
        <p>物质是不依赖于人的意识而存在，并能为人类的意识所反映的客观实在.</p>
        <p>客观实在性是物质的<b>共同特性</b>.</p>

        <h3>物质和运动</h3>
        <p>运动是标志一切事物和现象的变化及其过程的哲学范畴，是物质的<b>存在方式</b>与<b>根本属性</b>.</p>
        <b>物质和运动的关系</b>
        <p>不可分割</p>
        <b>运动即为变化</b>

        <h3>运动和静止</h3>
        <div class="Card-Definition">
            <b>相对静止</b>
            <p>物质运动在一定条件下的稳定状态.</p>
            <p>相对静止包括两种状态：</p>
            <ul>
                <li>空间的相对位置暂时不变</li>
                <li>事物的根本性质暂时不变</li>
            </ul>
        </div>
        
        <div class="Card-Property">
            <b>运动和静止的关系</b>
            <p>无条件的绝对运动与有条件的相对静止构成<b>对立统一</b>的关系.</p>
        </div>

        <h3>时间和空间</h3>
        <div class="Card-Definition">
            <b>时间</b>
            <p>物质运动的持续性、顺序性，特点是一维性.</p>
            <b>空间</b>
            <p>物质运动的广延性、伸张性，特点是三维性.</p>
        </div>

        <p>时间和空间是运动着的物质的基本存在形式.</p>` },
  "note/politics/marxism/chpater0": { title: "马克思主义", content: `<h1>导论</h1>

        <h2>马克思主义的构成</h2>
        <p>恩格斯在《反社林论》中将马克思主义分为三个部分：</p>
        <table>
            <tr>
                <td>划分</td>
                <td>地位</td>
                <td>诞生标志</td>
            </tr>
            <tr>
                <td>马克思主义哲学</td>
                <td>基础与方法</td>
                <td>《德意志意识形态》</td>
            </tr>
            <tr>
                <td>马克思主义政治经济学</td>
                <td>主体理论内容</td>
                <td>《资本论》</td>
            </tr>
            <tr>
                <td>科学社会主义</td>
                <td>目的与归宿</td>
                <td>《共产党宣言》</td>
            </tr>
        </table>
        <p>《共产党宣言》的发表也标志着整个马克思主义的诞生.</p>

        <table>
            <tr>
                <td rowspan="5">马克思主义哲学</td>
                <td>划分</td>
                <td>研究问题</td>
            </tr>
            <tr>
                <td>辩证唯物论</td>
                <td>世界是什么</td>
            </tr>
            <tr>
                <td>唯物辩证法</td>
                <td>世界是怎样存在的</td>
            </tr>
            <tr>
                <td>认识论</td>
                <td>如何认识世界</td>
            </tr>
            <tr>
                <td>唯物史观</td>
                <td>人类社会历史发展规律</td>
            </tr>
        </table>

        <h2>马克思主义的基本立场、基本观点、基本方法</h2>
        <table>
            <tr>
                <td>基本立场</td>
                <td class="tbtext">
                    <p>马克思主义以无产阶级的解放和全人类的解放为己任，以人的自由而全面发展为美好目标，以人民为中心，坚持一切为了人民，一切依靠人民，全心全意为人民服务.</p>
                </td>
            </tr>
            <tr>
                <td>基本观点</td>
                <td class="tbtext">是关于自然、社会和人类思维发展一般规律的科学认识，是对资本主义社会和社会主义社会发展规律的科学认识，是对人类思想成果和社会实践经验的科学总结.</td>
            </tr>
            <tr>
                <td>基本方法</td>
                <td class="tbtext">是建立在<b>辩证唯物主义</b>和<b>历史唯物主义</b>世界观和方法论的基础上，指导我们正确认识世界和改造世界的思想方法和工作方法.</td>
            </tr>
        </table>

        <h2>马克思主义的创立</h2>
        
        <p><b>世界上第一个无产阶级政党</b>是“共产主义者同盟”.</p>

        <h3>马克思主义产生的社会根源、阶级基础和时代背景</h3>
        <table>
            <tr>
                <td>社会根源（时代背景）</td>
                <td class="tbtext">资本主义生产方式在西欧已经有了相当的发展.</td>
            </tr>
            <tr>
                <td>阶级基础（实践基础）</td>
                <td class="tbtext">无产阶级在反抗资产阶级剥削和压迫的斗争中，逐步走向自觉，并迫切渴望科学的理论指导.</td>
            </tr>
            <tr>
                <td>思想渊源</td>
                <td class="tbtext">德国古典哲学、英国古典政治经济学、英法空想社会主义.</td>
            </tr>
        </table>

        <h2>马克思主义的发展</h2>
        <p>马克思主义发展的<b>途径</b>是：本土化、时代化.</p>
        <p><b>一国胜利论</b>（列宁）：资本主义发达国家已经发展到帝国主义阶段，经济政治发展的不平衡已成为资本主义发展的绝对规律，社会主义革命可能在一国或数国首先发生并取得胜利.</p>


        <h2>著作总结</h2>
        <table>
            <tr>
                <td>《德法年鉴》（期刊）</td>
                <td>马克思、恩格斯</td>
                <td class="tbtext">
                    <p>马克思和恩格斯在《德法年鉴》上分别发表了两篇文章，标志着马克思和恩格斯的<b>“两个转变”</b>.</p>
                    <p>“两个转变”即从唯心主义向唯物主义转变，从革命民主主义向共产主义转变，这为马克思、恩格斯创立自己的理论奠定了思想前提.</p>
                </td>
            </tr>
            <tr>
                <td>《关于费尔巴哈的提纲》</td>
                <td>马克思</td>
                <td class="tbtext">首次确立了科学的实践观.</td>
            </tr>
            <tr>
                <td>《帝国主义是资本主义的最高阶段》</td>
                <td>列宁</td>
                <td class="tbtext">《资本论》的直接继续，指出帝国主义是无产阶级革命的前夜.</td>
            </tr>
            <tr>
                <td>《论欧洲联邦口号》</td>
                <td>列宁</td>
                <td class="tbtext">首次明确提出“一国胜利论”.</td>
            </tr>
            <tr>
                <td>《无产阶级革命的军事纲领》</td>
                <td>列宁</td>
                <td class="tbtext">进一步发挥了“一国胜利论”.</td>
            </tr>
        </table>` },
  "note/python/pandas": { title: "Pandas", content: `<h1>Pandas</h1>
        <h2>数据融合</h2>
        <p class="code">joint_df = pd.merge(df1, df2, on='')</p>
        <p><ul>
            <li>df1：融合的主体</li>
            <li>df2：融合的材料</li>
            <li>on：融合的依据</li>
        </ul></p>

        <h2>数据透视</h2>
        <p class="code"></p>` },
  "note/python/perceptron": { title: "note/python/perceptron", content: `<h1>感知器</h1>
<h2>介绍</h2>
<p><b>公式</b>：\\(y = w_1 x_1 + w_2 x_2 + \\cdots+bias\\)</p>
<p>数据集：
<table>
<tr>
    <td>样本</td>
    <td>\\(x_1\\)</td>
    <td>\\(x_2\\)</td>
    <td>\\(\\cdots\\)</td>
    <td>\\(y\\)</td>
</tr>
<tr>
    <td>\\(sample_1\\)</td>
    <td>\\(x_{11}\\)</td>
    <td>\\(x_{12}\\)</td>
    <td>\\(\\cdots\\)</td>
    <td>\\(y_1\\)</td>
</tr>
<tr>
    <td>\\(sample_2\\)</td>
    <td>\\(x_{21}\\)</td>
    <td>\\(x_{22}\\)</td>
    <td>\\(\\cdots\\)</td>
    <td>\\(y_2\\)</td>
</tr>
<tr>
    <td>\\(\\cdots\\)</td>
    <td>\\(\\cdots\\)</td>
    <td>\\(\\cdots\\)</td>
    <td>\\(\\cdots\\)</td>
    <td>\\(\\cdots\\)</td>
</tr>
</table>
</p>
<p>其中，\\(x\\)为输入项，\\(w、b\\)分别为权重、偏置项，由训练获得</p>
<p>更新：
    <ul>
        <li>\\(w = w + \\eta(\\hat y - y)x\\)</li>
        <li>\\(b = b + \\eta(\\hat y - y)\\)</li>
    </ul>
</p>
<p><b>感知器类的组成：
<pre>
class Perceptron():
<i># 输入：输入个数、激活函数</i>
<i># 初始化：激活函数（自定义）、权重与偏置项（初始为0）</i>
def __init__(self, input_num, activator):
    self.activator = activator
    self.weights = [0.0]*input_num
    self.bias = 0.0

<i># infomation</i>
def __str__(self):
    return f'weights\\t:{self.weights}\\nbias\\t:{self.bias:.6f}'

<i># Prediction</i>
def predict(self, sample):
    return self.activator(
        sum(list(map(lambda x,y:x*y, self.weights, sample))) + self.bais
    )

def updata_param(self, ):
    delta = self.predict(sample, )
    self.weight = [w + lr*(self.predict(in))]
</pre>
</b></p>` },
  "note/python/rnn": { title: "RNN", content: `<h1>循环神经网络（RNN）</h1>

        <h2>介绍</h2>
        <p><b>用途</b>：处理序列数据</p>

        <h2>一些循环神经网络</h2>
        <h3>基本循环神经网络</h3>
        <p>由输入层、一个隐藏层和一个输出层组成</p>
        <br><img src="./img/RNN1.png" width="100"><br>` },
  "note/raspberrypi/note": { title: "Pandas", content: `<h2>树莓派虚拟环境管理</h2>
    <code class="python"><pre>
        sudo apt-get install virtualenv -y
    </pre></code>


    <h2>树莓派设置开机自启动</h2>
    <p>创建/home/fishpi/.config/autostart文件夹</p>
    <p>在文件夹下创建xxx.desktop文件</p>
    <p>写入</p>
    <pre><code>
        [Desktop Entry]
        Encoding=UTF-8
        Type=Application
        Name=Bin
        Exec=lxterminal -e "source /home/fishpi/Venv/venv_name/bin/activate && python3 /home/fishpi/Desktop/py_name.py;$SHELL"
        Termal=true
    </code></pre>
    并保存
    <p>输入</p>
    <pre><code>
        sudo chmod a+r /home/fishpi/.config/autostart/Bin.desktop
    </code></pre>

    <h2>树莓派开机速度优化</h2>
    <b>查看开机时间</b>
    <pre><code>
        systemed-analyze
    </code></pre>

    <b>查看各项程序占用时间</b>
    <pre><code>
        systemed-analyze blame
    </code></pre>

    <b>树莓派服务</b>
    <ul>
        <li>NetworkManager-wait-online.service：启动等待服务</li>
    </ul>` },
  "note/research/compressedsensing/cassi": { title: "拉曼光谱", content: `<p><b>高光谱图像（hyperspectral image, HSI）</b>：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;由一系列波段图像组成的具有大量数据的三维图像，提供了非常丰富的空间和光谱信息。
        <br>
        <br>缺点：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;庞大的数据量给HSI的的存储与传输带来了沉重的负担。
        <br>
        <br>高光谱成像的目的：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;对场景的光谱反射率进行采样，收集具有两个空间维度(h, w)和一个光谱维度λ的3-D数据集，称为数据立方体(h, w， λ)
        <br>
        <br>重构的目的：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;根据测量值重构三维高光谱图像
        </p>


        <p><b>感知压缩（compression sensing, CS）理论</b>：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;一种超越传统Nyquist-Shannon采样定理的信号采集与重构框架。
        </p>

        <p><b>传统的扫描成像方法</b>：
        <br>
        <br>方法：
        <ul>
            <li>掸扫</li>
            <li>推扫</li>
            <li>光谱扫描</li>
        </ul>
        <br>缺点：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;扫描过程中可能出现运动伪影和照明效率不足，最终导致成像质量下降
        </p>

        <p><b>编码孔径快照光谱成像（Coded Aperture Snapshot Spectral Imaging, CASSI）</b>：
        <br>&nbsp;&nbsp;&nbsp;&nbsp;一种高光谱快照成像系统，利用CS理论，通过随机线性投影将三维HSI形成二维快照测量。
        <br>&nbsp;&nbsp;&nbsp;&nbsp;CASSI能从单次曝光中快读获取动态场景的光谱图像，其所需的样品数量要远远少于基于扫描方法的光谱仪。相应地，需要一种优化算法来重建光谱场景。
        <br>&nbsp;&nbsp;&nbsp;&nbsp;CASSI系统的痛点在于如何提高从二维压缩测量中重建三维HSI的优化算法质量，这是一个不适定问题。
        <br>
        <br>方法：
        <ul>
            <li>基于模型驱动的方法</li>
            <li>基于数据驱动的方法</li>
        </ul>
        步骤：
            <ol><li>对高维光谱图像进行<b>编码降维采集</b></li>
                <li>对低维观测图像进行<b>解码升维重构</b></li></ol>
        </p>

        <hr>
        <p><b>编码降维压缩</b></p>
        <p>编码模板设计：在标准前向模型的基础上，对传统随机编码方式进行优化，以减少调制过程中的信息损失</p>
        <p>压缩感知理论</p>
        <p>奈奎斯特-香农采样定理</p>


        <hr>
        <p><b>解码升维重构</b></p>


        <h2>对编码孔径的评价指标</h2>
        <h3>图像重建质量</h3>
        <b>均方误差（<span lang="en">MSE, Mean Squared Error</span>）</b>
        $$MSE = \\frac{1}{mnc}\\mathop{\\sum}_{i=0}^{m-1}\\mathop{\\sum}_{j=0}^{n-1}\\mathop{\\sum}_{k=0}^{c-1}[I(i,j,k) - K(i,j,K)]^2$$
        <b>峰值信噪比（<span lang="en">PSNR, Peak Signal-to-Noise Ratio</span>）</b>
    
        <h2>流程</h2>
        <h3>参数定义</h3>
        <b>三维光谱数据立方体</b>：\\(\\mathbf{X} \\in \\mathbb{R}^{H\\times W\\times C}\\)<br>
        <b>编码掩膜</b>：\\(\\mathbf{M} \\in \\mathbb{R}^{H\\times W}\\)

        <ol>
            <li>三维光谱数据立方体被编码掩膜调制得空间编码数据：
                $$\\mathbf{X'}(\\lambda) = \\mathbf{X}(\\lambda)\\odot M$$
            </li>
        </ol>` },
  "note/research/compressedsensing/cs": { title: "拉曼光谱", content: `<h1>压缩感知理论（Compressed Sensing, CS）</h1>

        <h2>基本理论</h2>
        <p>一种超越传统Nyquist-Shannon采样定理的信号采集与重构框架.</p>
        <p>只要信号是可压缩的或在某个变换域是稀疏的，那么就可以用一个与变换基不相关的观测矩阵将变换所得高维信号投影到一个低维空间上，那么通过求解一个优化问题就可以从这些少量的投影中以高概率重构出原信号.</p>

        <h2>问题描述</h2>
        <p>对于一个有限长的实值一维离散时间信号\\(\\mathbf{X}\\)，可以看作一个\\(\\mathbf{R}^n\\)空间中\\(n\\times 1\\)的列向量.</p>
        $$\\mathbf{X} = \\left[\\begin{matrix}x_1\\\\x_2\\\\\\vdots\\\\x_n\\end{matrix}\\right]$$
        <p>\\(R^N\\)空间的任何信号都可以用一组\\(N\\times1\\)维的基向量\\(\\mathbf{\\Psi}_1, \\mathbf{\\Psi}_2, \\cdots, \\mathbf{\\Psi}_n\\)线性表示为：</p>
        $$\\mathbf{X} = \\mathbf{\\Phi}\\mathbf{\\Theta}$$
        <p>其中\\(\\mathbf{\\Theta}_{n\\times1}\\)被称为投影系数.</p>
        <p>\\(\\mathbf{X}\\)和\\(\\mathbf{\\Theta}\\)是同一个信号的等价表示，\\(\\mathbf{X}\\)是信号在时域的表示，\\(\\Theta\\)是信号在\\(\\mathbf{\\Psi}\\)域的表示</p>
        <p>若\\(\\mathbf{\\Theta}\\)的非零个数比\\(n\\)小很多，则说明该信号是可压缩的.</p>


        <h2>压缩感知理论聚焦的问题</h2>
        <p>1、信号的稀疏表示问题：对于信号\\(\\mathbf{X}\\in \\mathbb{R}^n\\)，如何找到某个正交基或紧框架\\(\\mathbf{\\Psi}\\)，使\\(\\mathbf{X}\\)在\\(\\mathbf{\\Psi}\\)上的表示是稀疏的.</p>
        <p>2、信号的低速采样问题：如何设计一个平稳的、与变换基\\(\\Psi\\)不相关的\\(M\\times N\\)维观测矩阵\\(\\mathbf{\\Phi}\\)，保证稀疏向量\\(\\mathbf{\\Theta}\\)从\\(N\\)维降维至\\(M\\)维时重要信息不被破坏.</p>
        <p>3、信号的重构问题：如何设计快速重构算法，从线性观测\\(\\mathbf{Y} = \\mathbf{A}^{CS}\\mathbf{X}\\)中恢复信号.</p>` },
  "note/research/yolo/base": { title: "YOLO", content: `<h2>指标分析</h2>
        
        <b lang="en">IOU</b>
        $$IOU = \\frac{Area~~of~~Overlap}{Area~~of~~Union}$$
        <b><span lang="en">map</span>值</b>
        $$
        Precision = \\frac{TP}{TP + NP}\\\\
        Recall = \\frac{TP}{TP + NF}
        $$` },
  "note/research/yolo/v1": { title: "YOLO", content: `<h1 lang="en">YOLO</h1>
        <h2>数据集标注</h2>
        <h3 lang="en">Labelimg</h3>

        <b>安装<span lang="en">Labelimg</span></b>
        <pre class="code"><code>
            pip install labelimg
        </code></pre>

        <b>启动<span lang="en">Labelimg</span></b>
        <pre class="code"><code>
            labelimg
        </code></pre>

        <h1 lang="en">YOLOv1</h1>
        <h2>网络架构</h2>` },
  "note/research/zotero/chapter1": { title: "Zotero", content: `<h1>环境配置</h1>

        <h2>1、Download</h2>
        <a href="https://zotero.org">Zotero官网</a>
        <br><br>
        <b>下载本体</b>
        <br><br>
        <b>下载Edge插件</b>
        <p>固定插件</p>
        <p>点击插件图标</p>

        <h2>Log in/Register</h2>

        <h2>软件同步</h2>
        <p>打开软件</p>
        <p>编辑-设置-同步</p>
        <p>输入用户名和密码</p>

        <h2>下载Zotero插件商店</h2>
        <p>访问<a href="https://zotero-chinese.com">Zotero中文网</a></p>
        <p>点击插件商店</p>
        <p>搜索并下载Add-on Market for Zotero插件</p>
        <p>下载得到文件：zotero-addons.xpi</p>

        <h2>安装Zotero插件商店</h2>
        <p>打开软件</p>
        <p>工具-插件</p>
        <p>将zotero-addons.xpi文件拖入</p>

        <div class="Ending">Ending...</div>` },
  "note/research/zotero/chapter2": { title: "Zotero", content: `<h1>抓取文献（知网）</h1>
        <p>从Zotero插件商店安装Jasminum（右键安装）</p>
        <p>打开软件-编辑-设置-茉莉花</p>
        <p>中文转换器设置-立即更新</p>
        <p>Edge插件-管理拓展-Zotero Connector-扩展选项-Advanced</p>
        <p>Translator-Reset translator</p>` },
  "note/signals_and_linearsystems/chapter1": { title: "信号与线性系统分析", content: `<h1>第一章 信号与系统</h1>

        <div class="PageCatalog">
            <ul>
                <li><a href="#Classification">信号的分类</a></li>
                <li><a href="#SingularSignal">奇异信号</a></li>
            </ul>
        </div>

        <h2>第一节 绪论</h2>

        <div class="Card-Definition">
            <b>激励</b>
            <p>输入系统的信号.</p>
        </div>

        <div class="Card-Definition">
            <b>激励</b>
            <p>系统输出的信号</p>
        </div>



        <div class="Card-Analysis" id="Classification">
            <h2>信号的分类</h2>

            <table>
                <tr>
                    <td>一维信号与高维信号</td>
                </tr>
                <tr>
                    <td>连续信号与离散信号</td>
                </tr>
                <tr>
                    <td>周期信号</td>
                </tr>
                <tr>
                    <td>奇信号与偶信号</td>
                </tr>
            </table>

            <h3>连续信号与离散信号</h3>
            <div class="Card-Definition">
                <b>连续信号（模拟信号，连续时间信号）</b>
                <p>自变量的取值连续的信号.</p>
                $$x(t),~t\\in \\mathbb{R}$$
            </div>

            <div class="Card-Definition">
                <b>离散信号（数字信号，离散时间信号）</b>
                <p>自变量的取值不连续的信号.</p>
                $$x[n],~n\\in \\mathbb{Z}$$
            </div>

            <h3>周期信号</h3>
            <div class="Card-Definition">
                <b>连续周期信号</b>
                $$x(t) = x(t + mT), ~ m\\in \\mathbb{Z},~T\\gt0$$
            </div>

            <div class="Card-Definition">
                <b>离散周期信号</b>
                $$x[n] = x[n + mN], ~ m\\in\\mathbb{Z},~N\\in\\mathbb{N}^*$$
            </div>

            <h3>奇信号与偶信号</h3>
            <div class="Card-Definition">
                <b>奇信号</b>
                <p>信号关于原点对称.</p>
                $$x(-t) = -x(t)~or~x[-n] = -x[n]$$
            </div>

            <div class="Card-Definition">
                <b>偶信号</b>
                <p>信号关于坐标纵轴对称.</p>
                $$x(-t) = x(t)~or~x[-n] = x[n]$$
            </div>

            <div class="Card-Property">
                <p>任何一个信号都可以分解为一个奇分量与一个偶分量之和.</p>
                $$\\begin{align}
                x(t) &= [\\frac{x(t) + x(-t)}{2}] + [\\frac{x(t) - x(-t)}{2}]\\\\
                     &= x_e(t) + x_o(t)
                \\end{align}$$ 
            </div>
        </div>

        <div class="Card-Analysis" id="SingularSignal">
            <h2>奇异信号</h2>
            <h3>单位阶跃信号</h3>
            $$u(t) = \\begin{cases}0,~t\\lt0\\\\1,~t\\gt0\\end{cases}$$
            <p>\\(u(t)\\)在跳变点\\(t=0\\)处无意义.</p>
            <img src="Img/UnitStepSignal.jpg" width="200">
        </div>

        <div class="Card-Formula">
            <b>抽样函数</b>
            $$Sa(t) = \\frac{\\sin t}{t}$$

            <b>性质</b>
            <p>\\(Sa(t)\\)为偶函数.</p>
            $$\\int_{-\\infty}^{+\\infty} Sa(t) \\mathrm{d}t = \\pi$$
            $$\\int_{-\\infty}^{+\\infty} \\frac{\\sin(\\omega t)}{t} \\mathrm{d}t = \\pi$$

        </div>

        <div class="Card-Analysis">
            <h2>基本离散时间信号</h2>
            <b>单位脉冲序列\\(\\delta[n]\\)</b>
            $$\\delta[n] = \\begin{cases}
            0, n\\neq 0\\\\
            1, n=0
            \\end{cases}$$

            <b>单位阶跃序列\\(u[n]\\)</b>
            $$u[n] = \\begin{cases}
            0,n\\lt 0\\\\
            1,n\\geq0
            \\end{cases}$$
        </div>

        <div class="Card-Analysis">
            <h2>系统的基本性质</h2>
            <b>线性系统与非线性系统</b>
            <p>设\\(y_1(t)\\)/\\(y_1[n]\\)是系统对激励\\(x_1(t)\\)/\\(x_1[n]\\)的响应；\\(y_2(t)\\)/\\(y_2[n]\\)是系统对激励\\(x_2(t)\\)/\\(x_2[n]\\)的响应.</p>
            $$ax_1(t) + bx_2(t) \\rightarrow ay_1(t) + by_2(t)$$
            $$ax_1[n] + bx_2[n] \\rightarrow ay_1[n] + by_2[n]$$
            <p>其中\\(a,b\\in \\mathbb{C}\\)，满足上式的系统称为连续/离散时间线性系统.</p>
            <p>线性系统具有<b>叠加性</b>与<b>齐次性</b>.</p>
            <p>叠加性可表示为：</p>
            $$x_1(t) + x_2(t) \\rightarrow y_1(t) + y_2(t)$$
            <p>齐次性可表示为：</p>
            $$ax_1(t) \\rightarrow ay_1(t)$$


            <b>因果系统</b>
            <p>在任何时候的输出只决定于现在及过去的输入，而与系统以后的输入无关的系统.</p>
        </div>` },
  "note/signals_and_linearsystems/chapter2": { title: "信号与线性系统分析", content: `<h1>第二章 连续系统的时域分析</h1>
        <h2>第一节 LTI连续系统的响应</h2>

        <p>
            LTI系统数学模型：
            $$\\mathop{\\sum}^{n}_{j=0}a_jy^{(j)}(t) = \\mathop{\\sum}^{m}_{i=0}b_if^{(i)}(t)$$

            齐次解\\(y_h(t)\\)
            $$\\mathop{\\sum}^{n}_{j=0}a_jy^{(j)}(t) = 0$$
            
            特解\\(y_p(t)\\)
            <ol>
                <li>根据\\(f(t)\\)的类型确定\\(y_p(t)\\)的形式</li>
                <li>将\\(y_p(t)\\)代入系统方程解出待定系数，得到\\(y_p(t)\\)</li>
            </ol>
        </p>
        <p><b>r重实根对应的齐次解</b>：\\((C_{r-1}t^{r-1}+C_{r-2}t^{r-2}+\\dots+C_1t+C_0)e^{\\lambda t}\\)</p>
        <h3>求解零输入响应</h3>
        <p>
            <ol>
                <li>求解齐次方程$$\\mathop{\\sum}^{n}_{j=0}a_jy^{(j)}(t) = 0$$
                    特征方程为$$\\mathop{\\sum}^{n}_{j=0}a_j\\lambda = 0$$ 
                </li>
                <li>由特征根查表得带有待定系数的零输入响应解\\(y_{zi}(t)\\)，并导出\\(y_{zi}^{(n)}(t)\\)</li>
                <li>由条件\\(y_{zi}^{(j)}(0_+)=y_{zi}^{(j)}(0_-)=y^{j}(0_-)\\)解出待定系数</li>
            </ol>

        </p>
        <h3>求解零状态响应</h3>
        <p>
            \\(\\begin{cases}
            y_{zs}(t) = y_h(t) + y_p(t)\\\\
            y_{zs}^{(n)}(0_-) = 0
            \\end{cases}\\)
            <br>激励方程中不存在\\(\\delta(t)\\)时：
            <ol>
                <li>根据\\(y_{zs}^{(n)}(0_+) = 0\\)解出待定系数</li>
            </ol>
            <ol>
                <li>构造\\(\\mathop{\\sum}^{n}_{j=0}a_jy_1^{(j)}(t) = f(t)\\)</li>
            <li>对\\(f(t)\\)求导得\\(f^{(i)}(t)\\)</li>
            <li>得到\\(\\mathop{\\sum}^{n}_{i=0}b_if^{(i)}(t)\\)，将\\(y_{zs1}(t)\\)构造为\\(y_{zs}(t)\\)的形式</li>
            <li>\\(\\int_{0_-}^{0_+}y_{zs}^{(n)}(t)dt = y_{zs}^{n-1}(0_+) - y_{zs}^{n-1}(0_-)\\)
                <br>由于\\(y_{zs}(t)\\)在\\(t=0\\)处连续：
                $$\\begin{cases}
                \\int_{0_-}^{0_+}y_{zs}(t)=0\\\\
                y_{zs}(0_+) = y_{zs}(0_-) = 0
                \\end{cases}$$
            </li>
        </ol>
        </p>
        <h2>第二节 冲激响应和阶跃响应</h2>
        <h3>一、冲激响应</h3>
        <p><b>单位冲激响应（冲激响应）</b>：LTI系统中，激励为\\(\\delta(t)\\)时的零状态响应。
        $$ h(t) = T[{0}, \\delta(t)] $$</p>

        <p><b>卷积积分（卷积）</b>：定义在\\((-\\infty, +\\infty)\\)上的\\(f_1(t)、f_2(t)\\)，有：
        $$f(t) = f_1(t)*f_2(t) = \\int_{-\\infty}^{+\\infty}f_1(\\tau)f_2(t-\\tau)d\\tau$$</p>
        <p><b>图解法求卷积积分</b>：
        <ol>
            <li>换元，得到\\(f_1(\\tau)、f_2(\\tau)\\)</li>
            <li>反转，将\\(f_2(\\tau)\\)沿纵坐标反转，得到\\(f_2(-\\tau)\\)</li>
            <li>平移，将\\(f_2(-\\tau)\\)向右平移\\(t\\)个单位长度，得到\\(f_2(t-\\tau)\\)</li>
            <li>将\\(f_1(\\tau)、f_2(t-\\tau)\\)相乘后求积分，得到\\(f(t)\\)</li>
        </ol>
        </p>` },
  "note/signals_and_linearsystems/chapter3": { title: "信号与线性系统分析", content: `<h1>第三章 离散系统的时域分析</h1>
        <h2>第一节 LIT离散系统的响应</h2>
        <h3>一、差分与差分方程</h3>
        <p>设有序列\\(f(k)\\)，则称\\(\\cdots, f(k+2),f(k+1),\\cdots ,f(k-1),f(k-2),\\cdots\\)为\\(f(k)\\)的<b>移位序列</b>。</p>
        <p>序列的差分分为前向差分和后向差分
            <ul>
                <li><b>一阶前向差分</b>：\\(\\Delta f(k) \\overset{def}{=} f(k+1) - f(k) \\)</li>
                <li><b>一阶后向差分</b>：\\(\\nabla f(k) \\overset{def}{=} f(k) - f(k-1) \\)</li>
                <i>式中\\(\\Delta\\)与\\(\\nabla\\)称为差分算子</i>
                <li>一阶前向差分与一阶后向差分的关系：\\(\\nabla f(k) = \\Delta f(k-1)\\)</li>
                
            </ul>
        </p>
        <p><b>差分方程</b>：
        $$y(k) + a_{n-1}y(k-1)+\\cdots +a_0y(k-n) = b_mf(k) + b_{m-1}f(k-1) + \\cdots + b_0f(k-n)$$
        $$\\mathop{\\sum}\\limits_{j=0}^n a_{n-j}y(k-j) = \\mathop{\\sum}\\limits_{i=0}^m b_mf(k-m)~(a_n = 1)$$
        </p>
        <h3>二、差分方程的经典解</h3>
        <h3>三、差分方程的零输入响应</h3>
        <p>$$f(k - m) = 0$$
            $$\\mathop{\\sum}\\limits_{j=0}^n a_{n-j}y(k-j) = 0$$
            特征方程为：
            $$\\mathop{\\sum}\\limits_{j=0}^n a_j \\lambda^j = 0$$
            解得特征根，确定齐次解。
            <br>根据已知\\(y(-1)、y(-2)、\\cdots\\)，解出\\(y(0)、y(1)、\\cdots\\)代入齐次解，解出待定常数。
        </p>
        <h3>四、差分方程的零状态响应</h3>
        <p>零状态响应应满足：
            $$\\mathop{\\sum}\\limits_{j=0}^n a_{n-j}y_{zs}(k-j) = \\mathop{\\sum}\\limits_{i=0}^m b_{m-i}f(k-i)~(a_n = 0)$$
            $$y_{zs}(-1) = y_{zs}(-2) = \\cdots =  0~(n>0)$$
            求得非齐次方程特征根\\(\\lambda_1, \\lambda_2, \\cdots\\)<br>
            求得初始值\\(y_{zs}(0), y_{zs}(1), \\cdots\\)<br>
            求得特解\\(y_p(k)\\)
        </p>` },
  "note/signals_and_linearsystems/signals_and_linearsystems": { title: "信号与线性系统分析", content: `<h1>信号与线性系统分析</h1>

        <h2>目录</h2>
        <ul class="catalog">
            <li><a href="/note/signals_and_linearsystems/chapter1">第一章 信号与系统</a></li>
            <li><a href="/note/signals_and_linearsystems/chapter2">第二章 连续系统的时域分析</a></li>
            <li><a href="/note/signals_and_linearsystems/chapter3">第三章 离散系统的时域分析</a></li>
        </ul>` },
  "note/stm32/chapter1": { title: "STM32", content: `<h1 lang="en">STM32</h1>
        <b>单片机（<span lang="en">Single-Chip Microcomputer</span>，单片微型计算机）</b>
        <p>是一种集成电路芯片。</p>
        <b>组成</b>
        <ul>
            <li lang="en">CPU</li>
            <li lang="en">SRAM</li>
            <li lang="en">FLASH</li>
            <li>外设</li>
        </ul>

        <b lang="en">RAM</b>
        <ul>
            <li><b lang="en">SRAM</b>：静态随机存储器</li>
            <li><b lang="en">DRAM</b>：动态随机存储器，电脑内存一般为<span lang="en">DRAM</span></li>
        </ul>


        <h2>搭建开发环境</h2>

        <ul>
            <li lang="en"><b>IDE</b>：MDK</li>
            <li><b>仿真器</b>：<span lang="en">DAP、STLink</span></li>
            <li><b>串口调试助手</b>：<span lang="en">XCOM</span></li>
        </ul>


        <h2>外设</h2>
        <h3 lang="en">GPIO</h3>
        <b>定义</b>
        <p><span lang="en">General Purpose Input Output</span>，通用输入输出端口。</p>
        <b>作用</b>
        <p>采集外部器件的信息（输入）或控制外部器件工作（输出）。</p>
        <b>举例</b>
        <p>按钮：按下前输入为1，按下后输入为0。</p>
        <p>小灯：输出为1时有电压差，小灯亮起；输出为0时无电压差，小灯熄灭。</p>
        <b>特点</b>
        <p>不同型号的单片机<span lang="en">IO</span>口的数量不一样，可以通过选型手册快速查询。</p>
        <p>每次翻转最快只需要两个时钟周期（<span lang="en">F1</span>最高速度可以达到50MHz）</p>
        <p>每个<span lang="en">IO</span>口都可以做中断。</p>
        <p>支持8种工作模式。</p>


        <b><span lang="en">GPIO</span>基本结构</b>
        <ul>
            <li>保护二极管</li>
            <li>上下拉电阻</li>
            <li>施密特触发器</li>
        </ul>

        <b><span lang="en">GPIO</span>的八种工作模式</b>
        <table>
            <tr>
                <td>上拉输入</td>
                <td>内部上拉，默认高电平</td>
            </tr>
            <tr>
                <td>下拉输入</td>
                <td>内部下拉，默认低电平</td>
            </tr>
            <tr>
                <td>浮空输入</td>
                <td>完全浮空，信号由触发器输入</td>
            </tr>
            <tr>
                <td>模拟输入</td>
                <td>关闭了施密特触发器，不接上下拉电阻。<span lang="en">ADC、DAC</span></td>
            </tr> 
            <tr>
                <td>开漏输出</td>
                <td class="tbcontext">
                    <p>输出数据寄存器上的\\(0\\)激活<span lang="en">N-MOS</span>，<span lang="en">I/O</span>口输出低电平。</p>
                    <p>输出数据寄存器上的\\(1\\)激活<span lang="en">P-MOS</span>，<span lang="en">I/O</span>口输出高电平。</p>
                    <p>软件<span lang="en">IIC</span>的<span lang="en">SDA、SCL</span>等。</p>
                </td>
            </tr>
            <tr>
                <td>推挽输出</td>
                <td>驱动能力强，25<span lang="en">mA(max)</span>，通用输出</td>
            </tr>
            <tr>
                <td>开漏式复用功能</td>
                <td>片上外设功能（硬件<span lang="en">IIC</span>的<span lang="en">SDA、SCL</span>等）</td>
            </tr>
            <tr>
                <td>推挽式复用功能</td>
                <td>片上外设功能（<span lang="en">SPI</span>的<span lang="en">SCK、MISO、MOSI</span>引脚等）</td>
            </tr>
        </table>

        <b>中断</b>
        <p>系统在执行当前程序的过程中，由于某种随机出现的外设请求，使得<span lang="en">CPU</span>暂停当前执行程序而转去执行外设服务的程序，当外设服务程序执行完毕后，<span lang="en">CPU</span>再返回原暂停处继续执行原程序。</p>

        <b>中断源</b>
        <p>引起中断的事件。</p>

        <b>中断向量</b>
        <p>中断服务程序的入口地址。</p>

        <b>中断处理过程</b>
        <p>响应中断请求</p>
        <p>保护现场</p>
        <p>开中断</p>
        <p>中断服务</p>
        <p>关中断</p>
        <p>恢复现场</p>
        <p>开中断</p>
        <p>中断返回</p>


        <b><span lang="en">STM32</span>中断优先级</b>
        <table>
            <tr>
                <td>抢占优先级</td>
                <td class="tbtext">高抢占优先级可打断第抢占优先级的中断。</td>
            </tr>
            <tr>
                <td>响应优先级</td>
                <td class="tbtext">抢占优先级相同时，响应优先级高的先执行，但不能互相打断。</td>
            </tr>
            <tr>
                <td>自然优先级</td>
                <td class="tbtext">中断向量表的优先级，抢占优先级和响应优先级都相同是，自然优先级高的先执行。</td>
            </tr>
        </table>
        <p>数值越小，优先级越高。</p>
        <b>中断优先级分组</b>
        <table>
            
        </table>



        <b>定时器</b>
        <table>
            <tr>
                <td>高级定时器</td>
                <td lang="en">TIM1</td>
            </tr>
            <tr>
                <td>通用定时器</td>
                <td lang="en">TIM2、TIM3、TIM4、TIM5</td>
            </tr>
            <tr>
                <td>基本定时器</td>
                <td lang="en">TIM6、TIM7</td>
            </tr>
        </table>

        <b>时基单元</b>
        <ul>
            <li>计数器寄存器</li>
            <ul>
                <li>向上计数模式</li>
                <li>向下计数模式</li>
                <li>中央对齐模式</li>
            </ul>
            <li>预分频器寄存器</li>
            <li>自动装载寄存器</li>
        </ul>


        <b>计算机<span lang="en">CPU</span>与外部设备的基本通信方式</b>
        <table>
            <tr>
                <td>并行通信</td>
                <td class="tbtext">在每次传输中，数据的各位同时传送，一次传送的数据有多少位，就需要用多少根传输线。</td>
                <td class="tbtext">传送速度快</td>
                <td>易受干扰、远距离通信时所需成本较高。</td>
            </tr>
        </table>
        
        <ul>
            <li>并行通信</li>
            <li>串行通信</li>
        </ul>` },
  "note/stm32/environment": { title: "STM32", content: `<h1>环境配置</h1>

        <h2>一些网站</h2>
        <a href="https://www.st.com.cn/">意法半导体官网（下载数据手册）</a><br>
        <a href="https://www.st.com/en/development-tools/stsw-link009.html/"><span lang="en">STLink</span>驱动下载</a><br>
        <a href="https://www.keil.arm.com/devices/">Keil器件支持包下载</a>

        <h2>安装<span lang="en">STLink</span>驱动安装</h2>
        <p><span class="path">en.stsw-link009</span>文件夹下，以管理员身份运行<span class="path">dpinst_amd64.exe</span>程序（64位电脑）即可。</p>


        <h2>接线</h2>
        <span lang="en">STLink</span>针脚说明如图所示<br>
        <img src="./img/STLink.jpg" width="400"><br>
        <b>最小系统板与<span lang="en">STLink</span>连线对应</b>
        <table>
            <tr>
                <td class="tbtitle">最小系统板</td>
                <td class="tbtitle">针脚编号</td>
                <td class="tbtitle">说明</td>
            </tr>
            <tr>
                <td lang="en">3V3</td>
                <td lang="en">1</td>
                <td>高电平</td>
            </tr>
            <tr>
                <td lang="en">SWIO</td>
                <td lang="en">7</td>
                <td></td>
            </tr>
            <tr>
                <td lang="en">SWCLK</td>
                <td lang="en">9</td>
                <td></td>
            </tr>
            <tr>
                <td lang="en">GND</td>
                <td lang="en">20</td>
                <td>低电平</td>
            </tr>

        </table>

        <b>接线验证</b>
        <p>打开<span lang="en">Keil5</span>软件，选择<button class="opt">魔术棒</button>\\(\\rightarrow\\)<button class="opten">Debug</button>。</p>
        <p>在右侧最上栏下拉选择<button class="opten">ST-Link Debuger</button>，点击<button class="opten">Setting</button>。</p>
        <p>若在<span lang="en">SW Device</span>一栏中<span lang="en">IDCODE</span>显示为16进制数据，则说明接线无误。</p>
    
    
        <h3>跑马灯实验</h3>

        代码修改<span lang="en">led.h</span>
        <ul>
            <li lang="en">line30：GPIO<span style="color:red">A</span> \\(\\rightarrow\\) GPIO<span style="color:red">C</span></li>
            <li lang="en">line31：GPIO_PIN_<span style="color:red">8</span> \\(\\rightarrow\\) GPIO_PIN_<span style="color:red">13</span></li>
            <li lang="en">line32：HAL_RCC_GPIO<span style="color:red">A</span>_CLK_ENABLE\\(\\rightarrow\\)HAL_RCC_GPIO<span style="color:red">C</span>_CLK_ENABLE</li>
        </ul>


        <b lang="en">Error:</b>
        <pre>
        Rebuild started: Project: atk_f103
        *** Target 'Template' uses ARM-Compiler 'Default Compiler Version 5' which is not available.
        *** Please review the installed ARM Compiler Versions:
        'Manage Project Items - Folders/Extensions' to manage ARM Compiler Versions.
        'Options for Target - Target' to select an ARM Compiler Version for the target.
        *** Rebuild aborted.
        Build Time Elapsed:  00:00:00
        </pre>
        <b lang="en">Solution</b><br>
        <button class="opt">魔术棒</button>\\(\\rightarrow\\)<button class="opten">target</button>将<span lang="en">ARM Compiler</span>选择为<span lang="en">V6.21</span>
    

        <br><br>
        <b>通过<span lang="en">STLink</span>烧录程序</b>
        <ol>
            <li>编译程序<button class="opten">Build</button></li>
            <li>烧录程序<button class="opten">Download</button></li>
        </ol>

        <br><br>
        注：
        <ol>
            <li>最小系统板不支持串口下载</li>
        </ol>` },
  "note/stm32/keil5": { title: "STM32", content: `<h1 lang="en">Keil5</h1>

        <h2>新建工程</h2>
        <button class="opten">Project</button>\\(\\rightarrow\\)<button class="opten">New μVision Project...</button><br><br>
        选择固件库（<span lang="en">STM32F103C8T6</span>）<br>
        <img src="./img/SelectVision.png" width="400"><br>
        <button class="opten">OK</button>\\(\\rightarrow\\)<button class="opten">OK</button>

        <h2>打开工程</h2>
        <button class="opten">Project</button>\\(\\rightarrow\\)<button class="opten">Open Project...</button><br><br>

        <h2>关闭工程</h2>
        <button class="opten">Project</button>\\(\\rightarrow\\)<button class="opten">Closed Project...</button><br><br>

        <hr>
        <h2>页面介绍</h2>
        <h3>顶部第三栏</h3>
        <button class="opten">Bulid</button>：<span lang="en">Build target files</span>，编译新修改的文件，快捷键：<span lang="en">F7</span>。
        
        <br><br>
        <button class="opten">Rebulid</button>：<span lang="en">Reuild all target files</span>，编译所有文件（速度较慢）。


        <h3>左侧边栏</h3>
        <button class="opten">Project</button>
        <p>展示文件树</p>` },
  "note/stm32/microcomputer": { title: "STM32", content: `<h1>微机原理</h1>
        <h2>计算机的组成</h2>
        <b>冯诺依曼计算机</b>
        <table>
            <tr>
                <td>控制器</td>
                <td class="tbtext">计算机的控制核心</td>
            </tr>
            <tr>
                <td>运算器</td>
                <td class="tbtext">对信息进行各类运算处理的加工中心</td>
            </tr>
            <tr>
                <td>存储器</td>
                <td class="tbtext">存放数据和程序</td>
            </tr>
            <tr>
                <td>输入设备</td>
                <td class="tbtext">将数据和程序转换为计算机内部所能识别和接受的信息形式并顺序地将其送入存储器中。</td>
            </tr>
            <tr>
                <td>输出设备</td>
                <td class="tbtext">将计算机处理的结果以人或其他机器能够识别或接受的形式送出。</td>
            </tr>
        </table>
        <b>现代计算机结构</b>
        <table>
            <tr>
                <td>处理器（中央处理单元、<span lang="en">CPU</span>）</td>
                <td class="tbtext">包括运算器和控制器，是信息处理的中心部件。</td>
            </tr>
            <tr>
                <td>存储系统</td>
                <td class="tbtext">由寄存器、高速缓冲存储器、主存储器和辅助存储器几个层次的存储器共同组成。</td>
            </tr>
            <tr>
                <td>总线系统</td>
                <td class="tbtext">计算机各部分之间传递数据可控制信息的线路。</td>
            </tr>
            <tr>
                <td>输入/输出设备（I/O设备、外设、外部设备）</td>
                <td class="tbtext">输入输出子系统包括外设和外设与主机之间相互连接的I/O接口电路。</td>
            </tr>
        </table>


        <b>存储系统的分层结构</b>
        <p>越上层的存储器离CPU越近，存取速度越快，但价格也越高，因此所采用容量也越小</p>

        <b>总线系统</b>
        <ul>
            <li>数据总线</li>
            <li>地址总线</li>
            <li>控制总线</li>
        </ul>

        <b>指令</b>
        <ol>
            <li>取指令阶段：从存储器中取出指令码并送到指令寄存器中寄存，对指令译码后，转入执行指令阶段。</li>
            <li>执行指令阶段</li>
        </ol>

        <b>并行技术</b>
        <p>计算机系统在同一时刻或同一时间间隔内进行多种运算或多个操作称为计算机的并行性。</p>
        <ul>
            <li>同时性：两个或两个以上事件在同一时刻发生。</li>
            <li>并发性：两个或两个以上事件在同一时间间隔内发生。</li>
        </ul>` },
  "note/stm32/other": { title: "STM32", content: `<h1>乱七八糟</h1>

        <b>主频</b>
        <p>内部时钟的频率。</p>

        <b>继电器</b>
        <p>继电器内部有一个电磁线圈和一组或多组触点，当线圈通电时，会产生磁场，吸引可动触点接触固定触点，从而闭合电路。</p>

        <b><span lang="en">OLED</span>屏幕</b>
        <p>原点位于左上角，汉字占\\(16\\times 16\\)大小，英文字符占\\(8\\times 16\\)大小。</p>` },
  "note/stm32/stm32": { title: "几何光学", content: `<h1>几何光学</h1>

        <h2>目录</h2>
        <a href="/note/stm32/environment">环境配置</a>
        <br>
        <a href="/note/stm32/keil5" lang="en">Keil5</a>` },
  "others": { title: "其他知识", content: `<h1>编译与连接</h1>
        <p><b>编译（compilation）</b>：编译的过程是将程序的源代码翻译成CPU能够直接运行的机器代码</p>` },
  "test/code": { title: "test/code", content: `` },
  "test/example": { title: "LaTeX in HTML", content: `
  <table>
    <tr>
      <td>丰富</td>
    </tr>
  </table>
` },
  "test/table copy": { title: "无标题文档", content: `
<table width="800" border="0" class="three">
  <tr>
    <td class="empty_header">A</td>
    <td class="empty_header">B</td>
    <td class="right_header">B</td>
    <td class="left_header">Z</td>
    <td class="left_header">F</td>
  </tr>
  <tr>
    <td class="empty_top">0</td>
    <td class="empty_top">0</td>
    <td class="right_top">0</td>
    <td class="both_top">0</td>
    <td class="left_top">0</td>
  </tr>
  <tr>
    <td class="empty_middle">0</td>
    <td class="empty_middle">0</td>
    <td class="right_middle">1</td>
    <td class="both_middle">0</td>
    <td class="left_middle">1</td>
  </tr>
  <tr>
    <td class="empty_middle">0</td>
    <td class="empty_middle">1</td>
    <td class="right_middle">0</td>
    <td class="both_middle">1</td>
    <td class="left_middle">1</td>
  </tr>  <tr>
    <td class="empty_middle">0</td>
    <td class="empty_middle">1</td>
    <td class="right_middle">1</td>
    <td class="both_middle">1</td>
    <td class="left_middle">0</td>
  </tr>  <tr>
    <td class="empty_middle">0</td>
    <td class="empty_middle">0</td>
    <td class="right_middle">0</td>
    <td class="both_middle">0</td>
    <td class="left_middle">0</td>
  </tr>  <tr>
    <td class="empty_middle">0</td>
    <td class="empty_middle">0</td>
    <td class="right_middle">0</td>
    <td class="both_middle">0</td>
    <td class="left_middle">0</td>
  </tr>  <tr>
    <td class="empty_middle">0</td>
    <td class="empty_middle">0</td>
    <td class="right_middle">0</td>
    <td class="both_middle">0</td>
    <td class="left_middle">0</td>
  </tr>  <tr>
    <td class="empty_middle">0</td>
    <td class="empty_middle">0</td>
    <td class="right_middle">0</td>
    <td class="both_middle">0</td>
    <td class="left_middle">0</td>
  </tr>
</table>
` },
  "test/table": { title: "无标题文档", content: `
<table width="800" border="0" class="three">
  <tr>
    <td class="empty_header">A</td>
    <td class="empty_header">B</td>
    <td class="right_header">B</td>
    <td class="left_header">Z</td>
    <td class="left_header">F</td>
  </tr>
  <tr>
    <td class="empty_top">0</td>
    <td class="empty_top">0</td>
    <td class="right_top">0</td>
    <td class="both_top">0</td>
    <td class="left_top">0</td>
  </tr>
  <tr>
    <td class="empty_middle">0</td>
    <td class="empty_middle">0</td>
    <td class="right_middle">1</td>
    <td class="both_middle">0</td>
    <td class="left_middle">1</td>
  </tr>
  <tr>
    <td class="empty_middle">0</td>
    <td class="empty_middle">1</td>
    <td class="right_middle">0</td>
    <td class="both_middle">1</td>
    <td class="left_middle">1</td>
  </tr>  <tr>
    <td class="empty_middle">0</td>
    <td class="empty_middle">1</td>
    <td class="right_middle">1</td>
    <td class="both_middle">1</td>
    <td class="left_middle">0</td>
  </tr>  <tr>
    <td class="empty_middle">0</td>
    <td class="empty_middle">0</td>
    <td class="right_middle">0</td>
    <td class="both_middle">0</td>
    <td class="left_middle">0</td>
  </tr>  <tr>
    <td class="empty_middle">0</td>
    <td class="empty_middle">0</td>
    <td class="right_middle">0</td>
    <td class="both_middle">0</td>
    <td class="left_middle">0</td>
  </tr>  <tr>
    <td class="empty_middle">0</td>
    <td class="empty_middle">0</td>
    <td class="right_middle">0</td>
    <td class="both_middle">0</td>
    <td class="left_middle">0</td>
  </tr>  <tr>
    <td class="empty_middle">0</td>
    <td class="empty_middle">0</td>
    <td class="right_middle">0</td>
    <td class="both_middle">0</td>
    <td class="left_middle">0</td>
  </tr>
</table>
` },
  "test/test1": { title: "Draggable Circle Button", content: `

  <button id="drag-btn">拖我</button>

  <script>
    // 获取按钮元素
    const dragBtn = document.getElementById('drag-btn');

    // 定义变量来存储鼠标位置和按钮位置
    let pos = { top: 0, left: 0, x: 0, y: 0 };

    // 当鼠标按下时触发函数
    function mouseDown(e) {
      e.preventDefault();
      
      // 获取鼠标当前位置
      pos.x = e.clientX;
      pos.y = e.clientY;
      
      // 获取按钮当前位置
      pos.left = dragBtn.offsetLeft;
      pos.top = dragBtn.offsetTop;

      // 添加鼠标移动和鼠标释放事件监听器
      document.addEventListener('mousemove', mouseMove);
      document.addEventListener('mouseup', mouseUp);
    }

    // 当鼠标移动时触发函数
    function mouseMove(e) {
      // 计算鼠标移动的距离
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      // 设置按钮的新位置
      dragBtn.style.left = \`\${pos.left + dx}px\`;
      dragBtn.style.top = \`\${pos.top + dy}px\`;
    }

    // 当鼠标释放时触发函数
    function mouseUp() {
      // 移除鼠标移动和鼠标释放事件监听器
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseup', mouseUp);
    }

    // 给按钮添加鼠标按下事件监听器
    dragBtn.addEventListener('mousedown', mouseDown);
  </script>

` },
  "test/test2": { title: "test/test2", content: `
        <script src="../../JavaScript/navibar.js"></script>
        <div id="navibar"></div>
        <script>
            document.getElementById('navibar').innerHTML = navibar;
        </script>
    ` },
};