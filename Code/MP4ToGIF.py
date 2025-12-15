import cv2
from PIL import Image
import os
import tempfile

def mp4_to_gif(mp4_path, gif_path, fps=None):
    """
    将MP4文件转换为GIF文件，保持原始画质
    
    参数:
        mp4_path (str): 输入MP4文件的路径
        gif_path (str): 输出GIF文件的路径
        fps (int, optional): 输出GIF的帧率，默认使用原视频帧率
    """
    # 打开视频文件
    cap = cv2.VideoCapture(mp4_path)
    
    # 检查视频是否成功打开
    if not cap.isOpened():
        raise ValueError(f"无法打开视频文件: {mp4_path}")
    
    # 获取视频属性
    frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    
    # 获取帧率，如果未指定则使用原视频帧率
    if fps is None:
        fps = cap.get(cv2.CAP_PROP_FPS)
    
    print(f"视频信息: {width}x{height}, {frame_count}帧, {fps:.2f} FPS")
    
    # 存储所有帧的临时列表
    frames = []
    
    try:
        # 读取视频帧
        while True:
            ret, frame = cap.read()
            if not ret:
                break
            
            # OpenCV使用BGR格式，转换为RGB格式以便PIL处理
            frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            
            # 转换为PIL Image并添加到列表
            pil_image = Image.fromarray(frame_rgb)
            frames.append(pil_image)
            
            # 显示进度
            if len(frames) % 10 == 0:
                print(f"已处理 {len(frames)}/{frame_count} 帧", end="\r")
        
        print(f"\n处理完成，共 {len(frames)} 帧")
        
        # 保存为GIF，不压缩画质
        # duration控制每帧的持续时间(毫秒)，loop=0表示无限循环
        duration = int(1000 / fps)
        frames[0].save(
            gif_path,
            format='GIF',
            append_images=frames[1:],
            save_all=True,
            duration=duration,
            loop=0,
            quality=100,  # 最高质量
            optimize=False  # 不优化，避免压缩
        )
        
        print(f"GIF已保存至: {gif_path}")
        
    finally:
        # 释放资源
        cap.release()

if __name__ == "__main__":
    # 示例用法
    input_mp4 = r"C:\Users\FishAsh\Desktop\屏幕录制 2025-09-26 230510.mp4"    # 输入MP4文件路径
    output_gif = r"C:\Users\FishAsh\Desktop\屏幕录制 2025-09-26 230510.gif"  # 输出GIF文件路径
    
    # 检查输入文件是否存在
    if not os.path.exists(input_mp4):
        print(f"错误: 输入文件 '{input_mp4}' 不存在")
    else:
        try:
            mp4_to_gif(input_mp4, output_gif)
        except Exception as e:
            print(f"转换失败: {str(e)}")