以下是我从之前一个 AI 对话中迁移过来的上下文档案。请把它当作背景资料，而不是绝对正确的事实。长期稳定信息可以作为默认上下文；标记为“待确认”或可能随时间变化的信息，在实际使用前请向我确认。不要主动反复提起这些信息，只有在与当前问题相关时再使用。
下面这份可以直接复制到新的 AI 对话框中使用。

---
# 可迁移长期上下文档案

## 【长期稳定记忆】

### 1. 用户背景与学习目标

用户目前正在通过一个真实前端项目学习 Web 开发。

当前主要涉及：

* HTML
* CSS
* 原生 JavaScript
* SVG
* 浏览器事件
* localStorage
* 基础数据结构

用户已有较基础的 HTML 能力，CSS 和 JavaScript 仍处于学习阶段。

用户并不是单纯希望 AI 尽快把整个项目做完，而是希望：

```text
做项目
+
通过项目逐步理解前端开发
```

主要学习节奏是：

```text
写一点
↓
理解一点
↓
测试
↓
再继续
```

但有例外：

对于用户明确表示“不打算现在学习”的独立功能，例如近期的 CSV 导入导出，可以直接给完整可用代码，不必强行拆成教学步骤。

---

### 2. 回答与教学偏好

默认使用中文交流。

用户偏好：

* 编程步骤拆得细。
* 一次最好只增加一个小功能或一个新概念。
* 如果一步包含多个新概念，应继续拆。
* 更重视“为什么这样写”，而不是只知道代码能运行。
* 用户单独追问语法/API/数据结构时，先回答这个问题，不要急着继续项目。
* 不喜欢突然得到很大一套完整实现后再反向理解。
* 不喜欢突然展开大量高级理论。
* 如果用户说“听不懂”“简单点”，应立即减少概念和解释层级，只讲当前必须知道的内容。
* 如果用户已经明确某块“不打算学习”，则可以直接给完整实现。

推荐解释结构：

```text
代码
↓
翻译成人话
↓
结合当前 ArticleNetwork 项目说明它在干什么
```

用户对非常具体的代码问题，喜欢这种形式：

```text
找到哪一段
↓
改成什么
↓
为什么
```

---

### 3. 代码协作偏好

当用户提供现有代码时：

* 尽量基于当前代码增量修改。
* 不擅自重构成另一套架构。
* 不未经要求改成 React、Vue、D3 等框架。
* 保留用户已有注释。
* AI 新增代码不要主动加入大量注释。
* 不要为了代码风格顺手统一分号、缩进、命名等非必要问题。
* 修改后说明“增加了什么 / 修改了什么”。

用户代码中以：

```text
我想，
```

开头的注释表示未来计划。

默认规则：

* 不主动实现。
* 可以在设计当前代码时适当留余地。
* 只有用户后来明确提出时，才转为当前任务。

---

### 4. 用户学习概念的方式

用户经常在开发途中暂停功能，单独研究某个概念。

此前重点学习过：

* `let` / `const`
* `Set`
* `Map`
* `.push()`
* `.trim()`
* `.map()`
* `.filter(Boolean)`
* `.join()`
* `addEventListener()`
* `event.target`
* `event.button`
* `event.clientX / clientY`
* `event.pageX / pageY`
* `event.preventDefault()`
* `event.stopPropagation()`
* `showModal()`
* `createElement()`
* `createElementNS()`
* `appendChild()`
* `position: fixed`
* `100vw / 100vh`
* `display: block`
* checkbox 的 `.checked`
* `change` 事件
* `alert()` 与 `confirm()` 的区别

这类追问属于用户正常的学习方式，不应视为偏离项目。

---

### 5. 已建立的重要 JavaScript 理解

#### `const`

例如：

```js
const authors = new Set();
```

不是说 Set 内部不能变化。

可以：

```js
authors.add(...)
authors.delete(...)
```

理解方式：

```text
const authors
→ 这个变量不能换一个新对象

Set 里面的内容
→ 仍然可以变化
```

#### `Set`

当前主要理解：

```text
Set
→ 适合保存不重复的简单值
```

ArticleNetwork 中继续适合保存唯一作者名。

#### `Map`

用户理解：

```text
Map
=
key → value
```

例如：

