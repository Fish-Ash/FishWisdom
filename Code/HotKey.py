import keyboard
import pyperclip
import time

TEXT_TO_PASTE = "Hello, World!"

def paste_text():
    pyperclip.copy(TEXT_TO_PASTE)
    time.sleep(0.05)
    keyboard.send('ctrl+v')

# 将热键改为 Alt+Q
keyboard.add_hotkey('', paste_text)

print("脚本已启动，按 Alt+Q 粘贴预设文本。按 ESC 退出。")
keyboard.wait('esc')