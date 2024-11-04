from SomeFun import *

X = [1,2,3,4]
Y = [0.8, 1.5, 1.8, 2.0]

# -->[[b,m]]
def least_square(X, Y):
    X = [[1 for _ in range(len(X))], X]
    Y = [Y]
    return (matrix_dot(matrix_dot(matrix_inv(matrix_dot(T(X), X)), T(X)), Y))

print(least_square(X, Y))