```text
Tom → ["Paper A", "Paper B"]
```

并理解：

```js
map.get(key)
```

但 ArticleNetwork 后续已经决定不使用 `author → articles` 的 Map 作为正式主数据。

#### `.map()`

用户已经理解：

```js
array.map(function(item){
    return ...
});
```

等于：

```text
逐个处理数组元素
↓
收集每次 return 的结果
↓
产生新数组
```

目前 ArticleNetwork 已实际用于整理作者字符串。

#### `.filter(Boolean)`

目前用于把作者数组中的空字符串去掉。

例如：

```js
["Tom", "", "Jack"]
```

变成：

```js
["Tom", "Jack"]
```

#### `.join(";")`

近期在 CSV 导出中使用。

例如：

```js
["Tom", "Jack", "Alice"].join(";")
```

得到：

```text
Tom;Jack;Alice
```

#### checkbox

用户已经理解 checkbox 自带两种状态：

```js
checkbox.checked
```

结果为：

```text
未勾选 → false
勾选   → true
```

并使用 `change` 事件同步侧边栏固定状态。

---

# 【当前项目上下文】

# 项目：ArticleNetwork

## 1. 项目目标

ArticleNetwork 是一个论文作者关系可视化网页。

长期设想包括：

* 作者由 SVG 圆形节点表示。
* 同一篇文章的作者未来建立合作关系连线。
* 作者节点未来可能漂浮移动。
* 双击作者显示作者详情。
* 作者详情未来可能显示：

  * 论文
  * 引用数
  * 影响因子相关信息
  * 其他论文和作者资料
* 页面未来希望有较强视觉效果，例如星空风格。

这些都是长期方向，不代表当前一次实现。

当前项目同时承担：

```text
做出 ArticleNetwork
+
借 ArticleNetwork 学前端
```

---

## 2. 当前技术路线

继续使用：

* HTML
* CSS
* 原生 JavaScript
* SVG
* localStorage

目前没有采用：

* React
* Vue
* D3.js
* 后端
* 数据库
* 大型可视化框架

原因是用户希望先理解底层原理。

---

# 当前数据设计

## 3. 已确定采用“文章为中心”

这是项目近期最重要的数据设计决定。

不再把作者作为主要事实数据。

现在的核心关系是：

```text
文章
→ 作者数组
```

而不是维护：

```text
作者
→ 文章列表
```

正式主数据：

```js
const articles = [];
```

文章当前实际结构：

```js
{
    title: "Paper A",
    authors: ["Tom", "Jack"]
}
```

长期计划结构：

```js
{
    title,
    authors,
    impactFactor
}
```

其中：

```text
impactFactor
→ 属于整篇文章
→ 不属于文章中的某个单独作者
```

目前 `impactFactor` 尚未正式加入实际数据。

---

## 4. `authors` 的定位

仍保留：

```js
const authors = new Set();
```

但它不是正式持久化主数据。

当前思想：

```text
articles
= 真正的数据源

authors
= 从 articles 中整理出来的唯一作者集合
```

`authors` 主要用于：

* 判断作者节点是否已经存在。
* 创建 SVG 作者节点。
* 作者列表 UI。
* 防止重复创建相同作者。

---

## 5. `authorArticles` 已淘汰

此前曾使用：

```js
const authorArticles = new Map();
```

例如：

```text
Tom → Paper A
Jack → Paper A
```

后来认识到如果 `articles` 已经保存：

```text
Paper A → Tom, Jack
```

再维护：

```text
Tom → Paper A
Jack → Paper A
```

就是重复保存同一关系。

容易导致两份数据不一致。

因此当前正式设计是：

```text
只维护 articles
```

以后如果要查 Tom 的文章：

```text
遍历 articles
↓
检查 article.authors 是否包含 Tom
```

最新贴出的主代码中，`authorArticles` 已不再参与正式逻辑，只残留过一段被注释掉的旧代码。

---

# 当前文件结构

## 6. 主 HTML / 主代码

当前主要页面结构包括：

```text
contextMenu
inputArticleDialog
network
sideBar
settingsTab
listTab
authorContextMenu
```

右键普通页面菜单：

* 新增
* 导入
* 导出

新增文章 dialog：

