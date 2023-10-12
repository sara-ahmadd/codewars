def whatTimeIsIt(ang) :
    while ang > 360 :
        ang = ang - 360

    hr = None
    mins = None

    if ang < 30 : hr = 12
    
    mins = int((ang % 30) * 2)
    hr = int(ang / 30)
    
    if hr >= 10 : hr 
    else: hr = '0' + str(hr)
    
    if mins >= 10 : mins
    else: mins ='0' + str(mins)
    
    return str(hr )+ ':' + str(mins)


print(whatTimeIsIt(40))

