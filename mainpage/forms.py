from django import forms
from .models import FeedbackCommittee, Category
from captcha.fields import ReCaptchaField

class FeedbackCommitteeForm(forms.ModelForm):
  name = forms.CharField(label="", widget=forms.TextInput(attrs={'placeholder': 'Введите ваше имя'}))
  email = forms.EmailField(label="", widget=forms.TextInput(attrs={'placeholder': 'Введите ваш email'}))
  text = forms.CharField(label="", widget=forms.TextInput(attrs={'placeholder': 'Ваше сообщение'}))
  checkbox = forms.BooleanField(label="", widget=forms.CheckboxInput())

  class Meta:
    model = FeedbackCommittee
    fields = ['name', 'email', 'text', 'checkbox',]

class FeedbackPhoneForm(forms.ModelForm):
  name = forms.CharField(label="", widget=forms.TextInput(attrs={'placeholder': 'Введите ваше имя'}))
  phone = forms.CharField(label="", widget=forms.TextInput(attrs={'placeholder': 'Введите ваш телефон'}))
  checkbox = forms.BooleanField(label="", widget=forms.CheckboxInput())

  class Meta:
    model = FeedbackCommittee
    fields = ['name', 'phone', 'checkbox',]