```html
<h2>标题</h2>
<input id="inputArticleTitle">

<h2>作者</h2>
<input id="inputArticleAuthors">
```

作者输入目前采用英文逗号：

```text
Tom, Jack, Alice
```

SVG：

```html
<svg id="network"></svg>
```

侧边栏：

```html
<div id="sideBar" hidden>
```

标签：

* 设置
* 列表

作者列表右键菜单：

```text
删除
```

---

## 7. `ArticleData.js`

当前确认代码逻辑：

```js
const articles = [];

const inputArticleTitle = document.getElementById("inputArticleTitle");
const inputArticleAuthors = document.getElementById("inputArticleAuthors");

function saveArticleData(){
    const articleTitle = inputArticleTitle.value.trim();

    const articleAuthors = inputArticleAuthors.value
        .split(",")
        .map(function(author){
            return author.trim()
        })
        .filter(Boolean);

    const article = {
        title: articleTitle,
        authors: articleAuthors
    };

    articles.push(article);

    return article;
}
```

已经确认完成：

```text
.split(",")
↓
.map(...trim...)
↓
.filter(Boolean)
```

因此输入：

```text
Tom, Jack, , Alice
```

会得到：

```js
["Tom", "Jack", "Alice"]
```

文章使用：

```js
articles.push(article);
```

正确保存进 Array。

---

## 8. `LocalStorage.js`

当前确认代码方向：

```js
function saveLocalData(){
    localStorage.setItem(
        "articles",
        JSON.stringify(articles)
    );
}
```

读取：

```js
function loadLocalData(){
    const localArticles =
        JSON.parse(localStorage.getItem("articles"));

    if(localArticles !== null){
        localArticles.forEach(function(article){
            articles.push(article);
        });
    }
}
```

因此当前持久化关系是：

```text
articles
↓
JSON.stringify
↓
localStorage["articles"]
```

启动时：

```text
localStorage
↓
恢复 articles
↓
主代码遍历 article.authors
↓
重建 authors
↓
重建作者 SVG 节点
```

已经不再单独保存 `authors`。

---

# SVG 作者节点

## 9. 当前作者圆

SVG 圆使用：

```js
document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
);
```

当前位置只是测试排列：

```js
circle.setAttribute("cx", 50 + authors.size * 60);
circle.setAttribute("cy", 100);
circle.setAttribute("r", 20);
```

不是最终布局算法。

---

## 10. 当前拖动

已有：

```js
let draggingCircle = null;
```

流程：

```text
mousedown
→ 记录正在拖动哪个圆

mousemove
→ 修改 cx / cy

mouseup
→ draggingCircle = null
```

目前使用：

```js
event.clientX
event.clientY
```

直接作为 SVG 坐标。

暂时不要主动升级成复杂 SVG 坐标转换。

---

## 11. 作者名字功能暂缓

用户曾提出：

> 在作者圆上/旁边加作者名字。

讨论过使用 SVG `<text>`。

但用户随后明确说：

> 算了，先不整这步。

因此目前作者名字显示功能处于暂停状态。

不要因为主代码中仍有：

```text
我想，加上作者名字
```

就主动继续实现。

---

# 侧边栏

## 12. 作者列表

`SideBar.js` 中，点击：

```text
列表
```

会：

```text
清空 sideBar
↓
显示 sideBar
↓
显示作者列表标题
↓
遍历 authors
↓
每个作者创建一个 <p>
```

作者名支持右键：

```text
右键作者
↓
preventDefault()
↓
stopPropagation()
↓
关闭普通 contextMenu
↓
显示 authorContextMenu
```

---

## 13. 侧边栏固定功能

近期已经开发了“固定侧边栏”功能。

用户决定使用：

```html
<input type="checkbox">
```

而不是普通 button。

原因：

```text
checkbox
→ 天然具有 true / false 两种状态
```

当前状态变量：

```js
let sideBarPinned = false;
```

已建立一个辅助函数，大致为：

```js
function addSideBarPin(){
    const sideBarPin = document.createElement("input");
    sideBarPin.type = "checkbox";
    sideBarPin.checked = sideBarPinned;

    sideBarPin.addEventListener("change", function(){
        sideBarPinned = sideBarPin.checked;
    });

    sideBar.appendChild(sideBarPin);
}
```

