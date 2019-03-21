require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, "sqlite3:pizzashop.db"

class Product < ActiveRecord::Base
end

class Order < ActiveRecord::Base
	validates :name, presence: true, length: {minimum:1}
	validates :phone, presence: true
end

before do
	@products = Product.all
end

get '/' do
	erb :index
end

get '/cart' do
	erb :cart
end

post '/cart' do
	@orders = Order.new params[:orders]
	if @orders.save
		erb :blabla
	else
		@error = @orders.errors.full_messages.first
		erb :cart
	end
end

get '/manager' do
	erb :manager
end

post '/manager' do
	erb :manager
	@login = params[:login]
	@pass = params[:password]
	if @login == "sebastian" && @pass == "pid0rin"
		@admin = Order.all
		erb :admin
	else
		erb :manager
	end
end
