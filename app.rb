require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, "sqlite3:pizzashop.db"

class Product < ActiveRecord::Base
end

class Order < ActiveRecord::Base
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
	@testorder = params[:testorder]
	@testorder2 = params[:testorder2]
	@clientsname = params[:clientsname]
	@clientsphone = params[:clientsphone]
	erb :blabla
end