class CreateVisitations < ActiveRecord::Migration[5.2]
  def change
    create_table :visitations do |t|
      t.datetime :date
      t.belongs_to :alien
      t.belongs_to :earthling
    end
  end
end
