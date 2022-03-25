from django.forms import ModelForm
from .models import *

# Create LinkForm
class LinkForm(ModelForm):
    
    class Meta :
        model = Shortener_link
        fields = "__all__"
