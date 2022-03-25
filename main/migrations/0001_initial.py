# Generated by Django 4.0.3 on 2022-03-25 03:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Shortener_link',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('long_link', models.URLField()),
                ('short_link', models.CharField(max_length=100, unique=True)),
            ],
        ),
    ]
