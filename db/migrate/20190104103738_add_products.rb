class AddProducts < ActiveRecord::Migration[5.2]
  def change
    Product.create :title => "Hawaiian", :description => "Classic Hawaiian pizza with pineapple, bacon and cheese.", :price => 400, :size => 30, :is_spicy => false, :is_veg => false, :is_best_offer => false, :path_to_image => "/images/hawaiian.jpg"

    Product.create :title => "Margarita", :description => "Amazing Margarita with mozzarella, tomatoes and basil.", :price => 350, :size => 40, :is_spicy => false, :is_veg => true, :is_best_offer => true, :path_to_image => "/images/margarita.jpg"

    Product.create :title => "Pepperoni", :description => "Hot Pepperoni pizza with salami, spice and cheese.", :price => 350, :size => 30, :is_spicy => true, :is_veg => false, :is_best_offer => true, :path_to_image => "/images/pepperoni.jpg"
  end
end
