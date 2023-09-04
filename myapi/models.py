from django.db import models

# Create your models here.
class Faction(models.Model):
    faction_name = models.CharField(max_length=50)

    def __str__(self):
        return self.faction_name

class Platoons(models.Model):
    platoon_name = models.CharField(max_length=50)
    platoon_image = models.CharField(max_length=100)
    faction_id = models.BigIntegerField()

    def __str__(self):
        return self.platoon_name

class Unit(models.Model):
    rank = models.CharField(max_length=10, default='')
    designation = models.CharField(max_length=50, default='')
    type = models.BigIntegerField(default=0)
    category = models.CharField(max_length=15, default='')
    size = models.BigIntegerField(default=0)
    frame_SP = models.BigIntegerField(default=0)
    propulsion_SP = models.BigIntegerField(default=0)
    weapons_SP = models.BigIntegerField(default=0)
    numbers_bonus = models.BigIntegerField(default=0)
    affiliation = models.BigIntegerField(default=0)
    movement = models.BigIntegerField(default=0)
    morale = models.BigIntegerField(default=0)
    protection = models.BigIntegerField(default=0)
    combat = models.BigIntegerField(default=0)
    leadership_points = models.BigIntegerField(default=0)
    authority = models.BigIntegerField(default=0)

    def __str__(self):
        return self.designation