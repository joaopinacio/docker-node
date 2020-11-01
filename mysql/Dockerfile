FROM mysql:latest

#-----------------------------------------------------------------------------------------------#
# Ajusta a configuração do PostgreSQL para ser possível fazer conexão remota ao banco de dados. #
#-----------------------------------------------------------------------------------------------#
RUN sed -i -e"s/^bind-address\s*=\s*127.0.0.1/bind-address = 0.0.0.0/" /etc/mysql/my.cnf

CMD ["mysqld"]

EXPOSE 3306