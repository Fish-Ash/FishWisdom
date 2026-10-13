import numpy as np
from scipy.linalg import solve
from scipy.stats import norm
 
class GaussianProcess:
    def __init__(self, kernel, noise_level=1e-8):
        self.kernel = kernel
        self.noise_level = noise_level
        self.X = None
        self.y = None
        self.K = None
        self.L = None  # Cholesky decomposition
 
    def fit(self, X, y):
        """
        根据观测数据拟合高斯过程。
        """
        self.X = X
        self.y = y
        self.K = self.kernel(X, X) + np.eye(len(X)) * self.noise_level
        self.L = np.linalg.cholesky(self.K)  # Cholesky 分解
 
    def predict(self, X_star, return_std=False):
        """
        预测新点的函数值和标准差。
        """
        K_star = self.kernel(self.X, X_star)
 
        # 计算后验均值
        alpha = solve(self.L.T, solve(self.L, self.y)) #solve(A,b) 返回方程 Ax=b 的解
        mu_star = K_star.T @ alpha
 
        # 计算后验方差
        v = solve(self.L, K_star)
        var_star = self.kernel(X_star, X_star) - v.T @ v
        std_star = np.sqrt(np.diag(var_star))
 
        if return_std:
            return mu_star, std_star
        else:
            return mu_star
 
def rbf_kernel(X1, X2, l=1.0, sigma_f=1.0):
    """
    RBF (Gaussian) 核函数。
    """
    sqdist = np.sum(X1**2, 1).reshape(-1, 1) + np.sum(X2**2, 1) - 2 * np.dot(X1, X2.T)
    return sigma_f**2 * np.exp(-0.5 / l**2 * sqdist)
 
# 示例用法
if __name__ == '__main__':
    # 训练数据
    X = np.array([-4, -3, -2, -1, 1, 2]).reshape(-1, 1)
    y = np.sin(X)
 
    # 测试数据
    X_star = np.linspace(-5, 5, 100).reshape(-1, 1)
 
    # 创建高斯过程对象
    gp = GaussianProcess(kernel=rbf_kernel)
 
    # 拟合高斯过程
    gp.fit(X, y)
 
    # 预测
    mu_star, std_star = gp.predict(X_star, return_std=True)
 
    # 打印预测结果
    print("预测均值:", mu_star[:5])
    print("预测标准差:", std_star[:5])
 
    # 可视化（需要安装 matplotlib）
    import matplotlib.pyplot as plt
    plt.figure(figsize=(10, 6))
    plt.plot(X, y, 'rx', markersize=10, label='Observations')
    plt.plot(X_star, mu_star, 'b-', label='Mean Prediction')
    plt.fill_between(X_star.flatten(), mu_star - 1.96 * std_star, mu_star + 1.96 * std_star, alpha=0.2, color='b', label='95% Confidence Interval')
    plt.xlabel('x')
    plt.ylabel('f(x)')
    plt.title('Gaussian Process Regression')
    plt.legend()
    plt.grid(True)
    plt.show()