import math
import sys

lSlices = ()#(0, 0, 0, 25, 25, 20) # percentages to show in pie

lOffsetX = 150
lOffsetY = 150

lRadius = 100

def endpoint(pAngleInRadians, pRadius, pCentreOffsetX, pCentreOffsetY):
  """
  Calculate position of point on circle given an angle, a radius, and the location of the center of the circle
  Zero line points west.
  """
  lCosAngle = math.cos(pAngleInRadians)
  lSinAngle = math.sin(pAngleInRadians)
  lStartLineDestinationX =  pCentreOffsetX - (lRadius * lCosAngle)
  lStartLineDestinationY =  pCentreOffsetY - (lRadius * lSinAngle)

  return (lStartLineDestinationX, lStartLineDestinationY)

GRADIENTS = ('orange', 'yellow', 'red', 'green', 'fuchsia', 'blue', 'greenyellow')
DEGREES_IN_CIRCLE = 360.0
lSvgPath = ""
lCurrentAngle = 0
lTotalSlices = 0
lIndex = 0
lSvgPath = ""

args = iter(sys.argv)
next(args)
for i in args:
    print("Got: ", i)
    lSlices = lSlices + (int(i),)
if len(lSlices) > len(GRADIENTS):
    print("Need more colors")
    quit()
print(lSlices)
for x in lSlices:
  lTotalSlices += x

print lTotalSlices

counter = 0
lastPositive = -1
index = 0
for lSlice in lSlices:
  if(lSlice > 0):
      counter += 1
      lastPositive = index

  index += 1
  lLineOneX, lLineOneY = endpoint(lCurrentAngle, lRadius, lOffsetX, lOffsetY)
  lLineOne = "M%d,%d L%d,%d" % (lOffsetX, lOffsetY, lLineOneX, lLineOneY)

  lPercent = lSlice
  print "percent = %d " % lPercent
  lDegrees = (DEGREES_IN_CIRCLE / lTotalSlices) * lSlice
  print "degrees = %d " % lDegrees
  lRadians = math.radians(lDegrees)
  lCurrentAngle += lRadians
  print "current angle = %f %f" % (lCurrentAngle, math.degrees(lCurrentAngle))
  lLineTwoX, lLineTwoY = endpoint(lCurrentAngle, lRadius, lOffsetX, lOffsetY)

  lRoute = 0
  if lDegrees > 180:
    lRoute = 1
  lArc = "A%d,%d 0 %d,1 %d %d" % (lRadius, lRadius, lRoute, lLineTwoX, lLineTwoY)
  lLineTwo = "L%d,%d" % (lOffsetX, lOffsetY)

  lPath = "%s %s %s" % (lLineOne, lArc, lLineTwo)
  lGradient = GRADIENTS[lIndex]
  lSvgPath += "<path d='%s' style='stroke:#660000; fill:%s;'/>" % (lPath, lGradient)
  lIndex += 1

if counter == 0:
    quit()
elif counter == 1:
    lSvgPath = "<path d='%s' style='stroke:#660000; fill:%s;'/>" % ('M 100 0 A 100 100 0 1 1 100 -2.4492935982947064e-16', GRADIENTS[lastPositive])
else:
    print("normal")

lSvg = """
<svg  xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">
  %s
<!--  <circle cx="%d" cy="%d" r="100" style="stroke:#006600; fill:none;"/> -->
</svg>
""" % (lSvgPath, lOffsetX, lOffsetY)
print(map(str, lSlices))
filename=''.join(map(str, lSlices))
filename+=".svg"
print filename
lFile = open(filename, 'w')
lFile.write(lSvg)
lFile.close()
