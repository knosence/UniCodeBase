print("Hello, World");

print("""
This is multiple lines
""")

age = 21;

name = "Nadario Seays"

print ("Hello, %s" %name);

first = "Nadario";
last = "Seays";
print("Hello, %s %s" %(first, last));

# conditionals
# Python is indented.
if(1==2):
    print ("true")
elif(2 == 3):
    print ("Huh?")
else:
    print ("False")

# There is no triple equals

import random;
randNumber = random.randint(1,10);
print("randNumber")

# While loop.
keepGoing = True;
while keepGoing:
    keepGoing = False;
print ("You are out of the loop!");
