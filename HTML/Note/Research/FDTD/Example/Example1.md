# 示例1

## 检查材料库中是否包含仿真所必要的材料

## 建立结构
### 薄膜结构
Structure -> Rectangle 建立矩形
进入形状编辑，薄膜参数为：
- name: film
- Geometry
    - x = y = 0
    - x span = y span = 1.2μm（period=0.4）
    - z min = 0
    - z max = 0.1
- Materials
    - material: Au(Gold)-CRC

### 基底结构
复制薄膜
进入形状编辑，修改参数为：
- name: substrate
- Geometry
    - z min = -1
    - z max = 0
- Materials
    - material: SiO2(Glass)-Palik

### 从Object Library中添加更复杂的结构
Object Library -> Category: Photonic Crystals -> Rectangular lattice PC array
进入形状编辑，修改参数：
- name: nanohole
- Properties
    - Origin（中心位置）
        - x = y = 0
        - z = 0.05
    - User Properties
        - material: etch
        - z span = 0.1
        - nx = ny = 3（周期数）
        - ax = ay = 0.4（周期）
        - radius = 0.1（半径）


## 添加并设置求解器
Simulation -> add FDTD region
编辑求解器：
- Geomerty
    - x = y = z = 0
    - x span = y span = 0.4
    - z span = 1

## 常用操作
### 复制对象
D（Ctrl C + Ctrl V）
### 编辑对象
在Object Tree中选中需要编辑的对象，按"E"键进入编辑窗口.

addrect;
set("name", "film");
set("x", 0);
set("x span", 1.2e-6);
set("y", 0);
set("y span", 1.2e-6);
set("z min", 0);
set("z max", 1e-7);
set("material", "Au (Gold) - CRC");