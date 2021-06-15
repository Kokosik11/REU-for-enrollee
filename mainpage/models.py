from django.db import models
import uuid

class Category(models.Model):
  title = models.CharField("Название", max_length=200)
  created_on = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return self.title

  class Meta:
    ordering = ['-created_on']
    verbose_name = "Категория"
    verbose_name_plural = "Категории"

class FeedbackCommittee(models.Model):

  STATUS = (
    (0, "Оформлена"),
    (1, "Принята"),
  )

  def generateUUID():
    return str(uuid.uuid4().hex[:4].upper())

  
  name = models.CharField("Имя", max_length=120)
  text = models.TextField("Телефон", max_length=100, default="")
  email = models.EmailField("Email", default="")
  created_on = models.DateTimeField("Дата оформления", auto_now_add=True)
  category = models.OneToOneField(Category, on_delete=models.CASCADE, related_name="category", blank=True, null=True)
  number = models.CharField("Номер заказа", primary_key=True, default=generateUUID, max_length=50, editable=False)
  status = models.IntegerField(choices=STATUS, default=0)
  checkbox = models.BooleanField(default=False)
  phone = models.CharField("Телефон", max_length=30, default="")

  def __str__(self) -> str:
    return f'{self.name} - {self.number}'

  class Meta:
    ordering = ['-created_on']
    verbose_name = "Заявка"
    verbose_name_plural = "Заявки"
