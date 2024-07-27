using Microsoft.EntityFrameworkCore;
using Accounting_assistant.Models;
using Accounting_assistant.Context;
using Accounting_assistant.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

//waterbill ×¢Èë
if (builder.Environment.IsDevelopment())
{
    builder.Services.AddDbContext<WaterBillContext>(options =>
        options.UseInMemoryDatabase("WaterBill"));
}
else
{
    builder.Services.AddDbContext<WaterBillContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("WaterBillContext")
            ?? throw new InvalidOperationException("Connection string 'WaterBillContext' not found")));
}

builder.Services.AddScoped<IWaterBillRepository, WaterBillRepository>();
//powerbill ×¢Èë
if (builder.Environment.IsDevelopment())
{
    builder.Services.AddDbContext<PowerBillContext>(options =>
        options.UseInMemoryDatabase("PowerBill"));
}
else
{
    builder.Services.AddDbContext<PowerBillContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("PowerBillContext")
            ?? throw new InvalidOperationException("Connection string 'PowerBillContext' not found")));
}

builder.Services.AddScoped<IPowerBillRepository, PowerBillRepository>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
