class CreateFreebies < ActiveRecord::Migration[6.1]
  def change
    create_table :freebies do |t|
      t.belongs_to :dev
      t.belongs_to :company
      t.integer :value
      t.string :item_name
    end
  end
end
