# serializers.py
from rest_framework import serializers
from .models import Faction, Platoons, Unit

class FactionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Faction
        fields = ('id', 'faction_name')

class PlatoonsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Platoons
        fields = ('id', 'platoon_name', 'platoon_image', 'faction_id')

class UnitSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Unit
        fields = ('rank', 'designation', 'type', 'category', 'size', 'frame_SP', 'propulsion_SP', 'weapons_SP',
                  'numbers_bonus', 'affiliation', 'movement', 'morale', 'protection', 'combat', 'leadership_points',
                  'authority')