关键：

```js
sideBarPin.checked = sideBarPinned;
```

用于在 sideBar 被清空并重新创建时，让新的 checkbox 继承原来的固定状态。

点击画布时逻辑为：

```js
network.addEventListener("click", function(event){
    if(
        event.target === network &&
        sideBarPinned === false
    ){
        sideBar.hidden = true;
    }
});
```

因此：

```text
未固定
→ 点击空白画布可以隐藏侧边栏

已固定
→ 点击空白画布不隐藏
```

用户希望侧边栏切换内容时固定状态继续保持，例如：

```text
作者列表 ☑
↓
双击作者
↓
作者详情仍保持 ☑
```

实现方式：

```text
每次 sideBar.innerHTML = ""
↓
重新调用 addSideBarPin()
↓
新 checkbox 使用原来的 sideBarPinned
```

用户后来表示：

> 这一块完事了。

因此可认为侧边栏固定功能已基本完成。

未来外观计划：

```text
checkbox
→ 隐藏原始方框
→ 做成图钉样式
```

目前尚未做图钉 CSS。

---

# 双击作者详情

## 14. 当前行为

双击作者圆：

```text
清空 sideBar
↓
显示 sideBar
↓
显示作者名字
↓
显示 Article 小标题
```

真正的文章列表尚未实现。

旧的：

```js
authorArticles.get(author)
```

方案已经淘汰。

未来正确方向：

```text
双击 Tom
↓
遍历 articles
↓
检查 article.authors
↓
找到包含 Tom 的文章
↓
显示 article.title
```

该功能仍是近期待办。

---

# 删除作者

## 15. 当前状态

作者列表右键菜单已经有：

```text
删除
```

用户近期开始补删除功能。

目前用户明确加入了确认：

```js
authorDelButton.addEventListener("click", function(){
    console.log("del");
    const res = confirm("确认删除吗？");
})
```

用户已经知道：

```text
alert()
→ 只有确定

confirm()
→ 确定 / 取消
```

并知道：

```text
点确定 → true
点取消 → false
```

真正删除数据的逻辑尚未确认完成。

此前讨论过一种方案：

```text
右键作者
↓
记录 selectedAuthor
↓
点删除
↓
从所有 article.authors 中移除该作者
↓
saveLocalData()
↓
刷新
```

但用户没有最终确认这一整套删除语义已经采用。

因此不要默认真正删除逻辑已经完成。

---

# 导入 / 导出

## 16. 功能已经重新启动

导入/导出早期曾因为 Blob / FileReader / CSV 太复杂而暂停。

近期用户重新明确要求：

> 补充导入导出功能，新建一个 JS 文件。

因此该功能现在已经重新成为当前任务，不再属于“暂停功能”。

专用文件命名：

```text
ImportExport.js
```

用户明确表示：

> 这个导入导出文件直接给我一个可用的 js 版本就可以了，这个我不打算现在学习。

因此未来处理这一块：

* 不必强行拆解 Blob / FileReader / CSV parser 的原理。
* 优先提供可靠可用实现。
* 如果用户后来主动问某个 API，再单独解释。

---

## 17. CSV 格式已经确定

CSV 表头：

```csv
article,author
```

用户明确不要：

```text
一个作者一行
```

而要：

```text
一篇文章一行
一个 article 对应 n 个作者
```

因此约定格式：

```csv
article,author
Paper A,Tom;Jack;Alice
Paper B,Tom;Bob
```

也就是：

```text
CSV 的逗号
→ 分隔 article 和 author 两列

author 单元格里的多个作者
→ 使用 ; 分隔
```

生成作者字符串使用：

```js
article.authors.join(";")
```

---

## 18. 已给出的完整 ImportExport.js 设计

AI 已经给过一个完整实现，功能包括：

### 导出

```text
articles
↓
转为 article,author CSV
↓
处理 CSV 中的逗号 / 双引号 / 换行
↓
Blob
↓
创建临时 URL
↓
下载 ArticleNetwork.csv
```

并加入 UTF-8 BOM：

```js
"\uFEFF"
```

以改善 CSV 中文字符在部分软件中的显示。

### 导入

设计为：

