import PIL
import tkinter as tk
import customtkinter as ctk

ctk.set_appearance_mode("System")
ctk.set_default_color_theme("blue")

app = ctk.CTk()

label3=ctk.CTkLabel(app, text="", fg_color='#F08080', width=500, height=400)
label3.place(relx=0.3, rely=0)
label2=ctk.CTkLabel(app, text="", fg_color='#FF1493', width=200, height=400)
label2.place(relx=0, rely=0)


app.geometry("600x400")

entry1=ctk.CTkEntry(app, placeholder_text="Digite aqui seu nome")
nome=entry1
entry1.place(relx=0.5, rely=0.5, anchor=ctk.CENTER)
label1=ctk.CTkLabel(app, text="Esse é um teste beleza mais preciso do mundo")
label1.place(relx=0.5, rely=0.1, anchor=ctk.CENTER)


def button_enter():
    print('Apertado')
    if(nome=="Bia"):
        progressBar.set(0)
    if(nome=="Daniel"):
        progressBar.set(1)

button = ctk.CTkButton(master=app, text="Testar", command=button_enter, fg_color="red", hover_color="pink")
button.place(relx=0.5, rely=0.6, anchor=ctk.CENTER)

progressBar = ctk.CTkProgressBar(
    master=app,
    width=160,
    height=20,
    border_width=5, progress_color="#FF0000"
)
progressBar.place(relx=0.5, rely=0.8, anchor=ctk.CENTER)
progressBar.set(0)

# nome = input('qual seu nome?')

# if(nome == 'Bia'):
#     print('Você é feia e está devendo um cigarro ao Daniel!')
# if(nome == 'Daniel'):
#     print('Você é lindo e maravilhoso.')
    
app.mainloop()