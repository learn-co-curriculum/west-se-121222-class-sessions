class Dev < ActiveRecord::Base

    def self.dev_with_highest_value_of_freebies # not in deliverables
        self.all.max_by(&:total_freebies_value)
    end

    has_many :freebies
    has_many :companies, through: :freebies

    def received_one?(item_name)
        # self.freebies.any? { |f| f.item_name == item_name } 
        # self.freebies.pluck(:item_name).include?(item_name)
        # self.freebies.find_by(item_name: item_name) ? true : false
        !!self.freebies.find_by(item_name: item_name)
    end

    def give_away(dev, freebie)
        # if freebie.dev != self
        #     "Dev doesn't own this item!"
        # else
        #     # new_freebie = self.freebies.where(item_name: freebie.item_name).first
        #     freebie.update(dev: dev)
        #     dev.reload
        # end
        freebie.update(dev: dev) unless freebie.dev != self
    end

    def total_freebies_value # not in deliverables
        self.freebies.sum(:value)
    end

end