```text
点击导入
↓
动态创建 file input
↓
选择 .csv
↓
FileReader 读取
↓
parseCSV()
↓
检查表头 article,author
↓
如果当前已经有文章则 confirm
↓
确认后替换当前 articles
↓
author 字段用 ; split
↓
保存 localStorage
↓
刷新页面
```

完整版本中还包含：

```js
escapeCSV(...)
parseCSV(...)
```

以处理标题中的：

* 逗号
* 双引号
* 换行

但是：

**用户尚未明确回复已经把这份完整版本复制进去并测试成功。**

因此导入导出目前属于：

```text
格式和实现方案已经确定
完整代码已经提供
是否实际部署 / 测试成功 → 待确认
```

---

# CSS 当前情况

## 19. 当前主要样式

已有：

```css
body{
    margin: 0;
}
```

用于避免：

```text
100vw / 100vh
+
浏览器默认 body margin
```

导致多余滚动条。

`#network`：

```css
width: 100vw;
height: 100vh;
```

`#sideBar` 当前大致：

```css
position: fixed;
width: 30vw;
height: 100vh;
top: 0;
right: 0;
background-color: aquamarine;
```

设置标签和列表标签固定在右侧。

普通右键菜单和作者右键菜单目前都是白底、圆角、按钮 hover 灰色。

用户未来计划星空风格，但当前不要主动实施。

---

# 已暂停 / 不应主动恢复的功能

## 20. 圆碰撞

此前讨论：

```text
半径 20
→ 圆心距离至少 40
```

以及距离公式。

用户明确暂停。

除非用户重新提出，不主动恢复。

---

## 21. 合作连线

代码中可能仍有：

```js
const collaborations = new Set();
```

但合作连线功能暂停。

不要主动实现。

---

## 22. 作者名字

近期重新提出过，但又明确取消当前实施。

目前继续暂停。

---

# 已明确达成的规则和共识

1. 中文交流。
2. ArticleNetwork 同时是项目和学习工具。
3. 默认一次推进一个很小的功能。
4. 用户说“太多 / 听不懂 / 简单点”时，继续缩小步骤。
5. 基于当前代码增量修改。
6. 保留用户已有注释。
7. AI 新增代码不要主动塞大量注释。
8. `我想，` 开头的注释默认属于未来计划。
9. 修改后说明增加和修改的内容。
10. 用户单独问语法时先解释语法。
11. 当前继续原生 HTML / CSS / JS / SVG。
12. 不未经要求改框架。
13. `articles` 是正式主数据。
14. `authors` 是由文章整理出的唯一作者集合。
15. 一篇文章只保存一次。
16. 一个作者可以出现在很多篇文章中。
17. 不正式维护 `authorArticles` 第二份关系数据。
18. localStorage 围绕 `articles` 保存和恢复。
19. 文章最终方向：

```js
{
    title,
    authors,
    impactFactor
}
```

20. `impactFactor` 属于文章。
21. 双击作者查论文最终直接查询 `articles`。
22. 侧边栏固定状态使用 checkbox 的 `checked` 表示。
23. 导入导出是用户明确表示“不打算现在学习”的模块，可以直接给完整代码。
24. CSV 一篇文章一行。
25. CSV 作者列多个作者使用 `;` 分隔。

---

# 用户曾纠正 AI / 以后避免的问题

## 1. 一步给太多

AI 曾多次一次加入太多概念。

用户希望：

```text
一次一个小点
```

不要同时加入：

* 数据结构
* UI
* localStorage
* 查询
* 删除
* 样式
* 多个函数

除非用户明确说某个模块不打算学习，希望直接拿完整版本。

---

## 2. 不要脱离现有代码

用户明确希望：

```text
在自己的代码基础上添加
```

优先：

```text
你现在这里是……
↓
改成……
↓
这一句为什么……
```

不要突然重写整个项目。

---

## 3. 不要把未来注释当当前任务

例如：

```text
我想，星空样式
我想，禁止碰撞
我想，自由拉伸
我想，标签随动
我想，撤回功能
```

都不是自动执行指令。

---

## 4. 不要过早复杂化数据模型

曾经考虑把作者做成复杂 Map。

用户后来更倾向：

```text
文章 → Array
作者唯一列表 → Set
```

不要因为“以后可能扩展”而提前大规模重构。

