import cv2

cap = cv2.VideoCapture(0)

while(True):
    ret, frame = cap.read()
    frame = cv2.flip(frame, 1)
    cv2.imshow("video", frame)
    c = cv2.waitKey(50)
    if c == ord('q'):
        break