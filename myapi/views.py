from django.shortcuts import render
from rest_framework import viewsets

from .serializers import FactionSerializer, PlatoonsSerializer, UnitSerializer
from .models import Faction, Platoons, Unit


class FactionViewSet(viewsets.ModelViewSet):
    queryset = Faction.objects.all().order_by('id')
    serializer_class = FactionSerializer

class PlatoonsViewSet(viewsets.ModelViewSet):
    queryset = Platoons.objects.all().order_by('id')
    serializer_class = PlatoonsSerializer

class UnitViewSet(viewsets.ModelViewSet):
    queryset = Unit.objects.all().order_by('id')
    serializer_class = UnitSerializer