---

## 5. 不要重复保存同一事实

当前重要设计认识：

```text
articles 已经保存
Paper A → Tom, Jack
```

就不要再正式维护：

```text
Tom → Paper A
Jack → Paper A
```

作为另一份独立关系数据。

---

## 6. 用户要求简单时不要继续讲外围问题

在侧边栏固定功能中，AI 曾开始解释脚本加载顺序等问题，用户直接表示：

> 听不懂，简单点。

以后发生这种情况：

```text
先解决当前眼前的一步
```

不要同时展开作用域、脚本加载、架构等外围知识。

除非这些问题已经导致当前代码无法运行。

---

# 【当前优先级】

## 最高近期优先级：导入 / 导出

用户刚刚明确把当前工作转向：

```text
ImportExport.js
```

CSV 已确定：

```csv
article,author
Paper A,Tom;Jack
```

完整代码已经给出。

下一次继续时最自然的是：

```text
确认 ImportExport.js 是否已经复制并测试
↓
如果有报错直接修
↓
如果正常则该模块完成
```

不要重新从 `.join()`、Blob、FileReader 开始教学，除非用户主动问。

---

## 之后可继续：删除作者

目前只有：

```text
confirm 删除确认
```

真正删除数据尚未确认完成。

之后需要决定并实现：

```text
右键选中哪个作者
↓
确认删除
↓
具体从数据里怎么删除
```

---

## 再之后：影响因子

文章最终数据模型已经确定有：

```js
impactFactor
```

但 HTML 目前没有输入框。

以后应单独做：

```text
加入影响因子输入
↓
读取
↓
写入 article.impactFactor
```

不要和其他功能一起实施。

---

## 再之后：双击作者显示论文

最终逻辑：

```text
双击 author
↓
遍历 articles
↓
article.authors 中包含 author？
↓
显示 article.title
```

不要恢复 `authorArticles` Map。

---

# 【待确认信息】

## 1. ImportExport.js 是否已经真正部署并测试

完整可用代码已经提供。

但用户尚未明确确认：

```text
已经复制
+
导入成功
+
导出成功
```

下一次继续该模块时先根据用户最新代码/测试结果判断。

---

## 2. 删除作者的最终语义

尚未正式确定：

删除一个作者究竟是否意味着：

* 从所有文章的 `authors` 中删除；
* 只隐藏作者节点；
* 是否删除 SVG 圆；
* 某篇文章删完后变成零作者怎么办；
* 是否立即同步 localStorage。

此前提出过“从所有 article.authors 中删除”的方案，但用户尚未明确最终确认。

不要自行把它当成既定规则。

---

## 3. 删除逻辑是否已经保存选中作者

实现删除通常需要：

```js
selectedAuthor
```

记录右键的是谁。

此前讨论过，但用户没有贴出完成后的代码。

因此不能默认已经存在。

---

## 4. `impactFactor`

数据结构方向已确定。

实际代码尚未加入。

---

## 5. 双击作者显示论文

仍未正式实现。

---

## 6. 作者图钉样式

checkbox 固定逻辑基本完成。

用户长期希望改成图钉视觉。

CSS 尚未实现。

---

## 7. 最新 `addAuthorCircle()` 状态

用户最新一次贴出的主代码中，仍存在一个值得未来核对的问题：

调用处有：

```js
addAuthorCircle(author);
```

但函数定义仍类似：

```js
function addAuthorCircle(){
```

且函数内部又：

```js
authors.forEach(function(author){
```

这可能造成创建节点逻辑重复或参数没有真正被使用。

之前准备“加作者名字”时曾考虑把它整理成：

```js
function addAuthorCircle(author)
```

只创建当前作者的一个圆。

但用户随后取消了作者名字功能，因此这一结构是否已经修改不确定。

未来如果出现：

* 重复圆
* 节点数量异常
* 新增作者时多个节点重复生成

应优先检查这里。

不要在没有症状时突然重构它。

---

## 8. JavaScript 文件加载顺序

某次主文件版本中：

```html
<script src="ArticleData.js"></script>
<script src="LocalStorage.js"></script>
<script src="SideBar.js"></script>
```

出现在主 `<script>` 定义 `sideBar`、`listTab` 等变量之前。

