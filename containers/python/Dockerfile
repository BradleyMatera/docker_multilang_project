FROM python:3.12-alpine
WORKDIR /app
COPY app.py .
RUN pip install --no-cache-dir flask
EXPOSE 7003
CMD ["python", "app.py"]
