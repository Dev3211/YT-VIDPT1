class random:

   def __init__(self, animaltype, name, canfly):
    self.animaltype = animaltype
    self.name = name
    self.fly = canfly

   def getanimaltype(self):
    return self.animaltype

   def getobjects(self):
    print('{} {} {}'.format(self.animaltype, self.name, self.fly))

ok = random('bird', 'penguin', 'no').getobjects()

