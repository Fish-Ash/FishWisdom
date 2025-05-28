import fitz  # PyMuPDF
import os
import sys

def pdf_to_images(pdf_path, output_folder, dpi=200):
    """
    将PDF每一页转换为图片
    :param pdf_path: PDF文件路径
    :param output_folder: 输出文件夹路径
    :param dpi: 输出图片分辨率，默认200
    """
    try:
        # 检查PDF文件是否存在
        if not os.path.exists(pdf_path):
            raise FileNotFoundError(f"PDF文件 '{pdf_path}' 不存在")

        # 创建输出目录
        os.makedirs(output_folder, exist_ok=True)

        # 打开PDF文件
        doc = fitz.open(pdf_path)
        total_pages = len(doc)
        
        if total_pages == 0:
            print("警告：PDF文件没有有效页面")
            return

        # 计算缩放比例（默认PDF DPI为72）
        zoom = dpi / 72
        matrix = fitz.Matrix(zoom, zoom)

        # 遍历每一页
        for page_num in range(total_pages):
            page = doc.load_page(page_num)
            pix = page.get_pixmap(matrix=matrix)
            
            # 生成输出路径
            output_path = os.path.join(
                output_folder, 
                f"page_{page_num + 1}.png"  # 页码从1开始
            )
            
            # 保存图片
            pix.save(output_path)
            print(f"已转换第 {page_num + 1}/{total_pages} 页")

        print(f"转换完成！共转换 {total_pages} 页到目录：{output_folder}")

    except Exception as e:
        print(f"发生错误：{str(e)}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    # 用户输入处理
    pdf_path = input("请输入PDF文件路径：").strip()
    output_folder = input("请输入输出文件夹路径（默认：./output_pages）：").strip() or "./output_pages"
    dpi_input = input("请输入DPI分辨率（默认：200）：").strip()
    dpi = int(dpi_input) if dpi_input.isdigit() else 200

    # 执行转换
    pdf_to_images(pdf_path, output_folder, dpi)