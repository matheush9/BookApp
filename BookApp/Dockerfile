#Build stage
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /source
COPY . . 
RUN dotnet restore "./BookApp.csproj" --disable-parallel
RUN dotnet publish "./BookApp.csproj" -c release -o /app --no-restore

#Serve stage
FROM mcr.microsoft.com/dotnet/sdk:7.0
WORKDIR /app
COPY --from=build /app ./

EXPOSE 5000

ENTRYPOINT ["dotnet", "BookApp.dll"]