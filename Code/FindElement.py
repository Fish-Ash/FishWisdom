import os

def find_html_with_content(folder_path, target_content, case_sensitive=False):
    result_files = []
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.lower().endswith(('.html', '.htm')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                        content = f.read()
                    
                    if not case_sensitive:
                        content = content.lower()
                        target = target_content.lower()
                    else:
                        target = target_content
                    
                    if target in content:
                        result_files.append(file_path)
                        print(f"找到匹配: {file_path}")
                except Exception as e:
                    print(f"错误 {file_path}: {str(e)}")
    return result_files

# 使用示例
if __name__ == "__main__":
    search_folder = "D:\Code\Git\FishWisdom\HTML"  # 替换为目标文件夹路径
    target_content = "BoundaryCondition"  # 替换为要搜索的内容
    matching_files = find_html_with_content(search_folder, target_content)
    
    print("\n搜索结果:")
    if matching_files:
        print(f"共找到 {len(matching_files)} 个文件:")
        for path in matching_files:
            print(f"- {path}")
    else:
        print("未找到匹配文件")