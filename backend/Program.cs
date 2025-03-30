var builder = WebApplication.CreateBuilder(args);

// **Add this line to register controllers**
builder.Services.AddControllers();

var app = builder.Build();

app.UseCors(policy =>
    policy.AllowAnyOrigin()
          .AllowAnyMethod()
          .AllowAnyHeader());

app.MapControllers(); // Ensure controllers are mapped properly

app.Run();