而 `SideBar.js` 会直接使用这些变量。

理论上这可能产生脚本执行顺序问题。

但是用户当时没有继续处理，而且后续功能似乎能运行。

因此：

```text
具体最新 script 顺序 → 不确定
```

只有遇到：

```text
xxx is not defined
```

之类错误时再核对，不要现在主动展开复杂解释。

---

# 容易被普通摘要遗漏、但对理解用户很重要的信息

## 1. “学习优先”并不是所有代码都必须教学

一般 ArticleNetwork 功能：

```text
拆小
+
解释
+
让用户自己理解
```

但如果用户明确说：

> 这个我不打算现在学习。

例如当前 ImportExport.js，则应该切换模式：

```text
直接给可靠完整实现
```

不要坚持逐行教学。

---

## 2. 用户会主动重新思考数据结构

从：

```text
作者 → 论文 Map
```

重新设计成：

```text
文章 → 作者数组
```

是用户通过实践理解数据建模的过程。

AI 应协助比较结构含义，而不是替用户一次设计一个很复杂的最终架构。

---

## 3. 用户很在意“数据到底长什么样”

解释数组、对象、Set、Map、CSV 时最好给实际形态。

例如：

```js
{
    title: "Paper A",
    authors: ["Tom", "Jack"]
}
```

比只说“这是对象”更有帮助。

---

## 4. ArticleNetwork 当前核心数据观

一定要保持：

```text
文章是主要事实数据

作者集合是从文章推导出的辅助结构
```

这是当前架构最重要的原则。

---

## 5. UI 状态和数据状态应区分

近期侧边栏固定功能中已经形成这种思路：

```text
sideBarPinned
→ 保存逻辑状态

checkbox
→ 显示 / 修改这个状态
```

侧边栏内容即使被：

```js
sideBar.innerHTML = "";
```

清空，固定状态仍应保留。

这是用户当前已经开始理解的 UI 状态概念。

---

# 给新 AI 的使用说明

以下内容可以默认采用，不需要反复询问：

* 使用中文。
* 用户正在用 ArticleNetwork 学习前端。
* 默认一次只推进一个小步骤。
* 基于用户现有代码增量修改。
* 保留用户原有注释。
* AI 新增代码不要大量加注释。
* `我想，` 开头默认是未来计划。
* 当前继续原生 HTML / CSS / JS / SVG。
* `articles` 是文章主数据。
* `authors` 是由文章推导出的唯一作者 Set。
* 不再使用 `authorArticles` 作为正式数据源。
* localStorage 只围绕 `articles`。
* 当前实际文章结构为：

  ```js
  {
      title,
      authors
  }
  ```
* `impactFactor` 是未来字段。
* 作者输入已经使用 `.split(",").map(...trim...).filter(Boolean)`。
* 侧边栏已经采用 checkbox 固定状态设计。
* CSV 格式已确定为：

  ```csv
  article,author
  Paper A,Tom;Jack;Alice
  ```
* CSV 一篇文章一行。
* 作者之间用 `;`。
* ImportExport.js 属于用户不准备当前深入学习的模块，可直接提供完整实用代码。

继续前需要视具体任务确认：

1. 最新 `ImportExport.js` 是否已经实际部署并通过测试。
2. 真正删除作者的代码是否已经实现。
3. 删除作者究竟采用什么数据语义。
4. `selectedAuthor` 是否已经存在。
5. `impactFactor` 是否后来加入。
6. 双击作者显示论文是否后来完成。
7. `addAuthorCircle()` 是否仍然存在函数参数和内部 `authors.forEach()` 的结构问题。
8. 最新 HTML 中各 JS 文件的加载顺序。
9. 图钉样式是否已经实现。

如果用户下一条直接贴最新代码：

```text
以最新代码为准
```

不要让这份档案覆盖用户当前代码。

如果用户下一条继续问某个 JavaScript 概念：

```text
先回答那个概念
```

不要催着继续项目。

如果用户说：

```text
听不懂
简单点
还是太多
```

立即缩减到当前最小一步。

当前最自然的项目继续点是：

```text
确认 ImportExport.js
↓
测试 CSV 导出 / 导入
↓
完成后再回到删除作者
↓
之后影响因子
↓
之后双击作者查询文章
```
