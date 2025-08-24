import os

def replace_class_in_html(folder_path):
    """
    检索指定文件夹内所有HTML文件，替换class="prove"为class="Prove"
    
    参数:
        folder_path: 目标文件夹路径
    """
    # 遍历文件夹内所有文件和子文件夹
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            # 筛选出HTML文件（包括 .html 和 .htm 后缀）
            if file.lower().endswith(('.html', '.htm')):
                file_path = os.path.join(root, file)
                
                try:
                    # 读取文件内容（使用utf-8编码，兼容中文等特殊字符）
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    # 替换目标字符串（精确匹配，区分引号类型）
                    # 同时处理双引号和单引号的情况（如 class='prove'）
                    new_content = content.replace('id="PowerFunction"', 'id="Power"')                    
                    # 仅当内容有变化时才写入，避免无效操作
                    if new_content != content:
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"已处理: {file_path}")
                
                except Exception as e:
                    print(f"处理文件时出错 {file_path}: {str(e)}")

# 使用示例：替换当前目录下的所有HTML文件
if __name__ == "__main__":
    target_folder = "D:\Code\Git\FishWisdom\HTML"
    replace_class_in_html(target_folder)
    print("替换完成！")