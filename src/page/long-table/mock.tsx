import Mock from 'mockjs';

const Random = Mock.Random
export const MockData =  Mock.mock({
  'list|100-200': [
    {
      "rent_total_amount_rmb_of_monthly": Random.integer(100,1000),
      "rent_total_amount_of_monthly": Random.integer(100,1000),
      "maintain_price": Random.integer(100,1000),
      "resource_quote_list|1-10": [
        {
          "tech_solution_resource_detail_id|+1": 1,
          "resource_alias": Random.string( 5, 10),
          "product": {
            "name": Random.string( 5, 10 ),
            "id": Random.integer(1,1000)
          },
          "resource": {
            "name": Random.string( 5, 10 ),
          },
          "bandwidth": Random.integer(0,1000),
          "tech_solution_resource_detail_code": "3417:4775",
          "resource_type": {
            "name": Random.cword(5, 7),
            "id": Random.integer(100,1000)
          },
          "count": Random.integer(100,1000),
          "quoted_onetime_amount": Random.integer(100,1000),
          "tech_solution": {
            "name": Random.string( 5, 10 ),
            "id": Random.integer(1,1000)
          },
          "quoted_onetime_amount_rmb": Random.integer(1,1000) ,
          "lowest_price_rmb": Random.integer(1,1000) ,
          "sell_type": {
            "id": Random.integer(1,1000),
            "name|1":  [
              "客户购买",
              "客户租赁",
            ],
          },
          "list_price_rmb": Random.integer(100,1000),
          "quoted_rent_amount": Random.integer(100,1000),
          "quoted_rent_amount_rmb": Random.integer(100,1000)
        },
      ],
      "rent_total_amount": Random.integer(1,1000) ,
      "quoted_currency": {
        "name|1":  [
          "人民币",
          "美元",
          "港币"
        ],
        "id": Random.integer(1,1000)
      },
      "tech_solution": {
        "name": Random.cword(5, 7),
        "id": Random.integer(1,1000)
      },
      "payment_cycle": {
        "name": Random.cword(5, 7),
        "id": Random.integer(1,1000)
      },
      "site": {
        "name": Random.cword(5, 7),
        "id": Random.integer(1,1000)
      },
      "maintain_price_rmb": Random.integer(1,1000) ,
      "rent_total_amount_rmb": Random.integer(1,1000) ,
      "channel_rent_amount": Random.integer(1,1000) ,
      "channel_onetime_amount": Random.integer(1,1000)
    }
  ]
})