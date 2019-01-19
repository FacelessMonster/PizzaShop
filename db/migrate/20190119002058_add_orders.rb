class AddOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.text :order
      t.text :name
      t.text :phone
      t.text :price
      t.timestamps
    end
  end
end
